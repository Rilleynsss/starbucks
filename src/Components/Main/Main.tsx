import cls from "../../Style/Main.module.css";
import Button from "../Ui/Button/Button";
import cup from "../../assets/cup.png";
import heart from "../../assets/heart.png";
import rocket from "../../assets/rocket.png";
import money from "../../assets/money.png";
import lines from "../../assets/lines.png";
import star from "../../assets/star.png";
const Main = () => {
  return (
    <div className={cls.Main}>
      <div className={cls.Top}>
        <div className={cls.Content}>
          <h1>
            New Cafe <br /> by
            <span> StarBucks</span>
          </h1>
          <p className={cls.Subheader}>
            Have time to buy the most harmonious drinks in the new Starbucks
            coffee and don't forget about the discount!
          </p>
          <div>
            <Button variant="GREEN">Select a coffee </Button>
            <Button variant="BLACK">More</Button>
          </div>
          <ul className={cls.List}>
            <li>
              <h2>
                9k <span>+</span>
              </h2>
              <p>Premium Users</p>
            </li>
            <li>
              <h2>
                2k <span>+</span>
              </h2>
              <p>Happy Customer</p>
            </li>
            <li>
              <h2>
                28 <span>+</span>
              </h2>
              <p>Awards Winning</p>
            </li>
          </ul>
        </div>
        <div className={cls.Img}>
          <img src={cup} alt="" />
        </div>
      </div>
      <div className={cls.Under}>
        <img src={star} className={cls.Star} alt="" />
        <ul>
          <li>
            <img className={cls.First} src={heart} alt="" />
            <h3>Tasty</h3>
            <p>We have the most delicious coffee</p>
          </li>
          <li>
            <img className={cls.Second} src={rocket} alt="" />
            <h3>Fast</h3>
            <p>Our cafe will serve you quickly</p>
          </li>
          <li>
            <img className={cls.Third} src={money} alt="" />
            <h3>Available</h3>
            <p>Cafe will serveat the most pleasant prices</p>
          </li>
        </ul>
      </div>

      <svg className={cls.Decor}>
        <defs>
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
        </defs>
        <circle className={cls.shadowMain} fill="url(#green)" />
        <circle className={cls.shadowCup} fill="url(#green)" />
        <circle className={cls.shadowCupWhite} fill="url(#white)" />
        <circle className={cls.shadowUnder} fill="url(#green)" />
        <circle className={cls.shadowUnderWhite} fill="url(#white)" />
      </svg>
      <div className={cls.Lines}>
        <img src={lines} alt="" />
      </div>
    </div>
  );
};

export default Main;
