
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <h1>Friends</h1>
      <div style={{display: 'flex'}}>
        <Link to='/'>Login</Link>
        <Link to='/friends'>Friends</Link>
      </div>
    </div>
  )
}

export default Header;