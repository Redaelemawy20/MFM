import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import Entity from "@/ts/interfaces/Entity";
import { getValueIn } from "@/utils/trans";
import { extractImgSrc } from "@/utils/get-img";
import { entityAdminPagesPath, entityAdminPath } from "@/utils/router";

export default function WebsiteCard({ entity }: { entity: Entity }) {
  console.log(entity);

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          src={extractImgSrc(entity, "logo")}
          width={40}
        />
        <p className="text-md">{getValueIn(entity.name, "en")}</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{getValueIn(entity.topTitle, "en")}.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link showAnchorIcon href={entityAdminPagesPath(entity.slug, "_home")}>
          Manage website pages.
        </Link>
      </CardFooter>
    </Card>
  );
}
