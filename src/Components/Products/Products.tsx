import { FC, TouchEvent, WheelEvent, useEffect, useState } from "react";
import Card from "../Ui/Card/Card";
import cup4 from "../../assets/cup4.png";
import cup3 from "../../assets/cup3.png";
import cup2 from "../../assets/cup2.png";
import cls from "../../Style/Product.module.css";
interface IScrollCard {
  start: number | null;
  end: boolean | null;
  cords: number;
}
const Products: FC = () => {
  const [scrollCard, setScrollCard] = useState<IScrollCard>({
    start: null,
    end: null,
    cords: 0,
  });
  useEffect(() => {
    if (
      window.outerWidth >= 768 &&
      window.outerWidth <= 1366 &&
      scrollCard.cords != -10 &&
      !scrollCard.start
    ) {
      setScrollCard((prev) => ({ ...prev, cords: -10 }));
    } else if (
      window.outerWidth <= 767 &&
      window.outerWidth >= 365 &&
      scrollCard.cords != -220 &&
      !scrollCard.start
    ) {
      setScrollCard((prev) => ({ ...prev, cords: -220 }));
    }
    if (scrollCard.start && scrollCard.end) {
      changeCordsData();
    }
  }, [scrollCard]);
  const scrollCards = (e: WheelEvent<HTMLElement>) => {
    if (window.innerWidth < 1366) {
      setScrollCard((prev) => ({ ...prev, start: 1 }));
      switch (e.deltaY) {
        case -100:
          if (scrollCard.cords > -10) {
            setScrollCard((prev) => ({
              ...prev,
              cords: prev.cords + e.deltaY / 10,
            }));
          }

          break;
        case 100:
          if (scrollCard.cords < 3) {
            setScrollCard((prev) => ({
              ...prev,
              cords: prev.cords + e.deltaY / 10,
            }));
          }

          break;
      }
    }
  };
  const changeCordsData = (e?: TouchEvent<HTMLElement>) => {
    const { end, start } = scrollCard;
    if (!end && start && e && e.view) {
      if (window.outerWidth > 767 && window.outerWidth <= 1366) {
        setScrollCard((prev) => ({
          ...prev,
          cords: (e.touches[0].clientX - start) / 700 + prev.cords,
        }));
      } else if (window.outerWidth <= 767) {
        setScrollCard((prev) => ({
          ...prev,
          cords: (e.touches[0].clientX - start) / 300 + prev.cords,
        }));
      }
    } else if (end && scrollCard.cords) {
      if (window.innerWidth >= 768) {
        if (scrollCard.cords < -10) {
          setScrollCard((prev) => ({ ...prev, cords: -10 }));
        } else if (scrollCard.cords > 3) {
          setScrollCard((prev) => ({ ...prev, cords: 3 }));
        }
      } else if (window.innerWidth <= 767) {
        if (scrollCard.cords < -220) {
          setScrollCard((prev) => ({ ...prev, cords: -220 }));
        } else if (scrollCard.cords > 0) {
          setScrollCard((prev) => ({ ...prev, cords: 0 }));
        }
      }
    }
  };
  const cards = [
    {
      img: cup4,
      header: "Espresso",
      subheader: "Our cafe will serve you quickly",
      price: ["7,45$", "330 ml"],
    },
    {
      img: cup3,
      header: "Cortado",
      subheader: "Our cafe will serve you quickly",
      price: ["4,45$", "500 ml"],
    },
    {
      img: cup2,
      header: "Breve",
      subheader: "Our cafe will serve you quickly",
      price: ["9,00$", "550 ml"],
    },
    {
      img: cup4,
      header: "Flat white",
      subheader: "Our cafe will serve you quickly",
      price: ["10,50$", "650 ml"],
    },
  ];
  return (
    <div id="product" className={cls.Product}>
      <div className={cls.Content}>
        <h2>
          New Our <br /> <span>Products</span>
        </h2>
        <p>
          Have time to buy the most harmonious drinks in the new Starbucks
          coffee and don't forget about the discount! Starbucks coffee and don't
          forget about the discount!
        </p>
      </div>
      <div className={cls.CardWrapper}>
        <ul
          className={scrollCard.end ? cls.End : " "}
          style={{ transform: `translateX(${scrollCard.cords}%)` }}
          onWheel={(e) => scrollCards(e)}
          onTouchStart={(e) =>
            setScrollCard((prev) => ({
              ...prev,
              start: e.touches[0].clientX,
              end: false,
            }))
          }
          onTouchMove={(e) => changeCordsData(e)}
          onTouchEnd={() => {
            setScrollCard((prev) => ({ ...prev, end: true }));
          }}
        >
          {cards.map((item) => {
            return (
              <Card
                img={item.img}
                header={item.header}
                price={item.price}
                subheader={item.subheader}
                key={item.header}
              />
            );
          })}
        </ul>
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
      </svg>
    </div>
  );
};

export default Products;
