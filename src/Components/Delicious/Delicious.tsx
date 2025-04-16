import { FC, MouseEvent, useState } from "react";
import cls from "../../Style/Delicious.module.css";
import room from "../../assets/room.png";
import star from "../../assets/star.png";
import lines from "../../assets/lines2.png";

const Delicious: FC = () => {
  const [move, setMove] = useState({ x: 0, y: 0 });
  const getCords = (e: MouseEvent<HTMLElement>) => {
    if (window.innerWidth > 1366) {
      setMove({
        x: (e.currentTarget.offsetWidth / 2 - e.clientX) / 30,
        y: (e.currentTarget.offsetHeight / 2 - e.clientY) / 15,
      });
    }
  };
  return (
    <div
      onMouseMove={(e) => getCords(e)}
      onMouseLeave={() => {
        setMove({ x: 0, y: 0 });
      }}
      className={cls.Delicious}
    >
      <div
        className={cls.ImgBg}
        style={{
          transform: `translateX(${move.x}px) translateY(${move.y}px)`,
        }}
      >
        <img
          src={room}
          style={{
            transform: `translateX(${-move.x * 1.5}px) translateY(${move.y}px)`,
          }}
          alt=""
          className={cls.animImage}
        />
        <img
          src={star}
          style={{
            transform: `translateX(${-move.x * 1.5}px) translateY(${move.y}px)`,
          }}
          className={cls.Star}
          alt=""
        />
      </div>
      <div>
        <h2>
          We make <span>delicious</span>
        </h2>
        <p>
          Only in 2021 we have made more than 100,000 orders for you, your loved
          ones, all of you, and in 2022 we are ready to destroy the market
        </p>
      </div>
      <svg className={cls.Decor}>
        <defs>
          <radialGradient id="green">
            <stop offset="0%" stopColor="#2372498C" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <radialGradient id="white">
            <stop offset="0%" stopColor="#D9D9D94D" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle className={cls.shadowText} fill="url(#green)" />
        <circle className={cls.shadowImg} fill="url(#green)" />
      </svg>
      <img src={lines} className={cls.lines} alt="" />
    </div>
  );
};

export default Delicious;
