let num = document.querySelector("input#fnum")
let flista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

var r = document.getElementById("res")
var b = document.getElementById("botaoAd")

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        b.style.borderRadius = "15px"
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado com sucesso!`
        flista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert("[ATENÇÃO] Valor inválido ou já encontrado na lista!")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("[ATENÇÃO] Por favor, adicione valores antes de finalizar!")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let posi in valores){
            soma += valores[posi]
            media = soma/tot
            if(valores[posi] > maior){
                maior = valores[posi]
            }
            if(valores[posi] < menor){
                menor = valores[posi]
            }
        }

        r.style.background = "rgb(22, 67, 228)"
        r.style.paddingTop = "1px"
        r.style.paddingBottom = "1px"
        r.style.paddingLeft = "5px"
        r.style.paddingRight = "5px"
        r.style.borderRadius = "15px"

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma dos valores informados é igual a: <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores informados é igual a: <strong>${media}</strong>.</p>`
    }
}

function limpar(){
    flista.innerHTML = ''
    valores.length = 0
    r.style.background = "none"
    r.innerHTML = ""
}