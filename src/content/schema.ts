import { z } from "zod";

export const contactSchema = z.object({
  email: z.email(),
  phone: z.string(),
  phoneHref: z.string(),
  linkedin: z.url(),
  github: z.url(),
});

export const projectPreviewSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(["live", "in-progress"]),
  src: z.string().optional(),
  alt: z.string().optional(),
  url: z.url().optional(),
  video: z.string().optional(),
});

export const experienceSchema = z.object({
  company: z.string(),
  location: z.string(),
  position: z.string(),
  period: z.string(),
  highlights: z.array(z.string()).min(1),
  skills: z.array(z.string()).min(1),
  projects: z.array(projectPreviewSchema).min(1).optional(),
});

export const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string(),
  period: z.string(),
});

export const techGroupSchema = z.object({
  label: z.string(),
  items: z.array(z.string()).min(1),
});

export const capabilitySchema = z.object({
  index: z.string(),
  title: z.string(),
  description: z.string(),
  details: z.array(z.string()).min(1).optional(),
});

export const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  location: z.string(),
  summary: z.string(),
  contact: contactSchema,
  capabilities: z.array(capabilitySchema).min(1),
  techStack: z.array(techGroupSchema).min(1),
  experience: z.array(experienceSchema).min(1),
  education: z.array(educationSchema).min(1),
});

export const caseStudySchema = z.object({
  index: z.string(),
  title: z.string(),
  company: z.string(),
  period: z.string(),
  problem: z.string(),
  approach: z.string(),
  impact: z.string(),
  tags: z.array(z.string()).min(1),
});

export type Profile = z.infer<typeof profileSchema>;
export type CaseStudy = z.infer<typeof caseStudySchema>;
