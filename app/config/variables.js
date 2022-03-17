export const API = "http://localhost:3000"

export const parseCookie = str => {
    if(str){
        return str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
        }, {});
    }
    return false
}
 