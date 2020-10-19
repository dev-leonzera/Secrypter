<template>
    <h1>Secrypter</h1>
    <div class="generator-container">
      <div class="result-body">
        <span id="desc">Escolha a quantidade de caracteres para sua senha</span>
        <input v-model="chars" type="number" id="length" min='4' max='32'/>
      </div>
      <div class="generator">
        <input type="text" id="passgen" :value="pass">
        <button @click="gerarSenha">Gerar Senha</button>
        <button class="btn" id="clipboard">
			    <i class="far fa-clipboard"></i>
		    </button>
        <button @click="copiarSenha">Copiar</button>
      </div>
    </div>
</template>

<script>

import api from '../services/api'

export default {
  name: 'Generator',
  
  data() {
    return {
      pass: '',
      chars: ''
    }
  },

  methods: {
      gerarSenha: function(){
          api.listar().then( res => {
            this.pass = res.data
            alert('Senha gerada com sucesso!')
          })
      },
      gerarSenhaFinal: function(){
          api.criar('/generator', this.chars).then( res => {
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
    border: 1px solid red;
  }
  h1, #desc{
    color: white;
  }
</style>