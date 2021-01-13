let falsyBouncer = require('../main').falsyBouncer;
let expect = require('chai').expect;

describe('falsyBouncer()', function() {
    context('without arguments', function() {
        it('should return []', function() {
            expect(falsyBouncer()).to.eql([]);
        });
    });

    context('with only alphabetical characters', function() {
        it('should return ["a", "b", "c"]', function() {
            expect(falsyBouncer(["a", "b", "c"])).to.eql(["a", "b", "c"]);
        });
    });

    context('with mixed values', function() {
        it('should return ["LEM", "FI DEV", "Mocha and chai are the best", 7, "2"]', function() {
            expect(falsyBouncer(["LEM", undefined, null, "FI DEV", false, NaN, "Mocha and chai are the best", 7, "", 0, "2"])).to.eql(["LEM", "FI DEV", "Mocha and chai are the best", 7, "2"])
        })
    })
})