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
    "revision": "83065cd7ad5e237f5a1e0d1cbd4b57f6"
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
    "url": "assets/js/1.5d1ff959.js",
    "revision": "804194196c1f1ba1200a0a21f7ba5068"
  },
  {
    "url": "assets/js/10.92da5f8a.js",
    "revision": "60d16d8a1390b726f3eb973ed6c69221"
  },
  {
    "url": "assets/js/100.ef26bcd4.js",
    "revision": "d6a55a35573b8f0cffa18cfeca0cac5d"
  },
  {
    "url": "assets/js/101.f17bf3ea.js",
    "revision": "f21227a4a64d475fd62b193006f25801"
  },
  {
    "url": "assets/js/102.66a8295f.js",
    "revision": "957c7634a0985b768b307d2652edef04"
  },
  {
    "url": "assets/js/103.421472df.js",
    "revision": "fc4de988b27b3725f4d419d1febd7e7c"
  },
  {
    "url": "assets/js/104.f3b1de0c.js",
    "revision": "084499b841efb9326f74ad58f40f5434"
  },
  {
    "url": "assets/js/105.b347b03d.js",
    "revision": "c2fd89dc713454eccfc1d0811f334638"
  },
  {
    "url": "assets/js/106.c0bcf43d.js",
    "revision": "a3874732eed66712cc5f4d9652cfd34f"
  },
  {
    "url": "assets/js/107.3d8b8b7c.js",
    "revision": "8a196ae2cd194064fa41b96a6ba58457"
  },
  {
    "url": "assets/js/108.68464028.js",
    "revision": "d67768f9970d79d43eba81e9033f1b91"
  },
  {
    "url": "assets/js/109.ea57e34c.js",
    "revision": "877ed2ec15e38deb4ee1cb37a4b1fa23"
  },
  {
    "url": "assets/js/11.a599c15d.js",
    "revision": "d1e339b5740c4cdf73b2d449075b8304"
  },
  {
    "url": "assets/js/110.357ea35f.js",
    "revision": "8df691c32ef7c9c3e931956b57498636"
  },
  {
    "url": "assets/js/111.023375c5.js",
    "revision": "f55a8f79e7cf85b458f1a91742c79ebb"
  },
  {
    "url": "assets/js/112.5bfe92b0.js",
    "revision": "2852fd72c5b66e9e9ebcb1ddd6da8e37"
  },
  {
    "url": "assets/js/113.b68c11f9.js",
    "revision": "4556bd1dcccbd6eb17e413fe940ee4a9"
  },
  {
    "url": "assets/js/114.53e805f0.js",
    "revision": "ba94b6674bba0665dccdf1cb85b109db"
  },
  {
    "url": "assets/js/12.a83f352f.js",
    "revision": "1b5ce315c391333276be223728e62316"
  },
  {
    "url": "assets/js/13.b8179ecb.js",
    "revision": "b1d530fa1460e00f32f33c71f4a57397"
  },
  {
    "url": "assets/js/14.79cc1dfc.js",
    "revision": "f561396e8ecb4ad1f98173ff5c4dfeb1"
  },
  {
    "url": "assets/js/15.c289027d.js",
    "revision": "bd5a44c396a540df8c50af2913d8ab14"
  },
  {
    "url": "assets/js/16.92c772a2.js",
    "revision": "947e8fcd48dce6f739aa57befba7b134"
  },
  {
    "url": "assets/js/17.6ad52208.js",
    "revision": "db349337cfbce8019d091dae01a4c2e1"
  },
  {
    "url": "assets/js/18.1cdea033.js",
    "revision": "767c67f90a464b10a7d17ea70e88bfd2"
  },
  {
    "url": "assets/js/19.b6a396d4.js",
    "revision": "76b646a1a3d199f2696a614170a61845"
  },
  {
    "url": "assets/js/20.29777cd6.js",
    "revision": "7b8618a37983e207681fa8614f8cf3f2"
  },
  {
    "url": "assets/js/21.22c139ce.js",
    "revision": "f831eaa3279987406c821aac32604727"
  },
  {
    "url": "assets/js/22.ad67193b.js",
    "revision": "36bf5c8d754a423ba77f7ad9613041d8"
  },
  {
    "url": "assets/js/23.ab2a29e5.js",
    "revision": "bba7167ea9cf8187c825b6aa7ee05058"
  },
  {
    "url": "assets/js/24.2cb571b1.js",
    "revision": "d3d89547ca626670a8e06979155f37d5"
  },
  {
    "url": "assets/js/25.7d4cb2f7.js",
    "revision": "25044fa8234067d3b0461cdedcf740ae"
  },
  {
    "url": "assets/js/26.42389568.js",
    "revision": "243b07acfd0b3adeb6ac4f1632671bd6"
  },
  {
    "url": "assets/js/27.4279b757.js",
    "revision": "af924a1557db6c26efb8c196f049f938"
  },
  {
    "url": "assets/js/28.31bbd93f.js",
    "revision": "0993e6626775f2efe70ed0987c78da3c"
  },
  {
    "url": "assets/js/29.65af0d47.js",
    "revision": "6f996f7306feb119a00c002a2875b05c"
  },
  {
    "url": "assets/js/30.9a346e69.js",
    "revision": "fd0148e3ec75982510cd964d3de6dd1e"
  },
  {
    "url": "assets/js/31.28ef42f3.js",
    "revision": "99b7f66da4592a7bb15e5b8406930460"
  },
  {
    "url": "assets/js/32.e68487b5.js",
    "revision": "0a94ff6ac11cb51dd1199b9a86699504"
  },
  {
    "url": "assets/js/33.c0015510.js",
    "revision": "d087e6a0e5d38c7604df60fcac667a90"
  },
  {
    "url": "assets/js/34.fe0ac7f7.js",
    "revision": "97576dbbf378466b85bb7534a3b5452b"
  },
  {
    "url": "assets/js/35.800f61b0.js",
    "revision": "ef5800b2c95abed9ae0fae87ca542384"
  },
  {
    "url": "assets/js/36.8e514f80.js",
    "revision": "2b19498b20e09bd1812135720b185c3c"
  },
  {
    "url": "assets/js/37.e6443fbe.js",
    "revision": "7a0d3bf5b4ddda7ed09ff8a4e1f6c0f8"
  },
  {
    "url": "assets/js/38.46108938.js",
    "revision": "fa16d181642eec1abc89236eb5b6120f"
  },
  {
    "url": "assets/js/39.3d36004e.js",
    "revision": "1acf2f6410489f33a36664eaa8dc663c"
  },
  {
    "url": "assets/js/4.35891a55.js",
    "revision": "cd7831f6e4caf8970056766176f67e50"
  },
  {
    "url": "assets/js/40.e4ba786c.js",
    "revision": "d6539e9bd92cc2c79115ad360e735f91"
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
    "url": "assets/js/47.93878c26.js",
    "revision": "ccefd0c5a62895179006f903372fa0c4"
  },
  {
    "url": "assets/js/48.39c03c33.js",
    "revision": "3ded1bde538b9bcdf985b8b7ed5f4071"
  },
  {
    "url": "assets/js/49.75a21ff6.js",
    "revision": "bf1d9bec63f231221860bdb9764dda8c"
  },
  {
    "url": "assets/js/5.666d0c6f.js",
    "revision": "eb102ceca182c6279d3a8f5707e1905b"
  },
  {
    "url": "assets/js/50.67fab147.js",
    "revision": "ab93f3050db1f095f4688b8203c935dc"
  },
  {
    "url": "assets/js/51.dc8cc646.js",
    "revision": "d75d008a843737ffb60e9fceb203449b"
  },
  {
    "url": "assets/js/52.6e78de6e.js",
    "revision": "050a1a883248d009b90df74c2c598bb2"
  },
  {
    "url": "assets/js/53.5fd4c11b.js",
    "revision": "82c9bb936d350ec6433a4ee97bb8df87"
  },
  {
    "url": "assets/js/54.6aff0cfe.js",
    "revision": "6a18e6e39d496b46162c683b77df8b42"
  },
  {
    "url": "assets/js/55.15957d20.js",
    "revision": "d2e3bc2cc7ed5c800794203d4885f42a"
  },
  {
    "url": "assets/js/56.bb5e896e.js",
    "revision": "055061ad667013abf5401b68c6d88e0c"
  },
  {
    "url": "assets/js/57.d9d9625d.js",
    "revision": "62de1a6707c4dcc32034ced8a8d6818d"
  },
  {
    "url": "assets/js/58.a7afd44c.js",
    "revision": "51f043fc99bd47159de6687b432dda75"
  },
  {
    "url": "assets/js/59.29d7f5f8.js",
    "revision": "a95c88a9dcd2a36da6e27c1098d45c8e"
  },
  {
    "url": "assets/js/6.8160828f.js",
    "revision": "b3ddbc999a2d21e31e210009612c8711"
  },
  {
    "url": "assets/js/60.cd6fc2c7.js",
    "revision": "ad4cad5c8444c1ba8dc7162409a742e3"
  },
  {
    "url": "assets/js/61.38cf8c93.js",
    "revision": "e63d71a41a9daa9e14d54db831a5b189"
  },
  {
    "url": "assets/js/62.ce38a943.js",
    "revision": "b8e46214bfc1800f6f927b1bf4dab501"
  },
  {
    "url": "assets/js/63.a79df27d.js",
    "revision": "8c474935a71b4480006909e443ed865c"
  },
  {
    "url": "assets/js/64.f05479ce.js",
    "revision": "165e882b1a54459550749231bb4b0527"
  },
  {
    "url": "assets/js/65.ae81778f.js",
    "revision": "64312c0685d62b692ebf5a4bfebb558c"
  },
  {
    "url": "assets/js/66.168ab657.js",
    "revision": "5d97231d05108bb5d58205df4e1d4f52"
  },
  {
    "url": "assets/js/67.f9ee2c38.js",
    "revision": "2ffb5ddc2c5e8b89f4b759006d5c0353"
  },
  {
    "url": "assets/js/68.ffb5e39a.js",
    "revision": "6171374848776fc63637765ecb875d05"
  },
  {
    "url": "assets/js/69.f9f3e239.js",
    "revision": "622140b4330f4b6a86c8706812e288b4"
  },
  {
    "url": "assets/js/7.58231d09.js",
    "revision": "55599a3e85c6fd74c1e07602f850392a"
  },
  {
    "url": "assets/js/70.d87fd91d.js",
    "revision": "42c1f91b883368ecdecd294c7e0b63f2"
  },
  {
    "url": "assets/js/71.f7370bae.js",
    "revision": "0ec9782039cb2d909b195dcdac739a82"
  },
  {
    "url": "assets/js/72.d72e3db6.js",
    "revision": "9ab75dc25c85ee88929178271f31b245"
  },
  {
    "url": "assets/js/73.77254795.js",
    "revision": "9212b2b94090e88d7924f618b8c97426"
  },
  {
    "url": "assets/js/74.b429e707.js",
    "revision": "51ad9d6ecb037123dd8e250758b7c0de"
  },
  {
    "url": "assets/js/75.66133ca2.js",
    "revision": "a9d45bd33036d12344fa2fb48f548ed5"
  },
  {
    "url": "assets/js/76.741920bb.js",
    "revision": "a8a533ba9e6b27e6bb89cd7138f2738a"
  },
  {
    "url": "assets/js/77.08d61fd4.js",
    "revision": "904dec87efad75562ac3d46aa5a2b521"
  },
  {
    "url": "assets/js/78.28a0953e.js",
    "revision": "bbf85996709fb2e47ff1832ca5c5448d"
  },
  {
    "url": "assets/js/79.7b03ae47.js",
    "revision": "e6b9308178fc20321556c3751949b3e6"
  },
  {
    "url": "assets/js/8.e9e333bd.js",
    "revision": "f8479ba0d41879f70228079fd1f9db7f"
  },
  {
    "url": "assets/js/80.8f3ba772.js",
    "revision": "3de64e5bad2b88649dc4838db42ab563"
  },
  {
    "url": "assets/js/81.21a1ba5f.js",
    "revision": "317debcd8c999a46dabe4fcf4ea2541b"
  },
  {
    "url": "assets/js/82.5e3cc984.js",
    "revision": "eab0ec193520147628438f1a310da6ca"
  },
  {
    "url": "assets/js/83.27674e2d.js",
    "revision": "573154b68eb04bc3be7fb724e988f3ac"
  },
  {
    "url": "assets/js/84.744b0ef0.js",
    "revision": "8e6728116c6ed55f5ca2f1217ef0479d"
  },
  {
    "url": "assets/js/85.8752d879.js",
    "revision": "8f7841362d6ae21634bc76836ab9a5b4"
  },
  {
    "url": "assets/js/86.a8aa82b5.js",
    "revision": "0d2d96c8b2b090b08b652cf2b0911657"
  },
  {
    "url": "assets/js/87.3016decb.js",
    "revision": "855d10fa2fb24b21b7b1e9b7e7b77206"
  },
  {
    "url": "assets/js/88.b2e8a334.js",
    "revision": "46916fa1a15295da61ca107cc6a9e4fc"
  },
  {
    "url": "assets/js/89.f27e48ae.js",
    "revision": "358a8f77bc3a73d5aef9f73b304cb005"
  },
  {
    "url": "assets/js/9.4dea3b51.js",
    "revision": "74febd130c2ad1f10ba9113c366cc631"
  },
  {
    "url": "assets/js/90.fa2d7c67.js",
    "revision": "0e9de43e31b2f253ee4f1b9f8a6730eb"
  },
  {
    "url": "assets/js/91.d13f5513.js",
    "revision": "d3e9c9028cbab284da353387ec552451"
  },
  {
    "url": "assets/js/92.07453a79.js",
    "revision": "362f346eba8eca0ae5f0284fd3bc620f"
  },
  {
    "url": "assets/js/93.7cdd21d8.js",
    "revision": "a408821e9e30ebb5cb872528783c7090"
  },
  {
    "url": "assets/js/94.3a65e559.js",
    "revision": "8c43ce19db48801995edf9c4ef2df7e7"
  },
  {
    "url": "assets/js/95.4720ce21.js",
    "revision": "c92b4d00083f5854589fa9bb52099e69"
  },
  {
    "url": "assets/js/96.d23416ee.js",
    "revision": "1c1f61b95ee29146dd32fce582990111"
  },
  {
    "url": "assets/js/97.a41e3749.js",
    "revision": "418dc56d0e98b8f3910d4b409836bc12"
  },
  {
    "url": "assets/js/98.4ff054f8.js",
    "revision": "559a783de3504b060b34d3c7aa3d2bb0"
  },
  {
    "url": "assets/js/99.587d8586.js",
    "revision": "3a65fea83feeb1098a8f1ab97c46e79b"
  },
  {
    "url": "assets/js/app.c90b5a41.js",
    "revision": "b1ba06d20d9ec4e15a07077c06f27175"
  },
  {
    "url": "assets/js/vendors~docsearch.faf2c7f0.js",
    "revision": "ea8c44cb66dcceb5800ccd1f316dfd83"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "a24909ddf13a93270f6e9150e5c578dc"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "36ef6855a64576077a4a12c8e6822551"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "e2a43427acab8292429f0b3d271bd8c7"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "406a5337853fd7835dc96960a2dc0b5c"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "a0a03a1074ca947433e0b036e41f369b"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "0305c855b6948519895870e396a2513c"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "383a4aedd216bc1ccdc21477b08bd9b4"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "eb81d6cfc0296d18b91d91f1b859d96c"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "1731e59b49f903d8dfd3b2bf008709b5"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "f9ed26344899e5a5d83073d75bce32ac"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "d2d8809417cd965cce4418a3430b051c"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "7146ee652b3a2c7c2768642999a81314"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "b4ac31acfd49697a1083801acbb19001"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "01ca8020fe69ac13c4708e9ea98ce91f"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "45fe792085cf7658e4df585143ede371"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "2d991eba11f84868624f7ff1a9bd0881"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "e3e5bc9e5a392843d6b44d5fcec53ae0"
  },
  {
    "url": "impressum.html",
    "revision": "95c943f86ec71bfb29a3d8d19a9da68c"
  },
  {
    "url": "index.html",
    "revision": "d80062c3a201099492b5277d05cce6c6"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "ac4e8ea4c112c8f0c8ce5b97337aacfa"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "15c8f5c5093ab0672cb8042b6a836c43"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "2ea395c442ba8eb2805fb29e68623f4c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "f508f1e858583af9015244a4302b6bf7"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "39a525c0ed984803c27bd2f55777f57e"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "eccab0eeb4a4b354ea338a118a3d0919"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "94a761628580aa8ba551fac2b17fa2b9"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "4e7f5b58b111e89778c61c2338b9785b"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "11cd8680c29be4de2b5584989eebedd9"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "b5f577c2d823e9af35d043690ff87d91"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "b43eb402361ab24b0614214814bb449d"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "31e090706fbf34f9514299af5ce93510"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "1346c604c1e644e406bd84d001143788"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "f3a9c5cd2b0bda3f8a31348606de18e9"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "3f2ef594a0500ac35eaa4711e9afdd69"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "6fee84dc07fa722f678e1294d42526ee"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "5a6e1cc897ffcd8cf4f6d40d36182f76"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "e79c7ea061222717578c080e18db1bd3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "19b0400e354f53c601761665fa977126"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "96f18f4fcca37e47f3762e17fc0ba7e3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "4c6d9b5e3b708c8687d7181beaa2cf26"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "fa463041312c3725c191b6a8533d9381"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "b3d087df9bee8a5f1bf41ce294c9a7d9"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "9d9ac876b1558d31885fa9993a67e609"
  },
  {
    "url": "Projekte/index.html",
    "revision": "e02054ceef2da728149179cab682c275"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "b2d2945ca03d1e5e1eeb781356d4787a"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "c193a6826916f4ff299681619b2623e6"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "c9338958bbeadb06f96125dc366a7c54"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "8696cc9df37a0911a7417ed4a837fa00"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "261c2585f0232b4155b82d0fa4d20046"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "491ec2a77466db380729115647a351ca"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "d3b2a7e33fa580478b079684eed1e785"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "7e2d04e33a556b27fdc9f69ef6b0f599"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "e9eb2538e6032d22225210255c1cd1c4"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "1b9aea3cd0f9c63e4dd8cc513785af2c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "44a2717df41f02f000a7946f7cfccb10"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "9f9e6c5b6cfe419c53d23e5483b06c38"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "a186d34478da2aecc945bb40b1b4b8be"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "3e61376e6a4845bbb20caa89098d5c83"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "b5d69a652a2b81c6715a6d1610765431"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "03424316766c005fd75aace90a0ff70d"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "a3a2361ff2c1bc026a5e57162f127a38"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "3d49f22ec4bd7b216d0c807d83370e82"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "d14e169c2264ef45bc83676496569cba"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "14b25b84ba2ae7f3abe8791617454815"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "ac9b7da0d03e2094a486d9092cab8354"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "19e68a822ca19d5865e01f4dd3b03c87"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "ded59f793bee1fc224775b5ad6235274"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "8d6e2dc9c36b5d87f9fdb8bd2546ffde"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "77e12c1072eb7c009bb6e42069619247"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "b8a4431544377e5ceef022b800ece07e"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "aac21ad962107172b77b38fd7eafe93c"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "8301e90624d534eb426c065f2bc78e56"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "f7ed304159fc134669c9d6478756b599"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "b238f6c051c1e5dc1e7bdb4faea65a18"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "2d82af95034b4c1e535a1f96aa9ca2a8"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "7dac535b03eac035878f29e1362e25d7"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "f725e2fdb3bc201c18f659778235b3b9"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "54327ca42cd02c6e180835072d49b655"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "fb29432c50fa76ce6e77e91b3249afbf"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "b7e2b1485eba77005db423dabcbd34ad"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "a980829e1b4f2781595a4e3f2bb0b8fe"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "411ad74da33174a232b26d54380065df"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "ae966d82a570c30035587221a3867220"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "87f96f2636d207541e4278ba3c07f2bb"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "55f173418ddbd2a1745c90e2359688af"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "62400993d41b11b8f41b1dc3b168106f"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "112aa6e7aa2bee50d6a4acf821c3a467"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "bda2374e4978e428286655b077b331aa"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "6e510dc68a29d309bbc1d481c038f428"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "c32ece62e4a90fb1b6298eed3b712689"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "fb3c9bc1cee145817f9cfc66d27a878f"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "33aaa22911285a948f6c286dbe578aa7"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "570d0cea824021aab20549124e505a96"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "1b119b3dbb7daa92b433c730ed1271f8"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "a554edbba7c6adfcf391ecfa851934ea"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "5a276dce387bbe3d915efa3c13d3a395"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "aa55d69bb4bc11c64cc155910a06893d"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "31f14a6eff015da7a0c2d80bb534d99a"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "9488b1adced9a18610c3f6ebd1acf835"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "937fdde3bc53b31f7e7caeaee329465c"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "067e42aacb39401302a46ff6d620186e"
  },
  {
    "url": "rftypes/index.html",
    "revision": "ac95766ad080090c7a6e5fc77a2ad0fa"
  },
  {
    "url": "Sketche/index.html",
    "revision": "94469ca87acf9abc1e814c35ca15c107"
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
