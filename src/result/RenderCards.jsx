import Card from "../Card"
import Card2 from '../Card2'
import { useState, useEffect } from "react"
export default function RenderCards({ results }) {
  let [listItems, setListitems] = useState([])
  // Never use a functional component inside 'ASYNC' functions
  // set state of a variable and update the dom using that var

  /* To replace image src attributes */
  function setAttributes() {
    const img_arr = document.getElementsByTagName('img')
    let j = 0
    listItems.forEach((data) => {
      let img_url = data.avatar_url || './../assets/Screenshot 2023-03-24 183607.png'
      img_arr[j++].setAttribute('src', img_url)
      img_arr[j++].setAttribute('src', img_url)
    })
  }

  useEffect(() => {
    // running this effect in everyRender
    setAttributes()
  })


  // fetch individual profile information and store them in an array
  useEffect(() => {
    results.items.map((element, i) => {
  console.log('Request url: ',element.url)
      fetch(`${element.url}`)
        .then(res => {
          if (!res.ok) throw new Error('error fetching github url data')
          return res.json()
        })
        .then(res => {
          setListitems((prev) => {
            return [...prev, res]
          })
        })
    })
  }, [])

  return (
    <>
      {
        listItems.map((element, i) => {
          return <Card2 key={i * i} props={element} index={i} />
        })
      }
    </>
  )

}