function addTwo(num) {
    for ( let i=0; i < 2; i++) {
        num++;
    }
    return num;
}

console.log(addTwo(7));
console.log(addTwo(-3));
console.log(addTwo(100));