import styled from "styled-components";

type DisplayValueType = {
    isMaxValue:boolean
    error:boolean
}

const CounterDisplay = styled.div`
  background-color: rgba(75, 52, 52, 0.77);
  border-radius: 10px;
  padding: 16px;
  min-width: 248px;
  margin: 20px 0;
  width: 100%;
`

const DisplayValue = styled.div<DisplayValueType>`
  color: ${props => (props.isMaxValue || props.error) ? "rgba(248,108,124,0.76)":"rgb(194, 213, 162)" };
  font-weight: bold;
  font-size: 18px;
  white-space: nowrap;
  text-align: center;
`


export const Styles = {
    CounterDisplay,
    DisplayValue
}

