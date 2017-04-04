'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by wjabri on 24/03/2017.
 */
var BerlinClock = function () {
    function BerlinClock() {
        _classCallCheck(this, BerlinClock);
    }

    _createClass(BerlinClock, [{
        key: 'convertToBerlinTime',
        value: function convertToBerlinTime(time) {
            var parts = time.split(':');
            console.log(parts[0]);
            var results = "";
            return this.getSeconds('');
            // results.concat(getSeconds(parts[2]))
            //    .concat(getTopHours(parts[0])
            //        .concat(getBottomHours(parts[0]))
            //        .concat(getTopMinutes(parts[1]))
            //        .concat(getBottomMinutes(parts[1]));
        }
    }, {
        key: 'getSeconds',
        value: function getSeconds(number) {
            if (number % 2 == 0) return "Y";else return "O";
        }
    }, {
        key: 'getTopHours',
        value: function getTopHours(number) {
            return getOnOff(4, getTopNumberOfOnSigns(number));
        }
    }, {
        key: 'getBottomHours',
        value: function getBottomHours(number) {
            return getOnOff(4, number % 5);
        }
    }, {
        key: 'getTopMinutes',
        value: function getTopMinutes(number) {
            return getOnOff(11, getTopNumberOfOnSigns(number), "Y").replaceAll("YYY", "YYR");
        }
    }, {
        key: 'getBottomMinutes',
        value: function getBottomMinutes(number) {
            return getOnOff(4, number % 5, "Y");
        }
    }, {
        key: 'getOnOff',
        value: function (_getOnOff) {
            function getOnOff(_x, _x2) {
                return _getOnOff.apply(this, arguments);
            }

            getOnOff.toString = function () {
                return _getOnOff.toString();
            };

            return getOnOff;
        }(function (lamps, onSigns) {
            return getOnOff(lamps, onSigns, "R");
        })
    }, {
        key: 'getOnOff',
        value: function getOnOff(lamps, onSigns, onSign) {
            var out = "";
            for (var i = 0; i < onSigns; i++) {
                out += onSign;
            }
            for (var i = 0; i < lamps - onSigns; i++) {
                out += "O";
            }
            return out;
        }
    }, {
        key: 'getTopNumberOfOnSigns',
        value: function getTopNumberOfOnSigns(number) {
            return (number - number % 5) / 5;
        }
    }]);

    return BerlinClock;
}();

exports.default = BerlinClock;