import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BgDiv,
  CardDiv,
  WebLogo,
  Label,
  Input,
  LabelInput,
  LabelInputCheckbox,
  CheckboxInput,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    showError: false,
    errMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <LabelInput>
        <Label htmlFor="label-username">USERNAME</Label>
        <Input
          id="label-username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </LabelInput>
    )
  }

  renderPassword = () => {
    const {password, isChecked} = this.state
    return (
      <LabelInput>
        <Label htmlFor="label-password">PASSWORD</Label>
        <Input
          id="label-password"
          type={isChecked ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
        />
      </LabelInput>
    )
  }

  renderCheckbox = () => {
    const {isChecked} = this.state
    return (
      <LabelInputCheckbox>
        <CheckboxInput
          type="checkbox"
          value={isChecked}
          onChange={this.onChangeCheckbox}
          id="label-checkbox"
        />
        <Label htmlFor="label-checkbox">Show Password</Label>
      </LabelInputCheckbox>
    )
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onFailure = errMsg => {
    this.setState({showError: true, errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {showError, errMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgDiv>
        <CardDiv onSubmit={this.onSubmitForm}>
          <WebLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUsername()}
          {this.renderPassword()}
          {this.renderCheckbox()}
          <LoginButton type="submit">Login</LoginButton>
          {showError && <ErrorMessage>*{errMsg}</ErrorMessage>}
        </CardDiv>
      </BgDiv>
    )
  }
}

export default Login
