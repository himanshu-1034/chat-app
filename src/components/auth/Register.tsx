import React, { ChangeEvent, FormEvent, ReactElement, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InfoTooptip from '../common/InfoTooltip'
import { Button, Checkbox, FormControlLabel } from '@mui/material'

export default function Register(): ReactElement {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [useEmailAsUsername, setUseEmailAsUsername] = useState<boolean>(true);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    useEffect(() => {
        if (useEmailAsUsername && email) {
            setUserName(email);
        }
    }, [useEmailAsUsername, email])
    return (
        <div id='main'>
            <div className='fade-in-animation' style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className='mt-10 form-group'>
                    <h4 style={{ fontWeight: '600' }}>Connect With the World in few minutes.</h4>
                    <form onSubmit={(e: FormEvent) => { e.preventDefault() }}>
                        <div className='row'>
                            <div className='col-sm-12 col-xs-12 col-md-4 col-lg-4'>
                                <div className='form-group'>
                                    <label className='form-label'>First Name *</label>
                                    <input className='form-control' required value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
                                </div>
                            </div>
                            <div className='col-sm-12 col-xs-12 col-md-4 col-lg-4'>
                                <div className='form-group'>
                                    <label className='form-label'>Last Name</label>
                                    <input className='form-control' value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-8 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>Email Address</label>
                                    <input className='form-control' type='email' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4 col-sm-12'>
                                <div className='form-group'>
                                    <label className='form-label'>
                                        Username * <InfoTooptip content={"Your username should be unique. It will be visible to everyone out there. It can be updated under settings"} style={{ marginLeft: '5px' }} />
                                    </label>
                                    <input required className='form-control' readOnly={useEmailAsUsername} value={userName} onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)} />
                                </div>
                            </div>
                            <div className='col-md-4 col-sm-12'>
                                <div className='d-flex align-items-center' style={{marginTop: '27px'}}>
                                    <Checkbox checked={useEmailAsUsername} value={useEmailAsUsername} onChange={() => setUseEmailAsUsername(prev => !prev)} />
                                    <div className=''>Use Email as my username</div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-12 col-xs-12 col-md-4 col-lg-4'>
                                <div className='form-group'>
                                    <label className='form-label'>New Password * <InfoTooptip content={'Password should be atleast 8 characters.'} style={{ marginLeft: '5px' }} /></label>
                                    <input className='form-control' required type='password' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                                </div>
                            </div>
                            <div className='col-sm-12 col-xs-12 col-md-4 col-lg-4'>
                                <div className='form-group'>
                                    <label className='form-label'>Confirm Password</label>
                                    <input className='form-control' required type='password' value={confirmPassword} onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <Button className='mt-10' variant='contained' disabled={confirmPassword !== password || password?.length < 8} type='submit'>Create My Account</Button>
                    </form>
                    <div className='form-label mt-10'>Already Have an account? <Link to={'/login'}>Proceed to Login</Link></div>
                </div>
            </div>
        </div>
    )
}