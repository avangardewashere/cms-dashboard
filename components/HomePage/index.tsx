import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

const HomePage = memo(function HomePage() {
  return (
	<div className={clsx(style.container)}>
	  <div>Content</div>
	</div>
  );
});

export default HomePage;