const express = require('express')
const router = express.Router();
const { getTokenURI, getMetaDataFromCID } = require('../utils/apiUtils.js');
const { generateNFTCard } = require("../utils/htmlTemplates.js")


router.get('/', async (req, res) => {

    const { contractId, tokenId } = req.query;

    // Check if both contractId and tokenId are provided
    if (!contractId || !tokenId) {
        return res.status(400).json({ error: 'Both contractId and tokenId are required.' });
    }


    try {
        const tokenURI = await getTokenURI(contractId, tokenId);
        console.log("TOKEN_URI+>>>", tokenURI)
        const metaData = await getMetaDataFromCID(tokenURI)
        const content = await generateNFTCard(metaData)
        res.status(200).send(content);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve tokenURI', msg: error });
    }
})





module.exports = router