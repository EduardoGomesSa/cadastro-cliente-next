import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div>Home</div>
      <Footer />
    </div>
  )
}
