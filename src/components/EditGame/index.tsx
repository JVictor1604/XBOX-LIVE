import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";


const EditGame = () => {
    return (
        <S.EditGame>
            <>
                <S.EditGameImage src="" alt="Jogo de..." />
                <S.EditGameDetails>
                    <S.EditGameDetailsName>Nome do Produto</S.EditGameDetailsName>
                    <S.EditGameDetailsPrice>R$ 00,00</S.EditGameDetailsPrice>
                    <S.EditGameDetailsDescription>Descrição do Produto</S.EditGameDetailsDescription>
                </S.EditGameDetails>

                <S.EditGameAction>
                    <Pencil /> Editar
                </S.EditGameAction>
            </>
            <S.EditFormGroup>
                <S.EditForm
                    type="text"
                    placeholder="Título"
                />
                <S.EditForm
                    type="number"
                    placeholder="Preço"
                />
                <S.EditForm
                    type="text"
                    placeholder="Descrição"
                />
                <S.EditForm
                    type="url"
                    placeholder="Imagem"
                />
                <S.Delete>Deletar</S.Delete>
            </S.EditFormGroup>
        </S.EditGame>
    );
}

export default EditGame;
