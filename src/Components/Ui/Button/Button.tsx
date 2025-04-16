import { FC, useEffect, useState } from "react";
import cls from "../../../Style/Button.module.css";

interface IButton {
  children: string;
  variant: string;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  const [localCls, setLocalCls] = useState([cls.Button]);
  useEffect(() => {
    switch (props.variant) {
      case "GREEN":
        setLocalCls((prev) => [...prev, cls.Green]);
        break;
      case "BLACK":
        setLocalCls((prev) => [...prev, cls.Black]);
    }
  }, []);
  return (
    <>
      <button className={localCls.join(" ")} {...props}>
        {children}
      </button>
    </>
  );
};

export default Button;
