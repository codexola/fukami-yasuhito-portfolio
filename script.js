(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = !document.body.classList.contains("nav-open");
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "メニューを開く");
      });
    });
  }

  const observeReveals = () => {
    const reveals = document.querySelectorAll(".reveal:not(.is-visible)");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-visible"));
    }
  };

  const escapeHtml = (str) =>
    String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const previewSrc = (item) => {
    if (item.image) return item.image;
    if (item.url) {
      return `https://image.thum.io/get/width/960/crop/600/noanimate/${item.url}`;
    }
    return "assets/portrait-primary.jpg";
  };

  const projectCard = (item, opts = {}) => {
    const hasUrl = Boolean(item.url);
    const tag = hasUrl ? "a" : "div";
    const href = hasUrl
      ? ` href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer"`
      : "";
    const visit = hasUrl
      ? `<span class="case-visit">${opts.visitLabel || "サイトを開く"}</span>`
      : `<span class="case-visit muted">社内／非公開案件</span>`;

    return `
      <${tag} class="case-card"${href}>
        <div class="case-media">
          <img
            src="${escapeHtml(previewSrc(item))}"
            alt="${escapeHtml(item.name)} のプレビュー"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null;this.src='assets/portrait-primary.jpg';this.classList.add('is-fallback');"
          />
          ${item.category ? `<span class="case-chip">${escapeHtml(item.category)}</span>` : ""}
        </div>
        <div class="case-body">
          <h3 class="case-title">${escapeHtml(item.name)}</h3>
          ${item.summary ? `<p class="case-summary">${escapeHtml(item.summary)}</p>` : ""}
          ${item.impact ? `<p class="case-impact">${escapeHtml(item.impact)}</p>` : ""}
          ${item.tech ? `<p class="case-tech">${escapeHtml(item.tech)}</p>` : ""}
          ${item.note && !item.summary ? `<p class="case-summary">${escapeHtml(item.note)}</p>` : ""}
          ${visit}
        </div>
      </${tag}>
    `;
  };

  const renderJapaneseAchievements = () => {
    const root = document.getElementById("jp-achievements");
    const data = (typeof PORTFOLIO_PROJECTS !== "undefined" && PORTFOLIO_PROJECTS.japanese) || [];
    if (!root || !data.length) return;

    root.innerHTML = `
      <p class="jp-count reveal">厳選 <strong>${data.length}</strong> プロジェクト — 画像プレビュー付き</p>
      <div class="case-grid">
        ${data.map((item) => `<article class="reveal">${projectCard(item)}</article>`).join("")}
      </div>
    `;
  };

  const renderSkillAchievements = () => {
    const root = document.getElementById("skill-achievements");
    const toc = document.getElementById("skill-toc");
    const data = (typeof PORTFOLIO_PROJECTS !== "undefined" && PORTFOLIO_PROJECTS.bySkill) || [];
    if (!root || !data.length) return;

    if (toc) {
      toc.innerHTML = data
        .map(
          (s) =>
            `<a href="#skill-${escapeHtml(s.id)}">${escapeHtml(s.skill)} <em>${s.items.length}</em></a>`
        )
        .join("");
    }

    const total = data.reduce((n, s) => n + s.items.length, 0);

    root.innerHTML = `
      <p class="jp-count reveal">スキル別 厳選実績 <strong>${total}</strong> 件 / ${data.length} カテゴリ</p>
      ${data
        .map(
          (skill) => `
        <section class="skill-block reveal" id="skill-${escapeHtml(skill.id)}">
          <header class="skill-block-head">
            <div>
              <h2>${escapeHtml(skill.skill)}</h2>
              ${skill.note ? `<p>${escapeHtml(skill.note)}</p>` : ""}
            </div>
            <span class="skill-count">${skill.items.length}</span>
          </header>
          <div class="case-grid">
            ${skill.items.map((item) => projectCard(item)).join("")}
          </div>
        </section>`
        )
        .join("")}
    `;
  };

  renderJapaneseAchievements();
  renderSkillAchievements();
  observeReveals();
})();
