import './Header.css'
import icon from '../images/travel-icon.png'

export default function Header() {
    return (
        <header className="header">
                <span>
                    <img className="header--icon" src={icon} alt="airplane traveling around the world"/>
                </span>
                <p className="header--title">my travel journal</p>
        </header>
    )
}