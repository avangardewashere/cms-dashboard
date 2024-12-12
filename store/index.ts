 import {create} from 'zustand'

 interface MyCmsState{
	bears:number;
	increase:(by:number) => void;
	sidebar:boolean;
	setShowSidebar:()=>void;
 }

 const useMyCmsStore = create<MyCmsState>()((set)=>({
	bears:0,
	increase:(by)=>set((state)=>({bears:state.bears + by })),
	sidebar:false,
	setShowSidebar:()=>set((state)=>({sidebar:!state.sidebar}))
 }))

 export default useMyCmsStore