import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames";
import SM from "./index.module.scss";

interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({className = ""}) => {
  const [collapsed, setCollapsed] = useState(false);
  const onToggleCollapse = () => setCollapsed(!collapsed);
  return (
    <div className={classNames({
      cls: SM.Sidebar,
      mods: {[SM.collapsed]: collapsed},
      additional: [className]})
    }>
      Sidebar
      <button onClick={onToggleCollapse}>Toggle</button>
    </div>
  );
};
