window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 3s ease";
      setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block"; // Show main content
    }, 1000);
  });
  