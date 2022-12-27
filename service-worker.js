/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "3d-druck.jpg",
    "revision": "97358b2c8db7c65b10ee2a8625c1eefb"
  },
  {
    "url": "404.html",
    "revision": "c8ea5856bf5937a1403745716f1112e9"
  },
  {
    "url": "asksinpp.jpg",
    "revision": "ec97d1bb19c982ded43e25e0a4f7f6b0"
  },
  {
    "url": "assets/css/0.styles.f420f64c.css",
    "revision": "f50682a0f9123d740264a909e838deb1"
  },
  {
    "url": "assets/img/1.101a2a46.jpg",
    "revision": "101a2a46216cda282206a992bd021ad8"
  },
  {
    "url": "assets/img/10.e6742caa.jpg",
    "revision": "e6742caa56458d09e49344c95715179b"
  },
  {
    "url": "assets/img/11.bdb73296.jpg",
    "revision": "bdb73296d1e3626c90b342bce154d34d"
  },
  {
    "url": "assets/img/3.0a9bbe35.jpg",
    "revision": "0a9bbe35693b33f63e7a237d5ac2350c"
  },
  {
    "url": "assets/img/3d-druck.6dd36767.jpg",
    "revision": "6dd367677a077efb8a13523bb6426f3b"
  },
  {
    "url": "assets/img/4.57066ddb.jpg",
    "revision": "57066ddbc9741ec711d435ed9068c37a"
  },
  {
    "url": "assets/img/5.ed01cb66.jpg",
    "revision": "ed01cb666c13d94741d3ee1ab933e143"
  },
  {
    "url": "assets/img/6.6fb4fa87.jpg",
    "revision": "6fb4fa87810c38f28bbfd7810edac9f7"
  },
  {
    "url": "assets/img/7.09183df1.jpg",
    "revision": "09183df1586af5ed6e0ce4e4ec832380"
  },
  {
    "url": "assets/img/8.9242ecf3.jpg",
    "revision": "9242ecf316f0b15f454d9f4e0b4e4004"
  },
  {
    "url": "assets/img/9.1674c28f.jpg",
    "revision": "1674c28f21c1aded354f0e4ee1dab275"
  },
  {
    "url": "assets/img/Akku-LED-Strahler.f7a6d693.jpg",
    "revision": "f7a6d693dbc1fd61f8e6537e5933d895"
  },
  {
    "url": "assets/img/Anschluss-Pinheader.8ec8f6de.jpg",
    "revision": "8ec8f6defe739ad712e3079773e480fe"
  },
  {
    "url": "assets/img/Anschluss-Pogo-Lochraster.b799831c.jpg",
    "revision": "b799831c0afb4883c8626db771cb8fd9"
  },
  {
    "url": "assets/img/arduino_cc1101_bottom.bd73fde2.jpg",
    "revision": "bd73fde2b20f810dd8efed41b5ef65a1"
  },
  {
    "url": "assets/img/arduino_cc1101_top.80438d9e.jpg",
    "revision": "80438d9e0b6c72e967d11a0f32858d50"
  },
  {
    "url": "assets/img/Arduino_IDE_Settings1.d6071e2d.jpg",
    "revision": "d6071e2d6a3ebc249a893e8a114ed1db"
  },
  {
    "url": "assets/img/arduino-pro-mini-removed-parts.f97cd75b.jpg",
    "revision": "f97cd75b0dc2dac98703f2b462c1cb5e"
  },
  {
    "url": "assets/img/arduino-pro-mini.35fc58fe.jpg",
    "revision": "35fc58fe63e13a948f9f9f04aa723d17"
  },
  {
    "url": "assets/img/arduinopromini_alt_neu.f905bd00.jpg",
    "revision": "f905bd001a2358426c7d2ff532b1bd2d"
  },
  {
    "url": "assets/img/AskSinAnalyzer.ef788ced.png",
    "revision": "ef788ced8155f1e1d256a4591dbe5d31"
  },
  {
    "url": "assets/img/Back.707b3c68.jpg",
    "revision": "707b3c68a93d6500a481c2c86b3c8c08"
  },
  {
    "url": "assets/img/Batterielichterkette_01.af77cbb4.jpg",
    "revision": "af77cbb41586ac6faef8a3708a656ed8"
  },
  {
    "url": "assets/img/blue-pill.3a224a3f.jpg",
    "revision": "3a224a3f212ed9856d93b6d7e35e3e91"
  },
  {
    "url": "assets/img/BME280-ldo-removed.b18b9191.jpg",
    "revision": "b18b91913ab835c408f29ad3dd8e93ef"
  },
  {
    "url": "assets/img/case-jan.1b506307.jpg",
    "revision": "1b5063071ec8189b165504c5f02b63c7"
  },
  {
    "url": "assets/img/case-schraube.393ab8d7.jpg",
    "revision": "393ab8d735ecdf8a3bb8b42e94ad4a58"
  },
  {
    "url": "assets/img/case.22aa6630.jpg",
    "revision": "22aa6630b3bdfd0855601276ed46f27a"
  },
  {
    "url": "assets/img/CC1101_bad-vs-working.614ebe58.jpg",
    "revision": "614ebe581caf0b9544d5dfe8f91ff2a9"
  },
  {
    "url": "assets/img/cc1101.a73ddda2.jpg",
    "revision": "a73ddda2ebda86d228d1b94e060e1a66"
  },
  {
    "url": "assets/img/ccu-aktor.9e12f596.jpg",
    "revision": "9e12f596558b2cb8d7838d68da13b71a"
  },
  {
    "url": "assets/img/ccu-dw.b73caf97.png",
    "revision": "b73caf9750965dfe0fff2fed6186a1d7"
  },
  {
    "url": "assets/img/ccu-fehlerprotokoll.b450f5d3.png",
    "revision": "b450f5d3b724f8fed1979307d1e435e9"
  },
  {
    "url": "assets/img/ccu-sensor.6aae40b8.png",
    "revision": "6aae40b8736476f13f8ea1370e8a959b"
  },
  {
    "url": "assets/img/CR2032-Bottom_noted.d79cf251.png",
    "revision": "d79cf251de4a857fff3660875d06d6d3"
  },
  {
    "url": "assets/img/CR2032-Bottom-Parts.db444def.svg",
    "revision": "db444def9192b4c31c1a617c350efffe"
  },
  {
    "url": "assets/img/CR2032-Bottom.d96a229c.png",
    "revision": "d96a229cf091bb40f9e6905f45316447"
  },
  {
    "url": "assets/img/CR2032-Top-Parts.850f9f66.svg",
    "revision": "850f9f66c8efe4688982937cc175d507"
  },
  {
    "url": "assets/img/CR2032-Top.c116c8ea.png",
    "revision": "c116c8eae1521669b54dfef70b94bd64"
  },
  {
    "url": "assets/img/Dashbutton.1a94f0c9.jpg",
    "revision": "1a94f0c905fbb42104d18f9b61589319"
  },
  {
    "url": "assets/img/Dim1PWM_1.4-repair.088eba97.jpg",
    "revision": "088eba971b0c9fdd629e9cce97dba4f8"
  },
  {
    "url": "assets/img/Dim1PWM_finish-1.d0a02871.jpg",
    "revision": "d0a028713a4025680cd1a610e36f4f53"
  },
  {
    "url": "assets/img/Dim1PWM_finish-2.2998a76e.jpg",
    "revision": "2998a76ebd33f44ab4c9f969bea79ef6"
  },
  {
    "url": "assets/img/Dim1PWM_parts.22f3395d.jpg",
    "revision": "22f3395d075e588ecfcf4bd20627d848"
  },
  {
    "url": "assets/img/Dim1PWM_PCB_partly-assembled.bd9ad69b.jpg",
    "revision": "bd9ad69bb1172d7c9704d3dbfbfb370e"
  },
  {
    "url": "assets/img/Dim1PWM_PCB-top.03e465d7.jpg",
    "revision": "03e465d785101b26c185d5a756da2036"
  },
  {
    "url": "assets/img/Dim1PWM.242c77a3.jpg",
    "revision": "242c77a3f5f35afd5c2eada7380e456a"
  },
  {
    "url": "assets/img/firmwareupdate.f88237d6.png",
    "revision": "f88237d6177a92b56ffe21267aad19cb"
  },
  {
    "url": "assets/img/ftdi-verkantet.9eedbe7c.jpg",
    "revision": "9eedbe7c4a2372e21fcaab121e89102a"
  },
  {
    "url": "assets/img/Gardena-Ventil.8f43da2f.jpg",
    "revision": "8f43da2f84b7acff5d0571e335761dfb"
  },
  {
    "url": "assets/img/HB-CDL-6.8fd62e03.jpg",
    "revision": "8fd62e03f44236079513ac97788287d6"
  },
  {
    "url": "assets/img/HB-Dis-EP-42BW.9ee7ecfc.jpg",
    "revision": "9ee7ecfc1ecdceb720d80c24d263e62a"
  },
  {
    "url": "assets/img/HB-IBUT-8.19fee03f.jpg",
    "revision": "19fee03fbea13bffa9ee764267cbb797"
  },
  {
    "url": "assets/img/HB-LC-BL1-Velux.def8c52d.jpg",
    "revision": "def8c52d6bad5873de12814d53543844"
  },
  {
    "url": "assets/img/HB-LC-Bl1PBU-FM_ISR2.a70e403c.jpg",
    "revision": "a70e403cac8976acab8a32a49f8695bc"
  },
  {
    "url": "assets/img/HB-LC-Dim1TPBU-FM_ISD2.c40ebf06.jpg",
    "revision": "c40ebf06534cfc3f2f0457306f6ede5a"
  },
  {
    "url": "assets/img/HB-LC-Sw12.8383203a.jpg",
    "revision": "8383203af7a0e90bd32df31af748232f"
  },
  {
    "url": "assets/img/HB-OU-MP3-LED.c4e50f43.jpg",
    "revision": "c4e50f43d3ce7fc0a1628c755196e2cb"
  },
  {
    "url": "assets/img/HB-OU-RGB-STACKFIRE.9eaffb14.jpg",
    "revision": "9eaffb14e173c2036ece791bc4d29767"
  },
  {
    "url": "assets/img/HB-RC-12-EP.29fcc313.jpg",
    "revision": "29fcc31313f7aa628954366e6f842fba"
  },
  {
    "url": "assets/img/HB-RC-2-PBU-LED.838c6e18.jpg",
    "revision": "838c6e18ad2c916c9ac51cfb12146817"
  },
  {
    "url": "assets/img/HB-RC-6-PBU-LED.ebdbe3d9.jpg",
    "revision": "ebdbe3d99a2d01b6c1b985db925a6233"
  },
  {
    "url": "assets/img/HB-SCI-4-O-Gar118x.2b2892df.jpg",
    "revision": "2b2892df3dea82680283b9349c34fa2a"
  },
  {
    "url": "assets/img/HB-SEC-WDS-2.669e9fb0.jpg",
    "revision": "669e9fb07fca20bb2876dcfdd4c430ed"
  },
  {
    "url": "assets/img/HB-SEN-LJet.2fa4adf7.jpg",
    "revision": "2fa4adf7c57492e205346e43b2ca85dc"
  },
  {
    "url": "assets/img/HB-UNI-RGB-LED-CTRL.4661b4e1.jpg",
    "revision": "4661b4e1dc885da89584d36df30d2422"
  },
  {
    "url": "assets/img/HB-UNI-Sen-CAP-MOIST.cb0fc98b.jpg",
    "revision": "cb0fc98b1f1c45a04931037fba892372"
  },
  {
    "url": "assets/img/HB-UNI-Sen-CO2-STM32.cfcf4ad3.jpg",
    "revision": "cfcf4ad3e5d873ca5c48dba783e40b64"
  },
  {
    "url": "assets/img/HB-UNI-Sen-CO2.68498626.jpg",
    "revision": "684986263d0548425731544e47b0b637"
  },
  {
    "url": "assets/img/HB-UNI-Sen-CURRENT.46f59095.jpg",
    "revision": "46f59095fa02a7f135e1761123485bcf"
  },
  {
    "url": "assets/img/HB-UNI-Sen-Lev-Vo.5529329e.jpg",
    "revision": "5529329e19fc1a2f99afb05f9b3ba4ab"
  },
  {
    "url": "assets/img/HB-UNI-Sen-PRESS.2389e8b0.jpg",
    "revision": "2389e8b0704820b1cb4f35f49e989ae5"
  },
  {
    "url": "assets/img/HB-UNI-Sen-RFID-RC.9b5d04f6.jpg",
    "revision": "9b5d04f608f906ecd24786208b1cfab4"
  },
  {
    "url": "assets/img/HB-UNI-Sen-TEMP-DS18B20.9590f43d.jpg",
    "revision": "9590f43daac018d91ea018de835a3c70"
  },
  {
    "url": "assets/img/HB-UNI-Sen-TEMP-IR.978f2fd0.jpg",
    "revision": "978f2fd0d8f676c7746da36a24e358ad"
  },
  {
    "url": "assets/img/HB-UNI-Sen-WEA.e7261bd4.jpg",
    "revision": "e7261bd49d62e43bd77270224f1dccd7"
  },
  {
    "url": "assets/img/HB-UNI-Sen-WEIGHT.ac23b791.jpg",
    "revision": "ac23b791912949190c5df393f60ab8e0"
  },
  {
    "url": "assets/img/HB-UNI-SenAct-4-4-Hutschiene.4f5d23ed.jpg",
    "revision": "4f5d23ed9f81d7f4acaa687e89151dd7"
  },
  {
    "url": "assets/img/HB-UNI-SenAct-4-4.b08898ec.jpg",
    "revision": "b08898ec039bb78bbca6751b3af41696"
  },
  {
    "url": "assets/img/HB-UNI-SenAct-8-8-Hutschiene.e0052736.jpg",
    "revision": "e005273632ea4d346bad43c597a8bc8a"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-AQ-BME680_KF.0aa477cc.jpg",
    "revision": "0aa477ccaa404a737a340a9e83532d0f"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-AQ-BME680.0aa477cc.jpg",
    "revision": "0aa477ccaa404a737a340a9e83532d0f"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-CO2_SCD30.55833ee4.jpg",
    "revision": "55833ee45895a2e5bd2c7268b692f898"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-RAD-AL53.f6eeaa1e.jpg",
    "revision": "f6eeaa1e011198ac591eabf059ebfcdd"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-TH-SHT75.761ebe33.jpg",
    "revision": "761ebe3312748b6961d1bde5c9c52132"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-THPD-BME280.02112958.jpg",
    "revision": "02112958a83e522a225c24bc2c7320c3"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-THPD-SHT85.9c0eb01f.jpg",
    "revision": "9c0eb01fdcdfb6f9fca5cf8adef88328"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1.e9c66345.jpg",
    "revision": "e9c663458550f3ee953f07d564dfced8"
  },
  {
    "url": "assets/img/HM-Bell.0f88fd73.jpg",
    "revision": "0f88fd73a1d56cca887612ebb9798317"
  },
  {
    "url": "assets/img/HM-ES-PMSw1-Pl_GosundSP1.6845af70.jpg",
    "revision": "6845af7071e65e089974ec75fd836938"
  },
  {
    "url": "assets/img/HM-LC-Bl1-FM-DC.e20f3028.jpg",
    "revision": "e20f3028ba6451d1d14c9c266ce8c80b"
  },
  {
    "url": "assets/img/HM-LC-Dim1PWM_Konstantstrom.bdd3a29c.jpg",
    "revision": "bdd3a29c007eed11a8a120967901ecef"
  },
  {
    "url": "assets/img/HM-LC-Dim1PWM-LinearPWM.541d5802.jpg",
    "revision": "541d5802b2a655777a2112fa8da2c82a"
  },
  {
    "url": "assets/img/HM-LC-Dim1PWM.cb1ba428.svg",
    "revision": "cb1ba428478b6211e7a92eeea385d7df"
  },
  {
    "url": "assets/img/HM-LC-DW-WM.f8b7513e.jpg",
    "revision": "f8b7513e02772f30ad4ad96070d862e2"
  },
  {
    "url": "assets/img/HM-LC-SW1-BA-PCB_mini_MAX1724_thumb.7ab8298f.jpg",
    "revision": "7ab8298f6e8c0aa88c0f93adacb5bcff"
  },
  {
    "url": "assets/img/HM-LC-Sw1-FM.ebbabc7f.jpg",
    "revision": "ebbabc7f33baa4b6986e74c4babaa921"
  },
  {
    "url": "assets/img/HM-LC-SW1-Li.ea8d3843.png",
    "revision": "ea8d3843e769a9c813c68da8882ee325"
  },
  {
    "url": "assets/img/HM-LC-Sw1-PCB-12V.38d41a34.jpg",
    "revision": "38d41a3459cff757676614120caef9eb"
  },
  {
    "url": "assets/img/HM-LC-Sw1-PCB-230V-TR.71789953.jpg",
    "revision": "7178995333c27f4959ef6869f802651b"
  },
  {
    "url": "assets/img/HM-LC-Sw1-PCB-230V.fbc05fb1.jpg",
    "revision": "fbc05fb1905b1d13ea0e5d76cada0235"
  },
  {
    "url": "assets/img/HM-LC-Sw1-Pl-DN-R1_OBI.89743711.jpg",
    "revision": "8974371110b7f5c482e8907be598eb15"
  },
  {
    "url": "assets/img/HM-LC-Sw1-Pl-DN-R1_PSS.fc3769c8.jpg",
    "revision": "fc3769c8b791855a7f7cfaea71c84a0e"
  },
  {
    "url": "assets/img/HM-LC-Sw1PBU-FM_ISS2.a6082ec7.jpg",
    "revision": "a6082ec7b032292dbe765654368fece3"
  },
  {
    "url": "assets/img/HM-LC-Sw2-12V.6977fe60.jpg",
    "revision": "6977fe60da0fcba2cf1168f34d7b3aaa"
  },
  {
    "url": "assets/img/HM-LC-Sw2-230V.9aea4b6c.jpg",
    "revision": "9aea4b6c3f977589a5f6cd4eda12bb4d"
  },
  {
    "url": "assets/img/HM-minimal.96879db8.jpg",
    "revision": "96879db8e50062b92724e3db0412e2ef"
  },
  {
    "url": "assets/img/HM-MOD-Re-8.af1b4673.jpg",
    "revision": "af1b46739a667533336a0975298b4c0f"
  },
  {
    "url": "assets/img/HM-MyS-Relay-Board.42a8d256.jpg",
    "revision": "42a8d256372b2ee2173242c468aea337"
  },
  {
    "url": "assets/img/HM-PB-2-FM_ISC2.b7b4b3c7.jpg",
    "revision": "b7b4b3c76826fdc5def2b081728f1d79"
  },
  {
    "url": "assets/img/HM-PB-2-FM_WSC2.b76679d0.jpg",
    "revision": "b76679d0dc36f58e65819223f8cde64b"
  },
  {
    "url": "assets/img/HM-PBI-4-FM.2ddab1fd.jpg",
    "revision": "2ddab1fd95724067c2cc5fdfca07021a"
  },
  {
    "url": "assets/img/HM-RC-8_BRC8.81eec658.jpg",
    "revision": "81eec65809817d0dea10c3c9e8b177b1"
  },
  {
    "url": "assets/img/hm-rc-p1-proto.4fcecd0a.jpg",
    "revision": "4fcecd0ab7a4145ce165580e6d0dce48"
  },
  {
    "url": "assets/img/HM-SEC-SC_WDS.8c31fe87.jpg",
    "revision": "8c31fe87947e93e857952d618ffbe1c2"
  },
  {
    "url": "assets/img/HM-SEC-SD.f4731ec0.jpg",
    "revision": "f4731ec0a9a1f738d42ab79a84604c40"
  },
  {
    "url": "assets/img/HM-Sys-sRP-Pl.1c7b6831.jpg",
    "revision": "1c7b6831dbb5e030c14fd46d1e8620a1"
  },
  {
    "url": "assets/img/HM-WDS40-TH-I-RTC-BME280.ec15be20.jpg",
    "revision": "ec15be20bbd36b1919007feaa0ee8cf8"
  },
  {
    "url": "assets/img/HMSensor-FlashStation_1.9d4118a3.jpg",
    "revision": "9d4118a3379e6e7d0aeb666a494f7387"
  },
  {
    "url": "assets/img/interne-tasten-config.9cf9ee3c.png",
    "revision": "9cf9ee3c1b0b10d208b38d031e68feca"
  },
  {
    "url": "assets/img/isp_com-port.ea3b6523.png",
    "revision": "ea3b6523cab397d22c08ce02c9e6585e"
  },
  {
    "url": "assets/img/isp_diamex.37202c8a.jpg",
    "revision": "37202c8a35b861bf86c5ff68d74a72b0"
  },
  {
    "url": "assets/img/isp-6-pinout.3dc33651.png",
    "revision": "3dc33651b50a338c4d0bec51ed493698"
  },
  {
    "url": "assets/img/ISP-Pinout.f57779d3.jpg",
    "revision": "f57779d3bc7be1d48be9d35f86ea17ec"
  },
  {
    "url": "assets/img/LED_Teelicht_02.e70d5380.jpg",
    "revision": "e70d5380f53db0395386133ef34f27c6"
  },
  {
    "url": "assets/img/Lochraster-einbau.ae2433c0.jpg",
    "revision": "ae2433c0342d2f9a9dbfe61755caef8d"
  },
  {
    "url": "assets/img/makeotahtml.dc4d06f3.png",
    "revision": "dc4d06f38623fc898a69945acbe9da22"
  },
  {
    "url": "assets/img/maple-mini.683ce739.jpg",
    "revision": "683ce739578d8954907ec7420ff8889e"
  },
  {
    "url": "assets/img/material.ae03412b.jpg",
    "revision": "ae03412b9fb1fbd4ee8b0f251df03822"
  },
  {
    "url": "assets/img/Mounted.8f551c20.jpg",
    "revision": "8f551c20bff5f763054ce7b895e1c0b9"
  },
  {
    "url": "assets/img/Netzteil-LED-Controller-Stripe.a002d8e9.png",
    "revision": "a002d8e95a3f11d994caa39fc46aed51"
  },
  {
    "url": "assets/img/OBII_thumb.264cb8cc.jpg",
    "revision": "264cb8cc6df0b36da1fae3382c2d434c"
  },
  {
    "url": "assets/img/Open-case.6e759cad.jpg",
    "revision": "6e759cadb82643439eb011db1d02026f"
  },
  {
    "url": "assets/img/paniktaster_config.98b7fbc5.png",
    "revision": "98b7fbc547bf63084fd96c735fb0889d"
  },
  {
    "url": "assets/img/paniktaster_im_posteingang.fc74ffcc.png",
    "revision": "fc74ffcce1fdae85ca9def91afcd341e"
  },
  {
    "url": "assets/img/pcb-assembled.5dc61a8b.jpg",
    "revision": "5dc61a8ba9ecb3dfa93a731d77473307"
  },
  {
    "url": "assets/img/pir-pinout.863d8e22.jpg",
    "revision": "863d8e22af33b894fb46c604431a5238"
  },
  {
    "url": "assets/img/pir.4482dcb3.jpg",
    "revision": "4482dcb3a504e8fea1dd864b08bfb036"
  },
  {
    "url": "assets/img/platine-im-case.fffe3487.jpg",
    "revision": "fffe34876a38c613a3f846fef97e6b1e"
  },
  {
    "url": "assets/img/platine1.ed6035e4.jpg",
    "revision": "ed6035e4dbd03d5082347468b1cc3980"
  },
  {
    "url": "assets/img/platine2.1cc67900.jpg",
    "revision": "1cc679005e7c9b5f3ca22e073c0f6218"
  },
  {
    "url": "assets/img/platine3.79327496.jpg",
    "revision": "79327496376aa2db8b89ff767aaa1c05"
  },
  {
    "url": "assets/img/Platinen_TOP.49da31ce.jpg",
    "revision": "49da31ce9f173704535b0bc0451728b9"
  },
  {
    "url": "assets/img/S26_thumb.47455963.jpg",
    "revision": "474559636e9445576c3188c324b7ea80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Sketches_TOP.7d392979.png",
    "revision": "7d392979eafdf754da82540e37d1f1ce"
  },
  {
    "url": "assets/img/Sonoff-4CH-Umbau.ed82e2e9.jpg",
    "revision": "ed82e2e9386b5900b79f6a9b662b76c9"
  },
  {
    "url": "assets/img/Sonoff-Basic-Umbau.e0b61809.jpg",
    "revision": "e0b61809bdd37046ee23c42ac5ce1f98"
  },
  {
    "url": "assets/img/Sonoff-S20-Umbau.c28cb2fd.jpg",
    "revision": "c28cb2fd8c54ced8d112eb39517ac665"
  },
  {
    "url": "assets/img/StepUp-Bottom-Parts.c6ed1fda.svg",
    "revision": "c6ed1fda726459e23666c1e773615ba9"
  },
  {
    "url": "assets/img/StepUp-Bottom.dd973271.png",
    "revision": "dd973271296d7c723a78cdea5dcdacd3"
  },
  {
    "url": "assets/img/StepUp-Top-Parts.6bc15914.svg",
    "revision": "6bc159140f2b64c08a1265fd59d3d80b"
  },
  {
    "url": "assets/img/StepUp-Top.21c04e73.png",
    "revision": "21c04e73b3a355206f4fc8096ce733dd"
  },
  {
    "url": "assets/img/STLinkv2-clone.1744ccb7.jpg",
    "revision": "1744ccb7db6c5cee5ad0417a3f96c6c7"
  },
  {
    "url": "assets/img/stm32_boardmanager.74e75ae7.png",
    "revision": "74e75ae7fb6b6776e427bf03766b9394"
  },
  {
    "url": "assets/img/stm32_settings1.7fa2d803.png",
    "revision": "7fa2d8033a87523771ee67d53034ca74"
  },
  {
    "url": "assets/img/stm32_settings2.84779b3f.png",
    "revision": "84779b3f5c1e23e2c83dcb0408ea65a2"
  },
  {
    "url": "assets/img/stm32-bluepill_stlink-connection.de8dc8a1.jpg",
    "revision": "de8dc8a1c5b3b585f3342832ef424b00"
  },
  {
    "url": "assets/img/stm32-ftdi.2212b9e5.jpg",
    "revision": "2212b9e57b411f70961f3da4e005c553"
  },
  {
    "url": "assets/img/stm32-led-pin.ed478985.jpg",
    "revision": "ed47898556a437739d8554e05dd75508"
  },
  {
    "url": "assets/img/thumb.0f14b306.jpg",
    "revision": "0f14b306b95060d8e6d88bc012f29074"
  },
  {
    "url": "assets/img/thumb.178a9dbd.jpg",
    "revision": "178a9dbd5c5dcfbf90db8d7facf161b3"
  },
  {
    "url": "assets/img/thumb.258ec914.jpg",
    "revision": "258ec9144129fddd0ca1f33d052b167c"
  },
  {
    "url": "assets/img/thumb.7ed9cc89.jpg",
    "revision": "7ed9cc89740006eaa2a93bb833f7e515"
  },
  {
    "url": "assets/img/thumb.9668c5ce.jpg",
    "revision": "9668c5ce82f8ba11cc736027793c6f8e"
  },
  {
    "url": "assets/img/thumb.a052c6a8.jpg",
    "revision": "a052c6a82a039532a83ef4f1127c040e"
  },
  {
    "url": "assets/img/thumb.e8b6d977.jpg",
    "revision": "e8b6d977da7ce2f05165e115733f2c3c"
  },
  {
    "url": "assets/img/top-image.c7d5d925.jpg",
    "revision": "c7d5d9259b460920022f2c1ad385a651"
  },
  {
    "url": "assets/img/usb-asp-jumperwire.6d058edf.jpg",
    "revision": "6d058edf29e5901b3ff38ade656968e0"
  },
  {
    "url": "assets/img/usbasp-wiring.1e0d72d1.jpg",
    "revision": "1e0d72d162fd6edc37362d9522116859"
  },
  {
    "url": "assets/img/usbavp-jumper.7eb06634.jpg",
    "revision": "7eb0663468344c2f98721fcfdd1a144b"
  },
  {
    "url": "assets/img/verdrahtung.4cb09f32.jpg",
    "revision": "4cb09f32e6d511d04564aaa563ce535d"
  },
  {
    "url": "assets/img/verdrahtung.597fccd2.png",
    "revision": "597fccd20c9ef9932cdecd85c76a1000"
  },
  {
    "url": "assets/img/Wandtaster.ed8764f7.jpg",
    "revision": "ed8764f704bf38c08523a7335644f163"
  },
  {
    "url": "assets/img/windows-device-manager.b812575b.png",
    "revision": "b812575b4de7a4aede8c07a25e1f3bd8"
  },
  {
    "url": "assets/img/wiring_arduino_cc1101.a0cca605.png",
    "revision": "a0cca6057c6ab1b78fa14f7dca651e53"
  },
  {
    "url": "assets/js/1.15806d6a.js",
    "revision": "113d7d1791b31fae83558530e0d4848f"
  },
  {
    "url": "assets/js/10.f6e34c91.js",
    "revision": "b39d3d045938dba65bb9f1f370edef17"
  },
  {
    "url": "assets/js/100.f1c4ac74.js",
    "revision": "8d8d28aefba6a12518087ef8b84d5808"
  },
  {
    "url": "assets/js/101.297f51ba.js",
    "revision": "8179b118b1d36427362857a61b851efe"
  },
  {
    "url": "assets/js/102.1df9e207.js",
    "revision": "c876f241a5017172828ca48bc553441a"
  },
  {
    "url": "assets/js/103.0417b69e.js",
    "revision": "130b14349bd72c6f50b7d735cf3b115a"
  },
  {
    "url": "assets/js/104.c015c749.js",
    "revision": "21481a2166b4ba1c946b52b01549354c"
  },
  {
    "url": "assets/js/105.3c25cd1f.js",
    "revision": "520ab677870ec77c16219e9824080306"
  },
  {
    "url": "assets/js/106.2614b41b.js",
    "revision": "ff101b30fa9a6d7dd4cc6d5f055cd15c"
  },
  {
    "url": "assets/js/107.9879703f.js",
    "revision": "bce683bdd432b231b3557bfafb3fd334"
  },
  {
    "url": "assets/js/108.dc1a5bac.js",
    "revision": "b9554442a32c0fcac2fa44d146d4b0f0"
  },
  {
    "url": "assets/js/109.68db4c6e.js",
    "revision": "f7d766916c30efd763a96b92b7a18f14"
  },
  {
    "url": "assets/js/11.c3c95e0d.js",
    "revision": "bf8c14ad653d6fbcd488e9a00c73cb6d"
  },
  {
    "url": "assets/js/110.cea4035f.js",
    "revision": "5eb0427ad7acfe5a1267efdb1c385380"
  },
  {
    "url": "assets/js/111.b32951ba.js",
    "revision": "9914614c339aa6cdf52936123f6d0ef2"
  },
  {
    "url": "assets/js/112.678d9fa6.js",
    "revision": "6836ba9e63fec597276b82454d4b00fd"
  },
  {
    "url": "assets/js/113.e2030de0.js",
    "revision": "8742ed84ac264e0e8550dc52b27a7a41"
  },
  {
    "url": "assets/js/114.5d2c05b3.js",
    "revision": "9c3d3f6e1c5645e8f985a5e4c5b2bde7"
  },
  {
    "url": "assets/js/115.137005d8.js",
    "revision": "ed25bec239203c62abda97d8a9f3db86"
  },
  {
    "url": "assets/js/116.32f1a8c3.js",
    "revision": "b136fb0e637e5874b9b314f9344b6382"
  },
  {
    "url": "assets/js/117.cce0b7b7.js",
    "revision": "d0830a343f4ca312f3983353792e4c02"
  },
  {
    "url": "assets/js/118.c65af57b.js",
    "revision": "3627e86b456dda267e9440b0d895f9eb"
  },
  {
    "url": "assets/js/119.225aa7e9.js",
    "revision": "7b1716ad0453b5be267de0acb155ff64"
  },
  {
    "url": "assets/js/12.0bae4f97.js",
    "revision": "4b8feaf9e5b57bc5ff70fa846d27c9ae"
  },
  {
    "url": "assets/js/120.9ba3753e.js",
    "revision": "113c3a3ae23eab841add482bc744d4b9"
  },
  {
    "url": "assets/js/121.b3b1aca5.js",
    "revision": "9bd54414df3c0cdb54c07ca9b36cdab5"
  },
  {
    "url": "assets/js/122.38c44274.js",
    "revision": "387b50e4acede5d7d059a6b3504f5a6f"
  },
  {
    "url": "assets/js/123.0806526f.js",
    "revision": "2601e9384ddbb688b0ccc892f16583d0"
  },
  {
    "url": "assets/js/13.fda733d2.js",
    "revision": "90f03808c8381e74a8488a384fc4c213"
  },
  {
    "url": "assets/js/14.7c29b93e.js",
    "revision": "d96ab45b638cfce0429b8487e02b10f6"
  },
  {
    "url": "assets/js/15.db90299c.js",
    "revision": "40b86902e79238a56a15aa8e5f659806"
  },
  {
    "url": "assets/js/16.85be1f8c.js",
    "revision": "a203fcfa5d7ec4e8a7a9b9726fb020bc"
  },
  {
    "url": "assets/js/17.7495066e.js",
    "revision": "20400a10cbb7f46699b767fa2eb3bf86"
  },
  {
    "url": "assets/js/18.c484719b.js",
    "revision": "8573e94e7e3fcef24830d1be08d5e38d"
  },
  {
    "url": "assets/js/19.ec6f916c.js",
    "revision": "3f3daad6f54ca11a3995237cf62d97a5"
  },
  {
    "url": "assets/js/20.4217a53a.js",
    "revision": "5a25c9ddc535428b7c8b6e80577e7b49"
  },
  {
    "url": "assets/js/21.2851845e.js",
    "revision": "59e614de7bb2aec54f0f87337a151899"
  },
  {
    "url": "assets/js/22.414eb502.js",
    "revision": "a7832166a750b604b9f9737a4d0d9f9a"
  },
  {
    "url": "assets/js/23.55455734.js",
    "revision": "643012cd3bf80abc0b92769923684141"
  },
  {
    "url": "assets/js/24.afb20f58.js",
    "revision": "36739863233dbfa816dbd0c84d5c4c30"
  },
  {
    "url": "assets/js/25.6e7c7ee4.js",
    "revision": "0f8a3705510aa06fe8316228a24ea75c"
  },
  {
    "url": "assets/js/26.e281337d.js",
    "revision": "423186631a1fd59d4788514fc12584cf"
  },
  {
    "url": "assets/js/27.2d3ed310.js",
    "revision": "0d06522e4ba13b9328ed4e40920c518e"
  },
  {
    "url": "assets/js/28.91884a64.js",
    "revision": "22343ec387db5816d41c97c18841dc30"
  },
  {
    "url": "assets/js/29.c7f14a2b.js",
    "revision": "655fdb796208568e70b3aa460df7dfee"
  },
  {
    "url": "assets/js/30.7d922fcf.js",
    "revision": "44c4557e6e3d34f91952f01dda288d24"
  },
  {
    "url": "assets/js/31.e58cfb0e.js",
    "revision": "5afd988f8da438212a8484505f8ab5e5"
  },
  {
    "url": "assets/js/32.2e0c3bb4.js",
    "revision": "f5e0619c43682a14efa8246af329ae97"
  },
  {
    "url": "assets/js/33.bef07044.js",
    "revision": "ca978ac23f46fdf57c554aac6d96ab4e"
  },
  {
    "url": "assets/js/34.9ae521e4.js",
    "revision": "dec04439e1ed0d6120047da6713bef55"
  },
  {
    "url": "assets/js/35.e7436e23.js",
    "revision": "b62b846599ce28764239715952bd4119"
  },
  {
    "url": "assets/js/36.b6974e81.js",
    "revision": "a4e4a57c2d53390a828e7da01405a56d"
  },
  {
    "url": "assets/js/37.358d21b4.js",
    "revision": "b66d09f4136228b18b412f492eaaba64"
  },
  {
    "url": "assets/js/38.4914e92a.js",
    "revision": "1c83c7d74d8283c6b67ee6918f757259"
  },
  {
    "url": "assets/js/39.c771069f.js",
    "revision": "f452264d7d7f4bd1771380bf0fbbe630"
  },
  {
    "url": "assets/js/4.9aaf8796.js",
    "revision": "e4006e3881b0e77e6684e94517e5145d"
  },
  {
    "url": "assets/js/40.bd6558f3.js",
    "revision": "9e5c41a0ff35420acee704bbb323100e"
  },
  {
    "url": "assets/js/41.dffb971d.js",
    "revision": "477ae03f1a2ede0129dd236776232149"
  },
  {
    "url": "assets/js/42.041350f4.js",
    "revision": "cacf354bd2da299e65a9bde4307cccee"
  },
  {
    "url": "assets/js/43.aa1175f7.js",
    "revision": "ed12c56f8f8a8839f00e62a8e85c901b"
  },
  {
    "url": "assets/js/44.f95a959c.js",
    "revision": "a25f3771729b98cb1385f2599766ef6c"
  },
  {
    "url": "assets/js/45.11118ce3.js",
    "revision": "4f9fd689f4c271f31934d1a6dd81283d"
  },
  {
    "url": "assets/js/46.5208161e.js",
    "revision": "e7822bb5e7d27ba43894805f4baf5295"
  },
  {
    "url": "assets/js/47.70e77daa.js",
    "revision": "56900edbd6f9649cbdfb3ba7d2e89c31"
  },
  {
    "url": "assets/js/48.3ca5ef10.js",
    "revision": "8a1a9c2211229fb08be8ab78d843f770"
  },
  {
    "url": "assets/js/49.f629de34.js",
    "revision": "8a9ff4268c72369a5b5aa94b86959066"
  },
  {
    "url": "assets/js/5.6ce7ebc9.js",
    "revision": "5dea3797a3f450a4f6e682d22c2df69b"
  },
  {
    "url": "assets/js/50.c3bb879d.js",
    "revision": "ebf2f0ae2e9cfc32fe4d7a1129b1d9ec"
  },
  {
    "url": "assets/js/51.7a649402.js",
    "revision": "9275b08157006fd93c9f7212c2fee216"
  },
  {
    "url": "assets/js/52.5ea937b2.js",
    "revision": "ebddc39a78bf7b456a74adce5ceeba9e"
  },
  {
    "url": "assets/js/53.30d60ea2.js",
    "revision": "585e5df83e34c748457e0285e5e3f479"
  },
  {
    "url": "assets/js/54.5d9d6b12.js",
    "revision": "75fa01fbe92977e2327dd6f989137cab"
  },
  {
    "url": "assets/js/55.878e0c6c.js",
    "revision": "77e1bb849bdd564be13f85b8139226d9"
  },
  {
    "url": "assets/js/56.9fe46086.js",
    "revision": "c4fa1dc9cbbecadf0609dabc240afb66"
  },
  {
    "url": "assets/js/57.04bb8795.js",
    "revision": "1b0d409e03cfce5077d9f21e967f9785"
  },
  {
    "url": "assets/js/58.69a029d5.js",
    "revision": "bac5c653f0b533b447e810930e513fc3"
  },
  {
    "url": "assets/js/59.e96f6ff7.js",
    "revision": "b668ac662c015600f6e5b1d75e9b27dd"
  },
  {
    "url": "assets/js/6.5be7e5ab.js",
    "revision": "afa500fcb6e95c8348a379767342446e"
  },
  {
    "url": "assets/js/60.510381df.js",
    "revision": "07d7107d578b5bb20e566843f0d97d69"
  },
  {
    "url": "assets/js/61.82eb6725.js",
    "revision": "b8d14cc116142360a2cf5d6a5ad97fc9"
  },
  {
    "url": "assets/js/62.cf65575e.js",
    "revision": "32d78432daaaadf3b36e8e77e89b76f4"
  },
  {
    "url": "assets/js/63.a412a18c.js",
    "revision": "84b59d76f58b912e6d265a9e41f95c81"
  },
  {
    "url": "assets/js/64.2dbecc70.js",
    "revision": "3f4f4cfee1889ff9092a3fd1905c9be6"
  },
  {
    "url": "assets/js/65.7777ad63.js",
    "revision": "725a3d074a987abf8d4e2aee4c34a2a2"
  },
  {
    "url": "assets/js/66.7a36fc8d.js",
    "revision": "db1aae666cebce800144ecfce9a53a98"
  },
  {
    "url": "assets/js/67.e98f72c1.js",
    "revision": "33495e4c164c81b4fb96ef522502c6fc"
  },
  {
    "url": "assets/js/68.29b7cdae.js",
    "revision": "174d9d0b0375e6791e7f317a2fe262f6"
  },
  {
    "url": "assets/js/69.45d92f46.js",
    "revision": "177b94baede71a59d4f83e06f008beaa"
  },
  {
    "url": "assets/js/7.d4b40a7d.js",
    "revision": "eabaf11e30251af7a5bbe039dbfdcdba"
  },
  {
    "url": "assets/js/70.8397c096.js",
    "revision": "b821bc73c0d0b6269630880e019083a1"
  },
  {
    "url": "assets/js/71.127c843d.js",
    "revision": "c1b15271234d9e6e7031d97f6332da0a"
  },
  {
    "url": "assets/js/72.3d2744c9.js",
    "revision": "1fa8e6f4257ea5785d1b6bc067101a97"
  },
  {
    "url": "assets/js/73.d5d337f4.js",
    "revision": "65ea9a9fc6bfcebe1458ad73a487d0a9"
  },
  {
    "url": "assets/js/74.30df84de.js",
    "revision": "5121d0081f9ba2e5c7c7cd84d6289d41"
  },
  {
    "url": "assets/js/75.6bf51e6a.js",
    "revision": "b0960a255da184f135e90a7eec854dca"
  },
  {
    "url": "assets/js/76.f2c0de40.js",
    "revision": "133675981d213518c14f9ccc443aa4b5"
  },
  {
    "url": "assets/js/77.41246386.js",
    "revision": "bc41add6686771fea09bbc6f0a189935"
  },
  {
    "url": "assets/js/78.f3696fb3.js",
    "revision": "f58ee7e4e3179db1737040198f3585af"
  },
  {
    "url": "assets/js/79.6030ac4a.js",
    "revision": "b1da757f01dcad9cabbd14e46ae8da70"
  },
  {
    "url": "assets/js/8.e32aa0d3.js",
    "revision": "f19c62c51d7fd8899eefb5729bdda202"
  },
  {
    "url": "assets/js/80.8a55705c.js",
    "revision": "ef5ff7822e85bc1ec6de9c9207180fad"
  },
  {
    "url": "assets/js/81.10f88766.js",
    "revision": "de436c071985a2946b3bf4fc79f1f304"
  },
  {
    "url": "assets/js/82.209e94a4.js",
    "revision": "f19ca3f2cb5d70d8da27eee27943dc05"
  },
  {
    "url": "assets/js/83.69e14653.js",
    "revision": "6df897347fedfd48d6eb084ff307457d"
  },
  {
    "url": "assets/js/84.7bab1e80.js",
    "revision": "9fb06a3f586eb3f6963d82661800c375"
  },
  {
    "url": "assets/js/85.00e09f9f.js",
    "revision": "709c100569de52796140865e81a76a18"
  },
  {
    "url": "assets/js/86.560de038.js",
    "revision": "c9f155cf68a2175dac0c26d4620c0455"
  },
  {
    "url": "assets/js/87.0a82938d.js",
    "revision": "5c63d8cead9276508840c49d5513cdf9"
  },
  {
    "url": "assets/js/88.1a3eecd5.js",
    "revision": "63831f961545a2201a6aabcfb24cae91"
  },
  {
    "url": "assets/js/89.1ae9cd3b.js",
    "revision": "4ad99585173e24be760917de7996b11e"
  },
  {
    "url": "assets/js/9.1b3c6727.js",
    "revision": "9b9a27d63deff40d7268dc5f8441735c"
  },
  {
    "url": "assets/js/90.9ac7d8b2.js",
    "revision": "77172cfc68a9e6a2ba0962284a085f11"
  },
  {
    "url": "assets/js/91.3391e209.js",
    "revision": "310f90acfc877653891f3d87f423d312"
  },
  {
    "url": "assets/js/92.89b4508a.js",
    "revision": "75317a94c94c7bbc2c2fb33025b5e4fa"
  },
  {
    "url": "assets/js/93.c272f7bd.js",
    "revision": "667bf51d1dce77fcb81b7ffebc199294"
  },
  {
    "url": "assets/js/94.f63025aa.js",
    "revision": "9a41b6488de1d0584d7206495986c456"
  },
  {
    "url": "assets/js/95.e3942c40.js",
    "revision": "b688a77aa68a256ee52135796536a2be"
  },
  {
    "url": "assets/js/96.7d8c5fd4.js",
    "revision": "c2bdbda6ab4969e2872a68b7fb0e5274"
  },
  {
    "url": "assets/js/97.f1194b21.js",
    "revision": "57e4ad552707d40610c98dfa2e548491"
  },
  {
    "url": "assets/js/98.5f1eff51.js",
    "revision": "641d1ed43196190928a6c9334987fc9b"
  },
  {
    "url": "assets/js/99.5e7cd0f9.js",
    "revision": "c925dc8757ab8ea287d0a3c0daa7bca1"
  },
  {
    "url": "assets/js/app.a4902a5c.js",
    "revision": "08cbc50633b034e9790c3676ce157fc5"
  },
  {
    "url": "assets/js/vendors~docsearch.26a0047b.js",
    "revision": "61cdcc194c77ef2d30eb9f91f29c6c97"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "a46f35f8e8c5747cc1f656e838c3515f"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "d502704f0a018f8af84afc424fa05a42"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "d5bd8bd6314de81ea71916dfb0f6495b"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "e9441ee2c467d4f76c70c18c6703fc63"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "e5d5716e2deabefbc60be2d998148c4d"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "2a43a448ed0c52d992d655545145d397"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "9b8d05964e750247eeb76343369b3314"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "26fa420454d50d5687e221bce4705c21"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "39f3c68e9cbe27f35425835fdc231fb0"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "6341e2990bfa8fb7cd443b4e695e6ca3"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "7ebac84553a8eff479e120681604313b"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "059ecbb8bc51fd65cefff76567e430a5"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "8cf6f50cbe3a0f6d834d1e9197f83a14"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "f630ad9a3f529b51befa0cc14bfd0a65"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "03a8005349bb936b8d4d33c71aa2ae12"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "ccb97722e17849e0e74a0c79efd9fd31"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "1564ab603e781297d68ff1257fc684df"
  },
  {
    "url": "impressum.html",
    "revision": "47aa922f2429e96af03a0973fae4ad0c"
  },
  {
    "url": "index.html",
    "revision": "334b293042954778d6cb7eb4bae41478"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "3182b402a933442f235db66390ba7e45"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "7b0494d322c1d185ae07452e7b3a24b6"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "93b96ed9c6eae15d2e43907f5cc29672"
  },
  {
    "url": "Projekte/bestfan/HB-UNI-Sen-CO2-STM32.html",
    "revision": "c88266168feebbcd391e00aaaaf2fb9c"
  },
  {
    "url": "Projekte/cactus-online/HM-Sys-sRP-Pl.html",
    "revision": "0057c393f15d786a4f35bd822549def0"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "c9b915fbf4c2713b4337af5c97a9355c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "b5d3365fa41a16e6ff7436369e2af110"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "48f13f3fa697225b3b0dcc0bfd0432b0"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "c2f15150b7a8ce3608c96156aa6f4324"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "4c63137d70a295440189e817c8ea6aa5"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "44bf552eef6111e134f5e96d23b2a31e"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "1a3389823cbe2c51ec3206f7a52c85e1"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "6282e61c03ca780963e152ea6170c85d"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "6cf0f11fb37c45c4cba94f817b9dfbbb"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "fa92543afdcc890e5bf22e20b6312360"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "afef7019cdc8d51aba94bc77f5f78cff"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "5857e93b3bd99dc71bf4d346608ddf6e"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "3be7ef90cba9b56d604125070d408fcc"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "a9f799b189e7e1963495080515ca83e9"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "9fae2d4cf29b5fa06146047b5e56d6b5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "f31e1a1dd82ac798de93a437b0b346f6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "80dcf51e253c375f3525f3e06731187c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "9db562bde086446c9c9371e41714d526"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "ee95cc3290d8a2e98a91895798c012a5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "35e1595734f81aa3b58a2174302b7556"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "9ab8392e0646bf4cc3aa01d1dce12048"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "d64114011681f82d20115be825d19cfd"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "e69198cf4b1b376367a57ee67dd0273e"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "ba10a8edd5e7be26631c0269bd404615"
  },
  {
    "url": "Projekte/index.html",
    "revision": "963a4bdd1c3a6ed860a607e2c8b07b73"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "33c697d1295579c0aa74b103975d8175"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "33a50c111f76a4b9e2e4465744446a23"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "67cc2bb3a9da7dc79bc601b121ce79c7"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "c3d28eb70d5608223eb54d75d6d1043d"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "11ff9d73b94956e2a0ecd0093c18d06b"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "48b7e806f77b5333e4a750203272eb79"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "aaa6bce75e37cd76c1b498dae0d37590"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "3c8f660f67504ef12e49ff7d88d7e13a"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "2962ac0c153798b9c2a68794b9957487"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "a7ccaf0d40f999cbd22ea4af5417b0da"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "cf5be7e5e03f4c05a4f79fb2d382596a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "93a7f580039503c24b1e229f00c8194e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "db2f79f7fcc6a14b197f4f602ed61a72"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "01a330ac14ea2fa0f09ca3187a50545c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "654e76f497a5e1809feed7575c1fb93c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "2aec43d6532b8338dd5b708392ba0718"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "2ba22fd0ada761b4b55a85d0bdf913dc"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "82667f15805a0abbc89081c1c602c547"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "0e7efb34812fd8dc7112486befd2c1a3"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "46d77234ef5524b552d001be45792ce7"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "70a00e7d6320709784ada7e30002adce"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "64071e41e61ed604e1d37164db47dbb8"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "e12fae97c177d5e921c629f415148ddb"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "09a1cf156e9e0d75513b2ab5a3d43aef"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "e95707f9665ca2a5db67df9516b7b674"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "03b7d86d9605485e9ce19ef2386f0862"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "ba915fbf4bbdbd56bab56b4f5bab8cfd"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "58691197cd78826e8d43131e51de2e32"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "5226197bda979a30a293c8dad9c7dfce"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "d79a5fc1b79089885313375e311c4e4c"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "b645a675848e2c45d6b2931befccca54"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "d541bd803a05dec3e842add52685e23e"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "5cbe289dd519bbe451ea31b930dc6432"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "7ef04e31010e954c17e3bf0292f9837f"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "f70c58b33ff7d9ca865e36f1e96e2207"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "31a5d09ff52392ea9a31dec5eba80ea0"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "70a6af9e3a6b7abe8ba611054c967c1c"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "89d8876da13fb086ff2b75085080e4f7"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "23707f05bbf98de18649bc1d45824d6a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "09a85b41bf7d69814113eb6ec2a7fe97"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "1eb51eac504a92d99d2852608e6f75cf"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "3ce29676c3f592d4ab7eaf36e5738cab"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "66f811d80c6bfb2e1fb62ea97ad8994e"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "98e07732bfb2ec9f7caa6fb64adc811f"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "74a2c083e986ae86cc28bfa9c12657bc"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "07f22bc49b7eceba9b92014b8082a0bf"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "ecca7c02218134a9b3ebca8e5d2f5320"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "0349260398fee155df4df7ae37ae7f3f"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "dd757faa6ebbf2104e97fbee21b241a6"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "f2efd05bccf615ac7cdadaa20ecfe565"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "1ff9e3a2e5650a73f97ac08d2bd95f65"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "693123a1b45ed5616ff708e689bd8695"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "8e659968640669333963db9c2daa298e"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "8a25c4e4823c96bf214eeb37a7edac5f"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "0e494b53a68a0b0a7676676a40743d73"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "5adce6da770daff21e5f62bb99d061d7"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "8f6db1db5c38430328fc2856f9a8402e"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "8d3073aaca98e3accbba6d8321e16f99"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "059cb0f65779d16703149040463a7291"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "6c94c5dc726e5a4bd93dfb4003601687"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "90a62bafa63e7a3e7500ac7f58b079b6"
  },
  {
    "url": "rftypes/index.html",
    "revision": "8cc1e15000106de140f1cc60ca6abf8b"
  },
  {
    "url": "Sketche/index.html",
    "revision": "2e31f6e6368639c6697ffc02b2615e80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
