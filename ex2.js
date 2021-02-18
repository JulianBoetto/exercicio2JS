var nome = {};
var sobreNome = {};
var idade = {};
var rest = 0;

nome.a = prompt("Nome:", "Digite o nome da primeira pessoa");
sobreNome.a = prompt("Sobrenome:", "Digite o sobrenome da primeira pessoa");
idade.a = Number(prompt("Idade:", "Só idade da primeira pessoa"));
nome.b = prompt("Nome:", "Digite o nome da segunda pessoa");
sobreNome.b = prompt("Sobrenome:", "Digite o sobrenome da segunda pessoa");
idade.b = Number(prompt("Idade:", "Só idade da segunda pessoa"));

console.log("Bemvindo " + nome.a + " e " + nome.b + "!");
console.log("Sua idade é " + String(idade) + " anos.");
console.log("Os dados da primeira pessoa:")
console.table(
    {
        nomecompleto: nome.a + " " + sobreNome.a,
        idade: idade.a + " anos",
    });
console.log("Os dados da segunda pessoa:")
console.table(
    {
        nomecompleto: nome.b + " " + sobreNome.b,
        idade: idade.b + " anos",
    }
)

if (idade.a > idade.b)
    {   
        rest = idade.a - idade.b;
        console.log(nome.a + " é maior que " + nome.b + " por " + Number(rest) + " anos");
    }
else if (idade.a == idade.b)
    {
        console.log("As pessoas tem a mesma idade, " + idade.a + " justo");
    }
else {
    rest = idade.b - idade.a;
    console.log(nome.b + " é maior que " + nome.a + " por " + Number(rest) + " anos");
}