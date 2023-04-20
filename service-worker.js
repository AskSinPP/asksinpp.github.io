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
    "revision": "093a4f66a357d77783e4f625393cae89"
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
    "url": "assets/js/124.0e24ea9d.js",
    "revision": "16803076b4062b794e716670d10e6ca8"
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
    "url": "assets/js/22.35e238ba.js",
    "revision": "0123ad33cdde588ad668fb70bbe91743"
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
    "url": "assets/js/27.8622789f.js",
    "revision": "c986e1077ed8e9b626c4f513a631646a"
  },
  {
    "url": "assets/js/28.1629deab.js",
    "revision": "d0cd0280c85b93b1bbf138a44f80b949"
  },
  {
    "url": "assets/js/29.dabbf603.js",
    "revision": "1cacf7cdb6722cbe041c9771de247d77"
  },
  {
    "url": "assets/js/30.6f026b3a.js",
    "revision": "f0c0e64c06b7c19dd60c703cf5536d1e"
  },
  {
    "url": "assets/js/31.19a3d3bd.js",
    "revision": "cb53bb3dabec2636ef7ed3cfdb485054"
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
    "url": "assets/js/34.bf859d9d.js",
    "revision": "6b53068cac304a2cb61eb1331fec6ca8"
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
    "url": "assets/js/4.f5d3b2f8.js",
    "revision": "58a1b738457dce92ba468ec7702f3b2f"
  },
  {
    "url": "assets/js/40.45cf7f3c.js",
    "revision": "7b4c303f51d27fba979b4a525cb14d62"
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
    "url": "assets/js/5.851652e5.js",
    "revision": "dcd81c3caffbc1bf1fce9b6efcf10204"
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
    "url": "assets/js/8.d994d2de.js",
    "revision": "bef4d5316448a9e885ce0a10df3f6ecd"
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
    "url": "assets/js/app.437c6084.js",
    "revision": "6ad7117846d1be61d442e1caf6f245fa"
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
    "revision": "b138e1721d171772004fcd1bf5e307b6"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "2845f46a7c2b69860afef7bdabcd74b6"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "1d95536477c847098c2935e15fd9a5b6"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "e30efb33928aa70641d38090a706fa69"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "c976b4c329a4febb1360fd67d5384445"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "36da685d93e94ca86d8c549fe7ad88e5"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "3dd8f2404342cece10f0db65bce4ec38"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "7a515e82cbaccb8bf40e89b1a1c9d0a5"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "eefe6154f81dfed9d369b05ea2d54ab5"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "8c29472f4d8695c6fba9efe9ffbb7a6a"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "52a33b832692c5b20934021586625987"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "0a86f00db50fc3ca4d22633352df86cb"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "aa9e2a7f6b8de5d48aad3ee55a697c1a"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "d0f50e07441c0777c918a778391e53c4"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "197d9c5966b077d0ac6d94796b62ca46"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "70134f34ba835e4ab84fb0c3b37a2265"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "36f7210a70ff81400721afb5add28475"
  },
  {
    "url": "impressum.html",
    "revision": "bff34fcb140566eb044d9461ecbaf05d"
  },
  {
    "url": "index.html",
    "revision": "0bf8fbaf892d55c804b34a26b724c36d"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "92c72f461e2a0ff0753f8c3a3ed1423b"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "eb2e01fa7847689627400863d61eb4d0"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "68f445de85e427c360f633af63b3457d"
  },
  {
    "url": "Projekte/bestfan/HB-UNI-Sen-CO2-STM32.html",
    "revision": "49530a448fb8a1fdf1a436521d892845"
  },
  {
    "url": "Projekte/cactus-online/HM-Sys-sRP-Pl.html",
    "revision": "33e879d32b2ff05ef68e6566c6dbaf14"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "fbad9cf63e34fe5b2241121e220cf4c6"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "d99bfc08cc232eeac4d9e2dd37bae8a8"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "6e0b0b0c5d42002b7c3b539ce20cfdbc"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "578b75272233e95e2bb94b6f3105f643"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "ce1a7d334e951b29b01107038e9dc761"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "59f6da6fca46877d4cd87653bfbeea68"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "93604a1229bd98a993f1368dd917c55c"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "1f02bc3a0f893106f4982f918f885e51"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "8aca3b670db1deb16f03b44a3e3b3498"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "710b2927da29fc502caea8fb53ccefb6"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "5110cf4fec1f58d5692447e1fc5f0e51"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "85714cd1a284271295dca1237e93ad18"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "c7c9837b8899d047ef584900655479de"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "d2ff1245b1e481a40987db2c63d8cf26"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "20d8a966a333ea85404584ed44afd1f3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "1b5175abd404a23b88e5fac15cd0427e"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "a95ddb9a69ef96121e90aded04fa941a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "3d89e92276ace6046e8cb59033380f97"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "9f61fa02970d4a6ff417bdc99989df5c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "050c2a28f2580e5e9f50d1a23e6573e5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "6a212dfbade82d10becf9a286e033873"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "c3d90eee821ee8b4b6ce9999c8c9267c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "b7c0a62ff23277b11f9339394889ed35"
  },
  {
    "url": "Projekte/harald/hm-powermeter-lcd.html",
    "revision": "1f1560ea60344f8013cbfd72ea9c96ab"
  },
  {
    "url": "Projekte/harald/SolarSensorTag.html",
    "revision": "25884482c82506b6f7d7c5c21a4b26e4"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "9acaedb5450c1b8ecb8f6761b1001807"
  },
  {
    "url": "Projekte/index.html",
    "revision": "aa3ca285376e2cf8b9c6fe3bae3e8862"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "a55cbd00e6faa4e94947555fea2f368b"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "3b288609970c005c632fe6f7d211b20b"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "cb7954c1b6e876614eb9b85957069b3e"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "09f662efbd707d54ea22255fda4216d1"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "2e9c8fe1da318c8e0953979a94f33ec5"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "24468b6cee07ec372e71e626ba61b480"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "8d06b3ba147d5095ccf9505f7b899c02"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "944b370795952a45eb2d4573f38d98ca"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "a30938edcbd683de944bedbbad357f7b"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "ccef0227e181d4bcc26d64350c5b6eb1"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "7cf8885f9d3327fd56ef08e7f508e10e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "2d12ab5808372cd827cb2b4e96411144"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "54525679e0023a866183b930f757711a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "fdfaf1680b887721dd11c044db40b1b9"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "b8b380e71aa91d027aaedeb91cb834fd"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "aab3f79c5318bdded03dd64822aa2e7a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "0f70e03b39afb7c8ca44bbb4c73acb54"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "d19ce1f9bc678d6ecbce2527622cc19e"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "e398a33b5d1b9e83a9f4c07f62018fcb"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "435d78c02b52cac6868af26cc27f0de0"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "53ed51a8b4e9c4e69970ebe3d5d9deb6"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "05bd8a546d6608cb06eb26c0d40f46b2"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "b8262a34ff637ace5f6371a8008b34b0"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "25e35bc290bde2f77593e2a0773779b7"
  },
  {
    "url": "Projekte/JurgenO/GasZaehler.html",
    "revision": "5ec78ffb4d97a00b0dc7421dfad9763b"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "60f96df0da372b805af2dcf00706cab3"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "2685f1a3f57b7a587d5b6d38b3ac3ce1"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "ad4d96ad532a29fd004d67d00383cbbf"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "5bfbb32bde899896afab6fc930c826ee"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "31c2d5e8728a7372073a8f40520c9db8"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "f4e8c7a1cd775269e0df935500e739cc"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "547e3bc00f04734e4eb01585d0594da5"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "a142ad3bf51e458517cbf7e07e2aa7e1"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "f32bfbbfc56416ad009ccc0e85086bf7"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "9bd4152ca1a98fe78665d5b0304bef2b"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "69c61fac6647aeb488f97d7498474698"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "7224b8e71722a9b45fa808d25a6336a9"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "0e1e80839f3a01e62cebcb1fab1a31e7"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "20468c8a87301b372737c17814ee9f3f"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "91f3220fbf667c4650059a286aa6b47c"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "c5867f89a1a9fdcc5ffff52551d615e8"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "1231b6c4f05d01d067f6565561327c07"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "9db1b96592b534c561b5b12f8d987f42"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "7d16828f52d6202fbd34f080e239becc"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "1a082790426670008c119eef5b03b3c8"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "a1a65f881004f605e45655a3161fe246"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "71e5f9af6934f1fcbc22e85f42cbd840"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "3c6e381920b6ac8dd7055588d897975c"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "3139b46e45a9686d815eabc39170f23a"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "59686bae87c58d4dde8eb79064f4ef75"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "5ab1a2d075c6167789e9089b638ae94b"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "243ca3f68a9d60c01f3fd25e2539b6af"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "708a7610ea23322d956d5258cbb03548"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "ccda72071c3883721472583e2f5d8a64"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "201ae97f9aa2000bc7f484a832201e13"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "fa4e0f5eb4d3a0295abbeadb7104ecaf"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "100e4ea3459fbcbadc68ac604d7b416f"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6-Pinpad.html",
    "revision": "34533f207a6598a5de35d980c65e57db"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "e37a0b81e01b0f6d5c37c1b397f350c4"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "e5193c88014ae4e5f7f77bba5ffdc069"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "8408fdf08a1c008c3b36bbc804bf4a05"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "bb105bcc907da78ab765d2c0191cdc99"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "7271fb80e8191d433ad9b6778c73caf7"
  },
  {
    "url": "rftypes/index.html",
    "revision": "84c9fd06ac8b39d7a9151d16ef73bd3b"
  },
  {
    "url": "Sketche/index.html",
    "revision": "086a3ea2754abb10a2d5e1b36aab60c1"
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
