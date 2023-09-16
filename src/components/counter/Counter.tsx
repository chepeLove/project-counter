import React, {useEffect} from 'react';
import {CounterDisplay} from "../display/CounterDisplay";
import {Button} from "../button/Button";
import {Styles} from './Counter_Styles'
import {FlexWrapper} from "../FlexWrapper";
import {Name} from "../name/Name";

type CounterType = {
    value: number
    setting:boolean
    setValue: (value: number) => void
    maxValue: number
    minValue: number
}
export const Counter: React.FC<CounterType> = ({
                                                   value,
                                                   setting,
                                                   setValue,
                                                   maxValue,
                                                   minValue
                                               }) => {

    useEffect(() => {
        let valueAsString = localStorage.getItem('value')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(value))
    }, [value])

    const incrementCallBack = () => {
        value < maxValue && setValue(value + 1)
    }
    const resetCallBack = () => {
        setValue(minValue)
    }

    return (
        <Styles.Counter>
            <Name name={'Counter'}/>
            <CounterDisplay value={value} maxValue={maxValue} setting = {setting} minValue ={minValue}/>
            <FlexWrapper justify={'center'} align={'center'} gap={'20px'}>
                <Button name={'inc'}
                        callBack={incrementCallBack}
                        disabled={setting || value === maxValue}/>
                <Button name={'reset'}
                        callBack={resetCallBack}
                        disabled={ setting || value === minValue}/>
            </FlexWrapper>
        </Styles.Counter>
    );
};
