function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

console.log(makeLine(5));

function makeSquare(size) {
    let line = '';
    let square = line*5;
    for (let i = 0; i < size; i++) {
        square += '#####\n';
    }
    return square;
}

console.log(makeSquare(5));