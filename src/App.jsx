import Hero from './components/Hero'
import SteakSection from './components/SteakSection'
import PizzaSection from './components/PizzaSection'
import BurgerSection from './components/BurgerSection'
import Footer from './components/Footer'

export default function App() {
    return (
        <main className="font-poppins">
            <Hero />
            <SteakSection />
            <PizzaSection />
            <BurgerSection />
            <Footer />
        </main>
    )
}
