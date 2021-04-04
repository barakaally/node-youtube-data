# YoutubeData

## Typescript or ES6
```import {YoutubeData} from 'node-youtube-data';``` 
## Common js
```const YoutubeData= require('node-youtube-data');```
## Create instance of YoutubeData 
```const api=new YoutubeData(); ```
### To retrive YoutubeVideo data ,will need to use getVideoInfo method
### There are 3 ways to use it ,by using :-
1. async/await
2. promise
3. callback function

## How to use getVideoInfo with async/await
#### function must be wrapped inside async method
```
const response=await api.getVideoInfo('videoId')
     if(response){
      const data=response.data;
     }
```

## How to use getVideoInfo with Promise

```
api.getVideoInfo('videoId').then(res=>{
    if(res){
      const data=res.data;
    }
})
```


## How to use getVideoInfo with Callback
```
api.getVideoInfo('videoId',(errors,data)=>{
      const data=data;
})
```

### The data response from Youtube is very big Json object but the interesting part is video url ,but before all we can have two type of videos, encrpted(ciphered) and non-encrypted
Sample response for ciphered video
```
{
        "csn": "GJxpYIjqN-LJsAKIkJbwAQ",
        "root_ve_type": "27240",
        "vss_host": "s.youtube.com",
        "cr": "US",
        "host_language": "en",
        "hl": "en_US",
        "innertube_api_key": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
        "innertube_api_version": "v1",
        "innertube_context_client_version": "2.20210401.06.00",
        "watermark": "https://s.ytimg.com/yts/img/watermark/youtube_watermark-vflHX6b6E.png,https://s.ytimg.com/yts/img/watermark/youtube_hd_watermark-vflAzLcD6.png",
        "c": "WEB",
        "cver": "2.20210401.06.00",
        "player_response": {

            "streamingData": {
                "expiresInSeconds": "21540",
                "formats": [
                    {
                        "ciphered": true,
                        "itag": "18",
                        "mimeType": "video/mp4;+codecs=\"avc1.42001E,+mp4a.40.2\"",
                        "bitrate": "706170",
                        "width": "640",
                        "height": "360",
                        "lastModified": "1599907483477795",
                        "contentLength": "12366639",
                        "quality": "medium",
                        "fps": "24",
                        "qualityLabel": "360p",
                        "projectionType": "RECTANGULAR",
                        "averageBitrate": "705883",
                        "audioQuality": "AUDIO_QUALITY_LOW",
                        "approxDurationMs": "140155",
                        "audioSampleRate": "44100",
                        "audioChannels": "2",
                        "signatureCipher": {
                            "s": "8Oq1Oq0QJjwRgIhALwAvc1aDkgbdXxnFrh8jSTg=WCyAoGkolchtjdZq2KZAjEA7lO4mKC7Su6q9IEdqIpQPtc4C55M8ML5BsXldWzCsX0iX0i",
                            "sp": "sig",
                            "url": "https://r2---sn-uujau1-q5ge.googlevideo.com/videoplayback?expire=1617555576&ei=GJxpYIjqN-LJsAKIkJbwAQ&ip=41.59.81.20&id=o-AJlbFpM2Kaw8M6_r-ny7ERu0NtPWxB3ad4bmdhdRx4ev&itag=18&source=youtube&requiressl=yes&mh=oO&mm=31%2C29&mn=sn-uujau1-q5ge%2Csn-hpa7kn7e&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=123750&vprv=1&mime=video%2Fmp4&ns=Cg6esorNBv4ei0gojiry0JsF&gir=yes&clen=12366639&ratebypass=yes&dur=140.155&lmt=1599907483477795&mt=1617533568&fvip=6&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=ZrjBYmq4IJqCLFD0A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAJiiLinwXktDwL4nnlIcXatf1GgvKM7p0PsST2Q2WYaJAiEAwoJkAXpYApAnLrxr2Hb4_s4Udo7LyAMxpAmc7zRpXJo%3D"
                        }
                    } 
                ],
                "adaptiveFormats": [
                    {
                        "ciphered": true,
                        "itag": "251",
                        "mimeType": "audio/webm;+codecs=\"opus\"",
                        "bitrate": "143321",
                        "initRange": "[object Object]",
                        "indexRange": "[object Object]",
                        "lastModified": "1599907451629082",
                        "contentLength": "2324408",
                        "quality": "tiny",
                        "projectionType": "RECTANGULAR",
                        "averageBitrate": "132708",
                        "audioQuality": "AUDIO_QUALITY_MEDIUM",
                        "approxDurationMs": "140121",
                        "audioSampleRate": "48000",
                        "audioChannels": "2",
                        "loudnessDb": "5.8800001",
                        "signatureCipher": {
                            "s": "8OqmOq0QJ6wRQIhALUAykmD7yTmOaAvhlU5VzyU=W08noE4tSmEy3gKalpJAZBKWwQsIX-QKSHNN28NY7o3_iK_jfViAvjjxnW-Pso5cQ=iQ=i",
                            "sp": "sig",
                            "url": "https://r2---sn-uujau1-q5ge.googlevideo.com/videoplayback?expire=1617555576&ei=GJxpYIjqN-LJsAKIkJbwAQ&ip=41.59.81.20&id=o-AJlbFpM2Kaw8M6_r-ny7ERu0NtPWxB3ad4bmdhdRx4ev&itag=251&source=youtube&requiressl=yes&mh=oO&mm=31%2C29&mn=sn-uujau1-q5ge%2Csn-hpa7kn7e&ms=au%2Crdu&mv=m&mvi=2&pl=24&initcwndbps=123750&vprv=1&mime=audio%2Fwebm&ns=RH0q5w37Li_MOTtL9oAnWocF&gir=yes&clen=2324408&dur=140.121&lmt=1599907451629082&mt=1617533568&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=5531432&n=2vVx0HhfoeNePVDEy&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJf7ENTuzJgUP6rTgHcMhlzjw4We9b6ogcodjZnu_Tt-AiAqE-WurFnVMsi31LkKL86v_DQZLO4Gpw8fTt3tIvLhTw%3D%3D"
                        }
                    }
                ]
            },
        
        "status": "ok"
    }
    }
```

