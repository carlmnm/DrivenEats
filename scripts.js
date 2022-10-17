let prato;
let bebida;
let sobremesa;

function selecionarprato(selecao){
    const pri = selecao.classList.contains("feijoada");
    const seg = selecao.classList.contains("carne");
    const ter = selecao.classList.contains("cuscuz");
    const iconizadofei = document.querySelector(".iconefeijoada");
    const iconizadomac = document.querySelector(".iconemacaxeira");
    const iconizadocuscuz = document.querySelector(".iconecuscuz");

    if (pri===true){
        prato = "Feijoada";

        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");

        
        iconizadofei.classList.toggle("escondido");

        const itemcarne = document.querySelector(".carne");
        iconizadomac.classList.add("escondido");
        itemcarne.classList.remove("verde");
        itemcarne.classList.add("branco");
        const itemcuscuz = document.querySelector(".cuscuz");
        iconizadocuscuz.classList.add("escondido");
        itemcuscuz.classList.remove("verde");
        itemcuscuz.classList.add("branco");

        }   else if (seg === true){
        prato = "Carne de Sol";

        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");

    
        iconizadomac.classList.toggle("escondido")

        const itemfeijoada = document.querySelector(".feijoada");
        iconizadofei.classList.add("escondido")
        itemfeijoada.classList.remove("verde")
        itemfeijoada.classList.add("branco")
        const itemcuscuz = document.querySelector(".cuscuz")
        iconizadocuscuz.classList.add("escondido")
        itemcuscuz.classList.remove("verde")
        itemcuscuz.classList.add("branco")

        }   else if (ter==true){
        prato = "Cuscuz Temperado";

        selecao.classList.remove("branco");
        selecao.classList.add("verde");

        
        iconizadocuscuz.classList.toggle("escondido")


        const itemcarne = document.querySelector(".carne");
        iconizadomac.classList.add("escondido")
        itemcarne.classList.remove("verde")
        itemcarne.classList.add("branco")
        const itemfeijoada = document.querySelector(".feijoada");
        iconizadofei.classList.add("escondido")
        itemfeijoada.classList.remove("verde")
        itemfeijoada.classList.add("branco")

    }

    
}

function selecionarbebida(selecao){
    const pri = selecao.classList.contains("agua");
    const seg = selecao.classList.contains("caldo");
    const ter = selecao.classList.contains("suco");
    const iconizadoagu = document.querySelector(".iconeagua");
    const iconizadocal = document.querySelector(".iconecaldo");
    const iconizadosuco = document.querySelector(".iconesuco");
    
    if (pri == true){
        bebida = "Água";

        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");

        iconizadoagu.classList.toggle("escondido");

        const itemcaldo = document.querySelector(".caldo");
        iconizadocal.classList.add("escondido");
        itemcaldo.classList.remove("verde")
        itemcaldo.classList.add("branco")
        const itemsuco = document.querySelector(".suco")
        iconizadosuco.classList.add("escondido");
        itemsuco.classList.remove("verde")
        itemsuco.classList.add("branco")

        }   else if (seg == true){
        bebida = "Caldo de Cana";

        selecao.classList.remove("branco");
        selecao.classList.add("verde");

        iconizadocal.classList.toggle("escondido");

        const itemagua = document.querySelector(".agua");
        iconizadoagu.classList.add("escondido");
        itemagua.classList.remove("verde")
        itemagua.classList.add("branco")
        const itemsuco = document.querySelector(".suco")
        iconizadosuco.classList.add("escondido");
        itemsuco.classList.remove("verde")
        itemsuco.classList.add("branco")

        }   else if (ter==true){
        bebida = "Suco";

        selecao.classList.remove("branco");
        selecao.classList.add("verde");

        iconizadosuco.classList.toggle("escondido");

        const itemagua = document.querySelector(".agua");
        iconizadoagu.classList.add("escondido");
        itemagua.classList.remove("verde")
        itemagua.classList.add("branco")
        const itemcaldo = document.querySelector(".caldo");
        iconizadocal.classList.add("escondido");
        itemcaldo.classList.remove("verde")
        itemcaldo.classList.add("branco")

    }

    
    
}

function selecionarsobremesa(selecao){
    const pri = selecao.classList.contains("dindim");
    const seg = selecao.classList.contains("pudim");
    const ter = selecao.classList.contains("bolo");
    const iconizadodin = document.querySelector(".iconedindim");
    const iconizadopud = document.querySelector(".iconepudim");
    const iconizadobolo = document.querySelector(".iconebolo");
    if (pri == true){
        sobremesa = "Dindim";

        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");

        iconizadodin.classList.toggle("escondido");

        const itempudim = document.querySelector(".pudim");
        iconizadopud.classList.add("escondido");
        itempudim.classList.remove("verde")
        itempudim.classList.add("branco")
        const itembolo = document.querySelector(".bolo");
        iconizadobolo.classList.add("escondido");
        itembolo.classList.remove("verde")
        itembolo.classList.add("branco")

        }   else if (seg == true){
        sobremesa = "Pudim";

        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");

        iconizadopud.classList.toggle("escondido");

        const itemdindim = document.querySelector(".dindim");
        iconizadodin.classList.add("escondido");
        itemdindim.classList.remove("verde")
        itemdindim.classList.add("branco")
        const itembolo = document.querySelector(".bolo")
        iconizadobolo.classList.add("escondido");
        itembolo.classList.remove("verde")
        itembolo.classList.add("branco")

        }   else if (ter==true){
        sobremesa = "Bolo de Cenoura";

        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");

        iconizadobolo.classList.toggle("escondido");

        const itemdindim = document.querySelector(".dindim");
        iconizadodin.classList.add("escondido");
        itemdindim.classList.remove("verde")
        itemdindim.classList.add("branco")
        const itempudim = document.querySelector(".pudim");
        iconizadopud.classList.add("escondido");
        itempudim.classList.remove("verde")
        itempudim.classList.add("branco")
        finalizado()
    }
}

function finalizado(){
    const botao = document.querySelector(".conteinerbarrainf")
    console.log(botao)
    if (prato && bebida && sobremesa !== undefined){

        botao.classList.toggle("conteinerbarrainf")
        botao.classList.toggle("finalizar")
        botao.innerHTML = "Finalizar Pedido"
    }
}

