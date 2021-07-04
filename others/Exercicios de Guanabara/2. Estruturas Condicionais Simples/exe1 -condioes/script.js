const velocidade = Number(prompt('QUAL E A VELOCIDADE'));
const km = (velocidade - 80) * 5;
if(velocidade > 80){
    console.log(`Foi multado e tera que pagar ${km} mt`)
}