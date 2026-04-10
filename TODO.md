# TODO

## Contact Form: Automate the Lead Magnet Flow

**Current state:** The contact form (`src/components/contact-form.tsx`) posts
to Netlify Forms. Submissions land in the Netlify dashboard (Forms section)
and Ray gets an email notification. Ray replies manually with the rate card.

**Where the form is registered:** The static form in `src/app/layout.tsx`
tells Netlify at build time that a form named `contact` exists. The client
component POSTs form-urlencoded data to `/` with `form-name=contact` so
Netlify routes the submission correctly.

**What's missing — the automated flow we actually want:**

1. **Auto-reply with the rate card.** When someone submits, they should
   immediately receive an email with a PDF rate card attached (pricing for
   clarity sessions, accelerator, pay-as-you-go).
2. **Ray gets a rich notification** — not just the raw form data, but a
   formatted email that makes it easy to decide how to respond.
3. **Optional: store leads somewhere searchable** (Airtable, Notion, or
   similar) for follow-up tracking.

**How to build it:**

- Create a Netlify Function at `netlify/functions/contact-submission.ts` that
  triggers on the form submission event (Netlify has a built-in
  `submission-created` event hook).
- Use [Resend](https://resend.com) for the transactional email (free tier,
  good DX, no domain setup required for getting started).
- Attach the rate card PDF (store it in `public/rate-card.pdf` or as a Resend
  attachment).
- Send two emails: one to the submitter (auto-reply with rate card) and one
  to Ray (formatted notification).

**Required assets before building:**

- [ ] Rate card PDF (draft pricing: $800/hr pay-as-you-go, $6,000 accelerator)
- [ ] Resend account + API key
- [ ] Decision: "from" address for the auto-reply (e.g. `ray@raydeck.com`
      or `hello@raydeck.com` — will need DNS setup with Resend to send from
      raydeck.com)

**Reference:**
- [Netlify Function triggers on form submission](https://docs.netlify.com/functions/trigger-on-events/)
- [Resend Node.js quickstart](https://resend.com/docs/send-with-nodejs)
