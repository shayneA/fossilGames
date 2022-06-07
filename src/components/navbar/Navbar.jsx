import { HashLink as Link } from "react-router-hash-link"
import "./navbar.css"


const Navbar = () => {
  
  return (

  <nav className="menu-wrap">
    <input type="checkbox" className="toggler"/>
    <div className="hamburger"><div></div></div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li><Link to="#top">Video</Link></li>
            <li><Link to="#NewsFeed">News Feed</Link></li>
            <li><Link to="#NewReleases">New Releases</Link></li>
            <li><Link to="#Explore">Explore</Link></li>
            <li><Link to="#Content">Content</Link></li>
            <li><Link to="#Footer">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Navbar 