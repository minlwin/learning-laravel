import { Info } from "lucide-react";
import { Item, ItemContent, ItemMedia, ItemTitle } from "../ui/item";

export default function NoData({data} : {data : string}) {
    return (
        <Item variant={'muted'}>
            <ItemMedia>
                <Info />
            </ItemMedia>
            <ItemContent>
                <ItemTitle>There is no {data}.</ItemTitle>
            </ItemContent>
        </Item>
    )
}