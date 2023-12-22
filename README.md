1) run npm install to install required dependencies.
2) replace the private key with the metamask account that you will be using to create the contract.
3) run npx hardhat compile to compile the smart contract.
   i)if issue persists create a blanbk project and run npx hardhat to create a new hardhat project.
   ii)replace the package.json & hardhat.config.json and copy the .env file as well.
   iii) run npm install to install the required dependencies.
   iv) replace the deploy.js and Voting.sol file for proper implementation of the dvoting.
   v) add the whole public, src, and test folder to the project directory.
4) run npx hardhat run --network volta scripts/deploy.js to create a contract address.
5) replace the contract address in .env file and deploy.js file
6) run npm start to run the server.


required links:
https://voltafaucet.energyweb.org/  (Volta faucet to refill test coins.)

