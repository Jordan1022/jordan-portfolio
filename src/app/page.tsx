type Project = {
  title: string;
  label: string;
  summary: string;
  role: string;
  stack: string[];
  points: string[];
  context: string;
  approach: string;
  challenges: string[];
  outcome: string;
  visual: "sales" | "healthcare" | "calculator" | "scheduler";
  artifactTitle: string;
  evidence: string;
};

const strengths = [
  {
    title: "Clarify ambiguous work",
    description:
      "Turn loose business goals, legacy behavior, and stakeholder input into a buildable product path.",
  },
  {
    title: "Choose architecture that fits",
    description:
      "Separate concerns, preserve important constraints, and avoid complexity that does not serve the workflow.",
  },
  {
    title: "Ship across the stack",
    description:
      "Own frontend, backend, data, integrations, deployment, and the practical details that make software usable.",
  },
  {
    title: "Modernize without losing parity",
    description:
      "Rebuild older systems into maintainable applications while protecting the behavior teams rely on.",
  },
];

const projects: Project[] = [
  {
    title: "AI-Assisted Sales Workflow Prototype",
    label: "Anonymized NDA Case Study",
    summary:
      "Led architecture and development of an AI-assisted sales workflow prototype that combined iOS, telephony, real-time transcription, document parsing, and structured field matching to help agents capture contract-relevant information during live calls.",
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
      "Delivered a near-production MVP/demo that was field-tested and received very strong client feedback",
    ],
    context:
      "The work needed to connect live call behavior, mobile UX, AI transcription, document parsing, and structured business data without exposing the agent to unnecessary workflow overhead.",
    approach:
      "I kept the architecture explicit: mobile app state, voice stream handling, transcription, extraction, field matching, and feedback were treated as separate concerns with clear failure modes and practical observability.",
    challenges: [
      "Early call lifecycle behavior exposed hangup and stream edge cases that required a revised integration path.",
      "Short audio chunks and noisy transcripts needed conservative parsing so the prototype stayed useful in real calls.",
      "NDA constraints required keeping the demo abstract while still proving the technical workflow.",
    ],
    outcome:
      "The team delivered a near-production MVP/demo that was field-tested and received very strong client feedback.",
    visual: "sales",
    artifactTitle: "Live call intelligence pipeline",
    evidence: "Field-tested MVP",
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
    artifactTitle: "Legacy-to-modern workflow map",
    evidence: "Production migration",
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
    artifactTitle: "Spreadsheet-to-guided-app conversion",
    evidence: "Live version 1",
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
    artifactTitle: "Operational scheduling surface",
    evidence: "Used by the team",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h13m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function Badge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "dark" | "accent";
}) {
  const styles = {
    neutral:
      "border-[#d7d5cf] bg-white text-[#425057]",
    dark: "border-white/14 bg-white/[0.06] text-slate-200",
    accent: "border-[#b9d3da] bg-[#e8f3f5] text-[#244f5a]",
  };

  return (
    <span
      className={`inline-flex items-center border px-3 py-1 text-xs font-semibold ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  copy,
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  copy?: string;
  dark?: boolean;
}) {
  return (
    <div id={id} className="mb-10 max-w-3xl scroll-mt-24">
      {eyebrow ? (
        <p
          className={`mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-[#9fc1c9]" : "text-[#476a75]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-tight md:text-5xl md:leading-tight ${
          dark ? "text-white" : "text-[#111517]"
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-5 text-base leading-7 md:text-lg ${
            dark ? "text-slate-300" : "text-[#5d676d]"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function HeroArtifacts() {
  const timeline = ["Discovery", "Architecture", "Build", "Integrate", "Shipped"];

  return (
    <div className="hero-artifacts" aria-label="Anonymized delivery artifacts">
      <div className="hero-timeline">
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#bed8de]">
            Delivery timeline
          </span>
          <span className="h-2 w-2 bg-[#9fc1c9]" />
        </div>
        <div className="mt-5 grid grid-cols-5 gap-2">
          {timeline.map((item, index) => (
            <div key={item} className="timeline-step">
              <span className={index === timeline.length - 1 ? "bg-[#9fc1c9]" : ""} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="artifact-grid">
        <div className="artifact-panel artifact-notes">
          <p className="artifact-title">Architecture notes</p>
          <ul>
            <li>Modular boundaries</li>
            <li>Workflow-first data model</li>
            <li>Observable failure paths</li>
            <li>Integration constraints mapped early</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {["TypeScript", "AI", "Voice", "Data"].map((item) => (
              <Badge key={item} tone="dark">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="artifact-panel artifact-map">
          <p className="artifact-title">delivery-system.map</p>
          <div className="map-canvas">
            {["Mobile app", "API", "AI service", "Data", "Notifications", "Team workflow"].map(
              (item) => (
                <div key={item} className="map-node">
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="artifact-panel artifact-code">
          <p className="artifact-title">workflow.service.ts</p>
          <pre>{`async function publish(input) {
  validate(input);
  await events.write({
    type: "workflow.shipped",
    source: "portfolio"
  });
}`}</pre>
        </div>

        <div className="artifact-panel artifact-list">
          <p className="artifact-title">Selected outcomes</p>
          {[
            "Healthcare scheduling platform",
            "AI-assisted sales workflow",
            "Design calculator suite",
          ].map((item) => (
            <div key={item} className="artifact-row">
              <span />
              <p>{item}</p>
              <strong>Shipped</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SalesVisual() {
  const nodes = ["iOS app", "Voice stream", "Transcription", "Extraction", "Field matching", "Agent feedback"];

  return (
    <div className="visual-flow">
      {nodes.map((node, index) => (
        <div key={node} className="visual-step">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{node}</p>
        </div>
      ))}
    </div>
  );
}

function HealthcareVisual() {
  return (
    <div className="visual-migration">
      <div className="migration-row">
        <div>Legacy WebForms</div>
        <span />
        <div>Blazor / .NET 8</div>
      </div>
      <div className="flow-columns">
        {["Patient", "Provider", "Admin"].map((item) => (
          <div key={item}>
            <p>{item}</p>
            <span />
            <span />
            <span />
          </div>
        ))}
      </div>
    </div>
  );
}

function CalculatorVisual() {
  return (
    <div className="visual-calculator">
      <div className="calc-form">
        <span />
        <span />
        <span />
      </div>
      <div className="calc-diagram">
        <div className="calc-line calc-line-a" />
        <div className="calc-line calc-line-b" />
        <div className="calc-line calc-line-c" />
      </div>
      <div className="calc-footer">
        <span>Inputs</span>
        <span>Diagram</span>
        <span>Output</span>
      </div>
    </div>
  );
}

function SchedulerVisual() {
  return (
    <div className="visual-scheduler">
      <div className="schedule-toolbar">
        <span />
        <span />
      </div>
      <div className="schedule-grid">
        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className={
              index % 9 === 0 || index % 13 === 0
                ? "is-active"
                : index % 7 === 0
                  ? "is-muted"
                  : ""
            }
          />
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "sales") {
    return <SalesVisual />;
  }

  if (type === "healthcare") {
    return <HealthcareVisual />;
  }

  if (type === "calculator") {
    return <CalculatorVisual />;
  }

  return <SchedulerVisual />;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-copy">
        <div className="mb-5 flex flex-wrap gap-2">
          <Badge>{project.label}</Badge>
          <Badge>{project.role}</Badge>
          <Badge tone="accent">{project.evidence}</Badge>
        </div>
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#6d777c]">
          Case study 0{index + 1}
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-[#111517] md:text-4xl md:leading-tight">
          {project.title}
        </h3>
        <p className="mt-5 text-base leading-7 text-[#4e575c]">{project.summary}</p>
        <ul className="mt-7 grid gap-3">
          {project.points.slice(0, 4).map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-6 text-[#4e575c]">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#476a75]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-artifact">
        <div className="artifact-label">
          <span>{project.artifactTitle}</span>
          <strong>{project.evidence}</strong>
        </div>
        <ProjectVisual type={project.visual} />
        <details className="case-study-details group">
          <summary>
            <span>Read case study</span>
            <span className="summary-mark">+</span>
          </summary>
          <div className="case-study-body">
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
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </details>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f2ec]">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#101416]/90 backdrop-blur">
        <nav className="shell flex h-16 items-center justify-between">
          <a href="#top" className="text-sm font-semibold text-white">
            Jordan Allen
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#b6cbd1]">
              Senior Full-Stack Engineer & Technical Lead
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[0.96]">
              Jordan Allen
            </h1>
            <p className="mt-8 max-w-3xl text-2xl leading-tight text-slate-100 md:text-[2rem]">
              I help teams turn ambiguous business problems into shipped software through strong architecture, full-stack execution, and practical product judgment.
            </p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              I design and build software for complex workflows: AI-assisted sales tools, healthcare scheduling platforms, specialized design calculators, and operational systems used by real teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="button button-primary">
                <span>View selected work</span>
                <ArrowIcon />
              </a>
              <a href="#contact" className="button button-secondary">
                <span>Contact</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <HeroArtifacts />
        </div>
      </section>

      <section className="section-band border-b border-[#d9d5cb] bg-[#f8f6f1]">
        <div className="shell">
          <div className="strengths-layout">
            <SectionHeading
              eyebrow="Core strengths"
              title="Where I add the most value."
              copy="The throughline in my work is practical ownership: making the problem clearer, choosing an architecture that fits, and carrying the product through delivery."
            />
            <div className="strength-grid">
              {strengths.map((strength, index) => (
                <article key={strength.title} className="strength-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="shell">
          <SectionHeading
            id="work"
            eyebrow="Featured work"
            title="Selected projects with architecture, workflow, and delivery weight."
            copy="Four projects that show AI workflow development, healthcare modernization, specialized product logic, and full-stack operational software. Confidential work is intentionally anonymized."
          />
          <div className="project-stack">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="approach-section">
        <div className="shell approach-grid">
          <SectionHeading
            eyebrow="Approach"
            title="Architecture, implementation, and product judgment in one loop."
            copy="I work best where requirements are still becoming clear, systems need to fit real operational constraints, and the path from prototype to production matters."
            dark
          />
          <div className="approach-panel">
            {[
              ["Clarify", "Ask the questions that turn ambiguity into concrete workflow, data, and delivery constraints."],
              ["Structure", "Separate product behavior, integration risk, and UI state so teams can reason about the system."],
              ["Ship", "Build the working product, verify behavior, and keep the implementation maintainable after launch."],
            ].map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-band contact-section">
        <div className="shell contact-grid">
          <div>
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#476a75]">
              Contact / links
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#111517] md:text-5xl md:leading-tight">
              Interested in architecture-heavy product engineering work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#5f676d]">
              I am interested in senior full-stack, technical lead, and architecture-heavy product engineering roles where judgment and delivery both matter.
            </p>
          </div>
          <div className="link-panel">
            {[
              ["Email", "Placeholder"],
              ["GitHub", "Placeholder"],
              ["LinkedIn", "Placeholder"],
              ["Resume", "Placeholder"],
            ].map(([label, value]) => (
              <a key={label} href="#">
                <span>{label}</span>
                <strong>{value}</strong>
                <ArrowIcon />
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
