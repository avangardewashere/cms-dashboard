import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";
import AddCatForm from "@/components/Forms/addCatForm";

const AddCatPage = memo(function AddCatPage() {
  return (
	<div className={clsx(style.container)}>
	  <AddCatForm />
	</div>
  );
});

export default AddCatPage;