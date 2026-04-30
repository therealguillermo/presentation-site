/**
 * Site copy and media paths. Optional: set pptxPublicUrl if the Office viewer
 * cannot load from your deployed origin alone.
 */
window.ENGR407_CONFIG = {
  title: "ENGR 407 - In One Minute",
  subtitle: "A reflection",

  project1SiteUrl: "https://engr-407-shop.vercel.app/",
  project1Label: "Project one — Nittany Craft shop",

  project2Images: [
    "/images/IMG_4291.PNG",
    "/images/IMG_1130.png",
    "/images/1772577721.5322142.jpg"
  ],

  project2Label: "Project two — in pictures",

  /** Served from site root (encode spaces/parentheses). Used for download + Office viewer src. */
  pptxFilePath: "/files/hotrod_pitch_v2%20(1).pptx",

  /**
   * Optional absolute HTTPS URL to the same .pptx if needed for the embed viewer.
   * If the Office embed shows “We can't open this for you”, set this to a public URL
   * Microsoft can fetch (for example the raw GitHub file URL for this repo).
   */
  pptxPublicUrl: "",

  project3Label: "Project three — slides",

  reflectionTitle: "Written reflection",
  reflectionHtml: ""
};
