import { Region } from "./regions"

export type TownshipSearch = {
    regionId : number | ""
    keyword : string
}

export type Township = {
    id: number
    name : string
    region : Region
}