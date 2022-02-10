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
    "revision": "212ef363997bcfc079f2bdaebea570dc"
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
    "url": "assets/js/1.93f28b74.js",
    "revision": "5f29fb5fc52cc35ab4508f49315bbd12"
  },
  {
    "url": "assets/js/10.b1b0294d.js",
    "revision": "3a9933194f5ce3c389465cfbe09b79fa"
  },
  {
    "url": "assets/js/100.0aefa17a.js",
    "revision": "21ee65b31a9143292197d74030d02c90"
  },
  {
    "url": "assets/js/101.3abc6991.js",
    "revision": "93f42b08ce20253c10269ba584736046"
  },
  {
    "url": "assets/js/102.504ed121.js",
    "revision": "69180f747241629ab5bd37d164303f18"
  },
  {
    "url": "assets/js/103.af35e04f.js",
    "revision": "5af937ecc0f60356a58e9fa6dac351a7"
  },
  {
    "url": "assets/js/104.8999eefa.js",
    "revision": "d2eee55d97004e82ff6806667c3abb6b"
  },
  {
    "url": "assets/js/105.6dee9db0.js",
    "revision": "4e874b334f702f9a1127d767bc7fe3ad"
  },
  {
    "url": "assets/js/106.fd870550.js",
    "revision": "44da9e20ca159e069f7e815208025694"
  },
  {
    "url": "assets/js/107.b8552f88.js",
    "revision": "dd4ea8e60b4cdaed6e607a35e0630751"
  },
  {
    "url": "assets/js/108.a83a5be2.js",
    "revision": "4c72d0d95a69f9a9e866b94e10905cd6"
  },
  {
    "url": "assets/js/109.0dbf645b.js",
    "revision": "e8ac12ba5f4f2b3a969014430fdc57e2"
  },
  {
    "url": "assets/js/11.51f18007.js",
    "revision": "4e938b66969fc6ef82ee2012ae9a49a2"
  },
  {
    "url": "assets/js/110.a734e247.js",
    "revision": "cd485a46f96d29b9836f3cdbbb96f60f"
  },
  {
    "url": "assets/js/111.aee505b3.js",
    "revision": "4fd311b92614ace844d46b250f44c1f8"
  },
  {
    "url": "assets/js/112.77e0c523.js",
    "revision": "3e8b1c5c81cca0a16f450cf71967f074"
  },
  {
    "url": "assets/js/113.c43e1235.js",
    "revision": "67df810be3ce484e4e2ef984fcade5b5"
  },
  {
    "url": "assets/js/114.aabfa8d7.js",
    "revision": "7bf9294586583a01b898c180eec96883"
  },
  {
    "url": "assets/js/115.c2613360.js",
    "revision": "b4708ad48b247cee599df20af6ce2f56"
  },
  {
    "url": "assets/js/116.9a6ab1ee.js",
    "revision": "1598f5ab8d5938d88c2af029b5098dd9"
  },
  {
    "url": "assets/js/117.cdcc3b2f.js",
    "revision": "58a0b417d0f38779344d987f60748f4a"
  },
  {
    "url": "assets/js/118.8e91dfc6.js",
    "revision": "da51171ef5d1a4f93589f10cca167266"
  },
  {
    "url": "assets/js/119.4f577c5c.js",
    "revision": "fd9cc3d5af997c5f7faae88da4090bd8"
  },
  {
    "url": "assets/js/12.361c84ea.js",
    "revision": "5c0f016e3adaf88249bbc386c6b3a257"
  },
  {
    "url": "assets/js/120.2e672453.js",
    "revision": "d7025f3350317a8119e5dc33d41f14a5"
  },
  {
    "url": "assets/js/121.7f77d801.js",
    "revision": "0d0e581f1678fde6d89afc883af92080"
  },
  {
    "url": "assets/js/13.c6f28b5b.js",
    "revision": "7c72762c1ee0e03d3562c8821acc1494"
  },
  {
    "url": "assets/js/14.27812b90.js",
    "revision": "4802cf6e216f0c7ae88dca77fce5b393"
  },
  {
    "url": "assets/js/15.a30f3c30.js",
    "revision": "d83caf9a385bbc5c01c3b1ea1e251416"
  },
  {
    "url": "assets/js/16.cf957e7a.js",
    "revision": "a4538d3b3c4782687f464406d2f237bb"
  },
  {
    "url": "assets/js/17.b323d4c1.js",
    "revision": "286b7d4bc3bf6d2876c30652882e7d89"
  },
  {
    "url": "assets/js/18.f2a7eaad.js",
    "revision": "84062d751fbadafa6d2d7e43169ba0d3"
  },
  {
    "url": "assets/js/19.b17e3522.js",
    "revision": "ecfd7345173eabd8352c5df1546a470e"
  },
  {
    "url": "assets/js/20.939d83e0.js",
    "revision": "3e58b27107fb1b3dd27d9fc0154d7979"
  },
  {
    "url": "assets/js/21.e3153591.js",
    "revision": "1fe945c9f01fe505232c4175c49db20c"
  },
  {
    "url": "assets/js/22.c60c1902.js",
    "revision": "1bbe38a98d9c18a2cb8754540cf3a6a1"
  },
  {
    "url": "assets/js/23.d2e7b834.js",
    "revision": "896da04c49103bae6913d6e6225f04e1"
  },
  {
    "url": "assets/js/24.5793e057.js",
    "revision": "c1f9f9df4456cd00bbbe349018a42105"
  },
  {
    "url": "assets/js/25.a2394a62.js",
    "revision": "7e8e96f8dcf9b239519c83a4c86f7cfc"
  },
  {
    "url": "assets/js/26.24c4aa55.js",
    "revision": "a100be272f58e65ede9ca19f27999bf4"
  },
  {
    "url": "assets/js/27.70ff7327.js",
    "revision": "d0f02b361308e7ec51df49afc4f08d21"
  },
  {
    "url": "assets/js/28.cb692fc6.js",
    "revision": "eefdd2cdb4053a661f3ba1b4a2f20623"
  },
  {
    "url": "assets/js/29.47511d52.js",
    "revision": "805885ecb2f73c5c5a658600a7705dd4"
  },
  {
    "url": "assets/js/30.b0afc996.js",
    "revision": "2578c784a08456bdef2806f6658883b5"
  },
  {
    "url": "assets/js/31.91a98e58.js",
    "revision": "15e390603f333629887924bd5fc74811"
  },
  {
    "url": "assets/js/32.91249b09.js",
    "revision": "ef09774867648b7019366f48027cff58"
  },
  {
    "url": "assets/js/33.cc39d5d1.js",
    "revision": "42fdfd243968e011dd86ad7367dafbfd"
  },
  {
    "url": "assets/js/34.12aead7e.js",
    "revision": "438b9aa61aa5e6d9fbb3ba560c9a6392"
  },
  {
    "url": "assets/js/35.fa40663b.js",
    "revision": "012d3aad6cca341246ef95026e00ae53"
  },
  {
    "url": "assets/js/36.58f85542.js",
    "revision": "868ec3fee16b73166a891bd97401da5b"
  },
  {
    "url": "assets/js/37.6f5bf9b3.js",
    "revision": "9fdb88ee6e610cc916a7043c9dff203c"
  },
  {
    "url": "assets/js/38.4914e92a.js",
    "revision": "1c83c7d74d8283c6b67ee6918f757259"
  },
  {
    "url": "assets/js/39.87da8249.js",
    "revision": "61b05c6993d80f96c4b8950cc2810c4d"
  },
  {
    "url": "assets/js/4.9632a739.js",
    "revision": "af10087c3846bdb22db2e01eec4e7dc3"
  },
  {
    "url": "assets/js/40.7fcc5682.js",
    "revision": "744842634558d1af238615666f4600da"
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
    "url": "assets/js/5.89adc698.js",
    "revision": "4ad66c2890cd63bf7587f200fbeca925"
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
    "url": "assets/js/52.7c401e58.js",
    "revision": "765cb404ae1dee71e661511fb1755cd0"
  },
  {
    "url": "assets/js/53.27a99c52.js",
    "revision": "bec013466e6c153bf9b93edd2230117e"
  },
  {
    "url": "assets/js/54.6a6d4c89.js",
    "revision": "226dda0296be5aa13b5bb0a32dfc90e5"
  },
  {
    "url": "assets/js/55.18b70459.js",
    "revision": "d1b4bdb2b4abeedec91e5550b350ed7c"
  },
  {
    "url": "assets/js/56.be195b90.js",
    "revision": "51469405e2a1990798fa97f380a2bf38"
  },
  {
    "url": "assets/js/57.39aa081b.js",
    "revision": "4cb0004d1eb599c2ef39955e45a9c5ef"
  },
  {
    "url": "assets/js/58.2c3d085e.js",
    "revision": "88cd77f54743001044ee56eafb699efc"
  },
  {
    "url": "assets/js/59.40024cda.js",
    "revision": "83bec363cb1054599f82a6f6db08066c"
  },
  {
    "url": "assets/js/6.199fb4e2.js",
    "revision": "bb5c1564b7a077c2bc8edfb6a7dcbc8b"
  },
  {
    "url": "assets/js/60.957bfe65.js",
    "revision": "1f919f0dd54f0cbc7a36088d634aacdc"
  },
  {
    "url": "assets/js/61.622ece46.js",
    "revision": "f92d0a13017032bd31d660af54ea30e5"
  },
  {
    "url": "assets/js/62.174bfe78.js",
    "revision": "97963dffe81ec73c96856167b06acaf5"
  },
  {
    "url": "assets/js/63.d7012c3f.js",
    "revision": "4a3dc62a15ae23fa235ab79c71f14c48"
  },
  {
    "url": "assets/js/64.cf62f7a0.js",
    "revision": "a2cd6e5dbf4a703703381d2bf50e9b3b"
  },
  {
    "url": "assets/js/65.a6959099.js",
    "revision": "0e9b5297236c803434ec21504a54d68a"
  },
  {
    "url": "assets/js/66.e9a7a988.js",
    "revision": "8b44f08a5d2a1b32ef19c48bc2e8d063"
  },
  {
    "url": "assets/js/67.c746d3d2.js",
    "revision": "003a97d34a9823d8706e06b22269ff86"
  },
  {
    "url": "assets/js/68.176de690.js",
    "revision": "c2f36314737ccdcbde01627689a2e39c"
  },
  {
    "url": "assets/js/69.b0261428.js",
    "revision": "36464d5421f88f7f3fb3bc730ef41662"
  },
  {
    "url": "assets/js/7.71b3803b.js",
    "revision": "1d081e13e30fd2aca56408e203e5a2f4"
  },
  {
    "url": "assets/js/70.0ffb36df.js",
    "revision": "a3225c566b663a9b9ccdd36c8f115c8c"
  },
  {
    "url": "assets/js/71.267f6894.js",
    "revision": "c25e5572816f98c85975bd9cd0b46bb0"
  },
  {
    "url": "assets/js/72.37fb4619.js",
    "revision": "f54dfdbe91bd85fb80ed02a4a0514a36"
  },
  {
    "url": "assets/js/73.1a3fbc9d.js",
    "revision": "b6f7fee0b9af5e1bbcef0d0724043e23"
  },
  {
    "url": "assets/js/74.3c55af3f.js",
    "revision": "3878b8fee1ce0307da85749b2cdfca64"
  },
  {
    "url": "assets/js/75.4923034e.js",
    "revision": "ca42020c84be4845e8b23fd1833aef78"
  },
  {
    "url": "assets/js/76.525668b8.js",
    "revision": "b32e424931ca35003bb59e83065bc3f5"
  },
  {
    "url": "assets/js/77.be432f8f.js",
    "revision": "f1439df55c2e279d49fd8f8b987da826"
  },
  {
    "url": "assets/js/78.a027801a.js",
    "revision": "dd903fa6bd3a4881902a03e97bd5defe"
  },
  {
    "url": "assets/js/79.31e23a82.js",
    "revision": "bed84521285819a27d7fd63f239cdfaa"
  },
  {
    "url": "assets/js/8.b2e173c9.js",
    "revision": "83e7fa087c3773108b698be0719a6a1a"
  },
  {
    "url": "assets/js/80.39f57d14.js",
    "revision": "284d5e8061f847016c972b180c01a10b"
  },
  {
    "url": "assets/js/81.f0f988c9.js",
    "revision": "2667f912a6774821a33969ac7ee717ea"
  },
  {
    "url": "assets/js/82.2565e5c6.js",
    "revision": "7c5ca3ad094d69013f05d6038683f07b"
  },
  {
    "url": "assets/js/83.01d34e0d.js",
    "revision": "87da3c0b7a4858a82c42974d358c3e2e"
  },
  {
    "url": "assets/js/84.a3184647.js",
    "revision": "48f7937a71a154ddd4b4f91db867553a"
  },
  {
    "url": "assets/js/85.525ad5ee.js",
    "revision": "301914573af78603591c6235d774bfa9"
  },
  {
    "url": "assets/js/86.4016d365.js",
    "revision": "745f1595fa231b4d66d864299bee47e9"
  },
  {
    "url": "assets/js/87.770274a3.js",
    "revision": "7ebcca404ce78fd0cb778ca187003833"
  },
  {
    "url": "assets/js/88.fdd767d2.js",
    "revision": "bf8ee2a67e70a92995b34d5a417f7486"
  },
  {
    "url": "assets/js/89.b554a52c.js",
    "revision": "f4296cb0eba9e898417dbbe31b87a750"
  },
  {
    "url": "assets/js/9.59626415.js",
    "revision": "5b4dfc342cbd72511436527e7590a35c"
  },
  {
    "url": "assets/js/90.3007456e.js",
    "revision": "afc2c3337cef55ac4c4c7c9d18d69549"
  },
  {
    "url": "assets/js/91.37fe74e3.js",
    "revision": "8984a81fc39c2ba9ba83c256a49aef24"
  },
  {
    "url": "assets/js/92.7d761beb.js",
    "revision": "8be3c396fdd0705312f5b5eb75427921"
  },
  {
    "url": "assets/js/93.9eb57af9.js",
    "revision": "f68e85b1ebcedba1c711707ed714c10f"
  },
  {
    "url": "assets/js/94.bde24cb2.js",
    "revision": "79830112552ed80813ebb9f7fd76eec7"
  },
  {
    "url": "assets/js/95.93c8d54a.js",
    "revision": "eab817bc00064addb8f6f706232bfbfe"
  },
  {
    "url": "assets/js/96.35346569.js",
    "revision": "207dfa783f751ca9d903ba56ec23b565"
  },
  {
    "url": "assets/js/97.2cadcf32.js",
    "revision": "797f673c45971cbdce98b852df8ab8ed"
  },
  {
    "url": "assets/js/98.09a17b40.js",
    "revision": "b3c38fe9188d1421a684674749ca3e2b"
  },
  {
    "url": "assets/js/99.4a716bcb.js",
    "revision": "8a237afbd6d96992a85de2e02f16dede"
  },
  {
    "url": "assets/js/app.2db9cff8.js",
    "revision": "23d2e6ba86e895b49ee0aafc889e9c8f"
  },
  {
    "url": "assets/js/vendors~docsearch.0fed82a3.js",
    "revision": "6d11cab086da94b9a445a715ec447cc2"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "5f7ebdae1cf95e30be138a36f84695d5"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "5cc9df24e95a1dba76e9810d0ee61279"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "df63edf6b375565180ebaa73da32bb10"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "8149114ac56e3761a49a92c087259130"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "2b620e21239bfc0d24517e8ecfb99091"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "5c497767701db9e8cc8b689ce8994ec3"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "43cd05f9c4a70011124b48c841fb4282"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "e225f7b80087023c57d572ad848eb5f0"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "7382cde3a6465a2335c8d6c27aa92e1c"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "13e2f40155bc1b4dee5a8619e469dde4"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "74d3e08a2838f48c928b712f06e0ef33"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "a9c8304f7f849d48cf7b2a3ee425a46d"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "2c1b569f99e51a26ae31696ab0bb7dc0"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "2ba072648c2542d62dfcd331f4980e17"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "a8371380201d2c02b6991a14274916e3"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "19f1afd6694a75bc269cbf09cf2db65f"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "f2b2e377b3db9815f7da7fa6378212c1"
  },
  {
    "url": "impressum.html",
    "revision": "03921b54e91f54f3050f026e3f4973f0"
  },
  {
    "url": "index.html",
    "revision": "e1666d620ddab9169a086fbed05f50a4"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "d97087c2092c37810bb94dd90021f05d"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "f807890bf6cefd9dec2fc9ec5e18f92a"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "927d0bb8a1823f2e6abb694c329f9075"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "eba6f6515374df3f31386c7177b06afa"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "53fc2caaac55ae27bfd7053046c786a8"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "03d135341c22d0d19220be4fa829811c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "bfb8b63f8eaaeb902a5d2200c8587dea"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "f4a657592590dc0a940c564cc177c5d7"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "9c0ec56782615fdd49c8f218f770f49a"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "42b67f961b9f24455d6ea39504da5dc9"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "7c2968eb7fd3c96bd0ff1bd50ba4c9ac"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "57c5610546fc2d24ee3a8032489f62b1"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "c58a0f4b00b21e641c65cf05631376ed"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-RAD-AL53.html",
    "revision": "264fb0f48c5c6855c583de945c95030b"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "6e40c345789652761fecab19f87d5198"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "b26d06cbc24dd14718afccead0960315"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "ee0f56b7195b9b311d76bdd39a14032a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "fb0dd082617e6829abfd54a519707dc4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "b05ec2e084348e95cd908ec8292997bc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "78e593195e4b6f07f86cb5d3bc3a2a36"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "a0c114e5d5ca779f5979b408b638e10a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "9f36e50eb1e92a805c181f3848a6d76c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "6017efe4546f224a3700e19fc5496dee"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "0886de9dada910b0fa580b3c3dfdfd86"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "51c9bd05ab1f0a09f9424d8e2acc274a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "66e58acd13c67f508d22c2cf0fbed4a2"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "f6b6c0ee02fdbb99fc6a50b1f53b03ff"
  },
  {
    "url": "Projekte/index.html",
    "revision": "7f0f17a40b2425312a4a3157474b0769"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "606739f13210109091b1fab8387824a2"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "bc90b8648632581b350509d0bde5453a"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "1b4403ad057731808719bc6f19436aaa"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "e5b5d829fe651cf5879cd25560832c39"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "55eb76a18da576c55ad6dee908edc970"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "372ac3e59cf9c704c959aecba49180a6"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "4060d9c94297a7c403b893ac6251c718"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "5ea1d1a5d62636e9d7ee77d32e8c8e0b"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "102dcef0198d22e9ea9e71e3f4ec6795"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "805fd51ab8c1c2a51de241261626b103"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "7c22c6b75a183ac1298eca4d1ebf87d5"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "3151c534f049360d3cd8f2a58c16af00"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "551d08def941b8651076979fbc2b16ae"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "3a44db49220d69276175e394388ee532"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "cd2f47402725bbc2b80ff043f8cfebef"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "6571e70bf6e085902ce3548f661c8483"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "8ba354178c9a254ebf2b2d4df375a3bc"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "54c43e8642338f6e2d858c464e7ac046"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "e2f80dbff00ae01edb53b6ef4edb66f1"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "8169994ba44c5a9872d857fcfe2cfc5f"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "627cedcafd972571a090fd2a0b1bd70a"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "d6852a182b0f627e9d46a1c5249ff976"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "31e37b2d17d098af08bf2529dc140b73"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "53abdd71200b3da0d53a5eb43098b780"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "0bfe5b51c4e4e5c903bbc458adb0a3c2"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "dadf2b912d01073acc0671e9936f856a"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "9bd03e4b2bd7cc3a897880a32330cd5b"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "a1705ee9ae01cbcb86e542036c195e0a"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "a3736c31d148ecd4663e6517c3ac8a6a"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "8a79255f29ec864cf7c5b6ab794d8b34"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "760c5a83c2b60594dd35a6238ff4072f"
  },
  {
    "url": "Projekte/psi/HM-SEC-SD.html",
    "revision": "a1c95905c960b457e1d6ba5a6ad2b393"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "97932290904959428abcb0f50f5c84fb"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "605169231f35f0f1605593a716c017e0"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "6a39ec843863aadda01081c0609345d4"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "acfc3688bd2fa33e67481fb9c7bcded8"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "084f735936262b0e006e7cfda75fa7f6"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "0f56e816ad00e4c6dee150dd4534aec5"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "d8ddb29775e57c534c938bd8d2030228"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "cc65d796b28cee6ad14fbb86c9d0533e"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "1215950625f9309c000cf6cfd5b2fc2a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "eb4bc1318a2811e5f13c4f0cc6260ccd"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "15fc96dd6f68bc2e775207d8d7809f65"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "b5dc932f02900f67295253324673fa78"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "d261c360595257e663a412a7c088a272"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "7f4205a96dd411daf9cda4a26193877e"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "1f1b9478877ae6688ebb4449ababdab0"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "2b52b2e9e0fa5665b1810783b6d226b5"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "630849fa96070af60e676df8e614bf19"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "09d89a1df168b2403bf5fa8d26b83ad5"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "be8af76f14319450cccd79713f43c047"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "dd3b48ebad1c755bf1dd6cbfba21e767"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "978e27fa75039dcc3825baefccd4526e"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "5e4f40bbe88f93e38b8a427d35132514"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "b150e9d15c069795080b4d9374289e89"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "05630b8fe9e781a76747fa71d8cea50a"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "cad554331823ebfe31c4fd1a99979f78"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "785cb93c9f3afd0471b2ba9ef75398b4"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "51496d0e1dbe069ac1c4a618fb40e1bc"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "dcec0345ca2994582c3776618d1d8d5d"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "3ccdec3ad706242a9db04509909af3ed"
  },
  {
    "url": "rftypes/index.html",
    "revision": "141a8a7e0983780466e0351984e72dc4"
  },
  {
    "url": "Sketche/index.html",
    "revision": "934efbf3d52e950dfeca9887aeeeab9c"
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
