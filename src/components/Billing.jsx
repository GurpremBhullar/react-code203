import Screen from '../assets/screen.png'
import Keyboard from '../assets/keyboard.png'
import styles, { layout } from '../style';
import { apple, google } from '../assets';

const Billing = () => (
    <section id="product" className={layout.sectionReverse} >
      <div className={layout.sectionImgReverse}>
        <img src={Screen} alt="screen" className='static w-[50%] h-[80%] z-[5]' />
        <img src={Keyboard} alt="keyboard" className='absolute bottom-0 pt-10 w-[30%] h-[50%] '/>
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>100 days of code <br className='sm:block hidden' />Dedicate the time</h2>
          <p className={`${styles.paragraph} max-w`}></p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="google_play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointers' />
            <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointers' />
          </div>
        </div>
    
    </section>
  )


export default Billing