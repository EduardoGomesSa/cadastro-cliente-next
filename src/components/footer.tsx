import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <label>&shy; Eduardo - 2023</label>
            <label>
                <a href="#">GitHub</a>
                <a href="#">Linkedln</a>
            </label>
        </div>
    )
}