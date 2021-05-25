// in 
something in somethingItems

// Arrays
var arvores = new Array["pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro"];
0 in arvores;       // retorna true
1 in arvores;       // retorna true
3 in arvores;       // retorna true
6 in arvores;       // retorna false
"cedro" in arvores  // retorna false (você deve especificar o número do índice, não o valor daquele índice)
"lenght" in arvores // retorna true (lenght é uma propriedade do Array)

// Objetos predefinidos
"PI" in Math        // retorna true
var minhaString = new String("Coral");
"lenght" in minhaString; // retorna true

// Objetos personalizados
var meuCarro = {marca: "honda", modelo: "fit", ano: 2008};
"marca" in meuCarro;    // retorna true
"modelo" in meuCarro;    // retorna true

// instaceof
objeto instanceof tipoObjeto

var dia = new Date(2021, 05, 24);

if (dia instanceof Date){
    // code here
}