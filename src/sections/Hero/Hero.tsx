import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme} = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Hui Wang"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Hui Wang
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a href="https://github.com/huiwxng" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/in/huiwxng/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am studying Computer Science at{" "}
          <a href="https://www.northeastern.edu/">Northeastern University</a>
        </p>
        <a href={CV} target="_blank">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
