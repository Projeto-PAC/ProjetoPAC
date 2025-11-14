function navigateTo(page) {
  window.location.href = page;
}
function goBack() {
  window.history.back();
}
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.animation = `fadeInUp 0.6s ease forwards`;
    card.style.animationDelay = `${index * 0.1}s`;
  });
  const contentPage = document.querySelector(".content-page");
  if (contentPage) {
    contentPage.style.animation = "fadeInUp 0.6s ease forwards";
  }
});
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
function highlightCode() {
  const codeBlocks = document.querySelectorAll(".code-block");
  codeBlocks.forEach((block) => {
    block.style.cursor = "pointer";
    block.addEventListener("click", function () {
      copyCode(this);
    });
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", highlightCode);
} else {
  highlightCode();
}
function copyCode(element) {
  try {
    const text = element.innerText;
    if (!navigator.clipboard) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    } else {
      navigator.clipboard.writeText(text);
    }
    const origBg = element.style.backgroundColor;
    element.style.transition = "background-color 0.2s ease";
    element.style.backgroundColor = "#27ae60";
    setTimeout(() => {
      element.style.backgroundColor = origBg;
    }, 500);
  } catch (err) {
    console.error("Erro ao copiar código:", err);
  }
}
