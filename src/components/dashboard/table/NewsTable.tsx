"use client";

import { useRouter } from "next/navigation";
import Table from "./Table";
import { entityAdminPagesPath } from "@/utils/router";
import { Button } from "@nextui-org/react";
import { NewsItem } from "@/ts/interfaces/NewsProps";
import Image from "next/image";
import { extractImgSrc } from "@/utils/get-img";
import { getValueIn } from "@/utils/trans";
import { EditNews } from "../factories/EditNewsModal";

interface EntityPagesI {
  news: { details: NewsItem; slug: string }[];
  entity_slug: string;
}
const NewsTable = ({ entity_slug, news }: EntityPagesI) => {
  const actions = (item: (typeof news)[number]) => (
    <EditNews entity_slug={entity_slug} data={item.details} slug={item.slug} />
  );

  return news.length === 0 ? (
    <div className="text-xl "> No News try to add </div>
  ) : (
    <Table
      items={news}
      columns={[
        {
          header: "###",
          value: (item) => (
            <Image
              width={80}
              height={40}
              alt="staff image"
              src={extractImgSrc(
                item.details.gallary[item.details.mainImageIdx],
                "img"
              )}
            />
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
