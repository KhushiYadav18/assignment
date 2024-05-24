import image from "./images.png";
export default function Navbar() {
    return <nav className="nav">
        <img src={image}  alt="" className="img"/>
        
        <a href="/" className="title">SARC-IITB</a>
        <ul>
         <CustomLink href="/about">About</CustomLink>
         <CustomLink href="/portfolio">Portfolio</CustomLink>
         <CustomLink href="/contact">Contact</CustomLink>
         
        </ul>
        
    </nav>
}

  
function CustomLink ({ href,children, ...props}) {
    const path=window.location.pathname;
    return (
        <li className={path ===href?"active" :""}>
            <a href={href} {...props}>{children} </a>
        </li>
    )
}