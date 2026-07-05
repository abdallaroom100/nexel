// navbar
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");
  const links = document.querySelectorAll("#nav-links a");

  // إظهار القائمة عند الضغط على ☰
  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("show");
  });

  // تحميل آخر رابط مفعّل من التخزين المحلي
  const savedActive = localStorage.getItem("activeNavLink");
  if (savedActive) {
    links.forEach((link) => {
      if (link.dataset.link === savedActive) {
        link.classList.add("active-link");
      }
    });
  }

  // عند الضغط على أي لينك
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // تمنع ريفريش الصفحة

      // شيل التفعيل من الكل
      links.forEach((l) => l.classList.remove("active-link"));

      // فعّل الرابط الحالي
      this.classList.add("active-link");

      // خزّنه في localStorage علشان يفضل مفعّل بعد الريفريش
      localStorage.setItem("activeNavLink", this.dataset.link);
    });
  });
});
