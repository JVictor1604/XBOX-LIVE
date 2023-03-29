import { ReactComponent as Pencil } from "assets/icons/edit.svg";
import * as S from "./style";

const EditPlataform = () => {
    return (
        <S.EditPlataform>
            <>
                <S.EditPlataformDetails>
                    <S.EditPlataformDetailsName>Nome da Plataforma</S.EditPlataformDetailsName>
                </S.EditPlataformDetails>
                <S.EditPlataformAction>
                    <Pencil /> Editar
                </S.EditPlataformAction>
            </>

            <>
                <label htmlFor="plataformId">Número da mesa</label>
                <S.EditForm id="plataformId" type="number" placeholder="01" />
                <S.Deletar>Deletar plataforma</S.Deletar>
            </>
        </S.EditPlataform>
    );
};

export default EditPlataform;
