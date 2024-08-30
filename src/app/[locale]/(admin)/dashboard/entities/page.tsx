/// spread all entities
//  faculites
// sectors

import Card1 from "@/components/dashboard/cards/card1";
import { AddEntityModal } from "@/components/dashboard/factories/CreateEntityModal";
import { Link } from "@/navigation";
import { getEntities } from "@/services/models/entity";
import { entityAdminPath } from "@/utils/router";
// import CreateEntityModal from "@/components/dashboard/factories/CreateEntityModal";
import { Button, Divider } from "@nextui-org/react";

export default async () => {
  const entities = await getEntities();
  return (
    <>
      <div className="w-full">
        <h3 className="text-xl font-semibold">All Entities</h3>
        <div className="flex w-full justify-between flex-wrap ">
          <div className="flex items-center gap-3 flex-wrap md:flex-nowrap"></div>
          <div className="flex flex-row gap-3.5 flex-wrap">
            <AddEntityModal />
          </div>
        </div>
      </div>
      <div className="mt-3 gap-6 flex flex-col w-full">
        {/* Card Section Top */}
        <div className="flex flex-col gap-2">
          {/* <h3 className="text-xl font-semibold">Faculties</h3> */}
          <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
            {entities.map((entity) => (
              <Card1
                key={entity.id}
                title={entity.name}
                content={() => (
                  <div>
                    <div>
                      <span>Avaliable at link: </span>
                      <span>{`/e/${entity.slug}`}</span>
                    </div>
                    <Link className="" href={entityAdminPath(entity.slug)}>
                      <Button color="secondary">manage</Button>
                    </Link>
                  </div>
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};
