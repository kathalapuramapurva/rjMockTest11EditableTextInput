import {Component} from 'react'
import {
  AppContainer,
  EditableTextInputContainer,
  ContentHeading,
  ToggleContainer,
  ParagraphElement,
  InputElement,
  ButtonElement,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {
    saved: false,
    inputText: '',
  }

  changeInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onSaveText = () => {
    this.setState({saved: true})
  }

  onEditText = () => {
    this.setState({saved: false})
  }

  render() {
    const {saved, inputText} = this.state
    return (
      <AppContainer>
        <EditableTextInputContainer>
          <ContentHeading>Editable Text Input</ContentHeading>
          <ToggleContainer>
            {saved ? (
              <>
                <ParagraphElement>{inputText}</ParagraphElement>
                <ButtonElement type="button" onClick={this.onEditText}>
                  Edit
                </ButtonElement>
              </>
            ) : (
              <>
                <InputElement
                  type="text"
                  value={inputText}
                  onChange={this.changeInputText}
                />
                <ButtonElement type="button" onClick={this.onSaveText}>
                  Save
                </ButtonElement>
              </>
            )}
          </ToggleContainer>
        </EditableTextInputContainer>
      </AppContainer>
    )
  }
}

export default EditableTextInput
