//alert('JS carregado')
//console.log('JS Carregado');


function calcularCombustivel() {

    //SELEÇÃO DE DOM

    var etanol = document.querySelector('#etanol');
    var gasolina = document.querySelector('#gasolina');
    var areaResult = document.querySelector('#result');

    //console.log(etanol.value);
    //console.log(gasolina.value);

    //verificar se os valores são diferentes de vazio

    if (etanol.value != '' && gasolina.value != '') {

        areaResult.style.display='block'; // utilizado para fazer a caixa aparecer
        
        //Executar o cálculo
        var resultado = etanol.value / gasolina.value;
        //console.log(resultado);

        if (resultado <= 0.7) {
            //alert('Abasteça com etanol');  usado nesse caso para testar se tiver funcionando
            areaResult.innerHTML = '<span>Abasteça com: <br> <strong>Etanol</strong></span>';
        } else {
            //alert('Abastela com gasolina');  usado nesse caso para testar se tiver funcionando
            areaResult.innerHTML = '<span>Abasteça com: <br> <strong>Gasolina</strong></span>';
        }


    }

    else {
        alert('Preencha todos os campos');

    }



}

