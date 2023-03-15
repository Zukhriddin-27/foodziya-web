import React, { useState, useEffect } from 'react'

const Random = () => {
  const [random, setRandom] = useState([])

  useEffect(() => {
    fetch('/random')
      .then((res) => res.json())
      .then((result) => {
        setRandom(result)
      })
  }, [])

  return (
    <div className='container'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='/'>Asosiy</a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            {random.name}
          </li>
        </ol>
      </nav>

      <div className='row g-2 '>
        <div className='col-12 col-md-4  px-2 '>
          <img
            src={random.image}
            className='img-fluid sticky-top'
            alt={random.name}
          />
        </div>
        <div className='col-12 col-md-8 px-4'>
          <div className='row'>
            <div className='col-12'>
              <h1>{random.name}</h1>
            </div>
            <div className='col-12 mb-4'>
              <i className='bi bi-tag'></i>
              {random.category}
            </div>
            <div className='col-12'>
              <h4>Tayyorlanish usuli</h4>
              {random.description}
            </div>
          </div>
          <div className='row pt-4'>
            <div className='col-12'>
              <h4>Kerakli mahsulotlar</h4>
              {random.ingredients
                ? random.ingredients.map((item) => {
                    return (
                      <ul
                        className='list-group list-group-flush '
                        key={item._id}
                      >
                        <li className='list-group-item'>{item}</li>
                      </ul>
                    )
                  })
                : []}
            </div>
          </div>
          <div className='row pt-4'>
            <div className='col-12'>
              <iframe
                width='560'
                height='315'
                src={
                  random.link
                    ? `https://www.youtube.com/embed/${random.link.slice(-11)}`
                    : []
                }
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Random
