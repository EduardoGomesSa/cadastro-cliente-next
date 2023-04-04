import Footer from "../components/footer";
import Header from "../components/header";
import AtualizacaoCliente from "../formularios/atualizacao";
import Cadastro from "../formularios/cadastro";
import styles from "../styles/Formulario.module.css"

interface FormularioProps{
    tipoForm: String
}

export default function Formulario(props:FormularioProps){
    return (
        <div className={styles.formulario}>
            <Header />
            {
                props.tipoForm === "cadastro" ? 
                <Cadastro /> :
                <AtualizacaoCliente />
            }
            
            <Footer />
        </div>
    )
}