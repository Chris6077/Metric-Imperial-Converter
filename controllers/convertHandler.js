/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let regNum = input.match(/[a-zA-Z]/);
    if(regNum) {
      if (regNum.index === 0) return 1;
      let strNumbers = input.substring(0, regNum.index).split('/'); 
      if(strNumbers.length > 2) return 'invalid number';
      if (strNumbers.length == 1) return parseFloat(strNumbers[0]); 
      else return parseFloat(strNumbers[0]) / parseFloat(strNumbers[1]);
    }
    else if(input.match(/^\d+\.{0,1}\d*$/)) return parseFloat(input);
    else return 'invalid number';
  };
  
  this.getUnit = function(input) {
    let regUni = input.toLowerCase().match(/(?<![a-zA-Z])(gal|lbs|mi|l|kg|km)$/);
    if(regUni) return input.toLowerCase().substring(regUni.index);
    else return 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    let units = {
      'gal':'l',
      'l':'gal',
      'lbs':'kg',
      'kg':'lbs',
      'mi':'km',
      'km':'mi'
    };
    return units[initUnit.toLowerCase()];
  };

  this.spellOutUnit = function(unit) {
    let units = {
      'gal':'gallons',
      'l':'liters',
      'lbs':'pounds',
      'kg':'kilograms',
      'mi':'miles',
      'km':'kilometers'
    };
    return units[unit.toLowerCase()];
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (this.getUnit(initUnit)){
      case 'gal':
        result=initNum*galToL;
        break;
      case 'l':
        result=initNum/galToL;
        break;
      case 'lbs':
        result=initNum*lbsToKg;
        break;
      case 'kg':
        result=initNum/lbsToKg;
        break;
      case 'mi':
        result=initNum*miToKm;
        break;
      case 'km':
        result=initNum/miToKm;
        break;
    }
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit); 
  };
  
}

module.exports = ConvertHandler;
