declare module 'input-otp' {
  import * as React from 'react'

  export interface OTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    onChange: (value: string) => void
    numInputs: number
    renderSeparator?: React.ReactNode
    renderInput?: (props: React.InputHTMLAttributes<HTMLInputElement>) => React.ReactNode
    shouldAutoFocus?: boolean
    placeholder?: string
    inputType?: 'text' | 'number' | 'password' | 'tel'
    [key: string]: any  // Allow any additional props
  }

  export const OTPInput: React.ForwardRefExoticComponent<OTPInputProps & React.RefAttributes<HTMLDivElement>>

  export const OTPInputContext: React.Context<{
    numInputs: number
    activeInput: number
    setActiveInput: (index: number) => void
    otp: string
    setOtp: (otp: string) => void
    slots: Array<{
      char: string
      hasFakeCaret: boolean
      isActive: boolean
    }>
  }>
}