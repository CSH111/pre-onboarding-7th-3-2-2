import { Link } from "react-router-dom";

import { type MenuDataItem } from "./menuData";

interface MenuItemProps extends MenuDataItem {
  depth: number;
}

const MenuItem = ({ tabName, path, subMenu, depth }: MenuItemProps) => {
  const isLastDepth = !subMenu;
  return (
    <li>
      {isLastDepth ? (
        <Link to={`${path}`}>{tabName}</Link>
      ) : (
        <div>{tabName}</div>
      )}
      <ul>
        {subMenu?.map(({ tabName, path, subMenu }) => {
          return (
            <MenuItem
              key={tabName}
              tabName={tabName}
              path={path}
              subMenu={subMenu}
              depth={depth + 1}
            />
          );
        })}
      </ul>
    </li>
  );
};

export default MenuItem;
