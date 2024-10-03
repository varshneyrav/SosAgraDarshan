import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <input type="checkbox" id="nav-toggle"/>
                <div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4aVxtbWmGoi4u31ssr8hf14pJtgtqD4QyJw&usqp=CAU" alt="logo" height="95" width="112" />
                    AGRA<strong>दर्शन </strong></div>
                <ul className="links">
                    <li><a href="index.html">HOME</a></li>
                    <li><a href="nearby.html">NEARBY ATTRACTION</a></li>
                    <li><a href="#work">TRANSPORT SERVICES</a>
                        <ul className="dropdown">add-apt-repository ppa:git-core/ppa # apt update; apt install git
                            <li><a href="https://www.makemytrip.com/hotels/hotel_amar-details-agra.html">Amar Hotel</a></li>
                            <li><a href="https://www.booking.com/hotel/in/jaypee-palace.en-gb.html?aid=356980&label=gog235jc-1DCAsobEINamF5cGVlLXBhbGFjZUgzWANobIgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCw4iMqwbAAgHSAiQ5MmYwM2U1Yy1iNzVjLTQxNDAtYmZjZi1lMTc0ZWQwOTk0N2PYAgTgAgE&sid=c19ffacab7860f18f11c8db1961e5ebe&dist=0&keep_landing=1&sb_price_type=total&type=total&">Jp Hotel</a></li>
                            <li><a href="https://hotelthetajvilas.com/">Taj Vilas</a></li>
                        </ul>
                    </li>
                    <li><a href="#work">FOOD SERVICES</a></li>
                    <li><a href="sevicss.pdf">OTHER SERVICES</a></li>
                    <li><a href="contact.html">CONTACT US</a></li>
                </ul>
                <label for="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
        </nav>
    )
}

export default Navbar
