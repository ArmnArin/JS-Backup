let flag = true;
function serverStatus () {
    const text = document.getElementById("serverText");
    const bt = document.getElementById("serverButton");
    if (flag) {
        text.textContent = "server is running ...";
        text.style.color = "green";
        bt.textContent = "Stop Server";
        flag = false;
    } else {
        text.textContent = "server is stopped !!!";
        text.style.color = "red";
        bt.textContent = "Start Server";
        flag = true;
    }
}
