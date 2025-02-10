const repeatString = function(string, num) {

    if(num < 0)  return "ERROR";
    
    let repeat = '';

    while(num > 0) {

        repeat += string;

        num--;
    }

    return repeat;
};


repeatString('hey', 3);
// Do not edit below this line
module.exports = repeatString;
