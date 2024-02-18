import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@mui/material';
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Link, Params, useParams } from 'react-router-dom';

export type ChatType = any;

export default function ChatListing(): ReactElement {
    const [searchValue, setSearchValue] = useState<string>('');
    const [chats, setChats] = useState<ChatType[]>(Array(50).fill({
        chatId: new Date().toString(),
        chatName: "Himanshu",
        photoUrl: "https://img.freepik.com/free-photo/abstract-glowing-flame-drops-electric-illumination-generative-ai_188544-8092.jpg",
        type: 'single',
        contact: 'arora@yahoo.in'
    }));

    return (
        <>
            <div style={{ height: '100%' }}>
                <div className='d-flex align-items-center' style={{ height: '42px' }}>
                    <Avatar className='cursor-pointer'>H</Avatar>
                    <div className='form-group chat-list-search-bar' style={{ margin: '10px 10px', flex: 1 }}>
                        <input className='form-control' type='text' value={searchValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} style={{ borderRadius: '40px' }} placeholder='🔎 Search' />
                    </div>
                </div>
                <div style={{ height: 'calc(100% - 42px)', overflow: 'hidden auto' }}>
                    {chats?.filter?.(chat => chat?.chatName?.toLowerCase?.()?.includes?.(searchValue?.toLowerCase?.()) || chat?.contact?.toLowerCase?.()?.includes?.(searchValue?.toLowerCase?.()))?.map?.((chat: ChatType, chatIndex) => {
                        return (
                            <>
                                <ListItem chat={chat} key={chatIndex + chat?.chatId} />
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

const ListItem = ({ chat }: { chat: ChatType }): ReactElement => {
    const { chatId } = useParams<Params>()
    return (
        <Link to={`/chats/${chat?.chatId}`} className={`chat-list-item ${chatId === chat?.chatId ? 'selected' : ''}`} style={{ textDecoration: 'none' }}>
            <div className={`d-flex align-items-center`}>
                <Avatar variant='circular' src={chat?.photoUrl}>{chat?.chatName?.[0]}</Avatar>
                <div className='ml-10 mt-10'>
                    <h5 style={{ marginBottom: '0px' }}>{chat?.chatName}</h5>
                    <small>{chat?.contact}</small>
                </div>
            </div>
            {chatId === chat?.chatId ? <FontAwesomeIcon className='fade-in-animation' icon={faAngleRight} /> : <div></div>}
        </Link>
    )
}