import { hashedKey } from "./md5Hash"

const publicAPIKEY = process.env.REACT_APP_PUBLIC_MARVEL_API_KEY
const privateAPIKEY = process.env.REACT_APP_PRIVATE_MARVEL_API_KEY

export const marvelAPIKeys = {
    public: publicAPIKEY,
    private: privateAPIKEY
}

const timeStamp = Date.now()

const hashedParam = hashedKey(timeStamp + marvelAPIKeys.private + marvelAPIKeys.public)

export const apiUrlParam = `ts=${timeStamp}&apikey=${marvelAPIKeys.public}&hash=${hashedParam}`
