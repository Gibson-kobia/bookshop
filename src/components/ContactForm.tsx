"use client";

import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit the contact form.");
      }

      setStatus({ type: "success", message: "Your message has been received. We will respond quickly." });
      setForm(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "An unexpected error occurred." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_80px_rgba(7,27,57,0.25)]" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-300/90">Send an inquiry</p>
        <h3 className="text-3xl font-semibold text-white">Order, quote, or ask about stock.</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-200">
          <span>Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/80"
            placeholder="Musa Jackton Okech"
            type="text"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200">
          <span>Email</span>
          <input
            required
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/80"
            placeholder="info@lavijack.co.ke"
            type="email"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-200 sm:col-span-2">
          <span>Phone</span>
          <input
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            className="w-full rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-amber-300/80"
            placeholder="0722 293377"
            type="tel"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm text-slate-200">
        <span>Message</span>
        <textarea
          required
          value={form.message}
          onChange={(event) => setForm({ ...form, message: event.target.value })}
          className="min-h-[140px] w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-slate-100 outline-none transition focus:border-amber-300/80"
          placeholder="Tell us what you need: stationery order, printing instructions, or school logo print request."
        />
      </label>

      {status ? (
        <p className={`rounded-2xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-500/15 text-emerald-200" : "bg-red-500/15 text-red-200"}`}>
          {status.message}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-950 shadow-md transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
