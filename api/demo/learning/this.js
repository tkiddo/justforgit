// var adder = function(x) {
//     console.log(abc)
//     return function(n) {
//         var abc = 34;
//         console.log(x)
//         return x + n;
//     }
// }

// console.log(adder(10)(5))

for (var i = 0; i < 5; i++) {
    // var idx = i;
    (function(idx) {
        setTimeout(function() {
            console.log(idx)
        }, 100)
    })(i)

}