import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navegation";
import GameItemList from "components/GamesItemList"
import GameItem from "components/GameItem";
import OrderDetails from "components/OrderDetails";
import Overlay from "components/Overlay";
import CheckoutSection from "components/CheckOutSection";



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

            <Search />
            <input type="text" placeholder="Procure pelo Game" /> </S.HomeHeaderDetailsSearch>

        </S.HomeHeaderDetails>
      </header>
      <div>
        <S.HomeProductTitle>
          <b>Games</b>
        </S.HomeProductTitle>

        <S.HomeProductList>
          <GameItemList>
            <GameItem/>
          </GameItemList>
        </S.HomeProductList>
      </div>
    </S.HomeContent>
    <aside>
      <OrderDetails/>
    </aside>

    <Overlay>

      <CheckoutSection />

    </Overlay>

  </S.Home>;
};

export default Home;