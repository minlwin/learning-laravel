import BaseLayout from "@/components/layout/base-layout";
import { Button } from "@/components/ui/button";
import NoData from "@/components/widgets/no-data";
import PageTitle from "@/components/widgets/page-title";
import { Region } from "@/types/regions";
import { Township } from "@/types/townships";
import { Upload } from "lucide-react";

type RegionDetailsProps = {
    region : Region
    townships : Township[]
}

export default function RegionDetails({region, townships} : RegionDetailsProps) {
    return (
        <BaseLayout title="Region">
            <div className="flex justify-between items-center">
                <PageTitle title={region.name} />
                <Button>
                    <Upload /> Upload Townships
                </Button>      
            </div>

            <div className="mt-4">
            {townships.length > 0 ? 
                <TownshipsInRegion list={townships} /> :
                <NoData data="Townships for this region" />
            }
            </div>
        </BaseLayout>
    )
}

function TownshipsInRegion({list} : {list : Township[]}) {
    return (
        <section className="grid grid-cols-3 gap-4">

        </section>
    )
}