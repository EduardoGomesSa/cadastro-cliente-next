import styles from '../styles/Aside.module.css'

export default function Aside(){
    return (
        <div className={styles.aside}>
            <img src="https://source.unsplash.com/random" alt="Imagem aleatória da tela inicial" className={styles.img} />
        </div>
    )
}