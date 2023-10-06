const styled = require('styled-components')

async function generateNFTCard(metadata) {
    const { description, external_url, image, name, attributes } = metadata


    return (
        "<div>" +
        `<p>${description}</p>` +
        "<img src=" + `"` + `${image}` + `"` + "width='500' height='600'> " +
        "<div>"
    )
}


module.exports = { generateNFTCard }