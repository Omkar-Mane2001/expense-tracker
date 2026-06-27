import "./NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faHouse, faList, faPlus} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
    return(
        <nav>
            <h2>
                <FontAwesomeIcon icon={faWallet}/>
                ExpenseTracker
            </h2>
            <div>
                <Link to="/">
                    <FontAwesomeIcon icon={faHouse}/>
                        Dashboard
                 </Link>
                <Link to="/transaction-page">
                    <FontAwesomeIcon icon={faList}/>
                        Transactions
                </Link>
                <Link to="/add-expense">
                    <FontAwesomeIcon icon={faPlus}/>
                        Add Expense
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;