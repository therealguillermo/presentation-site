(function () {
  const cfg = window.ENGR407_CONFIG || {};

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  function buildOfficeEmbedUrl(fileUrl) {
    if (!fileUrl || !String(fileUrl).trim()) return "";
    var base =
      "https://view.officeapps.live.com/op/embed.aspx?src=" +
      encodeURIComponent(fileUrl.trim());
    return base;
  }

  function getDeckAbsoluteUrl() {
    var explicit = (cfg.pptxPublicUrl || "").trim();
    if (explicit) return explicit;
    var path = (cfg.pptxFilePath || "").trim();
    if (!path) return "";
    if (window.location.protocol === "file:") return "";
    return window.location.origin + path;
  }

  function getDeckDownloadHref() {
    var path = (cfg.pptxFilePath || "").trim();
    if (!path) return "";
    if (path.indexOf("http") === 0) return path;
    if (window.location.protocol === "file:") return "";
    return window.location.origin + path;
  }

  setText("site-title", cfg.title);
  setText("site-subtitle", cfg.subtitle);
  setText("label-p1", cfg.project1Label);
  setText("label-p2", cfg.project2Label);
  setText("label-p3", cfg.project3Label);
  setText("label-reflection", cfg.reflectionTitle);

  var frame = document.getElementById("project1-frame");
  var openBtn = document.getElementById("project1-open");
  var url = cfg.project1SiteUrl;
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

  var gallery = document.getElementById("project2-gallery");
  if (gallery && Array.isArray(cfg.project2Images)) {
    gallery.innerHTML = "";
    cfg.project2Images.forEach(function (src, i) {
      var figure = document.createElement("figure");
      figure.className = "gallery-card";
      if (typeof src === "string" && src.toUpperCase().indexOf("IMG_4291") !== -1) {
        figure.classList.add("gallery-card--tall");
      }
      var img = document.createElement("img");
      img.src = src;
      img.alt = "Project two image " + (i + 1);
      img.loading = "lazy";
      img.addEventListener("error", function () {
        figure.classList.add("gallery-card--missing");
        img.replaceWith(document.createElement("div"));
        figure.querySelector("div").className = "gallery-card__placeholder";
        figure.querySelector("div").textContent = "Photo unavailable";
      });
      figure.appendChild(img);
      gallery.appendChild(figure);
    });
  }

  var deckFrame = document.getElementById("project3-frame");
  var deckWrap = document.getElementById("project3-wrap");
  var deckOpen = document.getElementById("deck-open");
  var deckDownload = document.getElementById("deck-download");
  var deckActions = document.getElementById("deck-actions");

  var deckUrl = getDeckAbsoluteUrl();
  if (deckFrame && deckUrl) {
    deckFrame.src = buildOfficeEmbedUrl(deckUrl);
    deckFrame.title = cfg.project3Label || "Slides";
  } else if (deckWrap) {
    deckWrap.classList.add("deck-wrap--empty");
  }

  if (deckActions) {
    var dl = getDeckDownloadHref();
    if (dl && deckDownload) deckDownload.href = dl;
    if (deckUrl && deckOpen) deckOpen.href = deckUrl;
    if (deckUrl || dl) deckActions.removeAttribute("hidden");
  }

  var reflection = document.getElementById("reflection-body");
  if (reflection && cfg.reflectionHtml) {
    reflection.innerHTML = cfg.reflectionHtml;
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
