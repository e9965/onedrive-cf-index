import { favicon } from './favicon'

const COMMIT_HASH = '5d7579fcfb4729fcb855110c5f0ed5488d1d0d44'

const pagination = (pIdx, attrs) => {
  const getAttrs = (c, h, isNext) =>
    `class="${c}" ${h ? `href="pagination?page=${h}"` : ''} ${
      isNext === undefined ? '' : `onclick="handlePagination(${isNext})"`
    }`
  if (pIdx) {
    switch (pIdx) {
      case pIdx < 0 ? pIdx : null:
        attrs = [getAttrs('pre', -pIdx - 1, 0), getAttrs('next off', null)]
        break
      case 1:
        attrs = [getAttrs('pre off', null), getAttrs('next', pIdx + 1, 1)]
        break
      default:
        attrs = [getAttrs('pre', pIdx - 1, 0), getAttrs('next', pIdx + 1, 1)]
    }
    return `${`<a ${attrs[0]}><i class="fas fa-angle-left" style="font-size: 8px;"></i> PREV</a>`}<span>Page ${pIdx}</span> ${`<a ${attrs[1]}>NEXT <i class="fas fa-angle-right" style="font-size: 8px;"></i></a>`}`
  }
  return ''
}

export function renderHTML(body, pLink, pIdx) {
  pLink = pLink ? pLink : ''
  const p = 'window[pLinkId]'

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge, chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <title>Drive Bus</title>
      <link rel="shortcut icon" type="image/png" sizes="16x16" href="${favicon}" />
      <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.13.1/css/all.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/spencerwooo/onedrive-cf-index@${COMMIT_HASH}/themes/spencer.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@gh-pages/github-markdown.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/spencerwooo/onedrive-cf-index@${COMMIT_HASH}/themes/prism-github.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/prism.min.js" data-manual></script>
      <script src="https://cdn.jsdelivr.net/npm/prismjs@1.17.1/plugins/autoloader/prism-autoloader.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/turbolinks@5.2.0/dist/turbolinks.min.js"></script>
      <script type="text/javascript">
        var FinalTime = 1648771200000;
        var STime = 1609835400000;
        setInterval(function() {
          NotRetain();
        }, 500)
        function NotRetain() {
        var NowTime = parseInt(new Date().getTime() );
        var time = parseInt((FinalTime - NowTime) / 1000)
        var tenminute = parseInt(time/600);
        var leftday = parseInt(tenminute/144);
        document.getElementById("eminute").innerHTML = tenminute;
        document.getElementById("eleftday").innerHTML = leftday;
        var SEtime = parseInt((STime - NowTime) / 1000)
        var Stenminute = parseInt(SEtime/600);
        var Sleftday = parseInt(Stenminute/144);
        document.getElementById("seminute").innerHTML = Stenminute;
        document.getElementById("seleftday").innerHTML = Sleftday;
        }
      </script>
    </head>
    <body>
      <nav id="navbar" data-turbolinks-permanent><div class="brand">📁 Kenny's Study Materials on Onedrive</div></nav>
      ${body}
      <div class="paginate-container">${pagination(pIdx)}</div>
      <div id="flex-container" data-turbolinks-permanent style="flex-grow: 1;"></div>
      <footer id="footer" data-turbolinks-permanent>
      <p>Powered by <a href="https://github.com/spencerwooo/onedrive-cf-index">onedrive-cf-index</a>, hosted on <a href="https://www.cloudflare.com/products/cloudflare-workers/">Cloudflare Workers</a>.</p>
      <p class="hero-text">
      距離F5-1st-Exam開始剩下：
      <span id="seminute"></span> 個十分鐘 ( 共 <span id="seleftday"></span> 天 ）<br>
      距離DSE開始剩下：
      <span id="eminute"></span> 個十分鐘 ( 共 <span id="eleftday"></span> 天 ）
      </p>
      </footer>
      <script>
        if (typeof ap !== "undefined" && ap.paused !== true) {
          ap.pause()
        }
        Prism.highlightAll()
        mediumZoom('[data-zoomable]')
        if ('${pLink}') {
          if (!window.pLinkId) history.pushState(history.state, '', location.pathname.replace('pagination', ''))
          if (location.pathname.endsWith('/')) {
            pLinkId = history.state.turbolinks.restorationIdentifier
            ${p} = [['${pLink}'], 1]
          }
          if (${p}[0].length < ${p}[1]) (${p} = [[...${p}[0], '${pLink}'], ${p}[1]])
        }
        function handlePagination(isNext) {
          isNext ? ${p}[1]++ : ${p}[1]--
          addEventListener(
            'turbolinks:request-start',
            event => {
              const xhr = event.data.xhr
              xhr.setRequestHeader('pLink', ${p}[0][${p}[1] -2])
              xhr.setRequestHeader('pIdx', ${p}[1] + '')
            },
            { once: true }
          )
        }
        Turbolinks.start()
      </script>
    </body>
  </html>`
}
