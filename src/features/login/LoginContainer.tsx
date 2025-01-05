import { Container, Stack } from "@mui/material";

import { FormBox } from "@/components/form-container/FormBox";
import { LoginButtons } from "@/features/login/components/login-buttons/LoginButtons";

export function LoginContainer() {
  return (
    <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <FormBox title="Zaloguj się za pomocą wybranej aplikacji.">
        <Stack>
          <LoginButtons />
        </Stack>
      </FormBox>
    </Container>
  );
}
