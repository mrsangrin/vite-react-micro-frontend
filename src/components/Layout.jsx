const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1>This is the Header</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>This is the Footer</footer>
    </>
  )
}

export default Layout;
