import BaseLayout from "@/components/layout/base-layout";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Region } from "@/types/regions";
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function RegionsPage({list} : {list : Region []}) {
    return (
        <BaseLayout title="Regions">
            <section className="grid grid-cols-3 gap-4">
                {list.map(item => 
                    <Card key={item.id}>
                        <CardContent>
                            <div className="flex">
                                <div className="w-full">
                                    <CardTitle>{ item.name }</CardTitle>
                                    <CardDescription className="mt-2">Capital is { item.capital }.</CardDescription>
                                </div>
                                <div>
                                    <Link href={`/regions/${item.id}`}>
                                        <ChevronRight className="size-4" />
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </section>
        </BaseLayout>
    )
}