let increase = 0;
let intervalId = undefined;
let firstLoad = true;
// setInterval(() => {
//   const url = new URL(location.href);
//   if (document.visibilityState === "visible") {
//     count++;
//     console.log(count);
//   }
//   if (document.visibilityState === "hidden") {
//     console.log("hidden", count);
//     chrome.runtime.sendMessage({ message: { type: "collect", host: url.hostname, count: count, } });
//     count = 0;
//   }
// }, 1000);


count();
const url = new URL(location.href);

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    console.log("visible");
    count();
  } else {
    console.log("hidden")
    sendData();
  }
});

function sendData() {
  if (intervalId) clearInterval(intervalId);
  console.log("sending data");
  chrome.runtime.sendMessage({ message: { type: "collect", host: url.hostname, count: increase, } });
  increase = 0;
  intervalId = undefined;
}

function count() {
  if (intervalId === undefined) {
    intervalId = setInterval(() => {
      increase++;
      console.log(increase, intervalId);
    }, 1000);
  }
  
}

window.addEventListener("beforeunload", function() {
  console.log("beforeunload")
  sendData();
})