import { ITEMS } from "../constants"

export const fetchData = async () => {
    return new Promise((res) => {
        setTimeout(res(ITEMS), 300)
    })
}