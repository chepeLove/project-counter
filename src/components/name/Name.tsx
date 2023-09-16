import React from 'react';
import {Styles} from './Name_Styles'

type  NameType = {
    name:string
}
export const Name:React.FC<NameType> = ({name}) => {
    return (
        <Styles.Name>{name}</Styles.Name>
    );
};