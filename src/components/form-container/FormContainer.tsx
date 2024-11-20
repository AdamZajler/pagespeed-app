import type { FormEventHandler, PropsWithChildren } from "react";
import type { GlobalError } from "react-hook-form";

interface Props {
  onSubmit: FormEventHandler;
  globalError: GlobalError | undefined;
}

export const FormContainer = ({ onSubmit, children, globalError }: PropsWithChildren<Props>) => {
  return (
    <form onSubmit={onSubmit}>
      {children}

      {globalError ? <h6>{globalError.message}</h6> : null}
    </form>
  );
};
