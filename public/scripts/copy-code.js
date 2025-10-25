document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(".codeblock");

  containers.forEach((container) => {
    const button = container.querySelector(".copyButton");
    const codeEl = container.querySelector("td.code pre > code, pre > code");
    if (!button || !codeEl) return;

    button.addEventListener("click", async () => {
      // Get visible text content
      let rendered = codeEl.innerText;

      // Split into lines and clean each line
      const cleaned = rendered
        .split("\n")
        .map((line) => line.replace(/^\s*\d+\s*/, "")) // remove leading line numbers
        .filter((line) => line.trim() !== "") // remove empty/extra lines
        .join("\n"); // rejoin cleanly

      // Remove trailing newline just in case
      const finalText = cleaned.trimEnd();

      try {
        await navigator.clipboard.writeText(finalText);
        const prev = button.textContent;
        button.textContent = "Copied!";
        button.disabled = true;
        setTimeout(() => {
          button.textContent = prev;
          button.disabled = false;
        }, 1200);
      } catch (e) {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = finalText;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        textarea.setAttribute("readonly", "");
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 1200);
      }
    });
  });
});
