import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #f5d0fe;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EditableTextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
`

export const ContentHeading = styled.h1`
    color: #323f4b;
    font-family: "Roboto"
    font-size: 25px;
    font-weight: bold;    
`

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const InputElement = styled.input`
  color: #cbd2d9;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #cbd2d9;
  border-radius: 4px;
  background-color: transparent;
  padding: 5px 10px 5px 10px;
  flex-grow: 1;
`

export const ParagraphElement = styled.p`
  color: #cbd2d9;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  flex-grow: 1;
`

export const ButtonElement = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  background-color: #d946ef;
  padding: 5px 10px 5px 10px;
  margin-left: 20px;
`
