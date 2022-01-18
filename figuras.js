// código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

/* const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro cuadrado del cuadrado es " + perimetroCuadrado + "cm cuadrados"); */

function perimetroCuadrado (lado) {
    return lado * 4
}

/* const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado); */
function areaCuadrado (lado) {
    return ladoCuadrado
}

console.groupEnd();

// código del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6, ladoTrianfulo2 = 6, baseTriangulo = 4;
console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1
    + " cm, "
    + ladoTrianfulo2
    + "cm, "
    + baseTriangulo
    + "cm"
    )

const alturaTriangulo = 5.5;
console.log("La altura del tringulo es " + alturaTriangulo +"cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTrianfulo2 + baseTriangulo;
console.log ("El perímetro del triangulo es " + perimetroTriangulo + "cm cuadrado");

const areaTriangulo = (baseTriangulo *alturaTriangulo) / 2;
console.log("El área del triangulo es " + areaTriangulo + "cm ")

console.groupEnd

// Código del circulos

console.group("Circulos");

// radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + "cm");

// diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + "cm");

// Pi
const PI = Math.PI;
console.log("El valor de PI es " + PI);

// Cincunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + "cm");

// area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es " + areaCirculo + "cm");

console.groupEnd();