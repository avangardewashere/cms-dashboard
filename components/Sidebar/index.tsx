"use client";
import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import useMyCmsStore from "@/store";

const Sidebar = memo(function Sidebar() {
  const { sidebar } = useMyCmsStore();
  return (
    <div
      className={clsx(style.container)}
      //   style={{ display: sidebar ? "flex" : "none" }}
      style={{ width: sidebar ? "240rem" : "0rem" }}
    >
      <aside className={clsx(style.sidebar)}>
       {sidebar&& <div className={clsx( style.sidebarBody)}>
          {/* <div  className={clsx(style.content)}> */}
          <div className={clsx(style.sidebarItem)}>
			Hello
		  </div>
          {/* </div> */}
        </div>}
      </aside>
    </div>
  );
});

export default Sidebar;
