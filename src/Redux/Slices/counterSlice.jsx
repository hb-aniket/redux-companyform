import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    companyForm: {

        "general_info": {
            "company_name": "",
            "company_email": "",
            "company_address": "",
            "countryId": "",
            "languageCode": ""
          },
          "owner_info": {
            "owner_name": "",
            "owner_email": "",
            "gender": ""
          },
          "permissions_info": []


    },
  }

  export const counterSlice = createSlice({

    name:'counter',
    initialState,
    reducers:{
        generalAction:(state,action)=>{
            state.companyForm.general_info = action.payload.general_info

        },
        ownerAction:(state,action)=>{
            state.companyForm.owner_info = action.payload.owner_info
        },
        permissionAction:(state,action)=>{
          state.companyForm.permissions_info = action.payload
          // console.log(action.payload)
            // state.companyForm.owner_info = action.payload.owner_info
        }
    }
  })

  export const {generalAction,ownerAction,permissionAction} = counterSlice.actions
  export default counterSlice.reducer
