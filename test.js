const assert = require('chai').assert;
const unitOperations = require('./conversion');

// Test cases for length Unit
//feetToInch Conversion Test Cases
describe('Length Quantity Measurement', () => {
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

    it('Given negitive value must return with proper Massage when we try to convert negative value feetToInchConversion', () => {
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
    //meterToInchConversion test cases
    // it('Given 1 Meter should return true when converted into 39.3701 Inch', () => {
    //     assert.equal(unitOperations.meterToInchConversion(1).toFixed(4), 39.3701);
    // });
    it('Given 1 Meter should return true when converted into 3.2808 Feet', () => {
        
        unitOperations.meterToInchConversion(1).then((data) => {
            assert.equal(data.toFixed(4), 39.3701);
        })
    });
    
    it('Given negitive value must return with proper Massage when we try to convert negative value meterToInchConversion', () => {
        unitOperations.meterToInchConversion(-1).then((data) => {
            assert.equal("value can not be nagative");
        })
    });

    //meterToFeetConversion
    it('Given 1 Meter should return true when converted into 3.2808 Feet', () => {
        
        unitOperations.meterToFeetConversion(1).then((data) => {
            assert.equal(data.toFixed(4), 3.2808);
        })
    });

    it('Given negitive value must return with proper Massage when we try to convert negative value meterToFeetConversion', () => {
        unitOperations.meterToFeetConversion(-1).then((data) => {
            assert.equal("value can not be nagative");
        })
    });

    //inchToMeter
    it('Given 1 Inch should return true when converted into 0.0254 Meter', () => {
        
        unitOperations.meterToFeetConversion(1).then((data) => {
            assert.equal(data.toFixed(4), 0.0254);
        })
    });

    it('Given negitive value must return with proper Massage when we try to convert negative value meterToInchConversion', () => {
        unitOperations.inchToMeterConversion(-1).then((data) => {
            assert.equal("value can not be nagative");
        })
    });

    //inchToFeet
    it('Given 1 Inch should return true when converted into 0.0833 Feet', () => {
        
        unitOperations.meterToFeetConversion(1).then((data) => {
            assert.equal(data.toFixed(4), 0.0833);
        })
    });

    it('Given negitive value must return with proper Massage when we try to convert negative value meterToInchConversion', () => {
        unitOperations.inchToFeetConversion(-1).then((data) => {
            assert.equal("value can not be nagative");
        })
    });

})

//Length TestCases
describe('Volume Quantity Measurement', () => {
    //literToMilliliter conversion TestCases
    it('Given 1 Liter should return true when converted into 1000 Milliliter',() => {
        assert.equal(unitOperations.literToMilliliterConversion(1), 1000)
    });

    it("Given Value should not be nagetive when try to convert literToMilliliter",() => {
        assert.equal(unitOperations.literToMilliliterConversion(-1), "Please Enter Positive Value")
    });

    //literToDeciliter Conversion TestCases
    it('Given 1 Liter should return true when converted into 10 Deciliter',() => {
        assert.equal(unitOperations.literToDeciliterConversion(1), 10)
    });

    it("Given Value should not be nagetive when try to convert literToMilliliter",() => {
        assert.equal(unitOperations.literToDeciliterConversion(-1), "Please Enter Positive Value")
    });

    //milliliterToLiter Conversion TestCases
    it('Given 1 Milliliter should return true when converted into 0.001 Liter',() => {
        assert.equal(unitOperations.milliliterToLiterConversion(1), 0.001)
    });

    it("Given Value should not be nagetive when try to convert milliliterToLiter",() => {
        assert.equal(unitOperations.milliliterToLiterConversion(-1), "Please Enter Positive Value")
    });
    
    //milliliterToDeciliter Conversion Testcase
    it('Given 100 Milliliter should return true when converted into 1 Deciliter',() => {
        assert.equal(unitOperations.milliliterToDeciliterConversion(10), 1)
    });

    it("Given Value should not be nagetive when try to convert milliliterToDeciliter",() => {
        assert.equal(unitOperations.milliliterToDeciliterConversion(-1), "Please Enter Positive Value")
    });

    //deciliterToLiter Conversion Testcase
    it('Given 10 Deciliter should return true when converted into 1 Liter',() => {
        assert.equal(unitOperations.deciliterToLiterConversion(10), 1)
    });

    it("Given Value should not be nagetive when try to convert DeciliterToliter",() => {
        assert.equal(unitOperations.deciliterToLiterConversion(-1), "Please Enter Positive Value")
    });
})