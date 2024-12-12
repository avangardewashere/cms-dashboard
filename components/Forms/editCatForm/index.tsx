import { memo } from "react";
import clsx from "clsx";
import style from "./index.module.scss";

const EditCatForm = memo(function EditCatForm() {
  return (
	<div className={clsx(style.container)}>
	  <div>Content</div>
	</div>
  );
});

export default EditCatForm;