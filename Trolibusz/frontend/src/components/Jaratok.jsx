import { useEffect,useState } from "react"
import JaratCard from "./JaratCard"


function Jaratok() {
  const [jaratok,setJaratok] = useState([])
  const [refresh,setRefresh] = useState(false)

  const frissites=()=>{
    setRefresh(prev=>!prev);
  }

  useEffect(() => {
      fetch(`${import.meta.env.VITE_BASE_URL}/jaratok`)
      .then(res => res.json())
      .then(data => setJaratok(data))
      .catch(err => console.log(err))
  },[refresh])


  return (
    
    <div className="bg-red-100 text-center">
            <h1 class="text-red-800 text-center">Jelenlegi Járatok</h1>
          <div className="grid grid-cols-3">
            {
            jaratok.map((jarat) =>(<JaratCard key={jarat.id} jarat={jarat} frissites={frissites}/>))
            }
          </div>
        </div>
  );
}

export default Jaratok;
