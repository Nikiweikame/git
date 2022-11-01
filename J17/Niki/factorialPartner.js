function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
  }

function permutations(n,k){
    return factorial(n)/factorial(n-k)
 }

 function combination(n,k){
    return permutations(n,k)/factorial(k)
 }

 module.exports ={factorial,permutations,combination}