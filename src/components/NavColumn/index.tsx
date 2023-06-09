import { ReactComponent as Market } from "assets/icons/market.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import NavColumnItem from "components/NavColumnItem";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

type NavColumnType = HTMLAttributes<HTMLDivElement>;

type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({ activeRoute }: NavColumnProps) => {

  const navigate = useNavigate();

  const items = [
    {
      icon: <Market />,
      title: "Selecione sua Plataforma",
      subtitle: "Escolha ou mescle plataformas",
      navigation: RoutePath.SETTINGS_PLATAFORM,
    },
    {
      icon: <Info />,
      title: "Gerenciar Produtos",
      subtitle: "Edite os jogos e escolha as edições",
      navigation: RoutePath.SETTINGS_PRODUCTS,
    },
    {
      icon: <Users />,
      title: "Gerenciar Usuários",
      subtitle: "Gerencie o acesso ao sistema",
      navigation: RoutePath.SETTINGS_USERS,
    },
  ];
  return <S.NavColumn>{items.map((item, key) => (
    <NavColumnItem
      onClick={() => navigate(item.navigation)}
      active={item.navigation === activeRoute}
      icon={item.icon}
      title={item.title}
      key={key}
      subtitle={item.subtitle}
    />
  ))}</S.NavColumn>;
};

export default NavColumn;