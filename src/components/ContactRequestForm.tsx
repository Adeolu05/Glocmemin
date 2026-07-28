"use client";

import { useState, type FormEvent } from "react";
import { ministry } from "@/content/ministry";
import { whatsappUrl } from "@/lib/site";

type RequestType = "prayer" | "visit" | "online";

const labels: Record<RequestType, string> = {
  prayer: "I need prayer",
  visit: "I want to visit",
  online: "I want to join online",
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
        <p className="eyebrow">Send a quick note</p>
        <h2 className="display request-form__title">We are listening</h2>
        <p className="request-form__desc">
          Share a prayer need or ask to visit. We will open WhatsApp to{" "}
          {ministry.minister} with your message ready.
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
        Send on WhatsApp
      </button>
    </form>
  );
}
