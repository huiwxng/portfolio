import { useTheme } from '../../common/ThemeContext'; 
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import styles from './AppLayoutStyles.module.css'; 

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon

  return (
    <div id='App Layout' className={styles.container}>
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="color mode icon"
        onClick={toggleTheme}
      />
      {children}
    </div>
  );
};

export default AppLayout;
