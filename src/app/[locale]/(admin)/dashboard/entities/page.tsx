import WebsiteCard from "@/components/dashboard/cards/WebsiteCard";
import { EntityModal } from "@/components/dashboard/factories/CreateEntityModal";
import Main from "@/components/dashboard/structure/Main";
import SubHeader from "@/components/dashboard/structure/SubHeader";
import { getEntities } from "@/services/entityServices";

export default async () => {
  const entities = await getEntities();
  const parseEntity = (e: any) => {};
  return (
    <Main>
      <SubHeader>
        <h3 className="text-xl font-semibold">All Websites</h3>
        <EntityModal
          options={{
            btnText: "Create new website",
          }}
        />
      </SubHeader>

      <div className="mt-3 gap-6 flex flex-col w-full">
        <div className="flex flex-col gap-2">
          <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
            {entities.map((entity) => {
              let meta = JSON.parse(entity.meta as any);
              return (
                <WebsiteCard
                  key={entity.id}
                  entity={{ ...meta, slug: entity.slug }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Main>
  );
};
