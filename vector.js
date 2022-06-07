const Fraction = require('fraction.js');

function matrixParse(string) {
    /*
    Examples:

    [1,2,3]

    [ 1,2,3 ]
    [ 4,5,6 ]

    ^ this equals the matrix [ [1,2,3], [4,5,6] ]
    */
    var matrix = [];
    var rows = string.split('\n');
    for (var i = 0; i < rows.length; i++) {
        // remove brackets
        rows[i] = rows[i].replace(/[\[\]]/g, '');
        // remove whitespace
        rows[i] = rows[i].replace(/\s/g, '');
        // split by commas
        matrix.push(rows[i].split(','));

        // convert strings to Fraction.js
        for (var j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = new Fraction(matrix[i][j]);
        };
    };
    return matrix;
};

class Vector {
    constructor(array) {
        this.w = 0;
        this.h = 0;

        // check for sub-array
        if (typeof array[0] == 'array') {
            this.h = array.length;
            this.w = array[0].length;
            // check that length of all arrays are the same
            const stdLen = array[0].length;
            array.map((el) => {
                if (el.length !== std) {
                    throw new Error(`Vector.js: All sub-arrays must match in length.`);
                }
            });
        } else if (typeof array == 'string') {
            // parse the matrix string
        }
        
    }
}

class VectorString {
    constructor(array) {

    }
}