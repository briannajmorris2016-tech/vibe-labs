(function () {
  const headerHTML = `
    <div class="inner">
      <div class="brand"><span class="dot"></span> VIBE Workshop Labs</div>
      <nav class="nav">
        <a href="${basePath()}index.html">Home</a>
        <a href="${basePath()}labs/lab-2-vibe-apps.html">Lab 2</a>
      </nav>
    </div>
  `;

  const footerHTML = `
    <div class="inner">
      <div>© ${new Date().getFullYear()} VIBE Workshop</div>
      <div style="color:#cbd5e1">Hosted on GitHub Pages</div>
    </div>
  `;

  document.querySelectorAll('[data-include="header"]').forEach(el => el.innerHTML = headerHTML);
  document.querySelectorAll('[data-include="footer"]').forEach(el => el.innerHTML = footerHTML);

  // Copy prompt blocks
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const selector = btn.getAttribute('data-copy');
      const el = document.querySelector(selector);
      if (!el) return;

      const text = el.innerText.trim();
      try {
        await navigator.clipboard.writeText(text);
        const old = btn.innerText;
        btn.innerText = "Copied!";
        setTimeout(() => btn.innerText = old, 900);
      } catch (e) {
        // fallback
        window.prompt("Copy this text:", text);
      }
    });
  });

  function basePath() {
    // Works for both / and /labs/ paths
    const path = window.location.pathname;
    const repoRoot = path.includes('/labs/') ? '../' : './';
    return repoRoot;
  }
})();
