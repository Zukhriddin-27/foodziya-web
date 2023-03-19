import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Category = () => {
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState([])
  const { REACT_APP_BASE_URL: url } = process.env
  useEffect(() => {
    setLoading(false)
    fetch(`${url}/api/category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setLoading(true)
        }
        setCategory(result)
      })
  }, [])
  return (
    <>
      <div className='row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-4'>
        {category?.map((item) => {
          return (
            <div key={item._id}>
              <a
                href={`/categories/${item?.name}`}
                className='col text-center category__link'
              >
                {loading ? (
                  <div className='category__image shadow'>
                    <img src={item?.image} alt={item?.name} />
                  </div>
                ) : (
                  <Skeleton height={110} width={229} />
                )}
                <div className='pt-1'>{item?.name}</div>
              </a>
            </div>
          )
        })}
        <a href='/categories' className='col text-center category__link'>
          {loading ? (
            <div className='category__image shadow'>
              <img
                src='/assets/img/view-all.jpg'
                alt='View All Categories'
                loading='lazy'
              />
            </div>
          ) : (
            <Skeleton height={110} width={229} />
          )}
          <div className='pt-1'>Ko'proq</div>
        </a>
      </div>
    </>
  )
}

export default Category
