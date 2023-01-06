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
    "revision": "b9cda16d14e42a59b27def9f054d5d9b"
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
    "url": "assets/img/GasZaehler.d640b71a.jpg",
    "revision": "d640b71a2f71add85ec16f377bf387be"
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
    "url": "assets/js/1.5484aeb7.js",
    "revision": "332e0d903ccc76d00bb7f1172c00568c"
  },
  {
    "url": "assets/js/10.2599c21a.js",
    "revision": "08e8497ab7bb90b819c7349a38bde44d"
  },
  {
    "url": "assets/js/100.ff839c60.js",
    "revision": "9bd8d6df31f052556e767ac29649fc0f"
  },
  {
    "url": "assets/js/101.af5c72e8.js",
    "revision": "bac921dfd9935aba444ce67a8a4ddd13"
  },
  {
    "url": "assets/js/102.5416797d.js",
    "revision": "bd1debc2e39c2a5be4c20385cb28ed90"
  },
  {
    "url": "assets/js/103.19846a14.js",
    "revision": "a1f5d63db33746f6044102545578178b"
  },
  {
    "url": "assets/js/104.74e58d5b.js",
    "revision": "1abe10c1af50a55652f1ade6f4250d09"
  },
  {
    "url": "assets/js/105.648e6402.js",
    "revision": "78df22eb1d6bf415109e2f0f49c3f46b"
  },
  {
    "url": "assets/js/106.a2e82793.js",
    "revision": "b83d9460701d6ea05dde0d2a5eb7621e"
  },
  {
    "url": "assets/js/107.5fb0b0d1.js",
    "revision": "6ce71298b4c6131741160852da1e534e"
  },
  {
    "url": "assets/js/108.844f3cac.js",
    "revision": "8d401bad56b3ae83cbd59abeb8e0cb54"
  },
  {
    "url": "assets/js/109.c3a87b8a.js",
    "revision": "a8fd3249bc5ff403f95ceb36fcfc6ea7"
  },
  {
    "url": "assets/js/11.209e8038.js",
    "revision": "9e80e354db64525c71d75917d15a60cf"
  },
  {
    "url": "assets/js/110.3dee62af.js",
    "revision": "a1f9d420f288c2e10b80a0e4f7f68889"
  },
  {
    "url": "assets/js/111.965faeb1.js",
    "revision": "de134c50351fbc73c4b65406621b44b7"
  },
  {
    "url": "assets/js/112.6ff287af.js",
    "revision": "8c17df6989fcf93317dd69be85d99636"
  },
  {
    "url": "assets/js/113.e73349dd.js",
    "revision": "c7f0e187e7822fdeeef7d9001b99331d"
  },
  {
    "url": "assets/js/114.32740c71.js",
    "revision": "2024a4287672036e5b0d70af5efeccf9"
  },
  {
    "url": "assets/js/115.6b03b20c.js",
    "revision": "b8db7eaff05d4475aff27868dc34389a"
  },
  {
    "url": "assets/js/116.aeff133d.js",
    "revision": "cee6e9f29c0ffb7c590fad81c02cfe6d"
  },
  {
    "url": "assets/js/117.413bf07e.js",
    "revision": "f6301024bcb80e237fbc21f9e8788020"
  },
  {
    "url": "assets/js/118.598d2a39.js",
    "revision": "b0ddd0e05b8bbaee0e815f5a38b2a0ad"
  },
  {
    "url": "assets/js/119.0ff4ef91.js",
    "revision": "6c712bbe830d1040ed897fdb3fa22a26"
  },
  {
    "url": "assets/js/12.73e89608.js",
    "revision": "2c5693b3ccd42c43bf5e7acd01c5c4db"
  },
  {
    "url": "assets/js/120.8668272e.js",
    "revision": "11e52ede4d78c82826d15fd53af821e0"
  },
  {
    "url": "assets/js/121.1c41dd06.js",
    "revision": "ef50684fed6e38d0def3f71c9e17c57f"
  },
  {
    "url": "assets/js/122.79efed11.js",
    "revision": "feebcbc80ebf7fff297e63f08b02d413"
  },
  {
    "url": "assets/js/123.9d65acde.js",
    "revision": "145d6a7b22a5b7304bd2e4c351f698f0"
  },
  {
    "url": "assets/js/124.ed39b3c0.js",
    "revision": "dc3c2a7f66c8927b3f0aea68ad55ee6e"
  },
  {
    "url": "assets/js/13.290ba37b.js",
    "revision": "26d5ee899f53d36075536723f5fa974c"
  },
  {
    "url": "assets/js/14.eee03c1e.js",
    "revision": "57b4911cade222dea46b20f0fbf32a14"
  },
  {
    "url": "assets/js/15.661224cd.js",
    "revision": "ca1fbc7c7209def44d28d655bfebd2ac"
  },
  {
    "url": "assets/js/16.c7ceec60.js",
    "revision": "67199a83a2e3599ffab33c908167df7f"
  },
  {
    "url": "assets/js/17.c97ea33e.js",
    "revision": "2c849140b4a8902245c6e50cbec80bb5"
  },
  {
    "url": "assets/js/18.59f08e5e.js",
    "revision": "9cfda2e64f81219b3753419acfeb5027"
  },
  {
    "url": "assets/js/19.c3f98419.js",
    "revision": "c067e06808c2d063774f4114a2720ec9"
  },
  {
    "url": "assets/js/20.9852d2fe.js",
    "revision": "b156c760ae289cf4329c5f29179108cc"
  },
  {
    "url": "assets/js/21.4f1007eb.js",
    "revision": "2c67f670edd53105cf1ddbb76665be90"
  },
  {
    "url": "assets/js/22.8ea0af79.js",
    "revision": "921de3752d9175288a2ed247a2b0e3e9"
  },
  {
    "url": "assets/js/23.d31dcab2.js",
    "revision": "5558ca8c53e48a8821c563c01f12159c"
  },
  {
    "url": "assets/js/24.20a72dff.js",
    "revision": "659d619e4ba7ff92712efeadc9b88494"
  },
  {
    "url": "assets/js/25.ea40c83c.js",
    "revision": "306b5c850b0b7da3720712fd6333ad70"
  },
  {
    "url": "assets/js/26.a50f8eec.js",
    "revision": "2b6c82e0b1599110b7b67fd3a9be78b9"
  },
  {
    "url": "assets/js/27.82e374a2.js",
    "revision": "9f40eb2b664e05aa8d60efd46514dbe9"
  },
  {
    "url": "assets/js/28.c40cf08a.js",
    "revision": "eaa1a730f6e9107b3e13d1d018458800"
  },
  {
    "url": "assets/js/29.5866bed4.js",
    "revision": "5348cd14552468891f1bb948cbd65475"
  },
  {
    "url": "assets/js/30.c044ee75.js",
    "revision": "38593654c12db5027e24ffd7af7b232e"
  },
  {
    "url": "assets/js/31.8501d731.js",
    "revision": "11213c95b58c32c40ae532e6b903b68a"
  },
  {
    "url": "assets/js/32.5ab4ed78.js",
    "revision": "ab119e6975f0c80f7e92e9c35ee8853b"
  },
  {
    "url": "assets/js/33.5b0737c5.js",
    "revision": "7cd1b96b3f8451955f8dfc15b7b01130"
  },
  {
    "url": "assets/js/34.9ae521e4.js",
    "revision": "dec04439e1ed0d6120047da6713bef55"
  },
  {
    "url": "assets/js/35.4e29393f.js",
    "revision": "e4111442bab1c893ae821e967b8cb16c"
  },
  {
    "url": "assets/js/36.41e9a315.js",
    "revision": "b2e07c44d9379561ef1fe200816b2b3f"
  },
  {
    "url": "assets/js/37.358d21b4.js",
    "revision": "b66d09f4136228b18b412f492eaaba64"
  },
  {
    "url": "assets/js/38.b5c6e1b0.js",
    "revision": "ddf1c3de900fef3ed805e7501aa244f5"
  },
  {
    "url": "assets/js/39.c771069f.js",
    "revision": "f452264d7d7f4bd1771380bf0fbbe630"
  },
  {
    "url": "assets/js/4.8fe18157.js",
    "revision": "95591410de900fbdf2f581522038ab69"
  },
  {
    "url": "assets/js/40.da79ea15.js",
    "revision": "0302b7506be2ba79a963e8117f316bee"
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
    "url": "assets/js/5.56289ed1.js",
    "revision": "2d1906ce01750414b3e5b10f54db0b43"
  },
  {
    "url": "assets/js/50.6ab541d0.js",
    "revision": "2be8ea35c5b5828d8b3c8982e43ed82c"
  },
  {
    "url": "assets/js/51.ace03288.js",
    "revision": "d58d39c28e59389034a70d06e8233150"
  },
  {
    "url": "assets/js/52.075557d1.js",
    "revision": "359512ac23495a1f048e70c09cadbc13"
  },
  {
    "url": "assets/js/53.3f84125d.js",
    "revision": "799683aae2ada68231c1295518106662"
  },
  {
    "url": "assets/js/54.b837cd8d.js",
    "revision": "72dfe74d9234906e91ebf9fc8654da13"
  },
  {
    "url": "assets/js/55.5776b814.js",
    "revision": "46db37476a55fd787040e9faedde1384"
  },
  {
    "url": "assets/js/56.d6c3ff82.js",
    "revision": "7ab0390ab321409d6b6fe7461ea35cfe"
  },
  {
    "url": "assets/js/57.3d1fbd64.js",
    "revision": "a3ecfd35c4a54e7133486d2e63ab17b4"
  },
  {
    "url": "assets/js/58.1600e3cd.js",
    "revision": "e49b96771a41dfccfd55ea5bf945eea0"
  },
  {
    "url": "assets/js/59.3830e807.js",
    "revision": "819a6fb158967d2c1812bb15e2d7b5c9"
  },
  {
    "url": "assets/js/6.1cf72539.js",
    "revision": "03e6ad396c36605ab96c13b03ea34513"
  },
  {
    "url": "assets/js/60.a5dc01a9.js",
    "revision": "9cf05cacf77045923cfe506698efdf7e"
  },
  {
    "url": "assets/js/61.ec6b86b2.js",
    "revision": "b55bf202aa535ea35822db4cc6cce6a5"
  },
  {
    "url": "assets/js/62.5431a569.js",
    "revision": "677314c0d3cb3069dae1c4f71bd36578"
  },
  {
    "url": "assets/js/63.204bdfab.js",
    "revision": "8a1b3ad7f1135a34ea84878c1eac06a1"
  },
  {
    "url": "assets/js/64.e5d7478a.js",
    "revision": "0619f6345e741cdd2074557b8043ef35"
  },
  {
    "url": "assets/js/65.d8e6a573.js",
    "revision": "cb1540b04befc6145222796ed47f871c"
  },
  {
    "url": "assets/js/66.994307c9.js",
    "revision": "7e9e1f1ccdd2074367985707e6df4763"
  },
  {
    "url": "assets/js/67.08ce287f.js",
    "revision": "5ef606f146532f1ba5005a89c10e1116"
  },
  {
    "url": "assets/js/68.a389d6f5.js",
    "revision": "08020fd1dd69b119d22586ea222722eb"
  },
  {
    "url": "assets/js/69.ee1080d9.js",
    "revision": "a75669b84803a07413f46102fa6c284f"
  },
  {
    "url": "assets/js/7.6de27d57.js",
    "revision": "ed9edc62ed6da6437e11f919830c6673"
  },
  {
    "url": "assets/js/70.700efa48.js",
    "revision": "efd263972e1509e115871ab3ce3ff656"
  },
  {
    "url": "assets/js/71.b47ea72b.js",
    "revision": "11c490d3fe4512df00ef9f0385205d83"
  },
  {
    "url": "assets/js/72.fc68ff58.js",
    "revision": "22c303a3cae2a9ad38e3c8c9049dd3d2"
  },
  {
    "url": "assets/js/73.fdbe3c4e.js",
    "revision": "5227a43f9a52dc474d9925f126ff3be2"
  },
  {
    "url": "assets/js/74.b66dfc4f.js",
    "revision": "ae2a50660cf614b7a10f58327cba4185"
  },
  {
    "url": "assets/js/75.6fd506f3.js",
    "revision": "01d4502863d9279832f1d53d68627e3d"
  },
  {
    "url": "assets/js/76.19dee1f4.js",
    "revision": "cc6d3231d26ddac71264fdea5be631b7"
  },
  {
    "url": "assets/js/77.9bfcf5e3.js",
    "revision": "79a6cb2f8d744828356c68753567be1f"
  },
  {
    "url": "assets/js/78.1b3951a3.js",
    "revision": "53f1856cea0d5196c6d538215a424d35"
  },
  {
    "url": "assets/js/79.00911568.js",
    "revision": "be4dd6470e8f0155ba17ee01289c8526"
  },
  {
    "url": "assets/js/8.7fa32081.js",
    "revision": "b004a183e9182fee541d1292728ebf2d"
  },
  {
    "url": "assets/js/80.a2c98d18.js",
    "revision": "6b066134b630afc532e405de35df4365"
  },
  {
    "url": "assets/js/81.82dcf30a.js",
    "revision": "e59458718b09c4689750d041211f5023"
  },
  {
    "url": "assets/js/82.4420664c.js",
    "revision": "4cbba94b4d1cd8664de0f3a34c87fb51"
  },
  {
    "url": "assets/js/83.5d89cd3e.js",
    "revision": "c7ec715f960e15d718dee802e1f07e0b"
  },
  {
    "url": "assets/js/84.35439af0.js",
    "revision": "eaef44567e61dc12d8f49db440358426"
  },
  {
    "url": "assets/js/85.59b5cd47.js",
    "revision": "98fd6f41819b4a279d96468c83eaa7bf"
  },
  {
    "url": "assets/js/86.047f9114.js",
    "revision": "6dc7f77be9f3332bdc2d722031dae4de"
  },
  {
    "url": "assets/js/87.aef3359a.js",
    "revision": "d9cb586b9b4d543b978a5ed6dc0244c0"
  },
  {
    "url": "assets/js/88.b7e8400e.js",
    "revision": "fede9e94f10bef1379bec24837c74b63"
  },
  {
    "url": "assets/js/89.02b6bdeb.js",
    "revision": "4445c9c051e77e9c03ffea50c12cf20c"
  },
  {
    "url": "assets/js/9.3486cd20.js",
    "revision": "727c354322367fc0e5a3f3f83d3b4df7"
  },
  {
    "url": "assets/js/90.6a27f81d.js",
    "revision": "5151ffcc2d605489565cbb9c7b98aa0b"
  },
  {
    "url": "assets/js/91.2d190e08.js",
    "revision": "6ebbedfb2adafc7c1f44679098ad6a17"
  },
  {
    "url": "assets/js/92.4baaeff8.js",
    "revision": "faa9e6dba3822fc6b72700c879fbff6e"
  },
  {
    "url": "assets/js/93.4f3ff481.js",
    "revision": "11de9a8e9156bffc8a48ab1ccdf44d97"
  },
  {
    "url": "assets/js/94.cf7fc458.js",
    "revision": "4713809c5e18ca468d06db2152d7073c"
  },
  {
    "url": "assets/js/95.342a9060.js",
    "revision": "46b095b8a7651dd3d7bb538522bdcf22"
  },
  {
    "url": "assets/js/96.54005ed6.js",
    "revision": "42e946f5a002829b944c72cd1b82ef69"
  },
  {
    "url": "assets/js/97.e7e51683.js",
    "revision": "e5a56b6284afdef2c7b124beef4094b0"
  },
  {
    "url": "assets/js/98.f8936035.js",
    "revision": "61da7c52f872d7cf0cfdc4d0f9967f80"
  },
  {
    "url": "assets/js/99.e148b959.js",
    "revision": "4f1239351b620cdc2ca8691f8ee8670e"
  },
  {
    "url": "assets/js/app.57e9bd31.js",
    "revision": "ff868d26f14b63a915eafaee62b4ca66"
  },
  {
    "url": "assets/js/vendors~docsearch.c8a17ad9.js",
    "revision": "64f81d34919fe1babcac6807545a3642"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "b2749f18d2a7ce69404a2b8049e166cd"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "ca559d70b2b7038360db1f43eb1abeb2"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "2fbeb6e7c2e572618e3f506b00f25cbc"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "03e50c3ed98c3ad59990c331e43c4355"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "3212e7e5f29a3f610c6978f04e160480"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "582be89b0ae107ec583b0e69d0b4ed91"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "75b8f229c0f607222a2b8eeaf2a0b456"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "1f98f7c0a3c9e38739f60c0528d84b31"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "f8283e0bae545a4bbf95f54a2d37d421"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "ebbdac2b4a8645556b06c3b224d0f4ca"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "71339e85ad3e8ae29f54025a845f05be"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "8e895ad4b4b665e96788362580172356"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "05eb08ec6868a2ebf46b5b5d151d992a"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "097d070ed35885a0cf25248c82845d44"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "657ce75fcc1b03108f6daa24ef927097"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "422d2e26d6fb1792bb908aeb7edaebf3"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "fa414a62f411942e43db05bab7b6e2cc"
  },
  {
    "url": "impressum.html",
    "revision": "4ec0f94c85c13caab693647952ac8e95"
  },
  {
    "url": "index.html",
    "revision": "fd5f778fdcb1e869426b6f5a9fe5e86a"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "27a7556c8440bba2b2d5633919257fe3"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "d7b65eda574e3468c7a041c72e4567d8"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "8a92bd65819ad131569c887478e5a123"
  },
  {
    "url": "Projekte/bestfan/HB-UNI-Sen-CO2-STM32.html",
    "revision": "7108b71f6a833f08643af3f2f5fe897c"
  },
  {
    "url": "Projekte/cactus-online/HM-Sys-sRP-Pl.html",
    "revision": "dd65cfb0044dd4e0169294665a4b5e8a"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "fa8df8b238afad67305bdef73885a526"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "0ce3e293d67fbba98406ec6ff824e839"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "b0ed68660ad036c0c44e5a82d1d593f3"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "50a89d285e07c6809d26491c615f0d2a"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "3299c2d14fbb2ecb220fd0b0fbd8894c"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "c904223a15b9d08ce6972bb31553ceeb"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "c4b95cc2071cb2318ac573104c53c264"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "69c106519c2b9090d0a99ab92abe71e6"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "621b386b5d9eb946f41f275f8a96dd73"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "cb7b5c5904900d3e5f3b6357d917b0b9"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "4019c180f043b8b9bf6b282d75de0721"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "e0ac1ab49153f3cd3f3baeec5100c5a6"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "1b1aeddd05c342683828f95048d1e6bc"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "b8fd0f8a2b1b1c4d8c9679901e4cfc3a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "b17f36f4691093e441190baa950e6a6f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "c8ef6393e2a2ba2fd600aa9d8c466e7f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "19d8b74e87d13e4c2e431894a2180d96"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "4b9a5f4713a04cdaca003d2681e16eba"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "e4a5e4646e39823099a80d9da31f8e8b"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "5a6f2e1558ed77b1ae553e45ddd5af0b"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "7058e983eb395715c9d85111cb8381f0"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "9f2438bc2bcea7e185235e66b534d646"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "c5a9c02187c0f06ba4a0558b985516e4"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "4b72999988bc9ceba98a52c8b1a07254"
  },
  {
    "url": "Projekte/index.html",
    "revision": "d4909f7f89a81bf83dc46fa9492ea674"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "b815f4c804950e7d51f66c82ac3caf59"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "9927b112754e71d964e1969efcf623e2"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "7f16170fa9c6e670a9156c14c940ebfd"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "47c05c405c7ab60eab26a2288523f937"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "62636900eab694dc4b5b81ec1b8575e3"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "af8b7c74bdfb928920f7935e03155fe0"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "cd4c9a250a18577efe1675fe37eeb0f4"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "2e2adeba00872796bc8966063cf49f1d"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "8528e15739c9af412189494bf19e4bd0"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "70cbfeddc347eb1dd48dab78e058d66b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "0588998ef890d516979a4092badd2831"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "7ea60f63305f2b19a36658fbf60eef68"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "c46882164c7b60046e2b32edab856578"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "fc12d3892b3c3ea62032c21d74d6b0ed"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "6ed1f6d712afee99272f7048e5d24679"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "329b54dd0dba7211f7d63f84ce1f3f9b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "d0abe961f8f2cb308e5f6ec58c001502"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "67a6aedfe2e6e68b035c0883f4eb25e6"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "d73f6e8ca2ade7908e515d3654df7f49"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "e4baf857ebd09c1530b68f4567bb45e1"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "56654fc8e353e85b746073f2cd04317b"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "dac5eeb3f5d8b9b4de105a464f439c32"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "98ee6dfa1f4435fb5f7e2fbfe3705ba7"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "a95bc03e3218657259c0b5f3acbbce03"
  },
  {
    "url": "Projekte/JurgenO/GasZaehler.html",
    "revision": "937aa1f2aa91f8876863801b9b6c3ee1"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "c632b177a65e7522a45c9d04fcbb5892"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "eccf85862bab94f5591ce6e3626e0532"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "69c66db3b7ed9f0710b3839f2fa8715a"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "17b857779d2165414a4ddf88ac6ecbbe"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "67911e42bb0120a8192a26f61f75e089"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "f048ed0a95f16404315c19c3d56dc3dd"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "fdeb7ddc629b30ccf3dffe7c6723fc80"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "fb23304d406ae84393ee36217aa9ab6e"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "264d5452f8c4e50afda6ba6e0cdd4874"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "160ab83bb4905995d962348b7a33be96"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "e93c55aa2b6169f3a0020e10b959fc4e"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "41e19dcc682bb9ca24625dd03dbb9226"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "f877efefbdc885429191e0d883e38c9e"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "68b05a4bbf3103c30aecd04e205218cb"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "662103ffe0fdb5e101dcce121081d439"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "cb1cafd981c70b833b328c2446669c8b"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "fbcd77e90e28d8bb91c4ea5852232da3"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "b62656fc9f1ad90c20cabaa359f573c8"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "05825e4a661cbd6510cad68602fee7b1"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "4beaa7fd7fc7731012efbce61d2c469b"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "353f139e3bb71f14b663a9412fac3739"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "7a81111d686074787037c9373df178b0"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "3976048119684e820c1e1100fff3f2d6"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "e4d43e5792aa681fcfcd92ede876fff9"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "1757721ef866c2c312f5a58fd8064c80"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "2043c0e04603cc87cb30945413db24ae"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "8f6ea8f63c6cd76ede53856dbbba52f5"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "208681686707a2a63c0961e23d922717"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "120f81b600d77540cc854b741c001e1f"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "0f5c2474b55626ae82e48843f24b1e20"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "6ecb2cc3304ee95ad3768ed4f4e543cd"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "57df26ab58bbe67262940247854df663"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "fbd3e6d3666bd823c2196865cc77f50f"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "aeed7ca8a41726d322260fcd62c7f7d9"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "10920f4cd3ab3454960ef87b27fe646f"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "efb418fcf3b9fd4c0a81d389ff18046e"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "ec2cb098ed213d834e8a35d362eb5291"
  },
  {
    "url": "rftypes/index.html",
    "revision": "a21545d82719564bb9dfbc3e3a04ce7f"
  },
  {
    "url": "Sketche/index.html",
    "revision": "0040f2ba2e32d38b905479f42f314056"
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
