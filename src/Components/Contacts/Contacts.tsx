import { FC, MouseEvent, useState } from "react";
import contacts from "../../assets/contacts.png";
import cls from "../../Style/Contacts.module.css";
import inst from "../../assets/inst.svg";
import phone from "../../assets/phone.svg";
import star from "../../assets/star3.png";
import lines from "../../assets/lines4.png";
const Contacts: FC = () => {
  const [move, setMove] = useState({ x: 0, y: 0 });
  const getCords = (e: MouseEvent<HTMLElement>) => {
    if (window.innerWidth > 1366) {
      setMove({
        x: (e.currentTarget.offsetWidth / 2 - e.clientX) / 30,
        y: (e.currentTarget.offsetHeight / 2 - e.clientY) / 25,
      });
    }
  };
  return (
    <div
      id="contacts"
      className={cls.Contacts}
      onMouseMove={(e) => {
        getCords(e);
      }}
      onMouseLeave={() => {
        setMove({ x: 0, y: 0 });
      }}
    >
      <div className={cls.Content}>
        <h2>
          Our <br /> <span>Contacts</span>
        </h2>
        <p className={cls.Subheader}>
          Have time to buy the most harmonious drinks in the new Starbucks
          coffee and don't forget about the discount!
        </p>
        <ul>
          <li>
            <img className={cls.SocialImg} src={inst} alt="" />
            <p className={cls.Social}>@supercoffee</p>
          </li>
          <li>
            <img className={cls.SocialImg} src={phone} alt="" />
            <p className={cls.Social}>+7-999-999-99-99</p>
          </li>
        </ul>
      </div>
      <div
        className={cls.ImgBg}
        style={{
          transform: `translateX(${move.x}px) translateY(${move.y}px)`,
        }}
      >
        <img
          src={contacts}
          className={cls.imgAnimate}
          style={{
            transform: `translateX(${-move.x * 1.5}px) translateY(${move.y}px)`,
          }}
          alt=""
        />
        <img
          src={star}
          className={cls.Star}
          style={{
            transform: `translateX(${-move.x * 1.5}px) translateY(${move.y}px)`,
          }}
          alt=""
        />
      </div>
      <svg className={cls.Decor}>
        <defs>
          <radialGradient id="green">
            <stop offset="0%" stopColor="#2372498C" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle className={cls.shadowText} fill="url(#green)" />
        <circle className={cls.shadowImage} fill="url(#green)" />
      </svg>
      <img src={lines} className={cls.Lines} alt="" />
    </div>
  );
};

export default Contacts;
