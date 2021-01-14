let palimdromeChecker = require('../main').palimdromeChecker;
let expect = require('chai').expect;


describe('Palindrome Checker', function() {
    context('With an empty string', function() {
        it('should return true', function() {
            expect(palimdromeChecker('')).to.be.true
        });
    });

    context('With a common word', function() {
        it('should returns false', function() {
            expect(palimdromeChecker('Hello!')).to.be.false
        });
    });

    context('With a short palidrome', function() {
        it('should returns true', function() {
            expect(palimdromeChecker('kayak')).to.be.true
        });
    });

    context('With a long palidrome and punctuation', function() {
        it('should returns true', function() {
            expect(palimdromeChecker('Et Luc colporte trop l\'occulte')).to.be.true
        });
    });
    
});
