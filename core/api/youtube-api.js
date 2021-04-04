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
        (err, response, body) => {
          if (err) {
            resolve({ response, body, errors: err });
          } else {
            resolve({ response, body });
          }
        }
      );
    });
  }
}

module.exports = YoutubeApi;
