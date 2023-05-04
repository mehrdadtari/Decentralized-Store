# Decentralized Online Store
A decentralized store (BitMall) with functionalities similar to Amazon. Sellers can open a store in BitMall in a decentralized fashion by paying a 
membership fee. Each store can only be accessed by the managers which includes the wallet address of the person who created the store and people 
who were added by existing managers. Existing managers of a store can create a new manager or revoke existing managers. Managers can also update
the details about a product ore create a new product. Managers can also change the store name.

A user in BitMall can order a product from different stores and leave a review for the product if he has purchased it. He can also see the reviews
for different products.

## Running the code
1. Installing Metamask and add "Sepolia testnet" to it. You should deposit some ETH to it through a Sepolia faucet. 
2. Deploying the "Store Factory" smart contract in Remix. You can find it under ethereum/contracts. You should copy "store.sol" file to Remix. Then, compile and deploy "Store Factory" smart contract from it. You should deploy it to Sepolia testnet. 
3. Copy the address where you have deployed "Store Factory" smart contract and paste it in "factory.js" under ethereum. It is recommended to replace "Store.json" and "StoreFactory.json" files under ethereum/build with the built files with the same name by Remix.
4. Installing dependencies by running "npm i" in terminal under main directory.
5. Running the server by "npm run dev" command in terminal.
6. Accessing server in the browser using "http://localhost:3000/".
7. Connecting your metamask account to your lcoalhost.
8. You can access admin panel through "http://localhost:3000/stores/:address/nimda" where ":address" indicates the address where a specific store is deployed to.
