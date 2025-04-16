import { FC } from "react";
import Button from "./../Button/Button";
import cls from "../../../Style/Card.module.css";
interface ICard {
  img: string;
  header: string;
  subheader: string;
  price: string[];
}

const Card: FC<ICard> = ({ img, header, subheader, price }) => {
  const Random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };
  return (
    <li className={cls.Card}>
      <div className={cls.Content}>
        <img src={img} alt="" />
        <h3>{header}</h3>
        <h4>{subheader}</h4>
        <p>
          {price[0]} <span>{price[1]}</span>
        </p>
        <Button variant="GREEN">Buy Product</Button>
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
          <linearGradient id="greenGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#35C66B" />
            <stop offset="100%" stopColor="#237249" />
          </linearGradient>
        </defs>
        <circle
          className={cls.shadowWhite}
          cy={`${Random(15, 90)}%`}
          fill="url(#white)"
        />
        <circle
          className={cls.shadowHover}
          cy={`${Random(15, 90)}%`}
          fill="url(#green)"
        />
        <circle
          className={cls.greenCircle}
          r="90"
          cx="50%"
          cy="140"
          fill="url(#greenGradient)"
        />
      </svg>
    </li>
  );
};

export default Card;
