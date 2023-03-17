import React, { useState, useEffect } from 'react'
import Category from './Category'

import '../style/header.css'
const Header = () => {
  const [recipe, setRecipe] = useState([])
  const { REACT_APP_BASE_URL: url } = process.env
  useEffect(() => {
    fetch(`${url}/api/recipes`)
      .then((res) => res.json())
      .then((result) => {
        setRecipe(result)
      })
  }, [])

  return (
    <div className='container'>
      {' '}
      <div className='row flex-lg-row-reverse align-items-center g-5 py-4 mb-4'>
        <div className='col-12 col-lg-6'>
          <img
            src='/assets/img/hero-image.png'
            width='607'
            height='510'
            className='d-block mx-lg-auto img-fluid'
            loading='lazy'
            alt='Cooking With Node.js'
          />
        </div>
        <div className='col-12 col-lg-6'>
          <h1 className='dispaly-5 fw-bold mb-3'>
            Palov o‘zbek oshxonasining eng tansiq taomi.
          </h1>
          <p className='lead'>
            O‘zbek taomlari Markaziy Osiyodagi eng rang-barang ovqatlardan
            biridir. Mintaqada istiqomat qiluvchi o‘troq va ko‘chmanchi
            millatlarning bir necha asrlar davomida to’plangan oshpazlik
            an’analari bugungi kunda yagona va hammamizga tushunarli bo‘lgan
            o‘zbek oshxonasining mazali taomlari majmuasida mujassamlashgan.
          </p>

          <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
            <a
              href='/explore-latest'
              className='btn btn-primary btn-dark btn-lg px-4 me-md-2'
            >
              Eng so'ngisi
            </a>
            <a
              href='/explore-random'
              className='btn btn-primary btn-dark btn-lg px-4 me-md-2'
            >
              Tanlov
            </a>
          </div>
        </div>
      </div>
      <Category />
      <section className='pb-4 pt-4'>
        <div className='d-flex mb-2 align-items-center'>
          <h2>Taomlar ro'yaxati</h2>
          <a href={`/recipes`} className='ms-auto'>
            Ko'proq
          </a>
        </div>
        <div className='grid-container'>
          {recipe.slice(0, 4).map((item) => {
            return (
              <div className='row' key={item._id}>
                <a
                  href={`/recipes/${item._id}`}
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
      {/* Quyuq taomlar */}
      <section className='pb-4 pt-4'>
        <div className='d-flex mb-2 align-items-center'>
          <h2>Quyuq taomlar</h2>
          <a href='/categories/Quyuq' className='ms-auto'>
            Ko'proq
          </a>
        </div>
        <div className='grid-container'>
          {recipe
            .filter((recipe) => recipe.category === 'Quyuq')
            .slice(0, 4)
            .map((item) => {
              return (
                <div className='row' key={item._id}>
                  <a
                    href={`/recipes/${item._id}`}
                    className='col text-center category_link'
                  >
                    <div className='category__image category__image--large shadow'>
                      <img
                        src={item?.image}
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
      {/* Suyuq */}
      <section className=' pt-4'>
        <div className='d-flex mb-2 align-items-center'>
          <h2>Suyuq taomlar</h2>
          <a href='/categories/Suyuq' className='ms-auto'>
            Ko'proq
          </a>
        </div>
        <div className='grid-container'>
          {recipe
            .filter((recipe) => recipe.category === 'Suyuq')
            .slice(0, 4)
            .map((item) => {
              return (
                <div className='row' key={item._id}>
                  <a
                    href={`/recipes/${item._id}`}
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
      {/* Shirinlik */}
      <section className=' pt-4'>
        <div className='d-flex mb-2 align-items-center'>
          <h2>Salatlar</h2>
          <a href='/categories/Salat' className='ms-auto'>
            Ko'proq
          </a>
        </div>
        <div className='grid-container'>
          {recipe
            .filter((recipe) => recipe.category === 'Salat')
            .slice(0, 4)
            .map((item) => {
              return (
                <div className='row' key={item._id}>
                  <a
                    href={`/recipes/${item._id}`}
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
  )
}

export default Header
