//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;
//1 ether: 1000000000000000000
contract StoreFactory {
    address[] public deployedStores;
    
    function createStore(string memory name) public {
        Store newStore = new Store(name, msg.sender);
        deployedStores.push(address(newStore));
    }
    
    function getDeployedStores() public view returns(address[] memory) {
        return deployedStores;
    }
}

contract Store {
    struct Product {
        string description;
        uint price;
        address seller;
        bool available;
        uint reviewScore;
        uint totalReviews;
        string[] writtenReviews;
        address[] reviewers;
        uint[] ratings;
        uint numSoldProduct;
        uint availableInventory;
        mapping(address => bool) buyers;
        mapping(address => bool) reviews;
    }
    
    //product[] public products;
    mapping (address => bool) public managers;
    address public storeOwner;
    uint public numProducts;
    mapping (uint => Product) public products;
    string public storeName;
    uint public  storeScore;
    uint public numStoreReviews;
    string[] public storeWrittenReviews;
    address[] public storeReviewers;
    uint[] public storeRatings;
    mapping(address => bool) storeShopper;
    mapping(address => bool) storeReviews;
    string public bestSeller;
    uint public bestSellerQuantity;
    
    
    modifier restricted() {
        require(managers[msg.sender]);
        _;
    }
    
    constructor(string memory name, address creator) {
        storeName = name;
        managers[creator] = true;
        storeOwner = creator;
    }
    
    function buy(uint index) public payable {
        Product storage product = products[index];
        
        require(msg.value == product.price);
        require(product.available);
        require(product.availableInventory > 0);
        
        payable(product.seller).transfer(msg.value);
        product.buyers[msg.sender] = true;
        storeShopper[msg.sender] = true;
        product.numSoldProduct++;
        product.availableInventory--;
        if(product.numSoldProduct>bestSellerQuantity){
            bestSeller = product.description;
            bestSellerQuantity = product.numSoldProduct;
        }
    }
    
    function createProduct(string memory description, uint price, address seller, uint inventory) public restricted {
        /*
        product memory newProduct = product({
            description: description,
            value: value,
            seller: seller,
            available: true,
            reviewScore: 5,
            totalReviews: 0
        });
        */
        Product storage newProduct = products[numProducts++];
        newProduct.description = description;
        newProduct.price = price;
        newProduct.seller = seller;
        newProduct.available = true;
        newProduct.reviewScore = 5;
        newProduct.totalReviews = 0;
        newProduct.numSoldProduct = 0;
        newProduct.availableInventory = inventory;
        //products.push(newProduct);
    }
    
    function reviewProduct(uint index, uint review, string memory opinion) public returns (uint, string[] memory, address[] memory, uint[] memory) {
        Product storage product = products[index];
        
        require(product.buyers[msg.sender]);//check whether the person is a buyer.
        require(!product.reviews[msg.sender]);//check wether the person has already reviewed or not
        require(review <=5 && review > 0 && (review % 1 == 0));
        product.reviews[msg.sender] = true;// Add the person to list of reviewers.
        product.totalReviews++;
        product.reviewScore = (product.reviewScore*product.totalReviews + review) / (product.totalReviews + 1);
        product.writtenReviews.push(opinion);
        product.reviewers.push(msg.sender);
        product.ratings.push(review);
        return (product.reviewScore, product.writtenReviews, product.reviewers, product.ratings);
    }
    
    function reviewStore(uint review, string memory opinion) public returns (uint, string[] memory, address[] memory, uint[] memory) {
        require(storeShopper[msg.sender]);//check whether the person is a buyer.
        require(!storeReviews[msg.sender]);//check wether the person has already reviewed or not
        require(review <=5 && review > 0 && (review % 1 == 0));
        storeReviews[msg.sender] = true;// Add the person to list of reviewers.
        numStoreReviews++;
        storeScore = (storeScore*(numStoreReviews -1) + review) / (numStoreReviews);
        storeWrittenReviews.push(opinion);
        storeReviewers.push(msg.sender);
        storeRatings.push(review);
        return (storeScore, storeWrittenReviews, storeReviewers, storeRatings);
    }
    
    function addManager(address newManager) public restricted {
        managers[newManager] = true;
    }

    function deleteManager(address revokedManager) public restricted {
        require(revokedManager != storeOwner);
        managers[revokedManager] = false;
    }
    
    function productAvailable(uint index, bool available) public restricted {
        products[index].available = available;
        if(available == false){
            products[index].availableInventory = 0;
        }
    }
    
    function updateInventory(uint index, uint inventory) public restricted {
        products[index].availableInventory = inventory;
    }
    
    function updateProductName(uint index, string memory newProductName) public restricted {
        products[index].description = newProductName;
    }
    
    function updateProductSeller(uint index, address newSeller) public restricted {
        products[index].seller = newSeller;
    }

    function updateProductPrice(uint index, uint newPrice) public restricted {
        products[index].price = newPrice;
    }

    function updateProduct(uint index, string memory newProductName, address newSeller, uint newPrice, uint inventory) public restricted {
        products[index].description = newProductName;
        products[index].seller = newSeller;
        products[index].price = newPrice;
        products[index].availableInventory = inventory;
    }

    function changeStoreName(string memory newName) public restricted {
        storeName = newName;
    }
    
    function getStoreSummary() public view returns (
        uint, string memory, uint, string memory, uint, uint
        ) {
        return (numProducts, bestSeller, bestSellerQuantity, storeName, storeScore, numStoreReviews);
    }
    
    function getProductsReviews(uint index) public view returns (string[] memory, address[] memory, uint[] memory) {
        return (products[index].writtenReviews, products[index].reviewers, products[index].ratings);
    }
    
    function getStoreReviews() public view returns (string[] memory, address[] memory, uint[] memory) {
        return (storeWrittenReviews, storeReviewers, storeRatings);
    }

    function getProductsCount()  public view returns (uint) {
        return numProducts;
    }
}