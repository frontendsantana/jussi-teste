import './styles.scss'
import jussi from '../../images/image-jussi.png'

function Quemsomos() {
  return (
    <div className="quemsomos">
      <div className="conteudo-quemsomos">
        <h1>Olá, somos a Jüssi</h1>
        <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
        <a href="/">Conheça a Jüssi</a>
      </div>
      <div className="foto-quemsomos">
        <img src={jussi} alt="Jussi" />
      </div>  
    </div>
  );
}

export default Quemsomos;