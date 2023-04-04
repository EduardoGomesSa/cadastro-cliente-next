import { useEffect, useState } from "react"
import Cliente from "../../models/cliente"
import Formulario from "../formulario"

export default function Clientes(){
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/clientes')
            .then(response => response.json())
            .then(clientes => {
                setClientes(clientes)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    function mapping (){
        return clientes.map(cliente => {
            return (
                <tr key={cliente.id}>
                    <td>{cliente.id}</td>
                    <td>{cliente.nome}</td>
                    <td>{cliente.email}</td>
                    <td>
                        <a href="http://localhost:3000/formulario"><Formulario tipoForm={"atualizacao"}></Formulario>Edicap</a> 
                        | 
                        <a href="http://">Deletar</a>
                    </td>
                </tr>
            )
            }
        )
    }

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {mapping()}
                </tbody>
            </table>
        </div>
    )
}