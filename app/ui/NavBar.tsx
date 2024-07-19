import NavButton from './NavButton'

type NavBarProps = {
  buttonsText: string[]
}

const NavBar = ({ buttonsText }: NavBarProps) => {
  return buttonsText.map((buttonText, index) => (
    <NavButton key={buttonText} text={buttonText} index={index} />
  ))
}

export default NavBar
