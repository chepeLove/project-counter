import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Scoreboard} from "./components/scoreboard/Scoreboard";
import {FlexWrapper} from "./components/FlexWrapper";

function App() {

    const [minValue,setMinValue] = useState<number>(0)
    const [maxValue,setMaxValue] = useState<number>(0)
    const [value, setValue] = useState<number>(minValue)
    const [setting,setSetting] = useState<boolean>(true)

    return (

        <FlexWrapper gap ='50px'>
            <Scoreboard maxValue={maxValue}
                        setMaxValue={setMaxValue}
                        minValue={minValue}
                        setMinValue={setMinValue}
                        value={value}
                        setValue={setValue}
                        setting={setting}
                        setSetting={setSetting}

            />
            <Counter value={value}
                     setValue={setValue}
                     maxValue={maxValue}
                     minValue={minValue}
                     setting={setting}
            />
        </FlexWrapper>
    );
}

export default App;

