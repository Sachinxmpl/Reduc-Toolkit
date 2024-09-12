import { useRecoilValue } from "recoil"
import {userdetails} from "./atom/test2"

export const FromBackend = ()=>{
            const userdetails1 = useRecoilValue(userdetails)
   
            return (
                        <div>
                                                            {
                                                                        userdetails1.fact 
                                                            }
                        </div>
            )
}