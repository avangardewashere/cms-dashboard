import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

const Nav = memo(function Nav() {
  return (
	<nav className={clsx(style.container)}>
	  <div className={clsx(style.label)}>
		<div></div>
		<div>API Provider</div>
	  </div>
	  <div>Dashboard</div>
	</nav>
  );
});

export default Nav;