type Project = {
  title: string;
  label: string;
  summary: string;
  subtitle?: string;
  role: string;
  stack: string[];
  points: string[];
  context: string;
  approach: string;
  challenges: string[];
  outcome: string;
  visual: "sales" | "healthcare" | "calculator" | "scheduler";
};

const strengths = [
  {
    title: "Rapid MVP-to-production execution",
    description:
      "Turning unclear requirements into working software while keeping an eye on maintainability and long-term fit.",
  },
  {
    title: "Client and stakeholder communication",
    description:
      "Clarifying workflows, constraints, and tradeoffs with both technical and non-technical stakeholders.",
  },
  {
    title: "AI-assisted workflow development",
    description:
      "Building practical AI features around real business processes, not just demos.",
  },
  {
    title: "Legacy modernization",
    description:
      "Rebuilding older systems into maintainable, responsive, production-ready applications.",
  },
  {
    title: "Full-stack product engineering",
    description:
      "Owning frontend, backend, data, deployment, UX flow, and product behavior.",
  },
  {
    title: "Technical leadership and architecture",
    description:
      "Leading architecture decisions, untangling complex systems, and guiding projects from idea to delivery.",
  },
];

const projects: Project[] = [
  {
    title: "AI-Assisted Sales iOS App",
    label: "Anonymized NDA Case Study",
    subtitle:
      "Real-time call transcription, document parsing, and contract-field matching for sales teams.",
    summary:
      "Led architecture and development of a fully functional AI-assisted sales iOS app that combined telephony, real-time transcription, document parsing, and structured field matching to help agents capture contract-relevant information during live calls.",
    role: "Lead Engineer / Architect",
    stack: [
      "SwiftUI",
      "Core Data/SQLite",
      "Node.js",
      "Express",
      "Twilio Voice SDK",
      "Twilio Media Streams",
      "WebSockets",
      "OpenAI Whisper API",
      "Azure Container Instance",
      "Azure Storage",
    ],
    points: [
      "Led a small team with QA and PM/engineering support",
      "Owned product and architecture decisions end-to-end",
      "Built the iOS app, backend, AI/transcription flow, telephony integration, and notifications",
      "Revised the call-stream architecture after early testing showed lifecycle/hangup issues",
      "Worked through noisy transcription data and short audio chunk parsing",
      "Delivered a field-tested, production-ready MVP with strong stakeholder response",
    ],
    context:
      "The work needed to connect live call behavior, mobile UX, AI transcription, document parsing, and structured business data without adding unnecessary overhead for agents.",
    approach:
      "I kept the architecture explicit: mobile app state, voice stream handling, transcription, extraction, field matching, and feedback were treated as separate concerns with clear failure modes and practical observability.",
    challenges: [
      "Early call lifecycle behavior exposed hangup and stream edge cases that required a revised integration path.",
      "Short audio chunks and noisy transcripts needed conservative parsing so the product stayed useful in real calls.",
      "NDA constraints required keeping the demo abstract while still proving the technical system.",
    ],
    outcome:
      "Delivered a field-tested, production-ready MVP that combined iOS, telephony, AI transcription, document parsing, and structured field matching. Stakeholders responded strongly to the result and discussed production rollout before the project was paused for business reasons.",
    visual: "sales",
  },
  {
    title: "Healthcare Platform Modernization",
    label: "Production Migration Case Study",
    summary:
      "Led migration of two production healthcare applications from legacy ASP.NET WebForms / .NET Framework to Blazor Server / .NET 8: a patient appointment-booking platform and a provider scheduling/profile-management system.",
    role: "Architect / Lead Software Engineer",
    stack: [
      "ASP.NET WebForms",
      ".NET Framework",
      "Blazor Server",
      ".NET 8",
      "DDD-style architecture",
    ],
    points: [
      "Migrated two live healthcare workflow applications",
      "Apps are used by patients, providers, and admins",
      "Legacy applications are being retired",
      "Untangled deeply nested generated WebForms code from an older visual-builder style tool",
      "Recreated complex scheduling and availability logic coherently",
      "Balanced modernization, new feature work, and behavior parity under time/budget constraints",
      "Improved UX, responsiveness, maintainability, and loading performance",
      "Codebase became significantly easier to maintain, estimated 50%+ improvement",
    ],
    context:
      "Two production healthcare applications needed to move away from older generated WebForms code while preserving critical booking, provider, and admin workflows.",
    approach:
      "I separated domain behavior from UI concerns, rebuilt the scheduling model around clearer concepts, and used the migration to improve responsiveness without losing behavior parity.",
    challenges: [
      "The legacy code was deeply nested and generated from an older visual-builder style tool.",
      "Scheduling and availability rules had to be reconstructed coherently rather than copied as tangled UI logic.",
      "The migration had to balance new feature work, parity, time, and budget.",
    ],
    outcome:
      "The modernized applications improved UX, responsiveness, maintainability, and loading performance while the legacy applications move toward retirement.",
    visual: "healthcare",
  },
  {
    title: "Specialized Manufacturing Design Calculator",
    label: "Anonymized NDA Case Study",
    summary:
      "Architected and built a web-based design calculator that replaced a spreadsheet-driven process for a specialized manufacturing and training workflow. The app guides users through structured inputs, performs domain-specific calculations, and generates visual diagrams to support estimating, training, and production planning.",
    role: "Sole Architect / Builder",
    stack: ["React Router", "Shopify theme app extension", "Shopify page integration"],
    points: [
      "Replaced a spreadsheet-based workflow with a guided application",
      "Built calculation logic and generated visual diagram outputs",
      "Worked closely with the domain owner to understand specialized requirements",
      "Validated Shopify/theme extension constraints before committing to the implementation path",
      "Treated the original spreadsheet as the source of truth",
      "Created tests early to validate app calculations against known spreadsheet outputs",
      "Live as version 1 and being used/demoed by select invited users while preparing for broader launch",
    ],
    context:
      "A specialized workflow lived in a spreadsheet that carried both business logic and training context. The goal was to make the workflow easier to use without losing the spreadsheet's known outputs.",
    approach:
      "I treated the spreadsheet as the source of truth, validated platform constraints early, and built tests around known outputs before expanding the guided app experience.",
    challenges: [
      "The implementation had to respect platform constraints inside Shopify integration points.",
      "The app needed to generate useful diagrams without exposing proprietary formulas or design logic.",
      "Domain understanding mattered as much as UI execution because the original workflow encoded specialized judgment.",
    ],
    outcome:
      "Version 1 is live for select invited users and is being used/demoed while preparing for a broader launch.",
    visual: "calculator",
  },
  {
    title: "Laundry Co. Shift Scheduler",
    label: "Live Public/Personal Product",
    summary:
      "Built a production scheduling platform for a real small-business operation, used by managers and staff to manage shifts, time off, shift swaps, weekly hours, and notifications.",
    role: "Solo Full-Stack Developer",
    stack: [
      "Next.js 14",
      "React",
      "Tailwind CSS",
      "shadcn-style components",
      "NextAuth",
      "PostgreSQL/Vercel Postgres",
      "Drizzle ORM",
      "Resend email",
      "Web Push/VAPID",
    ],
    points: [
      "Managers can create, assign, edit, publish, cancel, and restore shifts",
      "Supports standard and recurring schedules",
      "Employees can view weekly/monthly schedules",
      "Employees can request time off and shift swaps",
      "Includes in-app, email, and browser push notifications",
      "Live and used by the business team",
    ],
    context:
      "A real small-business operation needed a practical scheduling system for managers and staff, with enough workflow coverage to replace manual coordination.",
    approach:
      "I built the product as an operational tool first: schedule creation, publishing, employee visibility, requests, swaps, and notifications were designed around repeat use by a working team.",
    challenges: [
      "Recurring schedules, cancellations, restoration, and weekly hours all needed predictable behavior.",
      "Notifications had to support multiple channels without making the workflow noisy.",
      "The product needed to stay compact enough for small-business use while covering real scheduling cases.",
    ],
    outcome:
      "The scheduler is live and used by the business team to manage shifts, time off, swaps, weekly hours, and notifications.",
    visual: "scheduler",
  },
];

