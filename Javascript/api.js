'use strict'

const pesquisarAlunos = async() => {
    const url = `https://api-senai.herokuapp.com/alunos`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export {pesquisarAlunos}