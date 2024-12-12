"use client";
import { DeleteCatData } from "@/apiFetch";
import { useRequest } from "ahooks";
import { useRouter } from "next/navigation";
import { HiTrash } from "react-icons/hi2";

interface IRemoveBtn {
  id: string;
}

export default function RemoveBtn({ id }: IRemoveBtn) {
  const router = useRouter();

  const { runAsync: runAsyncDeleteCatData } = useRequest(async() =>
    await DeleteCatData(id),
  {
	manual:true
  }
  );
  
  const removeCatInfo = async () => {
    const confirmed = confirm("Are you sure to remove this information?");

    if (confirmed) {
      console.log(confirmed);
      const res = await runAsyncDeleteCatData();

      if (res?.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={() =>removeCatInfo()}>
      <HiTrash size={"14rem"} />
    </button>
  );
}
