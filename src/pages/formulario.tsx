import Footer from "../components/footer";
import Header from "../components/header";
import Cadastro from "../formularios/cadastro";
import styles from "../styles/Formulario.module.css"

export default function CadastroCliente(){
    return (
        <div className={styles.formulario}>
            <Header />
            <Cadastro />
            <Footer />
        </div>
    )
}