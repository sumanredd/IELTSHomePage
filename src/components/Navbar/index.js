import './index.css'

const NavBar =()=>{
    return(
        <nav>
           <h1 className="Logo">Navbar</h1>
           <div style={{marginBottom:"8px" ,display:"flex",alignItems:"center"}}>
           <ul className="NavUl">
                <li className="li">Home</li>
                <li className="li">Courses</li>
                <li className="li">Mock Tests</li>
                <li className="li">Contact</li>
                <li className="li">About Us</li>
           </ul>
           <button className="loginBtn">Log in</button>
           </div>
        </nav>
    )
}
export default NavBar