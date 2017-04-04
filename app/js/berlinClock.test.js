/**
 * Created by wjabri on 24/03/2017.
 */

import BerlinClock from './berlinClock.js';
describe('Berlin Clock TDD', function () {

    let berlinClock = new BerlinClock();

    it('should convert time to berlin Clock', () => {
        let convertToBerlinTime = berlinClock.convertToBerlinTime("13:17:01");
        expect(convertToBerlinTime).toEqual("O,RROO,RRRO,YYROOOOOOOO,YYOO");
    });

    it('should blinck on off Yellow lamp eEvery two seconds', () => {
          expect(berlinClock.getSeconds(0)).toEqual("Y");
          expect(berlinClock.getSeconds(7)).toEqual("O");
          expect(berlinClock.getSeconds(19)).toEqual("O");
    });

    it('should light red topHourLamp every 5 hours ', () => {
          expect(berlinClock.getTopHours(10)).toEqual("RROO");
          expect(berlinClock.getTopHours(5)).toEqual("ROOO");
          expect(berlinClock.getTopHours(20)).toEqual("RRRR");
    });

    it('should light red BottomHourLamp every  hour ', () => {
          expect(berlinClock.getBottomHours(10)).toEqual("OOOO");
          expect(berlinClock.getBottomHours(6)).toEqual("ROOO");
          expect(berlinClock.getBottomHours(24)).toEqual("RRRR");
    });

    it('should light yellow topMinuteLamp every  5 minute ', () => {
          expect(berlinClock.getTopMinutes(10)).toEqual("YYOOOOOOOOO");
          expect(berlinClock.getTopMinutes(17)).toEqual("YYROOOOOOOO");
          expect(berlinClock.getTopMinutes(0)).toEqual("OOOOOOOOOOO");
    });


    it('should light yellow BottomMinuteLamp every  1 minute ', () => {
          expect(berlinClock.getBottomMinutes(4)).toEqual("YYYY");
          expect(berlinClock.getBottomMinutes(0)).toEqual("OOOO");
          expect(berlinClock.getBottomMinutes(13)).toEqual("YYYO");
    });


});