/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    debugger;
    let len = x.toString().length;

    //negative number or even length is false
    if(x < 0) return false;
    
    //single digit return true
    if(x < 10) return true;
    
    let isOdd = (len % 2 == 0) ? false : true;    
    let mid = (len > 3) ? Math.ceil(len / 2) : 2;
    
    let arr = x.toString().split('');
    
    for (let i = 0; i < mid ; i++ ){     
        let dif = len - 1 - i;
        if(!(isOdd && mid == (i+1))){
            if (arr[i] != arr[dif]){
                return false;
            }
        }
            
    }

    return true;
};