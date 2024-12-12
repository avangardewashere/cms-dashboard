import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

const Sidebar = memo(function Sidebar() {
  return (
	<div className={clsx(style.container)}>
	  <div>Content</div>
	</div>
  );
});

export default Sidebar;