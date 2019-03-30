import React from 'react';
import { Icons, IconButton, WithTooltip } from '@storybook/components';
import { ToolBarMenuOptions } from './ToolBarMenuOptions';

export const ToolBarMenu = ({ icon, title, active, expanded, setExpanded, optionsProps }) => (
  <WithTooltip
    closeOnClick
    trigger="click"
    placement="top"
    tooltipShown={expanded}
    onVisibilityChange={setExpanded}
    tooltip={<ToolBarMenuOptions {...optionsProps} />}
  >
    <IconButton active={active} title={title}>
      <Icons icon={icon} />
    </IconButton>
  </WithTooltip>
);
