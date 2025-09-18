const { ethers } = require("hardhat");

async function main() {
  // Replace with your deployed contract address
  const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

  // Match the Solidity contract name
  const Cert = await ethers.getContractFactory("Cert");
  const cert = Cert.attach(contractAddress);

  // -------- WRITE: Issue a certificate --------
  console.log("Issuing certificate...");
  const tx = await cert.issue(
    1, // certificate ID
    "Alice", // student name
    "Blockchain Basics", // course
    "A+", // grade
    "2025-09-18" // issue date
  );

  await tx.wait();
  console.log("Certificate issued in transaction:", tx.hash);

  // -------- READ: Retrieve certificate --------
  const certData = await cert.Certificates(1); // fetch certificate ID 1

  console.log(`\nCertificate ID 1:`);
  console.log("Name:", certData.name);
  console.log("Course:", certData.course);
  console.log("Grade:", certData.grade);
  console.log("Date:", certData.date);
}

// Run the script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error:", error);
    process.exit(1);
  });
