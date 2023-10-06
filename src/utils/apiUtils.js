const { Web3 } = require('web3');
const axios = require('axios');
const contractABI = require("../abis/testAbi.json")

const rpcUrl = 'https://eth-sepolia.g.alchemy.com/v2/214E_ZmcohFigUQj69CdLE68ltwoeU5s'
const web3 = new Web3(rpcUrl)


// GETS TOKENURI FROM SMARTCONTRACT
async function getTokenURI(contractID, tokenID) {
    try {
        // Create a contract instance using the ABI and contract address
        const contract = new web3.eth.Contract(contractABI, contractID);

        // Call the tokenURI function on the contract

        const tokenUri = await contract.methods.tokenURI(tokenID).call();


        // Fetch the tokenURI content using Axios or any HTTP library

        return tokenUri;
    } catch (error) {
        console.log("Error while making API CALL ,", error)
        throw error
    }
}


// GETS METADATA FOR SPECIFIC NFT USING TOKENURI 
async function getMetaDataFromCID(tokenURI) {
    const GATEWAY_URL = 'https://gateway.pinata.cloud'
    try {

        const response = await axios.get(`${GATEWAY_URL}/ipfs/${tokenURI}`)
        return response.data
    } catch (error) {
        console.log("Error => ", error)
        return false
    }
}

module.exports = { getTokenURI, getMetaDataFromCID };

