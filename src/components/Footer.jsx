import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
        <div className='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'
          >
            {/* eslint-disable-next-line */}
            <img src='/assets/img/logo.png' style={{ width: '140px' }} />
          </a>
          <span className='mb-3 mb-md-0 text-muted'>
            © {new Date().getFullYear()} Company, Inc
          </span>
        </div>

        <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li className='ms-3'>
            <a className='text-muted' href='https://github.com/Zukhriddin-27'>
              <i className='bi bi-github'></i>
            </a>
          </li>
          <li className='ms-3'>
            <a className='text-muted' href='https://t.me/coooooking_bot'>
              <i className='bi bi-telegram'></i>
            </a>
          </li>
          <li className='ms-3'>
            <a
              className='text-muted'
              href='https://www.linkedin.com/in/zukhriddin-esanov-11b005175'
            >
              <i className='bi bi-linkedin'></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer
