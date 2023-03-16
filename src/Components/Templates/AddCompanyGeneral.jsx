import React, { useEffect, useState } from 'react'
import InputFeild from '../Core/InputFeild'
import './Style.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { generalAction } from '../../Redux/Slices/counterSlice';

export default function AddCompanyGeneral(props) {
  const [country, setCountry] = useState()
  const [language, setLanguage] = useState()
  const companyData = useSelector((state=>state.counter.companyForm.general_info))
  const dispatch =useDispatch()
  const { register, handleSubmit, control, reset,setValue, formState: { isSubmitSuccessful, errors } } = useForm({})
  
  useEffect(() => {
    getLanguage()
    getCountry()
  }, [])

  const getLanguage = () => {

    axios.get("https://mocki.io/v1/def98d1b-7026-47ad-a1b7-65d1aad20ba5")
      .then(function (response) {
        setLanguage(response.data.data.languages);
      })
  }

  const getCountry = () => {

    axios.get("https://mocki.io/v1/f9803383-23cc-41aa-a544-1a7a27269761")
      .then(function (response) {
        setCountry(response.data.data.countries);
      })

  }
  useEffect(() => {
    dataEnter()
  }, [language])
  
  const dataEnter = () => {
    for (let x in companyData) {
      let abc = `general_info.${x}`
      setValue(abc,companyData[x]) 
    }
    }

  const onSubmit = (data) => {
    dispatch(generalAction(data))
    // console.log(data);
    props.setForm(+1)
  }

  const Previous = () => {
    props.setForm(-1)
  }

  // console.log(errors && errors.general_info  && errors.general_info.company_name)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="tab-body">
          <div className="Inputs p-5">
    <h4>General Information</h4>
    <hr/>

            <InputFeild
              register={register}
            errors={errors}
              
              label={"Company's Name *"}
              name={"company_name"}
              placeholder={"Company's Name"}
              data={"general_info"}
              id=""
            />
            {/* {errors && errors.general_info  && errors.general_info.company_name.type === 'required' && <p role="alert" className='text-danger'></p>} */}

            <InputFeild
            errors={errors}
              register={register}
              label={"Company's Email *"}
              name={"company_email"}
              placeholder={"ABC@xyz.com"}
              data={"general_info"}
              id=""

            />

{/* {errors && errors.general_info  && errors.general_info.company_email.type === 'required' && <p role="alert" className='text-danger'>Required</p>} */}

            <InputFeild
            errors={errors}
              
              register={register}
              label={"Company Address"}
              name={"company_address"}
              placeholder={"Address"}
              data={"general_info"}
              id=""

            />
            {/* {errors && errors.general_info  && errors.general_info.company_address.type === 'required' && <p role="alert" className='text-danger'>Required</p>} */}

            <div className='row g-3 mt-2'>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Country</label>
                <select id="inputState" className="form-select" {...register("general_info.countryId")}>
                  <option value="" selected >Choose Country</option>
                  {country?.length && country.map((item) => <option value={item.id}>{item.name}</option>)}
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">Language</label>
                <select id="inputState" className="form-select"  {...register("general_info.languageCode")}>
                  <option  value="" selected >Choose Language</option>
                  {language?.length && language.map((item) => <option value={item.code}>{item.label}</option>)}

                </select>
              </div>
            </div>
          </div>
        </div>
{/* <hr/> */}
        <div className="buttonsarea d-flex justify-content-between">
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-outline-primary me-2  ps-5 pe-5" type="Submit">Next</button>
            <button className="btn btn-outline-primary ps-5 pe-5" type="Button">Cancel</button>
          </div>
          {props.formcount > 0 ? (<div className="d-flex">
            <button className="btn btn-outline-dark me-2  ps-5 pe-5" onClick={() => { Previous() }} type="button">Previous</button>
          </div>) : (<></>)}


        </div>
      </form>

    </>
  )
}










