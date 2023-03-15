import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const CategoryItem = () => {
  const [categoryItem, setCategoryItem] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/api/category/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setCategoryItem(result)
      })
    //eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
      {categoryItem ? (
        <div className='grid-container'>
          {categoryItem
            // .filter((sort) => sort.category === categoryName)
            .map((item) => {
              return (
                <div className='row py-4' key={item._id}>
                  <a
                    href={`/recipe/${item._id}`}
                    className='col text-center category__link'
                  >
                    <div className='category__image category__image--large shadow'>
                      <img src={item.image} alt='' loading='lazy' />
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
