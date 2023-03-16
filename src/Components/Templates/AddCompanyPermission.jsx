import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { permissionAction } from '../../Redux/Slices/counterSlice'
import './Style.css'

export default function AddCompanyPermission(props) {
  const [permission, setPermission] = useState([])
  const [checkedPermission, setCheckedPermission] = useState([])
  const companyData = useSelector((state => state.counter.companyForm.permissions_info))
  const dispatch = useDispatch()

  useEffect(() => {
    getPermission()
    setCheckedPermission(companyData)
    // if(permission.length == checkedPermission){

  }, [])

  const getPermission = () => {

    axios.get(" https://mocki.io/v1/7f4622f6-1967-4c30-8b50-be5bacf33832")
      .then(function (response) {
        setPermission(response.data.data.modules);
      })
  }

  const allPermission = (e) => {
    setCheckedPermission([])
    let Arr = []
    if (e.target.checked) {
      permission.map((item) => (
        Arr.push(item.id)
      ))
      setCheckedPermission(Arr)
    }
  }
  console.log(checkedPermission)

  const permissionCheck = (e, id) => {

    if (e.target.checked) {
      setCheckedPermission([...checkedPermission, id])
    }
    else if (!e.target.checked) {
      setCheckedPermission((current) => current.filter((f) => f !== id))
    }
    allCheckEnable()
  }

  const allCheckEnable=()=>{
    // console.log(checkedPermission.length)
    return permission.length === checkedPermission.length
  }

  const checked = (id) => {
    let isChecked = checkedPermission.includes(id)
    return isChecked
  }
  const next = () => {
    dispatch(permissionAction(checkedPermission))
    props.setForm(props.formcount + 1)
  }

  return (
    <>
      <div className="tab-body">
        <div className="Inputs p-5">
          <h4>Permission</h4>
          <hr />
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) => { allPermission(e) }}  checked={allCheckEnable()}/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Enable all Permissions
            </label>
          </div>
          <div className="m-3">
            {permission && permission.map((v, i) => {
              return (<>
                <div className="card border-light d-flex flex-row  justify-content-end align-self-center col-md-8">
                  <div className="card-body p-0">
                    <h6 className="card-title lh-1">{v.name}</h6>
                    <p className="fs-6 fw-lighter">{v.description}</p>
                  </div>
                  <div className="form-check form-switch">
                    <input className="form-check-input customStyle" type="checkbox" role="switch" id={v.id} onChange={(e) => { permissionCheck(e, v.id) }} checked={checked(v.id)} />
                  </div>
                </div>
              </>
              )
            })}
          </div>
        </div>
      </div>
      <div className="buttonsarea d-flex justify-content-between">
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-outline-primary me-2  ps-5 pe-5" onClick={() => { next() }} type="Submit">Next</button>
          <button className="btn btn-outline-primary ps-5 pe-5" type="Button">Cancel</button>
        </div>
        {props.formcount > 0 ? (<div className="d-flex">
          <button className="btn btn-outline-dark me-2  ps-5 pe-5" onClick={() => props.setForm(props.formcount - 1)} type="button">Previous</button>
        </div>) : (<></>)}
      </div>
    </>


  )
}
