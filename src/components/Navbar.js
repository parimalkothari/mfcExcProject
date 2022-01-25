import React from 'react'
import PropTypes from 'prop-types'
import './Navbar.css'


export default function Navbar(props) {
  return (

    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link" exact activeClassName="active_class" aria-current="page" href="#">Home</a>
              </li>
              </ul>
            <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ENABLE DARK MODE</label>
            </div>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-danger" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  dis: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "set title here",
  dis: "Disabled"
}
