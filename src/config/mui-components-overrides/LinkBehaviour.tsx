import { forwardRef } from "react";
import Link from "next/link";

export const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
  return <Link ref={ref} {...props} />;
}) as typeof Link;
