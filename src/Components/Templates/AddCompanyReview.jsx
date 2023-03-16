import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AddCompanyReview(props) {

    const [reduxData, setReduxData] = useState()
    const [permission, setPermission] = useState()
    const [country, setCountry] = useState()
    const [language, setLanguage] = useState()


    const companyData = useSelector((state => state.counter.companyForm))
    const dispatch = useDispatch()



    useEffect(() => {
        setReduxData(companyData)
        getPermission()
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
    const getPermission = () => {

        axios.get(" https://mocki.io/v1/7f4622f6-1967-4c30-8b50-be5bacf33832")
            .then(function (response) {
                setPermission(response.data.data.modules);
            })
    }


    const submit = () => {

        console.log(JSON.stringify(companyData))



    }
    let CountryObject = country && country.filter(country => { return country.id == companyData.general_info.countryId })
    let LanguageObject = language && language.filter(language => { return language.code == companyData.general_info.languageCode })

    if (companyData && companyData.general_info && !!companyData.general_info.company_name)
        return (
            <>
                <div className="tab-body">
                    <div className="Inputs p-5">

                        <div className="container bg p-2 ">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 pt-2 mt-2">
                                <div className="col-md-auto p-4 me-4 ">
                                    <p className="h5">General</p>
                                    <p className="h6 mt-4 text-primary cursor" onClick={() => props.setForm(props.formcount - 3)}>Edit</p>
                                </div>
                                <div className="col p-2">
                                    <p className="h5 text-muted">Company's Name</p>
                                    <p className="h6 mt-3 text-break">{companyData && companyData.general_info.company_name}</p>
                                </div>
                                <div className="col p-2">
                                    <p className="h5 text-muted">Company's Email</p>
                                    <p className="h6 mt-3 text-break">{companyData && companyData.general_info.company_email}</p>
                                </div>
                                <div className="col p-2">
                                    <p className="h5 text-muted">Address</p>
                                    <p className="h6  text-break mt-3">{companyData && companyData.general_info.company_address}</p>
                                </div>
                                <div className="col p-2">
                                    <p className="h5 text-muted">Country</p>
                                    <p className="h6  text-break mt-3">{!!CountryObject && CountryObject[0].name}</p>
                                </div>
                                <div className="col p-2">
                                    <p className="h5 text-muted">Language</p>
                                    <p className="h6 mt-3 text-break">{LanguageObject != null && LanguageObject[0].label}</p>
                                </div>
                            </div>
                        </div>


                        <div className="container bg p-2  mt-3">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-2">
                                <div className="col-md-auto p-4 me-4">
                                    <p className="h5">Owner</p>
                                    <p className="h6 mt-4 text-primary cursor" onClick={() => props.setForm(props.formcount - 2)}>Edit</p>
                                </div>
                                <div className="col col-lg-3 p-4 me-4">
                                    <p className="h5 text-muted">Owner's Name</p>
                                    <p className="h6 mt-3 text-break">{companyData && companyData.owner_info.owner_name}</p>
                                </div>
                                <div className="col col-lg-3 p-4 me-4">
                                    <p className="h5 text-muted">Owner's Email</p>
                                    <p className="h6 mt-3 text-break">{companyData && companyData.owner_info.owner_email}</p>
                                </div>
                                <div className="col p-4 me-4">
                                    <p className="h5 text-muted">Gender</p>
                                    <p className="h6 mt-3">{companyData && companyData.owner_info.gender}</p>
                                </div>
                            </div>
                        </div>

                        <div className="container bg p-2  mt-3">
                            <div className="row ">
                                <div className="col-1 p-4 me-4">
                                    <p className="h5">Permission</p>
                                    <p className="h6 mt-4 text-primary cursor" onClick={() => props.setForm(props.formcount - 1)}>Edit</p>
                                </div>
                                <div className="col-8 p-4 ">
                                    {companyData.permissions_info.length == 0 ? (<p className="h6 ms-5 mt-4">No Permission</p>) : (<>
                                        {permission && permission.filter((item) => companyData.permissions_info.includes(item.id)).map((a) => {
                                            return (
                                                <div className="card bg d-flex flex-row  justify-content-end align-self-center mt-2">
                                                    <div className="card-body p-0 ps-2 pt-2">
                                                        <h6 className="card-title lh-1">{a.name}</h6>
                                                        <p className="fs-6 fw-lighter">{a.description}</p>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttonsarea d-flex justify-content-between">
                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-outline-primary me-2  ps-5 pe-5" type="button" onClick={() => { submit() }}>Submit</button>
                        <button className="btn btn-outline-primary ps-5 pe-5" type="Button">Cancel</button>
                    </div>
                    {props.formcount > 0 ? (<div className="d-flex">
                        <button className="btn btn-outline-dark me-2  ps-5 pe-5" onClick={() => props.setForm(props.formcount - 1)} type="button">Previous</button>
                    </div>) : (<></>)}
                </div>
            </>
        )
}
