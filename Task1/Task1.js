/**
 * @param {string} string
 * @param {number} limit
 * @return {string}
 */
const removeRepeated = (string, limit) => {
    var str = string.split('');
    var lim = 1;
    for(var i = 0; i<str.length; i++){
        lim = 1;
        if(str[i] == str[i+lim]){
            while(str[i] == str[i+lim]){
                lim++;
            }
            str.splice(i, lim-limit);
        }
    }
    return str.join("");
   }
   export default removeRepeated;