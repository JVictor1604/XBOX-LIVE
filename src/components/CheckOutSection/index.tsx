import * as S from "./style";
import OrderConfirmation from "components/OrderConfirmation";
import CheckboxIcon from "components/CheckboxIcon";
import { ReactComponent as Card } from "assets/icons/credit-card.svg";
import { ReactComponent as Cash } from "assets/icons/wallet.svg";
import { HTMLAttributes, useState } from "react";
import { OrderItemType } from "types/ordemItemType";
import { OrderType } from "types/orderType";
import { PaymentMethod } from "types/PaymentMethod";

type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
    orders: OrderItemType[];
    onOrdersChange: (orders: OrderItemType[]) => void;
    onCloseSection: () => void;
    selectedTable?: string;
    onChangeActiveOrderType: (data: OrderType) => void;
    activeOrderType: OrderType;
} & CheckoutSectionType;

const CheckoutSection = ({
    orders,
    onOrdersChange,
    onCloseSection,
    selectedTable,
    onChangeActiveOrderType,
    activeOrderType,
}: CheckoutSectionProps) => {

    const [closing, setClosing] = useState<boolean>(false);

    const [activeMethod, setActiveMethod] = useState<PaymentMethod>();

    const handleCloseSection = () => {
        setClosing(true);
        setTimeout(onCloseSection, 800);
    };

    return (
        <S.CheckoutSection closing={closing}>
            <S.CheckoutSectionConfirmation>
                <S.BackIcon onClick={handleCloseSection} />
                <OrderConfirmation
                    orders={orders}
                    onOrdersChange={onOrdersChange} />
                {"Componente OrderConfirmation"}
            </S.CheckoutSectionConfirmation>
            <S.CheckoutSectionPayment>
                <S.CheckoutSectionPaymentHead>Pagamento</S.CheckoutSectionPaymentHead>
                <S.CheckoutSectionPaymentSub>
                    2 métodos de pagamento disponíveis
                </S.CheckoutSectionPaymentSub>
                <S.CheckoutSectionPaymentForm>
                    <S.CheckoutSectionPaymentFormTitle>
                        Método de Pagamento
                    </S.CheckoutSectionPaymentFormTitle>
                    <S.PaymentForm>
                        <S.PaymentFormCheckbox>
                            <CheckboxIcon
                                onClick={() => { setActiveMethod(PaymentMethod.CARD) }}
                                active={activeMethod === PaymentMethod.CARD}
                                value="Cartão"
                                icon={<Card />} />

                            <CheckboxIcon
                                onClick={() => { setActiveMethod(PaymentMethod.CASH) }}
                                active={activeMethod === PaymentMethod.CASH}
                                value="Dinheiro"
                                icon={<Cash />} />
                        </S.PaymentFormCheckbox>
                        {activeMethod === PaymentMethod.CARD &&
                        <>
                            <S.PaymentFormGroup>
                                <label htmlFor="titular">Titular do cartão</label>
                                <input
                                    type="text"
                                    name="titular"
                                    id="titular"
                                    placeholder="José Victor Izidorio"
                                />
                            </S.PaymentFormGroup>

                            <S.PaymentFormGroup>
                                <label htmlFor="card">Número do cartão</label>
                                <input
                                    type="text"
                                    name="card"
                                    id="card"
                                    placeholder="5369 7644 5393 3165"
                                />
                            </S.PaymentFormGroup>

                            <S.PaymentFormHalf>
                                <S.PaymentFormHalfItem>
                                    <label htmlFor="validity">Validade</label>
                                    <input
                                        type="text"
                                        name="card"
                                        id="validity"
                                        placeholder="09/2023"
                                    />
                                </S.PaymentFormHalfItem>
                                <S.PaymentFormHalfItem>
                                    <label htmlFor="cvv">CVV</label>
                                    <input type="text" name="cvv" id="cvv" placeholder="218" />
                                </S.PaymentFormHalfItem>
                            </S.PaymentFormHalf>
                        </>}
                    </S.PaymentForm>
                </S.CheckoutSectionPaymentForm>
                <S.PaymentActions>
                    <S.PaymentActionsDetails>
                        <S.PaymentActionsDetailsOrderType>
                            <label htmlFor="card">Tipo de pedido</label>
                            <select
                                onChange={({ target }) =>
                                    onChangeActiveOrderType(target.value as OrderType)}
                                name="order-type"
                                id="order-type"
                                value={Object.values(OrderType)
                                    .filter((option) => option === activeOrderType)
                                    .pop()}>

                                {Object.values(OrderType).map((value, idx) => (
                                    <option key={`OrderType-${idx}`} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </S.PaymentActionsDetailsOrderType>
                        <S.PaymentActionsDetailsTableNumber>
                            <label htmlFor="card">Nome da Plataforma</label>
                            <input
                                type="text"
                                name="table"
                                id="table"
                                placeholder="Xbox Series"
                                disabled
                                value={selectedTable}
                            />
                        </S.PaymentActionsDetailsTableNumber>
                    </S.PaymentActionsDetails>

                    <S.PaymentActionsButtonGroup>
                        <S.PaymentActionsButtonGroupCancel>
                            Cancelar
                        </S.PaymentActionsButtonGroupCancel>
                        <S.PaymentActionsButtonGroupConfirm>
                            Confirmar Pagamento
                        </S.PaymentActionsButtonGroupConfirm>
                    </S.PaymentActionsButtonGroup>
                </S.PaymentActions>
            </S.CheckoutSectionPayment>
        </S.CheckoutSection>
    );
};

export default CheckoutSection;