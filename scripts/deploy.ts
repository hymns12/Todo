import { ethers } from "hardhat";

async function main() {

  const Todos = await ethers.deployContract("Todo");

  await Todos.waitForDeployment();

  console.log(
    `SetterGetter ${Todos.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
