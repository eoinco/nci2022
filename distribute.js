let fs = require("fs");
let contract = require("./contract.js");
// read in a file of accounts
// count the number of accounts
// get the remaining supply belonging to token owner
// divide 5% of remaining supply between the accounts
// collect tea and medals

const doDistro = async() => {
    
    let distributionAddresses = fs.readFileSync("./accounts.txt", "utf8").split(",");

    console.log(`number of distribution addresses are ${distributionAddresses.length}`);

    let symbol = await contract.getSymbol();
    console.log(`token symbol is ${symbol}`);
}

doDistro();