### From above response video can be accessed by
```
data.player_response.streamingData.formats[0].signatureCipher.url+&signature={deciphered signature }
```

Sample response for non-ciphered video
```
{
        "csn": "DK5pYIPDNeiOmLAPyr-_oAM",
        "root_ve_type": "27240",
        "vss_host": "s.youtube.com",
        "cr": "US",
        "host_language": "en",
        "hl": "en_US",
        "innertube_api_key": "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
        "innertube_api_version": "v1",
        "innertube_context_client_version": "2.20210401.06.00",
        "watermark": "https://s.ytimg.com/yts/img/watermark/youtube_watermark-vflHX6b6E.png,https://s.ytimg.com/yts/img/watermark/youtube_hd_watermark-vflAzLcD6.png",
        "c": "WEB",
        "cver": "2.20210401.06.00",
        "player_response": {
            "streamingData": {
                "expiresInSeconds": "21540",
                "formats": [
                    {
                        "ciphered": false,
                        "itag": "22",
                        "url": "https://r2---sn-uujau1-q5ge.googlevideo.com/videoplayback?expire=1617560172&ei=DK5pYIPDNeiOmLAPyr-_oAM&ip=41.59.81.20&id=o-ALMYkpxgYx0_Psmea1HkrM3JTpXJxc5pXWsagvb4OGwU&itag=22&source=youtube&requiressl=yes&mh=sv&mm=31,29&mn=sn-uujau1-q5ge,sn-hpa7kn7z&ms=au,rdu&mv=m&mvi=2&pl=24&initcwndbps=117500&vprv=1&mime=video/mp4&ns=wsKBX9LlI-WHJNQSgnRWJLkF&cnr=14&ratebypass=yes&dur=2435.587&lmt=1616926733174412&mt=1617538365&fvip=6&fexp=24001373,24007246&c=WEB&txp=6316222&n=M7OI8sd-YxgiJMuFT&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,cnr,ratebypass,dur,lmt&sig=AOq0QJ8wRAIgIRI7oI4qns73kFTz77ieP5004tfXOMLv3abCzHQGAVMCIAyx5kZSPYf3lBjXJcC-EtDfYrhjLZ7ndEtO7Mb56osA&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRAIgYbBbZh47atXrjcxF7wEebxZnd3eBfSw79iILZg9mZ0cCIGBlGGqsLsF0Dzbjgm3TXkWD-se87Ge9WKJnPuvb8zub",
                        "mimeType": "video/mp4;+codecs=\"avc1.64001F,+mp4a.40.2\"",
                        "bitrate": "2111395",
                        "width": "1280",
                        "height": "720",
                        "lastModified": "1616926733174412",
                        "quality": "hd720",
                        "fps": "25",
                        "qualityLabel": "720p",
                        "projectionType": "RECTANGULAR",
                        "audioQuality": "AUDIO_QUALITY_MEDIUM",
                        "approxDurationMs": "2435587",
                        "audioSampleRate": "44100",
                        "audioChannels": "2"
                    }
                    
                ],
                "adaptiveFormats": [
                    {
                        "ciphered": false,
                        "itag": "251",
                        "url": "https://r2---sn-uujau1-q5ge.googlevideo.com/videoplayback?expire=1617560172&ei=DK5pYIPDNeiOmLAPyr-_oAM&ip=41.59.81.20&id=o-ALMYkpxgYx0_Psmea1HkrM3JTpXJxc5pXWsagvb4OGwU&itag=251&source=youtube&requiressl=yes&mh=sv&mm=31,29&mn=sn-uujau1-q5ge,sn-hpa7kn7z&ms=au,rdu&mv=m&mvi=2&pl=24&initcwndbps=117500&vprv=1&mime=audio/webm&ns=eCMTyjQDydOXLV5sDhJIOJ4F&gir=yes&clen=37768509&dur=2435.541&lmt=1616926597399228&mt=1617538365&fvip=6&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=6311222&n=0zkXqmXqYwmVA7hqL&sparams=expire,ei,ip,id,itag,source,requiressl,vprv,mime,ns,gir,clen,dur,lmt&sig=AOq0QJ8wRQIgTT4KUP4Fk22-9tSF2KRSqHVE6TJz0S6w5jesvH1bMCwCIQCto02PvbpmRe3orhSw9wygRob0K3wV_vOGwuiB_MKYrA==&lsparams=mh,mm,mn,ms,mv,mvi,pl,initcwndbps&lsig=AG3C_xAwRAIgYbBbZh47atXrjcxF7wEebxZnd3eBfSw79iILZg9mZ0cCIGBlGGqsLsF0Dzbjgm3TXkWD-se87Ge9WKJnPuvb8zub",
                        "mimeType": "audio/webm;+codecs=\"opus\"",
                        "bitrate": "140469",
                        "initRange": "[object Object]",
                        "indexRange": "[object Object]",
                        "lastModified": "1616926597399228",
                        "contentLength": "37768509",
                        "quality": "tiny",
                        "projectionType": "RECTANGULAR",
                        "averageBitrate": "124057",
                        "audioQuality": "AUDIO_QUALITY_MEDIUM",
                        "approxDurationMs": "2435541",
                        "audioSampleRate": "48000",
                        "audioChannels": "2",
                        "loudnessDb": "2.3900003"
                    }
                    
                ]
            },
            
        "status": "ok"
    }
}
```
### From above response video can be accessed by
```
data.player_response.streamingData.formats[0].url
```