import Banner from "./components/molecules/banner/Banner"
import Card from "./components/molecules/card/Card"
import Cta from "./components/molecules/cta/Cta"
import Header from "./components/molecules/header/Header"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Card />
      <Cta />
    </div>
  )
}

export default App
