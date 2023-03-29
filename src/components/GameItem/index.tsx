import * as S from "./style";
import { ProductResponse } from "types/Product";

type GameItemProps = {
    product: ProductResponse
    onSelect: (data: ProductResponse) => void
}


const GameItem = ({product, onSelect}: GameItemProps) => {

    return (

        <S.GameItem role="itemlist" onClick={() => {onSelect(product)}}>
            <S.GameItemImage src={product.image} alt={`Game ${product.name}`} />
            <div>
                <S.GameItemName>{product.name}</S.GameItemName>
                <S.GameItemPrice>{product.price}</S.GameItemPrice>
                <S.GameItemDescription>{product.description}</S.GameItemDescription>
            </div>
        </S.GameItem>

    );
}


export default GameItem
