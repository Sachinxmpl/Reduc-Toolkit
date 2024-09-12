import {atom} from "recoil"

const textState = atom({
            key : "textState" , 
            default : "sachin"
})


const countState = atom({
            key : "counterState" , 
            default : 0
})

export {
            textState , 
            countState
}