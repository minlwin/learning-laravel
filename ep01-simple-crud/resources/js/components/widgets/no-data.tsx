import { Card, CardContent, CardTitle } from "../ui/card";

export default function NoData({data} : {data : string}) {
    return (
        <Card>
            <CardContent>
                <CardTitle>There is no {data}.</CardTitle>
            </CardContent>
        </Card>
    )
}