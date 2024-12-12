import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionHeader from "@/components/sectionHeader";
import Link from "next/link";

const CatTabular = memo(function CatTabular() {
  return (
    <div className={clsx(style.container)}>
      <SectionHeader title={"Cat Information"} />

      <div className={clsx(style.table)}>
        <div className={clsx(style.tHeader)}>
          <div className={clsx(style.thItem)}>ID</div>
          <div className={clsx(style.thItem)}>Name</div>
          <div className={clsx(style.thItem)}>Breed</div>
          <div className={clsx(style.thItem)}>Color</div>
        </div>

        <div className={clsx(style.tBody)}>
          <div className={clsx(style.tbItem)}>1</div>
          <div className={clsx(style.tbItem)}>Mori</div>
          <div className={clsx(style.tbItem)}>Permese</div>
          <div className={clsx(style.tbItem)}>Choco-Point</div>
        </div>
      </div>

	  <div className={clsx(style.addButton)}>
		<Link href={"/addCat"} >Add Data</Link>
	  </div>
    </div>
  );
});

export default CatTabular;
