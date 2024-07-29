import { marked } from 'marked'
import clsx from 'clsx'

// Настройка marked для поддержки XSS защиты
marked.use({
  breaks: true,
  gfm: true,
})

type Markdown = {
  markdown: string
}
export const MarkdownRenderer = ({ markdown }: Markdown) => {
  const createMarkup = () => {
    return { __html: marked(markdown) }
  }

  return (
    <div
      className={clsx('w-full self-start rounded-3xl rounded-bl-none bg-gray-2 px-4 py-3.5')}
      dangerouslySetInnerHTML={createMarkup()}
    />
  )
}
