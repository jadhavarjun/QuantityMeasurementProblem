var userInput = require('readline-sync');
const unitOperations = require("./conversion");

console.log("=====================================");
var userChoice = userInput.question("Enter Your Choice: \n PRESS => L for Length Operation \n PRESS => V for Volume Operation \n PRESS => T for Tempreture Operation \n =>  ");
//console.log(userChoice);

switch (userChoice) {
    case 'L':
        console.log("Welcome To length Operation");
        var LengthCon = userInput.question("Enter Your Choice Which One You Want To Convert: \n PRESS => m -> for Meter \n PRESS => i -> for Inch \n PRESS => ft -> for Feet \n => ");
        switch (LengthCon) {
            //case 1 Meter convertion
            case 'm':
                let meterValue = userInput.question("Enter Number of Units: ");
                var Meter = userInput.question("You Want to Convert Meter Into \n PRESS => i -> into Inch \n PRESS => ft -> into  Feet \n => ");

                switch (Meter) {
                    case 'i':
                        console.log("convert Meter Into Inch: ", unitOperations.meterToInchConversion(meterValue));
                        break;
                    case 'ft':
                        console.log("convert Meter Into Feet: ", unitOperations.meterToFeetConversion(meterValue));
                        break;
                }
                break;
            //case 2 for Inch covertion
            case 'i':
                let inchValue = userInput.question("Enter Number of Units: ");
                var Inch = userInput.question("You Want to Convert Inch Into \n PRESS => m -> into Meter \n PRESS => ft -> into Feet \n => ");

                switch (Inch) {
                    case 'm':
                        console.log("convert Inch Into Meter: ", unitOperations.inchToMeterConversion(inchValue));
                        break;
                    case 'ft':
                        console.log("convert Inch Into Feet: ", unitOperations.inchToFeetConversion(inchValue));
                        break;
                }
                break;
            //case 3 for Feet covertion
            case 'ft':
                let feetValue = userInput.question("Enter Number of Units: ");
                var Feet = userInput.question("You Want to Convert Feer Into \n PRESS => m -> into Meter \n PRESS => i -> into Inch \n => ");

                switch (Feet) {
                    case 'm':
                        console.log("convert Inch Into Meter: ", unitOperations.feetToMeterConvertion(feetValue));
                        break;
                    case 'i':
                        console.log("convert Inch Into Feet: ", unitOperations.feetToInchConvertion(feetValue));
                        break;
                }
                break;
        }
        break;

    //outer case 2 for Volume
    case 'V':
        console.log("Welcome To Volume Operation");
        var VolumeCon = userInput.question("Enter Your Choice Which One You Want To Convert: \n PRESS => lt -> for Liter \n PRESS => mt -> for Milliliter \n PRESS => dt -> for Deciliter \n => ");
        switch (VolumeCon) {
            //case 1 Liter convertion
            case 'lt':
                let literValue = userInput.question("Enter Number of Units: ");
                var Liter = userInput.question("You Want to Convert Liter Into \n PRESS => mt -> into MIlliliter \n PRESS => dt -> into Deciliter \n => ");

                switch (Liter) {
                    case 'mt':
                        console.log("convert Liter Into Milliliter: ", unitOperations.literToMilliliterConversion(literValue));
                        break;
                    case 'dt':
                        console.log("convert Liter Into Deciliter: ", unitOperations.literToDeciliterConversion(literValue));
                        break;
                }
                break;
            //case 2 for Milliliter covertion
            case 'mt':
                let milliliterValue = userInput.question("Enter Number of Units: ");
                var Milliliter = userInput.question("You Want to Convert Milliliter Into \n PRESS => lt -> into Liter \n PRESS => dt -> into Deciliter \n => ");

                switch (Milliliter) {
                    case 'lt':
                        console.log("convert Milliliter Into Liter ", unitOperations.milliliterToLiterConversion(milliliterValue));
                        break;
                    case 'dt':
                        console.log("convert Inch Into Feet: ", unitOperations.milliliterToDeciliterConversion(milliliterValue));
                        break;
                }
                break;
            //case 3 for Deciliter covertion
            case 'dt':
                let deciliterValue = userInput.question("Enter Number of Units: ");
                var Deciliter = userInput.question("You Want to Convert Deciliter Into \n PRESS => lt -> into Liter \n PRESS => mt -> into Milliliter \n => ");

                switch (Deciliter) {
                    case 'lt':
                        console.log("convert Deciliter Into Liter: ", unitOperations.deciliterToLiterConversion(deciliterValue));
                        break;
                    case 'mt':
                        console.log("convert Deciliter Into Millimeter: ", unitOperations.deciliterToMilliliterConversion(deciliterValue));
                        break;
                }
                break;
        }
        break;
    //Outer case 3 Tempreture Conversion
    case 'T':
        console.log("Welcome To Tempreture Operation");
        var TempretureCon = userInput.question("Enter Your Choice Which One You Want To Convert: \n PRESS => cl -> for Celsius \n PRESS => fa -> for Fahrenheit \n PRESS => kl -> for Kelvin \n => ");
        switch (TempretureCon) {
            //case 1 Celsius convertion
            case 'cl':
                let celsiusValue = userInput.question("Enter Number of Units: ");
                var Celsius = userInput.question("You Want to Convert Celsius Into \n PRESS => fa -> into Fahrenheit \n PRESS => kl -> into Kelvin \n => ");

                switch (Celsius) {
                    case 'fa':
                        console.log("convert Celsius Into Fahrenheit: ", unitOperations.celsiusToFahrenheitConversion(celsiusValue));
                        break;
                    case 'kl':
                        console.log("convert Celsius Into Kelvin: ", unitOperations.celsiusToKelvinConversion(celsiusValue));
                        break;
                }
                break;
            //case 2 for Fahrenheit covertion
            case 'fa':
                let fahrenheitValue = userInput.question("Enter Number of Units: ");
                var Fahrenheit = userInput.question("You Want to Convert Fahrenheit Into \n PRESS => cl -> into Celsius \n PRESS => kl -> into Kelvin \n => ");

                switch (Fahrenheit) {
                    case 'cl':
                        console.log("convert Fahrenheit Into Celsius", unitOperations.fahrenheitToCelsiusConversion(fahrenheitValue));
                        break;
                    case 'kl':
                        console.log("convert Fahrenheit Into kelvin: ", unitOperations.fahrenheitToKelvinConversion(fahrenheitValue));
                        break;
                }
                break;
            //case 3 for Kelvin covertion
            case 'kl':
                let kelvinValue = Number(userInput.question("Enter Number of Units: "));
                var Kelvin = Number(userInput.question("You Want to Convert Kelvin Into \n PRESS => cl -> into Celsius \n PRESS => fa -> into Fahrenheit \n => "));

                switch (Kelvin) {
                    case 'cl':
                        console.log("convert Kelvin Into Celsius: ", unitOperations.kelvinToCelsiusConversion(kelvinValue));
                        break;
                    case 'fa':
                        console.log("convert Kelvin Into Fahrenheit: ", unitOperations.kelvinToFahrenheitConversion(kelvinValue));
                        break;
                }
                break;
        }

        break;
}