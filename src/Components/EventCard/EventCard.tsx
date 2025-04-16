import { FC, ReactNode } from "react";
import cls from "../../Style/Event.module.css";
import Button from "../Ui/Button/Button";
export enum EventCardVariant {
  LARGE = "LARGE",
  SMALL = "SMALL",
}

interface IEventCard {
  variant: EventCardVariant;
  bg: string;
  children: ReactNode;
}

const EventCard: FC<IEventCard> = ({ bg, variant, children }) => {
  switch (variant) {
    case EventCardVariant.SMALL:
      return (
        <li
          className={[cls.Card, cls.Small].join(" ")}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className={cls.Content}>
            <h3>{children}</h3>
            <Button variant="GREEN">More</Button>
          </div>
        </li>
      );
    case EventCardVariant.LARGE:
      return (
        <li
          className={[cls.Card, cls.Large].join(" ")}
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className={cls.Content}>
            <h3>{children}</h3>
            <Button variant="GREEN">More</Button>
          </div>
        </li>
      );
  }
};

export default EventCard;
