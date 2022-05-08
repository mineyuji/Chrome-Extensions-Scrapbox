async function getMyCreatePage() {
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
  let gateway = ''
  chrome.storage.sync.get(["apiGateway"], res => {
    gateway = res.apiGateway || ''
  })

  const MYID = await fetch('https://scrapbox.io/api/users/me').then(res => res.json())
  const page = await fetch(`https://scrapbox.io/api/pages/${sbProjectName}?sort=created&limit=${limit}`)
    .then(res => res.json())
    .then(data => data.pages.filter(d => d.user.id === MYID.id))

  fetch(gateway, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "page": page, "url": url })
  })
    .then(res => res.json())
    .then(data => {
      console.log('Success:', data)
      alert('Complete!')
    })
    .catch(error => console.log('Error:', error))
}

getMyCreatePage()
