function funcaoUm() {
//alert("funcaoUm vai ser chamada");
  funcaoDois();  
}

function funcaoDois() {
//alert("funcaoDois vai ser chamada");
  funcaoTres();
}

function funcaoTres() {
//alert("funcaoTres vai ser chamada");
  funcaoQuatro();
}

function funcaoQuatro() {
//alert("funcaoQuatro vai ser chamada");
  meuTitulo.innerHTML = "Esse é um novo titulo!";  
}

//alert("Documento JavaScript carregado");

var meuTitulo = document.getElementById("tituloPrincipal");

meuTitulo.onclick = function () {
//alert("funcaoUM vai ser chamada");
  funcaoUm();
//alert("funcaoUm foi chamada");
} 

