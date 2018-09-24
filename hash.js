

// Function to get a value in the array based on a number
function getLetter(val) {
    let arr = [
        "A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X",
        "Y", "Z",
    ];
    return arr[val];
}

// Goes side by side with the Letter array to retrieve adjacent values
function getNumber(val) {
    let numArray = [
        1, 2, 3, 4, 5, 6,
        7, 8, 9, 10, 11, 12,
        13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24,
        25, 26,
    ];

    return numArray[val];
}


function returnNum(string) {

    for(let i = 0; i < 26; i++) {
        if(string == getLetter(i)) {

            //console.log('letter found: ' + getLetter[i]);
            return getNumber(i);
        }
    }

}

// The string being inputted into the hash algorithm
let string = 'Let the good times roll';

function makeHash(string, max) {
    let arr = [];

    let it = string.split('');
    let reduce_add = (acumulator, currentValue) => acumulator + currentValue;

    for(let i = 0; i < it.length; i++ ){

        if(it[i] == it[i].toLowerCase()) {
            it[i] = it[i].toUpperCase();
        }

        let val = returnNum(it[i]);
        arr.push(val);
        
        it.forEach(() => {});
    }
    
    //Push the answers to an array to be combined in the module scope
    answer.push(num_to_letters(arr.reduce(reduce_add), 26));

}

//Takes the grand total of the words and converts to the 'Z's and remainder
function num_to_letters(word_val, max) {

    let z_count = word_val / 26;
    let remainder = word_val % max;

    z_count = Math.floor(z_count);

    if(z_count < 1) {
        return getLetter(remainder - 1);
    }
    
    else {
        let arr = [];
        for(let i = 0; i < z_count; i++) {
            arr.push("Z");
        }

        return arr.join("") + getLetter(remainder - 1);
    }

}

let answer = [];
let word_separator = string.split(' ');

word_separator.forEach((element) => {
    makeHash(element, 25);
});

console.log("Coded string = " + answer.join(', '));


