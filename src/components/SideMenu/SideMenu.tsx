import menuData from "./menuData";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  return (
    <div>
      {menuData.map(({ tabName, path, subMenu }) => {
        return (
          <MenuItem
            key={tabName}
            tabName={tabName}
            path={path}
            subMenu={subMenu}
            depth={0}
          />
        );
      })}
    </div>
  );
};

export default SideMenu;
