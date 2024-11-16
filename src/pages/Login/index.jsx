import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica para tratar o login
    console.log('Login:', login);
    console.log('Senha:', senha);
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: 'auto',
        marginTop: 8,
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff'
      }}
    >
      <Typography variant="h5" component="h1" align="center" gutterBottom>
        Tela de Login
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="login_nome">Login</InputLabel>
            <Input
              id="login_nome"
              aria-describedby="login_nome_helper_text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <FormHelperText id="login_nome_helper_text">Digite seu login</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="login_senha">Senha</InputLabel>
            <Input
              id="login_senha"
              type="password"
              aria-describedby="login_senha_helper_text"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <FormHelperText id="login_senha_helper_text">Digite sua senha</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ marginTop: 2 }}
          >
            Entrar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
