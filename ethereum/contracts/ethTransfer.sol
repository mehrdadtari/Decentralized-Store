pragma solidity >=0.7.0 <0.9.0;

contract Ether {
    
    fallback() external payable {}
    
    function sendViaCall(address payable _to) public payable {
      (bool sent, bytes memory data)= _to.call{value:msg.value}("");
       require(sent,'failed to send ether');
    }
    
    function contractBalance() public view returns (uint256){
        return address(this).balance;
    }
    
    function withdraw(address payable _to,uint256 _amount) public payable{
        _to.transfer(_amount);
    }
    
    function walletBalance(address addr)public view returns (uint256){
        return address(addr).balance;
    }
    
}                                                                                                                                                                                                                          