// dom nodes
const buttons = document.querySelectorAll("button");
const tabs = document.querySelectorAll("div");

// function
function handleClick() {
  hiddenAllTabs();
  disableActionButton();
  const selectId = this.getAttribute("id");
  const currentTab = document.querySelector(`div[tab-id='${selectId}']`);
  currentTab.style.display = "block";

//   click action button
  this.style.background = "lightblue";
  this.style.color = "white";
}
function hiddenAllTabs() {
  for (const tab of tabs) {
    tab.style.display = "none";
  }
}
function disableActionButton() {
    for (const btn of buttons) {
        btn.style.background = "white";
        btn.style.color = "lightblue";
    }
}

// events
for (const button of buttons) {
  button.addEventListener("click", handleClick);
}
