/**
 * Renders JSON-LD structured data for search engines. Rendered from a Server
 * Component, so there's no hydration issue.
 *
 * Security: JSON.stringify alone is NOT safe to drop into HTML — a value
 * containing `</script>` would break out of the tag and enable XSS. We escape
 * the three characters that matter (`<`, `>`, `&`) into their JSON unicode
 * equivalents, which the JSON parser decodes back but the HTML parser can't be
 * tricked by.
 */
function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }} />
  );
}
