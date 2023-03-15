import React, { useState, useEffect } from 'react'

const Explore = () => {
  const [latest, setLatest] = useState([])

  useEffect(() => {
    fetch('/latest').then((res) => {
      res.json().then((result) => {
        setLatest(result)
      })
    })
  }, [])
  return (
    <div>
      <div>
        <section className='pb-4 pt-4 mx-3'>
          <h1 className='pb-4'>All Recipe</h1>

          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>

              <li className='breadcrumb-item active' aria-current='page'>
                Taomlar
              </li>
            </ol>
          </nav>
          <div className='grid-container'>
            {latest.map((item) => {
              return (
                <div className='row py-4' key={item.id}>
                  <a
                    href={`/recipe/${item._id}`}
                    className='col text-center category_link'
                  >
                    <div className='category__image category__image--large shadow'>
                      <img
                        src={item.image}
                        alt='View All Categories'
                        loading='lazy'
                      />
                    </div>
                    <div className='pt-1'>{item.name}</div>
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Explore