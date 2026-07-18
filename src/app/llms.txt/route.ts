import { portfolioConfig } from "@/config/portfolio"

function isExternalUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
}

export function GET(request: Request) {
  const { personal, projects, social } = portfolioConfig
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

## Selected Work

- [${projects.spendAlarm.title}](${projects.spendAlarm.url}): ${projects.spendAlarm.positioning}
- [${projects.intellident.title}](${projects.intellident.url}): ${projects.intellident.positioning}

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
