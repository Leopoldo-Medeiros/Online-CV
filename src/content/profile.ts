import type { Profile } from "./schema";

/**
 * Single source of truth for CV content. Update this object, not markup —
 * `scripts/validate-content.ts` enforces the shape on every build.
 */
export const profile: Profile = {
  name: "Leopoldo Medeiros",
  title: "Backend Engineer",
  location: "Dublin, Ireland",
  summary:
    "Backend developer with 5+ years of software engineering experience designing, building, and optimising high-availability production systems across fintech, healthcare, and SaaS environments. Proven expertise in microservices architecture, API design, and deep-dive performance analysis of distributed systems. Passionate about constructing consistent, low-latency API contracts and robust backend flows that support modern distributed architectures.",
  contact: {
    email: "leopoldof.medeiros@gmail.com",
    phone: "+353 87 154 0003",
    phoneHref: "+353871540003",
    linkedin: "https://www.linkedin.com/in/leopoldomedeiros/",
    github: "https://github.com/Leopoldo-Medeiros",
  },
  metrics: [
    { value: "5+", label: "Years in production engineering" },
    { value: "95%+", label: "SLA compliance maintained" },
    { value: "3", label: "Industries — fintech, healthcare, SaaS" },
  ],
  capabilities: [
    {
      index: "01",
      title: "Observability & performance",
      description:
        "JVM internals analysis — heap dumps, GC tuning, thread profiling — and distributed-systems RCA across Java, Python and Node.js production stacks. Instrumented with OpenTelemetry for tracing, metrics and alerting.",
    },
    {
      index: "02",
      title: "API & backend architecture",
      description:
        "Designing consistent, low-latency REST contracts and microservices that hold up under real production load, from SaaS platforms to healthcare logistics systems.",
    },
    {
      index: "03",
      title: "DevOps & delivery",
      description:
        "Containerised environments, CI/CD pipelines and internal tooling that shorten the loop between a regression and a fix — automating the parts of the job that don't need a human.",
    },
  ],
  techStack: [
    {
      label: "Languages & frameworks",
      items: ["Java", "PHP", "Laravel", "Spring Boot", "Python", "Vue.js"],
    },
    {
      label: "Observability & performance",
      items: ["OpenTelemetry", "Distributed Tracing", "NRQL", "JVM Internals"],
    },
    {
      label: "Data & infrastructure",
      items: ["MySQL", "RESTful APIs", "Docker", "Linux"],
    },
    {
      label: "CI/CD & delivery",
      items: ["GitHub Actions", "GitLab CI", "JIRA"],
    },
  ],
  experience: [
    {
      company: "New Relic Inc",
      location: "Dublin, Ireland",
      position: "Senior Observability Engineer",
      period: "Jan 2023 — Present",
      highlights: [
        "Conduct deep-dive JVM internals analysis (heap dumps, GC tuning, thread profiling) and distributed systems RCA across enterprise Java, Python, and Node.js production stacks, keeping mission-critical APIs above a 95%+ SLA compliance target.",
        "Lead technical discussions, author RFCs, and mentor junior engineers on distributed tracing architectures, JVM memory leak debugging, and high-throughput backend performance tuning.",
        "Collaborate with cross-functional engineering teams to optimize system designs; automate internal engineering workflows and performance-monitoring toolsets using Python, successfully reducing MTTR.",
        "Architect and instrument distributed systems with OpenTelemetry (OTel) standards, tracing, metrics, and custom alerting frameworks to ensure continuous API reliability and capacity planning.",
      ],
      skills: ["Java", "Python", "JVM Internals", "Open Telemetry", "Distributed Tracing", "API Optimization", "CI/CD", "Docker"],
    },
    {
      company: "Online Application",
      location: "Dublin, Ireland",
      position: "FullStack Developer",
      period: "Jun 2022 — Jan 2023",
      highlights: [
        "Developed and deployed scalable SaaS backend services for the American mortgage market using PHP (Laravel 8), InertiaJS, and Vue.js; built and maintained RESTful APIs consumed by front-end and third-party integrations.",
        "Containerised the development environment with Docker (Lando & Ddev) to standardise local setup and accelerate team velocity across environments.",
        "Maintained CI/CD pipelines (GitHub Actions / GitLab CI) for automated testing and deployment, reducing release friction and improving delivery consistency.",
      ],
      skills: ["PHP", "Laravel", "Vue.js", "Docker", "RESTful APIs", "MySQL", "GitHub Actions", "GitLab CI"],
    },
    {
      company: "Hibernian Healthcare",
      location: "Dublin, Ireland",
      position: "Software Engineer",
      period: "Jan 2019 — Jun 2022",
      highlights: [
        "Designed and automated secure backend logistics architectures; integrated complex, high-availability RESTful APIs with third-party systems (such as Bluejeans) to ensure reliable operational workflows.",
        "Developed and maintained backend test suites using standard unit and integration testing frameworks (JUnit, PHPUnit, Postman) to maintain robust API contracts.",
        "Managed Docker-containerised production environments on cloud instances, resolving critical infrastructure bottlenecks and establishing structured logging and monitoring routines.",
      ],
      skills: ["PHP", "Laravel", "Docker", "RESTful APIs", "MySQL", "Linux", "JIRA"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "CCT College Dublin",
      location: "Dublin, Ireland",
      period: "2017 — 2020",
    },
  ],
};
