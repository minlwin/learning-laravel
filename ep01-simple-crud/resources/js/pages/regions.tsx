import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Region } from "@/types/regions";
import { Head } from "@inertiajs/react";

export default function RegionsPage({list} : {list : Region []}) {
    return (
        <>
            <Head title="Regions" />

            <main className="p-4">
                <section className="grid grid-cols-3 gap-4">
                    {list.map(item => 
                        <Card key={item.id}>
                            <CardContent>
                                <CardHeader>{ item.name }</CardHeader>

                                <p>{ item.capital }</p>
                            </CardContent>
                        </Card>
                    )}
                </section>
            </main>
        </>
    )
}