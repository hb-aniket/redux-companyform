import React, { useState } from 'react'
import AddCompanyGeneral from '../Templates/AddCompanyGeneral'
import AddCompanyOwner from '../Templates/AddCompanyOwner'
import AddCompanyPermission from '../Templates/AddCompanyPermission'
import AddCompanyReview from '../Templates/AddCompanyReview'
import './AddCompany.css'

export default function AddCompany() {
    const [formCount, setFormCount] = useState(0)
    return (
        <div className="container">

            {formCount === 3?(<><div className='p-2'>
                <h4 hidden>Add new Company</h4>
                <p hidden className="fs-6 text-muted">Complete the feilds below to create and setup new company.</p>
            </div></>):           
            (<><button className='btn'><i className="fa-sharp fa-solid fa-arrow-left"></i></button>
            <div className='p-2'>
                <h4>Add new Company</h4>
                <p className="fs-6 text-muted">Complete the feilds below to create and setup new company.</p>
            </div>
            </>)}
            
            <div className="navtab p-3">
                <div>
                    <ul className="nav ">
                        <li className={`nav-item" ${formCount >= 0 ? ('navstyle') : ('navstyle-grey')}`}>
                            <label className={`m-2 p-2 ${formCount >= 0 ? ("") : ('text-muted')}`}>1. General Information</label>
                        </li>
                        <li className={`nav-item" ${formCount >= 1 ? ('navstyle') : ('navstyle-grey')}`}>
                            <label className={`m-2 p-2 ${formCount >= 1 ? ("") : ('text-muted')}`}>2. Owner Information</label>
                        </li>
                        <li className={`nav-item" ${formCount >= 2 ? ('navstyle') : ('navstyle-grey')}`}>
                            <label className={`m-2 p-2 ${formCount >= 2 ? ("") : ('text-muted')}`}>3. Permission</label>
                        </li>
                        <li className={`nav-item" ${formCount >= 3 ? ('navstyle') : ('navstyle-grey')}`}>
                            <label className={`m-2 p-2 ${formCount >= 3 ? ("") : ('text-muted')}`}>4. Review</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="nabbody">
                {formCount === 0 ? (<AddCompanyGeneral
                    setForm={setFormCount}
                    formcount={formCount}

                />) : (<></>)}
                {formCount === 1 ? (<AddCompanyOwner
                    setForm={setFormCount}
                    formcount={formCount}
                />) : (<></>)}
                {formCount === 2 ? (<AddCompanyPermission
                    setForm={setFormCount}
                    formcount={formCount}
                />) : (<></>)}
                {formCount === 3 ? (<AddCompanyReview
                    setForm={setFormCount}
                    formcount={formCount}
                />) : (<></>)}


            </div>


        </div>
    )
}
