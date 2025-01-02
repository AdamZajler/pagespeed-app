import { Container, Divider, Stack, Typography, Link } from "@mui/material";

import { FormBox } from "@/components/form-container/FormBox";
import { LoginButtons } from "@/features/login/components/login-buttons/LoginButtons";
import { LoginForm } from "@/features/login/components/LoginForm";
import { REGISTER_PAGE_URL } from "@/features/register/router";

export function LoginContainer() {
  return (
    <Container maxWidth="xl" sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <FormBox title="Logowanie">
        <Stack spacing={6}>
          <LoginForm />
          <Divider
            sx={{
              width: "100%",
              maxWidth: 240,
              alignSelf: "center",

              "&::before,&::after": {
                borderColor: "text.primary",
              },
            }}
          >
            Lub
          </Divider>
          <LoginButtons />
          <Typography
            sx={{
              alignSelf: "center",
            }}
          >
            Nie masz konta?{" "}
            <Link
              href={REGISTER_PAGE_URL}
              sx={{ textDecoration: "underline", color: "text.primary" }}
            >
              Zarejestruj się!
            </Link>
          </Typography>
        </Stack>
      </FormBox>
    </Container>
  );
}
