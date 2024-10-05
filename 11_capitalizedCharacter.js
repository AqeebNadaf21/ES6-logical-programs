// 11. Write a javascript program to convert a string a string to title case 
// (capitalized the first letter of each word)
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toLowerCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log((titleCase("codemind technology")));
