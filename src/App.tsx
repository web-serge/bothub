import { Header } from './components/header/header.tsx'
import { ChatGPT } from './sections/chatGPT.tsx'
import { Possibilities } from './sections/possibilities/possibilities.tsx'
import { Midjourney } from './sections/midjourney.tsx'
import { Footer } from './components/footer/footer.tsx'

function App() {
  return (
    <>
      <Header />
      <ChatGPT />
      <Possibilities />
      <Midjourney />
      <Footer />
    </>
  )
}

export default App
