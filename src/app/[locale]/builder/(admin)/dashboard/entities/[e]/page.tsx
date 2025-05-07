// entity page such as faculty or sector

import Card1 from "@/components/dashboard/cards/card1";
import { EntityModal } from "@/components/dashboard/factories/CreateEntityModal";
import Main from "@/components/dashboard/structure/Main";
import { getEntityWithLayout } from "@/services/models/entity";
import { EntitySlugParams } from "@/ts/common/NextPageParams";
import Entity from "@/ts/interfaces/Entity";
import { getAllValuesof } from "@/utils/get-all-values";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";

// news

// lists

// pages

// staff
export default async ({ params }: EntitySlugParams) => {
  const entity = await getEntityWithLayout(params.e);
  if (!entity) return notFound();

  const metadata = JSON.parse(entity.meta as any) as Entity;
  return (
    <Main>
      <div className="mt-6 gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <h3 className="text-xl font-semibold">{entity.name}</h3>
          <EntityModal
            data={metadata as any}
            entity_slug={params.e}
            options={{
              btnText: "Edit  website",
            }}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid md:grid-cols-2 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
            <Card1
              title={"Entity Name"}
              content={() => (
                <div className="flex flex-col gap-2">
                  {getAllValuesof(metadata.name).map(({ locale, value }) => (
                    <div key={value}>
                      {locale}: {value ? value : "not set"}
                    </div>
                  ))}
                </div>
              )}
            />
            <Card1
              title="Link to access it"
              content={() => `/e/${entity.slug}`}
            />
            <Card1
              title="Title apears at most Top"
              content={() => (
                <div className="flex flex-col gap-2">
                  {getAllValuesof(metadata.topTitle).map(
                    ({ locale, value }) => (
                      <div key={value}>
                        {locale}: {value ? value : "not set"}
                      </div>
                    )
                  )}
                </div>
              )}
            />
            <Card1
              title="Descripiton useful for searching"
              content={() => (
                <div className="flex flex-col gap-2">
                  {getAllValuesof(metadata.description).map(
                    ({ locale, value }) => (
                      <div key={value}>
                        {locale}: {value ? value : "not set"}
                      </div>
                    )
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <Divider />
    </Main>
  );
};
