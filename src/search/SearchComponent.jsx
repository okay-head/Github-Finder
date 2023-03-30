import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


export default function SearchComponent() {

  const navigate = useNavigate()

  const [clearBtn, setClearBtn] = useState(false)

  function callSearch(e) {
    e.preventDefault()

    if (!clearBtn) {  //input is empty
      const alertBox = document.getElementsByClassName('alert')[0]
      alertBox.classList.add('fade-in')
      setTimeout(() => {
        alertBox.classList.remove('fade-in')
      },1000);
      return
    }
    const key = document.getElementById('input-box').value

    // now i need to make an api call and render components
    // can update the global context of result here and use in search results page
    localStorage.setItem('key', key)
    navigate('/search') // ResultsPage
  }

  function setClearBtnHandler(flag) {
    const clrBtn = document.getElementById('btn-2')
    if (flag) {
      clrBtn.classList.remove('btn-disabled')
      setClearBtn(true)
    } else {
      clrBtn.classList.add('btn-disabled')
      setClearBtn(false)
    }

    // Add remove classes/ update dom then set state
    // clearBtn ? clrBtn.classList.remove('btn-disabled') : clrBtn.classList.add('btn-disabled')
  }

  function OnChangeFunction() {
    const element = document.getElementById('input-box')
    element.value == '' ? setClearBtnHandler(false) : setClearBtnHandler(true)
  }
  function clearOnClickHandler(e) {
    e.preventDefault()
    if (clearBtn) {
      document.getElementById('input-box').value = ''
      setClearBtn(false)
    }
  }

  function onfocusFunction() {
    document.getElementById('input-box').classList.add('box-shadow')
    document.getElementById('btn-1').classList.add('box-shadow')
  }

  function onBlurFunction() {
    document.getElementById('input-box').classList.remove('box-shadow')
    document.getElementById('btn-1').classList.remove('box-shadow')
  }

  return (
    <div className='search'>
      <form>

        <div className="alert danger-alert">
          <h3>Input cannot be empty!</h3>
        </div>

        <div className="search-bar">
          <input onFocus={onfocusFunction} onBlur={onBlurFunction} onChange={OnChangeFunction} id="input-box" type="text" placeholder='search by name / username' />

          <button id="btn-1" onClick={(e) => callSearch(e)}><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
        </div>
        <button id='btn-2' className='btn-disabled' onClick={(e) => { clearOnClickHandler(e) }}>Clear</button>
      </form>

    </div>
  )
}