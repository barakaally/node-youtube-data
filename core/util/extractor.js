const VideoInfo = require("./../../lib/videoInfo");
const Decoder = require("./decoder");

class YExtractor {
  /**
   * @param {string} videoInfo @description videoInfo url encoded
   * @returns {VideoInfo}   @description videoInfo json formated
   */
  static toJson(videoInfo) {
    let a = Decoder.decodeUrl(videoInfo).split("&");
    let b = {};
    a.forEach((y) => {
      const z = y.split("=");
      if (z.length == 2) {
        b[z[0]] = z[1].replace("+", "").replace(",", "");
      } else {
        if (z.includes("player_response")) {
          const y = z.filter((x) => x !== "player_response").join("=");
          b["player_response"] = JSON.parse(y);
          b["player_response"]["streamingData"] = this.sD(
            b["player_response"]["streamingData"]
          );
        }
      }
    });

    return b;
  }

  /**
   * @param {object} s @description streamingData url encoded 
   * @returns {StreamingData} @description streamingData json formated
   * @private
   */

  static sD(s) {
    Object.keys(s).forEach((t) => {
      if (t === "formats" || t === "adaptiveFormats") {
        s[t].forEach((f) => {
          let fs = [];
          let b = {};
          Object.keys(f).forEach((g) => {
            if (g === "signatureCipher") {
              let c = {};
              b["ciphered"] = true;
              f[g].split("&").forEach((h) => {
                const z = h.split("=");
                if (z.length == 2) {
                  c[z[0]] = Decoder.decodeUrl(z[1]);
                }
              });
              b[g] = c;
            } else {
              b["ciphered"] = false;
              b[g] = Decoder.decodeUrl(f[g]);
            }
            fs.push(b);
          });

          s[t] = fs;
          fs = [];
        });
      } else {
        s[t] = Decoder.decodeUrl(s[t]);
      }
    });

    return s;
  }
}

module.exports = YExtractor;
