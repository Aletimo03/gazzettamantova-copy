import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTimes } from 'react-icons/fa'; // Import social icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-edicola">
                    <h3>In Edicola</h3>
                    <img src="../../assets/images/placeholder-book.png" alt="Universo funghi" />
                    <p>Universo funghi</p>
                    <a href="#">Scopri</a>
                </div>
                <div className="footer-quotidiano">
                    <h3>Il quotidiano</h3>
                    <img src="../../assets/images/placeholder-newspaper.png" alt="Gazzetta di Mantova" />
                    <a href="#" className="button">Abbonati</a>
                    <a href="#">Già abbonato? Accedi</a>
                </div>
            </div>
            <div className="footer-middle">
                <hr />
                <div className="footer-links">
                    <a href="#">Pubblicità</a>
                    <a href="#">Privacy</a>
                    <a href="#">Cookie</a>
                    <a href="#">Consensi</a>
                    <a href="#">Contatti</a>
                    <a href="#">Chi siamo</a>
                </div>
                <div className="footer-social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaTimes /></a> {/* Using FaTimes for the 'X' icon */}
                </div>
                <div className="footer-secondary-links">
                    <a href="#">Necrologie</a>
                    <a href="#" className="button">Abbonati</a>
                </div>
            </div>
            <div className="footer-bottom">
                <h4>IL GRUPPO</h4>
                <div className="group-logos">
                    <img src="../../assets/images/logo-athesis.png" alt="Athesis" />
                    <img src="../../assets/images/logo-larena.png" alt="L'Arena" />
                    <img src="../../assets/images/logo-giornale-vicenza.png" alt="Il Giornale di Vicenza" />
                    <img src="../../assets/images/logo-bresciaoggi.png" alt="Bresciaoggi" />
                    <img src="../../assets/images/logo-gazzetta-mantova.png" alt="Gazzetta di Mantova" />
                    <img src="../../assets/images/logo-publiadige.png" alt="Publiadige" />
                    <img src="../../assets/images/logo-radio-verona.png" alt="Radio Verona" />
                    <img src="../../assets/images/logo-telearena.png" alt="Telearena" />
                    <img src="../../assets/images/logo-telenuovo.png" alt="Telenuovo" />
                    <img src="../../assets/images/logo-neri-pozza.png" alt="Neri Pozza" />
                    <img src="../../assets/images/logo-its.png" alt="ITS" />
                    <img src="../../assets/images/logo-zeep.png" alt="ZEEP!" />
                </div>
                <p>Gazzetta di Mantova S.r.l. - Corso Porta Nuova, 67 - I-46100 Mantova (MN) - REA MN-461759 - Cap. soc. iv. 5.000.000,00 Euro - P.IVA e C.F. 04990130231</p>
                <p className="copyright">Copyright © 2025 - Tutti i diritti riservati</p>
                <span className="footer-number">118</span>
            </div>
        </footer>
    );
};

export default Footer;