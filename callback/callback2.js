function fakeSetTimeout(callback, delay) {
    callback();
}

console.log(0)
fakeSetTimeout(function() {
    console.log('hello');
}, 0);
console.log(1);