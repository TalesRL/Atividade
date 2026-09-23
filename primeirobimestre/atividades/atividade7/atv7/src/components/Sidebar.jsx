function Sidebar({ posts }) {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">
        Posts Relacionados
      </h3>

      <nav
        className="menu sidebar-menu"
        aria-label="Posts relacionados"
      >
        <ul className="menu-list menu-list-vertical">
          {posts.map((post) => (
            <li key={post}>
              <a className="menu-link" href="#">
                {post}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar