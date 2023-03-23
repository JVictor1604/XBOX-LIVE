import * as S from "./style";
import { ReactComponent as Trash } from "assets/icons/trash.svg"


const OrderItem = () => {

    return (

        <S.OrderItem>

            <S.OrderItemLeft>

                <S.OrderItemLeftTop>

                    <S.OrderItemProduct>

                        <S.OrderItemProductImage src="" alt="Imagem de GTA" />

                        <S.OrderItemProductDetails>

                            <S.OrderItemProductDetailsName> GTA V </S.OrderItemProductDetailsName>
                            <S.OrderItemProductDetailsPrice> 98 </S.OrderItemProductDetailsPrice>

                        </S.OrderItemProductDetails>

                    </S.OrderItemProduct>

                    <S.OrderItemQuantity type="number" value="0" />

                </S.OrderItemLeftTop>

                <S.OrderItemLeftObservation type="text" placeholder="observações do pedido" />

            </S.OrderItemLeft>

            <S.OrderItemRight>

                <S.OrderItemRightTotalPrice>
                    R$ 150
                </S.OrderItemRightTotalPrice>

                <S.OrderItemRightTrash>
                    <Trash />
                </S.OrderItemRightTrash>

            </S.OrderItemRight>

        </S.OrderItem>
    );
}

export default OrderItem;