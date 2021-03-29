import React from 'react';
import Button from '../commons/Button';
import Text from '../commons/Text';
import TextField from '../commons/TextFild';

export default function FormContact() {
  const [userInfo, setUserInfo] = React.useState({
    usuario: 'omariosouto',
    email: 'devsoutinho@gmail.com',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
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
        Lorem Ipsum is simply dummy
        text of the printing
        and typesetting industry
      </Text>

      <div>
        <TextField
          type="text"
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          type="text"
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button
        variant="ghost"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Send
      </Button>
    </form>
  );
}
