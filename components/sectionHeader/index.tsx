import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import Image from "next/image";

interface ISectionHeader {
  title?: string;
  img?: string;
}

const SectionHeader = memo(function SectionHeader(props: ISectionHeader) {
  const { title, img } = props;
  return (
    <div className={clsx(style.container)}>
      {img ? <Image src={img} alt="" /> : <div className={style.roundbox}></div>}
      <div>{title ? title : "title"}</div>
    </div>
  );
});

export default SectionHeader;
