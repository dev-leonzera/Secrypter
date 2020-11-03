<template>
    <h1>Secrypter</h1>
    <form @submit.prevent="gerarSenhaFinal">
      <div class="generator-container">
        <div class="generator-chars">
          <span id="desc">Escolha o tamanho da sua senha:</span>
          <input v-model="size" type="number" id="length" min='4' max='32'/>
          <br/>
        </div>
        <div class="generator-type">
          <span id="desc-type">Escolha o tipo da senha</span>
          <input type="checkbox" id="option1" name="option1" value="Car">
          <label class="generator-label" for="vehicle2">Somente números</label>
          <input type="checkbox" id="option2" name="option2" value="Car">
          <label class="generator-label" for="vehicle2">Somente letras</label>
          <input type="checkbox" id="option3" name="option3" value="Car">
          <label class="generator-label" for="vehicle2">Letras e números</label>
        </div>
        <button type="submit">Gerar Senha</button>
        <div class="generator-result">
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
  .generator-result{
    padding-top: 2rem;
  }
  .generator-container #length{
    margin-left: 5px;
  }
  .generator-container .generator-label, #desc-type{
    color:white

  }
  .generator-container #desc-type{
    margin-right: 5px;
  }
  h1, #desc{
    color: white;
  }
</style>