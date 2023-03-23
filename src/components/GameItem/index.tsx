import * as S from "./style";

const GameItem = () => {
    return (

        <S.GameItem>
            <S.GameItemImage src="" alt="" />
            <div>
                <S.GameItemName>Nome do Produto</S.GameItemName>
                <S.GameItemPrice>R$ 10.00</S.GameItemPrice>
                <S.GameItemDescription>Descrição do produto</S.GameItemDescription>
            </div>
        </S.GameItem>

    );
}


export default GameItem