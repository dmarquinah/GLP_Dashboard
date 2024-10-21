import { IJsonData } from './mock-interfaces'
import postMockJson from './post.mock.json'

export const retrieveMockGetData = async (path: string) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ path, isFinished: true })
    }, 1000),
  )
}

export const retrieveMockPostData = async (path: string, body: unknown) => {
  return new Promise((resolve) =>
    setTimeout(async () => {
      const result = await findPostData(path, body)
      resolve(result)
    }, 1000),
  )
}

const findPostData = async (key: string, body: unknown) => {
  if (!body || !key) return null
  return await searchPostDataFromJSON(key)
}

const searchPostDataFromJSON = async (key: string) => {
  const postData = postMockJson as IJsonData[]
  return postData.find((item) => item.path == key)
}
