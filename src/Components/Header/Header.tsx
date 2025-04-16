import Logo from "../Ui/Logo/Logo";
import cls from "../../Style/Header.module.css";
import { useState } from "react";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const clickModal = () => {
    if (isActive) {
      setIsActive((prev) => !prev);
    }
  };
  return (
    <header className={cls.Header}>
      <Logo />
      <ul className={cls.Navbar}>
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
      <button
        className={isActive ? [cls.Burger, cls.Open].join(" ") : cls.Burger}
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <span
          className={
            isActive
              ? [cls.BurgerLine, cls.Open].join(" ")
              : [cls.BurgerLine, cls.Close].join(" ")
          }
        ></span>
      </button>
      <div
        className={
          isActive
            ? [cls.Modal, cls.Open].join(" ")
            : [cls.Modal, cls.Close].join(" ")
        }
        onClick={() => {
          clickModal();
        }}
      >
        <div onClick={(e) => e.stopPropagation()} className={cls.ModalContent}>
          <ul className={cls.ModalMenu}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Select</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
