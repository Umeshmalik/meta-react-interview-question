import { ITEMS } from "../constants"

export const fetchDate = async () => {
    return new Promise((res) => {
        setTimeout(res(ITEMS), 300)
    })
}