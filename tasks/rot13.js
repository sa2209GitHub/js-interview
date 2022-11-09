/**
 *  Task:
 *      Rot13
 */

const message1 = 'test';                                // 'grfg'
const message2 = 'Test';                                // 'Grfg'
const message3 = 'This is the Caesar Encryption System' // 'Guvf vf gur Pnrfne Rapelcgvba Flfgrz'

// First solution
const rot13First = message => {
    const open = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const key  = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    
    let encrypted = '';
    
    for (let char of message) {
      encrypted += open.indexOf(char) > -1 ? key[open.indexOf(char)] : char;
    };
    
    return encrypted;
};

// Second solution
const rot13Second = message => {
    var open = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var key = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
    return message.replace(/[a-z]/gi, char => key[open.indexOf(char)]);
};

// Third solution
const rot13Third = message => {
    const codeA = 'A'.charCodeAt(0);
    const codeZ = 'Z'.charCodeAt(0);
    const codea = 'a'.charCodeAt(0);
    const codez = 'z'.charCodeAt(0);

    return message.split('').map(char => {
        let code = char.charCodeAt(0);
        if (codeA <= code && code <= codeZ) {
            return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
        };
        if (codea <= code && code <= codez) {
            return String.fromCharCode(((code - codea) + 13) % 26 + codea);
        };
        return char;
    }).join('');
};

// Fourth solution
const rot13Fourth = message => {
    return message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
};

console.log(rot13First(message1));
console.log(rot13First(message2));
console.log(rot13First(message3));

console.log(rot13Second(message1));
console.log(rot13Second(message2));
console.log(rot13Second(message3));

console.log(rot13Third(message1));
console.log(rot13Third(message2));
console.log(rot13Third(message3));

console.log(rot13Fourth(message1));
console.log(rot13Fourth(message2));
console.log(rot13Fourth(message3));