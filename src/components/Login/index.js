import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      navigate('/')
    }
  }, [navigate])

  const onChangeUsername = event => {
    setUsername(event.target.value)
  }

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  const onSubmitSuccess = jwtToken => {
    setIsLoading(false)
    Cookies.set('jwt_token', jwtToken, { expires: 30 })
    navigate('/')
  }

  const onSubmitFailure = errorMsg => {
    setIsLoading(false)
    setShowSubmitError(true)
    setErrorMsg(errorMsg)
  }

  const submitForm = async event => {
    event.preventDefault()
    setIsLoading(true)
    const userDetails = { username, password }
    const url = 'https://registerloginbackend.onrender.com/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      if (response.ok) {
        onSubmitSuccess(data.jwt_token)
      } else {
        onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  const renderPasswordField = () => (
    <>
      <label className="input-label" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input-field"
        value={password}
        onChange={onChangePassword}
        placeholder="Password"
      />
    </>
  )

  const renderUsernameField = () => (
    <>
      <label className="input-label" htmlFor="username">
        USERNAME
      </label>
      <input
        type="text"
        id="username"
        className="username-input-field"
        value={username}
        onChange={onChangeUsername}
        placeholder="Username"
      />
    </>
  )

  return (
    <div className="login-form-container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/424/465/original/vector-stethoscope-icon.jpg"
        className="login-img"
        alt="website login"
      />
      <form className="form-container" onSubmit={submitForm}>
        <img
          src="https://i.pinimg.com/originals/ca/54/fe/ca54fe9edd52395d00e03b3c913584a1.jpg"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <div className="input-container">{renderUsernameField()}</div>
        <div className="input-container">{renderPasswordField()}</div>
        <button type="submit" className="login-button" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        {showSubmitError && (
          <>
            <p className="error-message">*{errorMsg}</p>
            <p className="error-message">Register to login</p>
            <button
              type="button"
              className="register-button"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </>
        )}
      </form>
    </div>
  )
}

export default Login
