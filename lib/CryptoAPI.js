const axios = require ('axios');
const colors = require ('colors');


class CryptoAPI {
    constructor(apikey) {
      this.apikey = apikey;
      this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
                   
  }
  async getPriceData(coinOption, curOption) {
    try {
        const res = await axios.get(`${this.baseUrl}?key=${this.apikey}&ids=${coinOption}&
        convert=${curOption}`);
 let output =''; 
 res.data.foreach(coin => {
    output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} | Rank: ${coin.rank.blue}`;
 });
 return output;
} catch (err) {
    console.error(err);
}
  }
}
module.exports = CryptoAPI;