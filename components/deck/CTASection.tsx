"use client";

import { useState } from "react";

export default function CTASection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-16 lg:px-20">
      <div className="mb-8 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.42em] text-white/55">
        <span className="h-px w-14 bg-[#d4af37]" />
        Partner Invitation
      </div>

      <h2 className="display-title max-w-5xl text-5xl leading-[0.92] text-white sm:text-7xl lg:text-[8rem]">
        Lease Space.
        <br />
        Book Event.
        <br />
        Partner With Us.
      </h2>

      <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.26em] text-white/55 sm:text-[0.78rem]">
        Premium opportunities for retail, hospitality, entertainment, and global activations.
      </p>

      <div className="mt-12 flex flex-wrap gap-4">
        <a
          href="mailto:leasing@dubaimall.com"
          className="gold-gradient inline-flex min-w-44 items-center justify-center rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-[0_0_40px_rgba(212,175,55,0.28)] transition-transform hover:scale-[1.02]"
        >
          Lease Space
        </a>
        <a
          href="mailto:events@dubaimall.com"
          className="premium-outline inline-flex min-w-44 items-center justify-center rounded-full border px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white/[0.04]"
        >
          Book Event
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex min-w-44 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/20 hover:bg-white/[0.07]"
        >
          Request Info
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="glass-panel w-full max-w-xl rounded-[32px] p-6 shadow-2xl shadow-black/50 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.4em] text-[#d4af37]">
                  Request Information
                </p>
                <h3 className="display-title mt-3 text-3xl sm:text-4xl">
                  Start the conversation.
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-2xl leading-none text-white/50 transition hover:text-white"
                aria-label="Close modal"
              >
                x
              </button>
            </div>

            <form className="mt-8 grid gap-4">
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]/50"
                placeholder="Name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]/50"
                placeholder="Email"
              />
              <textarea
                rows={4}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#d4af37]/50"
                placeholder="What are you looking to launch?"
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  className="gold-gradient inline-flex items-center justify-center rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black"
                >
                  Send Inquiry
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/70 transition hover:border-white/20 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
