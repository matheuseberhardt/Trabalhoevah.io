import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    senha: ""
  });
  
  function submit(e) {
    console.log(form);
    e.preventDefault();
  }

  const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      alignItems: "center",
      flexDirection: "column"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));

  return (
    <main>
      <div className="login">
        <Container maxWidth="sm" style={{ marginTop: 100, marginBottom: 20 }}>
          <Typography className="Textlogin">
            <h2>Acesse seu site</h2>
          </Typography>

          <form onSubmit={submit}>
            <TextField
              autoComplete="email"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="email"
              label="email"
              autoFocus
              onChange={e => setForm({ ...form, email: e.target.value })}
              style={{ marginBottom: 15 }}
            />
            <TextField
              autoComplete="senha"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="senha"
              onChange={e => setForm({ ...form, senha: e.target.value })}
              style={{ marginBottom: 15 }}
            />

            <Button fullWidth type="submit" variant="contained" color="primary">
              Login
            </Button>
            <Button
              style={{ marginTop: 10, marginBottom: 20 }}
              type="submit"
              variant="contained"
            >
              Cadastrar
            </Button>
          </form>
        </Container>
      </div>
    </main>
  );
}
