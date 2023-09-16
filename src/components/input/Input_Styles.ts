import styled from "styled-components";

type InputType = {
    value:number
}

const Input = styled.input<InputType>`
  padding: 0;
  border: none;
  outline: none;
  background-color: rgba(75, 52, 52, 0.77);
  color:${props => props.value >= 0 ? 'rgb(194, 213, 162)': "rgba(248,108,124,0.76)"} ;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
`
export const Styles = {
    Input
}