import Header from './components/Header'
import Navigation from './components/Navigation'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const post = {
    titulo: 'Uma Breve História Sobre Minha Vida',
    autor: 'Tales Rodrigues Leite',
    data: '31 de Julho de 2026',
    dataTime: '2026-07-31',
    conteudo: [
      `Atualmente vivo uma rotina intensa, dividindo meu tempo entre três grandes
      desafios. Sou professor, onde tenho a oportunidade de ensinar programação,
      matemática e tecnologia, ajudando alunos a descobrirem novas possibilidades
      para o futuro. Ao mesmo tempo, atuo como estagiário na área de análise de
      dados, aprendendo diariamente sobre Business Intelligence, bancos de dados,
      SQL, Power BI e inteligência de mercado. Além disso, continuo minha jornada
      como estudante, sempre buscando novos conhecimentos em Engenharia de Software,
      programação e ciência de dados para evoluir profissionalmente.`,

      `Essa fase representa um verdadeiro recomeço na minha vida. Depois de dedicar
      cerca de 15 anos da minha carreira a outra profissão, tomei uma das decisões
      mais difíceis que já enfrentei: abrir mão da estabilidade para perseguir o
      sonho de trabalhar com dados e tecnologia. Foi uma escolha que exigiu coragem,
      estudo e muita dedicação, mas que me trouxe a certeza de estar construindo uma
      carreira alinhada com aquilo que realmente me motiva. Este blog nasceu para
      compartilhar essa caminhada, os desafios, os aprendizados e mostrar que nunca
      é tarde para mudar de direção quando existe um propósito.`
    ],
    imagem: '/assets/images/imagem.png',
    imagemAlt: 'Cartoon representando Tales Leite',
    legenda:
      'Minha jornada de transição para a área de dados começou com muito estudo e dedicação.'
  }

  const linksNavegacao = [
    { nome: 'Home', url: '#' },
    { nome: 'Minha História', url: '#' },
    { nome: 'Contato', url: '#' }
  ]

  const postsRelacionados = [
    'Como comecei a estudar programação',
    'Minha rotina como professor',
    'Minha transição para a área de dados',
    'Primeiros projetos em Power BI'
  ]

  return (
    <div className="page">
      <Header
        titulo="Tales Rodrigues Leite"
        subtitulo="// Blog de um lunático"
      >
        <Navigation links={linksNavegacao} />
      </Header>

      <main className="content">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          dataTime={post.dataTime}
          conteudo={post.conteudo}
          imagem={post.imagem}
          imagemAlt={post.imagemAlt}
          legenda={post.legenda}
        />
      </main>

      <Sidebar posts={postsRelacionados} />

      <Footer
        ano="2026"
        nome="Tales Rodrigues Leite"
      />
    </div>
  )
}

export default App