"use client";

import { useState, type FormEvent } from "react";
import { ministry } from "@/content/ministry";
import { whatsappUrl } from "@/lib/site";

type RequestType = "prayer" | "visit" | "online";

const labels: Record<RequestType, string> = {
  prayer: "Prayer request",
  visit: "Plan a visit",
  online: "Join online",
};

export function ContactRequestForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState<RequestType>("prayer");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim() || "A visitor";
    const trimmedMessage = message.trim() || "Please follow up with me.";
    const body = [
      `GLOCMEMIN ${labels[type]}`,
      `Name: ${trimmedName}`,
      "",
      trimmedMessage,
      "",
      `Sent from the ${ministry.shortName} website`,
    ].join("\n");

    window.open(whatsappUrl(body), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="request-form" onSubmit={onSubmit}>
      <div className="request-form__head">
        <p className="eyebrow">Write to us</p>
        <h2 className="display request-form__title">Prayer or visit request</h2>
        <p className="request-form__desc">
          Send a short note. It opens WhatsApp to {ministry.minister} with your
          message ready to send.
        </p>
      </div>

      <label className="request-form__field">
        <span>Your name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          placeholder="e.g. Adeola"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <fieldset className="request-form__field">
        <legend>Request type</legend>
        <div className="request-form__types">
          {(Object.keys(labels) as RequestType[]).map((value) => (
            <label key={value} className="request-form__type">
              <input
                type="radio"
                name="type"
                value={value}
                checked={type === value}
                onChange={() => setType(value)}
              />
              <span>{labels[value]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="request-form__field">
        <span>Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Share your request or ask how to join a program…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>

      <button type="submit" className="btn btn-primary">
        Continue on WhatsApp
      </button>
    </form>
  );
}
