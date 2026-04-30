/**
 * Site copy and media paths. Optional: set pptxPublicUrl if the Office viewer
 * cannot load from your deployed origin alone.
 */
window.ENGR407_CONFIG = {
  title: "ENGR 407 - In One Minute",
  subtitle: "A reflection",

  project1SiteUrl: "https://engr-407-shop.vercel.app/",
  project1Label: "Project One - Nittany Craft Shop",

  project2Images: [
    "/images/IMG_4291.PNG",
    "/images/IMG_1130.png",
    "/images/1772577721.5322142.jpg"
  ],

  project2Label: "Project Two - Hit N' Run",

  /** Served from site root. Used for download + Office viewer src. */
  pptxFilePath: "/files/hotrod_pitch_v2.pptx",

  /**
   * Optional absolute HTTPS URL to the same .pptx if needed for the embed viewer.
   * If the Office embed shows “We can't open this for you”, set this to a public URL
   * Microsoft can fetch (for example the raw GitHub file URL for this repo).
   */
  pptxPublicUrl: "https://raw.githubusercontent.com/therealguillermo/presentation-site/main/files/hotrod_pitch_v2.pptx",

  project3Label: "Project Three - Hot Rod",

  reflectionTitle: "Reflection",
  reflectionHtml:
    "<p>ENGR 407 helped me realize that effective teamwork and strong communication are essential for success in any collaborative environment. The biggest takeaway I gained from the course is how closely these two ideas are connected and how each project reinforced their importance. Without good teamwork, it becomes difficult to work efficiently, divide responsibilities, and make meaningful progress toward shared goals. At the same time, one of the foundations of strong teamwork is clear and consistent communication. As college students balancing different schedules and commitments between group members can be a serious challenge, communication is what keeps everyone aligned and ensures that tasks and work move forward smoothly. Whether it was coordinating deadlines, sharing ideas, or resolving problems, strong communication made collaboration not just more effective but also less stressful. Overall, these experiences showed me that teamwork is not just about working together, but about staying connected, maintaining accountability, and to be intentional in how we interact with one another.</p>"
};
