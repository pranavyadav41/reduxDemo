import React, { useReducer } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {ordered,restocked} from './iceCreamSlice'

const IceCreamView = () => {
  const numOfIceCreams=useSelector((state)=>state.iceCream.iceCreamCount)
  const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of IceCreams:{numOfIceCreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
        <button onClick={()=>dispatch(restocked(5))}>Restock IceCream</button>
      
    </div>
  )
}
export default IceCreamView
