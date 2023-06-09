import logo from "assets/imgs/logo.png";
import { ReactComponent as Logout } from "assets/icons/logout.svg";
import { RoutePath } from "types/routes";
import * as S from "./style";
import { NavItem } from "./types";

interface Menuprops {

  active: RoutePath;
  navItems: NavItem[];
  onNavigate: (data: RoutePath) => void;
  onLogout: () => void;

}


const Menu = ({ active, navItems, onNavigate, onLogout }: Menuprops) => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>

        {navItems.map((item, index) => (

          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>

            <S.MenuItemButton

              active={item.path === active}
              onClick={() => onNavigate(item.path)}>

              {item.icon}

            </S.MenuItemButton>

          </S.MenuItem>

        ))}
      </nav>
      <S.MenuItemLogout onClick={onLogout}>
        <Logout />
      </S.MenuItemLogout>

    </S.Menu>
  );
};

export default Menu;