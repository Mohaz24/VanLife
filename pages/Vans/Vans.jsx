import { useState, useEffect } from "react";
import { Link, useSearchParams} from "react-router-dom";
export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({})
  
  const URL = searchParams.get(`type`)
 
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansDetails = URL ? vans.filter(url => url.type === URL) : vans

  const vanElements = vansDetails.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
       <h1>Explore our van options</h1>
       <button onClick={() => setSearchParams({type: "simple"})}>Simple</button>
       <button onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
       <button onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
       <button onClick={() => setSearchParams({})}>Clear filter</button>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
