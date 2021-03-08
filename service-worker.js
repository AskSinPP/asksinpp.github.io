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
    "revision": "c2d7d73ab9faaa391b1e8d88d0df9e29"
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
    "url": "assets/js/1.a952bdd0.js",
    "revision": "5c3d996d04a0f6518ea89df552711a27"
  },
  {
    "url": "assets/js/10.c4578b18.js",
    "revision": "e7fc84b0ea8e87503df558570adbe66b"
  },
  {
    "url": "assets/js/100.d062bd3e.js",
    "revision": "9163a22acb2e3e314d6d3a29d9e1a835"
  },
  {
    "url": "assets/js/101.3e22df71.js",
    "revision": "ae8b8d69dd16b4f7b981ac14c9d58e71"
  },
  {
    "url": "assets/js/102.ef7ca781.js",
    "revision": "ed428df4e15963788f9021d3952783a1"
  },
  {
    "url": "assets/js/103.e32e5a82.js",
    "revision": "848feac357bb65a1a29a127d621e7c74"
  },
  {
    "url": "assets/js/104.fef24ada.js",
    "revision": "62b7ab66c042875c26fd442fd37678c2"
  },
  {
    "url": "assets/js/105.9d23c12a.js",
    "revision": "a5975d6a222e227b185265e045d302a1"
  },
  {
    "url": "assets/js/106.2eafbf5c.js",
    "revision": "4882e631cfa4cd799ed8cce9eced058e"
  },
  {
    "url": "assets/js/107.0b77941a.js",
    "revision": "c5624ad1beb4864f78db9ed685fd1763"
  },
  {
    "url": "assets/js/108.34f6ecb0.js",
    "revision": "15db4da62bf162086bce4cc2dd713818"
  },
  {
    "url": "assets/js/109.1e2d955e.js",
    "revision": "1e67ef7cb41d3ec3410637aefa7be207"
  },
  {
    "url": "assets/js/11.e8a7d325.js",
    "revision": "fc086fddc3cf8efa297cab6454dbf7c0"
  },
  {
    "url": "assets/js/110.3ee4918f.js",
    "revision": "39bac79435ebe6fab92ea2d159e4da5c"
  },
  {
    "url": "assets/js/111.3b841ca8.js",
    "revision": "e3dc4c9c9ca259d5c3d7bb67f95e746f"
  },
  {
    "url": "assets/js/112.15275c85.js",
    "revision": "485a10c14e12eaecf5fc9e9323687015"
  },
  {
    "url": "assets/js/113.5355691e.js",
    "revision": "aa7734e851822cde5107b4cf558fc745"
  },
  {
    "url": "assets/js/114.4b39d87b.js",
    "revision": "7fa7460a31f4c37313f1b8a3a8c99a6a"
  },
  {
    "url": "assets/js/115.82d7b077.js",
    "revision": "b8361d4066e19c1c5c858a928771a2fa"
  },
  {
    "url": "assets/js/12.7b08754f.js",
    "revision": "a51a78627e754b78350dd47991aca739"
  },
  {
    "url": "assets/js/13.065aae22.js",
    "revision": "e64def89549d94f475ccb4bfbd66a4c6"
  },
  {
    "url": "assets/js/14.d1266539.js",
    "revision": "9e22933921674f3b816aec70cf3e9df5"
  },
  {
    "url": "assets/js/15.72e2a949.js",
    "revision": "893b55e92d3fecefab890d7463175cc6"
  },
  {
    "url": "assets/js/16.f44b9652.js",
    "revision": "055ca88a1e25d6d6a3be00fa3c05027f"
  },
  {
    "url": "assets/js/17.21bfa631.js",
    "revision": "8356cb54b7d38083c69fa444f7b29ada"
  },
  {
    "url": "assets/js/18.6852589d.js",
    "revision": "6f01f1e733dfaadfe97628ec00283db6"
  },
  {
    "url": "assets/js/19.0bc831c7.js",
    "revision": "04614dff928ec332d519b6b9fec2338f"
  },
  {
    "url": "assets/js/20.78a0b386.js",
    "revision": "fdbf692b84dbe477eab7793634b8127f"
  },
  {
    "url": "assets/js/21.f54a89ea.js",
    "revision": "fd5982d3c7fd703909e2d85f8b7d41dc"
  },
  {
    "url": "assets/js/22.2d80ca6d.js",
    "revision": "bcf10012fbe0434cbb068bae0d5de257"
  },
  {
    "url": "assets/js/23.2ee0c999.js",
    "revision": "142f0ab216198ce7ea5d9724e5647a90"
  },
  {
    "url": "assets/js/24.892640db.js",
    "revision": "6bd6ce90d7a881d1f6746b74b6b7bfa3"
  },
  {
    "url": "assets/js/25.7de7e1ea.js",
    "revision": "cea9b19f24e70c6008110f967f478a6b"
  },
  {
    "url": "assets/js/26.798aca1f.js",
    "revision": "2665568e962f72cde3ff20321bc7f0f2"
  },
  {
    "url": "assets/js/27.7bf70d7e.js",
    "revision": "677295bf0ae6c46b08935736e43df8bb"
  },
  {
    "url": "assets/js/28.c478e0ae.js",
    "revision": "6bbd57b4c20f14cc09e19bf8100af26a"
  },
  {
    "url": "assets/js/29.1255d2e2.js",
    "revision": "dcbdb6f5b5126081981c6ec832301dba"
  },
  {
    "url": "assets/js/30.76b989d2.js",
    "revision": "722b7ce3afef7feb5c73c77ad9ff8fc1"
  },
  {
    "url": "assets/js/31.ef3ad30a.js",
    "revision": "936ddbf826cf73864f83e3cd2025e7a8"
  },
  {
    "url": "assets/js/32.ae8979e9.js",
    "revision": "4c227ca93b6d17ada57d34e1061070ef"
  },
  {
    "url": "assets/js/33.2a992086.js",
    "revision": "7e3de4a15fc62bce4a7acff91a241718"
  },
  {
    "url": "assets/js/34.7e7042c4.js",
    "revision": "41dcd739867ca529295a7b5206ba237e"
  },
  {
    "url": "assets/js/35.33ad9fa6.js",
    "revision": "2aeb8438ad3f5067fc6f5c90e3112c5b"
  },
  {
    "url": "assets/js/36.93238c17.js",
    "revision": "3988672785280f1a1181ecd734220dfd"
  },
  {
    "url": "assets/js/37.324373bf.js",
    "revision": "09eaa199ff38b51136aaac3abff367d0"
  },
  {
    "url": "assets/js/38.d0b18710.js",
    "revision": "6ab1e4b152b91b3e75fcbe3884ce88cb"
  },
  {
    "url": "assets/js/39.a9642d69.js",
    "revision": "bc5c480539b85199afea9fab5e7cf526"
  },
  {
    "url": "assets/js/4.3e15a9d6.js",
    "revision": "f3dc102726655708b8acba139bce3e53"
  },
  {
    "url": "assets/js/40.e6ba085e.js",
    "revision": "90df80a3abfe25c43422a3e73b87c25a"
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
    "url": "assets/js/5.21da50ef.js",
    "revision": "05403b96c3b44406698b277d88314f92"
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
    "url": "assets/js/6.8601b0fd.js",
    "revision": "413bc04d3bfac4a4ff2eac0697058ef7"
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
    "url": "assets/js/7.44671593.js",
    "revision": "a30c140b0ae9c8281add3ae9c12a85aa"
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
    "url": "assets/js/74.4ea182c7.js",
    "revision": "d9202aa346b881ed87b6d309bcf698a1"
  },
  {
    "url": "assets/js/75.a8619da3.js",
    "revision": "4b07be7b37cb132c9034e1fa9a842a6b"
  },
  {
    "url": "assets/js/76.3eb0c106.js",
    "revision": "5127b02105569e73a7e9ca2286a383a2"
  },
  {
    "url": "assets/js/77.96773e1a.js",
    "revision": "89540d1cce23c9da08a3b8255c0d65e6"
  },
  {
    "url": "assets/js/78.b995f9cd.js",
    "revision": "1dd76d19e38de1937cce794cb24fe858"
  },
  {
    "url": "assets/js/79.43baa4ae.js",
    "revision": "b6dc8520388812f6da555ce0ea4236ff"
  },
  {
    "url": "assets/js/8.65d23c27.js",
    "revision": "95801142abfdfd04bd14d2f26aa9dea7"
  },
  {
    "url": "assets/js/80.ceef72d7.js",
    "revision": "5a3e3d8188dc0c663c0788a26d73358f"
  },
  {
    "url": "assets/js/81.43b202f6.js",
    "revision": "20bd1f1022e41e458433ebee1e7a00ce"
  },
  {
    "url": "assets/js/82.93c72178.js",
    "revision": "c6e1b6ee8b67f85e511f1cd80e27739b"
  },
  {
    "url": "assets/js/83.da64c7f8.js",
    "revision": "9d42476d5a9b57edcfd6f77c0bcd8efe"
  },
  {
    "url": "assets/js/84.1007843b.js",
    "revision": "2ff1386ce901513672917b96a46abd20"
  },
  {
    "url": "assets/js/85.a9867bd6.js",
    "revision": "64c9e162babf59ab785212ed6521a153"
  },
  {
    "url": "assets/js/86.9d67a15e.js",
    "revision": "7aca2ca3d2541edde5426d87bfa72cc7"
  },
  {
    "url": "assets/js/87.36fe175b.js",
    "revision": "b9c9a254d0b4994bc206aa0f384ee3a0"
  },
  {
    "url": "assets/js/88.10b2a8e1.js",
    "revision": "aabe6cf12b3f67a7a529ee97fd68eac9"
  },
  {
    "url": "assets/js/89.0573c514.js",
    "revision": "eb3b4607a3df47d6a5fc0607b39ca6ae"
  },
  {
    "url": "assets/js/9.32734b2c.js",
    "revision": "ecb7f70e9f2333b7564c888094a8db78"
  },
  {
    "url": "assets/js/90.427da217.js",
    "revision": "129aa54aac81eccb6be8b214c842b271"
  },
  {
    "url": "assets/js/91.fc2007d3.js",
    "revision": "91a6519860261cf3f3a97048a8ac0161"
  },
  {
    "url": "assets/js/92.87482eb4.js",
    "revision": "ae73e2628ee4b49f5d6627bfedeca1fe"
  },
  {
    "url": "assets/js/93.c2c69d4c.js",
    "revision": "6f90f25c25fef72f76093e911bb2963f"
  },
  {
    "url": "assets/js/94.3f42dabb.js",
    "revision": "dd3b547b6c0aec4f78c8432b382c0889"
  },
  {
    "url": "assets/js/95.bfcdddf1.js",
    "revision": "dfe7d8da34091d4c5cd4aa07fcd1f3bd"
  },
  {
    "url": "assets/js/96.4f3d11dc.js",
    "revision": "d367a7c63d20d93a9dd10fefa2af4192"
  },
  {
    "url": "assets/js/97.e59233f2.js",
    "revision": "60bec601e8a67c553e293aaacf71fde0"
  },
  {
    "url": "assets/js/98.073e87b3.js",
    "revision": "97d9c305412333f6656e93683754d689"
  },
  {
    "url": "assets/js/99.bea7b34e.js",
    "revision": "aa775a80b8d711088b2c79e609951e32"
  },
  {
    "url": "assets/js/app.f2d0106b.js",
    "revision": "134421c35be22e37f8a54485bdcc6ef9"
  },
  {
    "url": "assets/js/vendors~docsearch.788df33f.js",
    "revision": "529c2d6ae5dd5e58dcf33aae51ce6bab"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "67db83b3f224ed9f359be3be7f459d94"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "f2cb3f5a0ca0fed4547d1af366400d68"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "fbc59edda428fcf8e8f9947c0ae3418f"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "4ae9b43ba7251be873b71f9b2c3de4fd"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "c758a0d0ee3971fa93320c6b15ed86d7"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "507fc1b608c4edda79ffc2eda5fe0840"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "1ce540210062ffa29c85f17dfe667d7d"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "a5a2e0cabc03b5d7efd8927f65c24cea"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "05c0afccf9ceb219ba414f3a96592e58"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "e1b013d78cfe6ea2e8f821c72be5b5c2"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "a9e6369e6fb6a95bc01a390bda99dda1"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "f376c6a58de899297daf74fbd4980d9d"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "d36e1a942ea88139a0bde89fbaa3a848"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "fdc23326d0b9ac67cf498cde69bb5749"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "bceb170884218104867e781e6eb58ed5"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "95d386eae75ce7dc70742a5f8561c3de"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "2d7cb1975e4a185b3f304ea75e14ac4c"
  },
  {
    "url": "impressum.html",
    "revision": "e5058e6c393a7a52711e435aaf4fc080"
  },
  {
    "url": "index.html",
    "revision": "00eb47b4105ad3123e3cabae4522f7ae"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "b5359d303785e365320211fff88d0a63"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "b41d8026774eada3816d31ebb96060fa"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "d5b8a2f4b1f3e452a1304ce85f4f3334"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "6968cca5f5a17453c5dc46cf64e209ee"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "dd27f95015945b3ebbb31e937065d76c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "965586f4c8e2ade9cc421c5e96821bd9"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "9dcc7a51c866ba4b70f665d326601f43"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "b06f0614e21614363ec5d630e3dd4d09"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "518e0564a3052f6cf6fbd44b728f5fe5"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "982e4c2ce5ce4daed0b25a71fc9e240c"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "c209dd2e3e5cd84c8300c7c19ec97941"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "079a93b5a17b8b114bfafb3cca9c6719"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "37ef754a874ee52549b0952ebdbd59d3"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "956f7864cef76dfdb9501f20b4928a9d"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "a929d95507f1754b4e8dea588706fce0"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "0656b97ae369a26154c4c0d729afa0a6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "8421ad3284beeb513d6a13a32a98bd91"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "f606144cd816dea41f90472ed826e149"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "96a093299c5ddbdc0bcab46271a26777"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "4f8fd5b115a2b99a490fee5189c3737d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "ee69a21df0bf4d47ea8db5c6de760a88"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "1752f5d6df7ebf28675a8d3f2da7bafc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "28e078c825d33bee8b241c65c9d7263f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "7411ab310a2a63f4c8cbf392ee914cc8"
  },
  {
    "url": "Projekte/HMSteve/HB-UNI-Sen-CO2.html",
    "revision": "a357bf4a8cd077cb26525757337e3f5a"
  },
  {
    "url": "Projekte/index.html",
    "revision": "7bdf8397b0730423c098a7682e412b9a"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "0a7987c16e3d9203e25ef90d2274b1c6"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "421e6d279b6fb6b2462c306a34df1209"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "a5402e909cfb563dcf76d6637e9a55d4"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "402a760f471f82496dcbb6b3979ff36b"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "6bb58d11332c4de6e795c75c32774387"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "72b120adf6ad06ca6d11eada3bf98306"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "d72cca44470c397626d27a70109eddfc"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "0a647f987238d9c620e1f85e80e85af7"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "a397dc7a94b48745a2eac518c0c1eb3b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "469711d9470a76fd94cdcb1f9e24317d"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "8535b89621dc9992bf66b093a69ed282"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "9c4543bc3c8515046741f15f70790677"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "4a09446703b93ca548636b6565407ea1"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "3a8d598d298303157c94eb1f983cd3ba"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "5e2c441b44b0b664ddf6fdfe62069244"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "d77d97452dea13893d2964f5ab7045b1"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "4cbff2810c50881980e59a268dedeca2"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "bcc4eab03da783f83d6e2ca06315f47e"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "2cad3836cd31e3a2a82d25861a5a372c"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "73f7895d0905be5bffb02b533d1bb681"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "b3873801138cc1cbf94262d96f308d7e"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "4da1e6bb2e65b9ce98dd6016a08caf08"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "650e44afe6969c9c19efa36084fc3d6b"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "df9327aaed96e006c29d25297425a8db"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "5c060892d5dc05a2775f212b2350b2ef"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "e6f3bbe05e8282bc1681c3fc7ff8e700"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "1b49a32151b7d63903e083e4652a8999"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "d7dec7a16ce5f3cba27e3c1fe2d97229"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "d27717909fda28c1b5c5d3081385b2a1"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "bfe5a941817419a9f56d6084b1801ab5"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "c1a4cb2f16733b5a270b02e051fcd005"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "373df623cc2684deb7295239f0440d50"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "094882c0add699d4d184b0326209e478"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "41375691d47a5a266adfdb1568cff40c"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "99f8fc81c60328184961bf10c6f5b5c2"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "4e208649d9ac2468654757d0b1243d92"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "82fa4fd3a6669747cf95d29ed22fa2cf"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "656a1c0456cbdd6e258d92f079e83960"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "4c90263a972c6b5dd1a7fa033682998c"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "4dae81f7e06f09c1cef3e1cf9978da9f"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "d4433505436bf43492683259e2ee9b9f"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "7df1259114d1bf0a269e734bea9df944"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "8c6bb40fa24a879f3b10a962dcc0acf6"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "494c0923c766fd2f5b0843dda99c2dad"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "e3597779a13d78d1611cd093e496b0a9"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "233cdad5d21168d4b41fec330b3f17da"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "de0c355748fcb0fcc7186680900d9e49"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "e3178d3a8cc06666a4a50c270430fe21"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "a5f397c737447419fe1721c295c1bc4a"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "8e2c88ea3e3989f869f776dddb0cbcd9"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "84e870b7cca2fb61dc9dd3b875a4f7b6"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "2b3ba46036c47da87774df4b7fefae34"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "18ce2bcd75d78e3d40b5b93fc4909178"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "4b7868b424b6e4c0d8ee34d6dc12072e"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "d1dfefccb66ff7689cbb1219e261345c"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "1e6ef25e687cd0fef064cd821199d159"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "7dc89773f17bcdcc3dcf8c73540be66e"
  },
  {
    "url": "rftypes/index.html",
    "revision": "296faf75b8797455f7f12584e35c8ed8"
  },
  {
    "url": "Sketche/index.html",
    "revision": "3636d5c89f5987e99bd4323957d8376e"
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
