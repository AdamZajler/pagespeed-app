import { Container } from "@mui/material";

import { FormBox } from "@/components/form-container/FormBox";
import { LoginButtons } from "@/features/login/components/login-buttons/LoginButtons";
import { LoginForm } from "@/features/login/components/LoginForm";

export function LoginContainer() {
  return (
    <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <FormBox title="Logowanie">
        <LoginForm />
        <LoginButtons />
      </FormBox>
    </Container>
  );
}
