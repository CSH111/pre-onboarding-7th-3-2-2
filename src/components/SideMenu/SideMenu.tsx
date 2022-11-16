import { useEffect, useState } from "react";

import menuData, { type MenuDataItem, type TabName } from "./menuData";
import * as S from "./styles";

export type MenuStateInterface = {
  [key in TabName]?: boolean;
};

const SideMenu = () => {
  const [menuToggleStates, setMenuToggleStates] = useState<MenuStateInterface>({});

  const createMenuState = (item: MenuDataItem) => {
    if (!item.subMenu) return;
    setMenuToggleStates((state) => ({ ...state, [item.tabName]: false }));
    item.subMenu.forEach((_item) => {
      createMenuState(_item);
    });
  };

  console.log(menuToggleStates);

  useEffect(() => {
    menuData.forEach(createMenuState);
  }, []);

  return (
    <div>
      {menuData.map(({ tabName, path, subMenu }) => {
        return (
          <S.MenuItem
            key={tabName}
            tabName={tabName}
            path={path}
            subMenu={subMenu}
            depth={1}
            menuToggleStates={subMenu ? menuToggleStates : null}
            setMenuToggleStates={subMenu ? setMenuToggleStates : null}
          />
        );
      })}
    </div>
  );
};

export default SideMenu;
