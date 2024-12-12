import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import CatTabular from "../Tabulars/Cat";

const HomePage = memo(function HomePage() {
  return (
    <div className={clsx(style.container)}>
      {/* <div>Content</div> */}
      <CatTabular />
    </div>
  );
});

export default HomePage;
