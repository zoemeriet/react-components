import React from "react";

export interface CardProps {
  title: string;
}

export function Card({ title, children}: React.PropsWithChildren<CardProps>) {
  return (
    <article>
      <h2 className="text-3xl font-bold underline">{title}</h2>
      {children}
    </article>
  );
}