import React, {ChangeEvent} from 'react';
import {Styles} from "./Input_Styles";

type InputType = {
    setting: boolean
    setSetting: (setting: boolean) => void
    value: number
    inputOnChange: (value: number) => void
}

export const Input: React.FC<InputType> = ({
                                               value,
                                               setSetting,
                                               inputOnChange,
                                           }) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSetting(true)
        inputOnChange(Math.trunc(event.currentTarget.valueAsNumber))
    }
    return (
        <Styles.Input type='number' onChange={onChangeHandler} value={value}/>
    );
};