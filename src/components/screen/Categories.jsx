import React, { useState, useEffect } from 'react'

const Category = () => {
  const [category, setCategory] = useState([])
  const { REACT_APP_BASE_URL: url } = process.env

  useEffect(() => {
    fetch(`${url}/api/category/all`)
      .then((res) => res.json())
      .then((result) => {
        setCategory(result)
      })
  }, [])

  return (
    <div className='container'>
      {category ? (
        <>
          <h1 className='pb-4'>Explore Categories</h1>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='/'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='/categories'>Categories</a>
              </li>

              <li className='breadcrumb-item active' aria-current='page'>
                Explore Categories
              </li>
            </ol>
          </nav>
          <div className='grid-container'>
            {category.map((item) => {
              return (
                <div className='row    mb-4' key={item._id}>
                  <a
                    href={`/categories/${item.name}`}
                    className='col text-center category__link '
                  >
                    <div className='category__image shadow'>
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className='pt-1'>{item.name}</div>
                  </a>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
          {/* eslint-disable-next-line */}
          <a href='' className='col text-center category_link'>
            <div className='category__image category__image--large shadow'>
              <img src='' alt='View All Categories' />
            </div>
            <div className='pt-1'></div>
          </a>
          <p>No items found.</p>
        </div>
      )}
    </div>
  )
}

export default Category
