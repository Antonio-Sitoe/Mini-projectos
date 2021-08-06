
# Sass 
Sass e um pre-processador de css
entao escrevemos de uma forma e ele vai transformar 



@import 
 podemos importar um outro arquivo css 
 devemos colocar o _ antes de escrever
 qualquer nome de arquivos ao fazermos 
 importes porque ele cria um novo arquivo
 separado, enquanto nos queremos, no final criar
 um unico arquivo. e esta aqui o exemplo de como
 fazer o import no sass.

@import '_reset';
@import '_buttons';



# Variaveis no sass
podemos criar variaveis dentro de css
devemos manter a consistencia no design
A ordem importa, entao deste jeito conseguimos 
recuperar valores, reutilizar os valores.

$cor-primary: pink;
$cor-secundary: yellow;


# Nest ou alinhamento

ter a capacidade de colocar um selector dentro do outro, e podemos alinhar o quanto quisermos, sera como se fosse um efeito cascata.
devemos colocar no maximo tres alinhamentos
E so uma questao de organizacao.
Todo codigo que escrevemos no final sera em nesting

ul {
  text-align: center;

  li {
    display: inline-block;
    list-style: none;

    a {
      padding: 20px;
      border: 1px solid ;
      text-decoration: none;
      background: $roxo;
      font-family: $font;
    }
  }
}

E tem um caractery especial "&"
podemos colocar classes, ids, hover, afters e befores.

# Nesting de propriedades
identar propriedades



# @mixins

mixins - sao funcoes que podemos reutilizar 
Ajuda muito com os prefixos,







