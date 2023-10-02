function makeLine(length, characterType = "#") {
    let output = "";
    if (characterType === undefined) {
        characterType = "#"
    }

    for (let i = 0; i < length; i++) {
        output += characterType;
    }
}