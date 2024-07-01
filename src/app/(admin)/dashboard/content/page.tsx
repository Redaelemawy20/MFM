import Table from "@/components/dashboard/table/Table";
import db from "@/db";
import PageCreateForm from "../../../../components/dashboard/forms/PageCreate";
import { createPage } from "@/actions";

const Content = async () => {
  const pages = await db.page.findMany({ include: { sections: true } });
  return (
    <>
      <PageCreateForm
        items={[{ name: "name" }]}
        model="Page"
        action={createPage}
      />
      <Table items={pages} columns={["id", "name"]} />
    </>
  );
};

export default Content;
