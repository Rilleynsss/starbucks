import { FC } from "react";
import cls from "../../Style/Footer.module.css";
import Logo from "../Ui/Logo/Logo";
import inst from "../../assets/inst.svg";
const Footer: FC = () => {
  return (
    <footer className={cls.Footer}>
      <div className={cls.Container}>
        <div className={cls.Menu}>
          <Logo />
          <div className={cls.Navbar}>
            <ul>
              <li>Main</li>
              <li>Buy</li>
              <li>More</li>
            </ul>
            <ul>
              <li>We make</li>
              <li>Process</li>
            </ul>
            <ul>
              <li>Products</li>
              <li>Cappuccino</li>
              <li>Fast</li>
              <li>Fast</li>
            </ul>
            <ul>
              <li>Events</li>
              <li>Drinks</li>
              <li>Eat</li>
            </ul>
            <ul>
              <li>Contacts</li>
              <li>Instagram</li>
              <li>Number</li>
            </ul>
          </div>
        </div>
        <div className={cls.Contacts}>
          <p>+7-999-999-99-99</p>
          <img src={inst} alt="" />
        </div>
        <svg className={cls.Decor}>
          <defs>
            <radialGradient id="green">
              <stop offset="0%" stopColor="#2372498C" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <circle className={cls.shadowLogo} fill="url(#green)" />
          <circle className={cls.shadowIcon} fill="url(#green)" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
