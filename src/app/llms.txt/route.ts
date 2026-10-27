import { portfolioConfig } from "@/config/portfolio"

function isExternalUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
}

export function GET(request: Request) {
  const { personal, career, social, writing, buildBuddy, clipRag } = portfolioConfig
  const siteUrl = new URL(request.url).origin

  const optionalLinks = [
    isExternalUrl(social.linkedin) &&
      `- [LinkedIn](${social.linkedin}): Professional profile and work history`,
    isExternalUrl(social.github) &&
      `- [GitHub](${social.github}): Open-source projects and code samples`,
  ].filter(Boolean)

  const content = `# ${personal.name}

> Full-stack software engineer building production-ready web applications, backend APIs, mobile apps, SaaS products, and AI-powered experiences.

${personal.name} is a ${personal.role.toLowerCase()} based in ${personal.location}, available for select freelance projects.

## Portfolio

- [Homepage](${siteUrl}/): Personal portfolio with services, experience, and contact information

## Professional Experience

${career.map((job) => `- ${job.company} (${job.period}): ${job.description}`).join("\n")}

## Built for Fun

- [BuildBuddy](${buildBuddy.url}): A spare-time experiment built just for fun, with expressive SVG companions and a playful mood playground
- [ClipRAG](${clipRag.url}): A spare-time Linux clipboard manager for searching, pinning, and reusing commands, snippets, links, and text locally

## Writing

${writing.map((article) => `- [${article.title}](${article.url}) (${article.year}, ${article.platform})`).join("\n")}

## Contact

- [Email](mailto:${personal.email}): Contact for freelance and collaboration inquiries
${
  optionalLinks.length > 0
    ? `
## Optional

${optionalLinks.join("\n")}
`
    : ""
}`

  return new Response(content.trim() + "\n", {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
