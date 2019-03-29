import React from 'react';
import { TooltipLinkList } from '@storybook/components';
import { OPT_OUT } from '../libs/constants';

export const ToolBarMenuOptions = ({ activeName, list, onSelectOption }) => (
  <TooltipLinkList
    links={list.map((name) => ({
      key: name,
      id: name,
      title: name !== OPT_OUT ? name : 'Off',
      active: name === activeName,
      onClick: onSelectOption(name),
    }))}
  />
);
