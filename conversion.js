class UnitOperations {
    //Length operation
    //meter convertion logic
    meterToInchConversion(value) {
        if(value==null)
        return null;
        return value * 39.3701;
    }
    meterToFeetConversion(value) {
        return value * 3.28084;
    }
    //inch covertion logic
    inchToMeterConversion(value) {
        return value / 100;
    }
    inchToFeetConversion(value) {
        return value / 12;
    }
    //feet convertion logic
    feetToMeterConvertion(value) {
        if(value==null)
        return null;
        if(value<0)
        return "Please enter Positive Value";
        return value / 3.281;
    }
    feetToInchConvertion(value) {
        if(value==null)
        return null;
        if(value<0)
        return "Please enter Positive Value";
        return value * 12;
    }

    //Volume Operation

    //liter Conversion
    literToMilliliterConversion(value) {
        return value * 1000;
    }
    literToDeciliterConversion(value) {
        return value * 10;
    }
    //Milliliter conversion
    milliliterToLiterConversion(value) {
        return value / 1000;
    }
    milliliterToDeciliterConversion(value) {
        return value / 10;
    }
    //Deciliter conversion
    deciliterToLiterConversion(value) {
        return value / 10;
    }
    deciliterToMilliliterConversion(value) {
        return value * 100;
    }

    //For tempreture Operation

    //Celsius conversion
    celsiusToFahrenheitConversion(value) {

        return ((value * 9 / 5) + 32);
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