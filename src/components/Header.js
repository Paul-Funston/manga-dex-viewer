import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar container">
      <Link className="navbar-brand" to="/">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" height={'30px'} />
         {" MangaDex Viewer"}
      </Link>

    </nav>
  )
}

export default Header