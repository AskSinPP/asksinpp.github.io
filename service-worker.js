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
    "revision": "0071a44ea44238dfc16e92109d7afbf9"
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
    "url": "assets/js/1.a1900e3d.js",
    "revision": "10ec4a3a898389fd7468e7755530cbb0"
  },
  {
    "url": "assets/js/10.18c08864.js",
    "revision": "1aea7865fc19ffba2a656024d4b9a96d"
  },
  {
    "url": "assets/js/100.3bdf6acb.js",
    "revision": "d22a0f0941c90a9a8c67daa6afa08200"
  },
  {
    "url": "assets/js/101.96cb8d31.js",
    "revision": "f976dd306d225e47493d7292bfdec592"
  },
  {
    "url": "assets/js/102.45f4f31f.js",
    "revision": "c395abd8310bf7d44ec1e83ac76269ee"
  },
  {
    "url": "assets/js/103.a2bb7a57.js",
    "revision": "835c4728bbe29304d3c2536f348a28cc"
  },
  {
    "url": "assets/js/104.8e4c6299.js",
    "revision": "dcdf0ff5de716facf0734b9f2ff29ee9"
  },
  {
    "url": "assets/js/105.28b22872.js",
    "revision": "28b984da41676ca4e229b54970bdb274"
  },
  {
    "url": "assets/js/106.42e043e1.js",
    "revision": "90b17e5531070e086bbc60ae7f930908"
  },
  {
    "url": "assets/js/107.93011af0.js",
    "revision": "9910f2992b8b68dca8ef6d154fe348d9"
  },
  {
    "url": "assets/js/108.45620376.js",
    "revision": "77e1a99412450368e86624c2da867d78"
  },
  {
    "url": "assets/js/109.b6681f43.js",
    "revision": "1119a63c6f7d324d2628a8d08776dc64"
  },
  {
    "url": "assets/js/11.0d16fe64.js",
    "revision": "d5e49b149c13b99d4d5f56cabf193645"
  },
  {
    "url": "assets/js/110.43c83a22.js",
    "revision": "a282331060d919992acb6e40a4b5c48b"
  },
  {
    "url": "assets/js/111.168fb6e5.js",
    "revision": "2d339e3ed75ed38e155845e754207338"
  },
  {
    "url": "assets/js/112.68f76a15.js",
    "revision": "48e2be49eee95a469088c9b011182caa"
  },
  {
    "url": "assets/js/113.1afbba3d.js",
    "revision": "685282d469cb2dfed4455b7694d95c3c"
  },
  {
    "url": "assets/js/114.1665ea5d.js",
    "revision": "0e330574938a5fdfe73580d6bfd2d71c"
  },
  {
    "url": "assets/js/115.e09caae0.js",
    "revision": "5d4bc6392a54cdb37a836b94455efdfe"
  },
  {
    "url": "assets/js/116.c1845cbc.js",
    "revision": "02226ed7c25f680caaa600f39845d473"
  },
  {
    "url": "assets/js/117.5dfdaf9f.js",
    "revision": "7ce4f2963354d3ed8a6e72d6709b7f02"
  },
  {
    "url": "assets/js/118.b902182b.js",
    "revision": "da0152b4572991ed8736b867902a9109"
  },
  {
    "url": "assets/js/119.94fe014a.js",
    "revision": "f2de5cbf5bd98cfe77879768e92d7272"
  },
  {
    "url": "assets/js/12.e866c7ef.js",
    "revision": "8fac60b70404bcc513b9ede6f6b690b0"
  },
  {
    "url": "assets/js/13.a74e4556.js",
    "revision": "77e409dd806fb794803478cacd68d96d"
  },
  {
    "url": "assets/js/14.0937896b.js",
    "revision": "2b2ef64849321405ced124982f1dc884"
  },
  {
    "url": "assets/js/15.6fc3daa1.js",
    "revision": "6c5778d953a1878c1d47a71f06498743"
  },
  {
    "url": "assets/js/16.d61a9e0c.js",
    "revision": "f4f4bf7c16695aeae494e8f450a92068"
  },
  {
    "url": "assets/js/17.d5108a39.js",
    "revision": "599a238bea36610eb3cee2af90dc17e2"
  },
  {
    "url": "assets/js/18.65f213cc.js",
    "revision": "f8f89e20c9aff1575aa7e1e6115152f6"
  },
  {
    "url": "assets/js/19.d23c18f1.js",
    "revision": "a753d8a5b7ca8c73ada35d51a815e056"
  },
  {
    "url": "assets/js/20.652c183a.js",
    "revision": "22e411af06d726c5ceffb62524024912"
  },
  {
    "url": "assets/js/21.50456d1d.js",
    "revision": "f13b6484e26f48fe376990069887a545"
  },
  {
    "url": "assets/js/22.660bc941.js",
    "revision": "40a04ce47b54b9e01be3bfaec5d6364d"
  },
  {
    "url": "assets/js/23.13e4bdcc.js",
    "revision": "06a4eb5e29a9d9676d194f7162f698a5"
  },
  {
    "url": "assets/js/24.1380a00a.js",
    "revision": "99ee267b3099cc4cd8ab6483db16a7ec"
  },
  {
    "url": "assets/js/25.d75b97ed.js",
    "revision": "f77e189b4c570e032178afef9b46ca8e"
  },
  {
    "url": "assets/js/26.10680797.js",
    "revision": "2ffc0a0913e525e3e6886418e6681fa0"
  },
  {
    "url": "assets/js/27.075114f6.js",
    "revision": "297d9cc3001e48a04117b9ff513554ce"
  },
  {
    "url": "assets/js/28.92aba2bd.js",
    "revision": "a11e7faafd963a05bcd31d9afad3e7fe"
  },
  {
    "url": "assets/js/29.ff7350db.js",
    "revision": "eef94a9fc1bd3b27195fb90dbb7e0ed2"
  },
  {
    "url": "assets/js/30.4d43581b.js",
    "revision": "6095ca240aa4864c68cee5fac81b026e"
  },
  {
    "url": "assets/js/31.15a1e647.js",
    "revision": "fb78b8ccd8c82c49928be5beed893c68"
  },
  {
    "url": "assets/js/32.e4b83931.js",
    "revision": "26f8d8452c21f7ddd6fef2bc9e278d46"
  },
  {
    "url": "assets/js/33.f14c7c9c.js",
    "revision": "f9bdf17cd49d1d923edaa3bbd5c04b20"
  },
  {
    "url": "assets/js/34.ef9126c8.js",
    "revision": "685d1562854c46a55cb489131292e974"
  },
  {
    "url": "assets/js/35.82d6cf48.js",
    "revision": "7ceb7501c94c0307c2088171430e4a75"
  },
  {
    "url": "assets/js/36.1f20befc.js",
    "revision": "10c8fcd0fb5b030c6903b3aa37cdc855"
  },
  {
    "url": "assets/js/37.28a83540.js",
    "revision": "5438761fb5719499e1df47385de83937"
  },
  {
    "url": "assets/js/38.0ec517cf.js",
    "revision": "7108e1f33e6fb44f7269b7a4e5060d17"
  },
  {
    "url": "assets/js/39.b2df9996.js",
    "revision": "2c889e4963c575526516802e01dbfa87"
  },
  {
    "url": "assets/js/4.148e7263.js",
    "revision": "491537db924d076236de8520a2b28d5d"
  },
  {
    "url": "assets/js/40.d3632f3b.js",
    "revision": "d6c52fb59bd162fdf8eff98f83242c66"
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
    "url": "assets/js/5.865d634d.js",
    "revision": "08735d51b603d6611ccfd733f00f5ba0"
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
    "url": "assets/js/6.8dfdfc75.js",
    "revision": "5d044fc8e73df8e1ef9cf38ca5c163a1"
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
    "url": "assets/js/7.596923b0.js",
    "revision": "6211c08e1cb02e70b80777cfe4c5dad5"
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
    "url": "assets/js/8.312f9b81.js",
    "revision": "181012746fabdac9f72f88f90ba07809"
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
    "url": "assets/js/9.b3996ccb.js",
    "revision": "69214519c889520542fa728bc75e7643"
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
    "url": "assets/js/93.665c8490.js",
    "revision": "83b6047639ec8d0b53bbebe69afd8e42"
  },
  {
    "url": "assets/js/94.f995e226.js",
    "revision": "08ce79a64014dc6f334d76a74d47faa2"
  },
  {
    "url": "assets/js/95.50b3f304.js",
    "revision": "d95823df071fb471fb196fd843623ab7"
  },
  {
    "url": "assets/js/96.d014febc.js",
    "revision": "8037c7e37d117b4e662b769a353cbea3"
  },
  {
    "url": "assets/js/97.7eed3e83.js",
    "revision": "0759ff7cf8317ea8bb27fe33ffd549ef"
  },
  {
    "url": "assets/js/98.ea869b6a.js",
    "revision": "a1e3d85bfd2faba6b128d54f76702423"
  },
  {
    "url": "assets/js/99.b2913aeb.js",
    "revision": "4d6ba74a586cd4314341fbfa52cc881b"
  },
  {
    "url": "assets/js/app.6340a498.js",
    "revision": "a0dd5ea02784267d113c6d4e36be0f30"
  },
  {
    "url": "assets/js/vendors~docsearch.96c4751a.js",
    "revision": "010c1d291913ac919d372ac73d426599"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "f0435fc29e8138a758106a1f98d0ffbd"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "60ecf4ee48632bcfc70513e1f4197a69"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "4dc9b98708aa4d135f4f33baab4e8919"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "c8febffdae1377617aea559376f1707c"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "c17f619ca4c29ed7bfd4684489cad5de"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "a4ffdf5f44acd32efc76366066f53b4e"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "da04a7b0c2d156c008bd6a52760b089e"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "01ef7855dc355a2600ad3ec612988e6d"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "8787422a4a90aac65c65aaba70333107"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "6b80ab181a04c103e48108d6ea881e72"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "69ec7303691ea5cc0d8561e7eca9ecb7"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "cfc75002c28a6be83ace6719511ed5fd"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "1711e94367a580b324d675f7c1c99e58"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "dc22e5eae3b315e31b7a64e5b332322e"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "32c7abef46708d1d1d44c260517b3071"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "f3459884264c0b0949bf149613eaba85"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "63ffbaaaa454eb2e8aa48780168828e3"
  },
  {
    "url": "impressum.html",
    "revision": "f6fda4b10bfd36ce5d0ccc5a9847853b"
  },
  {
    "url": "index.html",
    "revision": "593c9771792154f45ff750510f47b49c"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "cfa473d7a9f4eeefde4ec2b99d6e89cf"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "ee26b87cf65efe621af3fd46e530dc6f"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "c33b05fe24dae348a4194b3c8d619777"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "4ac16e94feb5630a48c9f59fca16346b"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "a401d7003e5f90b260ea6831d4281605"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "b8b0fe49ae584a6dcee89fd18b287607"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "08e360c0db841a05119cf93fbedb9aa5"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "35f58ff3cb17a406b5bc9d685790b395"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "4ff1a87e6e1a7d8e9270d82701e11c5f"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "a1599b4dba2adf92874b7ff85094bc0c"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "8476e3013014c12f0c022550ea4a6353"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "c8e3693b004bd86ca60da53f5176c58f"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "b415a467185f6cd28cb195e0a77f90cc"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "a56e639985296f429564ca9be7251875"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "7d52e1e69c47976033d2fa3da9f7899d"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-SHT85.html",
    "revision": "2ad1bf5ee389b66fa3fd46281956300c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "7b10139f9807873a8cb85747950173f4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "89e09868b656987e532f10e863c2a7d6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "943f58def4e5861ce226f4e89e74edb6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "6cf4e95cb48d59f87319f6a82e2605a5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "8ef008592a0de7a10486c9e6139463a3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "b31689317b0e5a88ff1d0e4e75b75ca6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "bd16ef22f1073404b9f7d482ba5ee314"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "fd2a5078af8216582fb0bf334368f912"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "532031ef2c8aec6ef339935744087a9d"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "03170a754bb3ffa9e142460b829d632f"
  },
  {
    "url": "Projekte/index.html",
    "revision": "8de0f728dd9affa2b1eb18ae9fe3df44"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "a009e09cdecbe1eb54baa8f82ae9cbd6"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "57867817a1743926f3206e23414db83a"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "8b56c49e7c01af6dfb14102f02632528"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "aac3926abbb3845f6964535b3735a6dd"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "92ec4bc31139253585ec7825b0955c7f"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "291a1440cdcb851da40257d9d99ddcb3"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "145157973764eeee97230b0a121f1a9c"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "59795c6991dc15658ee0260b1f334e22"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "f0946842e0fa77dd773f8b624757519d"
  },
  {
    "url": "Projekte/jerome/HB-RC-6-PBU-LED.html",
    "revision": "35e003c85d5446a9406b5d40c5dbf9af"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "26e35c68641df3f8a13d02c2eee6815c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "b61cc3bf842c64b620605bdfdc001618"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "c5ebbb18d8ccbb915c9e0016d6339b28"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "74c855150106bed2dec6f36b89efe408"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "a9113b87a438365d58d4163cbba6c1e9"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "22b9d86aa449f460ebff644ba2fc1922"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "a13212bc46ad37e9e8445be47bf2677b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "860855e64114b9e3b7accf5086bb8e99"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "d52b567ad1d3b56d9033488d2bdf7559"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "c2af9d2810c2a5cb36ed7903d826f10d"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "6cd25a64e0d0b6f9b3012508202641f8"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "09fb548649ad09fd91deaab23141bd4b"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "17edcc053352ffd60404b93a4f6c5cab"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "0216077680ad72b4bd95e0a258cdd594"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "2e7ce3ceaecd97a4666c0a8ef4b1f6f6"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "8ad903b50f0e15d3888c11ec4cb63cad"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "965996cea0456b3103bcf21d8a6ad537"
  },
  {
    "url": "Projekte/paso42/HM-Bell.html",
    "revision": "e52b89e5d03b47b5a124eb810b581157"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "a5091609e822239c439a87a6cd1afb33"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "55fbed5a8e6efe8bcd40db51df29d9ba"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "be9dc218f6611a6213e917635e650463"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "ac420e8693dc4e9dfe8721d68326394c"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "82745f08befa81d14bb678c1e51038ed"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "9cb5b31376317de8acf1b68958283722"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "ffdb7e9054d9e89f20199edec5f1848b"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "0fd1edf66a2fa13a2fe3f0c51eabdc61"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "25da130155598efbe6ac71d5510ebb6a"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "5f60294800646e501c2e9f8a544104de"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "c22a8c012040e64d04440d60f89f8183"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "6eb4ce8ec244d403ecbd21a55974364f"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "bd305b23c2a3a8a2555a3e02c1d0b9b8"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "81d363e3e97a7202fbc8d0cfec041771"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "8d7ddc0edeed94e8c2cd919399ce2902"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "f3d1ba8b360f1e918fa3df83f5bc67fe"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "390c5af9bf0c68a4e9d4ee3c22bf335f"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "476507040963ce2c20d149b0a6e5ebf3"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "005db6fd577df717a5914125fe274665"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "405a41e48bbeee52c848150148f6f38f"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "f12f61bb72b5796f6ea06d96e5ba842a"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "32b34de6eb942e8e45129dec5dce2cd7"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "e21446a404edcb321383e9bb9b5534e7"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "5e949cf3605f696d287dba05480e6aac"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "d3c5977d44ff3afb9e4f2add43e50db2"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "a31250f40639ad17b0702b675baa7224"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "bbff0dff1579136a48593add08718592"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "88748055f88e602195aded72e1c012a1"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "d25ed61e897b25e879263d212da4f058"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "f37ac334345e6e148af964c35d57c251"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "2bb4cd9c530bd19817d59738f143e48b"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "b64333940bf7b6d9c65dc441cdfc67c9"
  },
  {
    "url": "rftypes/index.html",
    "revision": "567b550ad2430c3d594b1c6f30eb06c1"
  },
  {
    "url": "Sketche/index.html",
    "revision": "3ad55954021250eb49e4c7265d51351d"
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
