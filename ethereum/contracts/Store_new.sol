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
        uint numSoldProduct;
        mapping(address => bool) buyers;
        mapping(address => bool) reviews;
    }
    
    //product[] public products;
    address public manager;
    uint public numProducts;
    mapping (uint => Product) public products;
    string public storeName;
    uint public  storeScore;
    uint public numStoreReviews;
    string[] public storeWrittenReviews;
    mapping(address => bool) storeShopper;
    mapping(address => bool) storeReviews;
    string public bestSeller;
    uint public bestSellerQuantity;
    
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(string memory name, address creator) {
        storeName = name;
        manager = creator;
    }
    
    function buy(uint index) public payable {
        Product storage product = products[index];
        
        require(msg.value == product.price);
        require(product.available);
        
        payable(product.seller).transfer(msg.value);
        product.buyers[msg.sender] = true;
        storeShopper[msg.sender] = true;
        product.numSoldProduct++;
        if(product.numSoldProduct>bestSellerQuantity){
            bestSeller = product.description;
            bestSellerQuantity = product.numSoldProduct;
        }
    }
    
    function createProduct(string memory description, uint price, address seller) public restricted {
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
        //products.push(newProduct);
    }
    
    function reviewProduct(uint index, uint review, string memory opinion) public returns (uint, string[] memory) {
        Product storage product = products[index];
        
        require(product.buyers[msg.sender]);//check whether the person is a buyer.
        require(!product.reviews[msg.sender]);//check wether the person has already reviewed or not
        require(review <=5 && review > 0 && (review % 1 == 0));
        product.reviews[msg.sender] = true;// Add the person to list of reviewers.
        product.totalReviews++;
        product.reviewScore = (product.reviewScore*product.totalReviews + review) / (product.totalReviews + 1);
        product.writtenReviews.push(opinion);
        return (product.reviewScore, product.writtenReviews);
    }
    
    function reviewStore(uint review, string memory opinion) public returns (uint, string[] memory) {
        require(storeShopper[msg.sender]);//check whether the person is a buyer.
        require(!storeReviews[msg.sender]);//check wether the person has already reviewed or not
        require(review <=5 && review > 0 && (review % 1 == 0));
        storeReviews[msg.sender] = true;// Add the person to list of reviewers.
        numStoreReviews++;
        storeScore = (storeScore*(numStoreReviews -1) + review) / (numStoreReviews);
        storeWrittenReviews.push(opinion);
        return (storeScore, storeWrittenReviews);
    }
    
    function productAvailable(uint index, bool available) public restricted {
        products[index].available = available;
    }
    
    function getStoreSummary() public view returns (
        uint, address, string memory, uint, string memory, uint, uint
        ) {
        return (numProducts, manager, bestSeller, bestSellerQuantity, storeName, storeScore, numStoreReviews);
    }
    
    function getProductsReviews(uint index) public view returns (string[] memory) {
        return products[index].writtenReviews;
    }

    function getProductsCount()  public view returns (uint) {
        return numProducts;
    }
}