import { Link } from "react-router-dom"

function NotFound() {
  return (
    <section className="d-flex justify-content-center align-items-center h-100">
      <div className="rounded text-center">
        <h2 className="text-white fs-1">404</h2>
        <p>Page not Found</p>
        <Link to="/" className="btn btn-primary">Return to Home</Link>        

      </div>

    </section>
  )
}

export default NotFound;