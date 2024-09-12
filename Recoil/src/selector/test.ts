import { selector } from "recoil";
import { countState,textState } from "../atom/test1";

export const jointwo = selector({
            key : "htisfsfda" , 
            get : ({get})=>{
                        const a = get(textState)
                        const b = get(countState)
                        return a+b ; 
            }
})
export const charactercounter = selector({
            key : "htisfsfda" , 
            get : ({get})=>{
                        const a = get(textState)
                        return a.length;
            }
})