import { FC, ReactElement } from "react";
import cls from "../../Style/Layout.module.css";
interface ILayout {
  children: ReactElement[] | ReactElement;
}
const Layout: FC<ILayout> = ({ children }) => {
  return <div className={cls.Layout}>{children}</div>;
};

export default Layout;
