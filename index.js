// document.querySelectorAll(".body")
//   .forEach((btn) =>
//     btn.addEventListener("click", () =>
//       window.scrollTo({ top: 0, behavior: "smooth" })
//     )
//   );


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("*").forEach((element) => {
    element.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  });
});
