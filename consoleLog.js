
/**
 Respondendo à pergunta de "Utilizando apenas comandos (sem mouse) salvar uma variável ou objeto do console em um arquivo", você pode importar (ou colar) o código abaixo no próprio console e pode usar o comando console.save(), passando como primeiro parâmetro a variável/objeto e o path do arquivo de destino no segundo parâmetro. 
 */


console.save = function(data, filename){

    if(!data) {
        console.error('Console.save: No data')
        return;
    }

    if(!filename) filename = 'console.json'

    if(typeof data === "object"){
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {type: 'text/json'}),
        e    = document.createEvent('MouseEvents'),
        a    = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
 }
})(console)

/**
 *  Chamando 
    var a1 = "aaaaaaaaaaaaa";
    console.save(a1, "/home/myUser/saida.txt");
*/
