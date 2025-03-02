# NFT-minting-on-locally-running-blockchain

This project allows users to mint NFTs (Non-Fungible Tokens) on a locally running blockchain using Hardhat and interact with them via MetaMask. The NFTs contain metadata hosted on a local server.

---

## 🚀 Features
- Deploy an NFT smart contract on a local Hardhat blockchain.
- Mint NFTs with metadata.
- Interact with the NFT contract using JavaScript and Ethers.js.
- View NFTs in MetaMask.

---

## 📦 Setup and Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/ericantony195/NFT-minting-on-locally-running-blockchain.git
cd NFT-minting-on-locally-running-blockchain
```

### 2️⃣ Install Dependencies
Make sure you have **Node.js** installed. Then, install the required dependencies:
```sh
npm install
```

### 3️⃣ Start Hardhat Local Blockchain
Run the following command to start a local blockchain:
```sh
npx hardhat node
```
This will start a local Ethereum blockchain on **localhost:8545** and provide test accounts.

### 4️⃣ Deploy the Smart Contract
Open a new terminal (keep Hardhat running) and deploy the contract:
```sh
npx hardhat run scripts/deploy.js --network localhost
```
This will deploy the contract on the local Hardhat blockchain.

### 5️⃣ Mint an NFT
Use the Hardhat console or a script to mint an NFT. Open a terminal and run:
```sh
npx hardhat console --network localhost
```
Then execute:
```js
const certificateNFT = await ethers.getContractAt("CertificateNFT", "<DEPLOYED_CONTRACT_ADDRESS>");
await certificateNFT.mintCertificate("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "http://localhost:3000/metadata.json");
```
Replace `"<DEPLOYED_CONTRACT_ADDRESS>"` with the contract address printed after deployment.

---

## 🔍 Viewing Your NFT in MetaMask

### 1️⃣ Connect MetaMask to Local Blockchain
1. Open **MetaMask**.
2. Click on your profile icon and go to **Settings > Networks > Add a network manually**.
3. Enter the following details:
   - **Network Name:** Hardhat Localhost
   - **RPC URL:** `http://127.0.0.1:8545`
   - **Chain ID:** `31337`
   - **Currency Symbol:** ETH
   - **Block Explorer URL:** (leave empty)
4. Save the network and switch to it.

### 2️⃣ Import the Deployed Contract Token
1. In MetaMask, go to **Assets > Import Tokens**.
2. Enter the **contract address** from deployment.
3. Click **Add Custom Token** and then **Import**.
4. Your NFT should now be visible in MetaMask.

---

## 🎨 Viewing NFT Metadata
Your NFT metadata is stored at `http://localhost:3000/metadata.json`. You can start a local server to serve metadata:
```sh
npx http-server . -p 3000
```
Then visit `http://localhost:3000/metadata.json` in your browser to see the metadata.

---

## 📜 License
This project is licensed under the MIT License.

---

## 💡 Need Help?
If you run into issues, feel free to open an issue or contact me. Happy minting! 🎉

![image](https://github.com/user-attachments/assets/aa6f3f2a-f037-4238-874c-ddc9440c65e6)


![image](https://github.com/user-attachments/assets/d0ebc0fe-fa64-4ee8-b27b-ff0dd48da009)



u can also start your URI server using python

![image](https://github.com/user-attachments/assets/0085298c-92fe-42e7-9037-e0ba4fff341e)

![image](https://github.com/user-attachments/assets/270f790f-7034-46f7-9f57-bfb8c2a392ff)
