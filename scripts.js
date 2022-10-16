
function selecionarprato(selecao){
    const pri = selecao.classList.contains("feijoada");
    const seg = selecao.classList.contains("carne");
    const ter = selecao.classList.contains("cuscuz");
    console.log(pri);
    if (pri == true){
        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");
        const itemcarne = document.querySelector(".carne");
        itemcarne.classList.remove("verde")
        itemcarne.classList.add("branco")
        const itemcuscuz = document.querySelector(".cuscuz")
        itemcuscuz.classList.remove("verde")
        itemcuscuz.classList.add("branco")

        }   else if (seg == true){
        selecao.classList.remove("branco");
        selecao.classList.add("verde");
        const itemfeijoada = document.querySelector(".feijoada");
        itemfeijoada.classList.remove("verde")
        itemfeijoada.classList.add("branco")
        const itemcuscuz = document.querySelector(".cuscuz")
        itemcuscuz.classList.remove("verde")
        itemcuscuz.classList.add("branco")

        }   else if (ter==true){
        selecao.classList.remove("branco");
        selecao.classList.add("verde");
        const itemcarne = document.querySelector(".carne");
        itemcarne.classList.remove("verde")
        itemcarne.classList.add("branco")
        const itemfeijoada = document.querySelector(".feijoada");
        itemfeijoada.classList.remove("verde")
        itemfeijoada.classList.add("branco")

    }

    
}

function selecionarbebida(selecao){
    const pri = selecao.classList.contains("agua");
    const seg = selecao.classList.contains("caldo");
    const ter = selecao.classList.contains("suco");
    console.log(pri);
    if (pri == true){
        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");
        const itemcaldo = document.querySelector(".caldo");
        itemcaldo.classList.remove("verde")
        itemcaldo.classList.add("branco")
        const itemsuco = document.querySelector(".suco")
        itemsuco.classList.remove("verde")
        itemsuco.classList.add("branco")

        }   else if (seg == true){
        selecao.classList.remove("branco");
        selecao.classList.add("verde");
        const itemagua = document.querySelector(".agua");
        itemagua.classList.remove("verde")
        itemagua.classList.add("branco")
        const itemsuco = document.querySelector(".suco")
        itemsuco.classList.remove("verde")
        itemsuco.classList.add("branco")

        }   else if (ter==true){
        selecao.classList.remove("branco");
        selecao.classList.add("verde");
        const itemagua = document.querySelector(".agua");
        itemagua.classList.remove("verde")
        itemagua.classList.add("branco")
        const itemcaldo = document.querySelector(".caldo");
        itemcaldo.classList.remove("verde")
        itemcaldo.classList.add("branco")

    }

    
    
}

function selecionarsobremesa(selecao){
    const pri = selecao.classList.contains("dindim");
    const seg = selecao.classList.contains("pudim");
    const ter = selecao.classList.contains("bolo");
    console.log(pri);
    if (pri == true){
        selecao.classList.remove("branco");
        selecao.classList.toggle("verde");
        const itempudim = document.querySelector(".pudim");
        itempudim.classList.remove("verde")
        itempudim.classList.add("branco")
        const itembolo = document.querySelector(".bolo")
        itembolo.classList.remove("verde")
        itembolo.classList.add("branco")

        }   else if (seg == true){
        selecao.classList.remove("branco");
        selecao.classList.add("verde");
        const itemdindim = document.querySelector(".dindim");
        itemdindim.classList.remove("verde")
        itemdindim.classList.add("branco")
        const itembolo = document.querySelector(".bolo")
        itembolo.classList.remove("verde")
        itembolo.classList.add("branco")

        }   else if (ter==true){
        selecao.classList.remove("branco");
        selecao.classList.add("verde");
        const itemdindim = document.querySelector(".dindim");
        itemdindim.classList.remove("verde")
        itemdindim.classList.add("branco")
        const itempudim = document.querySelector(".pudim");
        itempudim.classList.remove("verde")
        itempudim.classList.add("branco")

    }
}

