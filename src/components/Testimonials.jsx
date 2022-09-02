import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>What those degree <br className="sm:block hidden" />programs are not telling you.</h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>As someone who has completed his Masters in Computer Science and
          completed a 6 month bootcamp I can tell you, those degree programs 
          and bootcamps are not enough. Its what you do outside of those 
          classrooms and Zoom rooms, heres what you do when you're out. Subscribe 
          to our Channel to get the most in depth material you will find on 
          React.JS. Don't wait till the end tel be told you still have to do 
          more, dive in now.</p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card ) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials