// get file to save 
const fs = require('fs');
let file = fs.createWriteStream('Gentezen.txt',{
    flags: 'a' // 'a' means appending (old data will be preserved)
  });

const allEqual = arr => arr.every( v => v === arr[0] )
const {
    tablaVerdad,
    table,
} = require('./resources/tables');

const r = {};

const {
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
} = require('./resources/gentzenA');

const permutations = require('./resources/permutations');

const values = [0, 1, 2]

const orP = permutations(9, values);
const andP = permutations(9, values);
const implyP = permutations(9, values);

let finish = false;

let o = 0, a = 0, i = 0;
let l = orP.length;
console.log(o, a, i);
console.log(l)
for (; o < l; o++) {                  // or       v
    a = 0;
    for (; a < l; a++) {             // and      &
        i = 0;
        for (; i < l; i++) {       // imply    =>  
            if (Object.keys(r).length === 13){
                console.log("Termino");
                o = l;
                a = l;
                i = l;
                break;
            }  
                let options = {
                    not: [2,1,0],
                    or: orP[o],
                    and: andP[a],
                    imply: implyP[i]
                }

                let axioms = [];
                axioms.push(tablaVerdad(table(2), axiom1, options));
                axioms.push(tablaVerdad(table(3), axiom2, options));
                axioms.push(tablaVerdad(table(2), axiom3, options));
                axioms.push(tablaVerdad(table(2), axiom4, options));
                axioms.push(tablaVerdad(table(2), axiom5, options));
                axioms.push(tablaVerdad(table(2), axiom6, options));
                axioms.push(tablaVerdad(table(2), axiom7, options));
                axioms.push(tablaVerdad(table(3), axiom8, options));
                axioms.push(tablaVerdad(table(2), axiom9, options));
                axioms.push(tablaVerdad(table(2), axiom10, options));
                axioms.push(tablaVerdad(table(2), axiom11, options));
                axioms.push(tablaVerdad(table(2), axiom12, options));
                axioms.push(tablaVerdad(table(2), axiom13, options));

                let equals = {
                    "0": 0,
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                }

                let axioma;

                for (let j = 0; j < axioms.length; j++) {
                    if (allEqual(axioms[j])){
                        equals[axioms[j][0].toString()] += 1;
                    } else {
                        axioma = j;
                    }
                }

                if (equals["0"] === 12 ) {
                    /*
                    file.write("------------------------------------------------------------------");
                    file.write("\n");*/
                    const t = `El axioma ${axioma + 1} es independiente con: 
                    Or ${orP[o].toString()}
                    Not ${[2,1,0].toString()}
                    And ${andP[a].toString()}
                    Imply ${implyP[i].toString()}
        
                        axioma1: ${axioms[0].toString()}
                        axioma2: ${axioms[1].toString()}
                        axioma3: ${axioms[2].toString()} 
                        axioma4: ${axioms[3].toString()}
                        axioma5: ${axioms[4].toString()}
                        axioma6: ${axioms[5].toString()}
                        axioma7: ${axioms[6].toString()}
                        axioma8: ${axioms[7].toString()}
                        axioma9: ${axioms[8].toString()}
                        axioma10: ${axioms[9].toString()}
                        axioma11: ${axioms[10].toString()}
                        axioma12: ${axioms[11].toString()}
                        axioma13: ${axioms[12].toString()}`
                    /*file.write(t);
                    file.write("\n");*/
                    //console.log(t);
                    r[`axioma${axioma+1}`] = t;
                }
        }
    }
    console.log(o)
}

console.log(r)

file.end();
