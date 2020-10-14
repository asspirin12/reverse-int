module.exports = function reverse (n) {
    arr = n.toString().split('');

    resArr = []
    
    while (arr.length > 0) {
      resArr.push(arr.pop());
    }
    
    return resArr.join('').replace(/^0|-$/, '');
}
