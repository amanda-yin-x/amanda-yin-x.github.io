"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input, Textarea } from "./form-fields";
import { motion } from "framer-motion";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!email || !message) {
      setStatus("error");
      return;
    }

    const body = encodeURIComponent(`${message}\n\nFrom: ${name || "Someone"} <${email}>`);
    const mailto = `mailto:yixin.yin@mail.utoronto.ca?subject=Hello from your site&body=${body}`;
    window.location.href = mailto;
    setStatus("sent");
    form.reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-2xl border border-border bg-white/80 p-4 shadow-soft backdrop-blur-soft"
      whileHover={{ translateY: -4 }}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <Input name="name" label="Name" placeholder="Your name" />
        <Input
          name="email"
          label="Email"
          type="email"
          required
          placeholder="you@example.com"
        />
      </div>
      <Textarea
        name="message"
        label="Message"
        required
        placeholder="What would you like to chat about?"
      />
      <div className="flex items-center gap-3">
        <Button type="submit">Send message</Button>
        {status === "sent" ? (
          <span className="text-sm font-semibold text-primary">Opening email client…</span>
        ) : null}
        {status === "error" ? (
          <span className="text-sm font-semibold text-accent">Please add your email and message.</span>
        ) : null}
      </div>
    </motion.form>
  );
}
