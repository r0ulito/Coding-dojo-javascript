let palindromeChecker = require('../main').palindromeChecker;
let expect = require('chai').expect;


describe('Palindrome Checker', function() {
    context('With an empty string', function() {
        it('should return true', function() {
            expect(palindromeChecker('')).to.be.true
        });
    });

    context('With a common word', function() {
        it('should returns false', function() {
            expect(palindromeChecker('Hello!')).to.be.false
        });
    });

    context('With a short palidrome', function() {
        it('should returns true', function() {
            expect(palindromeChecker('kayak')).to.be.true
        });
    });

    context('With a long palidrome and punctuation', function() {
        it('should returns true', function() {
            expect(palindromeChecker('Et Luc colporte trop l\'occulte')).to.be.true
        });
    });
    
});
