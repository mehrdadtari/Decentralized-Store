pragma solidity ^0.4.17;

contract StoreFactory {
    address[] public deployedStores;
    
    function createStore() public {
        address newStore = new Store(msg.sender);
        /*
            this syntax creates a new isntance of Campaign contract. We should give msg.sender as the input.
            Otherwise, the msg.sender in Campaign contract will always be the address of createCampaign contract.
        */
        deployedStores.push(newStore);
    }
    
    function getDeployedStores() public view returns(address[]) {
        return deployedStores;
    }
}

contract Store {
    struct Commodity {
        string description;
        uint value;
        address seller;
        bool available;
        uint reviewScore;
        uint totalReviews;
        mapping(address => bool) buyers;
        mapping(address => bool) reviews;
    }
    
    Commodity[] public commodities;
    address public manager;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Store(address creator) public {
        manager = creator;
    }
    
    function buy(uint index) public payable {
        Commodity storage commodity = commodities[index];
        
        require(msg.value == commodity.value);
        require(commodity.available);
        
        commodity.seller.transfer(msg.value);
        commodity.buyers[msg.sender] = true;
    }
    
    function createCommodity(string description, uint value, address seller) public restricted {
        Commodity memory newCommodity = Commodity({
            description: description,
            value: value,
            seller: seller,
            available: true,
            reviewScore: 5,
            totalReviews: 0
        });
        
        commodities.push(newCommodity);
    }
    
    function reviewItem(uint index, uint review) public returns (uint) {
        Commodity storage commodity = commodities[index];
        
        require(commodity.buyers[msg.sender]);//check whether the person is a buyer.
        require(!commodity.reviews[msg.sender]);//check wether the person has already reviewed or not
        require(review <=5 && review > 0 && (review % 1 == 0));
        commodity.reviews[msg.sender] = true;// Add the person to list of reviewers.
        commodity.totalReviews++;
        commodity.reviewScore = (commodity.reviewScore*commodity.totalReviews + review) / (commodity.totalReviews + 1);
        return commodity.reviewScore;
    }
    
    function commodityAvailable(uint index, bool available) public restricted {
        commodities[index].available = available;
    }
    
}