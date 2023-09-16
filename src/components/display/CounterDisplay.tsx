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

    return (
        <Styles.CounterDisplay>
            <Styles.DisplayValue isMaxValue={value === maxValue} error={ maxValue<0 || minValue<0}>
                {((maxValue < 0 || minValue < 0) && 'Incorrect value') ||
                    (setting && 'enter values and press "set"' || value)}
            </Styles.DisplayValue>
        </Styles.CounterDisplay>
    );
};
