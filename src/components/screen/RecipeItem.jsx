import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const RecipeItem = () => {
  const [recipeItem, setRecipeItem] = useState([])
  const { id } = useParams()
  useEffect(() => {
    fetch(`/food/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setRecipeItem(result)
      })
    // eslint-disable-next-line
  }, [])
  return (
    <div className='container'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='/'>Asosiy</a>
          </li>
          <li
            className='breadcrumb-item active'
            aria-current='page'
            key={recipeItem._id}
          >
            {recipeItem.name}
          </li>
        </ol>
      </nav>

      <div className='row g-2 '>
        <div className='col-12 col-md-4  px-2 '>
          <img
            src={recipeItem.image}
            className='img-fluid sticky-top'
            alt={recipeItem.name}
          />
        </div>
        <div className='col-12 col-md-8 px-4'>
          <div className='row'>
            <div className='col-12'>
              <h1>{recipeItem.name}</h1>
            </div>
            <div className='col-12 mb-4'>
              <i className='bi bi-tag'></i>
              {recipeItem.category}
            </div>
            <div className='col-12'>
              <h4>Tayyorlanish usuli</h4>
              {recipeItem.description}
            </div>
          </div>
          <div className='row pt-4'>
            <div className='col-12'>
              <h4>Kerakli mahsulotlar</h4>
              {recipeItem.ingredients
                ? recipeItem.ingredients.map((item) => {
                    return (
                      <ul className='list-group list-group-flush ' key={item}>
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
                  recipeItem.link
                    ? `https://www.youtube.com/embed/${recipeItem.link.slice(
                        -11
                      )}`
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

export default RecipeItem