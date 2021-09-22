//  EXERCÍCIO 1  -----------------------------------------

function loopDePares(a) {
  for (let i = 0; i <= 100; i++) {
    let soma = i + a;
    if (soma % 2 == 0) {
      console.log("O numero " + soma + " é par");
    } else {
      console.log(i);
    }
  }
}

console.log("EXERCÍCIO 1");
loopDePares(7);
console.log("- - - - - - - - - - - - - - -");

//  EXERCÍCIO 2  -----------------------------------------

function loopDeImpares(numero, palavra) {
  for (let i = 0; i <= 100; i++) {
    let soma = i + numero;
    if (soma % 2 != 0) {
      console.log(palavra);
    } else {
      console.log(i);
    }
  }
}

console.log("EXERCÍCIO 2");
loopDeImpares(4, "Não é par");
console.log("- - - - - - - - - - - - - - -");

// EXERCÍCIO 3  -----------------------------------------

function soma(numero) {
  let total = 0;
  for (let i = 0; i <= numero; i++) {
    total = total + i;
  }
  return total;
}

console.log("EXERCÍCIO 3");
console.log(soma(8));
console.log("- - - - - - - - - - - - - - -");

// EXERCÍCIO 4  -----------------------------------------

function newArray(numero) {
  let array = [];
  for (let i = 1; i <= numero; i++) {
    array.push(i);
  }
  return array;
}

console.log("EXERCÍCIO 4");
console.log(newArray(10));
console.log("- - - - - - - - - - - - - - -");

//  EXERCÍCIO 5  -----------------------------------------

function split(string) {
  let novaString = [];
  for (let i = 0; i < string.length; i++) {
    novaString.push(string[i]);
  }
  return novaString;
}

console.log("EXERCÍCIO 5");
console.log(split("abracadabra"));
console.log("- - - - - - - - - - - - - - -");

//  EXERCÍCIO 6  -----------------------------------------

function moverZeros(array) {
  array.forEach(function (a) {
    if (a == 0) {
      array.push(array.splice(array.indexOf(a), 1)[0]);
    }
  });
  return array;
}

console.log("EXERCÍCIO 6");
console.log(moverZeros([1, 2, 3, 1, 2, 0, 6, 8, 0, 56, 34, 0, 0, 8, 8, 7, 0]));
console.log("- - - - - - - - - - - - - - -");

// EXERCÍCIO 7  -----------------------------------------

function arrayHandler(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    console.log("Eu sou " + array1[i] + " e eu sou " + array2[i]);
  }
}
let teste1 = [1, 2, 3, 4, 5];
let teste2 = ["a", "b", "c", "d", "e"];

console.log("EXERCÍCIO 7");
arrayHandler(teste1, teste2);
console.log("- - - - - - - - - - - - - - -");

//  EXERCÍCIO 8  -----------------------------------------

function arrayObjects(numero) {
  let objetos = [];
  for (let i = 1; i <= numero; i++) {
    objetos.push({ valor: i });
  }
  return objetos;
}

console.log("EXERCÍCIO 8");
console.log(arrayObjects(3));
console.log("- - - - - - - - - - - - - - -");

//  EXERCÍCIO 9  -----------------------------------------

function arrayObjectsTwo(numero, palavra) {
  let objetos = [];
  for (let i = 1; i <= numero; i++) {
    objetos.push({ [palavra]: i });
  }
  return objetos;
}

console.log("EXERCÍCIO 9");
console.log(arrayObjectsTwo(3, "teste numero"));
console.log("- - - - - - - - - - - - - - -");
