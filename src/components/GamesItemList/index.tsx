import * as S from "./style";

interface GameItemListProps {
    children: React.ReactNode
}

const GameItemList = ({children} :GameItemListProps) => {
  return (
    <section>
      
      <S.GameItemListHeader>

        <S.GameItemListHeaderTitle> Escolha seu Game</S.GameItemListHeaderTitle>

        <S.GameItemListHeaderSelect> 

            <option value="default"> Escolha sua Plataforma </option>
            <option value=""> Plataforma </option>
        </S.GameItemListHeaderSelect>

      </S.GameItemListHeader>

      <S.GameItemList> 
        {children}
      </S.GameItemList>

    </section>
  );
};

export default GameItemList