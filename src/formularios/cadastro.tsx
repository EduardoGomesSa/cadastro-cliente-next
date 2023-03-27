import { ChangeEvent, FormEvent, useState } from "react"
import axios from 'axios'
import styles from '../styles/Cadastro.module.css'

interface cliente {
    nome?: string
    email?:string
    logradouro?:string
    cidade?:string
    estado?:string
    cep?:string
}

export default function CadastroCliente(){
    const [cliente, setCliente] = useState<cliente>()

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/clientes', cliente)
            console.log(response.data)
            setCliente({ nome: '', email: '', logradouro: '',  cidade: '', estado: '', cep: ''})
        }catch(error:any){
            console.log(error.response.data)
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCliente({ ...cliente, [event.target.name]: event.target.value })
    }

    return (
        <div className={styles.cadastro}>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <label>Nome: </label><input type="text" name="nome" value={cliente?.nome} onChange={handleChange} />
                <label>E-mail: </label><input type="email" name="email" value={cliente?.email} onChange={handleChange} />
                <label>Logradouro: </label><input type="text" name="logradouro" value={cliente?.logradouro} onChange={handleChange} />
                <label>Cidade: </label><input type="text" name="cidade" value={cliente?.cidade} onChange={handleChange} />
                <label>Estado: </label><input type="text" name="estado" value={cliente?.estado} onChange={handleChange} />
                <label>CEP: </label><input type="text" name="cep" value={cliente?.cep} onChange={handleChange} />
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}