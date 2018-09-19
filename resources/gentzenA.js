const {notInit, orInit, andInit, implyInitG, dimplyInitG} = require('./operations');

const axiom1 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(inputs[0], imply(inputs[1], inputs[0])) // x => (y => x)
    );
}

const axiom2 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            imply(inputs[0], inputs[1]),// x => y
            imply(
                imply(inputs[0], imply(inputs[1], inputs[2])), // x=>(y=>z)
                imply(inputs[0], inputs[2]) // x => z
            )
        )
    );
}

const axiom3 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            inputs[0], // x =>
            imply(
                inputs[1], // [ y =>
                and(inputs[0], inputs[1]) // (x & y)]
            )
        ) 
    );
}

const axiom4 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            and(inputs[0], inputs[1]), // (x & y)
            inputs[0]
        )
    );
}
const axiom5 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            and(inputs[0], inputs[1]), // (x & y)
            inputs[1]
        )
    );
}
const axiom6 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            inputs[0], // x =>
            or (inputs[0], inputs[1]) // (xvy)
        )
    );
}
const axiom7 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            inputs[1], // y =>
            or (inputs[0], inputs[1]) // (xvy)
        )
    );
}

const axiom8 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            imply (inputs[0], inputs[2]), // (x => z) =>
            imply (                 // [  
                imply(inputs[1], inputs[2]), // (y => z) =>
                imply(                    // [  
                    or (inputs[0], inputs[1]), // x v y =>
                    inputs[2]                   // z
                )                         //]  
            )                       //] 
        )
    );
}

const axiom9 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply (
            imply(inputs[0], inputs[1]), // (x => y) =>
            imply(
                imply(inputs[0], not(inputs[1])), // (x => not(y))
                not(inputs[0])
            )
        )
    );
}

const axiom10 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            not(inputs[0]),
            imply(inputs[0], inputs[1])
        )
    );
}

const axiom11 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            imply(inputs[0], inputs[1]),
            imply(
                imply(inputs[1], inputs[0]),
                dimply(inputs[0], inputs[1])
            )
        )
    );
}

const axiom12 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            dimply(inputs[0], inputs[1]),
            imply(inputs[0], inputs[1])
        )
    );
}

const axiom13 = (inputs, options) => {
    const not = notInit(options.not);
    const or = orInit(options.or);
    const and = andInit(options.and);
    const imply = implyInitG(options.imply);
    const dimply = dimplyInitG(imply, and);

    return (
        imply(
            dimply(inputs[0], inputs[1]),
            imply(inputs[1], inputs[0])
        )
    );
}

module.exports = {
    axiom1,
    axiom2,
    axiom3,
    axiom4,
    axiom5,
    axiom6,
    axiom7,
    axiom8,
    axiom9,
    axiom10,
    axiom11,
    axiom12,
    axiom13,
}
