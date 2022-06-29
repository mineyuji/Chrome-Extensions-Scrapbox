let url = ''
chrome.storage.sync.get(["hookurl"], res => {
  url = res.hookurl
})
let sbProjectName = ''
chrome.storage.sync.get(["sbProjectName"], res => {
  sbProjectName = res.sbProjectName || ''
})
let limit = ''
chrome.storage.sync.get(["sblimit"], res => {
  limit = res.sblimit || '500'
})

async function getMyCreatePage() {
  const MYID = await fetch('https://scrapbox.io/api/users/me').then(res => res.json())
  const page = await fetch(`https://scrapbox.io/api/pages/${sbProjectName}?sort=created&limit=${limit}`)
    .then(res => res.json())
    .then(data => data.pages.filter(d => d.user.id === MYID.id))
  return page
}

getMyCreatePage().then((res) => {
  let data = ''

  res.map(v => {
    data += `<li class="my-1"><a href="https://scrapbox.io/${sbProjectName}/${v.title}" target="_blank">${v.title}</a></li>`
  })

  document.getElementById('popup').innerHTML = `<ul class='container'>${data}</ul>`
})
