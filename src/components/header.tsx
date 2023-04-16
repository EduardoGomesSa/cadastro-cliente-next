import styles from '../styles/Header.module.css'
import Cabecalho from './cabecalho'
import Logo from './logo'

export default function Header(){
    return (
        <div className={styles.header}>
            <Logo />
            <Cabecalho />
        </div>
    )
}