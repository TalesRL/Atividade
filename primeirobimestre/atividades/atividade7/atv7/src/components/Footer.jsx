function Footer({ ano, nome }) {
  return (
    <footer className="page-footer">
      <p>
        &copy; {ano} {nome} - Todos os direitos reservados.
      </p>
    </footer>
  )
}

export default Footer