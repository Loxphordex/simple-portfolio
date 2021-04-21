import './Header.scss'

export default function Header() {
  return (
    <header className='main-header fade-text' role='heading' aria-level={1}>
      <section className='hero'>
        <h1 className='heading theme-header header-name'>SILAS HALLAHAN</h1>
        <h2 className='sub-heading'>Works</h2>
      </section>
    </header>
  )
}