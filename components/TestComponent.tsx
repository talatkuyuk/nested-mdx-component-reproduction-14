import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkIns from "remark-ins";
import html from "remark-html";

async function renderToHtml(markdown: string): Promise<string> {
  const out = await remark()
    .use(html, { sanitize: true })
    .use(remarkGfm)
    .use(remarkIns)
    .process(markdown);

  return String(out);
}

export default async function TestComponent() {
  const source = "## Title with ++inserted text++";
  const output = await renderToHtml(source);

  return <div dangerouslySetInnerHTML={{ __html: output }} />;
}
