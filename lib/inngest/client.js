import { Inngest } from 'inngest'
import { APP_NAME } from '../constants'

export const inngest = new Inngest({
  id: 'career-genie',
  name: APP_NAME,
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
})
