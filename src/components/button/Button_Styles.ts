import styled from "styled-components";

type ButtonType = {
    disabled?:boolean
}

const Button = styled.button<ButtonType>`
  border-radius: 20px;
  font-weight: 700;
  min-width: 70px;
  padding: 10px;
  margin: 10px;
  background-color:${(props)=>props.disabled ? 'rgba(75, 52, 52, 0.3)': 'rgba(75, 52, 52, 0.77)'};
`
const Name = styled.span`
  color: rgb(194, 213, 162);
  font-size: 16px;
  font-weight: 700;
`

export const Styles = {
    Button,
    Name
}