const hre = require("hardhat");

const VOTING_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const TALLY_VERIFIER_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

async function getContract(signerIndex = 0) {
  const signers = await hre.ethers.getSigners();
  const signer = signers[signerIndex];

  const votingAbi =
    require("../artifacts/contracts/E_Voting.sol/E_Voting.json").abi;

  const tallyVerifierAbi =
    require("../artifacts/contracts/TallyVerifier.sol/TallyVerifierOnChain.json").abi;

  const votingContract = new hre.ethers.Contract(
    VOTING_ADDRESS,
    votingAbi,
    signer,
  );

  const tallyVerifierContract = new hre.ethers.Contract(
    TALLY_VERIFIER_ADDRESS,
    tallyVerifierAbi,
    signer,
  );

  return {
    signer,
    votingContract,
    tallyVerifierContract,
  };
}

module.exports = { getContract };
