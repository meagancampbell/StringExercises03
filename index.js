let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log(dna);



//a) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

let newString = dna.trim();

console.log(newString);

//b) Change all of the letters in the dna string to UPPERCASE, then print the result.

dna = dna.trim().toUpperCase();
console.log(dna);
//c) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

dna = dna.replace('GCT','AGG' );
console.log(dna);


let string = 'TCG-TAC-GAC-TAC-CGT';

console.log(`${string} ${string.length}`);

console.log(dna.slice (16,19 ));

console.log(`${dna.slice (4,7).toLowerCase()}o ${dna.slice(dna.indexOf('CAT'),dna.indexOf('CAT')+3).toLowerCase()}`);



console.log(language.slice(0,1)+ language.slice (4,5) );

//console.log(`The abbreviation of '${language}' "is" + '${initials(0,1)' + '${initials (4,5)'.'};

//"The abbreviation for 'JavaScript' is 'JS'."
let language = 'JavaScript';
console.log(language);

console.log(`The abbreviation for '${language}' is '${initials}'.`)