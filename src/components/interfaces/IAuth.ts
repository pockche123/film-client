import React from "react"


export interface ILogin {
    username: string 
    password: string
}


export type UsernameInputProps = {
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setUsernameTaken: React.Dispatch<React.SetStateAction<boolean>>
  setInvalidUserLength: React.Dispatch<React.SetStateAction<boolean>>
  username: string
  usernameTaken: boolean
}

export type EmailInputProps = {
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setEmailInvalid: React.Dispatch<React.SetStateAction<boolean>>
    email: string
    emailInvalid: boolean
}

export type PasswordInputProps = {
    showPassword: boolean
    password: string
    validPassword: boolean
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setInvalidPasswordLength: React.Dispatch<React.SetStateAction<boolean>>
    setNoCapitalLetter: React.Dispatch<React.SetStateAction<boolean>>
    setNoSpecialCharacter: React.Dispatch<React.SetStateAction<boolean>>
    setValidPassword: React.Dispatch<React.SetStateAction<boolean>>
    setShowPassword:  React.Dispatch<React.SetStateAction<boolean>>
}

export type RePasswordInputProps = {
    showRePassword: boolean
    rePassword: string
    password: string 
    setPasswordSame: React.Dispatch<React.SetStateAction<boolean>>
    setRePassword: React.Dispatch<React.SetStateAction<string>>
    validPassword: boolean
    passwordSame: boolean
    setShowRePassword: React.Dispatch<React.SetStateAction<boolean>>

}


export type InvalidCasesProps = {
  registerSuccess: boolean
  usernameTaken: boolean
  username: string
  invalidUserLength: boolean
  password: string
  emailInvalid: boolean
  email: string
  noCapitalLetter: boolean
  noSpecialCharacter: boolean
  invalidPasswordLength: boolean
  passwordSame: boolean
  rePassword: string
}
