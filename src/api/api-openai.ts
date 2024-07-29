import { type ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai-edge'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_API_KEY,
  basePath: import.meta.env.VITE_BASE_PATH,
})
const openai = new OpenAIApi(configuration)

export const queryChatbot = async (messages: ChatCompletionRequestMessage[]): Promise<ChatCompletionRequestMessage> => {
  const completion = await openai.createChatCompletion({
    messages,
    model: 'gemini-pro',
  })
  const message = (await completion.json()).choices[0].message

  return message
}
