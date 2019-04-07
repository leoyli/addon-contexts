import React from 'react';
import { ToolBarMenu } from './ToolBarMenu';
import { OPT_OUT } from '../constants';
import { TToolbarControl } from '../@types';

export const ToolbarControl: TToolbarControl = ({
  nodeId,
  icon,
  title,
  params,
  options,
  selected,
  setSelected,
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const paramNames = params.map(({ name }) => name);
  const activeName =
    // validate the selected name
    (paramNames.concat(OPT_OUT).includes(selected) && selected) ||
    // fallback to default
    (params.find((param) => !!param.default) || { name: null }).name ||
    // fallback to the first
    params[0].name;
  const list = options.cancelable === false ? paramNames : [OPT_OUT, ...paramNames];
  const props = {
    icon,
    title,
    active: activeName !== OPT_OUT,
    expanded,
    setExpanded,
    optionsProps: {
      activeName,
      list,
      onSelectOption: (name: string) => () => {
        setExpanded(false);
        setSelected(nodeId, name);
      },
    },
  };

  return options.disable || list.length < 2 ? null : <ToolBarMenu {...props} />;
};
