import { z } from "zod";
import { customErrorMap } from "@/config/zod/errorMap";

z.setErrorMap(customErrorMap);

export const SetUpValuesSchema = z.object({
  apiKey: z.string().min(16, { message: "Klucz API musi mieć co najmniej 16 znaków" }),
  urlAddress: z
    .string()
    .url({ message: "Podany adres URL jest nieprawidłowy" })
    .refine(
      (url) => {
        // Sprawdź czy URL zaczyna się od https://
        if (!url.startsWith("https://")) {
          return false;
        }
        try {
          const urlObj = new URL(url);
          // Usuń protokół (https://) z oryginalnego URL-a
          const originalWithoutProtocol = url.replace(/^https:\/\//, "");
          // Usuń protokół z przetworzonego URL-a
          const processedWithoutProtocol = urlObj.host;

          // Sprawdź czy URL nie ma ścieżki, parametrów i czy dokładnie odpowiada domenie
          return (
            !urlObj.pathname.slice(1) && // pathname powinien być pusty (bez /)
            !urlObj.search &&
            !urlObj.hash &&
            originalWithoutProtocol === processedWithoutProtocol // dokładne porównanie
          );
        } catch {
          return false;
        }
      },
      {
        message:
          "Adres URL musi być w formacie https://domena.pl bez żadnych dodatkowych elementów",
      },
    ),
});

export type SetUpFormValues = z.infer<typeof SetUpValuesSchema>;
