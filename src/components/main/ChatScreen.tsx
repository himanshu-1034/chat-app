import { faArrowUp, faComments, faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, FormEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { Params, useParams } from 'react-router-dom';
import { ChatType } from './ChatListing';
import { Avatar, Button } from '@mui/material';

type ChatData = any;

export default function ChatScreen(): ReactElement {
    const { chatId } = useParams<Params>();
    const [chatData, setChatData] = useState<ChatData[]>(Array(100).fill({
        message: "Message",
        sender: "1",
        timestamp: new Date().toLocaleString()
    }));
    const [chatGeneralInfo, setChatGeneralInfo] = useState<ChatType>({
        chatId: new Date().toString(),
        chatName: "Himanshu",
        photoUrl: "https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg",
        type: 'single',
        contact: 'arora@yahoo.in'
    });
    const [msg, setMsg] = useState<string>('');
    const chatWindowRef = useRef<any>();

    useEffect(() => {
        scrollToLastMsg();
    }, [])

    useEffect(() => {
        scrollToLastMsg();
    }, [JSON.stringify(chatData)])

    const scrollToLastMsg = () => {
        const lastChildElement = chatWindowRef.current?.lastElementChild;
        lastChildElement?.scrollIntoView({ behavior: 'smooth' });
    }

    const submitMsg = (msg: string) => {
        if (msg) {
            let allChats = [...chatData];
            allChats.push({
                message: msg,
                sender: '2',
                timestamp: new Date().toLocaleString()
            })
            setChatData(allChats);
            setMsg('');
        }
    }

    const isMyMessage = (chat: any): boolean => {
        let isMyMsg: boolean = false;
        if(chat?.sender === '2') isMyMsg = true;
        return isMyMsg;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className='d-flex align-items-center justify-content-between' style={{ borderBottom: '1px solid ', padding: '5px 0px' }}>
                <div className='d-flex align-items-center'>
                    <Avatar src={chatGeneralInfo?.photoUrl}>{chatGeneralInfo?.chatName?.[0]}</Avatar>
                    <div className='ml-10' style={{ marginTop: '5px' }}>
                        <h4 style={{ margin: '0px' }}>{chatGeneralInfo?.chatName}</h4>
                        <small>Last seen 1 feb 2024</small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className='cursor-pointer' size='lg' icon={faEnvelope} title='Send Mail' />
                </div>
            </div>
            <div ref={chatWindowRef} style={{ flex: 1, flexDirection: 'column', display: 'flex', height: '100%', overflow: 'hidden auto', paddingLeft: '15px', paddingRight: '15px' }}>
                {chatData?.map?.((chatMsg, chatMsgIndex) => {
                    return (
                        <div className='d-flex' style={{width: '100%', margin: '5px 5px 5px 5px', flexDirection: isMyMessage(chatMsg) ? 'row-reverse' : 'row'}}>
                            <div key={chatMsgIndex} style={{
                                wordWrap: 'break-word', maxWidth: '80%', width: 'max-content', border: '1px solid', padding: '5px 10px', borderRadius: '20px', ...(isMyMessage(chatMsg) ? {borderBottomRightRadius: '0px'} : {})
                            }}>
                                {chatMsg?.message}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='d-flex align-items-center'>
                <form onSubmit={(e: FormEvent) => {
                    e.preventDefault();
                    submitMsg(msg);
                }} style={{ flex: 1 }}>
                    <div className='form-group'>
                        <input className='form-control' style={{ borderRadius: '40px' }} value={msg} onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} placeholder='Message' />
                    </div>
                </form>
                <div className='cursor-pointer' style={{ borderRadius: '50%', border: '1px solid', width: '4%', padding: '10px', display: 'flex', justifyContent: 'center', marginLeft: '10px', cursor: 'pointer' }} onClick={() => {
                    submitMsg(msg);
                }}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </div>
        </div>
    )
}