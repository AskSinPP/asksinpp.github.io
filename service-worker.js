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
    "revision": "ee5411d3a2bd72ade5ecafe9c533a311"
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
    "url": "assets/js/1.6ec569a3.js",
    "revision": "29c8e74856216b10f16c2e6cf1feffd4"
  },
  {
    "url": "assets/js/10.5bf5e937.js",
    "revision": "6e44de35cd411813c815f0aa2a290f6e"
  },
  {
    "url": "assets/js/100.07b8c05b.js",
    "revision": "97634f42bf681764108f29a4e266223a"
  },
  {
    "url": "assets/js/101.af0b60bf.js",
    "revision": "54067e1b404f9e6be24dcb876946c701"
  },
  {
    "url": "assets/js/102.969d76f6.js",
    "revision": "69e608852ad3a2793eddb7781d63912e"
  },
  {
    "url": "assets/js/103.622b5eeb.js",
    "revision": "34cd3636119af22cca203f6471c74d5c"
  },
  {
    "url": "assets/js/104.ef1500f0.js",
    "revision": "3f22558abab4b400149c7fcc6bf8bff7"
  },
  {
    "url": "assets/js/105.db5d6235.js",
    "revision": "24718f96278f751179eb1c6a51f04b74"
  },
  {
    "url": "assets/js/106.2bdaf501.js",
    "revision": "049bf530a361dc6c0dbf3fa19bd12dd9"
  },
  {
    "url": "assets/js/107.7f70b132.js",
    "revision": "4e676cafa0a566906764955c40e205dd"
  },
  {
    "url": "assets/js/108.6bfa7a22.js",
    "revision": "a93afcb97b23305f76c62031c47cb7bf"
  },
  {
    "url": "assets/js/109.a89b7f32.js",
    "revision": "2bbb971d7ad392cd8529aa96fa3db6ac"
  },
  {
    "url": "assets/js/11.6dd7136a.js",
    "revision": "167f2053b9543fa46968cc2775c93325"
  },
  {
    "url": "assets/js/110.a8cbb4b2.js",
    "revision": "ccb8f93a45183e67c0ac5443550d9938"
  },
  {
    "url": "assets/js/111.ac0041e5.js",
    "revision": "ae69bc022be9e50c01cd5239d4661040"
  },
  {
    "url": "assets/js/112.cf9bf481.js",
    "revision": "c4857e09e2da1ca89559323d5e2c682d"
  },
  {
    "url": "assets/js/113.5f546a14.js",
    "revision": "141452a7635da049e0be5c2b57e5121c"
  },
  {
    "url": "assets/js/114.b411cbd3.js",
    "revision": "e3f53c8eae256d5c711a8a8b70fa8c3f"
  },
  {
    "url": "assets/js/115.bbd75644.js",
    "revision": "e82b47369e935986faf61f4f358787f6"
  },
  {
    "url": "assets/js/116.831b1a6b.js",
    "revision": "04151aa45b37cd4174ceaa41eb5cda4f"
  },
  {
    "url": "assets/js/117.9b8cb78c.js",
    "revision": "e6cf4a90dc316cbfa26ab90c2cebd27d"
  },
  {
    "url": "assets/js/118.06a2cc57.js",
    "revision": "1d5edc06a55c3ee1b2bb32ad6094ba4e"
  },
  {
    "url": "assets/js/119.7fc6ac5d.js",
    "revision": "6aaccb2f4ff0eaa201ee893c0725eddd"
  },
  {
    "url": "assets/js/12.2b1a2c8f.js",
    "revision": "1ca70e48fa860be072b9e7f575d87683"
  },
  {
    "url": "assets/js/120.500155a5.js",
    "revision": "0bdf177fdf215d7f6f15c49b3cd09ac6"
  },
  {
    "url": "assets/js/121.749ffaf7.js",
    "revision": "20cf5e1558b22cb89d4741c648d0e65c"
  },
  {
    "url": "assets/js/122.b52d421a.js",
    "revision": "dd9d4bba42ba16997e843ce1cad3173c"
  },
  {
    "url": "assets/js/13.5bec2a50.js",
    "revision": "f3a199bbfb8c3b4581cdcd501424d97d"
  },
  {
    "url": "assets/js/14.d1271f5c.js",
    "revision": "f9ef54ddecfa9185d5153eee9d1dcb79"
  },
  {
    "url": "assets/js/15.cb31a318.js",
    "revision": "eb45707dcb803c00b2828a68d71b2022"
  },
  {
    "url": "assets/js/16.05bbd3e8.js",
    "revision": "2fd3a10de9ea1f7a710bdd134ecb4536"
  },
  {
    "url": "assets/js/17.9c8dd14b.js",
    "revision": "4d5a2a6c4de62acc83b1b68e15823025"
  },
  {
    "url": "assets/js/18.b31e8901.js",
    "revision": "21259ef5e8f9e65534dc4274c1eaa5f3"
  },
  {
    "url": "assets/js/19.fd4646a6.js",
    "revision": "b43785de338c55caebe25b42a9d19b11"
  },
  {
    "url": "assets/js/20.a473b8e9.js",
    "revision": "10bf397dabe1892f62bfd9a5c9ca4ef1"
  },
  {
    "url": "assets/js/21.04d1a250.js",
    "revision": "bf841b0d8819d19ba2195a9fc2ead9c0"
  },
  {
    "url": "assets/js/22.58582e0f.js",
    "revision": "2ee3873870979b5a5533297584ce3a24"
  },
  {
    "url": "assets/js/23.65d06dcb.js",
    "revision": "26c695290d70fe8d9f4102c9a1ac1945"
  },
  {
    "url": "assets/js/24.39dfc722.js",
    "revision": "93cc49d47f0589cc4fccf7d4be6e019b"
  },
  {
    "url": "assets/js/25.9d22b443.js",
    "revision": "c80dacfafe8a529e59ee7bbf045b71b8"
  },
  {
    "url": "assets/js/26.06c108a4.js",
    "revision": "7a8662e4fe42113eb040b8de33d86f11"
  },
  {
    "url": "assets/js/27.4f86f38a.js",
    "revision": "ac2ba8bde5bff16cedd47aa7b60a0579"
  },
  {
    "url": "assets/js/28.777ed8d7.js",
    "revision": "4da40727d08bdd26c6b61f711437e50b"
  },
  {
    "url": "assets/js/29.5da8374b.js",
    "revision": "4264567700e232f9c679e63f926678c9"
  },
  {
    "url": "assets/js/30.8902f1c2.js",
    "revision": "94b4efa3dd9b82be40e34463d1b690bb"
  },
  {
    "url": "assets/js/31.6edc8f07.js",
    "revision": "e99baabd462876218f71f498d61302b9"
  },
  {
    "url": "assets/js/32.4a0a052f.js",
    "revision": "beaa18b37d72510bbc4fb35aa7e4b188"
  },
  {
    "url": "assets/js/33.d96b94af.js",
    "revision": "8f8a1ddb30003243e751243b8c38cfd7"
  },
  {
    "url": "assets/js/34.96a58efe.js",
    "revision": "43391d55adfb027549336c34f9c7001b"
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
    "url": "assets/js/37.bdff3976.js",
    "revision": "867015721f4c6fd1c0d3a20e7f2602e1"
  },
  {
    "url": "assets/js/38.8ca238ac.js",
    "revision": "c716c10ebd6def77d4385c6575c6b8f4"
  },
  {
    "url": "assets/js/39.1b9a1e34.js",
    "revision": "a42b3df66819c5f3d5a08b15805a8b2d"
  },
  {
    "url": "assets/js/4.2a4d68de.js",
    "revision": "ac6c3c4517ba39f8b8c281ac4a58d9ae"
  },
  {
    "url": "assets/js/40.35fbaf2f.js",
    "revision": "c1369f4a62783d643c02145f7842254b"
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
    "url": "assets/js/5.7b2cdf29.js",
    "revision": "a711f9ac52b28a5425c6e94a46bacb0c"
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
    "url": "assets/js/53.5431a9ad.js",
    "revision": "bec73bd3d51e6ef9f9923d8072d4f063"
  },
  {
    "url": "assets/js/54.78701730.js",
    "revision": "c45ec64d34f4513740a7b92dabd3bdc0"
  },
  {
    "url": "assets/js/55.26cbd9a7.js",
    "revision": "ee341682ef888a04319c6bc68b3ac9df"
  },
  {
    "url": "assets/js/56.45c54851.js",
    "revision": "ac9394d6d47787dc3e7d95e6e00fc69b"
  },
  {
    "url": "assets/js/57.0b5be27e.js",
    "revision": "a3a6ee5c2f6decce891896ac93839815"
  },
  {
    "url": "assets/js/58.2b00d9b2.js",
    "revision": "08633e44598501181e37c74d190e2f53"
  },
  {
    "url": "assets/js/59.67836919.js",
    "revision": "f7a26eb483d15220caec0f1fa990d779"
  },
  {
    "url": "assets/js/6.2d058457.js",
    "revision": "7418ef9cf83536b2dce73d0f715bd418"
  },
  {
    "url": "assets/js/60.b8449daa.js",
    "revision": "e160a4d3a295f8fdd77b016eae9da9d5"
  },
  {
    "url": "assets/js/61.73e53ca3.js",
    "revision": "5da76c9e16b6db2d79de3b1175ec55f7"
  },
  {
    "url": "assets/js/62.274f63f4.js",
    "revision": "ab96b0c7c9d2e673cea2ad0ad0afbe41"
  },
  {
    "url": "assets/js/63.d393a20b.js",
    "revision": "af669ef27c1a08f4da48ea198d493a94"
  },
  {
    "url": "assets/js/64.67fb3033.js",
    "revision": "c2ddf2376638e8370c8dc9d6c5a24333"
  },
  {
    "url": "assets/js/65.86b446ff.js",
    "revision": "46b809c67fd0e622a92737159767a5a6"
  },
  {
    "url": "assets/js/66.99a01aac.js",
    "revision": "9fe8bf0906c675c1be20e7e119e6919d"
  },
  {
    "url": "assets/js/67.dddfcb7b.js",
    "revision": "1c230cf7d76722e3179b785d06e6966e"
  },
  {
    "url": "assets/js/68.ccb15349.js",
    "revision": "6a803e1bbd95359f28a2e56243c173f0"
  },
  {
    "url": "assets/js/69.b2f66ec7.js",
    "revision": "7680cb88b33e8a58e2fd22f417dd893e"
  },
  {
    "url": "assets/js/7.52029376.js",
    "revision": "eacd03aacd87a4dbb5723380cb1991db"
  },
  {
    "url": "assets/js/70.5e91802a.js",
    "revision": "cab1a5535f1682303223635bb235c87d"
  },
  {
    "url": "assets/js/71.ef2c8561.js",
    "revision": "d290e5ead97f905a4bdcc98bd0dfb392"
  },
  {
    "url": "assets/js/72.c0f0c6a9.js",
    "revision": "734726597299d7d4f87265fbe4e4d11f"
  },
  {
    "url": "assets/js/73.94ba1e4b.js",
    "revision": "e0784d0636b5163eee9ab751f416ba0a"
  },
  {
    "url": "assets/js/74.303557cc.js",
    "revision": "fe7ab0ec9ae53ced896a4f69f4e76d1e"
  },
  {
    "url": "assets/js/75.267dbe62.js",
    "revision": "49a6b96482b0ef6358b46c028f9b945d"
  },
  {
    "url": "assets/js/76.05f9e8d9.js",
    "revision": "96718eb8cc5c125563c69192307745b8"
  },
  {
    "url": "assets/js/77.202c084f.js",
    "revision": "6cb4d024093bb70f9687de9ba0e7ac54"
  },
  {
    "url": "assets/js/78.10459213.js",
    "revision": "134f59d84f07f401dffa04ccaab03453"
  },
  {
    "url": "assets/js/79.869d0c8b.js",
    "revision": "bd88c117377c04f86eeb1f2d50ff726c"
  },
  {
    "url": "assets/js/8.70984949.js",
    "revision": "b530b03487885e8d1c5654e8a5ccac36"
  },
  {
    "url": "assets/js/80.9bfee889.js",
    "revision": "781b10fbf6a74c08b4e3e704bb6e764a"
  },
  {
    "url": "assets/js/81.ffdbf706.js",
    "revision": "9335d22948818890e7caa7b2a5a265b5"
  },
  {
    "url": "assets/js/82.572a691d.js",
    "revision": "152ee0245ee5cdb56bc504f0cd80f141"
  },
  {
    "url": "assets/js/83.5cae3ef1.js",
    "revision": "e93c3771e879007b10e1431b01753a12"
  },
  {
    "url": "assets/js/84.2ac96618.js",
    "revision": "69f6cc6d68a5a80687fbb8eac03a6ec5"
  },
  {
    "url": "assets/js/85.9509d4b2.js",
    "revision": "1493aa1f0d51d9f0095e95e879357cb7"
  },
  {
    "url": "assets/js/86.214351ec.js",
    "revision": "77471b0c6a07054f15db489af0e258e7"
  },
  {
    "url": "assets/js/87.2fa92f15.js",
    "revision": "0858384f0a9415ab08b6a16b3f9b63f4"
  },
  {
    "url": "assets/js/88.b8652b60.js",
    "revision": "3d2a18b263e21238030ce876caf3d94e"
  },
  {
    "url": "assets/js/89.bb09262e.js",
    "revision": "bdf0c79891fe081724de4e6fcef97360"
  },
  {
    "url": "assets/js/9.877b89b4.js",
    "revision": "f4d03d6e848337ba55f0e1d89c8c7226"
  },
  {
    "url": "assets/js/90.870692e6.js",
    "revision": "a98e10bf5e36e9536af8f73c986b8b1a"
  },
  {
    "url": "assets/js/91.8e534f38.js",
    "revision": "5a0d5b73ff85361837f3b6b7f12beb52"
  },
  {
    "url": "assets/js/92.b3190886.js",
    "revision": "46ec42967f650689dfdfe8fb0d9edb62"
  },
  {
    "url": "assets/js/93.16268220.js",
    "revision": "7088451b43c059589ccef62d8f22849e"
  },
  {
    "url": "assets/js/94.e4cedf67.js",
    "revision": "f4da2a4e0772560363b76ba25ee47273"
  },
  {
    "url": "assets/js/95.86983076.js",
    "revision": "839744b9b7f27ef4c094bf5985e82b4b"
  },
  {
    "url": "assets/js/96.58802d0a.js",
    "revision": "38e5f9980e92c4c18a25b6687dbb95a6"
  },
  {
    "url": "assets/js/97.16bfc533.js",
    "revision": "a13fefeb431a97cbb260d1d829de73a8"
  },
  {
    "url": "assets/js/98.f2bbbe7e.js",
    "revision": "16648fece55661be5d51c727b17df320"
  },
  {
    "url": "assets/js/99.1188028e.js",
    "revision": "998f2d448801561f92898b15a74f59a7"
  },
  {
    "url": "assets/js/app.97344396.js",
    "revision": "d6cb7f388ddbbdc77005f6641f72bfac"
  },
  {
    "url": "assets/js/vendors~docsearch.ac4a84ce.js",
    "revision": "8db8b3954a24a7bdfe52db43c352726e"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "f9fad93ec99acb5ed4fbd69814433de2"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "500873a0da213874a4d78574993796d9"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "1c9a16a408b259200484ab726e8b88c1"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "0b7b56d53762c19448e5bbbbd87e94d3"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "57cecd81b8ce3ffeaa23487144ef2528"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "41a5045b35f0988421eb1e008548e1fc"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "09d0acbc5d1c79aed15ecb6d28bdb13c"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "7bb8ec9dccbc14e4bc72856cd90c7464"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "1c0c33d4a8915dc80e9099044b6cc664"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "7e468b3441baa459b9a5c59e70d37956"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "ad6656b8bf489e67f77a10b6633fad4c"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "8b6ba0cda7ef110902e476e7aabc0929"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "0b4414c81b67f8495ae81e6f1009f906"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "53859959381d800ae61afaeedc4f9b74"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "de810926576314e7849b93ec053c190b"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "ac4570aa8201600d127b6b58b79321cf"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "2f38dcffc2479fd797ef1e277799bb5a"
  },
  {
    "url": "impressum.html",
    "revision": "18187947a3bbad1b2c2f55e22dd91184"
  },
  {
    "url": "index.html",
    "revision": "5ea931335f2f151d113a23e545f8fb29"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "7d881b46396d95ad60b7b3912bc67d7d"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "effc7e23f81ab722722432a665161863"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "9b557a315da49ccd52a20d210b86407c"
  },
  {
    "url": "Projekte/bestfan/HB-UNI-Sen-CO2-STM32.html",
    "revision": "20113da442766b7bcc65117eb0bc7aca"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "612d0acf9d06a4163f22b30d1769049b"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "b31e67b3e17c913244ceff6ddb99d550"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "e81708cab27c547379464f9ca89f8d03"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "393ea33616d367d6500da94e8ed43262"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "818bfd365c118ceafa40d53691131fa8"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "d858fabee80e6ba94d5a1a9c3d8a5f12"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "689c5c5729352c161c9af4426978b5ba"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "74977bb32324e4695e0546d87d0b9ad8"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "fea4d82fa63011d843ea87371bd1f08f"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "ee6b150ab86a09041fbbdacfb3a8be01"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "c2add14ac450cf2bd2ca443d3ca5c30f"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "79d41d2245b0019ea08b35b5115d4ca0"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "df2903e35632e1525de6dcdf7aba901c"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "4302f03c86df45e44e3691a5b79a33a0"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "3dff17b77acd109f7b30f5b432e4df17"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "434491f5122b8a95e2157f51b2c584a2"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "896e41ef27a24bb1bd99f4716b1a0c72"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "c72d3b06809449e05a164faae6732402"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "2d15f350bee01403f768117e567b8ba4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "45017c9e47e75d62b770188c9b53afee"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "d09b4a89f3a69d44088627bc8f32f27e"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "94f1eab7913221bd81d38993ec66988a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "0887397d5cd1e90ae1b6d8732183b9ad"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "028c766cca9be7e18a69275efd402503"
  },
  {
    "url": "Projekte/index.html",
    "revision": "ac22f1d90050a08fb58bd24addf48012"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "079125325cbf593a61b58a53ef613702"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "94664a19d3856f3780cb7dc57f37efe9"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "01a7c351f6ab37be2fa80ec995544eb0"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "5e8f819f7a1d2fd5ca7ede4ad8608d45"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "f58cfe5d5f5fb59c9c17343a40c62008"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "8d43f0993dd6e4613ff835e35d4c8501"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "2bb6668976faaff1c2a672a5399fb4f9"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "2180bc7a59f0695f799cd41aef64428c"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "79ce63fbb9cce1a2d41f7a0bb782d64d"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "940ad75d81e7b4546dd5132fb402bc08"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "a1e3a504cd78b6c979b718cbf8892c24"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "508c76468dae6252965fb0364f2b3902"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "de00a30eef337a5b61571a9049ecda89"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "bd60d6130ce60a0473c22e8686105aa1"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "988ed62b25cb1488857d8a094bd55acc"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "5958b6c1844135006f65f115d0ae39f0"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "a42a186f5a7bfc2e93370d8ce1317202"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "e88c4c6f0bc090029d0211987fe836af"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "689f6557c2f2d333d6878fa85f1c1eaf"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "61ebec1d69ebd2e3c334df71451b926e"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "d48068eafe142c6961497ca0bb4fc931"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "11912ec249b6a7d5ee2a36ff20c88262"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "469187b88f4fe1cac7d43a81473cfbeb"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "404a2ad860f9b5034a533697fd701f83"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "d0c6951e66c5188f7be722cd40d6536a"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "0bf3d2ded6b7b96d4eebc87fdd27fe7e"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "f69055a04a72d6841a1ed5b8fe5ff5ff"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "9ad0e05c1ee4a5dd6c7b2ab15667cd71"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "3243de8e48397e3a0126efa75d8ad146"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "f9085e4051bcbd95fd160ae42cf9f838"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "c09b20adb224dda70718129c411f1f20"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "08f0b8b0251c980bcfc07f50d3d60385"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "4cd9f10eb1ce9d81d37a242a82caaa45"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "ab020e4796a038d12733bdfb14aafaed"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "2940231b88690f53059df8a4601f1e95"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "9c5504a8ad2c70ef6c4c5a27cc6a2ddf"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "4ec040d6d802fb0566f0b00cd789ec45"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "ca29b54aa9b9ba2e8328fead058fae9c"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "b4a321d4246af917c7046fb5283e9f79"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "d2c362259875609b06298b1a99649bc1"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "658b32954bb771e42316fd55090a5a35"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "0a0e37700c59d3723dd3931f91c2441d"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "fbeca3338f789c5140a0993d53d93f1e"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "2759f42267a96a464f4acbae8ecc8ede"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "0cea44724427ef1e74333387fff960cc"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "8a0346e436b1f6ea3d5aa1b3460ba63c"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "9512e94c10dba708645dccc909409f19"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "cbe5cdfab0b199e1ec83d6cd7d11716e"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "c7b2071be46963c1de4241bdbd79a07a"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "c265ace24965da6030564dcda04f8677"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "f4ffb6537dbb9e2cfa0f21cd74b99578"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "4443a3c17b142268b3e1643eb9ab3e20"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "425d9a9b04251249fc48b62467a01ebc"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "7a96ff6276f753fa8850882495ffaa24"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "b11f1449a926e65d899bd6ef07dfd3ee"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "550cfa4c35f256711504ee6f1f8a9184"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "508346053c600c2f6927bacb301f6f5f"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "77cca41626ea3aeb41d89e18557ce6aa"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "d33ee27bacea20095d5bea609aa28aca"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "46c6974ed1130735e159ab44b513f48c"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "20661538de6fa4604b487aaf1300af58"
  },
  {
    "url": "rftypes/index.html",
    "revision": "c84faac4b2b772964355d8eb4df844fb"
  },
  {
    "url": "Sketche/index.html",
    "revision": "d79e8603cdc5c7b45bfd1dfabaa02ad4"
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
