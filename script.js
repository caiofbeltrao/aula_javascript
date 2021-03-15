//var nome = "Caio Felipe";
//var idade = 25;
//var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo" + nome);
//alert(`${nome} tem ${idade} anos`)
//console.log(nome);
//console.log(idade);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.slice(0,5));
//console.log(frase.charAt(6));

//var lista = ["maçã", "pêra", "banana"];
//console.log(lista);
//console.log(lista[1]);
//alert(lista[0]);
//lista.push("uva");
//console.log(lista);
//console.log(lista.reverse());
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));

/*var idade = prompt("Qual a sua idade?");

if (idade >= 18){
    alert("Voto obrigatório");
} else if ((idade < 18 && idade >=16) || idade > 65){
    alert("Voto facultativo");
}else{
    alert("Não pode votar");
};*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    count = count + 1;
};*/

/*var count;
for(count = 0; count<=5; count++){
    alert(count);
};*/

/*var d = new Date();
alert(d.getMonth()+1);*/

/*function soma(n1, n2){
    return n1+n2;
};

function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome);
};

var validar = 0;
function valida_idade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?")
valida_idade(idade);
console.log(validar);

alert(soma(5,5));
alert(setReplace("Japão é o melhor pais","Japão","Brasil"));*/

function clicou(elemento){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://pt.wikipedia.org/wiki/Linda_Ronstadt");/*Abre em outra pagina*/ 
    window.location.href = "https://pt.wikipedia.org/wiki/Linda_Ronstadt";/*Abre na mesma pagina*/ 
}

function trocar(elemento){
    elemento.innerHTML = "Passou o mouse por cima";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}
