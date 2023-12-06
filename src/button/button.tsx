import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  kind?: "primary" | "secondary";
}
 
export function Button({ children}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button className={`p-3 bg-black text-white`}>
      {children}
    </button>
  );
}