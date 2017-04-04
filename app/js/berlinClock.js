/**
 * Created by wjabri on 24/03/2017.
 */
class BerlinClock {

    convertToBerlinTime(time) {
        let parts = time.split(":");
        let results = new Array();
        results.push(this.getSeconds(parts[2]));
        results.push(this.getTopHours(parts[0]));
        results.push(this.getBottomHours(parts[0]));
        results.push(this.getTopMinutes(parts[1]));
        results.push(this.getBottomMinutes(parts[1]));
        return results.toString();
    }


    getSeconds(number) {
        if (number % 2 == 0) return "Y";
        else return "O";
    }

    getTopHours(number) {
        return this.getOnOff(4, this.getTopNumberOfOnSigns(number), "R");
    }

    getBottomHours(number) {
        return this.getOnOff(4, number % 5, "R");
    }

    getTopMinutes(number) {
        return this.getOnOff(11, this.getTopNumberOfOnSigns(number), "Y").replace("YYY", "YYR");
    }

    getBottomMinutes(number) {
        return this.getOnOff(4, number % 5, "Y");
    }

    getOnOff(lamps, onSigns, onSign) {
        console.log(lamps)
        let out = "";
        for (let i = 0; i < onSigns; i++) {
            out += onSign;
        }
        for (let i = 0; i < (lamps - onSigns); i++) {
            out += "O";
        }
        return out;
    }

    getTopNumberOfOnSigns(number) {
        return (number - (number % 5)) / 5;
    }

}

export default BerlinClock;