import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteTitle, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteName}`,
  description: `Privacy policy for ${siteUrl}.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f4f2ec]">
      <div className="shell py-16 md:py-24">
        <Link
          href="/"
          className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#476a75] transition hover:text-[#244f5a]"
        >
          ← Back to portfolio
        </Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-[#111517] md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-[#6d777c]">Last updated: June 1, 2026</p>

        <div className="prose-policy mt-10 space-y-8 text-base leading-7 text-[#4e575c]">
          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Overview</h2>
            <p className="mt-3">
              This site ({siteUrl}) is a personal portfolio operated by {siteName}. This policy
              explains what information may be collected when you visit the site and how it is used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Information collected</h2>
            <p className="mt-3">
              The site may use privacy-friendly analytics to understand aggregate traffic (for
              example, page views and referrers). Analytics providers do not receive information
              you submit through email or other off-site channels unless you choose to share it.
            </p>
            <p className="mt-3">
              Standard web server logs from the hosting provider may include IP address, browser
              type, and requested pages for security and reliability.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">How information is used</h2>
            <p className="mt-3">
              Information is used to operate, secure, and improve the site, and to understand
              general audience interest in the portfolio. It is not sold.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Third-party links</h2>
            <p className="mt-3">
              The site links to external services such as GitHub and LinkedIn. Those services have
              their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              <a
                className="font-semibold text-[#244f5a] underline-offset-2 hover:underline"
                href="mailto:jordan@goodlydevelopment.com"
              >
                jordan@goodlydevelopment.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-[#6d777c]">{siteTitle}</p>
      </div>
    </main>
  );
}
