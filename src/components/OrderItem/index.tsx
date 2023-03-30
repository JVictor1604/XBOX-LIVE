import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg"
import { ProductResponse } from "types/Product";
import { ButtonHTMLAttributes, useState, useEffect } from "react";
import { OrderItemType } from "types/ordemItemType";

type DivType = ButtonHTMLAttributes<HTMLDivElement>;

export type OrderItemProps = {
    product: ProductResponse;
    quantity: number;
    observation?: string;
    onRemoveItem?: () => void;
    onItemChange: (item: OrderItemType) => void;
    canDelete?: Boolean;
} & DivType;

const OrderItem = ({
    product,
    quantity,
    observation = "",
    onRemoveItem,
    onItemChange,
    canDelete = true,
    ...props
}: OrderItemProps) => {

    const [quantityState, setQuantityState] = useState(quantity);

    const [observationState, setObservationState] = useState(observation);

    const handleObservation = (data: string) => {
        setObservationState(data);
    };

    useEffect(() => {
        handleObservation(observation);
    }, [observation]);

    const handleQuantity = (data: number) => {
        setQuantityState(data);
    };

    const handleChange = (quantityParam: number, observationParam: string) => {
        onItemChange({
            product: product,
            quantity: quantityParam,
            observation: observationParam,
        });
    };

    useEffect(() => {
        handleQuantity(quantity);
    }, [quantity]);

    return (

        <S.OrderItem {...props} role="listitem">

            <S.OrderItemLeft>

                <S.OrderItemLeftTop>

                    <S.OrderItemProduct>

                        <S.OrderItemProductImage src={product.image} alt={`Imagem de ${product.name}`} />

                        <S.OrderItemProductDetails>

                            <S.OrderItemProductDetailsName> {product.name} </S.OrderItemProductDetailsName>
                            <S.OrderItemProductDetailsPrice> {product.price} </S.OrderItemProductDetailsPrice>

                        </S.OrderItemProductDetails>

                    </S.OrderItemProduct>

                    <S.OrderItemQuantity
                        type="number"
                        value={quantityState}
                        onChange={({ target }) => {
                            setQuantityState(Number(target.value));
                            handleChange(Number(target.value), observationState);
                        }} />

                </S.OrderItemLeftTop>

                <S.OrderItemLeftObservation
                    type="text"
                    placeholder="observações do pedido"
                    value={observationState}
                    onChange={({ target }) => {
                        setObservationState((target.value));
                    }} />

            </S.OrderItemLeft>

            <S.OrderItemRight>

                <S.OrderItemRightTotalPrice>
                    R$ {Number(product.price * quantityState).toFixed(2)}
                </S.OrderItemRightTotalPrice>

                {canDelete && (
                    <S.OrderItemRightTrash onClick={onRemoveItem}>
                        <Trash />
                    </S.OrderItemRightTrash>
                )}
            </S.OrderItemRight>

        </S.OrderItem>
    );
}

export default OrderItem;