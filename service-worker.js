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
    "revision": "b7cd024fa5e940ea2745b177b072b98f"
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
    "url": "assets/js/1.ff35c269.js",
    "revision": "1d612981b5d1dc2f61d2732d45146649"
  },
  {
    "url": "assets/js/10.9ae3246b.js",
    "revision": "fe478d5164c91396c2f4f10899fd509a"
  },
  {
    "url": "assets/js/100.65c0f792.js",
    "revision": "35db0a7e5eefd635f571a9b14f329e09"
  },
  {
    "url": "assets/js/101.7818ea75.js",
    "revision": "f78c684716bd1e21b8dfc62c0ad190ef"
  },
  {
    "url": "assets/js/102.97c0e973.js",
    "revision": "3b886a333f0b25dac018711d2564da38"
  },
  {
    "url": "assets/js/103.1cc92ef1.js",
    "revision": "b172bc39498eec6b9aa2d2198a106104"
  },
  {
    "url": "assets/js/104.58ebdc70.js",
    "revision": "ea7b2967d2493f803a949f66ac67b88a"
  },
  {
    "url": "assets/js/105.1d7862a8.js",
    "revision": "12b0ac7f05db029b249630fa801c9392"
  },
  {
    "url": "assets/js/106.7341523d.js",
    "revision": "004050384520e5b84e15daa678b796c7"
  },
  {
    "url": "assets/js/107.715e006a.js",
    "revision": "c08d33048eb88778b7c5a775a44739b8"
  },
  {
    "url": "assets/js/108.3b769c4b.js",
    "revision": "8cf1e071b560c9bfb765fc516f9aaeb5"
  },
  {
    "url": "assets/js/109.5b4914b1.js",
    "revision": "1e58a440a2df45917df3f9f61d4ee13d"
  },
  {
    "url": "assets/js/11.ca5332c4.js",
    "revision": "c9c3aa08ba1768a31bcc78d5284ebd56"
  },
  {
    "url": "assets/js/110.eca76614.js",
    "revision": "6c6e88713a41f6375b308765b8b714c1"
  },
  {
    "url": "assets/js/111.daeb9616.js",
    "revision": "c2cc098922062ea51ef275361667d402"
  },
  {
    "url": "assets/js/112.781705b2.js",
    "revision": "92b458dcc21c495b1db835c2b290d0a3"
  },
  {
    "url": "assets/js/113.e4839951.js",
    "revision": "c64635437800e521da31ed2b84f54fe4"
  },
  {
    "url": "assets/js/114.00aa08cc.js",
    "revision": "d87607441064e02ae7b02f36f6b7e3ab"
  },
  {
    "url": "assets/js/115.f05ced58.js",
    "revision": "a889d0c374b9655bdd89127f7f4477e3"
  },
  {
    "url": "assets/js/116.9f050175.js",
    "revision": "bda71415d82184ae6e03e8e5499bb704"
  },
  {
    "url": "assets/js/117.57c94e66.js",
    "revision": "4b966947dd5a0c89c60b74c8811655d9"
  },
  {
    "url": "assets/js/118.f2e4083b.js",
    "revision": "fe1e2ff6df8dea2776d8aa0bd5f76eba"
  },
  {
    "url": "assets/js/119.04c7863e.js",
    "revision": "06da14f300aa99fc9fdf789ea9f99a79"
  },
  {
    "url": "assets/js/12.b09cf4bf.js",
    "revision": "8dfb46f84505a27177d7ec3249c941e2"
  },
  {
    "url": "assets/js/120.5854ca27.js",
    "revision": "a8edf8de4d2170acaf4f367ec3289b6f"
  },
  {
    "url": "assets/js/13.77dbcba9.js",
    "revision": "074bc8f9456712adc95ce457094bd035"
  },
  {
    "url": "assets/js/14.80979d18.js",
    "revision": "6cca91cf932bfcb11853e1fff2b04294"
  },
  {
    "url": "assets/js/15.e7514bca.js",
    "revision": "3596fb516e05e3e593a143d67e4b1e6b"
  },
  {
    "url": "assets/js/16.3cbc8481.js",
    "revision": "990bf2635c2eca6e81872ad7f765bc9d"
  },
  {
    "url": "assets/js/17.64942dee.js",
    "revision": "c603102fd481a71aaff146ca66bbddcc"
  },
  {
    "url": "assets/js/18.adf84ca3.js",
    "revision": "8e7ac6ab42f4933e80e868c87e0c8232"
  },
  {
    "url": "assets/js/19.3b914704.js",
    "revision": "7650ba1afb4523d9dc75cde740f7b4f5"
  },
  {
    "url": "assets/js/20.f5c33f62.js",
    "revision": "1efb9347ef86bd531b11673aff0ac180"
  },
  {
    "url": "assets/js/21.f46d72a8.js",
    "revision": "d70f0656b08536ec54641e072a93ac12"
  },
  {
    "url": "assets/js/22.31e7d0a6.js",
    "revision": "fb17101fc4f37079cc383dc508be33b3"
  },
  {
    "url": "assets/js/23.de93830b.js",
    "revision": "e06705bf732fbbee1e8579465473efe9"
  },
  {
    "url": "assets/js/24.034b7a5b.js",
    "revision": "3aaa7ff2de3dc7ad74da51b66a691fbe"
  },
  {
    "url": "assets/js/25.30764c75.js",
    "revision": "ea63c3e22f03d925d258bfc732eaeeec"
  },
  {
    "url": "assets/js/26.839cc363.js",
    "revision": "37255fdc774655e30abfd73e5229df23"
  },
  {
    "url": "assets/js/27.9190cbbf.js",
    "revision": "575d4a58309d50803a4f55d6ed699685"
  },
  {
    "url": "assets/js/28.94fad1ed.js",
    "revision": "ae77c5a463a935da8121ab78f9d7ded1"
  },
  {
    "url": "assets/js/29.859fb944.js",
    "revision": "c62069c67909d5c8645aa9dcedcfb070"
  },
  {
    "url": "assets/js/30.f8bed519.js",
    "revision": "f6bccb3ae1f3e48b4ff08396a0902ba8"
  },
  {
    "url": "assets/js/31.649d41bb.js",
    "revision": "e10e106732d5f552ac21778d2a1cbd92"
  },
  {
    "url": "assets/js/32.e8b5db4f.js",
    "revision": "e42878c25aaa9cb12dfae54396e461a7"
  },
  {
    "url": "assets/js/33.9cdefe68.js",
    "revision": "019ce5862fe4073fe730a5b81411e34f"
  },
  {
    "url": "assets/js/34.476b1b22.js",
    "revision": "449bc34a940c591948978d38f610eb53"
  },
  {
    "url": "assets/js/35.c0e8e8bc.js",
    "revision": "2062f13d5a948b6c1692c281f2333fa1"
  },
  {
    "url": "assets/js/36.02462caa.js",
    "revision": "48a82fef6c0631c6cd38772435052f3e"
  },
  {
    "url": "assets/js/37.ca13d354.js",
    "revision": "6eeb6e95a4fa1aeadb7e9fe763619c58"
  },
  {
    "url": "assets/js/38.c1735b75.js",
    "revision": "90622cecd1aac063215ed7ce303c1cc1"
  },
  {
    "url": "assets/js/39.d7124b73.js",
    "revision": "52021addb98a1399bacfefe9e318bd8d"
  },
  {
    "url": "assets/js/4.858f147a.js",
    "revision": "004f664fb93aa054e4d90857631d43ca"
  },
  {
    "url": "assets/js/40.952440eb.js",
    "revision": "a4c580d8cea586a78e35150dfb487324"
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
    "url": "assets/js/45.7091c33d.js",
    "revision": "2c92f01b72278ca7fe031879e3071552"
  },
  {
    "url": "assets/js/46.65810b14.js",
    "revision": "df6ea5ea9fd89a1c789a15d1231ed6ab"
  },
  {
    "url": "assets/js/47.e98dfa1d.js",
    "revision": "dd6e2a7814d7413331d118bb95243145"
  },
  {
    "url": "assets/js/48.c6109771.js",
    "revision": "9175285bc1c535d8b596a2d25b700fe3"
  },
  {
    "url": "assets/js/49.ab544f10.js",
    "revision": "b9777f7481d53456e283732f5ed43146"
  },
  {
    "url": "assets/js/5.f8e3062c.js",
    "revision": "106afd5985ae084199af6a9cd118405e"
  },
  {
    "url": "assets/js/50.5ae1d996.js",
    "revision": "e6243b2fe87df2d6218230f2993a54be"
  },
  {
    "url": "assets/js/51.22e7514a.js",
    "revision": "c1fb71f6a0dec9a1d7ecd15177aa5e62"
  },
  {
    "url": "assets/js/52.d4427e76.js",
    "revision": "c2a96ce54127e242f4a255026e45259c"
  },
  {
    "url": "assets/js/53.20638e1a.js",
    "revision": "0acf7145fa74ff6cf5c84f28a7e9229a"
  },
  {
    "url": "assets/js/54.11bedc1b.js",
    "revision": "1cd1b4894d39f368e314db3bab17d897"
  },
  {
    "url": "assets/js/55.fbc1864d.js",
    "revision": "26d82a6eaed423179ea0455bbf8c8cb1"
  },
  {
    "url": "assets/js/56.7bd32197.js",
    "revision": "ea128184ab96a881f987c4f78b44f428"
  },
  {
    "url": "assets/js/57.e02c64ed.js",
    "revision": "fb5ae566851828f3ab788686a577db90"
  },
  {
    "url": "assets/js/58.0d4005e8.js",
    "revision": "a84124abacb95a98bf058ee2ec3782c2"
  },
  {
    "url": "assets/js/59.00807163.js",
    "revision": "957cc26422bf48293c3f6417c0e83c64"
  },
  {
    "url": "assets/js/6.2d4e3845.js",
    "revision": "d6b7e66613d221b01b17f766e1bd4e57"
  },
  {
    "url": "assets/js/60.cf20164f.js",
    "revision": "b21fc530445a019d7418ca8350deffd0"
  },
  {
    "url": "assets/js/61.103b5e7c.js",
    "revision": "c9fc5b685673c186bcd8c3f6588c411a"
  },
  {
    "url": "assets/js/62.9208566c.js",
    "revision": "fb330f33c27a6543acf8c6040b4cb007"
  },
  {
    "url": "assets/js/63.edec57bd.js",
    "revision": "1af9cc473ea4cf3480f1c3983ef82297"
  },
  {
    "url": "assets/js/64.690e488e.js",
    "revision": "03284758044aa8b6eaa292856d54c714"
  },
  {
    "url": "assets/js/65.c43fcb2c.js",
    "revision": "d45557e3c20472fda3a22095f323267c"
  },
  {
    "url": "assets/js/66.8f79a346.js",
    "revision": "7a0eed9fa1e7d72d436a523026c981f8"
  },
  {
    "url": "assets/js/67.899c6444.js",
    "revision": "65b8254b67656b62d4d61a1bfa62caef"
  },
  {
    "url": "assets/js/68.5f1901c0.js",
    "revision": "ccd90dec26b9888d00496d91d9079ee4"
  },
  {
    "url": "assets/js/69.6926e257.js",
    "revision": "9908c4d71908c6f8e2eab71cd186298a"
  },
  {
    "url": "assets/js/7.b11c83a3.js",
    "revision": "bd2eb78490e2415a8c719ad244d72b32"
  },
  {
    "url": "assets/js/70.8236ee9b.js",
    "revision": "ed4100801f44e393e72aa1665ca84574"
  },
  {
    "url": "assets/js/71.0cb43ab4.js",
    "revision": "20b8dae61557c1c95365ec8c73ef5b66"
  },
  {
    "url": "assets/js/72.c805dbf5.js",
    "revision": "ab0ed38008fba22e9a59124d95a454ba"
  },
  {
    "url": "assets/js/73.7b3504c2.js",
    "revision": "8542e6aeb5c740f417c8e1c51189d529"
  },
  {
    "url": "assets/js/74.6c082926.js",
    "revision": "06a3253a06639e06e9df61c004dabd53"
  },
  {
    "url": "assets/js/75.5f073040.js",
    "revision": "4364d0967c26218a0ea9cb38d9c61874"
  },
  {
    "url": "assets/js/76.04fc8b95.js",
    "revision": "22dd4f4819bb792779dfbb567d56222c"
  },
  {
    "url": "assets/js/77.6bef9645.js",
    "revision": "c684bd3a2556f61a8c0405b5a735d184"
  },
  {
    "url": "assets/js/78.e2754fa8.js",
    "revision": "67a8915107df0d556749a9bbbbe4cd5a"
  },
  {
    "url": "assets/js/79.190dcab7.js",
    "revision": "ff6d377bfee391f17525fd45659e1c9c"
  },
  {
    "url": "assets/js/8.551df4be.js",
    "revision": "d20037e455654e563f97a4f60eae6eb8"
  },
  {
    "url": "assets/js/80.83abafab.js",
    "revision": "5c3bbed70e66c8ac5a9eb23ce8199001"
  },
  {
    "url": "assets/js/81.8c9cef68.js",
    "revision": "2b181a0061267335f28becff18d6eac6"
  },
  {
    "url": "assets/js/82.3c5fb42b.js",
    "revision": "9404c609f7ff06e272272104f323d1d8"
  },
  {
    "url": "assets/js/83.f2b2e4c9.js",
    "revision": "86262fe8d7fb0cae5715f67091ec0b0a"
  },
  {
    "url": "assets/js/84.2b0e0ae5.js",
    "revision": "70144a4790b83c10e0fc2d017a5e1206"
  },
  {
    "url": "assets/js/85.64767afb.js",
    "revision": "1eabc9327d55013e0e7799823a84ea87"
  },
  {
    "url": "assets/js/86.feef5479.js",
    "revision": "775fdaede4bac08792eecf9ba16ae6d2"
  },
  {
    "url": "assets/js/87.28a297a6.js",
    "revision": "ce53bdab976ccff484c7301b6f9ff6e6"
  },
  {
    "url": "assets/js/88.3c7d4d97.js",
    "revision": "a73901162c32923ce766e733effa05b6"
  },
  {
    "url": "assets/js/89.dc334b33.js",
    "revision": "0dac18d6d14392c38b6422c471484418"
  },
  {
    "url": "assets/js/9.59873830.js",
    "revision": "22e55de4b6122f53e6c38f7f34f5ffe7"
  },
  {
    "url": "assets/js/90.12b6e128.js",
    "revision": "1d687d490c9074fa75db2f81a1bd0d53"
  },
  {
    "url": "assets/js/91.4a1929d2.js",
    "revision": "cd0cf59007507bd324d20efd74fa5757"
  },
  {
    "url": "assets/js/92.b011322f.js",
    "revision": "82b6ae7e08a42e56879f2fc6eb0adf13"
  },
  {
    "url": "assets/js/93.16d434cc.js",
    "revision": "1bba1769ea43a71f3d33395e2bdba0c6"
  },
  {
    "url": "assets/js/94.10ba7c79.js",
    "revision": "7e3ad5330435c820ad9ecd06607e33b7"
  },
  {
    "url": "assets/js/95.5fe5e08d.js",
    "revision": "e33003de8af1fc58dc6fcbc816da9007"
  },
  {
    "url": "assets/js/96.b548a3ee.js",
    "revision": "0d2e76ac47b6df0a207ee4399cbd027e"
  },
  {
    "url": "assets/js/97.1683f6ff.js",
    "revision": "06d4e67c8c686e81b6d989806a35b29d"
  },
  {
    "url": "assets/js/98.4fdaa8bc.js",
    "revision": "38f706497b3f2b0f89014a11f800c1b1"
  },
  {
    "url": "assets/js/99.0d5dad9b.js",
    "revision": "e834866ba7e0cb842f688bda3f4ec319"
  },
  {
    "url": "assets/js/app.4323f081.js",
    "revision": "3ee0aba6fcfba40846ab865725905db6"
  },
  {
    "url": "assets/js/vendors~docsearch.c370599b.js",
    "revision": "f8c365962a1b5d816354a71ff65f4cd4"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "d5a11a542cc1a011c7afa2b1b3b7f21c"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "2eabd7b8761d8730ea70634a57cbff7e"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "d87cabd8bc2d37f23958b9875c7336fe"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "edc9cef17126dbd5c99b3b36a208c440"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "a2261c2011805da1e989e558e5b32315"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "b1afee18d05f5037054f7a94bdab7a82"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "be19975b15d3de8936ba145d0e6097de"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "5e0b2223832bc14aa72954c98abd0e58"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "97df6eaab1f97cf8812fd69b6dca6d27"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "1dadfde77ca4bef6f1ec552ea9541d61"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "32e656d81976b49c0c50fc13a2244c9c"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "e355f9d9e73e29abebe5e93be50c52cd"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "62ed6e1d81e6c42d9fb9205f065ec35d"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "7f8045bbc80a38b9927d52bf9ff31225"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "1a582382d68b0008b0868b213a9f00c8"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "8e6fdaeaeb29cdf467ac201fc41731f1"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "ba08c086030d3883ddfebc83ec1b9fcd"
  },
  {
    "url": "impressum.html",
    "revision": "cfd94b8962ba4bf041a5171396ca06bd"
  },
  {
    "url": "index.html",
    "revision": "e4a6f5eb4c39f4337798b9617af28983"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "c3c63afc59835a25d48b89bb7a7013b1"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "a5881c3c9b459a28b923e4683a4a84ba"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "9f4733ddb1bb108829729fe846a318e6"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "16b35fc8c09804f628ee26942c0e6183"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "1e10d242cbc595f1b5dc83ff316ad744"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "91ed03a60cd142182082bc4037b2b942"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "5c0e116fa9b4087bf99194cc8f937e8a"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "dba6a3f4910c2c9cda9b8ed31f0a6c40"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "25d0b4fc0e4850d1488a3c1f279f0525"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "714ed7214c77320f24a2ee64204f070a"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "baec1d752621121e2a00492e8481319b"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "ecb37e529fe45b7985de27cd3d97b45b"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "50621b4bf1b64f0305b64f6f6d5ee75e"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "4841c63079d384e845d7315283c14adc"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "0fa151898f1fc215fe3a4de390c8419b"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "54330238cf5ed3e8bc0c352b5681ac9f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "fbae1b4a1270bf5437e23426a7bd95dc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "7356dc333a1a9eabf88dbc1ada47d5e3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "0db3399601679f887aac56212464dde7"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "6b02f47b28f2f91dd87006d2a97782ab"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "c6a51bbb9671f778def01a0134c70f57"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "695d0fb5f1cf5430666c5a5297205e26"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "77464888a3c6d5f8ee27fe1b66b8a53f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "98698ac07b2c677c8d69f3f9c52916be"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "a4a465404f26ea7332c3867a4f8a51c8"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "cbf9ad982fbc66e7b41876831e6d88a4"
  },
  {
    "url": "Projekte/index.html",
    "revision": "c0e889d5900ab92514d6ec1ed18f1fdb"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "bd90d9800dd4d35842bc7ac7f52f4a46"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "95914444bffeee70f0ef3b023d4962fa"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "5911163ece90c0e3167f20e104792d6c"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "edae57c782c4ffff19afa354c12fdba5"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "977716041dddd650eb5c24574962b2a0"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "8c2f002e3dedec24fea669ae0f362dd3"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "1d027e096dfd57d2dbbe53d3be1c48d2"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "54e2c6d26e5a811f723e41f2cc0acff2"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "c8bdd38f6ee919b1a2b40a8d8aa6331d"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "c040366bb71a21528f7a21de597658c8"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "aba6aec589026900ee3a6e36fcc353d1"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "121b97036cbaca18e57cb2f9b7a2f26a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "ccfa73151ff76b58942e0c512ffdfe73"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "342619214288cb201ecf626624b9cd9a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "d8c70384b35cdca9b7f7bffd9a467bd0"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "8b9e97591376eee7aed87eb5779454e3"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "083d9842b1da184db5ca6a8a0637b3a3"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "51a548531a2b49f774a63c70700530e3"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "d7ce30831d35d46447d2eac27af83e8a"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "a6ff434c0d7872d6eea30ba3012b3e7d"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "592d643a891c0529c335d150d9662c71"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "b654335a7f13a0d2f4aeb335633613bd"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "e9d5e6b989eb1b7d7ec240a3c563b461"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "fa23940d918eba1e898c7cd90b824530"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "b05fa51e0cb9615a63fe1a4d62c23016"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "28947376d472b42a90f5702d84ff1633"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "0c6063b4f6dbf4407ce0ba00df40d7a8"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "99ba101d47bc90f2f55c582a3a6d141b"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "2fcb2dbe6c77a00c9c038e30e50e3cbe"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "4fdaa58c06edb9b0c6ca26b23f339774"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "f4916040c9138aca10d4277fac5bdddb"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "76ebfcae1b20dd215e39887b88fcc1b9"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "0d55e2606c6a4ef3362b03c24c04f0fe"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "4fdc62e7c5113ba36cf2bea4b3e096a8"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "db536e693aa3c2c1fdec2fec8abbaec7"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "03383e3b9abfde4ae605d9d65dfc1b08"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "2f0f0a4629563bc99484592ba2f01a76"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "beb7e86474707fdffead76df57ca3ae2"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "69b697b2add8b65bfb77b8b125e0a869"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "df4fe2a415c18ce35f53ca5e87e2c72d"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "806b22039f3231721846491453c2cd7b"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "6be86a97f0526534d12b5ff038aecd21"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "9a499c156e8c190037429adf166118f0"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "3f019e10eecd66eaefcd6883e6571a5a"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "a7aea405854f9e54a5a05168bf9bd7d9"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "0017a9bbea91886cba614ab6a6adb52f"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "5abb79856ed630e97e47647dedeca7dd"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "36185c976940560b59c286abc240f930"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "0c46ec6a5d34a527aaad9f8124ff38aa"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "fa5cdc98aa6d073384b21f7297cd46ea"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "280659d0acc24e2ddd8be01e10b2b7cf"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "42545d6422fc00f0255348cb4df12067"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "bbedd8048d7f542d3185348d033b96c0"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "26a426c4a8885bc66bd60c2330a104a8"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "26fc4d3f37395dcbc78ca991a1084070"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "7996d77853776c624fe1330fb38904c3"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "7a721e1cca80b4de5e79f6689684b80b"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "2c7a4ca6f28c6a92bccfa9b87db8939d"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "c2c8483b2b84184a0f3a6f6da7d8c919"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "3d6e82bcf965968296c6c8b80822ad68"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "321e9d5e245aedc5c48c253752c68b78"
  },
  {
    "url": "rftypes/index.html",
    "revision": "bdd1b52d0cbb29b6eb9c9a03777127e5"
  },
  {
    "url": "Sketche/index.html",
    "revision": "a7f1fc19cbaceb9b3c4d08be9997717b"
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
