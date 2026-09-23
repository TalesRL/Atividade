function Article({
  titulo,
  autor,
  data,
  dataTime,
  conteudo,
  imagem,
  imagemAlt,
  legenda
}) {
  return (
    <article className="post">
      <p className="post-eyebrow">// atualizado em</p>

      <h2 className="post-title">
        {titulo}
      </h2>

      <div className="post-meta">
        <span className="post-author">
          Por {autor}
        </span>

        <time className="post-date" dateTime={dataTime}>
          {data}
        </time>
      </div>

      <div className="post-body">
        {conteudo.map((paragrafo, index) => (
          <p key={index}>
            {paragrafo}
          </p>
        ))}
      </div>

      <figure className="post-figure">
        <img
          className="post-image"
          src={imagem}
          alt={imagemAlt}
          width="300"
        />

        <figcaption className="post-caption">
          {legenda}
        </figcaption>
      </figure>
    </article>
  )
}

export default Article