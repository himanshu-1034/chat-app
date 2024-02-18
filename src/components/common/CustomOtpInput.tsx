import React, { ChangeEvent, KeyboardEvent, ReactElement, createRef, useEffect, useRef, useState } from 'react'

type CustomotppropType = {
    numberOfDigits: number,
    otp: string | number,
    handleOtpChange: (otp: string) => void,
    label?: string
}

export default function CustomOtpInput({ handleOtpChange, numberOfDigits, otp, label }: CustomotppropType): ReactElement {
    const otpref = useRef<any>([]);
    const [inputVal, setInputVal] = useState(Array(numberOfDigits).fill(''));

    useEffect(() => {
        // setTimeout(() => {
        if (otpref?.current?.[0]) otpref?.current?.[0]?.focus?.();
        // }, 500);
    }, [])

    const applyCodeToInput = (code: string) => {
        let codeArr = code?.split?.('');
        let vals = [...inputVal];
        vals.forEach((v, index) => {
            vals[index] = codeArr[index]?? "";
        })
        setInputVal(vals);
        let indexToFocus = vals?.findIndex(v => !v);
        if(indexToFocus >= numberOfDigits || indexToFocus === -1) otpref.current[numberOfDigits - 1]?.focus?.();
        else if (otpref.current[indexToFocus]) otpref.current[indexToFocus]?.focus?.();
    }

    return (
        <div className='form-group' style={{ width: '100%' }}>
            {label && <label className='form-label'>{label}</label>}
            <div className='d-flex align-items-center justify-content-between'>
                {(new Array(numberOfDigits).fill(0)).map((_, index) => (
                    <input
                        key={`${index}`}
                        className='form-control'
                        type='text'
                        maxLength={index === 0 ? numberOfDigits : 1}
                        ref={(ref) => { otpref.current[index] = ref }}
                        style={{ maxWidth: '50px', marginLeft: index === 0 ? '0px' : '5px', marginRight: index === numberOfDigits - 1 ? '0px' : '5px' }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            let val = e.target.value || "";
                            if (val) {
                                if(val?.length > 1) {
                                    applyCodeToInput(val);
                                } else {
                                    let vals = [...inputVal];
                                    vals[index] = val;
                                    setInputVal(vals);
                                    handleOtpChange(vals?.join(''));
                                }
                                otpref.current[index + 1] && otpref.current[index + 1]?.focus?.();
                            }
                        }}
                        value={inputVal[index]}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                            let keypressed = e.key?.toLowerCase?.();
                            if (keypressed === 'backspace') {
                                let vals = [...inputVal];
                                vals[index] = '';
                                setInputVal(vals);
                                handleOtpChange(vals.join(''));
                                if (otpref.current[index - 1]) {
                                    otpref.current[index - 1].focus();
                                }
                            }
                        }}
                    />
                ))}
            </div>
        </div>
    )
}