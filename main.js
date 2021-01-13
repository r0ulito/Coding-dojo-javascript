module.exports = {
    arraySum: function(arr) {
        if(arguments.length == 0) return 0;
        let numOrChar = n => isNaN(n) ? 0 : parseInt(n);        
        return arr.reduce((a, b) => numOrChar(a) + numOrChar(b));
    },

    arrayAverage: function(arr) {
        if(arguments.length == 0) return 0;
        const total = module.exports.arraySum(arr);
        arr.forEach((e, i) => isNaN(e) && arr.splice(i, 1));
        return total / arr.length;
    },

    arrayMax: function(arr) {
        if(arguments.length == 0) return 0;
        let numOrChar = n => isNaN(n) ? false : parseInt(n);
        return arr.reduce((a, b) => Math.max(numOrChar(a), numOrChar(b)));
    },

    arrayMin: function(arr) {
        if(arguments.length == 0) return 0;
        arr = arr.filter((i) => !isNaN(i));
        return arr.length === 0 ? 0 : Math.min(...arr);
    }
 };