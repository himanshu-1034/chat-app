import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomOtpInput from '../common/CustomOtpInput';

export default function Login(): ReactElement {
    const [loginType, setLoginType] = useState<'anonymous' | 'email' | 'username'>('username');
    return (
        <div id='main'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%' }}>
                {loginType === 'email' && <LoginWithEmail />}
                {loginType === 'anonymous' && <LoginAnonymous />}
                {loginType === 'username' && <LoginWithUserName />}
                <div className='form-group' style={{ marginTop: 20 }}>
                    {loginType !== 'anonymous' && <div className='form-label cursor-pointer text-underline mt-10' onClick={() => { setLoginType('anonymous') }}>
                        Anonymous Login
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={(props) => (
                                <Tooltip id="button-tooltip" {...props}>
                                    <div style={{ padding: '10px' }}>
                                        Entering Anonymously is a feature where people can chat in a common channel with different unique usernames and try the interface.
                                    </div>
                                </Tooltip>
                            )}
                        >
                            <FontAwesomeIcon icon={faInfoCircle} style={{ marginLeft: '5px' }} />
                        </OverlayTrigger> </div>}
                    {loginType !== 'email' && <div className='form-label cursor-pointer text-underline mt-10' onClick={() => { setLoginType('email') }}>Login With Email</div>}
                    {loginType !== 'username' && <div className='form-label cursor-pointer text-underline mt-10' onClick={() => { setLoginType('username') }}>Login with Username</div>}
                    <div className='form-label mt-10'>Don't Have an Account ? <Link to={'/register'}>Create Here</Link></div>
                </div>
            </div>
        </div>
    )
}

const LoginWithEmail = (): ReactElement => {
    const [email, setEmail] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [emailSent, setEmailSent] = useState<boolean>(false);
    return (
        <>
            <div className='row fade-in-animation'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
                    <h4 style={{ fontWeight: '600' }}>Login With Email</h4>
                    {!emailSent ? <form className='' onSubmit={(e: FormEvent) => { e.preventDefault(); setEmailSent(true); }}>
                        <div className='form-group'>
                            <label className='form-label'>If the email is valid, a verification code will be sent for authorization</label>
                            <input className='form-control' type='email' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }} required />
                        </div>
                        <Button variant="contained" style={{ marginTop: 10 }} type='submit'>Send Verification Link</Button>
                    </form> : (
                        <div className='fade-in-animation'>
                            <CustomOtpInput handleOtpChange={(newOtp) => {
                                if(newOtp?.length === 6) {
                                    
                                }
                            }} numberOfDigits={6} otp={otp} label='A Verification code is sent via email. Enter it to complete the process.' />
                            <div className='form-group'>
                                <label className='form-label mt-10 cursor-pointer' onClick={() => setEmailSent(false)}>Change Email ?</label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

const LoginWithUserName = (): ReactElement => {
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    return (
        <>
            <div className='row fade-in-animation'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
                    <h4 style={{ fontWeight: '600' }}>Login With Username</h4>
                    <form className='' onSubmit={(e: FormEvent) => { e.preventDefault() }}>
                        <div className='form-group'>
                            <label className='form-label'>Username</label>
                            <input className='form-control' type='text' value={userName} onChange={(e: ChangeEvent<HTMLInputElement>) => { setUserName(e.target.value) }} required />
                        </div>
                        <div className='form-group'>
                            <label className='form-label'>Password</label>
                            <input className='form-control' type='password' value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }} required />
                        </div>
                        <Button variant="contained" style={{ marginTop: 10 }} type='submit'>Login</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

const LoginAnonymous = (): ReactElement => {
    const [userName, setUserName] = useState<string>('');
    return (
        <>
            <div className='row fade-in-animation'>
                <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
                    <h4 style={{ fontWeight: '600' }}>Anonymous Login</h4>
                    <form className='' onSubmit={(e: FormEvent) => { e.preventDefault() }}>
                        <div className='form-group'>
                            <label className='form-label'>Entering Anonymously is a feature where people can chat in a common channel with different unique usernames and try the interface.</label>
                            <input className='form-control' type='text' value={userName} onChange={(e: ChangeEvent<HTMLInputElement>) => { setUserName(e.target.value) }} required placeholder='Create Username' />
                        </div>
                        <Button variant="contained" style={{ marginTop: 10 }} type='submit'>Enter Anonymously</Button>
                    </form>
                </div>
            </div>
        </>
    )
}