var should = require('should')

describe('hasSc', function() {
  it('returns false on not-windows os', function(done) {
    require('../index.js')(function (err, hasSc) {
      err.should.match(/not windows/);
      (hasSc===undefined).should.eql(true);
      done();
    })
  });
});
