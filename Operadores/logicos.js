// AND lógico (&&) Retorna o primeiro em caso de falso
exp1 && exp2

var a1 = true && true;      // t && t returna true
var a2 = true && false;     // t && f returna false
var a3 = false && true;     // f && t returna false
var a4 = false && (3 == 4); // f && f returna false
var a5 = "Gato" && "Cão";   // t && t returna Cão
var a6 = false && "Gato";   // f && t returna false
var a7 = "Gato" && false;   // t && f returna false

// OU lógico (||) Retorna o segundo em caso de falso
exp1 || exp2

var o1 = true || true;      // t || t returna true
var o2 = true || false;     // t || f returna true
var o3 = false || true;     // f || t returna true
var o4 = false || (3 == 4); // f || f returna false
var o5 = "Gato" || "Cão";   // t || t returna Gato
var o6 = false || "Gato";   // f || t returna Gato
var o7 = "Gato" || false;   // t || f returna Gato

// NOT lógico (!)
!exp1

var n1 = !true;     // !t retorna false
var n2 = !false;     // !f retorna true
var n3 = !"Gato";     // !t retorna false

// True
" "
1
['Teste']

// False
""
0
[vazio];


// Forçar o booleano (!!)