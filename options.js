'use strict';

const hookURL = document.getElementById("webhook-url");
const sbProjectName = document.getElementById("scrapbox-project-name");
const sbLimit = document.getElementById("scrapbox-limit");
const apiGateway = document.getElementById("aws-api-gateway");

const configSetBtn = document.getElementById("config-set");

const url = chrome.storage.sync.get(["hookurl"], res => {
  hookURL.value = res.hookurl || ""
})
const projectname = chrome.storage.sync.get(["sbProjectName"], res => {
  sbProjectName.value = res.sbProjectName || ""
})
const limit = chrome.storage.sync.get(["sblimit"], res => {
  sbLimit.value = res.sblimit || "500"
})
const gateway = chrome.storage.sync.get(["apiGateway"], res => {
  apiGateway.value = res.apiGateway || ""
})

configSetBtn.addEventListener("click", () => {
  chrome.storage.sync.set({ "hookurl": hookURL.value })
  chrome.storage.sync.set({ "sbProjectName": sbProjectName.value })
  chrome.storage.sync.set({ "sblimit": sbLimit.value })
  chrome.storage.sync.set({ "apiGateway": apiGateway.value })
  alert('Done!')
});
