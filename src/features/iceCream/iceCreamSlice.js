import  {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState={
    iceCreamCount:20
}

const icecreamSlice=createSlice({
    name:'iceCream',
    initialState:initialState,
    reducers:{ 
        ordered:(state)=>{
            state.iceCreamCount--
        },
        restocked:(state,actions)=>{
            state.iceCreamCount+=actions.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state)=>{
            state.numOfIcecreams--
        })
    }

});
export default icecreamSlice.reducer
export const {ordered,restocked}=icecreamSlice.actions;

