import { atom, selector } from "recoil";
import axios from "axios";

export const userdetails = atom({
            key : "userdetails" , 
            default : selector({
                        key : "detailsapi" , 
                        get : async()=>{
                                    const res = await axios.get("https://some-random-api.com/facts/dog")
                                   
                                    console.log(res.data)
                                    return res.data
                        }
            })
})