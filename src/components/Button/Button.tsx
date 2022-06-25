import { memo, useMemo } from 'react'
import classnames from 'classnames'
import type { ButtonProps } from '../types'
import '../../styles/button.scss'

const Button: React.FC<ButtonProps> = (props) => {

  const { btnType, size, disabled,...restProps} = props

  const computedClassName = useMemo(() => {
    return classnames('btn', {
      [`btn-${btnType}`]: btnType,
      [`btn-${size}`]: size
    })
  }, [btnType, size])

  return <>
    {
      btnType === 'link' ?
      <a className={computedClassName} {...restProps}></a>:
      <button className={computedClassName} {...restProps}></button>
    }
  </>
}

Button.defaultProps = {
  size: 'normal',
  btnType: 'default'
}

export type { ButtonSize, ButtonType } from '../types'
export default memo(Button)
