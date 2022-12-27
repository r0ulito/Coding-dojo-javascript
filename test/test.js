let { arraySum, arrayAverage, arrayMax, arrayMin } = require('../main');
let expect = require('chai').expect

describe('arraySum()', function() {

    context('without arguments', function() {
        it('should return 0', function() {
            expect(arraySum()).to.equal(0);
        });
    });

    context('with numerics', function() {
        it('should return 15', function() {
            expect(arraySum([1, 2, 3, 4, 5])).to.equal(15);
        });
    });

    context('with only alphabetical characters', function() {
        it('should return 0', function() {
            expect(arraySum(['LEM', 'FIDEV'])).to.equal(0);
        });
    });

    context('with a mix between alphabetical and numeric', function() {
        it('should return 21', function() {
            expect(arraySum(['1', 2, 'toto', 5, 'https://www.google.fr', 3, '4', 'mocha and chai are the best', 6 ])).to.equal(21)
        });
    });
});

describe('arrayAverage()', function() {
    context('without arguments', function() {
        it('should return 0', function() {
            expect(arrayAverage()).to.equal(0);
        });
    });

    context('with numerics', function() {
        it('should return 3', function() {
            expect(arrayAverage([1, 2, 3, 4, 5])).to.equal(3);
        });
    });

    context('with only alphabetical characters', function() {
        it('should return 0', function() {
            expect(arrayAverage(['LEM', 'FIDEV'])).to.equal(0);
        });
    });

    context('with a mix between alphabetical and numeric', function() {
        it('should return 3.5', function() {
            expect(arrayAverage(['1', 2, 'toto', 5, 'https://www.google.fr', 3, '4', 'mocha and chai are the best', 6 ])).to.equal(3.5)
        });
    });
});

describe('arrayMax()', function() {
    context('without arguments', function() {
        it('should return 0', function() {
            expect(arrayMax()).to.equal(0);
        });
    });

    context('with numerics', function() {
        it('should return 5', function() {
            expect(arrayMax([1, 2, 3, 4, 5])).to.equal(5);
        });
    });

    context('with only alphabetical characters', function() {
        it('should return 0', function() {
            expect(arrayMax(['LEM', 'FIDEV'])).to.equal(0);
        });
    });

    context('with a mix between alphabetical and numeric', function() {
        it('should return 6', function() {
            expect(arrayMax(['1', 2, 'toto', 5, 'https://www.google.fr', 3, '4', 'mocha and chai are the best', 6 ])).to.equal(6)
        });
    });

});

describe('arrayMin()', function() {
    context('without arguments', function() {
        it('should return 0', function() {
            expect(arrayMin()).to.equal(0);
        });
    });

    context('with numerics', function() {
        it('should return 1', function() {
            expect(arrayMin([1, 2, 3, 4, 5])).to.equal(1);
        });
    });

    context('with only alphabetical characters', function() {
        it('should return 0', function() {
            expect(arrayMin(['LEM', 'FIDEV'])).to.equal(0);
        });
    });

    context('with a mix between alphabetical and numeric', function() {
        it('should return 2', function() {
            expect(arrayMin([2, 'toto', 5, 'https://www.google.fr', 3, '4', 'mocha and chai are the best', 6 ])).to.equal(2)
        });
    });

});


