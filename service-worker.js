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
    "revision": "0f430d4f253a3675aeca515c83287f2e"
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
    "url": "assets/js/1.2138ff51.js",
    "revision": "276b5546ea4a6a83cfd3f9eb98f1113c"
  },
  {
    "url": "assets/js/10.f1f1c3d5.js",
    "revision": "56adf6ddc357eae1839b6a332123d294"
  },
  {
    "url": "assets/js/100.b9c126ba.js",
    "revision": "6d46be4c1ff410b021d55dc0cf4a495e"
  },
  {
    "url": "assets/js/101.ffdf3a99.js",
    "revision": "6319982253560ba39a81921f08873c37"
  },
  {
    "url": "assets/js/102.20399fca.js",
    "revision": "af704df046b4a7bbff2774547b43ae6d"
  },
  {
    "url": "assets/js/103.56cf9852.js",
    "revision": "513de0820d305f7a6a8c677ccae3ce8e"
  },
  {
    "url": "assets/js/104.a8b8f351.js",
    "revision": "e4cf8af7da88b4b4db6503bcdf115be4"
  },
  {
    "url": "assets/js/105.a36fbee6.js",
    "revision": "b2c430494d54837b47acd40543307d68"
  },
  {
    "url": "assets/js/106.5a297b9c.js",
    "revision": "9c61752e721b84375edbad6496da2e94"
  },
  {
    "url": "assets/js/107.f5d5550f.js",
    "revision": "86b68a71ac5189ccbc000587a4acba55"
  },
  {
    "url": "assets/js/108.3bd46e93.js",
    "revision": "34b9d0d4a95aaf960e01c26c45fac52d"
  },
  {
    "url": "assets/js/109.88e1a734.js",
    "revision": "5cb8d4645e183c6cc0b5d64f0df5733c"
  },
  {
    "url": "assets/js/11.f4234817.js",
    "revision": "66bae271160720224a451e24d074e19c"
  },
  {
    "url": "assets/js/110.75398424.js",
    "revision": "f7c808f747b27e5518de95762d749251"
  },
  {
    "url": "assets/js/111.9880d73d.js",
    "revision": "8f81b7700c95b8dc0974c6844d11ac2f"
  },
  {
    "url": "assets/js/112.31b7385b.js",
    "revision": "227414ae67a76119aaf93534f7f00ebe"
  },
  {
    "url": "assets/js/113.11b5461c.js",
    "revision": "03e6f26559e1a1071ffa1137ff501732"
  },
  {
    "url": "assets/js/114.2ce295e6.js",
    "revision": "2072f1d4e619a2862cdf2dce21592ada"
  },
  {
    "url": "assets/js/115.86605c31.js",
    "revision": "5f16ae804d5fe3982128e7c891074464"
  },
  {
    "url": "assets/js/116.067d9eee.js",
    "revision": "5ef243e273cdf3b616713a870dc1952e"
  },
  {
    "url": "assets/js/12.5ee9ba71.js",
    "revision": "eccdcd1707cccfdcc61e946f6224cfe3"
  },
  {
    "url": "assets/js/13.4404b46b.js",
    "revision": "c65203b762b079acc5491655717bc029"
  },
  {
    "url": "assets/js/14.c939b932.js",
    "revision": "01a80d54c92f3a0b7e513283445b449c"
  },
  {
    "url": "assets/js/15.49899bcc.js",
    "revision": "b0221b05051579b59a51b61e87dd5ec1"
  },
  {
    "url": "assets/js/16.2df8e0de.js",
    "revision": "6c31ec21896afe78dcb1b35b942c1c42"
  },
  {
    "url": "assets/js/17.39dbc41e.js",
    "revision": "4c7ee5d49494758b89f9c484b5fa576f"
  },
  {
    "url": "assets/js/18.0287a341.js",
    "revision": "4aa06890649d44c51c9a37be300f37fd"
  },
  {
    "url": "assets/js/19.2d6eeb9e.js",
    "revision": "cae3f748be5dbdd05ae02a8556ff5a56"
  },
  {
    "url": "assets/js/20.0aef21a4.js",
    "revision": "91f48e56396b6a755fa56fab5e946a0a"
  },
  {
    "url": "assets/js/21.08bde2e9.js",
    "revision": "691fb8526156dcd70612b0d56fecb419"
  },
  {
    "url": "assets/js/22.31d13255.js",
    "revision": "873e11d223bc3edc5318fa6eb92ba1a1"
  },
  {
    "url": "assets/js/23.9876caeb.js",
    "revision": "6d3169574916df0e1fe4eb9a02551c28"
  },
  {
    "url": "assets/js/24.3dcfd0b9.js",
    "revision": "51b336a959a084a41e3d71be212d02ac"
  },
  {
    "url": "assets/js/25.d558d488.js",
    "revision": "a89ac4aed083bd4bdd8b379095149246"
  },
  {
    "url": "assets/js/26.e4044f60.js",
    "revision": "42445efabcc6a56b67dfbcba7704962f"
  },
  {
    "url": "assets/js/27.48b482bb.js",
    "revision": "d2667b6ec408b0e36dddd8e28bd9fba0"
  },
  {
    "url": "assets/js/28.c4b6d55a.js",
    "revision": "4b4d72e064fcdf80ca268e3505961061"
  },
  {
    "url": "assets/js/29.0083d8f3.js",
    "revision": "93239b1c434956d4810bcca1a91190a1"
  },
  {
    "url": "assets/js/30.9ba30df3.js",
    "revision": "aaafe2f9c85418c086186c4e263357a7"
  },
  {
    "url": "assets/js/31.ba69307f.js",
    "revision": "fa573030090e9e5c96d47e6dc1d14906"
  },
  {
    "url": "assets/js/32.9612e0b0.js",
    "revision": "7987b543220ead929fde926880cae856"
  },
  {
    "url": "assets/js/33.08f3d383.js",
    "revision": "2cd695879e6d6c0889ca8163bb9df05c"
  },
  {
    "url": "assets/js/34.f0b203f3.js",
    "revision": "21276ef1daa76b93b5c87bb3a20436e9"
  },
  {
    "url": "assets/js/35.5c792845.js",
    "revision": "8c219cfb1f203df1425b586f519c5926"
  },
  {
    "url": "assets/js/36.cf1659d4.js",
    "revision": "111977dfe17927663aad8264645b9ad1"
  },
  {
    "url": "assets/js/37.b4dcb45c.js",
    "revision": "395ccdda048a12b7888aafc2e1a678de"
  },
  {
    "url": "assets/js/38.48d23d1a.js",
    "revision": "a93a495e8cde74d7a2e4e7fc6143a391"
  },
  {
    "url": "assets/js/39.9ee56d9c.js",
    "revision": "be5de56b20f0f3bc3ba926b8a2a2eb27"
  },
  {
    "url": "assets/js/4.a4d7a3e2.js",
    "revision": "7b4c86e04bbc2a2c8d13f46f828329af"
  },
  {
    "url": "assets/js/40.9345eec2.js",
    "revision": "2942dcbfc4b0519897ec9447b1d57471"
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
    "url": "assets/js/47.b8bf9b7f.js",
    "revision": "d2b1580fef5adff97dc0cbc1fe567011"
  },
  {
    "url": "assets/js/48.984ca100.js",
    "revision": "832d2015d3c1543b703fa16a9ea4b430"
  },
  {
    "url": "assets/js/49.2833368f.js",
    "revision": "5ac2bc1f09a1d8ab8911487dc590171f"
  },
  {
    "url": "assets/js/5.16797eaa.js",
    "revision": "270591de8155736ef8c169f5722c723b"
  },
  {
    "url": "assets/js/50.673e342b.js",
    "revision": "96c8d277fe802d7b9096581ed04ec519"
  },
  {
    "url": "assets/js/51.c3e2320c.js",
    "revision": "bb8d858763eaaa686d46091ff8aa5d64"
  },
  {
    "url": "assets/js/52.b21e10d8.js",
    "revision": "30149015d265246f4a1e799b3b507b8d"
  },
  {
    "url": "assets/js/53.103c0edb.js",
    "revision": "8efbc7302d276e5583a86b5c4d14ed1d"
  },
  {
    "url": "assets/js/54.96742539.js",
    "revision": "e093781402f7995e91d533b0e2297040"
  },
  {
    "url": "assets/js/55.c5f441ba.js",
    "revision": "e316d4d21450e652967a7661013613a4"
  },
  {
    "url": "assets/js/56.46a50c9f.js",
    "revision": "33e65b49be4e1257d390b35a79f02e4b"
  },
  {
    "url": "assets/js/57.1816f087.js",
    "revision": "e9edde90aae63de6c6ab171ea8345b36"
  },
  {
    "url": "assets/js/58.a12dc6ba.js",
    "revision": "abb900ab3b15873e57532ea0ff220267"
  },
  {
    "url": "assets/js/59.265850ae.js",
    "revision": "7d9f5769c273dd5e802e76fd88b37993"
  },
  {
    "url": "assets/js/6.1c2268d2.js",
    "revision": "064b009e7dac0b226921470e52a5c6f8"
  },
  {
    "url": "assets/js/60.f3495ff1.js",
    "revision": "9b02e9bc85515ff980df8ffead37c0a0"
  },
  {
    "url": "assets/js/61.b8880d08.js",
    "revision": "d099a0f668c8f380a302a1908085ae49"
  },
  {
    "url": "assets/js/62.84b8a741.js",
    "revision": "debc79787e04819130e5447e8a6e5c6a"
  },
  {
    "url": "assets/js/63.a8a2cbed.js",
    "revision": "78b240a8792dab35ed3824aa2e687adc"
  },
  {
    "url": "assets/js/64.33de24a0.js",
    "revision": "1fc6b9b7fed0acd9722d5647385ef95a"
  },
  {
    "url": "assets/js/65.568ce932.js",
    "revision": "4049fefe44e4ccd94f928b3216efd09e"
  },
  {
    "url": "assets/js/66.3532e8e6.js",
    "revision": "31a0b9efbb99f5b8b42b257c33168147"
  },
  {
    "url": "assets/js/67.ddaba80b.js",
    "revision": "10e4839be973ac28e8d3b4bdb9ef4dfd"
  },
  {
    "url": "assets/js/68.9b6963dc.js",
    "revision": "8b1ea7dd8d9703f54bd3df6f71006068"
  },
  {
    "url": "assets/js/69.ccd1fff7.js",
    "revision": "6ab7573b9f4877972d3c9e17aa633d74"
  },
  {
    "url": "assets/js/7.2e2c9f9f.js",
    "revision": "a811df2fa1b5e634321440fe21955c42"
  },
  {
    "url": "assets/js/70.d96c123e.js",
    "revision": "5244cbe9aab7840ecf48833288c4f2aa"
  },
  {
    "url": "assets/js/71.8f0b32bf.js",
    "revision": "f4bf928b54b6953e6f23ceadcadeaec9"
  },
  {
    "url": "assets/js/72.ba70d11d.js",
    "revision": "009a025ab62c91db9a9c50d7b6713e4e"
  },
  {
    "url": "assets/js/73.aecff725.js",
    "revision": "365cc0783461f4fbb33d9f02fd1e7a04"
  },
  {
    "url": "assets/js/74.57f854f0.js",
    "revision": "d011cf02a5895d03df23bffffd9c895b"
  },
  {
    "url": "assets/js/75.79c1af8b.js",
    "revision": "657902894820f6a1dfc608899a8d7f37"
  },
  {
    "url": "assets/js/76.13d6ca8d.js",
    "revision": "18aecdf5ff0960ef608acefc5346e2d0"
  },
  {
    "url": "assets/js/77.246e6a85.js",
    "revision": "1e37ef59d835b37eedba03b7b2d15860"
  },
  {
    "url": "assets/js/78.05725ea1.js",
    "revision": "84be6611f3ff5b08b30ec8ce3b10d06a"
  },
  {
    "url": "assets/js/79.f9d9c6f0.js",
    "revision": "964310c95e8a12681173df090b4728fc"
  },
  {
    "url": "assets/js/8.5a64bfea.js",
    "revision": "cf68d452139830bf838244cf3e21542f"
  },
  {
    "url": "assets/js/80.03d249c9.js",
    "revision": "4bec726a03526d4d3261291dee31ec8f"
  },
  {
    "url": "assets/js/81.fb6e0b85.js",
    "revision": "88f2d69416db574e9229d17385980bbb"
  },
  {
    "url": "assets/js/82.9a2d7d66.js",
    "revision": "de025b91ba7adf861674f091c0d406fe"
  },
  {
    "url": "assets/js/83.9e2dc5d2.js",
    "revision": "150918117863e661b4bf3008fdea5547"
  },
  {
    "url": "assets/js/84.16e5b11f.js",
    "revision": "04037451c3b8a3d5fd1ee4e40f0d79e9"
  },
  {
    "url": "assets/js/85.36835041.js",
    "revision": "3e1054010cc818ea1e0bcc01fc60ad4c"
  },
  {
    "url": "assets/js/86.b4330e58.js",
    "revision": "52816df860c6dcff6de9d0cba65d5748"
  },
  {
    "url": "assets/js/87.20a670c1.js",
    "revision": "abdf2c1c504b74ca884f36b867db797f"
  },
  {
    "url": "assets/js/88.eb69a60d.js",
    "revision": "0e6c079f397a5979e146c6c1c405dcf2"
  },
  {
    "url": "assets/js/89.1cc284c5.js",
    "revision": "a28219951243dc9b377a2f21a521c46e"
  },
  {
    "url": "assets/js/9.3a6168ff.js",
    "revision": "c5ab909f1795ef1fa5ae7b452970d7b6"
  },
  {
    "url": "assets/js/90.6d73e1fe.js",
    "revision": "7fdd858e712508d214f7b407295b6d1d"
  },
  {
    "url": "assets/js/91.d140fd0f.js",
    "revision": "796f0f550d5f7480d7b6d30eb48b1b35"
  },
  {
    "url": "assets/js/92.be34ad53.js",
    "revision": "b6ccdc42be1b5a18c2f631364eccd21e"
  },
  {
    "url": "assets/js/93.8861d62b.js",
    "revision": "2176c3ce4454239176044acb4692b623"
  },
  {
    "url": "assets/js/94.6915cd8f.js",
    "revision": "1fcfafb7f78a2764834f90d9e024ac37"
  },
  {
    "url": "assets/js/95.cbfdd18c.js",
    "revision": "210fd091e4545f9a846450ffc98e397b"
  },
  {
    "url": "assets/js/96.d4b3bb05.js",
    "revision": "ff43e0414a97f9f01d0ff1d08994fad7"
  },
  {
    "url": "assets/js/97.5740f7d5.js",
    "revision": "afae358afb1152cab2b79b6fd989b005"
  },
  {
    "url": "assets/js/98.f14540cf.js",
    "revision": "6e349e972189246a1705105db2473f22"
  },
  {
    "url": "assets/js/99.344c0638.js",
    "revision": "5128a60e3852d28953c8aba0c5373b62"
  },
  {
    "url": "assets/js/app.3eb27197.js",
    "revision": "6213a21aabae6d14f494d090a30bd249"
  },
  {
    "url": "assets/js/vendors~docsearch.afb0a24b.js",
    "revision": "5afd71f17b6770108399fb8b99be7428"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "a72077dd54b42add98c9fe7dd5df2bac"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "c68235664d1f962444a4a6fe8e818ee7"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "13c183b8361f9c5f3568f05091c61a0c"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "19a8daf38ba93d1d29894c263611bd58"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "93a2d6be005342ca385b58a481e98007"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "e7945567a78a1a0e2d99a3e6486efa06"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "c43339083f2767583ff21af1a80d7a97"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "733b12f1d17f28ac90eaebddb6e6cdb9"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "c22e293a4d2e89e0d2f01b7f36b42768"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "c0d3f2c926c20e1c9f1768053b8fc28e"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "af712412b30a06074d29d59c99e20df8"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "2211aa0fc0c97f7cf4f00fdc0cb1d2e4"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "29c14b6905f66e33351f1108c04d6f61"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "28c13f392d184d45f74516383d3f60b9"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "66efdfd11d3d611dc3a265189fac6a0b"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "b05e52493e4c3fad07531febf93a2234"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "e0cc164a59760482ea0ad9050958af44"
  },
  {
    "url": "impressum.html",
    "revision": "1d29c3de6e210fec4067af5830ccfef8"
  },
  {
    "url": "index.html",
    "revision": "f4308cdc27ae47d397899f10641789bc"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "2a1bb942860292a521ecfe91cb64c246"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "0ed4b3f0bec70d9ee65f62ec340d2077"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "5aaa2190d97aaf3c6a98163f1da5ddab"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "ac7c592cd077577a001203bae783bf78"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "bc57fe577890839d54ba030517eac157"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "91facc101122622d68a0ea3a645ce121"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "98fd400fd7aaf353024b3073ed325a4c"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "4f5d91234ac6324502684a1263d0792e"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "105d9bc71530b6457aea3b7acadcff02"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "ea7f115fe9f79404587799d67662420a"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "dd5cd7f29a3ad7f3241dfce36bd84858"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "acdc9490e34d62a684b5f842c174a425"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "845857a2411aaf3d064e63d62078db58"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "43fc0f750c81d61a10876477e096cdb8"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "22282fe2dc04908b46f237c509f02acc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "839c878e8813cad6e20a20a4df573c57"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "6162ff23aff43882d0c320eb597b40a7"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "9b62f1a28399d244e2866d4874b25f0d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "af212a8b0a9b7cea569c500703e22012"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "65db0bdebccc3809c8f2410a80fce1d8"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "b578e5c9719b0d03e88de15cf80c5b0a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "c1684c20a233f4199310165e876f831e"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "0d23774dc55dcbd2e7d61bb01bd589d2"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "ef0d2dde23d1b294914b99b3b4810e47"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "41f1870b582e68b6efc2cc14ad9afa64"
  },
  {
    "url": "Projekte/index.html",
    "revision": "e73946fbd73a51c58d6159938eeff7c9"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "ca608ba79ea883d39cbd08cbc1c74794"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "bf835af1bdc5c061887e9fd56aa39a95"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "98606b6922a0744600f85a58979c4ff3"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "588d5db10e49a2956f0d2f25727aa6c9"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "e53199cb4f33212b295845560c8318bd"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "a905764f108eefed9f7d5d5cc6ec9151"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "c6653a7fcde8451253108919e5aec5c6"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "bab830198491b513d50a27bba239efe6"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "e973bfaee9c3edfe09a9ae1ea7d78a2e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "d6382186a6f0b4d7b05e5680581934a4"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "846f9d4271c7c6facae12f5b451da90e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CURRENT.html",
    "revision": "3e762a7ba54a1fbc06301099d68b259a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "eb157461e39a81c6296d99c96b933330"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "ce9d839af48f293d4171d5758435c5b5"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "0c2216c3fb5f58601459e62e2090f6f6"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "e3884cce2d3043b1aef6e7f7a996ebec"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "78d838af27a30fd1ea051e613bdc2259"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "8277847f8cdf91d3d5aa50d58b547403"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "257522d83b6201cb962e55f22413499e"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "1722a9ccd5e73fb31234e8baf27b83b4"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "1025e2241855c649dcc3de7c951ff57d"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "e6edf90d5c0739eca9abd5caaeef22d5"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "914d0f4b360b45af1157c3aae2400f9a"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "4f7a14d57e56678255d17f8a2ed1c3b0"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "23b7ba4dbfc67f31810072cdcb04194f"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "f911215e0ae76be2b9cf2db57631590f"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "a9c2c33d9f5f6545ce5d5f0f5e9cb73d"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "b2ecc2b2516987e2e1fa4ce3804dc18c"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "e784bf82decb8b2d762a464c66acb258"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "ed208182ba510ced802c0e7842ecc63c"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "40ddabca8a83110b48ac55a3d1073a71"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "811a7a474292c4257e901e0486dc99fd"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "1ad0f0934b5734f1f0293718aa816c19"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "6b6fcaefa638053b49b06b0804789327"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "56a287bcc72b663ca32d34f2bb3dba93"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "9eb3dfb066cc1c30a6ab17571fcc9ca4"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "b9601e1891b9001da3db772703af6d65"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "9f1c749824877722069f5cd072b82f20"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "507ba6a10bfad3ea5399f9c3e862cf51"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "ff3edbd19220809b6a448d8ce9d806ce"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "e82f4676f61966186e5850944ce1017d"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "915987e0876b6d86ae1d55c2755fe775"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "78a60e5226bd3c77004add5e137ecf3f"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "521d48add2ad1a185bd88bfaafcdd90d"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "9a7a7e71734123e4289b5fcfbb2439a9"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "67105fa2fa9f2f4c790d121bec7c14ac"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "1a2047d01627ad813755a3e075f86406"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "db3a9692d8a9249cdc3f7ae0887c6c0e"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "8c8af65ca4a14244292e403371dc473c"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "09496594edb5a1670d20e25bae81dd3b"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "fe3f269071615283d8ea4e5a28c3b479"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "76b745ec3075a7a9485306b2aa5c910c"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "6c502beda94e4249fb083a9f17c5e181"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "0dfff309b62cdfa27a80b3ffd2851477"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "39fda6a8032973b42fc69268988a221c"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "6016413b7efb7292b091b6b8d1c46a8f"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "c2016a5dfa421b85d480bfb05de8e9a6"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "b3ee63f9627576ccd34256ea2782f205"
  },
  {
    "url": "rftypes/index.html",
    "revision": "3bfb120b58a100d257dc5c03224979d1"
  },
  {
    "url": "Sketche/index.html",
    "revision": "139ad3eb38f17355e2a843f1cd5ef0eb"
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
