import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteTitle, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteName}`,
  description: `Terms of service for ${siteUrl}.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-[#6d777c]">Last updated: June 1, 2026</p>

        <div className="prose-policy mt-10 space-y-8 text-base leading-7 text-[#4e575c]">
          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Agreement</h2>
            <p className="mt-3">
              By accessing {siteUrl}, you agree to these terms. If you do not agree, please do not
              use the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Purpose of the site</h2>
            <p className="mt-3">
              This site presents professional work, experience, and contact information for{" "}
              {siteName}. Content is provided for informational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Intellectual property</h2>
            <p className="mt-3">
              Site design, text, and branding are owned by {siteName} unless otherwise noted.
              Case studies may describe anonymized client work; do not reproduce proprietary details
              without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Disclaimer</h2>
            <p className="mt-3">
              The site is provided as is without warranties. {siteName} is not liable for damages
              arising from use of the site or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Changes</h2>
            <p className="mt-3">
              These terms may be updated from time to time. Continued use of the site after changes
              are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111517]">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
