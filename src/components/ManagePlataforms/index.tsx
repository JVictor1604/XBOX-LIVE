import { HTMLAttributes } from "react";
import { ReactComponent as Add } from "assets/icons/add.svg";
import * as S from "./style";
import EditPlataform from "components/EditPlataform";

type ManagePlataformsType = HTMLAttributes<HTMLDivElement>;

type ManagePlataformsProps = {} & ManagePlataformsType;

const ManagePlataforms = ({ ...props }: ManagePlataformsProps) => {
    return (
        <S.ManagePlataforms {...props}>
            <S.ManagePlataformsTitle>Gerenciar Plataformas</S.ManagePlataformsTitle>
            <S.ManagePlataformsSub>
                <b>Plataformas</b>
            </S.ManagePlataformsSub>
            <S.ManagePlataformsContent>
                <S.ManagePlataformsContentAdd>
                    <Add />
                    <span>Adicionar PLataforma</span>
                </S.ManagePlataformsContentAdd>
                <S.ManagePlataformsContentAdd>
                    <label htmlFor="plataformId">Nome da PLataforma</label>
                    <S.EditForm id="plataformId" type="number" placeholder="01" />
                </S.ManagePlataformsContentAdd>
                <EditPlataform />
            </S.ManagePlataformsContent>
            <S.ManagePlataformsActions>
                <S.ManagePlataformsActionsCancel>Cancelar</S.ManagePlataformsActionsCancel>
                <S.ManagePlataformsActionsSave>Salvar Mudanças</S.ManagePlataformsActionsSave>
            </S.ManagePlataformsActions>
        </S.ManagePlataforms>
    );
};

export default ManagePlataforms;