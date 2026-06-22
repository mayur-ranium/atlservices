"use client";
import { useRouter } from "next/navigation";
import type { FormEvent, ReactNode } from "react";

type Props = {
  action: string;
  className?: string;
  children: ReactNode;
};

export default function FormSubmit({ action, className, children }: Props) {
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Send data to Formspree silently (works when real ID is configured)
    fetch(action, {
      method: "POST",
      body: new FormData(e.currentTarget),
      headers: { Accept: "application/json" },
    }).catch(() => {});
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  );
}
