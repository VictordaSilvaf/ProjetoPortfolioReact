import { Link } from "react-router-dom"
import styles from './Navbar.module.css'
import { AiFillBook, AiFillHome, AiFillRocket, AiOutlineUser } from "react-icons/ai";


function Navbar() {
    return (
        <nav className={styles.menuLayout}>
          <ul className={styles.menuLista}>
            <li>
              <Link to="/"><AiFillHome /> Home</Link>
            </li>
            <li>
              <Link to="/projetos"><AiFillBook />Projetos</Link>
            </li>
            <li>
              <Link to="/novidades"><AiFillRocket />Novidades</Link>
            </li>
            <li>
              <Link to="/sobreMim"><AiOutlineUser />Sobre Mim</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar