
    import { getRequest } from "@/service/getRequest"

    const fn = async () => {
        const artists = await getRequest("/user?role=ARTIST")
        return artists
    }

    const data = await fn()

    export const Get = () => {
        return data
    }