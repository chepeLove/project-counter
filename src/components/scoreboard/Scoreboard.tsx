import React, {useEffect} from 'react';
import {Input} from "../input/Input";
import {FlexWrapper} from "../FlexWrapper";
import {Button} from "../button/Button";
import {Name} from "../name/Name";
import {Styles} from "./Scoreboard_Styles";

type ScoreboardType = {
    value: number
    maxValue: number
    minValue: number
    setting: boolean
    setSetting: (setting: boolean) => void
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    setValue: (value: number) => void
}
export const Scoreboard: React.FC<ScoreboardType> = ({
                                                         maxValue,
                                                         minValue,
                                                         setMaxValue,
                                                         setMinValue,
                                                         setValue,
                                                         setting,
                                                         setSetting,
                                                     }) => {

    useEffect(() => {

        let maxValueAsString = localStorage.getItem('maxValue')
        let minValueAsString = localStorage.getItem('minValue')

        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }

        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            setMinValue(newMinValue)
        }

    }, [])

    const setToLocalStorageHandler = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
        setValue(minValue)
        setSetting(false)
    }
    return (
        <Styles.Scoreboard>
            <Name name={'Scoreboard'}/>
            <FlexWrapper gap='10px'>
                <Styles.Value>
                    max value:
                </Styles.Value>
                <Input
                    setting={setting}
                    setSetting={setSetting}
                    value={maxValue}
                    inputOnChange={setMaxValue}
                />
            </FlexWrapper>
            <FlexWrapper gap='10px'>
                <Styles.Value>
                    start value:
                </Styles.Value>
                <Input
                    setting={setting}
                    setSetting={setSetting}
                    value={minValue}
                    inputOnChange={setMinValue}
                />
            </FlexWrapper>
            <Button name={'set'}
                    disabled={maxValue<0 || minValue<0}
                    callBack={setToLocalStorageHandler}/>
        </Styles.Scoreboard>
    );
};
