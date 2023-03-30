import * as S from "./style";

interface GameItemListProps {
  onSelectTable: (data: string) => void;
  children: React.ReactNode
}

const GameItemList = ({ children, onSelectTable }: GameItemListProps) => {
  return (
    <section>

      <S.GameItemListHeader>

        <S.GameItemListHeaderTitle> Escolha seu Game</S.GameItemListHeaderTitle>

        <S.GameItemListHeaderSelect
          onChange={({ target }) => onSelectTable(target.value)}
          name="plataforma"
          id="plataforma">

          <option value="default"> Escolha sua Plataforma </option>
          <option value="Xbox Serie"> Xbox Serie </option>
          <option value="Xbox 360"> Xbox 360 </option>
        </S.GameItemListHeaderSelect>

      </S.GameItemListHeader>

      <S.GameItemList>
        {children}
      </S.GameItemList>

    </section>
  );
};

export default GameItemList