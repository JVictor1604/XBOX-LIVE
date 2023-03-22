import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navegation";



const Home = () => {

  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  return <S.Home>
    <Menu
      active={RoutePath.HOME}
      navItems={navigationItems} />
    <S.HomeContent>
      <header>
        <S.HomeHeaderDetails>
          <div>
            <S.HomeHeaderDetailsLogo> Xbox-Live </S.HomeHeaderDetailsLogo>
            <S.HomeHeaderDetailsDate> {dateDescription} </S.HomeHeaderDetailsDate>
          </div>
          <S.HomeHeaderDetailsSearch> 
            
          <Search/> 
          <input type="text" placeholder="Procure pelo Game" /> </S.HomeHeaderDetailsSearch>
          
        </S.HomeHeaderDetails>
      </header>
      <div>
        <S.HomeProductTitle>
          <b>Games</b>
        </S.HomeProductTitle>

        <S.HomeProductList>
          <p>Lista de Games aqui</p>
        </S.HomeProductList>
      </div>
    </S.HomeContent>
    <aside>
      <p>Detalhes dos pedidos aqui</p>
    </aside>
  </S.Home>;
};

export default Home;