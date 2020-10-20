<template>
    <h1>Secrypter</h1>
    <form @submit.prevent="gerarSenhaFinal">
      <div class="generator-container">
        <div class="result-body">
          <span id="desc">Escolha o tamanho da sua senha:</span>
          <input v-model="size" type="number" id="length" min='4' max='32'/>
          <br/>
          <button type="submit">Gerar Senha</button>
        </div>
        <div class="generator">
          <input type="text" id="passgen" :value="pass">
          <button @click="copiarSenha">Copiar</button>
        </div>
      </div>
    </form>
</template>

<script>

import api from '../services/api'

export default {
  name: 'Generator',
  
  data() {
    return {
      pass: '',
      size: ''
    }
  },

  methods: {
    gerarSenhaFinal: function(){
      console.log(this.size)
      console.log(typeof(this.size))
      api.criar(this.size).then( res => {
        this.pass = res.data
        alert('Senha gerada com sucesso!')
      })
    },
    copiarSenha () {
      let senhaCopiada = document.querySelector('#passgen')
      senhaCopiada.setAttribute('type', 'text')
      senhaCopiada.select()
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        alert('Testing code was copied ' + msg);
      } catch (err) {
        alert('Oops, unable to copy');
      }
      window.getSelection().removeAllRanges()
    },
  }
}
</script>
<style>
  body{
    background-color:#333;
  }

  .result-body{
    padding-bottom: 2rem;
  }

  .result-body span{
    padding-right: 10px;
  }

  h1, #desc{
    color: white;
  }
</style>