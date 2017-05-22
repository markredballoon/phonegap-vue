/**
 * Recursive Array Search
 * @param {Array} a - Array
 * @param {String} k - Key
 * @param {any} v - Value
 * @param {Number} n - nth iteration
 */
const recursiveArraySearch = (a, k, v, n) => {
  n = n || 0;
  console.log(a, k, v, n)
  if (!a || !k || !v || n > a.length){
    return 0;
  }
  if (a[n][k] == v ){
    return n;
  }
  recursiveArraySearch(a, k, v, n+1);
};

export default recursiveArraySearch;