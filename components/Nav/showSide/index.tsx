"use client"
import useMyCmsStore from "@/store";
import { useMemoizedFn } from "ahooks";
import { memo } from "react";
 

const ShowSide = memo(function ShowSide() {
  const {setShowSidebar,sidebar}= useMyCmsStore( )

 

  return <div style={{background:sidebar?"red":""}} onClick={setShowSidebar}>
 
  </div>;
});

export default ShowSide;
