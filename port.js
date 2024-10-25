// เมื่อโหลดหน้าเว็บเสร็จ
window.addEventListener("load", () => {
  document.body.classList.add("visible");
});

//เปิดแถบเมนูสำหรับ Responsive
const menuExpand = () => {
  const menuList = document.getElementById("nav-menu");
  if (menuList.className === "menu") {
    menuList.className += " menu-display";
  } else {
    menuList.className = "menu";
  }
};

// ปิดเมนูเมื่อคลิกส่วนว่าง
document.addEventListener("click", (event) => {
  const menuList = document.getElementById("nav-menu");
  const logo = document.querySelector(".logo");

  // เช็คว่าคลิกที่เมนูหรือโลโก้หรือไม่
  if (!menuList.contains(event.target) && !logo.contains(event.target)) {
    menuList.className = "menu"; // ปิดเมนู
  }
});
