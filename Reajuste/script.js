function reajustar() {
  let nomeFuncionario = prompt("Qual o nome do funcionário ?");
  let salarioAtual = parseFloat(
    prompt(`Qual é o salário atual do(a) ${nomeFuncionario} ?`)
  );
  let aumentoPercentual = parseInt(
    prompt(
      `O salário de ${nomeFuncionario} vai ser reajustado em qual porcentagem ?`
    )
  );
  let paragrafo = document.getElementById("paragraph");

  if (nomeFuncionario && salarioAtual && aumentoPercentual) {
    paragrafo.textContent = "";
    let salarioAumento = salarioAtual * (aumentoPercentual / 100);
    let salario = (document.getElementById(
      "salarioAtual"
    ).innerText = `O salário até então era R$${salarioAtual}`);
    let aumentoSalarial = (document.getElementById(
      "aumentoSalarial"
    ).innerText = `Com um aumento de ${aumentoPercentual}%, o salário vai aumentar R$${salarioAumento} no próximo mês.`);
    let salarioReajustado = (document.getElementById(
      "salarioReajustado"
    ).innerText = `E a partir daí, ${nomeFuncionario} vai passar a ganhar R$${
      salarioAtual + salarioAumento
    }.`);
  }
}
