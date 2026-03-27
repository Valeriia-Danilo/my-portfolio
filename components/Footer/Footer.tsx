import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.socials}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
