"use client";

import Table from "./Table";
import { entityAdminPagesPath } from "@/utils/router";
import { Button } from "@nextui-org/react";
import { NewsItem } from "@/ts/interfaces/NewsProps";
import Image from "next/image";
import { extractImgSrc } from "@/utils/get-img";
import { getValueIn } from "@/utils/trans";
import { NewsModal } from "../factories/EditNewsModal";

interface EntityPagesI {
  news: { details: NewsItem; slug: string }[];
  entity_slug: string;
}
const NewsTable = ({ entity_slug, news }: EntityPagesI) => {
  const actions = (item: (typeof news)[number]) => (
    <NewsModal
      entity_slug={entity_slug}
      data={item.details}
      slug={item.slug}
      options={{
        btnText: "Edit",
        color: "secondary",
      }}
    />
  );

  return news.length === 0 ? (
    <div className="text-xl "> No News try to add </div>
  ) : (
    <Table
      items={news}
      columns={[
        {
          header: "###",
          value: (item) =>
            item.details.gallary ? (
              <Image
                width={80}
                height={40}
                alt="image"
                src={extractImgSrc(
                  item.details.gallary[item.details.mainImageIdx],
                  "img"
                )}
              />
            ) : (
              "you didn't add image"
            ),
        },
        {
          header: "title",
          value: (item) => getValueIn(item.details.title, "en"),
        },
        {
          header: "actions",
          value: (item) => actions(item),
        },
      ]}
    />
  );
};

export default NewsTable;
