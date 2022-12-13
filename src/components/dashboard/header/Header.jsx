import './Header.scss'
import Logo from '../../../images/logo_black.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo_container'>
            <img src={Logo} alt='Logo' className='logo'/>
        </div>
        <div className='links'>
            <a href="*" className="link">Home</a>
            <a href="*" className="link">About Us</a>
            <a href="*" className="link">FAQs</a>
        </div>
    </div>
  )
}
export default Header
