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
    "revision": "28151cb9092cd9eeae561b733605a0ad"
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
    "url": "assets/img/HB-UNI-SenAct-4-4-SC_DS.75e3bb6d.jpg",
    "revision": "75e3bb6deaa8f53e418fd5be50035973"
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
    "url": "assets/img/HB-UNI-Sensor1-AQ-BME680_KF_rLF.a0cec9e8.jpg",
    "revision": "a0cec9e8ff8b6b0666f028f97681061a"
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
    "url": "assets/js/1.807db127.js",
    "revision": "3fbb7841880fc92dc726666b34043099"
  },
  {
    "url": "assets/js/10.8d3d2201.js",
    "revision": "80e007cd63c49e0147de64814ba2849d"
  },
  {
    "url": "assets/js/100.64b1845b.js",
    "revision": "1a12c43c7fbfed880f8c8ee7b6df284b"
  },
  {
    "url": "assets/js/101.90410641.js",
    "revision": "454a935207423f80ede09cb2efb350fc"
  },
  {
    "url": "assets/js/102.0495bcae.js",
    "revision": "e3d3e981101b30f4421796235f5d02f1"
  },
  {
    "url": "assets/js/103.85118424.js",
    "revision": "a6957304200a2108babc42c45b49b326"
  },
  {
    "url": "assets/js/104.9a6ca210.js",
    "revision": "14cab7d157a292c4be4d6fbd89a2428f"
  },
  {
    "url": "assets/js/105.67ff466b.js",
    "revision": "41cdab7d06218892e9b76f2ed01f4660"
  },
  {
    "url": "assets/js/106.bbdc5140.js",
    "revision": "bc0de85f9f4779adc66c380ec396a4c7"
  },
  {
    "url": "assets/js/107.f5133545.js",
    "revision": "98eed4f9bbb1090209b04846d712ba59"
  },
  {
    "url": "assets/js/108.cc71f811.js",
    "revision": "c920e618b3918bcdc07ee2bcb899455b"
  },
  {
    "url": "assets/js/109.3ace2a1a.js",
    "revision": "4763775d0eb9ab55d7a7fd4571a76137"
  },
  {
    "url": "assets/js/11.cf922033.js",
    "revision": "c17156327139615399230be67639cd73"
  },
  {
    "url": "assets/js/110.3fcdbde7.js",
    "revision": "6dff4e0bc1ee9b6d38a69eebb61ddb47"
  },
  {
    "url": "assets/js/111.b3c59de0.js",
    "revision": "49abad7b808b4e6ec3b557fd4c3bdb91"
  },
  {
    "url": "assets/js/112.06ac93a2.js",
    "revision": "394048cf8ac832c149375214f9c94db4"
  },
  {
    "url": "assets/js/113.fc7043f6.js",
    "revision": "27e8c01d623d00fb3b5d55c74c349e17"
  },
  {
    "url": "assets/js/114.a9a9d3bf.js",
    "revision": "b1aa342de7332ce97fa502e401b5aace"
  },
  {
    "url": "assets/js/115.2f77c5d4.js",
    "revision": "e2a17abc7f7bd98858251d818d064d35"
  },
  {
    "url": "assets/js/116.d4c0c199.js",
    "revision": "d1d2f3ca3e13116a8b65c54338206c5c"
  },
  {
    "url": "assets/js/117.ac413c9d.js",
    "revision": "65374593562871cce03ff467f4be0d57"
  },
  {
    "url": "assets/js/118.d3edeffe.js",
    "revision": "4a0d3d825f4f33b1770fc3db6c84362e"
  },
  {
    "url": "assets/js/119.d961d4b4.js",
    "revision": "b47a375dc5180827278b6fd2bba21723"
  },
  {
    "url": "assets/js/12.da8eca41.js",
    "revision": "1cb4294d74953b342034779705844d21"
  },
  {
    "url": "assets/js/120.043f881c.js",
    "revision": "fae2dfdac875e57fe47fa60daef2c6eb"
  },
  {
    "url": "assets/js/121.b73319e1.js",
    "revision": "a55a1d84551c007ef7cf86738c160e9c"
  },
  {
    "url": "assets/js/122.6dfe88aa.js",
    "revision": "db518b4a2cda006f5c6cdb3f8517cb40"
  },
  {
    "url": "assets/js/123.9d122078.js",
    "revision": "d741a52fe8c262d12acf1956b4bda020"
  },
  {
    "url": "assets/js/124.4f74839a.js",
    "revision": "44f7d83085029a5dae4ce6b9de3a93f1"
  },
  {
    "url": "assets/js/125.3b42249c.js",
    "revision": "98210e9a257fcedec71e7abcb98d46ea"
  },
  {
    "url": "assets/js/126.495690be.js",
    "revision": "96706e0040ff200715a338d7754bb1ef"
  },
  {
    "url": "assets/js/127.8859d03b.js",
    "revision": "0661d9b0a6694b88e2bcddf56706ffdb"
  },
  {
    "url": "assets/js/128.6fc4eab2.js",
    "revision": "9d559626c33bf325c02647edc2087490"
  },
  {
    "url": "assets/js/129.85cb142c.js",
    "revision": "195002f79599b9c16defb183071876ed"
  },
  {
    "url": "assets/js/13.e1295988.js",
    "revision": "9b33cc6734412a602e3283421a62fed4"
  },
  {
    "url": "assets/js/14.c4f52005.js",
    "revision": "cb67a811af3d3a4834e6e542048e9374"
  },
  {
    "url": "assets/js/15.3c032aab.js",
    "revision": "225ce95c5a118ba2af617f83ddc9f9b4"
  },
  {
    "url": "assets/js/16.3550cdb5.js",
    "revision": "a80c649abd179201a5debb1daa001cf0"
  },
  {
    "url": "assets/js/17.ac768525.js",
    "revision": "cc80d3446e9c9a054213709bb296b440"
  },
  {
    "url": "assets/js/18.f0942e7a.js",
    "revision": "d691204106d6761f111899227fdc02b5"
  },
  {
    "url": "assets/js/19.7018442d.js",
    "revision": "af350ae29ab7b7e5b56f0458d6cc948f"
  },
  {
    "url": "assets/js/20.fb7fa20c.js",
    "revision": "e4c28a40166b92be0adc81d55f5ee287"
  },
  {
    "url": "assets/js/21.d871a2a9.js",
    "revision": "3d801fd4a00cd33284c13437ab5364c7"
  },
  {
    "url": "assets/js/22.cb9eb378.js",
    "revision": "a85f96a2bf07639b7ffd8483152178bc"
  },
  {
    "url": "assets/js/23.11645932.js",
    "revision": "1e230051d46977e3cc916ffc736ca1ea"
  },
  {
    "url": "assets/js/24.73641235.js",
    "revision": "be19f275a86381e05a64df1eaf49fe71"
  },
  {
    "url": "assets/js/25.88a27982.js",
    "revision": "70aec0b26c2f6a564d67b35a917f2e7a"
  },
  {
    "url": "assets/js/26.aeddf54d.js",
    "revision": "328836c4210ae02b9dc0b23a15915ae6"
  },
  {
    "url": "assets/js/27.134b816a.js",
    "revision": "77e02672f4091028201b0e4fbb99b15f"
  },
  {
    "url": "assets/js/28.0a1bd218.js",
    "revision": "299f0a225d3e090b4b2d597509252f4b"
  },
  {
    "url": "assets/js/29.53e3939d.js",
    "revision": "47aa8a21ca91fe1e3070840513761cb6"
  },
  {
    "url": "assets/js/30.57f3c622.js",
    "revision": "7f9006dd36ca26481531607f11a0d323"
  },
  {
    "url": "assets/js/31.b36b6947.js",
    "revision": "09c9aafc4ae66615b832ad2a6d596225"
  },
  {
    "url": "assets/js/32.a292021c.js",
    "revision": "7d40eb4f6b69c5f1a19ef0e463035b48"
  },
  {
    "url": "assets/js/33.1a06be9b.js",
    "revision": "f9da03e4a37db795d38da06236c4f177"
  },
  {
    "url": "assets/js/34.1ecdac36.js",
    "revision": "66071f5985541b7c357566524a5453f0"
  },
  {
    "url": "assets/js/35.29d6a728.js",
    "revision": "0cf42d4cb76134982ddbb2b649551ef2"
  },
  {
    "url": "assets/js/36.a6ebd1cb.js",
    "revision": "f3e3dd97e5ce7db690d5481484865db0"
  },
  {
    "url": "assets/js/37.4135af76.js",
    "revision": "bd0ca2d50ae8bbc0810c1926fb18b583"
  },
  {
    "url": "assets/js/38.8ea5763a.js",
    "revision": "46de7607d153c8f15c8951435e0fd243"
  },
  {
    "url": "assets/js/39.0222d707.js",
    "revision": "9581b232e1fd74d4f4e35645047c0377"
  },
  {
    "url": "assets/js/4.1207d9e7.js",
    "revision": "2bc9a7b963b1facee1b3a27213821059"
  },
  {
    "url": "assets/js/40.3d9d2b36.js",
    "revision": "72166c011f5aa1b8aa84dfcc07252f03"
  },
  {
    "url": "assets/js/41.dffb971d.js",
    "revision": "477ae03f1a2ede0129dd236776232149"
  },
  {
    "url": "assets/js/42.a53428bd.js",
    "revision": "335c467e95216deba4178a610ecf146b"
  },
  {
    "url": "assets/js/43.f1845d9b.js",
    "revision": "1bede44560714b6acfd72fcf0880dc55"
  },
  {
    "url": "assets/js/44.f0194815.js",
    "revision": "d3b494d83d2b21580ca9a09d15afe2d9"
  },
  {
    "url": "assets/js/45.371cc34c.js",
    "revision": "996b125959d708f4789ad4dab6c878c0"
  },
  {
    "url": "assets/js/46.1c6279cc.js",
    "revision": "e18841d731003210624094ffa652d64d"
  },
  {
    "url": "assets/js/47.5014d9c0.js",
    "revision": "a2ce72fe98dee56b210420c981f6fcae"
  },
  {
    "url": "assets/js/48.5d78558b.js",
    "revision": "e2cf58a9aa00253beab88bbf9344de5e"
  },
  {
    "url": "assets/js/49.0d918e91.js",
    "revision": "c22074110ee20cf2e136c3b1ac4d06d1"
  },
  {
    "url": "assets/js/5.c217e159.js",
    "revision": "df371a332dac56e41d5c07b90f06b266"
  },
  {
    "url": "assets/js/50.c40d3c73.js",
    "revision": "2da6e4ebc7fc8f74c0c8b30f1dccb000"
  },
  {
    "url": "assets/js/51.0af333c5.js",
    "revision": "cfdb220d127671883a18e13305759da5"
  },
  {
    "url": "assets/js/52.ae28fe95.js",
    "revision": "8a2a483690ad085f0387e1792b109c61"
  },
  {
    "url": "assets/js/53.b3f9ee4d.js",
    "revision": "f011f56df3bc722d984ae59adf0c10f2"
  },
  {
    "url": "assets/js/54.a619554b.js",
    "revision": "2a1129538d072d8b9de436120faae37a"
  },
  {
    "url": "assets/js/55.8027ded0.js",
    "revision": "b8b811d1697120dbfdd0e81a88858719"
  },
  {
    "url": "assets/js/56.7d46a648.js",
    "revision": "d1e5cff31eb082d5a1439f0f538d7df1"
  },
  {
    "url": "assets/js/57.471f0b25.js",
    "revision": "69e441460916f25601f16b473fd6c5cd"
  },
  {
    "url": "assets/js/58.41c0d340.js",
    "revision": "cd1baa58a26c2742d20d44e068486e51"
  },
  {
    "url": "assets/js/59.1f757b04.js",
    "revision": "17775c738f277bcf55d5b2b41cf8cb0f"
  },
  {
    "url": "assets/js/6.0e5c3fe8.js",
    "revision": "33c46f8ae136fff2136583a1c3815377"
  },
  {
    "url": "assets/js/60.8ac933bf.js",
    "revision": "a6698303e603a88b6c7292b18c1b2672"
  },
  {
    "url": "assets/js/61.bddeb765.js",
    "revision": "98d61666e083d505006db8e5fd1a4c95"
  },
  {
    "url": "assets/js/62.04b8afdb.js",
    "revision": "112b5ddc6c1d8cde5f8f061315cd6d9d"
  },
  {
    "url": "assets/js/63.bf1da28a.js",
    "revision": "c3cbd47d435e90912ba855a51e340b86"
  },
  {
    "url": "assets/js/64.7673823d.js",
    "revision": "c5da8c21aed14e36c0ddcc46f2d89f1b"
  },
  {
    "url": "assets/js/65.a03cb72f.js",
    "revision": "3604ce1a59bf157c98e58d276a57a640"
  },
  {
    "url": "assets/js/66.5bdf2350.js",
    "revision": "018f702bf8dd92288926742286ce36c9"
  },
  {
    "url": "assets/js/67.888852fc.js",
    "revision": "b82b40e30288f75dd85d689e73b5c9a2"
  },
  {
    "url": "assets/js/68.f4a6ff98.js",
    "revision": "da30d8c96771d6382e99437c0859d3fe"
  },
  {
    "url": "assets/js/69.71730c61.js",
    "revision": "a1ffc0573aa58885e732eed3ddfca82f"
  },
  {
    "url": "assets/js/7.46a1f11e.js",
    "revision": "a0bf723011b76bc0779ee3b1230afcae"
  },
  {
    "url": "assets/js/70.59e635ad.js",
    "revision": "59e6ce70f03515284d8803057586f69e"
  },
  {
    "url": "assets/js/71.9a389e03.js",
    "revision": "d065dc3401ae121c5237603723424d7b"
  },
  {
    "url": "assets/js/72.2c25c397.js",
    "revision": "dfd69835c9be8bb3796d63d653519334"
  },
  {
    "url": "assets/js/73.ff6ffa1f.js",
    "revision": "2f7fa4734d48162fc349d9bcb62d5303"
  },
  {
    "url": "assets/js/74.cfdc3a86.js",
    "revision": "05aec0a0c3917fef4655c6904fe9f049"
  },
  {
    "url": "assets/js/75.bd8d2293.js",
    "revision": "995dd85046f307af901abbc19090edb0"
  },
  {
    "url": "assets/js/76.037bd78a.js",
    "revision": "2a29afc5782ae85ee2541da1c57f3079"
  },
  {
    "url": "assets/js/77.3077338c.js",
    "revision": "0f8d05a3c0f0b0abf8c5342b6717f2bc"
  },
  {
    "url": "assets/js/78.1e69cb48.js",
    "revision": "0c1ad502e994c2f09910518d69c1a0eb"
  },
  {
    "url": "assets/js/79.8f1e1d1f.js",
    "revision": "68e0ba9abc2d06433c1d8eecfa759f35"
  },
  {
    "url": "assets/js/8.16b2248a.js",
    "revision": "b0273781ad63fcf69b48bda63e787858"
  },
  {
    "url": "assets/js/80.2c56983c.js",
    "revision": "37e4069ddbe555b5070fb49007042edb"
  },
  {
    "url": "assets/js/81.28399be6.js",
    "revision": "b66c6fb65edf7a1fde43dc34a25af39d"
  },
  {
    "url": "assets/js/82.8f551513.js",
    "revision": "1e41b3c8fe6981861dc197b53edaa0a1"
  },
  {
    "url": "assets/js/83.a65c26ff.js",
    "revision": "96e7bcefbc706ff81b0eb5f11be78759"
  },
  {
    "url": "assets/js/84.378eb9b1.js",
    "revision": "c04287008d22447c04ccd76781ded266"
  },
  {
    "url": "assets/js/85.dc729205.js",
    "revision": "1ffb8571a565eade0dad16f6e2c153fb"
  },
  {
    "url": "assets/js/86.2680d966.js",
    "revision": "b45e428596bb3425de76fb7bfaecabde"
  },
  {
    "url": "assets/js/87.2498a18e.js",
    "revision": "f08c3e4598e824a2183fda92ed46f536"
  },
  {
    "url": "assets/js/88.bbab131a.js",
    "revision": "ff0556c40398ad7c5dd824b9e0981c37"
  },
  {
    "url": "assets/js/89.04d66429.js",
    "revision": "352ab085173d0aefcddd7139eaec2834"
  },
  {
    "url": "assets/js/9.e9c6fa79.js",
    "revision": "baf61b8ec03658426072131a2b8d42a0"
  },
  {
    "url": "assets/js/90.1448a213.js",
    "revision": "0d289bcf54bd9e9caf963483594eb2a4"
  },
  {
    "url": "assets/js/91.1079c92c.js",
    "revision": "b1dfc1b5eaefbbd903e753fd14b3f409"
  },
  {
    "url": "assets/js/92.60389a60.js",
    "revision": "2cd0cb74b3b90b588e1afd0b77389c83"
  },
  {
    "url": "assets/js/93.b83cf291.js",
    "revision": "dacc7e0dbc29caee0d7fa099b8fb19d0"
  },
  {
    "url": "assets/js/94.c87e17e0.js",
    "revision": "bcaf77e63d8ea5f1ebd5a5e093e1cb85"
  },
  {
    "url": "assets/js/95.8a129146.js",
    "revision": "56825b90cb32ead8434735a37b9fce87"
  },
  {
    "url": "assets/js/96.e3fd1e6f.js",
    "revision": "bbdfde484a520dfc744c93b249b04b33"
  },
  {
    "url": "assets/js/97.01e02337.js",
    "revision": "390c9e595b47796aa4172c3d1d215d48"
  },
  {
    "url": "assets/js/98.4d0783ca.js",
    "revision": "ee74951e770528758127efe5d1d81071"
  },
  {
    "url": "assets/js/99.1a8b1909.js",
    "revision": "4fd847d787b47e667a7e8db093b0ecdf"
  },
  {
    "url": "assets/js/app.b8fee7f0.js",
    "revision": "fb296230e033e259ec8ec8774be8cfa6"
  },
  {
    "url": "assets/js/vendors~docsearch.fc32d905.js",
    "revision": "e303397c8e4997088892d7a0ac971b6b"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "044f951004e45e631be0186bdbb341b1"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "680db73b21b8074bbaa465a0f6e51a96"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "77c4e6ab6479db753441b317d0542686"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "653f0547e00d9814543c656c5325884c"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "a055d6cac8437fcfc121af72bb4cf356"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "0487a14de7ad7de238b2ec963b135772"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "c800b5c4ac648ffcb7d6ea7d7422e439"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "5348d7b0732c93335284a6c47511d69c"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "632ce16437993fbf62af39ac98670ced"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "f1970ea2c1aa05417dbbf6cabc34dd0e"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "2040cda38803a45ffcc9313b2e5b651a"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "4dba32a1cce128b27a58ca97387a191d"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "64411a273fb1d954c425736da59cff2c"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "9a573db2be680554e13e3a543e1f815d"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "887618e615c0b2656b68a328dcfbce71"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "cb43f0744ea7d1ce90498f2cf878e218"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "e0f8aca0cb32801cf7a7e7cbc675617c"
  },
  {
    "url": "impressum.html",
    "revision": "ca45ec8c5c1791620e425eb8f18cb408"
  },
  {
    "url": "index.html",
    "revision": "163aca5c53f55c8eb8b85b10a1c7f647"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "5efc757953553b76c72e7191804cf85e"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "1310938845bdd682eeab50ed89fac21f"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "a1e64b34433611ddc4b53c2c485a77ca"
  },
  {
    "url": "Projekte/bestfan/HB-UNI-Sen-CO2-STM32.html",
    "revision": "8c73ec5b243af723689e3a948729ee62"
  },
  {
    "url": "Projekte/cactus-online/HM-Sys-sRP-Pl.html",
    "revision": "6ebbd5a602613a0712d3fa2dc37be000"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "0d456a67b9ee27c992c8ad17ed46fca2"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "d77cfcc81bda99ae30e1b91b8e76875e"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "75c347570541a89ae581891d98697bfa"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "a14b1806fdc9f52626901d158f92f7b0"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "f65de0b3e6f1ca463799d361da23ac51"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "972c8cb335cd96821f91aa1a8837528c"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "be8430ea51fac6fe90f08ee4541e4da4"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-SenAct-4-4-SC_DS.html",
    "revision": "898b36f2f8d18266d9809a9a63f10d27"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF_rLF.html",
    "revision": "769810f6aafaeaeb637004eceab9f458"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "a59abad9bc2f633455686c04cd3f61db"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "8f3df396ae22950aa359a0d7638df536"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "3a59678a6f8a927b881f468464840396"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "f742e420df3cddfe74b6ae48e6dc5c82"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "ec0872a6c0e97c534d2a60244c8caf4a"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "2ccd8b6cda5e653d284a15a2e96dfa57"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "8e9e4f4b5e6832aa033608c169be4ad3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "6b2ddd2f35df8464d40fbb387cd0476d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "d53b22ec18ac81d510c9648cb44c2c86"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "468ab2c8e3da2906ebaa6794592c07f2"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "e185e9bc5064aa2fdbd5bd636a610ec4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "cff73e19f42c19a274f5901d1f319b5a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "1622b8b412350b21a66388d53480793c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "50c043190936d3f88d382c47cc56dc48"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "bade8757c79413ee62928a4944fd2afb"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "4255bc542a34be7581639854a4262ae9"
  },
  {
    "url": "Projekte/harald/hm-powermeter-lcd.html",
    "revision": "9aa20bfa76248d53f3a29dd8c18db2c1"
  },
  {
    "url": "Projekte/harald/SolarSensorTag.html",
    "revision": "925f83e8c9c51b99e4ec610bcb315246"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "8504dd70c796c1f4063f7cd30b37faea"
  },
  {
    "url": "Projekte/index.html",
    "revision": "94f3d3c48180803e146384408f11b3cb"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "3f1a85d4f50d78d747794099d3b7cb51"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "ef915e090f8614fa9a1ec16b7eedcaf6"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "4910f5117f2356471ac4abee26cbee09"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "04bd62b00f432777fd1580cf26d087bc"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "2ebe38940d7386d79422b388e920ecf2"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "1dc3a0ebda58eddd9720be05e9b6cbc3"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "926d1ca71de46fcbbde048f6dacd8638"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "56c6e41cdfb68f3008d0ab3f17c54678"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "b4fce06806bd626a5b5ef5bbd9774949"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "3977fd6c5a8f26b8b81550e2ff728969"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "86a16402fdbded4bd7d3c095e7f9cf0f"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "4d8fba0b6f420b217733d86011cc6e4c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "826192031bd9a6e35c9a013a4aa8b4ea"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "a8957c82d0102d06ac906e5c195c3108"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "e07d4e9168ab2290b7a90865acc4b2cc"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "ee0e5778d54381c649150a86320375f4"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "74b056e95f7fb7db27805bc82ffa0f84"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "b1ca005649dab86886d817800b9a3fd1"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "1a43f2349fc068651f6fb53131467c67"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "1ab93956ab60b5252e3c27af7720b9a6"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "a302ed55e0cfe73531d7788c040808c5"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "647ae404275d78f77ec0a38f78ccde4a"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "42d6ca374d1276bc650cbec2d921ffb6"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "9743bc7eb0951f8abea39048b16ec417"
  },
  {
    "url": "Projekte/JurgenO/GasZaehler.html",
    "revision": "b7ab9529616253f0ec94293f4d11d9a0"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "8edf992c172329184b5967a6f2d321cb"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "80f5c458f33f715de99addc48cf34778"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "0b75431f1a2e3e51f1e16721510019fe"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "9ec38f117e09402e8e69e253106b8695"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "79889f2aadd2c498d3a41a13b2575093"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "98c838da7dc918f1f65ce5e2874b9ff8"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "714e7978c46a38a4cb9450ba16ae16d3"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "42f49199d8aa89d13248e38f2b9e00a5"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "374f4100b9d3699d1df9a17834b01103"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "ea7746a25f0095391ab87923f401611c"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "f70a5d4d39ee9c27c3bd4870de6608da"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "c2b9d09e93f18352b4a6fa0c35e1d8fa"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "de41e3db7d9a3d2ca7bbec8a79323ba8"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "7f94fc3ddbd464da69a1a3e075b05de5"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "16c431aed1e8348ca89bc039c320745e"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "1f65d63a326f8c4fca3b7bf631db4983"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "2deb7734307b24a29689ed632243c516"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "59b35c171ea88d9f9a505885ff2038a8"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "74e0c476b08fa4b30aab4c7a45ebd2a5"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "b04160bc8cf7945ccc52e5e6f8d04b23"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "0b60db55c074cef2628566bb730bf74e"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "6a94266bdf9e5826473a816c359cc044"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "cf27387c5458fcc2b9d8fbb03bf0886d"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "5caa06797aea38f0c463e63b46838154"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "ecc32e85420a0eab24a49147c04961ef"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "ea6d6e6f81dda2c42904408c59f3acbd"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "00acf67c9007c4537ce1f6d3304c495a"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "315af08b0bb051419cd13d08ce0d4fc4"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "02bf88b5014a308b6d061b6cd011d425"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "8d6ed92a6538f149b4f6bde4e3ec8740"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "5a25cedf2ec2c5f0a098ff411f5e481b"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "8eac90ec7a2dc5338e138c908f318e86"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6-Pinpad.html",
    "revision": "e3580913036ccee3503bb369bfb7bc47"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "896db1016193865e450b46c1ffe42425"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "37ae9d83feaf5efb74e6e0a27dc11308"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "127bf4626379e466b55e9104eaae180b"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "9e5e10301e48e7c3cada14896ba5e23c"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "54225b98aae58b7885999a4b2e7211f9"
  },
  {
    "url": "rftypes/index.html",
    "revision": "00a1bd11a1ae062a5213674ea6a24cd4"
  },
  {
    "url": "Sketche/index.html",
    "revision": "c686b90c968c09d82e4371d20d9b007e"
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
