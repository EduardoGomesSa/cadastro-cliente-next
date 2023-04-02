import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div>
        <a href="dados/clientes">Ver clientes</a><br />
        <a href="formulario">Adicionar cliente</a>
      </div>
      <Footer />
    </div>
  )
}
