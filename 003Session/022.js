function changePicPosition() {
    const img1 = document.querySelector(".img1");
    const img2 = document.querySelector(".img2");

    const img1src = img1.getAttribute("src");
    const temp = img2.getAttribute("src");
    img2.setAttribute("src", img1src);
    img1.setAttribute("src", temp);
}
