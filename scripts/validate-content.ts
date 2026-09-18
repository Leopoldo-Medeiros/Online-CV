import { z } from "zod";
import { profileSchema, caseStudySchema } from "../src/content/schema.ts";
import { profile } from "../src/content/profile.ts";
import { caseStudies } from "../src/content/case-studies.ts";

const results = [profileSchema.safeParse(profile), ...caseStudies.map((cs) => caseStudySchema.safeParse(cs))];

const failures = results.filter((result) => !result.success);

if (failures.length > 0) {
  for (const failure of failures) {
    if (!failure.success) {
      console.error(z.prettifyError(failure.error));
    }
  }
  console.error(`\n✗ Content validation failed (${failures.length} error(s)).`);
  process.exit(1);
}

console.log(`✓ Content valid — profile + ${caseStudies.length} case studies.`);
