const Configstore= require('configstore');
const pkg = require('../package.json');



class KeyManager{
constructor() {
    this.conf = new Configstore(pkg.name);
}
setKey (key) {
    this.conf.set('apikey', key);
    return key;
}
getKey () {
    const key = this.conf.get('apikey');
    if (!key){
        throw new Error ("No API found, Please get One")
    }
  return key;
  }

  deleteKey () {
    const key = this.conf.get('apikey');
    if (!key){
        throw new Error ("No API found, Please get One")
    }
  this.conf.delete('apikey');
  return;
  }
}
module.exports = KeyManager;

