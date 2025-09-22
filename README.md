# Cert-App: Your First Smart Contract

Cert-App is a beginner-friendly Ethereum DApp that allows you to issue and store certificates on the blockchain using Hardhat and Ignition.

To get started, create a new project folder and install the necessary dependencies:

```bash
mkdir cert-dapp && cd cert-dapp
npm init -y
npm install -D hardhat @nomicfoundation/hardhat-toolbox

Initialize Hardhat by running:
npx hardhat --init
Choose “Create an empty hardhat.config.js”. Then edit hardhat.config.js to set up the network and Solidity version:
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
  },
  solidity: "0.8.20",
};

Compile the project using:

npx hardhat compile


This will generate the artifacts folder containing the ABI and bytecode. To test locally, start a Hardhat node:

npx hardhat node


This will provide 20 test accounts preloaded with ETH.

Next, create a deployment script using Ignition. Make the folder ignition/modules and inside it create a module file (e.g., Cert.js) to reference your contract. Deploy the contract with:

npx hardhat ignition deploy ignition/modules/Cert.js


Or explicitly on the localhost network:

npx hardhat ignition deploy ignition/modules/Cert.js --network localhost


After deployment, you will see the deployed address and confirmation in the terminal. The ABI can be found in ignition/deployments/chain-31337/artifacts and the deployed contract address in ignition/deployments/chain-31337/deployed_addresses.json.

You can now interact with the deployed contract using ethers.js scripts. Update your interaction script (e.g., scripts/interact.js) with the deployed contract address and contract name. For example:

const contractAddress = "<deployed_contract_address>";
const contractName = "Cert";


Run the interaction script on a network like Sepolia:

npx hardhat run scripts/interact.js --network sepolia


This project demonstrates setting up a Hardhat environment, deploying a smart contract using Ignition, and interacting with it using ethers.js. It is a complete, hands-on introduction to Ethereum development and local blockchain testing.

---

