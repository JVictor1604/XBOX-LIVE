import * as S from "./style";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navegation";
import GameItemList from "components/GamesItemList"
import GameItem from "components/GameItem";
import OrderDetails from "components/OrderDetails";
import { useNavigate } from "react-router-dom";
import { orders } from "mocks/orders";
import { products } from "mocks/products";
import { ProductResponse } from "types/Product";
import Overlay from "components/Overlay";
import CheckoutSection from "components/CheckOutSection";



const Home = () => {

  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();

  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (product: ProductResponse) => {};

  return <S.Home>
    <Menu
      active={RoutePath.HOME}
      navItems={navigationItems}
      onNavigate={handleNavigation}
      onLogout={() => navigate(RoutePath.LOGIN)} />
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
            {Boolean(products.length) &&
              products.map((product, index) => (
                <GameItem
                  product={product}
                  key={`ProductItem-${index}`}
                  onSelect={handleSelection} />
              ))}
          </GameItemList>
        </S.HomeProductList>
      </div>
    </S.HomeContent>
    <aside>
      <OrderDetails />
    </aside>

    {/* <Overlay>

      <CheckoutSection />

    </Overlay> */}

  </S.Home>;
};

export default Home;