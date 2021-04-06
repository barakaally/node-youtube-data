const YoutubeApi = require("../core/api/youtube-api");
const YExtractor = require("../core/util/extractor");

class Youtube extends YoutubeApi {

  constructor() {
    super();
  }
 
  /**
   * @param {string} videoId
   * @returns {Promise<{data:VideoInfo,errors?:any}>}
   */
  getVideoInfo(videoId) {
    return new Promise((resolve) => {
      this.fetchInfo(videoId).then((res) => {
        if (res.errors) {
          resolve({ data: null, errors: res.errors });
        } else {
          resolve({ data: YExtractor.toJson(res.body),errors:null });
        }
      });
    });
  }

  /**
   * @param {string } videoId
   * @param { Function} callback
   */
  getVideoInfo(videoId, callback) {
    this.fetchInfo(videoId).then((res) => {
      if (res.errors) {
        callback(res.errors, null);
      } else {
        callback(null,YExtractor.toJson(res.body));
      }
    });
  }
}

module.exports = { Youtube };
