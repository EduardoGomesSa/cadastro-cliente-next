import { useEffect, useState } from "react"
import Cliente from "../../models/Cliente"

export default function Clientes(){
    const [clientes, setClientes] = useState<Cliente>([])

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

    return (
        <div>
            {
                clientes.map(cliente => (
                    <div key={cliente.id}>{cliente.id} - {cliente.nome} - {cliente.email}</div>
                ))
            }
        </div>
    )
}