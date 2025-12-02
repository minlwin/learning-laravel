import BaseLayout from "@/components/layout/base-layout";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Region } from "@/types/regions";
import { Link } from '@inertiajs/react';
import { ChevronRight, Flag, Folder, Send } from 'lucide-react';

export default function RegionsPage({list} : {list : Region []}) {
    return (
        <BaseLayout title="Regions">
            <section className="grid grid-cols-3 gap-4">
                {list.map(item => 
                    <Item variant={'outline'} key={item.id}>
                        <ItemMedia>
                            <Folder />
                        </ItemMedia>

                        <ItemContent>
                            <ItemTitle>{item.name}</ItemTitle>
                            <ItemDescription>Capital is {item.capital}.</ItemDescription>
                        </ItemContent>

                        <ItemActions>
                            <Link href={`/regions/${item.id}`}>
                                <ChevronRight />
                            </Link>
                        </ItemActions>
                    </Item>
                )}
            </section>
        </BaseLayout>
    )
}