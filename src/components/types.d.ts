import React from 'react'
export type ButtonType = 'danger' | 'link' | 'primary' | 'default'
export type ButtonSize = 'large' | 'small' | 'normal'
export type BaseButtonProps = {
  btnType?: ButtonType,
  size?: ButtonSize,
  children?: string | React.ReactNode
}

export type ButtonProps = Partial<BaseButtonProps & React.ButtonHTMLAttributes & React.AnchorHTMLAttributes>