import type { CaseStudy } from "./schema";

/**
 * Case studies are reframed from real work in `profile.ts` — no invented
 * projects. Each one maps 1:1 to a role and its highlights.
 */
export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    title: "JVM & distributed-systems performance RCA",
    company: "New Relic",
    period: "2023 — Present",
    problem:
      "Enterprise Java, Python and Node.js production stacks needed rapid, accurate root-cause analysis to keep mission-critical APIs reliable, but without a dedicated observability engineer, incidents were diagnosed by guesswork.",
    approach:
      "Ran deep-dive JVM internals analysis (heap dumps, GC tuning, thread profiling) alongside distributed-systems RCA. Instrumented services with OpenTelemetry for tracing, metrics and custom alerting, and authored RFCs to make the tracing architecture reusable across teams.",
    impact:
      "Mission-critical APIs held above a 95%+ SLA compliance target, with internal Python tooling automating repeat diagnostic work and cutting MTTR.",
    tags: ["Java", "OpenTelemetry", "Distributed Tracing", "JVM Internals", "Python"],
  },
  {
    index: "02",
    title: "Mortgage SaaS backend & API platform",
    company: "Online Application",
    period: "2022 — 2023",
    problem:
      "A SaaS platform for the American mortgage market needed scalable backend services and a stable API contract shared between the front end and third-party integrations, without slowing the team down environment-to-environment.",
    approach:
      "Built backend services and RESTful APIs on PHP (Laravel 8) with InertiaJS and Vue.js on the front end. Containerised the local dev environment with Docker (Lando & Ddev) to remove setup drift, and wired GitHub Actions / GitLab CI pipelines for automated testing and deployment.",
    impact:
      "Consistent environments across the team accelerated delivery velocity, and CI/CD automation reduced release friction on a platform serving real mortgage transactions.",
    tags: ["PHP", "Laravel", "Vue.js", "Docker", "RESTful APIs", "CI/CD"],
  },
  {
    index: "03",
    title: "Healthcare logistics & appointment automation",
    company: "Hibernian Healthcare",
    period: "2019 — 2022",
    problem:
      "Healthcare appointment and delivery logistics depended on secure, high-availability integrations with third-party systems (including Bluejeans), and any instability directly affected patient-facing operations.",
    approach:
      "Designed and automated the backend logistics architecture, integrated RESTful APIs with third-party systems, and covered the contract with unit and integration test suites (JUnit, PHPUnit, Postman). Managed Docker-containerised production environments on cloud instances.",
    impact:
      "Resolved critical infrastructure bottlenecks and established structured logging and monitoring routines that gave the team visibility into production health for the first time.",
    tags: ["PHP", "RESTful APIs", "Docker", "PHPUnit", "MySQL"],
  },
];
