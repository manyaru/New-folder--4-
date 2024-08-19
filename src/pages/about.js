// Import CSS module styles specific to the About page
import styles from '../styles/About.module.css';

// About component renders information about the person
export default function About() {
  return (
    <div className={styles.container}>
      {/* Title of the About page */}
      <h1 className={styles.title}>About Me</h1>

      {/* Description of my background and experience */}
      <p className={styles.paragraph}>
      I am Alvin Mureithi, a passionate Fullstack Developer with over six months of experience. My journey in coding began at a very young age, and this early passion has driven me to pursue excellence in every project I undertake
      </p>

      <p className={styles.paragraph}>
      I bring a unique blend of skills from my background in farm management and poultry farming, allowing me to approach problem-solving with both academic knowledge and practical expertise.
      </p>
       
      
      <p className={styles.paragraph}>
      In my work, I strive to build seamless, high-performance applications that not only meet but exceed expectations. While I sometimes find myself impatient when encountering challenges or errors, this only fuels my determination to overcome obstacles and achieve my goals. My dedication and relentless pursuit of success define who I am as a developer.







      </p>
    </div>
  );
}
