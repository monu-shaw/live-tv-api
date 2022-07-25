# Live Tv Api Made With Express 
This Api provide the m3u8 links of free to Air Channel of all over the world. You can simply make (GET) request and get datas. And then you can add it to your Projects So you Can test, I request you to only use this api for testing purpose only.

## Features
 Get Links Of Specific Stream Quality Of Channel\
 Low => 144p - 240p \
 Mid => 360p - 480p \
 high => 480p - 720p \
 Language => Hindi, English, Indian Regionals, Russian or etc \
 category of Channel => news, music, movie, information and manymore \
 
 ## Api's End-Points
 All Channels - [https://live-tv-api.herokuapp.com/channelapi/getAll](https://live-tv-api.herokuapp.com/channelapi/getAll) give Array Of all The channels \
 ###Response \
 [
  {
    "_id": "62ceb3a1625a7986acac3975",
    "name": "india tv",
    "imgUrl": "",
    "low": "https://m-c04-j2apps.s.llnwi.net/hls/0091.IndiaTV.in_216p/index.m3u8",
    "mid": "https://m-c04-j2apps.s.llnwi.net/hls/0091.IndiaTV.in_216p/index.m3u8",
    "high": "https://m-c04-j2apps.s.llnwi.net/hls/0091.IndiaTV.in_216p/index.m3u8",
    "category": "news",
    "__v": 0,
    "hd": "",
    "language": "hindi"
  },
  {
    "_id": "62ceb54e625a7986acac398a",
    "name": "abp news",
    "imgUrl": "",
    "low": "https://m-c04-j2apps.s.llnwi.net/hls/7014.ABPNews.in_144p/index.m3u8",
    "mid": "https://m-c04-j2apps.s.llnwi.net/hls/7014.ABPNews.in_216p/index.m3u8",
    "high": "https://m-c04-j2apps.s.llnwi.net/hls/7014.ABPNews.in_360p/index.m3u8",
    "category": "news",
    "__v": 0,
    "hd": "",
    "language": "hindi"
  },
  {
    "_id": "62d178a95127834ac9559d2f",
    "name": "e24",
    "imgUrl": "",
    "low": "https://yuppirecloriginvt.akamaized.net/290422/smil:e24.smil/chunklist_b264000.m3u8?hdntl=exp=1657980989~acl=!*/290422/smil:e24.smil/*!/payload/yuppTVCom_61_-1_b5681513e86b4b02_IN_117.226.204.134/*~data=hdntl~hmac=30b354f751ed0a93de9968c501610739cd917f72d2a335e3087b6a9c0e2fa3a6&hdnts=st=1657894576~exp=1657898176~acl=!*/290422/smil:e24.smil/*!/payload/yuppTVCom_61_-1_b5681513e86b4b02_IN_117.226.204.134/*~hmac=dcc36d3d433a50a72e9a85df2d13a01dfb6a057c9dae3a845fea327062dd8d59&ads.app_bundle=&ads.app_store_url=&ads.content_livestream=1&ads.lang=HIN&ads.content_genre=MUS&ads.channel=2715",
    "mid": "https://yuppirecloriginvt.akamaized.net/290422/smil:e24.smil/chunklist_b896000.m3u8?hdntl=exp=1657980989~acl=!*/290422/smil:e24.smil/*!/payload/yuppTVCom_61_-1_b5681513e86b4b02_IN_117.226.204.134/*~data=hdntl~hmac=30b354f751ed0a93de9968c501610739cd917f72d2a335e3087b6a9c0e2fa3a6&hdnts=st=1657894576~exp=1657898176~acl=!*/290422/smil:e24.smil/*!/payload/yuppTVCom_61_-1_b5681513e86b4b02_IN_117.226.204.134/*~hmac=dcc36d3d433a50a72e9a85df2d13a01dfb6a057c9dae3a845fea327062dd8d59&ads.app_bundle=&ads.app_store_url=&ads.content_livestream=1&ads.lang=HIN&ads.content_genre=MUS&ads.channel=2715",
    "high": "https://yuppirecloriginvt.akamaized.net/290422/smil:e24.smil/chunklist_b1328000.m3u8?hdntl=exp=1657980989~acl=!*/290422/smil:e24.smil/*!/payload/yuppTVCom_61_-1_b5681513e86b4b02_IN_117.226.204.134/*~data=hdntl~hmac=30b354f751ed0a93de9968c501610739cd917f72d2a335e3087b6a9c0e2fa3a6",
    "hd": "https://yuppirecloriginvt.akamaized.net/290422/smil:e24.smil/chunklist_b1928000.m3u8",
    "language": "hindi",
    "category": "music",
    "__v": 0
  }
]
 Specific Channel -[https://live-tv-api.herokuapp.com/channelapi/getOne/62ceb3a1625a7986acac3975](https://live-tv-api.herokuapp.com/channelapi/getOne/62ceb3a1625a7986acac3975) get data About of specific channel in the last (62ceb3a1625a7986acac3975) is id of channel you should call (getOne) endpoint and add id into it like - baseURL/getOne/62ceb3a1625a7986acac3975 \
 ###Response
 {
  "_id": "62ceb54e625a7986acac398a",
  "name": "abp news",
  "imgUrl": "",
  "low": "https://m-c04-j2apps.s.llnwi.net/hls/7014.ABPNews.in_144p/index.m3u8",
  "mid": "https://m-c04-j2apps.s.llnwi.net/hls/7014.ABPNews.in_216p/index.m3u8",
  "high": "https://m-c04-j2apps.s.llnwi.net/hls/7014.ABPNews.in_360p/index.m3u8",
  "category": "news",
  "hd": "",
  "language": "hindi"
}
 
 ## Live Project Made Over the Api's
 SEE Here [https://live-tv-react.herokuapp.com/](live-tv-react.herokuapp.com/)
 
 
