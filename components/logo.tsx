import Image from "next/image";
import type { ComponentProps } from "react";

type LogoProps = Omit<ComponentProps<typeof Image>, "src" | "alt">;

export const Logo = (props: LogoProps) => {
  return (
    <Image
      src="/logotype.png"
      alt="TLRC Logo"
      {...props}
    />
  );
};
