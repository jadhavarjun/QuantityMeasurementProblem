const assert = require('chai').assert;
const unitOperations = require('./conversion');

// Test cases for length Unit
//feetToInch Conversion Test Cases
describe('Quantity Measurement', () => {
    it('Given 1 feet should return true when converted into 12 inch', () => {
        assert.equal(unitOperations.feetToInchConvertion(1), 12);
    });

    it('Given incorrect output of 1 inch convertion should not be iqual', () => {
        assert.notEqual(unitOperations.feetToInchConvertion(1), 11);
    });

    it('Given 2 feet should return true when converted into 24 inch', () => {
        assert.equal(unitOperations.feetToInchConvertion(2), 24);
    });
    
    it('Given null value should return null', () => {
        assert.isNull(unitOperations.feetToInchConvertion(null));
    });

    it('Given some value should return Notnull', () => {
        assert.isNotNull(unitOperations.feetToInchConvertion(1));
    });

    it('Given negitive value must return proper Massage', () => {
        assert.equal(unitOperations.feetToInchConvertion(-1), "Please enter Positive Value");
    });

    //feetToMeter Conversion Test Cases
    it('Given 1 feet should return true when converted into 0.3048 meter', () => {
        assert.equal(unitOperations.feetToMeterConvertion(1).toFixed(4), 0.3048);
    });

    it('Given null value should return null when feetToMeterConvertion', () => {
        assert.isNull(unitOperations.feetToMeterConvertion(null));
    });

    it('Given negitive value must return proper Massage when we do feet to meter conversion', () => {
        assert.equal(unitOperations.feetToMeterConvertion(-1), "Please enter Positive Value");
    });

    //meter convertion logic
    //meterToInchConversion
    it('Given 1 Meter should return true when converted into 39.3701 Inch', () => {
        assert.equal(unitOperations.meterToInchConversion(1).toFixed(4), 39.3701);
    });

    it('Given null value should return null when meterToInchConversion', () => {
        assert.isNull(unitOperations.meterToInchConversion(null));
    });
    

})