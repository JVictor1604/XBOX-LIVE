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
// import { orders } from "mocks/orders";
import { products } from "mocks/products";
import { ProductResponse } from "types/Product";
import Overlay from "components/Overlay";
import CheckoutSection from "components/CheckOutSection";
import { useState } from "react";
import { OrderType } from "types/orderType";
import { OrderItemType } from "types/ordemItemType";



const Home = () => {

  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  const navigate = useNavigate();

  const [orders, setOrders] = useState<OrderItemType[]>([]);

  const [proceedToPayment, setProceedToPayment] = useState<boolean>(false);

  const [selectedTable, setSelectedTable] = useState<string | undefined>();

  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (product: ProductResponse) => {
    const existing = orders.find((i) => i.product.id === product.id);
    const quantity = existing ? existing.quantity + 1 : 1;
    const item: OrderItemType = { product, quantity };

    const list = existing
      ? orders.map((i) => (i.product.id === existing.product.id ? item : i))
      : [...orders, item];
    setOrders(list);
  };

  const [activeOrderType, setActiverOrderType] = useState(
    OrderType.MIDIA_DIGITAL
  );

  const handleRemoveOrderItem = (id: string) => {
    const filtered = orders.filter((i) => i.product.id !== id);
    setOrders(filtered);
  };

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
          <GameItemList
            onSelectTable={setSelectedTable}>
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
      <OrderDetails
        orders={orders}
        onChangeActiveOrderType={(data) => setActiverOrderType(data)}
        activeOrderType={activeOrderType}
        onRemoveItem={handleRemoveOrderItem}
        onOrdersChange={(data) => setOrders(data)}
        onProceedToPayment={() => setProceedToPayment(true)}
        selectedTable={selectedTable}
      />
    </aside>

    {proceedToPayment && (
      <Overlay>
        <CheckoutSection
          orders={orders}
          onOrdersChange={(data) => setOrders(data)}
          onCloseSection={() => setProceedToPayment(false)}
          selectedTable={selectedTable}
          onChangeActiveOrderType={(data) => setActiverOrderType(data)}
          activeOrderType={activeOrderType}
        />
      </Overlay>
    )}

  </S.Home>;
};

export default Home;