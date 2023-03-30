import Card from "../Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import RenderCards from "./RenderCards";
import LoaderComponent from "../LoaderComponent";

export default function ResultPage() {
  const [gresult, setGresult] = useState({})  /*g = global*/

  const search_key = localStorage.getItem('key')
  const url = `https://api.github.com/search/users?q=${search_key}&per_page=8`
  console.log('Request url: ',url)
  useEffect(() => {
    fetch(url,{
      headers: {
        'User-Agent': 'request'
      }
    })
      .then(res => {
        if (!res.ok) throw new Error('Panik')
        return res.json()
      })
      .then(res => {
        // when the api call is complete store it in a global variable
        setGresult(res)
        return res
      })
    /*    //this is for next and prev button calls
          .then((res) => {
            // total_count = res.total_count
            console.log('page rendered!')
          })
     */
  }, [])

  // gotta fix this later
  // Ui fix when the elements displayed are == 2



  return (
    <div className="results-pg">
      <Link to='/'>
        <FontAwesomeIcon icon={faCircleArrowLeft} size="2x" color="white" />
      </Link>
      <h2>Search Results</h2>
      <hr />
      {Object.entries(gresult).length === 0 ? <LoaderComponent /> : <div className="cards">
        <RenderCards results={gresult} />
      </div>}
    </div>



  )
}



