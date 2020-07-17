/**
 * @param {string} string
 * @param {number} times
 * @return {string}
 */
const replaceChar = (string, times) => {
    var str = string.split('');
    var aux = 1;
    for(var i = 0; i<str.length; i++){
        if(i == 0 && str[i] == '?'){
            while(str[str.length-aux] == '?'){
                aux++;
            }
            str[i] = str[str.length-aux];
            for (var j = 0;j<times-1;j++){
                str[i] += str[str.length-aux];
            }
            aux=1;
        } else if(str[i] == '?'){
            while(str[i-aux] == '?'){
                aux++;
            }
            str[i] = str[i-aux];
            for (var j = 0;j<times-1;j++){
                str[i] += str[i-aux];
            }
            aux=1;
        } 
    } 
    return str.join("");
   }
   export default replaceChar;
   