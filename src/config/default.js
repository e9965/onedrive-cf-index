/* eslint-disable no-irregular-whitespace */
const config = {
  /**
   * You can use this tool http://heymind.github.io/tools/microsoft-graph-api-auth
   * to get following params: client_id, client_secret, refresh_token & redirect_uri.
   */
  refresh_token: '0.AAAANXpj76Tc402RiDgDDXX8Mu5tH3VF65JCqeWhl4zR0bFKAME.AgABAAAAAAB2UyzwtQEKR7-rWbgdcBZIAQDs_wIA9P_jE4g84Ks_gfk2-zgmLP3Q6SYIsc823-l0ht_GXuukG6IhaYIj4a036CHhdfntvIovMXyEJykWPL6he3E6b_Y0mFhTFQKLPymr7f3bqYQ3k81646usN4r6RQT3lIlH1q6AawSj05nyaHkNw7aqdPN-DmbFZtgW-3IQpGKCMzAoTAoi5YnLwTTrAhTxyIIKOaZmtiiiQ4YyNeZ6Rs1rJcuXbZRjbcMfa8bXzsuK_SPUCOEvIyfgJmTNInqT0HhobZWgf1PuZNxUs5Bsb2hQxUagfMJzbh87wZGX6IwucDfrfnAFnE-YdXh_izh9QZlKKnPRCFHsi1_SzVQIKC4EfG4xSKgJ8Vqldu9wRADO7GTj2_oKI0e8mp1zM_7Ivu3y53C31fMIuMZvikoLopWr8PNdddRzfxftoipKUGt1K2gg0U4JzrBMn8HkT_kXKEQfzuAVb1bf8dWLrZHwOyE4KhO59cHrhyezceDoV338RcfD1DjFqxZ_og36Y2GXzHqfbdUgH9PrvaTP672R6AyX3PKLyWhnLeLVm84Yaa24tPQeEQBDZFrUh1St2Mib8OQxVnF12xzPSIPfcMrMNYcpgyznxwU6u-DwyU0Zb54rbtw8JkjAIHFXNHNkpT4uYEnkNKW8wfkFdyVQWB-Q98Y8v_reYzhos0O2XjvOCemkTeqXn0wFD5-urvciXBG_lBJoqpo_YDVFL6D3qKgE3xTM1jaecbEs4utYKppkNcsRZTp3pg9YyhEtZ5syrUa4c_RICcKHFTYPsKLDZ2_cHy-bXrajZ6Xdpr2iXX4gykR0yJNH166Z26VcWovi_7Xy6PJ9Gaz8xSvgwPwEt4_XwElyi0v9DfYsCH6Cb72JmjRu6aU_ZrSkr04uqE-o9-FEXO7HYC29dsfvuvlLC1wy4fW6mv55zQx53OgvP3M2dheKMNORoMEU98MtgVwom5vGS-BHXTgdMRxRJDJJQENNaAY6kN3rL7I9x-yHtepPxunLVySvCkJc_FBGp7fb10a_2m-SlcC8zIuxl93PEoHcWsKEIb56eFgerEEgzsRfsuw1tvjaRNialV_kQD_RRcyKJ00bKAZEEf-FB6dSJM7O__OpllORtG4uD02r7DO-ctDgIKJt7cY9CTPYG2njaA6Pnh4pn7gLN1w09njC0OUSLst1YM54RMxRSUTOFS87BKZGTJ0ensEbm7VNn4eJ51RFTya92YsL136UjBRHpI_CAJg4M0B6tg',
  client_id: '751f6dee-eb45-4292-a9e5-a1978cd1d1b1',
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
