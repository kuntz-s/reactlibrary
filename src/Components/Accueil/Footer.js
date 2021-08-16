import React from "react"
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import {GoLocation} from "react-icons/go"

function Footer() {
    return (
        <footer>
            <div className="reseau-social">
                <p>Suivez nous sur</p>
                <ul>
                    <li><FaInstagram /> Instagram</li>
                    <li><FaFacebookSquare /> Facebbok</li>
                    <li><FaTwitter /> Twiiter</li>
                </ul>
            </div>
            <div className="contact">
                <p>Contactez nous</p>
                <ul>
                    <li>XXX-XXX-XXX</li>
                    <li>XXX-XXX-XXX</li>
                    <li>XXX-XXX-XXX</li>
                </ul>
            </div>
            <div className="localisation">
                <p><GoLocation/>Carrefour Kennedy, PO BOX 375</p>
            </div>

        </footer>
    )
}


export default Footer