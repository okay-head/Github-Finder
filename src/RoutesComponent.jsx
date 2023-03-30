// this component contains all the route information

import { Routes, Route } from 'react-router-dom'
import ResultPage from './result/ResultPage'
import SearchComponent from './search/SearchComponent'
export default function RoutesComponent() {
  return (
    <Routes>
      <Route path='/search' element={<ResultPage />} />
      <Route path='/' element={<SearchComponent />} />
    </Routes>
  )
}