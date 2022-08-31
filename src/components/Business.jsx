import { features } from "../constants"
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
  <div className="flex-1 flex flex-col ml-3">
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
      {title}
    </h4>
    <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
      {content}
    </p>
  </div>

  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Add Random text here,
        , <br className="sm:block hidden" />More random text.</h2>
        <p className={`{styles.paragraph} max-w-[470px]`}>More random text,
        More lorem ipsum text random random random</p>

        <Button styles="mt-9" />

        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index ) => (
            <FeatureCard key={feature.id} {...feature} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Business