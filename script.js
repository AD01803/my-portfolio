const titleText = "Hello, I'm Adarsh";
const descText = `A dedicated developer who loves creating clean, efficient, and interactive web experiences.
With a strong foundation in programming and frontend technologies, I build solutions that are both functional and visually appealing.
Continuously improving through projects and real-world problem solving`;

let i = 0;
let j = 0;

function typeTitle() {
  if (i < titleText.length) {
    document.getElementById("hero-title").innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typeTitle, 40);
  } else {
    highlightName();
    setTimeout(typeDesc, 300);
  }
}

function highlightName() {
  const titleEl = document.getElementById("hero-title");
  titleEl.innerHTML = titleEl.innerHTML.replace(
    "Adarsh",
    '<span class="highlight">Adarsh</span>'
  );
}

function typeDesc() {
  if (j < descText.length) {
    document.getElementById("hero-desc").innerHTML += descText.charAt(j);
    j++;
    setTimeout(typeDesc, 2);
  }
}

window.onload = typeTitle;

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;

  // 👇 HOME detection
  if (scrollY < 200) {
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('.navbar a[href="#home"]').classList.add("active");
    return;
  }

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.navbar a[href="#${sectionId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});