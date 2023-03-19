import React, { useState } from 'react'
const Navbar = () => {
  const { REACT_APP_BASE_URL: url } = process.env

  const [searchList, setSearchList] = useState('')
  const [searchArray, setSearchArray] = useState([])

  const searchFood = (query) => {
    setSearchList(query)
    fetch(`${url}/api/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((result) => {
        setSearchArray(result)
      })

      .catch((e) => console.log(e))
  }

  return (
    <div>
      <div className='containe px-md-5 bg-white shadow-lg'>
        <header className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom'>
          <a
            href='/'
            className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none'
          >
            <img
              src='/assets/img/logo.png'
              width='229'
              height='68'
              alt='Cooking Blog - Made with Node.js'
            />
          </a>

          <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
            <li>
              <a href='/' className='nav-link  px-2 link-dark '>
                Asosiy
              </a>
            </li>
            <li>
              <a href='/about' className='nav-link px-2 link-dark'>
                Biz haqimizda
              </a>
            </li>
            <li>
              <a href='/create' className='nav-link px-2 link-dark'>
                Taom qo'shish
              </a>
            </li>
            <li>
              <a href='/contact' className='nav-link px-2 link-dark'>
                Aloqa
              </a>
            </li>
          </ul>

          <div className='col-md-3 text-end h-auto'>
            <button
              type='button'
              className='btn btn-light'
              data-bs-toggle='modal'
              data-bs-target='#staticBackdrop'
            >
              <i className='bi bi-search'></i>
            </button>

            <div
              className='modal fade'
              id='staticBackdrop'
              data-bs-backdrop='static'
              data-bs-keyboard='false'
              tabIndex='-1'
              aria-labelledby='staticBackdropLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content onClick={(e) => e.stopPropagation()'>
                  <div className='modal-header'>
                    <h5 className='modal-title mx-4' id='staticBackdropLabel'>
                      Qidiruv oynasi
                    </h5>
                    <form action='/search' method='POST'>
                      <input
                        type='search'
                        id='searchTerm'
                        className='form-control '
                        placeholder='Qidiruv...'
                        aria-label='Search'
                        value={searchList}
                        onChange={(e) => searchFood(e.target.value)}
                      />
                    </form>
                  </div>
                  {searchArray ? (
                    <div className='modal-body'>
                      {searchArray?.map((item) => {
                        return (
                          <ul
                            className='list-group list-group-flush'
                            key={item._id}
                          >
                            <a href={`/recipes/${item._id}`}>
                              <li className='list-group-item d-flex justify-content-between px-4 align-items-center'>
                                <h6>{item.name}</h6>
                                {/* eslint-disable-next-line */}
                                <img
                                  src={item.picture}
                                  className='globalRoundProfile'
                                />
                              </li>
                            </a>
                          </ul>
                        )
                      })}
                    </div>
                  ) : null}

                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                      onClick={() => setSearchArray([])}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Navbar
