import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Contact = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [post, setPost] = useState('')
  const { REACT_APP_BASE_URL: url } = process.env
  const createPost = (e) => {
    e.preventDefault()

    fetch(`${url}/api/contact`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        post: post,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          notify(data.error)
        } else {
          showToastMessage('Send me post succesfully')
          navigate('/')
        }
      })

    // eslint-disable-next-line
  }
  const notify = (e) => toast.error(e)
  const showToastMessage = (e) => {
    toast.success(e, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }
  return (
    <div className='container'>
      <ToastContainer position='top-right' autoClose={1000} />
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='/'>Asosiy</a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Aloqa
          </li>
        </ol>
      </nav>
      <div>
        <div className='row my-5'>
          <div className='col-md-6'>
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Elektron pochtangiz
              </label>
              <input
                id='email'
                type='email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='name@example.com'
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='exampleFormControlInput1' className='form-label'>
                Ismingiz
              </label>
              <input
                id='name'
                type='text'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Sardor'
                required
              />
            </div>
            <div className='mb-3'>
              <label
                htmlFor='exampleFormControlTextarea1'
                className='form-label'
              >
                Matn maydoni
              </label>
              <textarea
                id='message'
                className='form-control'
                rows='3'
                value={post}
                onChange={(e) => setPost(e.target.value)}
                required
              ></textarea>
            </div>
            <div className='mb-3'>
              <button
                className='btn btn-primary my-3'
                type='button'
                onClick={createPost}
              >
                Yuborish
              </button>
            </div>
          </div>
          <div className='col-md-6'>
            {/* eslint-disable-next-line */}
            <img src='/assets/img/uzbek.jpg' className='image_contact' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
