module.exports = function(){

    const crypto = require('crypto');
    const alg = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    function encrypt (pass){
        let cipher = crypto.createCipheriv(alg, key, iv);
        let encrypted = cipher.update(pass);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

    var password = encrypt("GeeksforGeeks")
    console.log(password);

}