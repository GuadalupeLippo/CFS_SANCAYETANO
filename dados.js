"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var carasDado = 6;
var CantidadDados = rls.questionInt("ingrese la cantidad de dados: ");
var denominador = Math.pow(carasDado, CantidadDados);
var probabilidadSacarSeis = 1 / denominador;
console.log("el denominador es", denominador, "y la probabilidad de sacar todos seis es", probabilidadSacarSeis * 100, "%.");
