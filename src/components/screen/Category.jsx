import React, { useState, useEffect } from 'react'

const Category = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    fetch('/api/category')
      .then((res) => res.json())
      .then((result) => {
        setCategory(result)
      })
  }, [])
  return (
    <div>
      {category ? (
        <div className='row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-4'>
          {category?.map((item) => {
            return (
              <div key={item._id}>
                <a
                  href={`/categories/${item.name}`}
                  className='col text-center category__link'
                >
                  <div className='category__image shadow'>
                    <img src={item.image} alt={item.name} loading='lazy' />
                  </div>
                  <div className='pt-1'>{item.name}</div>
                </a>
              </div>
            )
          })}

          <a href='/categories' className='col text-center category__link'>
            <div className='category__image shadow'>
              <img
                src='/assets/img/view-all.jpg'
                alt='View All Categories'
                loading='lazy'
              />
            </div>
            <div className='pt-1'>Ko'proq</div>
          </a>
        </div>
      ) : (
        <p>Maxsulot topilmadi.</p>
      )}
    </div>
  )
}

export default Category
