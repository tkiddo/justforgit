var p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('p1决议');
        // resolve('p1')
        reject('p1')
    }, 10)
})
var p2 = new Promise((resolve, reject) => {
    setTimeout(function() {
        console.log('p2决议');
        resolve('p2')
    }, 10)
})

Promise.all([p1, p2])
    .then((msg) => {
        console.log(msg)
    })
    .then((msg) => {
        console.log(msg)
    })