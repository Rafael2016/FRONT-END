$(function() {

    var contador = 0;

    $(".input-search").keyup(function() {

        contador = 0;

            //pega o css da tabela 
            var tabela = $(this).attr('alt');
            if ($(this).val() != "") {
                // OCULTA VALORES NÃO ENCONTRADOS.
                $("." + tabela + " tbody>tr").hide();
                // EXIBE OS RESULTADOS ENCONTRADOS.
                $("." + tabela + " td:contains-ci('" + $(this).val() + "')").parent("tr").show();
                contador = $("." + tabela + " td:contains-ci('" + $(this).val() + "')").length;

            } else {
                //EXIBE TABELA TODA 
                $("." + tabela + " tbody>tr").show();
            }
            //CONDICAO PARA EXIBIR TOTAL DE REGISTROS
            if(contador>0){
                $("#registros").html("Total de Registros:  "+contador);
            }
            
            else{

                contTable();
            }
        });

        //Registros Default
        function contTable() {
            
          var total = $(".lista-clientes tr").has("td").length; 
          $("#registros").html("Total de Registros:  "+total);
      }

  });

$.extend($.expr[":"], {
    "contains-ci": function(elem, i, match, array) {
        return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});