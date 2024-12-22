import Header from './components/Header'
import Menu from './components/Menu'
import Jaratok from './components/Jaratok'
import UjJarat from './components/UjJarat'
import Main from './components/Main'
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom"



function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Header headerText={"Trolibusz hálózat"}/>
        <Menu/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/jaratok" element={<Jaratok/>}/>
          <Route path="/ujjarat" element={<UjJarat/>}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
