'use strict';


const sbProjectName = document.getElementById("scrapbox-project-name");
const sbLimit = document.getElementById("scrapbox-limit");

const configSetBtn = document.getElementById("config-set");

const projectname = chrome.storage.sync.get(["sbProjectName"], res => {
  sbProjectName.value = res.sbProjectName || ""
})
const limit = chrome.storage.sync.get(["sblimit"], res => {
  sbLimit.value = res.sblimit || "500"
})

configSetBtn.addEventListener("click", () => {
  chrome.storage.sync.set({ "sbProjectName": sbProjectName.value })
  chrome.storage.sync.set({ "sblimit": sbLimit.value })
  alert('Done!')
});
