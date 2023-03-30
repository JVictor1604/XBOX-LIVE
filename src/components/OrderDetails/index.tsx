import * as S from "./style";
import ButtonToggle from "components/ButtonToggle";
import OrderItemList from "components/OrderItemList";
import ButtonLarge from "components/ButtonLarge";
import OrderItem from "components/OrderItem";
import { HTMLAttributes, useState, useEffect } from "react";
import { OrderItemType } from "types/ordemItemType";
import { OrderType } from "types/orderType";

type OrderDetailsType = HTMLAttributes<HTMLDivElement>;

type OrderDetailsProps = {
    orders: OrderItemType[];
    onChangeActiveOrderType: (data: OrderType) => void;
    onRemoveItem: (id: string) => void;
    onProceedToPayment: () => void;
    activeOrderType: OrderType;
    onOrdersChange: (orders: OrderItemType[]) => void;
    selectedTable?: number | string;
} & OrderDetailsType;

const OrderDetails = ({ orders, onChangeActiveOrderType,
    activeOrderType, onRemoveItem, onOrdersChange, onProceedToPayment, selectedTable }: OrderDetailsProps) => {

    const price = orders
        .map((i) => i.product.price * i.quantity)
        .reduce((a, b) => a + b, 0);

    const disabledButton =
        !Boolean(orders.length) ||
        !Boolean(selectedTable) ||
        selectedTable === "default";

    const [priceState, setPriceState] = useState(price);

    const handleChange = (data: OrderItemType) => {
        const list = orders.map((item) =>
            item.product.id === data.product.id ? data : item
        );

        onOrdersChange(list);
    };

    useEffect(() => {
        setPriceState(price);
    }, [orders, price]);

    return (

        <S.OrderDetails>

            <S.OrderDetailsListTitle>
                Detalhes Do Seu pedido
            </S.OrderDetailsListTitle>

            <S.OrderDetailsButtonGroup>
                <ButtonToggle
                    value="Midia Física"
                    onClick={() => onChangeActiveOrderType(OrderType.MIDIA_FISICA)}
                    active={activeOrderType === OrderType.MIDIA_FISICA}
                />
                <ButtonToggle
                    value="Digital"
                    onClick={() => onChangeActiveOrderType(OrderType.MIDIA_DIGITAL)}
                    active={activeOrderType === OrderType.MIDIA_DIGITAL} />

                <ButtonToggle
                    value="Pré-Venda"
                    onClick={() => onChangeActiveOrderType(OrderType.PRE_VENDA)}
                    active={activeOrderType === OrderType.PRE_VENDA} />

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
                    list={
                        Boolean(orders.length) ? (
                            orders.map((item, index) => (
                                <OrderItem
                                    product={item.product}
                                    quantity={item.quantity}
                                    observation={item.observation}
                                    onRemoveItem={() => onRemoveItem(item.product.id)}
                                    onItemChange={handleChange}
                                    key={`OrderDetails-${index}`}
                                />
                            ))
                        ) : (
                            <S.OrderDetailsListGap />
                        )
                    }


                    footer={
                        <S.OrderDetailsListFooter>
                            <S.OrderDetailsListFooterRow>
                                <span>Subtotal</span>
                                <span>R$ {priceState.toFixed(2)}</span>
                            </S.OrderDetailsListFooterRow>
                            {(!Boolean(selectedTable) || selectedTable === "default") && (
                                <S.OrderDetailsListFooterWarning>
                                    Escolha a plataforma primeiro
                                </S.OrderDetailsListFooterWarning>
                            )}
                            <ButtonLarge
                                onClick={onProceedToPayment}
                                disabled={disabledButton}
                                value="Continue para o pagamento" />
                        </S.OrderDetailsListFooter>
                    }
                />

            </S.OrderDetailsList>

        </S.OrderDetails>

    );
}

export default OrderDetails;
