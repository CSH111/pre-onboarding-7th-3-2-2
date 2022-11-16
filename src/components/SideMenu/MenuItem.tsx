import { Link } from "react-router-dom";

import { type MenuDataItem, type TabName } from "./menuData";
import { MenuStateInterface } from "./SideMenu";
import * as S from "./styles";

interface MenuItemProps extends MenuDataItem {
  depth: number;
  className?: string;
  menuToggleStates: MenuStateInterface | null;
  setMenuToggleStates: React.Dispatch<React.SetStateAction<MenuStateInterface>> | null;
}

const MenuItem = ({
  tabName,
  path,
  subMenu,
  depth,
  className,
  menuToggleStates,
  setMenuToggleStates,
}: MenuItemProps) => {
  const handleToggle = (tabName: TabName) => {
    if (!setMenuToggleStates) return;
    setMenuToggleStates((state) => ({ ...state, [tabName]: !state[tabName] }));
    console.log();
  };
  return (
    <li className={className}>
      {!subMenu && <Link to={`${path}`}>{tabName}</Link>}
      {subMenu && menuToggleStates && (
        <>
          <S.AccordionHeader onClick={() => handleToggle(tabName)}>
            <div>{tabName}</div>
            <button>{menuToggleStates[tabName] ? "닫기" : "열기"}</button>
          </S.AccordionHeader>
          <S.AccordionBody isOpen={menuToggleStates[tabName]}>
            {subMenu.map(({ tabName, path, subMenu }) => {
              return (
                <S.MenuItem
                  key={tabName}
                  tabName={tabName}
                  path={path}
                  subMenu={subMenu}
                  depth={depth + 1}
                  menuToggleStates={menuToggleStates}
                  setMenuToggleStates={setMenuToggleStates}
                />
              );
            })}
          </S.AccordionBody>
        </>
      )}
    </li>
  );
};

export default MenuItem;
