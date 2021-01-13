let stringReverser = require('../main').stringReverser;
let expect = require('chai').expect;


describe('String reverser', function() {
    context('Without a string', function() {
        it('should returns an empty string', function() {
            expect(stringReverser('')).to.be.equal('')
        });
    });

    context('Without spaces', function() {
        it('should returns !olleH', function() {
            expect(stringReverser('Hello!')).to.be.equal('! olleH')
        });
    });

    context('A long sentence', function() {
        it('should returns lasreveRgnirts noitcnof al à ecârg eénruoter esarhp eugnol sèrt enu sius ej ,ruojnoB', function() {
            expect(stringReverser('Bonjour, je suis une très longue phrase retournée grâce à la fonction stringReversal')).to.be.equal('lasreveRgnirts noitcnof al à ecârg eénruoter esarhp eugnol sèrt enu sius ej ,ruojnoB')
        });
    });
})
