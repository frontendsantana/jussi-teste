import './styles.scss'
import wpp from '../../images/wppcompany.png'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'

function Footer() {
  return(
    <div className="footer">
      <div className="footer-marcas">
        <div>
          <img src={wpp} alt="Wpp Company" />
        </div>
        <div className="social-networks">
          <img src={facebook} alt="Cart" />
          <img src={instagram} alt="Cart" />
          <img src={linkedin} alt="Cart" />
        </div>
      </div>
    </div>
  );
}

export default Footer;