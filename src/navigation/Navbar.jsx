import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
  return (
    <nav>
      <Link to='/' className="title">Github finder</Link>
      <Link to='/'><FontAwesomeIcon icon={faHouse} size="lg"/></Link>
      <Link to='/'><FontAwesomeIcon icon={faGithub} size="lg" /></Link>
      {/* <Link to='/'><FontAwesomeIcon icon="fa-brands fa-github" /></Link> */}
    </nav>
  )
}