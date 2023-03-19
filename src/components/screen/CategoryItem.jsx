import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
const CategoryItem = () => {
  const [categoryItem, setCategoryItem] = useState([])
  const { id } = useParams()
  const [loading, setLoading] = useState(false)

  const { REACT_APP_BASE_URL: url } = process.env
  useEffect(() => {
    setLoading(true)
    fetch(`${url}/api/category/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setCategoryItem(result)
        setLoading(false)
      })
    //eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
      {loading ? (
        <Loading />
      ) : categoryItem.length > 0 ? (
        <div className='grid-container'>
          {categoryItem
            // .filter((sort) => sort.category === categoryName)
            .map((item) => {
              return (
                <div className='row py-4' key={item._id}>
                  <a
                    href={`/recipes/${item._id}`}
                    className='col text-center category__link'
                  >
                    <div className='category__image category__image--large shadow'>
                      <img src={item.picture} alt='' loading='lazy' />
                    </div>
                    <div className='pt-1'>{item.name}</div>
                  </a>
                </div>
              )
            })}
        </div>
      ) : (
        <p>Maxsulot topilmadi.</p>
      )}
    </div>
  )
}

export default CategoryItem
