import styles from '../styles/Footer.module.css'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <label>&shy; Eduardo - 2023</label>
            <label>
                <a href="#"><img src="./images/github.svg" alt="" /></a>
                <a href="#"><img src="./images/linkedin.svg" alt="" /></a>
            </label>
        </div>
    )
}