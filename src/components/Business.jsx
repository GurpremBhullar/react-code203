import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1} ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon"  className="w-[50%] h-[50%] object-contain "/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-semibold text-dimWhite text-[18px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Updated Weekly <br className="sm:block hidden" />
        so your always learning
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right experience and projects under your belt 
          you can become a self taught programmer. Attending an 
          university or bootcamp with no prior knowledge is the 
          wrong thing too do. Don't let anyone convince you that there 
          program can teach you and get you a career. Our online 
          bootcamp will help you hit the ground running, as a former
          student who went back to school in his late 20's to learn
          how to code let me help you become the better version 
          of you !
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`$layout.selectImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={ feature.id } {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business;
