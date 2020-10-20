import { http } from './config'

export default {
    listar:() => http.get('/generator'),
    criar:(size) => {
       return http.post('/generator', {size: size})
    },
    atualizar:() => http.put('/generator'),
    deletar:() => http.delete('/generator')
}