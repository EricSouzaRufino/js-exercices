function verificar() {

    let nomeAluno = prompt("Qual é o nome do aluno ?");
    let nota1 = parseFloat(prompt(`Digite a primeira nota do(a) ${nomeAluno}`));
    let nota2 = parseFloat(prompt(`Digite a segunda nota do(a) ${nomeAluno}`));
    let media = (nota1 + nota2) / 2

    if (nota1 && nota2) {
        let situacaoH1 = document.getElementById('situacaoH1').innerText = `Analisando a situação de ${nomeAluno}`;
        let notas = document.getElementById('notas').innerText = `Com as notas ${nota1} e ${nota2}, a média do aluno é ${media}`;
        let situacao = document.getElementById('situacao');

        let aviso = document.getElementById('aviso').innerHTML = ''

        switch (true) {
            case media > 6:
                situacao.innerText = "Com a média acima de 6, o aluno está APROVADO"
                break;

            case media >= 3 && media < 6:
                situacao.innerText = "Com a média entre 3 e 6, o aluno está de RECUPERAÇÃO"
                break;

            default:
                situacao.innerText = "Com a média abaixo de 3, o aluno está REPROVADO"
                break;
        }
    }
}