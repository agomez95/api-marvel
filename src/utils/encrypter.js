const md5 = require("crypto-js/md5");

module.exports = (publicKey, privateKey) => {
    const ts = Date.now().toString();
    const merge = ts + privateKey + publicKey;
    const hash = md5(merge);
    return hash.toString();
};