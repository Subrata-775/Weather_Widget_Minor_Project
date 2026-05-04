
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PrimarySearchAppBar from '../src/Components/NavBar'
import MediaCard from '../src/Components/MediaCard'
import SearchBox from './Components/SearchBox'

function App() {

  return (
    <>
      <PrimarySearchAppBar />
      <MediaCard />
      <SearchBox />


    </>


  )
}

export default App;
