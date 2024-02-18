import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { CSSProperties, ChangeEvent, KeyboardEvent, ReactElement, useState } from 'react';
// WIP
type SearchBarPropType = {
    value: string,
    handleValueChange: (newValue: string) => void,
    className?: string,
    style?: CSSProperties
}

export default function SearchBar ({handleValueChange,value,className,style}: SearchBarPropType):ReactElement {
    const [isSearchActive, setIsSearchActive] = useState<boolean>(true);
    return (
        <>
            <div className={`d-flex align-items-center form-group ${isSearchActive ? 'search-input-active' : ''}`} style={{width: '100%'}}>
                <FontAwesomeIcon icon={faSearch} className='search-bar-icon cursor-pointer' onClick={(e) => {setIsSearchActive(true)}} />
                <input className='form-control search-bar-input' type='text' value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => handleValueChange(e.target.value)} onKeyDown={(e: KeyboardEvent) => {
                    let key = e.key?.toLowerCase?.();
                    console.log(key);
                }} />
            </div>
        </>
    )
}