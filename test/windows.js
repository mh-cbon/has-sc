var should = require('should')

describe('hasSc', function() {
  it('returns true on windows', function(done) {
    require('../index.js')(function (err, scPath) {
      (err===undefined).should.be.true;
      (scPath).should.match(/sc/);
      done();
    })
  });
});
