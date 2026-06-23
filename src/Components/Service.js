import Title from './Title'
import { serviceInfo } from '../data'

const Service = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subtitle='services' />
      <div className='section-center services-center'>
        {serviceInfo.map((info) => {
          return (
            <article className='service' key={info.id}>
              <span className='service-icon'>
                <i className={info.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{info.title}</h4>
                <p className='service-text'>{info.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Service
