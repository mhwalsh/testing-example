var expect  = require('chai').expect;
var request = require('request');

describe('Color Code Converter API', function() {

  describe('Hex to RGB conversion', function() {
    var url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it('returns status 200', function(done) {
      request(url, function(error, response, body) {
        expect(response.statusCode).to.equal(500);
        done();
      });
    });

    it('returns the color in RGB', function(done) {
      request(url, function(error, response, body) {
        expect(body).to.equal('[0,255,0]');
        done();
      });
    });
  });
});
