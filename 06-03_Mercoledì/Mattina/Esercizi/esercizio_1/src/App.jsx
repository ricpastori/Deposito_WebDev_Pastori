import FeaturesGrid from './components/FeaturesGrid'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <FeaturesGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
