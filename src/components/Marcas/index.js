import './styles.scss'
import brastemp from '../../images/logo-brastemp.png'
import compra from '../../images/logo-compra-certa.png'
import consul from '../../images/logo-consul.png'
import thebar from '../../images/logo-thebar.png'
import arrow from '../../images/arrow.png'

function Marcas() {
  return(
    <div className="partners">
      <div className="partner-bar">
        <p>Nossas principais lojas VTEX</p>
        <img src={arrow} alt="Arrow" />
        <img src={brastemp} alt="Brastemp" />
        <img src={compra} alt="Compra" />
        <img src={consul} alt="Consul" />
        <img src={thebar} alt="Thebar" />
      </div>
    </div>
  );
}

export default Marcas;