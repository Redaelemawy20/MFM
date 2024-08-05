"use client";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";

export default function WithTabs({
  children,
  tabs = [],
  openedTab,
}: {
  children: React.ReactNode;
  tabs: string[];
  openedTab?: string;
}) {
  const [selected, setSelected] = useState(openedTab || tabs[0]);
  const childs = React.Children.toArray(children);

  return (
    <Tabs
      selectedKey={selected}
      onSelectionChange={(key) => {
        setSelected(key as string);
      }}
    >
      {tabs.map((tab, index) => (
        <Tab title={tab} key={tab}>
          <Card>
            <CardBody>{childs[index]}</CardBody>
          </Card>
        </Tab>
      ))}
    </Tabs>
  );
}
