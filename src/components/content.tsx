import Address from "./address";
import styles from '../styles/Content.module.css'

export default function Content(){
    return (
        <div className={styles.content}>
            <Address link="dados/clientes" text="Ver clientes" />
            <Address link="formulario" text="Adicionar cliente" />
        </div>
    )
}