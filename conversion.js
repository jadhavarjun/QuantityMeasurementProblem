class UnitOperations {
    //Length operation
    //meter convertion logic
    meterToInchConversion(value) {
        return new Promise((resolve, reject) => {
            if (value > 0) {
                let result = value * 39.3701;
                resolve(result)
            }
            else {
                reject("value can not be nagative");
            }
            if (value == null)
                reject(null)
        })
    }
    meterToFeetConversion(value) {
        return new Promise((resolve, reject) => {
            if (value > 0) {
                let result = value * 3.2808;
                resolve(result)
            }
            else {
                reject("value can not be nagative");
            }
            if (value == null)
                reject(null)
        })
    }
    //Inch convertion logic
    inchToMeterConversion(value) {
        return new Promise((resolve, reject) => {
            if (value > 0) {
                let result = value / 100;
                resolve(result)
            }
            else {
                reject("value should not be nagative")
            }
        })
    }
    inchToFeetConversion(value) {
        return new Promise((resolve, reject) => {
            if (value > 0) {
                let result = value / 12;
                resolve(result)
            }
            else {
                reject("value should not be nagative")
            }
        })
    }
    //feet convertion logic
    feetToMeterConvertion(value) {
        if (value == null)
            return null;
        if (value < 0)
            return "Please enter Positive Value";
        return value / 3.281;
    }
    feetToInchConvertion(value) {
        if (value == null)
            return null;
        if (value < 0)
            return "Please enter Positive Value";
        return value * 12;
    }

    //Volume Operation

    //liter Conversion
    literToMilliliterConversion(value) {
        if (value < 0)
            return "Please Enter Positive Value";
        return value * 1000;
    }
    literToDeciliterConversion(value) {
        if (value < 0)
            return "Please Enter Positive Value";
        return value * 10;
    }
    //Milliliter conversion
    milliliterToLiterConversion(value) {
        if (value < 0)
            return "Please Enter Positive Value";
        return value / 1000;
    }
    milliliterToDeciliterConversion(value) {
        if (value < 0)
            return "Please Enter Positive Value";
        return value / 10;
    }
    //Deciliter conversion
    deciliterToLiterConversion(value) {
        if (value < 0)
            return "Please Enter Positive Value";
        return value / 10;
    }
    deciliterToMilliliterConversion(value) {
        if (value < 0)
            return "Please Enter Positive Value";
        return value * 100;
    }

    //For tempreture Operation

    //Celsius conversion
    celsiusToFahrenheitConversion(value, callback) {
		if(value < 0){
			callback()
		} else {
			return ((value * 9 / 5) + 32);
		}
    }
    celsiusToKelvinConversion(value) {
        return (value + 273.15);
    }
    //Fahrenheit conversion
    fahrenheitToCelsiusConversion(value) {

        return ((value - 32) * 5 / 9);
    }
    fahrenheitToKelvinConversion(value) {
        return ((value - 32) * 5 / 9 + 273.15);
    }
    //Kelvin conversion
    kelvinToCelsiusConversion(value) {

        return (value - 273.15);
    }
    kelvinToFahrenheitConversion(value) {
        return ((value - 273.15) * 9 / 5 + 32);
    }
}
module.exports = new UnitOperations()