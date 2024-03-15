import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BgContainer,
  LoginContainer,
  LogoImage,
  FormContainer,
  Label,
  InputBox,
  CheckBoxContainer,
  CheckBox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
    errorMsg: '',
    type: 'password',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrMsg: true, errorMsg})
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
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickShowPwd = () => {
    const {type} = this.state
    if (type === 'password') {
      this.setState({type: 'input'})
    } else if (type === 'input') {
      this.setState({type: 'password'})
    }
  }

  render() {
    const {username, password, showErrMsg, errorMsg, type} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <BgContainer>
        <LoginContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.onSubmitForm}>
            <Label htmlFor="username">USERNAME</Label>
            <InputBox
              type="text"
              onChange={this.onChangeUsername}
              value={username}
              placeholder="Username"
              id="username"
            />
            <Label htmlFor="password">PASSWORD</Label>
            <InputBox
              type={type}
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
              id="password"
            />
            <CheckBoxContainer>
              <CheckBox
                type="checkbox"
                id="checkBox"
                onClick={this.onClickShowPwd}
              />
              <Label htmlFor="checkBox">Show Password</Label>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginContainer>
      </BgContainer>
    )
  }
}
export default Login
