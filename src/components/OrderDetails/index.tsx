import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";
import OrderItemList from "components/OrderItemList";
import ButtonLarge from "components/ButtonLarge";
import OrderItem from "components/OrderItem";



const OrderDetails = () => {

    return (

        <S.OrderDetails>

            <S.OrderDetailsListTitle>
                Detalhes Do Seu pedido
            </S.OrderDetailsListTitle>

            <S.OrderDetailsButtonGroup>
                <ButtonToggle active={true} value="Pré-Venda" />
                <ButtonToggle active={false} value="Comprar" />
                <ButtonToggle active={true} value="Retirar no local" />

            </S.OrderDetailsButtonGroup>

            <S.OrderDetailsList>

                <OrderItemList
                    header={
                        <S.OrderDetailsListTitle>
                            <h4>Item</h4>
                            <h4>Qtd</h4>
                            <h4>Preço</h4>
                        </S.OrderDetailsListTitle>
                    }
                    list={<OrderItem />}
                    footer={
                        <S.OrderDetailsListFooter>
                            <S.OrderDetailsListFooterRow>
                                <span>Subtotal</span>
                                <span>R$ 10.00</span>
                            </S.OrderDetailsListFooterRow>
                            <ButtonLarge value="Continue para o pagamento" />
                        </S.OrderDetailsListFooter>
                    }
                />

            </S.OrderDetailsList>

        </S.OrderDetails>

    );
}

export default OrderDetails;
