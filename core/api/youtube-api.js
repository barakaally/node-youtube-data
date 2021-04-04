const request = require("request");

class YoutubeApi {

  constructor() {}
 
  /**
   * @param { string } videoId
   * @returns {Promise<{response,body,errors}>}
   */
  fetchInfo(videoId) {
    return new Promise((resolve) => {
      request(
        `https://www.youtube.com/get_video_info?video_id=${videoId}&el=embedded&ps=default&eurl=&gl=US&hl=en`,
        (errors, response, body) => {
          resolve({ response, body, errors});
        }
      );
    });
  }
}

module.exports = YoutubeApi;
