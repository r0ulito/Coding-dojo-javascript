module.exports = {
    falsyBouncer: function(arr) {
        if(arguments.length == 0) return []
        return arr.filter(Boolean)
    }
}