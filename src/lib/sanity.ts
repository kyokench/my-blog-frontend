import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'wjvd5gs5',
  dataset: 'production',
  apiVersion: '2025-07-07', // 今日の日付でOK
  useCdn: true,
})
