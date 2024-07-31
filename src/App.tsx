import { Header } from './components/header/header.tsx'
import { ChatGPT } from './sections/chatGPT.tsx'
import { Possibilities } from './sections/possibilities/possibilities.tsx'
import { Midjourney } from './sections/midjourney.tsx'
import { Footer } from './components/footer/footer.tsx'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Header />
      <ChatGPT />
      <Possibilities />
      <Midjourney />
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
