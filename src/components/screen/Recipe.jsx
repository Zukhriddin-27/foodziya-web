import React, { useState, useEffect } from 'react'

const Recipe = () => {
  const [recipe, setRecipe] = useState([])
  const { REACT_APP_BASE_URL: url } = process.env

  useEffect(() => {
    fetch(`${url}/api/recipes`)
      .then((res) => res.json())
      .then((result) => {
        setRecipe(result)
        console.log(result)
      })
  }, [])

  return (
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
          {recipe?.map((item) => {
            return (
              <div className='row py-4' key={item.id}>
                <a
                  href={`/recipes/${item._id}`}
                  className='col text-center category_link'
                >
                  <div className='category__image category__image--large shadow'>
                    <img
                      src={item.picture}
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
  )
}

export default Recipe
