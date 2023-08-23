import axios from "axios"
import { useEffect, useRef, useState } from "react"


export const Who = () => {
    const refImg = useRef()
    const [input,setInput] = useState("")
    const [random,setRandom]= useState({})
    const randomId = Math.ceil(Math.random() * 150)

    function handleSubmit(e){
    e.preventDefault()
    
    if(input.toLowerCase() === random.name.toLowerCase()){
        refImg.current.classList.remove("image-filter")
        alert("Es correcto!")
    }else{
        alert("Segui participando")
    }
    }
    function handleChange(e){
        console.log(e.target.value);
        setInput(e.target.value)
      }

      function handleChangePokemon(){
        refImg.current.classList.add("image-filter");
        axios(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(e=>setRandom({url: e.data.sprites.other.dream_world.front_default, name:e.data.name}))
      }
   
    useEffect(()=>{
        axios(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(e=>setRandom({url: e.data.sprites.other.dream_world.front_default, name:e.data.name}))
      },[])



  return (
    <div style={{display:"flex"}}>
      <div>
        <div>
        <div className="img-container">
            <img ref={refImg} className="image-who image-filter" src={random.url} alt="" />
        </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="text"/>
          <button>Confirm</button>
        </form>
      </div>
      <div className="btn-change">
        <button onClick={handleChangePokemon} >Change</button>
      </div>
    </div>
  )
}
