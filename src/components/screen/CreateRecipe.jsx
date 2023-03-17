import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateRecipe = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [link, setLink] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([])
  const { REACT_APP_BASE_URL: url } = process.env

  // eslint-disable-next-line
  const [submitInfo, setSubmitInfo] = useState([])

  useEffect(() => {
    fetch(`${url}/api/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        category: category,
        description: description,
        ingredients: ingredients,
        link: link,
        picture: imgUrl,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
          setSubmitInfo(data)
          console.log(data)
        } else {
          alert('Ajoyib natija')
          navigate('/')
        }
      })

    // eslint-disable-next-line
  }, [imgUrl])
  const recipeDetails = () => {
    const data = new FormData()
    data.append('file', image)
    data.append('upload_preset', 'ufp7ie6c')
    data.append('cloud_name', 'dus2bqcc6')
    fetch('https://api.cloudinary.com/v1_1/dus2bqcc6/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert('Rasm joylang')
        } else {
          setImgUrl(data.url)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const handleAddList = () => {
    const list = [...ingredients, []]
    setIngredients(list)
  }
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...ingredients]
    inputdata[i] = onChangeValue.target.value
    setIngredients(inputdata)
  }

  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='/'>Home</a>
          </li>

          <li className='breadcrumb-item active' aria-current='page'>
            Yangi retsept
          </li>
        </ol>
      </nav>
      <div className='px-4 py-5 my-5 text-center'>
        <div className='display-5 fw-bold'>Retseptingizni joylang</div>
        <div className='col-lg-6 mx-auto'>
          <p className='lead'>
            O'zingizning ajoyib retseptlaringizni butun dunyo bo'ylab minglab
            insonlar bilan baham ko'ring. Boshlash uchun blankamizni to'ldiring
          </p>
        </div>
      </div>

      <div className='row justify-content-center'>
        {/* <div className='col-8 alert alert-success' role='alert'></div>
        <div className='col-8 alert alert-danger' role='alert'></div> */}

        <div className='col-8'>
          <form action='#'>
            <div className='row g-3'>
              <div className='col-12'>
                <label htmlFor='email' className='form-label'>
                  Elektron pocha manzili
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='form-control'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className='col-12'>
                <label htmlFor='name' className='form-label'>
                  Retsept nomi
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  className='form-control'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className='col-12'>
                <label htmlFor='description' className='form-label'>
                  Tavsif
                </label>
                <textarea
                  type='description'
                  name='description'
                  id='description'
                  cols='30'
                  rows='4'
                  className='form-control'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className='col-12'>
                <label htmlFor='name' className='form-label'>
                  Kerakli maxsulotlar
                </label>
                <br />
                <small>Masalan: 0.3 litr o'simlik yog'i</small>
                <div className='ingredientList'>
                  {ingredients.map((data, i) => {
                    return (
                      <div className='ingredientDiv mb-1'>
                        <input
                          type='text'
                          name='ingredients'
                          className='form-control'
                          onChange={(e) => handleChange(e, i)}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className='col-12'>
                <button
                  type='button'
                  className='btn btn-outline-primary'
                  id='addingredientsBtn'
                  onClick={() => handleAddList()}
                >
                  + Maxsulotlar ro'yhatini tuzush
                </button>
              </div>

              <div className='col-12'>
                <label htmlFor='category'>Taom kategoriyasi </label>
                <select
                  className='form-select form-control'
                  name='category'
                  aria-label='Category'
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={category}
                >
                  <option value='Quyuq'>Quyuq</option>
                  <option value='Suyuq'>Suyuq</option>
                  <option value='Kabob'>Kabob</option>
                  <option value='Salat'>Salat</option>
                  <option value='Ichimlik'>Ichimlik</option>
                  <option value='Pishiriq'>Pishiriq</option>
                  <option value='Shirinlik'>Shirinlik</option>
                  <option value='Non'>Non</option>
                </select>
              </div>

              <div className='col-12'>
                <label htmlFor='image'>Taom surati</label>
                <input
                  type='file'
                  className='form-control'
                  name='image'
                  accept='image/*'
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
              <div className='col-12'>
                <label htmlFor='name' className='form-label'>
                  Vedio yo'riqnoma
                </label>
                <input
                  type='text'
                  name='link'
                  id='link'
                  className='form-control'
                  required
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className='col-12'>
                <button
                  type='button'
                  className='btn btn-primary'
                  onClick={() => recipeDetails()}
                >
                  Retseptni yuborish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateRecipe
