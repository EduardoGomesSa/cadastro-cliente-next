import Aside from '../components/aside'
import Content from '../components/content'
import Footer from '../components/footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div>
        <Aside />
        <Content />
      </div>
      <Footer />
    </div>
  )
}
