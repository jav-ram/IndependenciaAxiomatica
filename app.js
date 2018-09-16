// get file to save 
const fs = require('fs');
const file = fs.createWriteStream('resultado.txt',{
    flags: 'a' // 'a' means appending (old data will be preserved)
  });

const allEqual = arr => arr.every( v => v === arr[0] )
const {
    tablaVerdad,
    table,
    axiom1,
    axiom2,
    axiom3,
    axiom4,
    axiom5,
} = require('./resources/tables');

const permutations = require('./resources/permutations');

const values = [0, 1, 2]

const orP = permutations(9, values);
const notP = permutations(3, values);

let finish = false;

let i = 0
while (!finish && i < notP.length) {

    let j = 0
    while (!finish && j < orP.length) {
        //console.log(i,j)
        let options = {
            or: orP[j],
            not: notP[i],
        }
        let axioms = [];
        axioms.push(tablaVerdad(table(1), axiom1, options));
        axioms.push(tablaVerdad(table(2), axiom2, options));
        axioms.push(tablaVerdad(table(2), axiom3, options));
        axioms.push(tablaVerdad(table(3), axiom4, options));
        axioms.push(tablaVerdad(table(1), axiom5, options));
        
    

        let count = [];
        for (let k = 0; k < axioms.length; k++ ) {
            
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
                   //console.log(j,axioms[j][0].toString(), ": ", axioms[j]);
                   equals[axioms[j][0].toString()] += 1;
                } else {
                    axioma = j;
                }
            }


            if (equals["0"] === 4 ) {
                file.write("------------------------------------------------------------------");
                file.write("\n");
                file.write(`El axioma ${axioma + 1} es independiente con: 
                equals: 
                    0${equals[0]}
                    1${equals[1]}
                    2${equals[2]}
                    3${equals[3]}
                    4${equals[4]}
                    \tOr ${orP[j].toString()}
                    \tNot ${notP[i]}
                    \t axioma1: ${axioms[0].toString()}
                    \t axioma2: ${axioms[1].toString()}
                    \t axioma3: ${axioms[2].toString()} 
                    \t axioma4: ${axioms[3].toString()}
                    \t axioma5: ${axioms[4].toString()}`);
                file.write("\n");
                
                break;
            }

        }

        j++

    }

    i++;
}

file.end();



