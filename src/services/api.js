import { http } from './config'

export default {
    listar:() => http.get('/generator'),
    criar:() => http.post(),
    atualizar:() => http.put('/generator'),
    deletar:() => http.delete('/generator')
}