pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERCTokenTransfer {

    ERC20 token;

    constructor(ERC20 _token) public {
        token = _token;
    }
  
   function getBalanceToken(address _address) public view returns(uint256){ 
       return token.balanceOf(_address);// balancdOf function is already declared in ERC20 token function
   }
   
    function ercTransfer(address from,address to, uint256 value) public returns (bool) {
        token.transferFrom(from,to,value);
        return true;
    }
    
    function tokenApprove(address _spender, uint256 _value) public returns (bool){
        token.approve(_spender,_value);
        return true;
    }
    
    function tokenAllowance(address owner, address spender) public view returns(uint256) {
        return token.allowance(owner, spender);
    }
    


   /* Similar to the above function you can directly use transfer, approve, transferFrom , etc function and 
        use the token in your custom contract */

}