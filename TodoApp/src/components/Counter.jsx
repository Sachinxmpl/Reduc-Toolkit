import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset } from '../slices/counterSlice'

const Counter = () => {

    const count = useSelector(state => state.counterApp.count)
    const dispatch = useDispatch()

  return (
        <>
                    <h1> Count : {count} </h1>
                    <button onClick={()=> dispatch(increment(1))} > + 1 </button>
                    <button onClick={()=> dispatch(decrement(1))} > - 1 </button>
                    <button onClick={()=> dispatch(increment(5))}> + 5 </button>
                    <button  onClick={()=> dispatch(decrement(5))}> - 5 </button>
                    <button onClick={()=> dispatch(reset())}> Reset </button>

        </>
  )
}

export default Counter