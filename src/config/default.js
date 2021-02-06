/* eslint-disable no-irregular-whitespace */
const config = {
  /**
   * You can use this tool http://heymind.github.io/tools/microsoft-graph-api-auth
   * to get following params: client_id, client_secret, refresh_token & redirect_uri.
   */
  refresh_token: '0.AAAANXpj76Tc402RiDgDDXX8Msgi_tTvU7dHih0d5mX44jpKAME.AgABAAAAAAD--DLA3VO7QrddgJg7WevrAQDs_wQA9P9wJEUf2dnwEuZ_8WefDCNLDhSkJlabJDZXCgGo-s-MsGON9NGghh_sshHXsrBuDWiGpOr9TytGZz2xLDXV3w3aZt_Xd71MVTNwGSFCGgg-TYZoTDkMNcmVJd0eLBSwx4D15XxVv5MDfA_voNObfZM1JnOt-XBT6yt9E3jlhpPth3Y35_QpnJAlvXAuWf3NUIaT01rJD89m9xAJEvpN9CkYNoxN3zKsZukdv83-FFgcg9bmV4GaoLQE5tednsYn01j3JpxoGNsdgNiKLhDNKyWhFebmdJQhyuadAWrTUBzFsoH42l1BaXhDb7pZSMrYCtJpq5jLxDdquLsYEbZ3_zhqFzHnNE8uliwo72mCOsbI2G9sRRgVdkoUcdXce4-yqLkHzqzpqw1v9241mtz9ewl_mp7T9mRfke7wbvktOf0njmdyh4B6xcHZXexhqafMcXFBfz9fsVssAY0u-VXCDZwqgEzijx5kOJtP9bCApKA9FaSHfwtTBT6LO7MTssshX7c32ypAZbDoh_ZBRBpK7XeyYxcIoyMNFt_kWWYt5-El-RizUbcLlAnxjhn0j1VCyFt6y6WFruIlc8on5uG7mgTb8ZgDjIO_hZswOzcbsbBvL5jBYEpk4OQDmduFYKku5rTUVw77z33oMcBCZRQ8IZHe_k6VQoy3wtLUnjS5sGBkbO2uCu0CMboM91GhA1uMvhVi1jFti2QUdpHB4KsVAGPn_N4x60vs2cVdGfo6JbDGzE8tVPQWq0k54Bgq_67shEc9VXWiI4ypaNBiC8SxvoSMMn7YDB61QSeiTh8hQ_XIUrCZ8daJA_bPvsqmdZ8aQBrZ1P3oRbdbwxyVA53oLpw9J0dUlWAcNigb7c43wuMzB6PSbQXSJ4Ca6phag0zlAyYGmwR8hakjogCNmh3GxEDGzr5F25g0KC4nfxQl2nvAjLzcCAiYdebhJdW1nMdMEbTZlcc',
  client_id: 'd4fe22c8-53ef-47b7-8a1d-1de665f8e23a',
  client_secret: CLIENT_SECRET,
  redirect_uri: 'https://heymind.github.io/tools/microsoft-graph-api-auth',

  /**
   * The base path for indexing, all files and subfolders are public by this tool. For example: `/Public`.
   */
  base: '/Learning',

  /**
   * The url for your Firebase Realtime Database storage, we'll cache your refresh_token / access_token here.
   */
  firebase_url: 'https://quickstart-1588751141464.firebaseio.com/auth.json',

  /**
   * Feature: add OneDriveCN (21Vianet) support
   * Usage: simply change `useOneDriveCN` to true
   */
  useOneDriveCN: false,

  /**
   * Feature: Pagination when a folder has multiple(>${top}) files
   * - top: specify the page size limit of the result set, a big `top` value will slow down the fetching speed
   */
  pagination: {
    enable: true,
    top: 100 // default: 200, accepts a minimum value of 1 and a maximum value of 999 (inclusive)
  },

  /**
   * Feature Caching
   * Enable Cloudflare cache for path pattern listed below.
   * Cache rules:
   * - Entire File Cache  0 < file_size < entireFileCacheLimit
   * - Chunked Cache     entireFileCacheLimit  <= file_size < chunkedCacheLimit
   * - No Cache ( redirect to OneDrive Server )   others
   *
   * Difference between `Entire File Cache` and `Chunked Cache`
   *
   * `Entire File Cache` requires the entire file to be transferred to the Cloudflare server before
   *  the first byte sent to a client.
   *
   * `Chunked Cache` would stream the file content to the client while caching it.
   *  But there is no exact Content-Length in the response headers. ( Content-Length: chunked )
   *
   */
  cache: {
    enable: false,
    entireFileCacheLimit: 10000000, // 10MB
    chunkedCacheLimit: 100000000, // 100MB
    paths: ['/Images']
  },

  /**
   * Feature: Thumbnail
   * Show a thumbnail of image by ?thumbnail=small (small, medium, large)
   * More details: https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_list_thumbnails?view=odsp-graph-online#size-options
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?thumbnail=mediumSquare
   * You can embed this link (url encoded) directly inside Markdown or HTML.
   */
  thumbnail: true,

  /**
   * Small File Upload (<= 4MB)
   * POST https://<base_url>/<directory_path>/?upload=<filename>&key=<secret_key>
   */
  upload: {
    enable: false,
    key: 'your_secret_key_here'
  },

  /**
   * Feature: Proxy Download
   * Use Cloudflare as a relay to speed up download. (Especially in Mainland China)
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?raw=true&proxied
   * You can also embed this link (url encoded) directly inside Markdown or HTML.
   */
  proxyDownload: true
}

export default config
