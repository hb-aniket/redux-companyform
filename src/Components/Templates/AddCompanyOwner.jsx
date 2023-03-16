import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { ownerAction } from '../../Redux/Slices/counterSlice'
import InputFeild from '../Core/InputFeild'
import './Style.css'

export default function AddCompanyOwner(props) {

   const companyData = useSelector((state=>state.counter.companyForm.owner_info))
  const dispatch =useDispatch()
  const { register, handleSubmit,setValue } = useForm({})



 useEffect(() => {
    dataEnter()
  }, [])
  
    const dataEnter = () => {
    for (let x in companyData) {
      let abc = `owner_info.${x}`
      setValue(abc,companyData[x]) 
    }
    }

  const onSubmit = (data) => {
    dispatch(ownerAction(data))
    props.setForm(props.formcount +1)
    
  }
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="tab-body">
          <div className="Inputs p-5">
    <h4>Owner Information</h4>
    <hr/>

            <InputFeild
              register={register}
              label={"Owner's Name *"}
              name={"owner_name"}
              placeholder={"Owner's Name"}
              data={"owner_info"}
              id=""

            />

            <InputFeild
              register={register}
              label={"Owner's Email *"}
              name={"owner_email"}
              placeholder={"ABC@xyz.com"}
              data={"owner_info"}
              id=""

            />
          
            <div className='row g-3 mt-2'>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Gender</label>
                <select id="inputState" className="form-select" {...register("owner_info.gender")}>
                  <option value="" selected >Gender</option>
                  <option value="Male"  >Male</option>
                  <option value="Female">Female</option>
                  <option value="Other" >Other</option>

                </select>
              </div>
        
            </div>
          </div>
        </div>

    <div className="buttonsarea d-flex justify-content-between">
        <div className="d-grid gap-2 d-md-block">
        <button className="btn btn-outline-primary me-2  ps-5 pe-5" type="Submit">Next</button>
          <button className="btn btn-outline-primary ps-5 pe-5" type="button">Cancel</button>
        </div>
        {props.formcount > 0?( <div className="d-flex">
        <button className="btn btn-outline-dark me-2  ps-5 pe-5" onClick={()=>props.setForm(props.formcount -1)} type="button">Previous</button>

        </div>):(<></>)}

      </div>
      </form>
    </>
  )
}
