/**
 * @param {string} s
 * @return {number}
 * 
 * Purpose: Given a roman numeral, convert it to an integer.
 */
var romanToInt = function(s) {
    let total = 0;

    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000        
    }
    
    s = s.split("");

    s.forEach((n,i) => {
        if(symbol[n] < symbol[s[i+1]]){
            total -= symbol[n];
        }else{
            total += symbol[n];
        }
    })
    return total;
};