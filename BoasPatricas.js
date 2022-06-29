//Methodo Assign - Juntar 2 objetos

const obj1 = {a:1 ,b:2};
const obj2 = {b: 4, e:5, a:2};
const novo = Object.assign({}, a , d));
console.log(novo);

//Map,Reduce e filter
dados = [{
    nome:'Bill', idade:3, especie:'dog'},{
    nome:'Rex', idade:10, especie:'dog'},{
    nome:'Fiona', idade:10, especie:'cat'
}];
let dogs        = dados.filter((dado)=> dado.especie ==='dog');
let idadeReal   = dogs.map((dog)=>({nome:dog.nome, idade:dog.idade * 7}));
console.log(dogs);
console.log(idadeReal); 

// ###INTERANDO OBJETO JSON DE FORMA DINAMICA,SEM SABER AS PROPRIEDADES
		//Objeto JSON	
for(key in data){	
	//Pega as chaves do objeto
    if(typeof data[key] !=='object'){
    
        console.log("Chave: " + key + " - Valor: " + data[key]);

    }else{
    	//Loop para pegar os valores
        data[key].forEach(function(value) {
	      for (key2 in value) {
	        console.log("Chave: " + key2 + " - Valor: " + value[key2]);
	      }
    }); 


    }

}

## Validação Vázio atribuição

var a = undefined;

var b = a != undefined ? a : 'vazia';
console.log(a);

## namespace POO 

var dados = (function)

## Gerar elemento HTML

const element        = document.getElementById('container-justificativa');
        const div            = document.createElement('div');
        
        div.innerHTML      = `<div class="jumbotron jumbotron-fluid" id="box-just-`+atividade+`">
                                <div class="container">
                                <div class="col-sm-2 col-md-2 col-xs-6">
                                    <div class="form-group">
                                        <label for="justificativaChapa">Chapa</label>
                                        <input type="text" class="form-control" name="justificativaChapa_`+
                                        atividade+`" id="justificativaChapa_`+atividade+`">
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-xs-12">
                                    <div class="form-group">
                                        <label for="justificativaNome">Nome</label>
                                        <input type="text" class="form-control" name="justificativaNome_`+atividade+`" id="justificativaNome_`+atividade+`">
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4 col-xs-6">
                                    <div class="form-group">
                                        <label for="nivel">Nível Processo</label>
                                        <input type="text" class="form-control" name="nivel_`+atividade+`" id="nivel_`+atividade+`">
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                    <label for="justificativ" class="control-label">
                                        <strong>Justificativa:</strong>
                                    </label>
                                    <textarea class="form-control" name="justificativa_`+atividade+`" cols="50" rows="5">                                                
                                    </textarea>
                                </div>
                            </div>`;

        element.appendChild(div);

### SPLIT seperar string

## O separador também pode ser uma expressão regular.

var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ';
names.split(/\s*;\s*/)

 
 ##FORMATA 

 //Moeda Local 
 parseFloat(sd).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});

/* ##Pegar data da tag */

var idCentro = htmlElement.getAttribute('data-modal');

/* ## Somar Valores do CheckBox selecionados */

 $('.ted').change(function (e) {
            var total = $('input[class="ted"]:checked').get().reduce(function (tot, el) {
                let numberf = el.getAttribute('data-valor').toString().replace('.', '').replace(',', '.');
                return (parseFloat(tot) + parseFloat(numberf)).toFixed(2);
            }, 0);

            $('#vlrTotal').val(moneyBr(total));
        });
/* ## setTimeoutTimeout, SetInterval */

const mostrar = () =>{
    alert('SetTimeout');
};
setTimeout(mostrar, 3000);

const testeInterval = setInterval (() => {console.log('Teste');},1000);
/*Cancela setInterval*/ 
setTimeout(()=>{clearInterval(testeInterval)},1000);

/* ###Factories(Fábrica de Objeto)*/
const Mamifero = function(nome, som) {
   return {nome ,som};
};

/*TEXTAREA EXPANDIR TAMANHO DO TEXTO*/
setTimeout(function () {

       var txtarea = document.querySelector("textarea.form-control");
       txtarea.style.height = txtarea.scrollHeight+"px";        
                
}, 100);

/*FECTH CHAMADA AJAX */

$('elemento').on('click', async function(){

	var response = await fetch('URL CHAMADA');
        var jsonData = await response.json();
	
  	/*Iterando retorno Loop*/
	jsonData.map(value =>{
		console.log(value)
  	})		

});

/* UPLOAD ARQUIVO */

$('input[type="file"]').change(function(e){
            var fileName = e.target.files[0].name;
            alert('The file "' + fileName +  '" has been selected.');
        });
/* VERIFICAR SE ELEMENTO EXISTE EM UMA STRING*/
let frase = 'Rafael luz o maior'
console.log(frase.includes('luz'))
/**TRANSFORMA CADEIA DE STRING EM ARRAY */
let word = 'Rafael'
console.log(Array.from(word))

/* TRANFORMA ARRAY MULTINIVEIS EM ARRAY SIMPLES FLAT*/
const  idade = [20,34,[35,60,[70,80]]];
idade.flat(2); 

/* TRANFORMA ARRAY EM STRING */

['a', 'b', 'c'].toString(); // 'a,b,c'


/**
 * PROIBI NUMEROS NEGATIVOS IMPUT 
 */
oninput="validity.valid||(value='');"


/**
 * FORMATAR DATA
 */

let data_americana = "2020-12-30";
let data_brasileira = data_americana.split('-').reverse().join('/');



const urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3'
];


/**
 * CHAMA PROMISE ALL 
 */
async function getTodos() {
  const promises = urls.map(async (url, idx) => 
    console.log(`Received Todo ${idx+1}:`, await fetch(url))
  );

  await Promise.all(promises);

  console.log('Finished!');
}