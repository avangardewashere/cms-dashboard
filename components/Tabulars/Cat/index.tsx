import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import SectionHeader from "@/components/sectionHeader";
import Link from "next/link";
import { useRequest } from "ahooks";
import { GetCatData } from "@/apiFetch";
import { ICatData } from "@/components/Forms/addCatForm";

const CatTabular = memo(function CatTabular() {
  const { data, loading } = useRequest(GetCatData);

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

        {loading ? (
          <div>Loading...</div>
        ) : (
          data?.map((item: ICatData, index: number) => {
            return (
              <div key={index} className={clsx(style.tBody)}>
                <div className={clsx(style.tbItem)}>{item._id}</div>
                <div className={clsx(style.tbItem)}>{item.catName}</div>
                <div className={clsx(style.tbItem)}>{item.breed}</div>
                <div className={clsx(style.tbItem)}>{item.color}</div>
              </div>
            );
          })
        )}
      </div>

      <div className={clsx(style.addButton)}>
        <Link href={"/addCat"}>Add Data</Link>
      </div>
    </div>
  );
});

export default CatTabular;
