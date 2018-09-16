const {notInit, orInit, implyInit} = require('./operations');

const permutations = require('./permutations');

// ---------------------------------------------------
// Tabla
const table = (dif) => {
    let permutations = [];
    const d = dif
    const size = Math.pow(3, dif);

    while (dif > 0) {
        let i = 0;
        let array = [];
        let steps = 1.0 / (Math.pow(3, dif-1));

        let w = 0;
        while (i < size) {
            //
            w += steps;
            array.push( Math.floor(w - 0.01) % 3 );

            i++;
        }
        permutations.push(array);
        dif -=1;
    }
    return permutations;

}



// ---------------------------------------------------
// Operations
const axiom1 = (inputs, options) => {
    const or = orInit(options.or);
    const not = notInit(options.not);
    const imply = implyInit(or, not);
    return imply(
        or(inputs[0], inputs[0]), // xvx
        inputs[0]);  // => x
}

const axiom2 = (inputs, options) => {
    const or = orInit(options.or);
    const not = notInit(options.not);
    const imply = implyInit(or, not);
    return imply(
        inputs[0], // x
        or(inputs[0], inputs[1]) //=> xvy
    );
}

const axiom3 = (inputs, options) => {
    const or = orInit(options.or);
    const not = notInit(options.not);
    const imply = implyInit(or, not);
    return imply(
        or(inputs[0], inputs[1]), // xvy
        or(inputs[1], inputs[0])
    );
}

const axiom4 = (inputs, options) => {
    const or = orInit(options.or);
    const not = notInit(options.not);
    const imply = implyInit(or, not);

    return imply(
        imply(inputs[0], inputs[1]), // (x=>y)
        imply(
            or(inputs[2], inputs[0]), // zvx
            or(inputs[2], inputs[1])  // zvy
        ) // (zvx) => (zvy)
    );
}

const axiom5 = (inputs, options) => {
    const or = orInit(options.or);
    const not = notInit(options.not);
    const imply = implyInit(or, not);
    return or(not(inputs[0]), inputs[0]); // nox v x
}


// ---------------------------------------------------
// Tabla

const tablaVerdad = (table, operation, options) => {
    let r = [];
    let l = table[0].length;
    let cant = table.length;
    
    for (let i = 0; i < l; i += 1) {
        let inputs = []
        for (let j = 0; j < cant; j++) {
            inputs.push(table[j][i]);
        }
        r.push(operation(inputs, options));
    }

    return r;
}

module.exports = {
    tablaVerdad,
    table,
    axiom1,
    axiom2,
    axiom3,
    axiom4,
    axiom5,
}


