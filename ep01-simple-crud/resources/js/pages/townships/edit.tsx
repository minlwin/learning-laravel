import BaseLayout from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import FormGroup from "@/components/widgets/form-group";
import { Region } from "@/types/regions";
import { Township } from "@/types/townships";
import { useForm } from "@inertiajs/react";
import { Save } from "lucide-react";
import { FormEvent } from "react";

export default function TownshipEdit({data, regions} : {data? : Township, regions: Region[]}) {

    const form = useForm({
        id: data?.id,
        name : data?.name || "",
        region_id : data?.region?.id || ""
    })

    const save = (e:FormEvent) => {
        e.preventDefault()
        form.post('/townships')
    }

    return (
        <BaseLayout title="Township">
            <form onSubmit={save} className="w-1/3">
                <FormGroup label="Region" className="mb-4" error={form.errors.region_id}>
                    <NativeSelect value={form.data.region_id} onChange={e => form.setData('region_id', e.target.value)}>
                        <NativeSelectOption value={''}>Select Region</NativeSelectOption>
                        {regions.map(item =>
                            <NativeSelectOption key={item.id} value={item.id}>{item.name}</NativeSelectOption>
                        )}
                    </NativeSelect>
                </FormGroup>

                <FormGroup label="Name" className="mb-4" error={form.errors.name}>
                    <Input placeholder="Enter Township Name" value={form.data.name} 
                        onChange={e => form.setData('name', e.target.value)} />
                </FormGroup>

                <Button type="submit">
                    <Save /> Save
                </Button>
            </form>

            <pre>{JSON.stringify(form.errors, null, 2)}</pre>
        </BaseLayout>
    )
}