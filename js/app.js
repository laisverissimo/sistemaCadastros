const body = document.querySelector("body");
const btnNewClient = document.querySelector("#cadastrar-cliente");
const btnNewProduct = document.querySelector("#cadastrar-produto");

const formClient = document.getElementById("form-client");
const formProduct = document.getElementById("form-product");

btnNewClient.addEventListener("click", function () {
  body.className = "new-client-js";
});

btnNewProduct.addEventListener("click", function () {
  body.className = "";
});

formProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  let product = formProduct.elements["product"].value;
  let description = formProduct.elements["description"].value;
  let categoria = formProduct.elements["categoria"].value;
  let preco = formProduct.elements["preco"].value;
  let estoque = formProduct.elements["estoque"].value;
  let variacoes = formProduct.elements["variacoes"].value;
  let peso = formProduct.elements["peso"].value;

  let data = {
    product,
    description,
    categoria,
    preco,
    estoque,
    variacoes,
    peso,
  };

  let dataArray = [];
  let items = JSON.parse(localStorage.getItem("productItems"));

  if (items) {
    dataArray = items;
  }

  dataArray.push(data);

  let convertData = JSON.stringify(dataArray);

  localStorage.setItem("productItems", convertData);

  formProduct.reset();
});

formClient.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = formClient.elements["nome"].value;
  let email = formClient.elements["email"].value;
  let telefone = formClient.elements["telefone"].value;
  let endereco = formClient.elements["endereco"].value;
  let nascimento = formClient.elements["nascimento"].value;
  let genero = formClient.elements["genero"].value;
  let cpf = formClient.elements["cpf"].value;

  let data = {
    nome,
    email,
    telefone,
    endereco,
    nascimento,
    genero,
    cpf,
  };

  let dataArray = [];
  let items = JSON.parse(localStorage.getItem("clientItems"));

  if (items) {
    dataArray = items;
  }

  dataArray.push(data);

  let convertData = JSON.stringify(dataArray);

  localStorage.setItem("clientItems", convertData);

  formClient.reset();
});
