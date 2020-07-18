/**
* @param {string} string1
* @param {string} string2
* @return {number}
*/
const lettersSum = (string1, string2) => {
    var str1 = string1.split('').sort();
    var str2 = string2.split('').sort();
    var bigger1 = str1[str1.length-1].charCodeAt(0)-96;
    var smaller1 = str1[0].charCodeAt(0)-96;
    var bigger2 = str2[str2.length-1].charCodeAt(0)-96;
    var smaller2 = str2[0].charCodeAt(0)-96;

    var ret = (bigger1*smaller2)+(bigger2*smaller1);

    return ret;
}
export default lettersSum;