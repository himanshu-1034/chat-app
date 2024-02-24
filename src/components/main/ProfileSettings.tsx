import React, { ReactElement, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Params, useParams } from 'react-router-dom'
import { RootState } from '../../redux/store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function ProfileSettings(): ReactElement {
    const { id, section } = useParams<Params>();
    const profileSummary = useSelector((k: RootState) => k.profileSummary);
    const availableSettings = [
        {heading: 'Personal Information', link: 'personal-info'}
    ];

    const getHeading = () => {
        if (!section) return '';
        switch (section) {
            case 'personal-info':
                return 'Personal Information';
            default:
                return section;
        }
    }

    return (
        <>
            {!section && <Navigate to={`/profile/${id}/personal-info`} />}
            <div className='row'>
                <div className='col-md-12 col-12'>
                    <div className='d-flex align-items-center justify-content-center' style={{ flexDirection: 'column' }}>
                        <div className='d-flex align-items-center' style={{width: '100%', padding: '10px'}}>
                            {/* <FontAwesomeIcon className='hover-scale-inc cursor-pointer' icon={faAngleLeft} /> */}
                            <div className='d-flex align-items-center justify-content-center' style={{flex: 1}}>
                                <h2>{getHeading()}</h2>
                            </div>
                            {/* <FontAwesomeIcon className='hover-scale-inc cursor-pointer' icon={faAngleRight} /> */}
                        </div>
                        <div className='grow-animation' />
                    </div>
                </div>
            </div>
        </>
    )
}