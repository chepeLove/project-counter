import React from 'react';
import {Styles} from './CounterDisplay_Styles'

type DisplayType = {
    value: number
    maxValue: number
    minValue: number
    setting: boolean
}
export const CounterDisplay: React.FC<DisplayType> = ({
                                                          value,
                                                          setting,
                                                          maxValue,
                                                          minValue,
                                                      }) => {
    const renderDisplayValue = () => {
        if(maxValue < 0 || minValue < 0 || minValue>maxValue) {
            return 'Incorrect value'
        }
        if(setting) {
            return 'enter values and press "set"'
        }

        return value;
    }

    return (
        <Styles.CounterDisplay>
            <Styles.DisplayValue isMaxValue={value === maxValue && maxValue !== minValue} error={ maxValue<0 || minValue<0 || minValue>maxValue}>
                {renderDisplayValue()}
            </Styles.DisplayValue>
        </Styles.CounterDisplay>
    );
};
