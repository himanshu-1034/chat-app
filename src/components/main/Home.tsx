import React, { ReactElement, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import ChatListing from './ChatListing';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import SearchBar from '../common/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';



export default function Home(): ReactElement {
    const profileSummary = useSelector((k: RootState) => k.profileSummary);
    const [isAnonymousMode, setIsAnonymousMode] = useState<boolean>(false);
    const { chatId } = useParams();
    return (
        <>
            {isAnonymousMode && <div className='row fade-in-animation'>
                <div className='col-12 d-flex justify-content-center'>
                    <div>
                        You're in Anonymous Mode (Remaining). <Link className='mr-5 ml-5' to={'/login'}>End session and Login</Link> or <Link className='ml-5' to={'/register'}>Create Account ?</Link>
                    </div>
                </div>
                <div className='col-12 grow-animation' style={{ borderBottom: '1px solid #FFFFFF', margin: '10px 0px 0px 0px' }}></div>
            </div>}
            <div className='row' style={{ height: isAnonymousMode ? 'calc(100% - 50px)' : '100%' }}>
                <div className='chat-listing col-md-4 col-sm-12' style={{ height: '100%', borderRight: '1px solid', padding: '0px' }}>
                    <ChatListing />
                </div>
                <div className='chat-details col-md-8 col-sm-12' style={{height: '100%'}}>
                    {!chatId ? (
                        <div style={{ height: '100%', width: '100%' }} className='align-items-center justify-content-center no-chat-selected-screen'>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faComments} style={{ fontSize: 150 }} />
                                <h3 style={{ marginTop: '10px' }}>No Chat Selected</h3>
                                <small><Link to={'/login'}><FontAwesomeIcon style={{marginRight: '5px'}} icon={faRightFromBracket} /> Logout</Link></small>
                            </div>
                        </div>
                    ) : <Outlet />}
                </div>
            </div>
        </>
    )
}