const resumeLinks = [
  {
    title: "Senior Software Engineer Resume",
    description: "best for senior IC/full-stack roles",
    href: "/resumes/Senior_Full_Stack_PDF_3_10_26.pdf",
  },
  {
    title: "Lead Software Engineer Resume",
    description: "best for technical lead, architect, or team-lead-leaning roles",
    href: "/resumes/Technical_Lead_PDF_3_10_26.pdf",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "jordan@goodlydevelopment.com",
    href: "mailto:jordan@goodlydevelopment.com",
  },
  {
    label: "GitHub",
    value: "github.com/Jordan1022",
    href: "https://github.com/Jordan1022",
  },
  {
    label: "LinkedIn",
    value: "jordan-allen-gd",
    href: "https://www.linkedin.com/in/jordan-allen-gd/",
  },
];

function Badge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "dark" }) {
  return (
    <span
      className={
        tone === "dark"
          ? "inline-flex max-w-full items-center whitespace-normal border border-white/14 bg-white/7 px-3 py-1 text-left text-xs font-medium leading-snug text-slate-200"
          : "inline-flex max-w-full items-center whitespace-normal border border-[#d6d1c6] bg-[#f7f5ef] px-3 py-1 text-left text-xs font-medium leading-snug text-[#445156]"
      }
    >
      {children}
    </span>
  );
}

