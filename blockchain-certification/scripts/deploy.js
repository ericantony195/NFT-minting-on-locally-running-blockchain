const hre = require("hardhat");

async function main() {
    const CertificateNFT = await hre.ethers.getContractFactory("CertificateNFT");
    const certificateNFT = await CertificateNFT.deploy();
    await certificateNFT.waitForDeployment(); // ✅ Correct way in Hardhat v3+
    
    console.log("Contract deployed to:", await certificateNFT.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
