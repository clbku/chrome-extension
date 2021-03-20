function randomColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function updateTime(data) {
  chrome.storage.sync.get(null, function(visit) {
    if (data.host) {
      console.log(data.count)
      if (visit.hasOwnProperty(data.host)) visit[data.host].visitDuration += data.count;
      else visit[data.host] = {
        visitDuration: data.count,
        host: data.host,
        color: randomColor()
      };
      chrome.storage.sync.set({[data.host]: visit[data.host] }, function() {
        if(chrome.runtime.lastError) {
          console.error(
            "Error setting " + data.host + " to " + JSON.stringify(data) +
            ": " + chrome.runtime.lastError.message
          );
        }
      });
    }
  });
}

function blockSite(site) {
  chrome.storage.sync.get("blocking", function(sites) {
    console.log(sites);
    chrome.storage.sync.set({"blocking": [...Object.values(sites), site] }, function() {
      if(chrome.runtime.lastError) {
        console.error(
          "Error setting " + key + " to " + JSON.stringify(data) +
          ": " + chrome.runtime.lastError.message
        );
      }
    });
    console.log([...Object.values(sites), site].map(s => "*://" + s +"/*"));
    // chrome.webRequest.onBeforeRequest.addListener(
    //   function() {
    //     return {cancel: true};
    //   },
    //   {
    //     urls: []
    //   },
    //   ["blocking"]
    // );
  })
  
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message.type === "collect") {
    updateTime(request.message)
  }
  // else if (request.message.type === "block") {
  //   blockSite(request.message.host)
  // }
});