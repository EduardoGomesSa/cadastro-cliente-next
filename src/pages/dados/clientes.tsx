import { useEffect, useState } from "react"

export default function Clientes(){
    const [clientes, setClientes] = useState([])

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
                    <div key={cliente.id}>{cliente.nome}</div>
                ))
            }
        </div>
    )
}