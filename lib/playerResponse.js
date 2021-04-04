class PlayerResponse {
  /**
     * {
    @param {ResponseContext} responseContext,
    @param {PlayabilityStatus} playabilityStatus,
    @param {StreamingData} streamingData,
    @param {PlaybackTracking} playbackTracking,
    @param {Caption} captions,
    @param {videoDetail} videoDetails,
    @param {Array<Object>} annotations,
    @param {PlayerConfig} playerConfig,
    @param {Storyboard} storyboards,
    @param {Microformat} microformat,
    @param {string} trackingParams,
    @param {Attestation} attestation
*/
}

class ResponseContext {
  /**
      @param {Array} serviceTrackingParams,
      @param {Object} mainAppWebResponseContext,
      @param {Object} webResponseContextExtensionData
     */
}

class PlayabilityStatus {
  /**
      @param {string} status,
      @param {Boolean} playableInEmbed,
      @param {Object} miniplayer
     */
}

class StreamingData {
  /**
      @param {string} expiresInSeconds,
      @param {Array} formats,
      @param {Array}  adaptiveFormats
     */
}

class PlaybackTracking {
  /**
     @param {Object} videostatsPlaybackUrl,
     @param {Object} videostatsDelayplayUrl,
     @param {Object} videostatsWatchtimeUrl,
     @param {Object} ptrackingUrl,
     @param {Object} qoeUrl,
     @param {Object} atrUrl,
     @param {Object} youtubeRemarketingUrl
    */
}

class Caption {
  /**
    @param {Object} playerCaptionsRenderer,
    @param {Object} playerCaptionsTracklistRenderer
    */
}

class videoDetail {
  /**
    @param {string} videoId,
    @param {string} title,
    @param {string} lengthSeconds,
    @param {Array} keywords,
    @param {string} channelId,
    @param {Boolean}  isOwnerViewing,
    @param {string}shortDescription,
    @param {Boolean}  isCrawlable,
    @param {Object} thumbnail,
    @param {number} averageRating,
    @param {Boolean}  allowRatings,
    @param {string} viewCount,
    @param {string} author,
    @param {Boolean}  isPrivate,
    @param {Boolean}  isUnpluggedCorpus,
    @param {Boolean}  isLiveContent
     */
}

class PlayerConfig {
  /** 
    @param {Object} audioConfig,
    @param {Object} streamSelectionConfig,
    @param {Object} daiConfig,
    @param {Object} mediaCommonConfig,
    @param {Object} webPlayerConfig
*/
}

class Storyboard {
  /**
    @param {Object} playerStoryboardSpecRenderer 
    */
}

class Microformat {
  /**
   *  @param {Object}  playerMicroformatRenderer
   */
}

class Attestation {
  /**
   * @param {Object} playerAttestationRenderer
   */
}
