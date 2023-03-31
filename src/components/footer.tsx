import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <label>&shy; Eduardo - 2023</label>
            <label>
                <a href="#"><img src="./images/github.png" alt="" className={styles.img} /></a>
                <a href="#"><img src="./images/linkedln.png" alt="" className={styles.img} /></a>
            </label>
        </div>
    )
}