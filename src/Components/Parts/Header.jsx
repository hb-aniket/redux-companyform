import React from 'react'
import displaypic from '../../Assests/images/dp.png'

export default function Header() {
  return (



    <header className="p-3">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            {/* <svg className="bi me-2" width={40} height={32} role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap" /></svg> */}
          </a>
          <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
         <span className='h4'>Company Form</span>
          </div>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
          <div className="dropdown text-end">
            <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src={displaypic} alt="mdo" width={32} height={32} className="rounded-circle" />
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item" href="/">New project...</a></li>
              <li><a className="dropdown-item" href="/">Settings</a></li>
              <li><a className="dropdown-item" href="/">Profile</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="/">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>







  )
}
