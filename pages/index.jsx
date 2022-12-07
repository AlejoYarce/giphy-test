import PageHead from '~app/components/PageHead'
import Navbar from '~app/components/ui/Navbar'
import Search from '~app/components/Search'

export default function Home() {
  return (
    <>
      <PageHead />

      <Navbar />

      <main>
        <h1>GIPHY Search</h1>

        <Search />
      </main>

      {/* <footer>
        Default Next.js Structure
      </footer> */}
    </>
  )
}
