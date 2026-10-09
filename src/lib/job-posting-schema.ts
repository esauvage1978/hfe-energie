import { site } from "@data/site";

export interface JobPostingInput {
  id: string;
  title: string;
  descriptionHtml: string;
  datePosted: string;
  validThrough: string;
  employmentType: "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "TEMPORARY" | "INTERN" | "VOLUNTEER" | "PER_DIEM" | "OTHER";
  jobStartDate?: string;
  experienceMonths?: number;
}

const hiringOrganization = {
  "@type": "Organization" as const,
  name: site.legalName,
  sameAs: site.baseUrl,
  logo: `${site.baseUrl}/assets/logo/hfe-sansFond.png`,
};

const jobLocation = {
  "@type": "Place" as const,
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
  },
};

export function buildJobPostingLd(job: JobPostingInput, pageUrl: string) {
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "@id": `${pageUrl}#${job.id}`,
    title: job.title,
    description: job.descriptionHtml,
    identifier: {
      "@type": "PropertyValue",
      name: site.legalName,
      value: job.id,
    },
    datePosted: job.datePosted,
    validThrough: job.validThrough,
    employmentType: job.employmentType,
    hiringOrganization,
    jobLocation,
    directApply: true,
  };

  if (job.jobStartDate) {
    payload.jobStartDate = job.jobStartDate;
  }

  if (job.experienceMonths) {
    payload.experienceRequirements = {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: String(job.experienceMonths),
    };
  }

  return payload;
}

export function buildJobPostingsGraph(jobs: JobPostingInput[], pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@graph": jobs.map((job) => buildJobPostingLd(job, pageUrl)),
  };
}
