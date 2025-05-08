import React from 'react';
import Top from '@/components/sections/Nav/NavTop';
import NavProps from '@/ts/interfaces/NavPops';
import NavContent from '@/components/sections/Nav/NavContent';
import NavToggleFirstRow from '@/components/sections/Nav/NavToggleFirstRow';

const Nav = ({ data, logo }: NavProps) => {
  return (
    <NavToggleFirstRow>
      <Top buttons={data.buttons} />
      <NavContent items={data.items} logo={logo} />
    </NavToggleFirstRow>
  );
};

export default Nav;
