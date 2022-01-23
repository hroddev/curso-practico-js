// código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4
}

function areaCuadrado (lado) {
    return ladoCuadrado
}

console.groupEnd();


/* ******************************************************************** */
// código del triangulo
console.group("Triangulos")

function perimetroTriangulo (lado1, lado2, base) { 
    return Number.parseInt(lado1) + Number.parseInt(lado2) + Number.parseInt(base);
}

function alturaTriangulo (lado1, lado2, base) {
    if (lado1 == lado2){
        return Math.sqrt((lado1 * base));
    } else {
        return Math.sqrt(lado2*lado2);
    }
}

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}


console.groupEnd 

/* ******************************************************************** */

// Código del circulos

console.group("Circulos");

// radio
function diametroCirculo (radio) {
    return radio * 2;
}

// Pi
const PI = Math.PI;
console.log("El valor de PI es " + PI);

// Cincunferencia

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// area

function areaCirculo (radio) {
    return (radio * radio) * PI;
}

console.groupEnd();
/* ******************************************************************** */ 


// aqui interactuamos con el HTML


function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const lado2 = inputLado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = inputBase.value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const lado2 = inputLado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = inputBase.value;
    
    const altura = alturaTriangulo(lado1, lado2, base);
    alert(altura);
    
}

function calcularAreaTriangulo() {
    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const lado1 = inputLado1.value;
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const lado2 = inputLado2.value;
    const inputBase = document.getElementById("InputTrianguloBase");
    const base = inputBase.value;
    const altura = 5.5;

    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

