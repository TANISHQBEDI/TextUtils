import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavBar=(props)=>(
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
      <Link className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} to="/">Home</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/">About</a> */}
            <Link className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} to="/about">About</Link>
          </li>
        </ul>
        <button type="button" onClick={()=>{props.toggleMode('primary')}} style={{height:'25px', border:'1px solid yellow'}} className="btn btn-primary rounded-circle"></button>
        <button type="button" onClick={()=>{props.toggleMode('danger')}} style={{height:'25px', border:'1px solid yellow'}} className="btn btn-danger rounded-circle"></button>
        <button type="button" onClick={()=>{props.toggleMode('light')}} style={{height:'25px', border:'1px solid yellow'}} className="btn btn-light rounded-circle"></button>
        <button type="button" onClick={()=>{props.toggleMode('dark')}} style={{height:'25px', border:'1px solid yellow'}} className="btn btn-dark rounded-circle"></button>
        {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
          <input className="form-check-input" onClick={()=>props.toggleMode('danger')} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">EnableDarkMode</label>
        </div> */}
      </div>
    </div>
    </nav>
  )



NavBar.propTypes={
  title : PropTypes.string
}

NavBar.defaultProps={
  title : 'Set title here'
}



export default NavBar;
