import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import EditCatForm from "@/components/Forms/editCatForm";

const EditCatPage = memo(function EditCatPage() {
  return (
	<div className={clsx(style.container)}>
	  <EditCatForm />
	</div>
  );
});

export default EditCatPage;