'use strict';

var _berlinClock = require('./berlinClock.js');

var _berlinClock2 = _interopRequireDefault(_berlinClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ES6 Foo', function () {
    it('should add two numbers', function () {
        var berlinClock = new _berlinClock2.default();
        var convertToBerlinTime = berlinClock.convertToBerlinTime("13:17:01");
        expect(convertToBerlinTime).toBe("O", "RROO", "RRRO", "YYROOOOOOOO", "YYOO");
    });
}); /**
     * Created by wjabri on 24/03/2017.
     */