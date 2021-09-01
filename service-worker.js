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
    "revision": "558ee4e3f34433c94b017a714038c1db"
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
    "url": "assets/js/12.755fe7d3.js",
    "revision": "a7bd2a14e1ca926ccc4c0ba6dfd9ea34"
  },
  {
    "url": "assets/js/13.55a855fc.js",
    "revision": "1fc12c2a3e46ba1981408f626fe91a13"
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
    "url": "assets/js/21.d151d0eb.js",
    "revision": "2c17faae9571af633f8d78ab92490eee"
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
    "url": "assets/js/26.3a388ea6.js",
    "revision": "2e56dbfa12e503685d4fc68de3275609"
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
    "url": "assets/js/30.c973f026.js",
    "revision": "7bb12385b503d809a69783607df82342"
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
    "url": "assets/js/4.937979a8.js",
    "revision": "7f97e9168998e223f0732866784c92dc"
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
    "url": "assets/js/50.04d27fb7.js",
    "revision": "82982c18bbcd74e5f2429c873b6bce55"
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
    "url": "assets/js/app.c2f02a84.js",
    "revision": "070e35abf43a83757b660a929f8d1fe5"
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
    "revision": "c6e8ad56cbdb1b84e0de7cce15c05172"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "975526a03e2494da31f4afc8915efce7"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "27f77ef5e35c922813762842960aa5ee"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "07c6c9c7c754009071f86ff497759096"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "d3554c9c7fd22ba808b17a9e90c31f17"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "2fcb2d5cd84587932eda6cca758637c0"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "f859699af4d77f9de893c76ad887f8ff"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "1acb49d3120e2be9eec75e28e7e8c10f"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "bcef1353f806d2aaf8e24a1075595294"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "4079932dde6d3ecfaa1e9298dc217736"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "b3a8f6632e7a12f17fe242cdb32a6c02"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "14beef375ef96b1bf9d10922bd756d3b"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "998012fb4862e960ceb07fe3c833778f"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "1f951ef91085845858f79296649b9dd1"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "96e3fb45bb5cfa9db6576fb279dfa7a4"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "0864578747e1f240208c3a84322626f8"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "0fea0cf4b43cd9513bd87b424d3db696"
  },
  {
    "url": "impressum.html",
    "revision": "9208a975ee5936f738a6f221205e9ec1"
  },
  {
    "url": "index.html",
    "revision": "d5d65e88a3315aefa52bfb1f190209ba"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "aa879557788f89a8b418a57ad855d6ab"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "0edc2f1f6f1db0ad8f48b3fb3a44ced2"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "49e8325c363073402435f79df3ddb26d"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "fe8f7bb759fccb2b1633352e1f2fc84c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "9241be196622aa5f4ca3df62001eb482"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "80887b8e4fff6a4546a5067100ab4e5d"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "8edf146b94a27f9f4aada8e6b073405b"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "5323b374f81904696d92d1b716a6136d"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "35af7aef5bb57426776b6eab8f66de27"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "6719f51d649f831f715d27d57800bd36"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "6dc1779b94059224fd91a6262b7a8402"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "80c3888f97b911258af935a1673627b8"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "81d0cb5b351ca40c44bc9ec15efc18e8"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "48842ecc48edddaf0a347cda022f1104"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "08791fce184b82ca26b247cf1d19f8b0"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "ff6e5bb8b832d6e9b133f8f565c744ce"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "d33f43c7cc5ba22cda956b4f02ddd5e5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "1dea2bf2227a8509f3ccf3f94cca6d11"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "50c5f2ef43862f6d54b5b7e758d856fa"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "ba95761c0d41516bb122aaeb747f376e"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "34e688724bdcde6820807a681e7e38b6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "480cdf92d9cc1272f295437896e408b4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "5115dcde4b74aa060f8b5d54df84bfeb"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "8e10d35184d632ed6fd3c3592736f532"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "8def4a88366fcb94de0bdd68f6863116"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "e840216491f9c63bd3f853d639811eba"
  },
  {
    "url": "Projekte/index.html",
    "revision": "303cc0395259f53d7b43da284b50e7ca"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "ed9e7088d611a005771a69f95b538d8c"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "4e4a1c9708cb20cbd6c3d43f2320dd17"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "9a08b011557240b0bd035ef0d3d10d40"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "43e576389365ea1934c41d0bf69f7bcb"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "871adc5782f11549681bbc249246a806"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "21742ea2de9e454e0d22ea386b7d35e8"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "68c094f17decc3e38f36da916cae581d"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "eb398bc208db081d3ab8ab274f6df5f0"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "b456511d069edc5baa7fbdf927d66766"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "29783654c0d96a59ba09a014328e9e4b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "4d630ea6bdcf936946f77c790c388220"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "79649178787a386036dc520849c956ab"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "9fe8bc4e0a87965799cba35c6eec98ad"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "d9600547705553590bbe0c5c3b589831"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "fe437287bc2ceadabeb38bf366d79203"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "0fe21921b6019d3d802951af4d04c972"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "185986f3ad482b3dee77022f2a27f956"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "ef4a627e02de4e19787b8962ed764e98"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "967489e19519b13444069556477cd870"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "0035e2c22ba54f4b91dbaab20eef24b7"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "a6f0407f6f25071d1af52a4d86942800"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "d1aded2a217d29d6751029a42a62e5be"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "18ec46256eb6549d80a159d65958d32b"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "c4835ddf77ea02e82a60573504cab68b"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "16b1697264d33ae5b7cd10d7b342661d"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "6a0519b39500ad2f1062887b3c0805f8"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "8e988168e07722060afd7ea7c0ae85fc"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "b4dad052d8cc5e9deb437b9681df3ed6"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "7c38244fb4d702a23a7652a95d535aea"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "9ac43b845edb995d5d63166ff1d971c6"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "132b0d29c16b65cab2e24f2baf669589"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "3f1b2ef2b79fed0f3ced625c18377a8d"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "a558e812f8e36ad465076513fbba567e"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "216f65c8eac52da6f47f6bc33e186a93"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "6c4482bb0aaca192cdbd46872e6e9856"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "165baf5a516c30014e630cf739da6a70"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "106059ca5c187cbaaf47e572b8e1c9d1"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "c1e17889773640f414a4ee854def4ea9"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "1306de29ee9208ff9ccaa322ea1e21de"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "c61473e1189fefbcd3c9fdb8bfc34c0d"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "e57e271003c7524aa76f2473dab6f691"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "6f220cac85a6d99871084e24943b329e"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "c12c7eb08b0f12dabfa99100f523cbbd"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "72e64491e0290c9165faf85973868ea8"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "6b15aea065c8c6987dde180b5eae125d"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "b9a41e91008d28bef455a38eb51bee6b"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "8b8c682be6ce2dec0a559e916164460d"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "be3e7dcabc87d470ec3f9dc61680c4e0"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "385bddde85b819f69c1b1f945ea94301"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "b4310f58642570b18a4a884df9216b09"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "941fac2d6dc56fb2c8ccb4faadecade7"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "7eef714388afb9ff536a56dbb5b0462c"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "555154643edeb6d9af4f022de1c7f40a"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "d323414917a046172c6910594ed5d975"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "52fab1ecf6a348c307078d84e9658218"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "b275a45f493572d9335834fa6a19a0d0"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "356d5681a842dc71f270282af8f2f078"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "cc6d8ab6a711bef83fc4646dfa8c8448"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "015f063c9430eca831bc90348122985e"
  },
  {
    "url": "rftypes/index.html",
    "revision": "d9aaa8730bd6134badd91572bcd60904"
  },
  {
    "url": "Sketche/index.html",
    "revision": "afb275c332589c1cf27b8f312eb3ec6e"
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
