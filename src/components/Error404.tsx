import React, { ReactElement } from 'react';
import { useRouteError } from 'react-router-dom';

export default function Error404 ():ReactElement {
    const error = useRouteError();
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}} id='main'>
                <h1>Oops! An Error Occured</h1>
                <h4>{(error as any)?.status}</h4>
                <h4>{(error as any)?.statusText}</h4>
                <h4>{(error as any)?.message}</h4>
            </div>
        </>
    )
}