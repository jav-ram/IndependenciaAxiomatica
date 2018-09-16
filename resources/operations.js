// -------------------------------------------------------------------
// NOT
const notInit = (results) => {
    return ((o) => {
        switch (o){
            case 0:
                return results[0];
            case 1: 
                return results[1];
            case 2: 
                return results[2];
        }
    });
} 
const not = notInit([0,0,1]);

// -------------------------------------------------------------------
// OR
const orInit = (results) => {
    return ((o1, o2) => {
        return results[o1*3 + o2];
    }
    );
}


const or = orInit([
    0,0,0,0,0,1,0,0,0
]);




// -------------------------------------------------------------------
// IMPLIES
const implyInit = (orl, notl) => {
    return ((o1, o2)=>{
        return orl(notl(o1),o2);
    });
}


const imply = implyInit(or, not);

const uno = [0,1,2];
const dos = [
    [0,0,0,1,1,1,2,2,2],
    [0,1,2,0,1,2,0,1,2]
]
const tres = [
    [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2],
    [0,0,0,1,1,1,2,2,2,0,0,0,1,1,1,2,2,2,0,0,0,1,1,1,2,2,2],
    [0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2,0,1,2],
]

//axioma 1 
for (let i = 0; i < uno.length; i++) {
    console.log(imply(or(uno[i],uno[i]), uno[i]));
}

console.log("-------------------------------------------------------")

//axioma 2
for (let i = 0; i < dos[0].length; i++) {
    // x => x v y
    console.log(imply(dos[0][i], or(dos[0][i], dos[1][i])));
}

console.log("-------------------------------------------------------")

//axioma 3
for (let i = 0; i < dos[0].length; i++) {
    // x => x v y
    console.log(imply(dos[0][i], or(dos[0][i], dos[1][i])));
}

console.log("-------------------------------------------------------")

//axioma 4
for (let i = 0; i < tres[0].length; i++) {
    // x => x v y
    console.log(imply(
        imply(tres[0][i], tres[1][i]), // (x=>y)
        imply(
            or(tres[2][i], tres[0][i]), // zvx
            or(tres[2][i], tres[1][i])  // zvy
        ) // (zvx) => (zvy));
    ));
}

console.log("-------------------------------------------------------")

// axioma 5
for (let i = 0; i < uno.length; i++) {
    console.log(or(not(uno[i]), uno[i]));
}

module.exports = {
    notInit,
    orInit,
    implyInit
}