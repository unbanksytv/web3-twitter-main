module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  log("--------------------------");
  const tweetDeployer = await deploy("TweetContract", {
    from: deployer,
    log: true,
  });
  log(`You have deployed your contract to ${tweetDeployer.address}`);

  const TweetContractFactory = await ethers.getContractFactory("TweetContract");
  const accounts = await hre.ethers.getSigners();
  const signer = accounts[0];
  const tweetContract = new ethers.Contract(
    tweetDeployer.address,
    TweetContractFactory.interface,
    signer
  );

  let txn;
  txn = await tweetContract.addTweet("Hello, how are you?", false);
  await txn.wait(1);
  txn = await tweetContract.addTweet("Do you love solidity?", false);
  txn = await tweetContract.addTweet("Ethereum or Solana", false);

  log(`You've just send your first tweet!`);
  const getTweets = await tweetContract.getAllTweets();
  log(`Get all tweets ${getTweets}`);
};
