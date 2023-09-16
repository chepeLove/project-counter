import styled from "styled-components";

const Scoreboard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgb(194, 213, 162);
  justify-content: center;
  align-items: center;
  border-radius: 10px;;
  padding: 20px;
`
const Value = styled.span`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  color: rgba(75, 52, 52, 0.77);
`

export const Styles = {
    Scoreboard,
    Value
}