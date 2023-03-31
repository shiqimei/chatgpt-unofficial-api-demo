import dotenv from 'dotenv'
import { ChatGPTUnofficialProxyAPI } from 'chatgpt'

dotenv.config()

async function main() {
  const api = new ChatGPTUnofficialProxyAPI({
    // See: https://chat.openai.com/api/auth/session
    accessToken: process.env.OPENAI_ACCESS_TOKEN,
    // Deploy your own api endpoint server with this tutorial
    // https://github.com/acheong08/ChatGPT-Proxy-V4
    apiReverseProxyUrl: process.env.API_ENDPOINT
  })

  let lastPos = 0
  api.sendMessage('write an-indepth blog using markdown about ChatGPT', {
    onProgress({ text }) {
      process.stdout.write(text.slice(lastPos, text.length))
      lastPos = text.length
    }
  })
}

main()
