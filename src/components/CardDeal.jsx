import Sub from '../assets/subscribe.png'
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a 
      better card deal <br className='sm:block hidden' />in a few steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>more random text</p>

      <Button styles="mt-10" />
    </div>
      <div className={layout.sectionImg}>
        <img src={Sub} alt="card" className='w-[100%] h-[100%]' />
        <div className='absolute z-[3] -right-1/2 left-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>
      
  </section>
    
  )


export default CardDeal