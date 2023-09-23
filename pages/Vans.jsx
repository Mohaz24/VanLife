import { useState, useEffect} from "react"

export default function Vans(){
    const [vans, setVans] = useState([])
   
    useEffect(() => {
     fetch(`/api/vans`)
     .then(res => res.json())
     .then(data => setVans(data.vans))
    }, [])


    const vansResult =  vans.map(van => {
        const { imageUrl, name, price} = van
        return (
            <div>
               <img src={imageUrl} />
               <h3>{name}</h3>
               <p>${price}/day</p>
            </div>
        )
    })
    return (
        <div>
          { vansResult }
        </div>
    )
}