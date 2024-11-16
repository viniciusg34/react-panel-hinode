import { Link } from "react-router-dom";
import '../../assets/styles/header/header.css'
import apple from "../../assets/images/apple.png"


const Header = () => {

    return (
        <header>
            <div className="logo">
                <div>
                    <h1>MARCELO</h1>
                </div>
                <div className="apple">
                    <img src={apple} />
                </div>
                <div>
                    <h1>IPHONES</h1>
                </div>
            </div>
        </header>
    )


}

export default Header