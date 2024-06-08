import '../../App.css'
import Hero from '../../components/Hero'
import SideBar from '../../components/SideBar'
import styles from './Home.module.css'



function HomePage() {

  return (
    <div className={`${styles.container}`}>
    <SideBar />
    <Hero />
    </div>
  )
}

export default HomePage
