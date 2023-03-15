import React from 'react'

const About = () => {
  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href='/'>Asosiy</a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Biz haqimizda
          </li>
        </ol>
      </nav>
      <div className='row align-items-md-stretch'>
        <div className='col-md-4'>
          <div className='h-100 p-5 text-white bg-dark rounded-3'>
            {/* eslint-disable-next-line */}
            <img
              src='/assets/img/hero-image.png'
              className='img-fluid sticky-top'
            />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='h-100 p-5 bg-light border rounded-3'>
            <h2>Biz haqimizda</h2>
            <p className=''>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              officia laboriosam molestiae dolorum ratione numquam cupiditate
              nam esse itaque magnam accusantium ipsa vel. Illum minima
              architecto inventore ad animi error modi ratione maxime tenetur,
              non corporis voluptatem ipsam blanditiis quod? Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Illo, minima?
              <br />
              Reiciendis corrupti labore nesciunt quidem numquam inventore,
              architecto beatae, eos eveniet perferendis animi. Ipsa id cumque
              repellendus esse at maxime?
            </p>
            <ul className='nav col-md-auto col-12 mb-2 justify-content-start mb-md-0'>
              <li className='nav-link px-2'>
                <a href='https://github.com/Zukhriddin-27'>
                  <i className='bi bi-github'></i>
                </a>
              </li>
              <li className='nav-link px-2'>
                <a href='https://t.me/coooooking_bot'>
                  <i className='bi bi-telegram'></i>
                </a>
              </li>
              <li className='nav-link px-2'>
                <a href='https://twitter.com/ZEZ19952927?t=yV7aMFQq7G0311blCUEptA&s=09'>
                  <i className='bi bi-twitter'></i>
                </a>
              </li>
              <li className='nav-link px-2'>
                <a href='https://www.linkedin.com/in/zukhriddin-esanov-11b005175'>
                  <i className='bi bi-linkedin'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
