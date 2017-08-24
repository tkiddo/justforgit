function* gen() {
    yield 111 + 111;
}

var g = gen();
console.log(g)

console.log(g.next());