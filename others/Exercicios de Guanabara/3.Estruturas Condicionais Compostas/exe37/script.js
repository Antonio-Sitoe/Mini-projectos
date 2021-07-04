//ler o salario actual

const salario = Number(prompt('Digite o seu salario'));

//genero de funcionario
const genero = prompt('Digite "f" se feminino e "m" se masculino')


//anos de trabalh na empresa
const anos = Number(prompt('Digite os anos de trabalho'));

//mostrar o salario
function salarioCalculoF() {
  let resultado;

  //Mulheres
  if (anos < 15) {
    // anos<=15 == salario += 0.05
    resultado = (salario * 0.05) + salario;
  } else if (anos > 15 && anos <= 20) {
    //anos >15 && <=20 ===salario += 0.12
    resultado = (salario * 0.12) + salario
  } else if (anos > 20) {
    //anos > 20 === salario *=0.23
    resultado = (salario * 0.23) + salario;
  }
  return resultado;
}

function salarioCalculoM() {
  let resultado;

  //HOMENS
  if (anos < 20) {
    // salario *= 0.03
    resultado = (salario * 0.03) + salario;
  } else if (anos >= 20 && anos <= 30) {
    //anos >15 && <=20 ===salario += 0.12
    resultado = (salario * 0.13) + salario
  } else if (anos > 30) {
    //anos > 20 === salario *=0.23
    resultado = (salario * 0.25) + salario;
  }
  return resultado;
}


function VerificarGenero() {
  switch (genero) {
    case 'f':
      console.log(salarioCalculoF());
      break;
    case 'm':
      console.log(salarioCalculoM());
      break;
  }
}
VerificarGenero()