module.exports = {
    palindromeChecker: function(s) {
        const regex = /[^a-zA-Z]/gi;
        let stringReverser = str => str.split('').reverse().join('');
        str = stringReverser(s);        
        s = s.replace(regex, '').toLowerCase();
        str = str.replace(regex, '').toLowerCase();
        return str === s
        
    }
}