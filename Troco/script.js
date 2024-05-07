function converter() {
    let produto = prompt("Que produto você está comprando ?");
    let produtoPreco = parseFloat(
      prompt(`Quanto custa o(a) ${produto} que você está comprando ?`)
    );
  
    let dinheiro = parseFloat(
      prompt(
        `Qual foi o valor em dinheiro que você deu para pagar o ${produto} ?`
      )
    );
    let troco = dinheiro - produtoPreco;
  
    if (dinheiro > produtoPreco) {
      document.getElementById('Resultado').innerText = `Você comprou ${produto} que custou R$${produtoPreco}.\n Você deu R$${dinheiro} em dinheiro e vai receber R$${troco} de troco.\n Volte sempre.`
      ;
    }
  }