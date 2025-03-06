import { ReactNode } from 'react'
import './button.scss'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'white'
  size?: 'large' | 'medium' | 'small'
  className?: string
}

const Button = (props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'large',
    className = ''
  } = props

  let variantClassNames: string = ''
  let sizeClassNames: string = ''

  switch (variant) {
    case 'primary':
      variantClassNames = 'btn btn--primary'
      break
    case 'white':
      variantClassNames = 'btn btn--white'
      break
  }

  switch (size) {
    case 'large':
      sizeClassNames = 'btn btn--lg'
      break
    case 'medium':
      variantClassNames = 'btn btn--md'
      break

    case 'small':
      variantClassNames = 'btn btn--sm'
      break
  }

  return (
    <button className={`${variantClassNames} ${sizeClassNames} ${className}`}>
      {children}
    </button>
  )
}

export default Button
