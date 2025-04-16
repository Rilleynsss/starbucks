import { FC } from "react";
import cls from "../../Style/Event.module.css";
import EventCard, { EventCardVariant } from "../EventCard/EventCard";
import eventCard1 from "../../assets/eventCard1.png";
import eventCard2 from "../../assets/eventCard2.png";
import eventCard3 from "../../assets/eventCard3.png";
import eventCard4 from "../../assets/eventCard4.png";
import eventCard5 from "../../assets/eventCard5.png";
import line from "../../assets/lines3.png";
const Events: FC = () => {
  // const changeCordsData = (e) => {
  //   const { end, start } = scrollCard;
  //   if (!end && start && e) {
  //     if (e.view.outerWidth > 767 && e.view.outerWidth <= 1366) {
  //       setScrollCard((prev) => ({
  //         ...prev,
  //         cords: (e.touches[0].clientX - start) / 700 + prev.cords,
  //       }));
  //     } else if (e.view.outerWidth <= 767) {
  //       setScrollCard((prev) => ({
  //         ...prev,
  //         cords: (e.touches[0].clientX - start) / 300 + prev.cords,
  //       }));
  //     }
  //   } else if (end && scrollCard.cords) {
  //     if (e.outerWidth >= 768) {
  //       if (scrollCard.cords < -10) {
  //         setScrollCard((prev) => ({ ...prev, cords: -10 }));
  //       } else if (scrollCard.cords > 3) {
  //         setScrollCard((prev) => ({ ...prev, cords: 3 }));
  //       }
  //     } else if (e.outerWidth <= 767) {
  //       if (scrollCard.cords < -220) {
  //         setScrollCard((prev) => ({ ...prev, cords: -220 }));
  //       } else if (scrollCard.cords > 0) {
  //         setScrollCard((prev) => ({ ...prev, cords: 0 }));
  //       }
  //     }
  //   }
  // };

  const Cards = [
    {
      bg: eventCard1,
      variant: EventCardVariant.LARGE,
      firstLine: "TWO COFFEE",
      secondLine: "FOR 1 PRICE",
    },
    {
      bg: eventCard2,
      variant: EventCardVariant.LARGE,
      firstLine: "KITCHEN",
      secondLine: "TOUR",
    },
    {
      bg: eventCard3,
      variant: EventCardVariant.SMALL,
      firstLine: "FREE COFFEE",
      secondLine: "FOR 3 COFFEE",
    },
    {
      bg: eventCard4,
      variant: EventCardVariant.SMALL,
      firstLine: "OUR",
      secondLine: "INSTAGRAM",
    },
    {
      bg: eventCard5,
      variant: EventCardVariant.SMALL,
      firstLine: "WHERE ARE YOU",
      secondLine: "CHOOSE US?",
    },
  ];

  return (
    <div id="events" className={cls.Events}>
      <div className={cls.Header}>
        <p>
          Only in 2021 we have made more than 100,000 orders for you, your loved
          ones, all of you, and in 2022 we are ready to destroy the market
        </p>
        <h2>
          Our New <br />
          <span>Events</span>
        </h2>
      </div>
      <ul className={cls.Wrapper}>
        {Cards.map((i) => {
          return (
            <EventCard key={i.bg} bg={i.bg} variant={i.variant}>
              {i.firstLine} <br /> {i.secondLine}
            </EventCard>
          );
        })}
      </ul>
      <img src={line} className={cls.Line} alt="" />
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
        <circle className={cls.shadowTop} fill="url(#green)" />
        <circle className={cls.shadowRight} fill="url(#green)" />
        <circle className={cls.shadowBottom} fill="url(#white)" />
        <circle className={cls.shadowLeft} fill="url(#green)" />
      </svg>
    </div>
  );
};

export default Events;
