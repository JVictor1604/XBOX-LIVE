import * as S from "./style";
import BoxLogin from "components/BoxLogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import { useMutation } from "react-query";
import { ErrorResponse } from "types/api/error";
import { AuthService } from "services/AuthService";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { User } from "types/api/user";
import { Login as LoginData, LoginResponse } from "types/api/login";


const Login = () => {

  const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const mutation = useMutation(AuthService.login, {
      onSuccess: (data: LoginResponse & ErrorResponse) => {
        if (data.statusCode) {
          setErrorMessage(data.message);
          return;
        }
        if (data.token && data.user) {
          LocalStorageHelper.set<string>(LocalStorageKeys.TOKEN, data.token);
          LocalStorageHelper.set<User>(LocalStorageKeys.USER, data.user);
          navigate(RoutePath.HOME);
        }
        setErrorMessage("Tente novamente!");
      },
  
      onError: () => {
        setErrorMessage("Ocorreu um erro durante a requisição");
      },
    });
  
    const handleSubmit = (data: LoginData) => {
      mutation.mutate(data);
      setErrorMessage("");
    };
  

  return (
    <S.Login>
    
    <S.LoginContent>
        <BoxLogin
        onSubmitData={handleSubmit}
        errorMessage={errorMessage} />  
    </S.LoginContent>

    </S.Login>
  );
};

export default Login;