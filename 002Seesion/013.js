const adult = confirm("have you reached the age of eighteen ?");
if (adult) {
    document.body.textContent = "Welcome Mate ..."
    document.body.style.background = "green";
} else {
    document.body.textContent = "You aren't old enough !";
    document.body.style.background = "red"
}
