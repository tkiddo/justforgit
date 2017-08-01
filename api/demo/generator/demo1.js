function* g() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending'
}

var gen = g();
console.log(gen.next());
console.log(gen.next())