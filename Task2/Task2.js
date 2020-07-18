/**
 * @param {string} string
 * @param {number} times
 * @return {string}
 */
const replaceChar = (string, times) => {
    //Variaveis utilizadas ao longo do codigo para auxilio
    var str = string.split('');
    var aux = 1; 
    for(var i = 0; i<str.length; i++){
        //condicao especial para o caso de '?' estar na primeira posicao
        if(i == 0 && str[i] == '?'){ 
            while(str[str.length-aux] == '?'){
                aux++;
            }
            str[i] = str[str.length-aux];
            //numero de vezes a ser impressa na string
            for (var j = 0;j<times-1;j++){ 
                str[i] += str[str.length-aux];
            }
            aux=1;
        //condicao para o caso de '?' nao estar na primeira posicao
        } else if(str[i] == '?'){ 
            while(str[i-aux] == '?'){
                aux++;
            }
            str[i] = str[i-aux];
            //numero de vezes a ser impressa na string
            for (var j = 0;j<times-1;j++){
                str[i] += str[i-aux];
            }
            aux=1;
        } 
    } 
    //Junta a array para formar uma string
    return str.join("");
   }
   export default replaceChar;
   