import { createCoin } from "@zoralabs/coins-sdk";
import { Hex, createWalletClient, createPublicClient, http, Address } from "viem";
import { base } from "viem/chains";
 
// Set up viem clients
const publicClient = createPublicClient({
  chain: base,
  transport: http("<RPC_URL>"),
});
 
const walletClient = createWalletClient({
  account: "0x<YOUR_ACCOUNT>" as Hex,
  chain: base,
  transport: http("<RPC_URL>"),
});
 
// Define coin parameters
const coinParams = {
  name: "My Awesome Coin",
  symbol: "MAC",
  uri: "ipfs://bafybeigoxzqzbnxsn35vq7lls3ljxdcwjafxvbvkivprsodzrptpiguysy",
  payoutRecipient: "0xYourAddress" as Address,
  platformReferrer: "0xOptionalPlatformReferrerAddress" as Address, // Optional
  initialPurchaseWei: 0n, // Optional: Initial amount to purchase in Wei
};

// draft of custom params
const customParams = {
      "name": "momma is shantells just untill",
      "symbol": "MOMMA",
      "description": "help us save shantells just until, a soul food restaurant run by momma shantell williams in sanford, florida. it has received over 100k fiat of ridiculous fines & is in foreclosure. 100% of transactions fees are going to those debts.",
      "image": "ipfs://bafybeiafm63yh7myx34kv7u7qwo7ss5rpkku77v5r3vb7feyaji7hdx4u4",
      "animation_url": "ipfs://bafybeieut6xhgvkhlaxogjhbcffnza754nohgobzmljv3ly7idba6rmkqm",
      "content": {
        "mime": "video/mp4",
        "uri": "ipfs://bafybeieut6xhgvkhlaxogjhbcffnza754nohgobzmljv3ly7idba6rmkqm"
      },
      "properties": {
        "category": "social"
      }
};
 
// Create the coin
async function createMyCoin() {
  try {
    const result = await createCoin(coinParams, walletClient, publicClient);
    
    console.log("Transaction hash:", result.hash);
    console.log("Coin address:", result.address);
    console.log("Deployment details:", result.deployment);
    
    return result;
  } catch (error) {
    console.error("Error creating coin:", error);
    throw error;
  }
}