import React from 'react';
import Button from '../commons/Button';
import Text from '../commons/Text';
import TextField from '../commons/TextFild';
import { Box } from '../../layout/Box';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

export default function FormContact() {
  const [formSubmited, setformSubmited] = React.useState(false);
  const [status, setStatus] = React.useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = React.useState({
    user: 'omariosouto1002',
    name: 'Mario Souto',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.user.length === 0 || userInfo.name.length === 0;
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setformSubmited(true);

        // Data Transfer Object
        const userDTO = {
          username: userInfo.user,
          name: userInfo.name,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((respostaConvertidaEmObjeto) => {
            setStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text
        type="subTitle"
        tag="h2"
        color="secondary"
        margin="16px 0px 0px 0px"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        type="paragraphy"
        tag="p"
        color="secondary"
        margin="16px 0px 0px 0px"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </Text>

      <div>
        <TextField
          type="text"
          placeholder="name"
          name="name"
          value={userInfo.name}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          type="text"
          placeholder="Usuário"
          name="user"
          value={userInfo.user}
          onChange={handleChange}
        />
      </div>

      <Button variant="ghost" type="submit" disabled={isFormInvalid} fullWidth>
        Send
      </Button>

      {formSubmited && status === formStates.DONE && (
        <Box>
          {/* <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          /> */}
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}

      {formSubmited && status === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          {/* <Lottie
            width="150px"
            height="150px"
            config={{ animationData: errorAnimation, loop: true, autoplay: true }}
          /> */}
          {/* https://lottiefiles.com/43920-success-alert-icon */}
        </Box>
      )}
    </form>
  );
}
