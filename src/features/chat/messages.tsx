import clsx from 'clsx'
import { ChatCompletionRequestMessage } from 'openai-edge'
import { MarkdownRenderer } from '../../components/markdown/markdown.tsx'
import { DefaultAvatar, Gemini } from '../../components/icons'

type Props = {
  data: ChatCompletionRequestMessage[]
  className?: string
}
export const Messages = ({ className, data }: Props) => {
  return data?.map((message, index) => {
    const isUser = message.role === 'user'
    return <Message key={index} isUser={isUser} className={className} message={message.content!} />
  })
}

type MessageProps = {
  isUser: boolean
  className?: string
  message: string
}

export const Message = ({ isUser, message, className }: MessageProps) => {
  return (
    <li
      className={clsx(
        isUser ? 'flex-row-reverse self-end' : 'self-start rounded-bl-none',
        'flex max-w-[90%] animate-new-message items-center gap-2.5 rounded-3xl delay-300',
        className,
      )}
    >
      {isUser ? (
        <DefaultAvatar className={'flex-shrink-0 self-end'} width={40} height={40} viewBox={'0 0 33 33'} />
      ) : (
        <Gemini className={'flex-shrink-0 self-end'} width={40} height={40} viewBox={'0 0 24 24'} />
      )}
      <div>
        {isUser && (
          <span className={'flex w-full items-center gap-2.5 rounded-3xl rounded-br-none bg-primary px-4 py-3.5'}>
            {message}
          </span>
        )}
        {!isUser && (
          <>
            <p className={'mb-2 text-sm'}>Gemini</p> <MarkdownRenderer markdown={message} />
          </>
        )}
      </div>
    </li>
  )
}
