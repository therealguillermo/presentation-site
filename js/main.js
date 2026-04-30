(function () {
  const cfg = window.ENGR407_CONFIG || {};

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  function buildOfficeEmbedUrl(fileUrl) {
    if (!fileUrl || !String(fileUrl).trim()) return "";
    return (
      "https://view.officeapps.live.com/op/embed.aspx?src=" +
      encodeURIComponent(fileUrl.trim())
    );
  }

  setText("site-title", cfg.title);
  setText("site-subtitle", cfg.subtitle);
  setText("label-p1", cfg.project1Label);
  setText("label-p2", cfg.project2Label);
  setText("label-p3", cfg.project3Label);
  setText("label-reflection", cfg.reflectionTitle);

  const frame = document.getElementById("project1-frame");
  const openBtn = document.getElementById("project1-open");
  const url = cfg.project1SiteUrl;
  if (frame && url && url !== "https://example.com") {
    frame.src = url;
    frame.title = cfg.project1Label || "Project website";
  } else if (frame) {
    frame.removeAttribute("src");
  }
  if (openBtn) {
    if (url && url !== "https://example.com") {
      openBtn.href = url;
      openBtn.hidden = false;
    } else {
      openBtn.hidden = true;
    }
  }

  const gallery = document.getElementById("project2-gallery");
  if (gallery && Array.isArray(cfg.project2Images)) {
    gallery.innerHTML = "";
    if (cfg.project2Images.length === 0) {
      const empty = document.createElement("p");
      empty.className = "panel__lede gallery__empty";
      empty.textContent =
        "Add image files under images/ in this repo, then list their paths in project2Images in js/config.js.";
      gallery.appendChild(empty);
    }
    cfg.project2Images.forEach((src, i) => {
      const figure = document.createElement("figure");
      figure.className = "gallery-card";
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Project two image " + (i + 1);
      img.loading = "lazy";
      img.addEventListener("error", () => {
        figure.classList.add("gallery-card--missing");
        img.replaceWith(document.createElement("div"));
        figure.querySelector("div").className = "gallery-card__placeholder";
        figure.querySelector("div").textContent = "Add " + src.split("/").pop();
      });
      figure.appendChild(img);
      gallery.appendChild(figure);
    });
  }

  const deckFrame = document.getElementById("project3-frame");
  const deckWrap = document.getElementById("project3-wrap");
  const deckHint = document.getElementById("project3-hint");
  const embedUrl = buildOfficeEmbedUrl(cfg.pptxPublicUrl);
  if (deckFrame && embedUrl) {
    deckFrame.src = embedUrl;
    deckFrame.title = cfg.project3Label || "Slides";
    if (deckHint) deckHint.hidden = true;
  } else if (deckWrap) {
    deckWrap.classList.add("deck-wrap--empty");
  }

  const reflection = document.getElementById("reflection-body");
  if (reflection && cfg.reflectionHtml) {
    reflection.innerHTML = cfg.reflectionHtml;
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const id = this.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
