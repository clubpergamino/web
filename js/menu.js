document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("openMenu");
    const closeBtn = document.getElementById("closeMenu");
    closeBtn.style.display = "none";
    openBtn.addEventListener("click", () => {
        menu.classList.add("active");
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
        document.body.style.overflow = "hidden";
    });
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
        document.body.style.overflow = "";
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        menu.classList.remove("active");
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
        document.body.style.overflow = "";
    }));
    document.addEventListener("keydown", e => {
        if(e.key === "Escape" && menu.classList.contains("active")){
            menu.classList.remove("active");
            closeBtn.style.display = "none";
            openBtn.style.display = "block";
            document.body.style.overflow = "";
        }
    });
});
