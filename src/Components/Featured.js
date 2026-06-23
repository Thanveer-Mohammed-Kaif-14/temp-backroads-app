import { tours } from '../data'

import Title from './Title'
const Featured = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subtitle='tours' />
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { date, title, text, location, days, price, image } = tour
          return (
            <article className='tour-card' key={tour.id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{days} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Featured