function SectionHeading({
  id,
  title,
  copy,
}: {
  id?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div id={id} className="mb-10 max-w-3xl scroll-mt-24">
      <h2 className="text-3xl font-semibold tracking-tight text-[#111517] md:text-4xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 text-base leading-7 text-[#5f676d] md:text-lg">{copy}</p> : null}
    </div>
  );
}

function HeroDiagram() {
  return (
    <div className="rounded-sm border border-white/12 bg-white/[0.045] p-5 shadow-2xl shadow-black/20">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="font-mono text-xs text-slate-300">delivery-system.map</span>
        <span className="h-2 w-2 bg-[#8db5bf]" />
      </div>
      <div className="grid gap-3">
        {[
          ["Ambiguity", "Requirements", "Architecture"],
          ["Prototype", "Integration", "Production"],
          ["Feedback", "Tradeoffs", "Shipped"],
        ].map((row) => (
          <div key={row.join("-")} className="grid grid-cols-3 gap-3">
            {row.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-[#12191c] px-3 py-4 text-center font-mono text-[11px] font-medium text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="h-px bg-white/12" />
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#a7c7cf]">
          judgment over noise
        </span>
        <div className="h-px bg-white/12" />
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "sales") {
    return (
      <div className="space-y-5">
        {/* Swap this abstract system flow for an approved anonymized diagram if one becomes available. */}
        <div className="grid grid-cols-[1fr_24px_1fr] items-center gap-3">
          <div className="diagram-node">Mobile App</div>
          <div className="diagram-connector" />
          <div className="diagram-node">Voice Stream</div>
        </div>
        <div className="grid grid-cols-[1fr_24px_1fr_24px_1fr] items-center gap-3">
          <div className="diagram-node">Transcription</div>
          <div className="diagram-connector" />
          <div className="diagram-node">Extraction</div>
          <div className="diagram-connector" />
          <div className="diagram-node">Field Matching</div>
        </div>
        <div className="diagram-node">Agent Feedback</div>
      </div>
    );
  }

  if (type === "healthcare") {
    return (
      <div className="space-y-5">
        <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-3">
          <div className="diagram-node bg-[#f2eee5]">Legacy WebForms</div>
          <div className="diagram-connector" />
          <div className="diagram-node bg-[#e7eef0]">Blazor / .NET 8</div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["Patient", "Provider", "Admin"].map((item) => (
            <div key={item} className="diagram-node min-h-16">
              {item} Flow
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["Live in production", "Responsive UI", "Faster load times", "Cleaner architecture", "Legacy apps retiring"].map((item) => (
            <div key={item} className="border border-[#d6d1c6] bg-white px-3 py-3 text-sm font-medium text-[#344046]">
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (type === "calculator") {
    return (
      <div className="space-y-5">
        {/* Keep this generic until approved calculator screenshots or diagrams can be used. */}
        <div className="grid grid-cols-[1fr_32px_1fr] items-center gap-3">
          <div className="diagram-node">Spreadsheet</div>
          <div className="diagram-connector" />
          <div className="diagram-node">Full-Stack App</div>
        </div>
        <div className="border border-[#d6d1c6] bg-white p-4">
          <div className="mb-3 h-3 w-28 bg-[#d9d5cb]" />
          <div className="grid gap-2">
            <div className="h-8 border border-[#e1ddd3] bg-[#f8f6f1]" />
            <div className="h-8 border border-[#e1ddd3] bg-[#f8f6f1]" />
            <div className="h-8 border border-[#e1ddd3] bg-[#f8f6f1]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="diagram-node min-h-20">Cross-section View</div>
          <div className="diagram-node min-h-20">Side View</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Replace with real Laundry Co. screenshots or a demo still when final assets are ready. */}
      <div className="border border-[#d6d1c6] bg-white p-4">
        <p className="mb-4 text-sm leading-6 text-[#4e575c]">
          Screenshots and a product walkthrough can be added here to show the live scheduling workflow used by managers and staff.
        </p>
        <div className="mb-3 flex items-center justify-between">
          <div className="h-3 w-28 bg-[#d9d5cb]" />
          <div className="h-3 w-16 bg-[#c7d7dc]" />
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 28 }).map((_, index) => (
            <div
              key={index}
              className={`h-10 border border-[#e1ddd3] ${
                index % 5 === 0 || index % 7 === 0 ? "bg-[#e7eef0]" : "bg-[#f8f6f1]"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["Shifts", "Time off", "Swaps"].map((item) => (
          <div key={item} className="diagram-node">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card grid gap-6 overflow-hidden border border-[#d9d5cb] bg-[#fbfaf7] p-5 shadow-sm md:grid-cols-[1.05fr_0.95fr] md:gap-8 md:p-7">
      <div>
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge>{project.label}</Badge>
          <Badge>{project.role}</Badge>
        </div>
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#6d777c]">
          0{index + 1}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-[#111517] md:text-3xl">
          {project.title}
        </h3>
        {project.subtitle ? (
          <p className="mt-3 text-sm font-semibold leading-6 text-[#476a75]">{project.subtitle}</p>
        ) : null}
        <p className="mt-4 text-base leading-7 text-[#4e575c]">{project.summary}</p>
        <ul className="mt-6 grid gap-2">
          {project.points.slice(0, 4).map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-[#4e575c]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#476a75]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid content-between gap-6">
        <div className="border border-[#d9d5cb] bg-[#f2eee5] p-4">
          <ProjectVisual type={project.visual} />
        </div>
        <details className="group border-t border-[#d9d5cb] pt-5">
          <summary className="cursor-pointer list-none text-sm font-semibold text-[#1c2529]">
            <span className="inline-flex items-center gap-3">
              Read case study
              <span className="text-[#476a75] transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <div className="case-study-body mt-6">
            <div>
              <h4>Overview</h4>
              <p>{project.summary}</p>
            </div>
            <div>
              <h4>Context</h4>
              <p>{project.context}</p>
            </div>
            <div>
              <h4>My role</h4>
              <p>{project.role}</p>
            </div>
            <div>
              <h4>Technical approach</h4>
              <p>{project.approach}</p>
            </div>
            <div>
              <h4>Key challenges</h4>
              <ul>
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Outcome</h4>
              <p>{project.outcome}</p>
            </div>
            <div>
              <h4>Stack</h4>
              <div className="flex flex-wrap items-start gap-x-2 gap-y-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4>Visual / diagram</h4>
              <p>
                The visual treatment is intentionally generic for anonymized work and can be replaced with approved diagrams or public screenshots later.
              </p>
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101416]/88 backdrop-blur">
        <nav className="shell flex h-16 items-center justify-between">
          <a href="#top" className="text-sm font-semibold text-white">
            Jordan Allen
          </a>
          <div className="hidden items-center gap-3 text-sm text-slate-300 md:flex">
            {[
              ["Work", "#work"],
              ["Approach", "#approach"],
              ["Resumes", "#resumes"],
              ["Contact", "#contact"],
            ].map(([label, href], index, links) => (
              <span key={label} className="inline-flex items-center gap-3">
                <a className="hover:text-white" href={href}>
                  {label}
                </a>
                {index < links.length - 1 ? <span className="text-slate-600">·</span> : null}
              </span>
            ))}
          </div>
        </nav>
      </header>

      <section id="top" className="soft-grid bg-[#101416] py-20 text-white md:py-28">
        <div className="shell grid gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
          <div>
            <p className="text-lg font-medium text-slate-300">Senior Full-Stack Engineer & Technical Lead</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.04]">
              Jordan Allen
            </h1>
            <p className="mt-6 max-w-3xl text-2xl leading-tight text-slate-100 md:text-3xl">
              I help teams turn ambiguous business problems into shipped software through strong architecture, full-stack execution, and practical product judgment.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              I design and build software for complex workflows — from AI-assisted sales tools to healthcare scheduling platforms, specialized design calculators, and operational systems used by real teams.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="border border-[#9fc1c9] bg-[#9fc1c9] px-5 py-3 text-sm font-semibold text-[#111719] transition hover:bg-[#bdd4d9]"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/45"
              >
                Contact Me
              </a>
              <a
                href="#resumes"
                className="border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/45"
              >
                View Resumes
              </a>
            </div>
          </div>
          <HeroDiagram />
        </div>
      </section>

      <section className="border-b border-[#d9d5cb] bg-[#f8f6f1] py-16 md:py-20">
        <div className="shell">
          <SectionHeading
            title="Core strengths"
            copy="The throughline in my work is practical ownership: making the problem clearer, choosing an architecture that fits, and carrying the product through delivery."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength) => (
              <article key={strength.title} className="border border-[#d9d5cb] bg-white p-5">
                <h3 className="text-lg font-semibold tracking-tight text-[#111517]">{strength.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f676d]">{strength.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            id="work"
            title="Featured work"
            copy="Four projects that show architecture, modernization, AI workflow development, and full-stack product execution. Confidential work is intentionally anonymized."
          />
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 border-y border-[#d9d5cb] bg-[#101416] py-16 text-white md:py-24">
        <div className="shell grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">About / approach</h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl leading-8 text-slate-100">
              I’m a senior full-stack engineer and technical lead focused on building practical software for complex workflows. Much of my work sits at the intersection of product judgment, architecture, and implementation: clarifying ambiguous requirements, modernizing legacy systems, integrating AI where it creates real workflow value, and shipping software that teams actually use.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Architecture that fits the problem", "Implementation across the stack", "Product judgment under constraints"].map((item) => (
                <div key={item} className="border border-white/12 bg-white/[0.045] p-4 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resumes" className="scroll-mt-24 border-b border-[#d9d5cb] bg-[#f8f6f1] py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            title="Resumes"
            copy="Two versions are available depending on the role focus."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {resumeLinks.map((resume) => (
              <a
                key={resume.title}
                href={resume.href}
                target="_blank"
                rel="noreferrer"
                className="group border border-[#d9d5cb] bg-white p-6 transition hover:border-[#476a75]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-[#111517]">{resume.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5f676d]">{resume.description}</p>
                <span className="mt-6 inline-flex text-sm font-semibold text-[#476a75] group-hover:text-[#2f535e]">
                  View PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-16 md:py-24">
        <div className="shell grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#111517] md:text-4xl">Contact / links</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5f676d]">
              I’m interested in senior full-stack, technical lead, and architecture-heavy product engineering roles where judgment and delivery both matter.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "noreferrer" : undefined}
                className="flex items-center justify-between border border-[#d9d5cb] bg-white px-5 py-4 text-sm font-semibold text-[#111517] transition hover:border-[#476a75]"
              >
                <span>{link.label}</span>
                <span className="font-normal text-[#6d777c]">{link.value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d9d5cb] py-8">
        <div className="shell flex flex-col gap-3 text-sm text-[#6d777c] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Jordan Allen.</p>
          <p>Senior Full-Stack Engineer & Technical Lead</p>
        </div>
      </footer>
    </main>
  );
}
