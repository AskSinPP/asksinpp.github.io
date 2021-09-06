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
    "revision": "1c52375037c37e5d8efc1eea3787024d"
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
    "url": "assets/js/1.c0b5d950.js",
    "revision": "d37d61a84f6e48c925af94d35d54aff7"
  },
  {
    "url": "assets/js/10.ec8a8f80.js",
    "revision": "10725d97570939685fcf324a0fad16d0"
  },
  {
    "url": "assets/js/100.9b4471f1.js",
    "revision": "687421aa21893c29b30c0ad51043de39"
  },
  {
    "url": "assets/js/101.54c9d786.js",
    "revision": "cbb4575596617b0e31e27b9684372983"
  },
  {
    "url": "assets/js/102.8fbdd327.js",
    "revision": "5eb7cc5aad7273176fb7952257401835"
  },
  {
    "url": "assets/js/103.333818d7.js",
    "revision": "77a916f3e49d0c9c89c5992f2f268ef6"
  },
  {
    "url": "assets/js/104.fd17e094.js",
    "revision": "ac5d7a44b085058003c9d64edeff7552"
  },
  {
    "url": "assets/js/105.cf718387.js",
    "revision": "60683cc8b7e393e4f168156e69931819"
  },
  {
    "url": "assets/js/106.8569070c.js",
    "revision": "11402e4ea462f3d401cee3e855dac20d"
  },
  {
    "url": "assets/js/107.0e736a63.js",
    "revision": "36d0c06b4807a953d08555b246c65518"
  },
  {
    "url": "assets/js/108.93176b6e.js",
    "revision": "ab85ffdb7cc259e2aa87d84d79c41f9b"
  },
  {
    "url": "assets/js/109.4f1acf5e.js",
    "revision": "24ceeafe0b87e1627b036aff906151b9"
  },
  {
    "url": "assets/js/11.0df7468e.js",
    "revision": "e418f1cfefc1731f99c2f6163694dacb"
  },
  {
    "url": "assets/js/110.973157cd.js",
    "revision": "d0eec8360c40fd4baf999f6d14fc4f7b"
  },
  {
    "url": "assets/js/111.25b46f1b.js",
    "revision": "9e311aba12d94546fc49c08c56c63ac2"
  },
  {
    "url": "assets/js/112.ac723bce.js",
    "revision": "a4fa6b359bec45ac22ff4bedcd9c01ee"
  },
  {
    "url": "assets/js/113.910a7d1e.js",
    "revision": "a855487b1d69b2a6b50c7c7748f8950c"
  },
  {
    "url": "assets/js/114.d444a89c.js",
    "revision": "b798b628cdb0749b1c7d0662de871030"
  },
  {
    "url": "assets/js/115.d0ca4fbc.js",
    "revision": "718d804e150a65f1a723094be3a98f56"
  },
  {
    "url": "assets/js/116.2372285d.js",
    "revision": "c4aa44a3c5f6a003bd3103baf76f6263"
  },
  {
    "url": "assets/js/117.508f4980.js",
    "revision": "854579a0dab416ed42de073bc200ddc6"
  },
  {
    "url": "assets/js/118.126d090e.js",
    "revision": "34281395f8e32677be793b37aa1fcc20"
  },
  {
    "url": "assets/js/12.0657c490.js",
    "revision": "81b4a889c3f8b0d36fb2202e937e93d3"
  },
  {
    "url": "assets/js/13.3300c07d.js",
    "revision": "817d5bd8d12e8c09dbcdf52e3102ea04"
  },
  {
    "url": "assets/js/14.7e05f90a.js",
    "revision": "6661d47a4560e50aab8b3ddb1045371d"
  },
  {
    "url": "assets/js/15.c44d2820.js",
    "revision": "742d235b334a4be9fd346e2ea5aac642"
  },
  {
    "url": "assets/js/16.042dfe9a.js",
    "revision": "573454ae88d0b048a0f6eb5d7314475e"
  },
  {
    "url": "assets/js/17.24a5bd27.js",
    "revision": "06e52ab7fb007860f96dd4af22f26e34"
  },
  {
    "url": "assets/js/18.b6bcff32.js",
    "revision": "add61672a7989d18ea6c4c2c36c34cc4"
  },
  {
    "url": "assets/js/19.c01e90cb.js",
    "revision": "e6ab3c4210009ad5e998437d52d98ad1"
  },
  {
    "url": "assets/js/20.889890f1.js",
    "revision": "805cb7d8e40423d05fdd13dcec71300c"
  },
  {
    "url": "assets/js/21.c4a015af.js",
    "revision": "4a32b393ca5dcce68939d4618591569c"
  },
  {
    "url": "assets/js/22.eee48af9.js",
    "revision": "6e631a1d2ee4d65b24c6ca739494128f"
  },
  {
    "url": "assets/js/23.3d8acffc.js",
    "revision": "23e52be1f96355a890f6daa82f8b2ed5"
  },
  {
    "url": "assets/js/24.64b9b151.js",
    "revision": "44ee7638c0cd00415e9f0c0f3b4b89c3"
  },
  {
    "url": "assets/js/25.2c2e1801.js",
    "revision": "4c0791c3b231a70b5037f7adfa254e43"
  },
  {
    "url": "assets/js/26.5a147403.js",
    "revision": "f83d3ce0501dc114ccb9c21f860f3366"
  },
  {
    "url": "assets/js/27.734d775f.js",
    "revision": "bc5fbbf14fd451cc1c514ccd9ff7bc76"
  },
  {
    "url": "assets/js/28.7c6c2b4a.js",
    "revision": "558ef47f7109eec351e1ddd8a406052b"
  },
  {
    "url": "assets/js/29.d60646ec.js",
    "revision": "59439b81f37b65232d099387c21c4cea"
  },
  {
    "url": "assets/js/30.db64c56b.js",
    "revision": "0dd7f6cc2ec8a47e940fd2cf2ad99a47"
  },
  {
    "url": "assets/js/31.8ffc13a9.js",
    "revision": "0c5f4382d57fdef844c7028657880a7b"
  },
  {
    "url": "assets/js/32.c02d3234.js",
    "revision": "91a9993d67c84bb6cf4eafdb0c5760a5"
  },
  {
    "url": "assets/js/33.c9e80351.js",
    "revision": "101fca7e7d439e7ebff43f8a936cadbe"
  },
  {
    "url": "assets/js/34.1b7d71db.js",
    "revision": "562d0470aa2c85f79e69e133bd96660b"
  },
  {
    "url": "assets/js/35.a6e63314.js",
    "revision": "975b74ad1ef8bb808b49a97e49dc329c"
  },
  {
    "url": "assets/js/36.81757015.js",
    "revision": "df4c9fb73043a76b15667919fc172a8b"
  },
  {
    "url": "assets/js/37.7dd9dfc3.js",
    "revision": "ab1329723226bad12c20ef72fde4b50c"
  },
  {
    "url": "assets/js/38.54776840.js",
    "revision": "579db8cb6115e6c9be1d77a5484effef"
  },
  {
    "url": "assets/js/39.2602c28a.js",
    "revision": "09efbd22e56a283c041a23b5e3b7e210"
  },
  {
    "url": "assets/js/4.9471ec20.js",
    "revision": "6be03bf85145b9f512677763cb0f492f"
  },
  {
    "url": "assets/js/40.b7b8e240.js",
    "revision": "8ed6342571ee0d6b353ec630499b7c76"
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
    "url": "assets/js/5.b53f5c4b.js",
    "revision": "7d5be4984e04da40989b14e37a49c35a"
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
    "url": "assets/js/6.7f3481d0.js",
    "revision": "55690a1b80b65c93bb64e653c1947d80"
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
    "url": "assets/js/7.1f34f222.js",
    "revision": "5878717618fd5f722420c20139b36f65"
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
    "url": "assets/js/8.404336f8.js",
    "revision": "54f09ac0686bea47d0e0f08a45353d47"
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
    "url": "assets/js/9.8e6524b9.js",
    "revision": "abfda51cfe60aaf5f8a61e7cf5bd0fe7"
  },
  {
    "url": "assets/js/90.12b6e128.js",
    "revision": "1d687d490c9074fa75db2f81a1bd0d53"
  },
  {
    "url": "assets/js/91.9160c8a2.js",
    "revision": "6272edb28e1516ba6a5c61b72d4afc4c"
  },
  {
    "url": "assets/js/92.d60c1109.js",
    "revision": "bfe360a6b817d0bde7f3b286a01e5b91"
  },
  {
    "url": "assets/js/93.a9febde5.js",
    "revision": "1d61239a282e0b0550162a75bc965736"
  },
  {
    "url": "assets/js/94.fb185b8e.js",
    "revision": "d8da75f6f120cd2bb8e6ea2ba2ae6852"
  },
  {
    "url": "assets/js/95.3c6a4a8a.js",
    "revision": "4943ad0a1580131f2ca4fa5fad87ee72"
  },
  {
    "url": "assets/js/96.8742b293.js",
    "revision": "9b8f8481c4ce5f48930ca089b865b5d8"
  },
  {
    "url": "assets/js/97.2a74324f.js",
    "revision": "2bdad37cbf03db69c9159a48c32f43bb"
  },
  {
    "url": "assets/js/98.bbfbc549.js",
    "revision": "55d6a771852f242126740af3fba96b4c"
  },
  {
    "url": "assets/js/99.349fa7c3.js",
    "revision": "057ab04b31322c4fc5a1779c0d57d989"
  },
  {
    "url": "assets/js/app.1abb6398.js",
    "revision": "26940d521de1920457e7f1b08b4559aa"
  },
  {
    "url": "assets/js/vendors~docsearch.a403f7f3.js",
    "revision": "6ff900cd13d26d82dba0d89f26f32ba2"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "36fecca60461039e4bb0b7927963161b"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "54d63596ce05c9840d411d07d9a27eb5"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "88b9b3de2dbf8e924b9a4f954e9a25c0"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "ca01834cdd622883d4fa2f746e142219"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "31b1a718d59d867fb5bef037a1ca600e"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "9b6050ad3da051f5fe64695264003c5c"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "891386f393acfe02b8ee5272e4e503ab"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "8093cf7d26021945d1cb057904dffb12"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "3650f0609ab0ef5c0e98fb217cab1f36"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "87b4750a266d96930c40dca7a1d30df3"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "35581318270363d00e4bda68f908ff31"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "7e17bf49cc82879a3c699580144179ce"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "5801327802ce7a55cde874d3f29b9b76"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "f3e5054add589c4ad29c85cc9717e982"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "d77e9e926870ace90d50464ec46d07ba"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "ea735b2d58518a82e5f0fc7351849771"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "f52e2e7efdb42871da7f5f5e63a9d3e0"
  },
  {
    "url": "impressum.html",
    "revision": "18ad145c194fe5251932039f2ceadfe8"
  },
  {
    "url": "index.html",
    "revision": "2f116298f597ef31667b6db823e0b70f"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "c5d4069a6645daf4ce9f793bd422a4dc"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "8130cc4dc3fe02807f73e062084520e2"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "1c067611d4f6ac191530c7da909dbe0e"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "f62ba58ae0f0929f690350e9d5b77de4"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "31f4d4ba644ceebeeba7d3a01fb55142"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "034337e1f6f4ca067d7aed7931123a43"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "3f7f029f2848f6b1267f38ab18a09e87"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "818e2a441cb8660ac1e521c0465e7500"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "7b44e4af719efa06afb84a0de19f504a"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "076add4dfb002d1fc33b2caf61160f1f"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "2ab17dfe9d4520633eb5ea30219c9f3c"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "f331ae9e53b779e0281a7ee73f10029d"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "16c318fcd6c620dae1520f09dea165e5"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "de1e119961b34c17d3c7842ef621f433"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "1113b5f5c27a78927d26e3911d7dc9c7"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "b5790d0c41ad1da9fc206c3165a828fc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "a268be6da28e03089225b2f10b98bbcc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "59e8767db70fa82f8c0cfae946691c89"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "60ad6a0458cb43af5ec655178603dd38"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "a05208f0dab1340f14cf088d4297291d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "9b99115c6c1845ce34beca748bfdaf87"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "34f40a5aad701c1d3817d94b60b6e487"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "79bab45a38ca3415a7f8963a2a551009"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "68f0ddb20b4ad37e9a3700d6e1d477d4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "d2fd52be100787fd8c0bebaae1cad102"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "774df6a17c9c5f9d992ad8d74e29ad8e"
  },
  {
    "url": "Projekte/index.html",
    "revision": "7b9354e7150deed8fbe73f6fc8805a91"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "e75da2de95c3621287452ae746889f01"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "0d534387360890806213257bd55d6935"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "c083ba9b35db26b035178e67fcce64d3"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "961af98fe82627d36de46c550bc1bb56"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "7ea8e85a4ad15e105ab6e5f34f1bf280"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "b822d3cc765236d7fa3f72f9eb1132b2"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "ecbc2eacd39e7d4c743ac585df9cddf3"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "2ba0e0a54e1d4d2ae631c441d82d1386"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "a8fcc02f69307225652ef84f41989214"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "3dd37c6b89d9162cf715da7547cbdc5f"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "21dd182ed6f61cac980efcdc35ac16d0"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "4a2b1f38a8861dc4e6badc7f5e3deab5"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "537f6384ce25ae87a03a4e404791b2ed"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "02eb4decf2b301a67b3974f657f90270"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "a5c413930c9f6e66480cac87e885dd29"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "e97f2dcbdc23e10da93c0db5aafc2330"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "e721e7c38708924a77c141d518ac1f79"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "3c90cd34986e762317dd81a923683132"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "6731a00c0904c5cb0ce398b4538b29b8"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "d83ad897af5246a587ea32281a056a21"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "303493862e8971ac5b77fa58e2f25337"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "c7fbe5f33bbc3223c9248026fc0c9af0"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "759a9a0ebe838146af9fc83acbba2d57"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "ed04a8231ac64cb9cd0f7db51f7fabd2"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "3ddd2daa17a5d67d70fa1c5013e0d47b"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "262ac489b5d16135e60fb2629a1e7f50"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "2b2de471bca2c81f8705e0124e739798"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "2e14421b27cad5b71c71f6e711a30f58"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "3b780ec92dc0a08309fd9ef99f3fe478"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "679c35018aeef03bdb1af2d4aae61c42"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "9f35e0be02f3f9a016ae319ea3246b1d"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "2c77ea6c5c3599d02c8a00a717f25277"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "255b0d360c24d5d986fa648ffa4219ed"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "b0f1fd58f9c77cda33e3b449c04aef85"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "ef4c334d20c15fd8c015a0f223c5f1fd"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "34be64083242bd0e7434f14e13f222de"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "c22e015d4db393cb90d8ad973b26c8ac"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "1c94736515368aa87001fa33364c540a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "e437f5236111865ed0424250d754d788"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "0e4b8599ce5fdc348c407247782e96ca"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "5772c69abd3b0db55913eb7cea430cd4"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "7a8eb97428c1329faf281fa70daaa20d"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "1cda44611fe050c5e183eb36f3a83773"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "aa5ffef4e37ab0bc3468aeafcac20c2b"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "5aecb8e03a1af2a13d60b6eada23a3d6"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "e906381117973540619fbe1a349c9f38"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "4cc6300a0f70a93f8b235ece15b75891"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "926fdd58a4092b3fd13335b3aa1aad3f"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "60fddadac3d489bcbf3f0e6188de9414"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "6cee76e83547d98d498d663b5e8f15e5"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "cbd4d2eef4ff078c9e650a4560794079"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "adb50a96716f2eb7e5e6ddba10f5176c"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "5e795e6733f78b6e2fb08e08c413d961"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "5b234a4d58779d5874f243172705b1c2"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "7d1f6cb1e1777ceb5dfbdaedd6d94d2b"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "eb2aa1f90807e3ecc866d46b674bf140"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "900aa700011b8f42f225eb785834df92"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "4987a7353a6b8651e7b8bebd5eae2b20"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "25e953744ee9ad5c23f1ba9104b6706d"
  },
  {
    "url": "rftypes/index.html",
    "revision": "d54e5be5e5a98ca40f31180b7cca0491"
  },
  {
    "url": "Sketche/index.html",
    "revision": "eddef698dc3822a1982f558bd0aac587"
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
