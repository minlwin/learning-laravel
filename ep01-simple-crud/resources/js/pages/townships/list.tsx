import BaseLayout from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import FormGroup from "@/components/widgets/form-group";
import { Region } from "@/types/regions";
import { Township, TownshipSearch } from "@/types/townships";
import { Link, useForm } from "@inertiajs/react";
import { Plus, Save, Search } from "lucide-react";
import { FormEvent } from "react";

export default function TownshipList({regions, inputs, data} : {regions : Region[], inputs : TownshipSearch, data : Township[]}) {
    return (
        <BaseLayout title="Townships">
            <>
                <TownshipSearchForm regions={regions} inputs={inputs} />

                <section className="grid grid-cols-3">
                    {data.map((item, index) => 
                        <div className="col" key={index}>
                            <Card></Card>
                        </div>
                    )}
                </section>
            </>
        </BaseLayout>
    )
}

function TownshipSearchForm({regions, inputs} : {regions : Region[], inputs : TownshipSearch}) {

    const form = useForm({
        default : {
            regionId: inputs.regionId || '',
            keyword: inputs.keyword || ""
        }
    })

    const search = (e:FormEvent) => {
        e.preventDefault()
        form.get("/townships")
    }

    return (
        <form onSubmit={search} className="flex gap-4">
            <FormGroup label="Region" type="horizontal" className="w-fit">
                <NativeSelect>
                    <NativeSelectOption value={""}>Select All</NativeSelectOption>
                    {regions.map(item => 
                        <NativeSelectOption key={item.id} value={item.id}>{item.name}</NativeSelectOption>
                    )}
                </NativeSelect>
            </FormGroup>

            <FormGroup label="Keyword" type="horizontal">
                <Input type="text" placeholder="Search Keyword"  />
            </FormGroup>
            
            <div className="space-x-2">
                <Button type="submit">
                    <Search /> Search
                </Button>

                <Button asChild type="button" variant={"outline"}>
                    <Link href={""}>
                        <Plus /> Create New
                    </Link>
                </Button>
            </div>
        </form>
    )
}

function TownshipItem({data} : {data : Township}) {
    return (
        <Card>

        </Card>
    )
}