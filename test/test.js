var assert = require('assert')
const fetch = require("node-fetch")

describe('Prueba funcion suma',async function() {
    it('El resultado de la suma debe ser 5', async function() {

        let resultado = await fetch('http://localhost:3000/sum/3/2')
                    .then(response => response.json())
                    .then(data => { return data })

      assert.equal(resultado, 5)
    })
})

describe('Prueba funcion resta',async function() {
    it('El resultado de la resta debe ser 1', async function() {

        let resultado = await fetch('http://localhost:3000/res/3/2')
                    .then(response => response.json())
                    .then(data => { return data })

      assert.equal(resultado, 1)
    })
})


describe('Prueba funcion multiplicacion',async function() {
    it('El resultado de la multiplicacion debe ser 6', async function() {

        let resultado = await fetch('http://localhost:3000/mult/3/2')
                    .then(response => response.json())
                    .then(data => { return data })

      assert.equal(resultado, 6)
    })
})


describe('Prueba funcion division',async function() {
    it('El resultado de la division debe ser 1', async function() {

        let resultado = await fetch('http://localhost:3000/div/2/2')
                    .then(response => response.json())
                    .then(data => { return data })

      assert.equal(resultado, 1)
    })
})