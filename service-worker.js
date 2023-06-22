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
    "revision": "a2ed1254845ea4cd9d56da6254788ddd"
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
    "url": "assets/img/HB-CDL-6-Pinpad.347cd901.png",
    "revision": "347cd90167780d2087a0199b6f159a9c"
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
    "url": "assets/img/hm-powermeter-lcd.5499dbf5.jpg",
    "revision": "5499dbf5553af6c6c60114db2b970761"
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
    "url": "assets/img/SolarSensorTag.36b8db69.jpg",
    "revision": "36b8db697c65a9c4926736816e3ea699"
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
    "url": "assets/js/1.171274f7.js",
    "revision": "23293057039d3db873db0433f041abab"
  },
  {
    "url": "assets/js/10.a218bec5.js",
    "revision": "2862411c336d65f88bb24ca51995d971"
  },
  {
    "url": "assets/js/100.a8e28e13.js",
    "revision": "2b0be6b8d49359de436d932193522151"
  },
  {
    "url": "assets/js/101.b820b1fe.js",
    "revision": "7aa15f6e8c18fd8e8e081601dfa3056e"
  },
  {
    "url": "assets/js/102.f1ddcc47.js",
    "revision": "fe0a3270f7e4d1e23b9bc88395505161"
  },
  {
    "url": "assets/js/103.7831ce35.js",
    "revision": "c6b357e2dbaa8a5cc5fd0186dd1a6597"
  },
  {
    "url": "assets/js/104.3f533bc8.js",
    "revision": "7ae6b8926acc9d0ed5b256a0de63557c"
  },
  {
    "url": "assets/js/105.442f803c.js",
    "revision": "fe0dfe39124caed6c13ce32137cf9dcc"
  },
  {
    "url": "assets/js/106.44760a30.js",
    "revision": "0f58730c631dd8247f735e6c0765b984"
  },
  {
    "url": "assets/js/107.dab47982.js",
    "revision": "7709cdf93ae46b6f8c1c9edf3236bdb6"
  },
  {
    "url": "assets/js/108.c9137d54.js",
    "revision": "d38971760ce4ed058496edd98ff2b664"
  },
  {
    "url": "assets/js/109.2cdeed14.js",
    "revision": "5bd7f042620c6352783b7f2df4326409"
  },
  {
    "url": "assets/js/11.39029a8e.js",
    "revision": "3a0c5ea0178704ed6b82a8b4bd307b44"
  },
  {
    "url": "assets/js/110.d63e264b.js",
    "revision": "e887922f02f11cb9e05608c84a2c8210"
  },
  {
    "url": "assets/js/111.971ffae2.js",
    "revision": "5d44443c696cfc0cf1bb5fdd682ee685"
  },
  {
    "url": "assets/js/112.2ba96dec.js",
    "revision": "55d744c3c49678b71240668aa1e5ff41"
  },
  {
    "url": "assets/js/113.9fc2ee12.js",
    "revision": "49155eb7d1dad9fec2c875a685440479"
  },
  {
    "url": "assets/js/114.c02755a9.js",
    "revision": "0613fccc5bfbcfd31406ee1699978fd8"
  },
  {
    "url": "assets/js/115.0ecc95c8.js",
    "revision": "7546e87c6e270f307d3082970cefc5d9"
  },
  {
    "url": "assets/js/116.caf32e37.js",
    "revision": "dd0dc28caf0bab3923043e4fafff002f"
  },
  {
    "url": "assets/js/117.fb838444.js",
    "revision": "117da36bdfcb31b5be9c4670e0f2cb45"
  },
  {
    "url": "assets/js/118.4682e2f5.js",
    "revision": "c7450f603faa462f3ae4847c8a37508e"
  },
  {
    "url": "assets/js/119.8e73dfa1.js",
    "revision": "f5ef2c4a6d103a1539d23422b03bcd42"
  },
  {
    "url": "assets/js/12.2f047421.js",
    "revision": "51ce6f4c6e3c3e8425210183f33970e7"
  },
  {
    "url": "assets/js/120.fae3fec4.js",
    "revision": "08a371e7d946934b365d35114838e5d5"
  },
  {
    "url": "assets/js/121.c3648026.js",
    "revision": "734f96e650b4e77701a57cf427bf99c8"
  },
  {
    "url": "assets/js/122.afea1982.js",
    "revision": "65e1531ab5285792b5e6b46fc95f8f55"
  },
  {
    "url": "assets/js/123.40a8a6cd.js",
    "revision": "bb0f89dde07f1ebd6f4cd3cea2525a6f"
  },
  {
    "url": "assets/js/124.64bdfe44.js",
    "revision": "2836a70a821144628664f33377e3527f"
  },
  {
    "url": "assets/js/125.e71b3d48.js",
    "revision": "f4ee20f097b2debc6471cefb183f888e"
  },
  {
    "url": "assets/js/126.53ecfec4.js",
    "revision": "1a6aa4fa6b15964b85cb863f4d3c9770"
  },
  {
    "url": "assets/js/127.a43abfa0.js",
    "revision": "acfa9d0d1986f08928836ad45b4d7df5"
  },
  {
    "url": "assets/js/13.5058bf60.js",
    "revision": "8eec13cf7c87b5a2c9d537b0a2fc81d9"
  },
  {
    "url": "assets/js/14.15fa0e4d.js",
    "revision": "3e0b49e5f11f9ab01797120f90641085"
  },
  {
    "url": "assets/js/15.63fcdb4e.js",
    "revision": "c0ef47fcd342cb912397d13d6978c912"
  },
  {
    "url": "assets/js/16.43e4b202.js",
    "revision": "2afaf47407cab2a224804d1281bda69d"
  },
  {
    "url": "assets/js/17.4abadf4d.js",
    "revision": "281c476e7429757aa9aaea9403f0c441"
  },
  {
    "url": "assets/js/18.ee4b0af9.js",
    "revision": "1e5224a5ca79c812edd83c84dd3b4405"
  },
  {
    "url": "assets/js/19.c30ed8f4.js",
    "revision": "78197f85de01f0a87662f8a274825d2b"
  },
  {
    "url": "assets/js/20.4ea17c38.js",
    "revision": "3bca7942b4572be57fed73a653c1bcd4"
  },
  {
    "url": "assets/js/21.23f1ce0d.js",
    "revision": "1e3f43f0f6664b4e99c37633c345cc91"
  },
  {
    "url": "assets/js/22.b203003f.js",
    "revision": "c112658e5c9c7c16c1970a6c4b9f7845"
  },
  {
    "url": "assets/js/23.efb15493.js",
    "revision": "e677b109e0d5d55a1592285049ad157c"
  },
  {
    "url": "assets/js/24.3c1132e0.js",
    "revision": "2c591ee6cd4c985d644ac3d71d540c74"
  },
  {
    "url": "assets/js/25.f37fe3e6.js",
    "revision": "1f586fc4b9faa9cc4c20e5aafbcd98bc"
  },
  {
    "url": "assets/js/26.a5817a82.js",
    "revision": "27a05b6b3f11788081b0e62f9440b372"
  },
  {
    "url": "assets/js/27.4ad8872e.js",
    "revision": "da9b36a4873e413ea0bb36cc8546e6f5"
  },
  {
    "url": "assets/js/28.1629deab.js",
    "revision": "d0cd0280c85b93b1bbf138a44f80b949"
  },
  {
    "url": "assets/js/29.2eb31d74.js",
    "revision": "f5850a30fc357dd1e0a7b3a76c8852da"
  },
  {
    "url": "assets/js/30.6f026b3a.js",
    "revision": "f0c0e64c06b7c19dd60c703cf5536d1e"
  },
  {
    "url": "assets/js/31.8c9881a7.js",
    "revision": "b2d2cdd9bb26a41bf27a6174d963ef5f"
  },
  {
    "url": "assets/js/32.9c4fd707.js",
    "revision": "c51dc35faa9b956f12273a8f6279b3b1"
  },
  {
    "url": "assets/js/33.84e7d016.js",
    "revision": "e3d05093a9b0dd12e0b403a41976b8bf"
  },
  {
    "url": "assets/js/34.1ecdac36.js",
    "revision": "66071f5985541b7c357566524a5453f0"
  },
  {
    "url": "assets/js/35.81dbb950.js",
    "revision": "7f6737a96e234a3c82f53270944185da"
  },
  {
    "url": "assets/js/36.9311276b.js",
    "revision": "3e8b392a4584e882b7df7d95eac48fa5"
  },
  {
    "url": "assets/js/37.12da816a.js",
    "revision": "1bc96e66094281e045d8c3c9b2785497"
  },
  {
    "url": "assets/js/38.398fc272.js",
    "revision": "b53dcad220e2cc73c9ce022b93bd4bb4"
  },
  {
    "url": "assets/js/39.d708c18b.js",
    "revision": "c0937e44faa7283d94e2489a0a5a3806"
  },
  {
    "url": "assets/js/4.28161c73.js",
    "revision": "925b2237c7d99f76562eb19558107847"
  },
  {
    "url": "assets/js/40.45cf7f3c.js",
    "revision": "7b4c303f51d27fba979b4a525cb14d62"
  },
  {
    "url": "assets/js/41.5405e8d7.js",
    "revision": "a0c8edb423706e78c55704c87e193e09"
  },
  {
    "url": "assets/js/42.f4612c9a.js",
    "revision": "fcdb885ac8ef91843e73f7afb2159ddd"
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
    "url": "assets/js/45.5f6fdaa3.js",
    "revision": "d1bf83749077cfdc5a52534fabff94df"
  },
  {
    "url": "assets/js/46.0936bce6.js",
    "revision": "65b6681afa95f365c18ce55490ddd02e"
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
    "url": "assets/js/5.851652e5.js",
    "revision": "dcd81c3caffbc1bf1fce9b6efcf10204"
  },
  {
    "url": "assets/js/50.6d5ee11c.js",
    "revision": "7592765607f1a668ae870d30d707a9f1"
  },
  {
    "url": "assets/js/51.dd620876.js",
    "revision": "2feab3a9af8cbe0abf400368c96d0009"
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
    "url": "assets/js/6.6fd7daed.js",
    "revision": "2641cf973fb7ef143b4ee681f7746de0"
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
    "url": "assets/js/7.ba7a1bbb.js",
    "revision": "aef9b079e2b132e452232ec838f4e969"
  },
  {
    "url": "assets/js/70.94b79b06.js",
    "revision": "f2ce0f50e66a396897e16caaf649c38f"
  },
  {
    "url": "assets/js/71.aeee49e7.js",
    "revision": "e8c50ded73132493232ba7d4542c21e1"
  },
  {
    "url": "assets/js/72.f0bb8030.js",
    "revision": "2a3905d3de85b356e6c4b282dfd29335"
  },
  {
    "url": "assets/js/73.92cdc425.js",
    "revision": "a9c70db9b6671b69db6f9d0143d88ad0"
  },
  {
    "url": "assets/js/74.9ffc8ef1.js",
    "revision": "94a0cefac17d0eaee96abcadbc2e664f"
  },
  {
    "url": "assets/js/75.72b72024.js",
    "revision": "45338be50ea4add93499da0325e2803d"
  },
  {
    "url": "assets/js/76.d3fdd6fe.js",
    "revision": "b7a7d776f4d34ecc36c3104dbffb5524"
  },
  {
    "url": "assets/js/77.098d8a9e.js",
    "revision": "fb4c3759dada1d896b9e1a37c3f6877a"
  },
  {
    "url": "assets/js/78.372b2478.js",
    "revision": "31a35108eb378b36adcba9e55186861d"
  },
  {
    "url": "assets/js/79.ba977004.js",
    "revision": "5c4c89822e7c16e56ab77608cbf9626a"
  },
  {
    "url": "assets/js/8.ffb27d6a.js",
    "revision": "02bba07ef6ea7e24194343a92ac61179"
  },
  {
    "url": "assets/js/80.0cf799d9.js",
    "revision": "0757f980e796252578b676f34f1e041b"
  },
  {
    "url": "assets/js/81.d606d093.js",
    "revision": "7ca3333f2abc122c73225e4e8bacfcca"
  },
  {
    "url": "assets/js/82.ffd6718e.js",
    "revision": "e9e4532738a768faebfbab447bc6ec66"
  },
  {
    "url": "assets/js/83.2e5e0529.js",
    "revision": "6ed1c6e57579b4ae3c670089e86d6e18"
  },
  {
    "url": "assets/js/84.59796032.js",
    "revision": "0c6e2002e34369dccd6888ae5e6556a4"
  },
  {
    "url": "assets/js/85.ad1369b8.js",
    "revision": "bb5625feb90930193e4d3e41f491875e"
  },
  {
    "url": "assets/js/86.8855024f.js",
    "revision": "f1abc02727718e285ee2171ce3935b5e"
  },
  {
    "url": "assets/js/87.b7e6e38e.js",
    "revision": "5df7aa2a83f21bd163ceffd8eafb562b"
  },
  {
    "url": "assets/js/88.911dfdc3.js",
    "revision": "fbecdf37d84d631bb634c04155728974"
  },
  {
    "url": "assets/js/89.8c6fcdee.js",
    "revision": "ae30195b3b44aaf7d262742b193419fd"
  },
  {
    "url": "assets/js/9.10a7db35.js",
    "revision": "f0664a5423983deddc11f2ec4871070d"
  },
  {
    "url": "assets/js/90.2ef11bd2.js",
    "revision": "0fba0c3bc0ae7acb45048309c9ea840c"
  },
  {
    "url": "assets/js/91.43b53b34.js",
    "revision": "c95bf8e4d2fdc8a91f7d8882c406a941"
  },
  {
    "url": "assets/js/92.0618070e.js",
    "revision": "b7db4dc958abcb90668e6d978d837a38"
  },
  {
    "url": "assets/js/93.417bb462.js",
    "revision": "69fe0eef443530eafbf1dc127ddcf119"
  },
  {
    "url": "assets/js/94.ae80872f.js",
    "revision": "b793dd76fa089d566133d70c802ccce1"
  },
  {
    "url": "assets/js/95.32f0c9ae.js",
    "revision": "98c62fee6e7591aa21d8bf04b723cb62"
  },
  {
    "url": "assets/js/96.4fb71398.js",
    "revision": "11df65b42adbece89a27d07256b5c3fc"
  },
  {
    "url": "assets/js/97.e27f4983.js",
    "revision": "9b9da758e7920689ffe3766aa19d9875"
  },
  {
    "url": "assets/js/98.861e7f61.js",
    "revision": "dc4deef439127880f0d7a20aa77bb4fa"
  },
  {
    "url": "assets/js/99.330a0fa0.js",
    "revision": "c721a12ad80e5e5d4de75265e9a55136"
  },
  {
    "url": "assets/js/app.50a458ff.js",
    "revision": "1d72635b09f33150b5509ae5799405fa"
  },
  {
    "url": "assets/js/vendors~docsearch.a9064625.js",
    "revision": "077eacbe8fe536303c07589e40ddcdfd"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "875facf138a9d7030bf3d76921216ef7"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "97397daf281090973c8bd9b8525710ae"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "1f24fb7526d02a2a36eb2defe2eb2c1c"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "df580ffe8e87b63dbf416e48af047ddf"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "564c2adee28f34727c57768bcb24adc4"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "39b8dd72e8916134a68635e30ba85247"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "ea9a0cfb5048fd4ee7e5da5e955b06b3"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "d0d636f99265613bb8c3fb60356d7520"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "8547b19d6b1e6c4bf30386d625b65e0b"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "dea66a7f3bc945f34606dba22e84f28b"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "91482650e207869249394ec55f280f7a"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "31cf7c8f2fcbf05c7611f01a44e8322b"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "b5b5db97feb76e96c21b5222bc547cbf"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "53938dde1fd95a1537a2b7edc5886ea3"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "cd77a9f35bdeee479350478b120883e7"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "23bb7fffc2a337865d160bd0fbba67f4"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "11233e276fa19b329806c040ae725370"
  },
  {
    "url": "impressum.html",
    "revision": "0f3be3d20967a379148534ebd6990924"
  },
  {
    "url": "index.html",
    "revision": "38afb0f177bdb71cbb28eb88e1df45af"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "1b5ef400dcfb3dce0017649e9986c0ef"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "0a4a5450252d137988a0310bb4a48fa5"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "cefa9ff268c90ada8ed2cfefde3b7a6e"
  },
  {
    "url": "Projekte/bestfan/HB-UNI-Sen-CO2-STM32.html",
    "revision": "c697cf9c5c083bf0155d89dcff54e16a"
  },
  {
    "url": "Projekte/cactus-online/HM-Sys-sRP-Pl.html",
    "revision": "6a95061c4463dbfa13315a0adeb02905"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "5ce52e771e22a88c0b5983661afef64d"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "68ea4e9084ab3d118ad87da49efd62ef"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "540ca078f289e41e2d43a8d8c5dbd3ff"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "4caabe5c41360b6e0ecea33c0aa6e8b8"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "03932eefe6c36182df65c47a6a7defd4"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "176d697b4b0fa4208f1c66e56bc5eac3"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "655f9790431caf60065ac504f7f96a68"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "dc862ea838d7783863353bbabe0b2479"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "5cccf505dbd692fd06ef77caec2e7ad0"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "9c09239797861cce6df250882f7efb79"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "b7c0e187f73735535124b8db14f9d8a1"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "04dfb608e09f74f461272c64c936a625"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "e8f66db9a45121b0a41ff4356071e2b6"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "5d2a2a03395da93864c77033618eec3f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "4063ef1a6e80b9075091a58df9a229aa"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "07b0129fc97fee1455d792b33e65279d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "23b0c46a1d2c234144bd21cbedd85724"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "2c97640d694bfbd15ad75c6b54f83067"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "60d0443abce85c223ed45cf7a5fb4733"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "47309f10775dec6b45e35a40a6a70066"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "532336fc61513b51e9a314f0a1de82e5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "178cf20be5953ec54ffc49408faed268"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "4be798fda683be6c9f71a7adb7597704"
  },
  {
    "url": "Projekte/harald/hm-powermeter-lcd.html",
    "revision": "9d1d74f9bbc65c8e6506d9045e7df7b2"
  },
  {
    "url": "Projekte/harald/SolarSensorTag.html",
    "revision": "bd84b70e16f0b6086ae73cb01b3b17d3"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "4c4f3163c82dd9973ac2b3967084fc1b"
  },
  {
    "url": "Projekte/index.html",
    "revision": "433edb5e35ef8dbe27a858fe0b6d2f60"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "3e5ef4d9f88438e85c6eeff20f421b3e"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "07f3f65d2afc1d3b3f4d8203aaf49ea1"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "784d702cd42707550c6155576db73975"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "53d18db5cc276252a796ddd45989819c"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "8263eaf726b79ba03364a53856f82558"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "b7bb788c895bbcbf23ac3dc15bf7d9a8"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "11568e4aadab686ddea80819910eecc7"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "746c58883ecb18250fdca8781f36910b"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "15be3e6bfc43a1a41911e114de2aecc9"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "8570b47df27630d66ac181dc2f40579c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "db889cd0db99e953d2cad9bf0ea422bc"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "65453d8703af5b52d22f6969ae93a731"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "b72f277d0b98144ba25cb689e1f40c3f"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "b789a9d8f8e19777ce0ebac068dc9fc9"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "2808cadb7ad24143c28b9eceadc291d7"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "c89952eaad7e13899ef4073d74ba7bda"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "93449238994ebb815aea522e5ac8a02c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "012d44a24c99337da3087126534d380f"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "e7d9768bf83bb19265b6ea620408eec0"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "60ca25acf454aec0ddf3daeb1332bb5b"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "90e9e8e43f6fd5972c2c097a1ca99ed7"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "5a67ddd5590d850b2bf65ef97ca90d87"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "72fbb464b9ebd4c6b4fbe2aa08b539be"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "120184d9a6f497b126cbf250882f2d95"
  },
  {
    "url": "Projekte/JurgenO/GasZaehler.html",
    "revision": "2b46762f73480973bc07b5fe14b1ef52"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "097ca0ddc7dfbc736ad08174326ce0c8"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "193dcadc30a3b9b91a1dbe7fe49c1988"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "5e3d7d749c6c8d612cfda2fbd1a8cfc2"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "1ed4ed1d428beb5f13a136b28dea7dd9"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "0539bb16e3cc56a9ba2bd69614e76a86"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "c536fa6f39e086a5f401435064584f15"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "b1918f0e892880e9a08de242ae90f76e"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "d143911a90fcd2d844d4ebfbc924c43b"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "3de08038ed17dc2d470241ad2f6f9f14"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "d149c934f434ec1d36e707b770373abe"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "69645523d62dde4dcd3d9044f41df799"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "06e0c35da53e5881c6e8b9e1257809e8"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "e30427561372754429bb3db30df3a08c"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "f3e7e91e4d6b56ac61224ce066c1f9f6"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "30d05914f9ba3b4e76d4919d78d0778c"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "e40f143f445a2ed317d767733de33d56"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "8bbb88605b512895bbc4e0bcf2f20da7"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "3d538ab859793ab2d07a72d5e22f94e9"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "a671a8b1ca6e1a8d881caecfa6b4a1a5"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "66002c1f82ca32696f6105af8a635d94"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "f1cdd5bbfab26c7578fae54e15a47bd4"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "edeec8f0ef012f488b2ce18e8bab2c68"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "02f862c0bd7b07992f9bdb0f846d0119"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "e52d197e134ff2792bd8d4d24088c4a9"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "7bf5dd654b1e83d4a3e91ffa03024318"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "854fe02f97d6d39795baf6cedf810612"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "a902fd4b0ef48b61d939bd702e9b5582"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "168d5ad7b030574d67175358ad12d6da"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "fb7331c1b520c83d5d46d0ca0ff34ee0"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "5a5c21c71fb1b52d218a927f7bea291e"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "d7acb247ffbf6dba2bcd95d004a8e010"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "4875fa7b30b5fddbcf60770e79c98f9b"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6-Pinpad.html",
    "revision": "0442bd0b61c8745d4935bcee27768dfc"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "437efa355a5f3feead90f735bad2669c"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "493c512d98cafa0342619325342e609f"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "fb3b0f9aca9b4f9c275268a990c53b88"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "98a5ce848a33cbd1934bf4dbc4c86a60"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "b055536ee3d88abd6f30bfe1bfceac5c"
  },
  {
    "url": "rftypes/index.html",
    "revision": "958ff017bc0ab6afaf5b000728df06cb"
  },
  {
    "url": "Sketche/index.html",
    "revision": "62a62d2610bd48d5cc51d15a2d215ae3"
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
