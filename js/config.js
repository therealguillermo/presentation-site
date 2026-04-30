/**
 * Edit these values for your presentation.
 * PPTX: upload your file to a public HTTPS URL (e.g. GitHub raw, Google Drive direct link, or /files/your-deck.pptx on this site),
 * then set pptxPublicUrl to that full URL. The embed uses Microsoft’s viewer.
 */
window.ENGR407_CONFIG = {
  title: "ENGR 407 — One minute",
  subtitle: "A reflection, not a retrospective",

  /** Full URL of the other site you built (must allow embedding, or use “open in new tab” only). */
  project1SiteUrl: "https://engr-407-shop.vercel.app/",

  /** Optional label above the embed */
  project1Label: "Project one — Nittany Craft shop",

  /** Paths are served from the site root on Vercel. Add JPEG/PNG files under /images/ in this repo. */
  project2Images: [
    "/images/project2-1.jpg",
    "/images/project2-2.jpg",
    "/images/project2-3.jpg"
  ],

  project2Label: "Project two — in pictures",

  /**
   * Public HTTPS URL to your .pptx file (encoded automatically if you paste raw URL).
   * Example after uploading to this repo: "https://your-site.vercel.app/files/deck.pptx"
   */
  pptxPublicUrl: "",

  project3Label: "Project three — slides",

  /** Section 4 heading */
  reflectionTitle: "Written reflection",

  /** About half a paragraph to one paragraph; replace with your own words */
  reflectionHtml:
    "<p>Replace this block in <code>js/config.js</code> with your own reflection—something that symbolizes your experience in ENGR 407 in about a minute when you present it. Keep it personal and specific; avoid a dry list of what you did.</p>"
};
