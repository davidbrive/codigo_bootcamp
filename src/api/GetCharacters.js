import { URL_BASE } from "../utils/urls"

export function GetCharacters() {
    const res = fetch(URL_BASE)
        .then(response => response.json())
        .then(({ results }) => { return results })
        .catch(() => { return [] })
    return res
}