import React from 'react';
import {Styles} from './Button_Styles'

type ButtonType = {
    callBack?:() => void
    name:string
    disabled?:boolean
}
export const Button:React.FC<ButtonType> = ({callBack,name,disabled}) => {

    return (
            <Styles.Button onClick={callBack} disabled={disabled}><Styles.Name>{name}</Styles.Name></Styles.Button>
    );
};
