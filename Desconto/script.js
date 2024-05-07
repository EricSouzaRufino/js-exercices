function desconto() {
            
  let produto = prompt("Qual é o produto que você está comprando ?");
  let precoProduto = parseFloat(prompt("Qual é o preço do produto ?"));
  let paragraph = document.querySelector('p');
  let desconto;


  if (produto && precoProduto) {
      desconto = 0.10
      paragraph.textContent = "";

      let precoOriginal = document.getElementById('precoOriginal').innerText = `O preço original era: R$${precoProduto}`
      let produtoH1 = document.getElementById('produtoH1').textContent = `Calculando o desconto de 10% para "${produto}"`;
      let descontoReais = document.getElementById('descontoReais').innerText = `Você acaba de ganhar R$${precoProduto*desconto} de desconto (-10%)`
      let totalFinal = document.getElementById("totalFinal").innerText = `No fim, você vai pagar R$${precoProduto*0.90} no produto "${produto}"`
  } else {
      alert("Preencha todas as informações.")
  }
}

