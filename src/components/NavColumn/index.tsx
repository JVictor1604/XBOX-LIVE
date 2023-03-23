import { ReactComponent as Market } from "assets/icons/market.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";

const NavColumn = () => {
  const items = [
    {
      icon: <Market />,
      title: "Selecione sua Plataforma",
      subtitle: "Escolha ou mescle plataformas",
      navigation: RoutePath.SETTINGS_TABLES,
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
  return <S.NavColumn>{"Componente NavColumnItem"}</S.NavColumn>;
};

export default NavColumn;