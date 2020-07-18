/**
 * @param {string} string
 * @param {number} limit
 * @return {string}
 */
const removeRepeated = (string, limit) => {
    //Transformar em array
    var str = string.split(''); 
    //Numero de ocorrencias de uma determinada letra
    var lim = 1; 
    for(var i = 0; i<str.length; i++){
        lim = 1;
        //Caso a letra seja igual a proxima letra
        if(str[i] == str[i+lim]){ 
            //Enquanto nao for diferente somar ao numero de ocorrencias
            while(str[i] == str[i+lim]){ 
                lim++;
            }
            //Exclui a quantidade de letras repetidas excessivamente
            str.splice(i, lim-limit); 
        }
    }
    //Junta a array para formar uma string
    return str.join(""); 
   }
   export default removeRepeated;