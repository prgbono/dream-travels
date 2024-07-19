import { NAVBAR_BUTTONS_TEXT } from '../utils/constants'

type NavButtonProps = {
  text: string
  index: number
}

function getClassName(index: number) {
  let baseClasses = 'p-4 text-gray-800 focus:outline-none'

  if (index === 0) {
    return `${baseClasses} rounded-l-full border-l-2 border-t-2 border-b-2`
  } else if (index === NAVBAR_BUTTONS_TEXT.length - 1) {
    return `${baseClasses} rounded-r-full border-r-2 border-t-2 border-b-2`
  } else if (index > 0 && index < NAVBAR_BUTTONS_TEXT.length - 1) {
    return `${baseClasses} border-2`
  }
}
const NavButton = ({ text, index }: NavButtonProps) => {
  return (
    <button key={index} className={getClassName(index)}>
      {text}
    </button>
  )
}

export default NavButton
