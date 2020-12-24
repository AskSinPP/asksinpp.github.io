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
    "revision": "83a16ce16598052d5db4f66a0813c99b"
  },
  {
    "url": "asksinpp.jpg",
    "revision": "ec97d1bb19c982ded43e25e0a4f7f6b0"
  },
  {
    "url": "assets/css/0.styles.a4375087.css",
    "revision": "a8dc797446539f4e99ac8fca36fb8257"
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
    "url": "assets/img/Batterielichterkette_01.abbe1f11.jpg",
    "revision": "abbe1f117228e1aba323d3ba1033a6f5"
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
    "url": "assets/img/HB-CDL-6.eecf37f0.jpg",
    "revision": "eecf37f04837e4c4ae8b2f0a43c0348d"
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
    "url": "assets/img/HB-LC-BL1-Velux.e3612875.jpg",
    "revision": "e3612875dc08ef939b1d4e8d429accc4"
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
    "url": "assets/img/HB-OU-RGB-STACKFIRE.24b2b513.jpg",
    "revision": "24b2b513dbbc5e3113840d00f7df4957"
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
    "url": "assets/img/HB-SCI-4-O-Gar118x.eca2ef81.jpg",
    "revision": "eca2ef8190ba8c5e7dc5bab6084d4b9b"
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
    "url": "assets/img/HB-UNI-Sen-Lev-Vo.d25176a4.jpg",
    "revision": "d25176a46e7be7028f8baa17146736eb"
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
    "url": "assets/img/HM-LC-Dim1PWM.e06f1021.svg",
    "revision": "e06f1021c672b59e66b0267cda65af79"
  },
  {
    "url": "assets/img/HM-LC-DW-WM.7e513ab0.jpg",
    "revision": "7e513ab0ff1dbfb6e94c4d111e0a8fdb"
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
    "url": "assets/img/HM-LC-Sw2-12V.6977fe60.jpg",
    "revision": "6977fe60da0fcba2cf1168f34d7b3aaa"
  },
  {
    "url": "assets/img/HM-LC-Sw2-230V.9aea4b6c.jpg",
    "revision": "9aea4b6c3f977589a5f6cd4eda12bb4d"
  },
  {
    "url": "assets/img/HM-minimal.ff613dda.jpg",
    "revision": "ff613dda5a36741410d14d0209071903"
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
    "url": "assets/img/HM-PBI-4-FM.2ddab1fd.jpg",
    "revision": "2ddab1fd95724067c2cc5fdfca07021a"
  },
  {
    "url": "assets/img/hm-rc-p1-proto.4fcecd0a.jpg",
    "revision": "4fcecd0ab7a4145ce165580e6d0dce48"
  },
  {
    "url": "assets/img/HM-WDS40-TH-I-RTC-BME280.ec15be20.jpg",
    "revision": "ec15be20bbd36b1919007feaa0ee8cf8"
  },
  {
    "url": "assets/img/HMSensor-FlashStation_1.39d585f0.jpg",
    "revision": "39d585f0f4a698c6d5f51eb08ed2c8fb"
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
    "url": "assets/img/LED_Teelicht_02.6e7112b7.jpg",
    "revision": "6e7112b795b0d141815fd06c3f03a028"
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
    "url": "assets/js/1.81e252d0.js",
    "revision": "342e26c642806c0c5ba9a32b59f0a1c6"
  },
  {
    "url": "assets/js/10.dff02cb8.js",
    "revision": "8b93b4ea5d0dc642b2853c9bc95007e4"
  },
  {
    "url": "assets/js/100.ee4f6e20.js",
    "revision": "c5851b8048d3ad893742b3c6164addb9"
  },
  {
    "url": "assets/js/101.7f535f19.js",
    "revision": "f770b1341b3280ef1a8aa5c3f12d0d40"
  },
  {
    "url": "assets/js/11.2f3066b1.js",
    "revision": "479da6fb6f2bbf08270b57bd76f7fa56"
  },
  {
    "url": "assets/js/12.28199695.js",
    "revision": "e75af157e8f8ddda0d58c60ae7fafb82"
  },
  {
    "url": "assets/js/13.2d411337.js",
    "revision": "887f9c85ffbc8b451fbcfc5454fc7cd6"
  },
  {
    "url": "assets/js/14.69290dc8.js",
    "revision": "51294bb5d6138d45af2b08b6ca5e84b6"
  },
  {
    "url": "assets/js/15.eb7322c9.js",
    "revision": "396aba9da1702b90eed6d79ab57e8bf7"
  },
  {
    "url": "assets/js/16.db925556.js",
    "revision": "bf2705f7f935b6ae64aab41beaba25d7"
  },
  {
    "url": "assets/js/17.d71eec8d.js",
    "revision": "0d233d6bc194b446e2d52e76f875670f"
  },
  {
    "url": "assets/js/18.33085e9b.js",
    "revision": "8afd9bf76afcf0d7ec4446aa72784914"
  },
  {
    "url": "assets/js/19.70f5b8c9.js",
    "revision": "024f599451ae1a98a3536f4053e7901f"
  },
  {
    "url": "assets/js/20.ca8954c3.js",
    "revision": "d99fdf2ce40fb38d145dd4a22f23b1d6"
  },
  {
    "url": "assets/js/21.e1752e94.js",
    "revision": "e3cf422bbc2670b4345fa2be5c112683"
  },
  {
    "url": "assets/js/22.6451390a.js",
    "revision": "e224ccae75afcb07ccd4d98db0d448f6"
  },
  {
    "url": "assets/js/23.aecc7b7a.js",
    "revision": "ae1ecd09d79e4af4628606cfc81fca05"
  },
  {
    "url": "assets/js/24.0776a5b5.js",
    "revision": "6bd58ed5e2b5bcc149446f1d8f91e64f"
  },
  {
    "url": "assets/js/25.fb94b2a7.js",
    "revision": "63cc4420e6e178d8020b859b699cb0f0"
  },
  {
    "url": "assets/js/26.869ea114.js",
    "revision": "a38df3894f36bb0c8f2fd340fdf15917"
  },
  {
    "url": "assets/js/27.1c15a252.js",
    "revision": "4fa85ff208a74ee3e80ab414c12427c9"
  },
  {
    "url": "assets/js/28.3d2a57a6.js",
    "revision": "41d8bad541dbce35d43bce8b2b34d104"
  },
  {
    "url": "assets/js/29.1e2bccb6.js",
    "revision": "13a2c61657c9b880c8429eb62f4f77fa"
  },
  {
    "url": "assets/js/30.27aff47c.js",
    "revision": "72080639775dae11087a97879b1ea237"
  },
  {
    "url": "assets/js/31.c934eea5.js",
    "revision": "16a37f4a9c2a01b73eeac959690471ed"
  },
  {
    "url": "assets/js/32.777f1b47.js",
    "revision": "10174ccc894a089c6e39c367b9cfa0d9"
  },
  {
    "url": "assets/js/33.066a90c2.js",
    "revision": "2e091d9b5cab1d1ac47cff6de768be74"
  },
  {
    "url": "assets/js/34.21961340.js",
    "revision": "be2bf9396b837c1db5a9e594a42e6c6a"
  },
  {
    "url": "assets/js/35.75d1fe8c.js",
    "revision": "e6f4c2761568c6266e699f013472813b"
  },
  {
    "url": "assets/js/36.d908dd16.js",
    "revision": "9a3b67483fb323fcb5750ba1aefd6d28"
  },
  {
    "url": "assets/js/37.7a12e43e.js",
    "revision": "bb6a43da34ea345a2a6920614075f67c"
  },
  {
    "url": "assets/js/38.b7145198.js",
    "revision": "93cca34e0b3be23993baf283bb031cf8"
  },
  {
    "url": "assets/js/39.48aa614c.js",
    "revision": "be289b9f7d1899b2d59fcf4850e49836"
  },
  {
    "url": "assets/js/4.66d3de3f.js",
    "revision": "c4605ffc4dc43378087abab72581e303"
  },
  {
    "url": "assets/js/40.ceadcfa5.js",
    "revision": "78208995668a8f1ebe80c331bd10f539"
  },
  {
    "url": "assets/js/41.a0db535c.js",
    "revision": "d1042b833176f2de70aeb4ac91e6e82e"
  },
  {
    "url": "assets/js/42.32b649c9.js",
    "revision": "2a1317662e348d6d44ddc7ef71100165"
  },
  {
    "url": "assets/js/43.239549bd.js",
    "revision": "a9441a009233be2b357713465631fa35"
  },
  {
    "url": "assets/js/44.c29266a8.js",
    "revision": "fdec6f64674881feec96fc15ec52a2d3"
  },
  {
    "url": "assets/js/45.b3615f4f.js",
    "revision": "892dc831eb279eb960f8818ecba58cd3"
  },
  {
    "url": "assets/js/46.b9e13b9a.js",
    "revision": "fdf1cb091f54d471f2ba34e6590b91b8"
  },
  {
    "url": "assets/js/47.6e10ac99.js",
    "revision": "ff2888d9b0f19853ba76eeacac651668"
  },
  {
    "url": "assets/js/48.e4b1813b.js",
    "revision": "f9647e55e88c7473f236ed2992b1f4cd"
  },
  {
    "url": "assets/js/49.dddf342f.js",
    "revision": "0f9ad11d57ca3e4c664555402f675f80"
  },
  {
    "url": "assets/js/5.572dea7b.js",
    "revision": "85cf8f0a0c00166842e5360dd2d99dd9"
  },
  {
    "url": "assets/js/50.6f6d0d5a.js",
    "revision": "cfa92c82b2cdbcb79276b3ba1ca830e2"
  },
  {
    "url": "assets/js/51.774c29cd.js",
    "revision": "fd06432a663e273214a96eb64d7ef886"
  },
  {
    "url": "assets/js/52.976415ae.js",
    "revision": "5cdbea8006f29b5c3ed89c14e0e20721"
  },
  {
    "url": "assets/js/53.566f991d.js",
    "revision": "2c85c96fff4dbe3dc7210e9438bce05b"
  },
  {
    "url": "assets/js/54.f055413f.js",
    "revision": "a227a689e7515db616b28b997c8ae299"
  },
  {
    "url": "assets/js/55.bb332a95.js",
    "revision": "5ba15249a8f45659d9148c6d4a17a9e2"
  },
  {
    "url": "assets/js/56.bbfe5d72.js",
    "revision": "93433f374caf8b20931ee840425e0da3"
  },
  {
    "url": "assets/js/57.48463fdb.js",
    "revision": "207d7d4437cc91fe104c8b386af75603"
  },
  {
    "url": "assets/js/58.a1b4560d.js",
    "revision": "8ec14a3d1d828b622b0b312d9bd57655"
  },
  {
    "url": "assets/js/59.1d59f3c7.js",
    "revision": "334cfdce0bd6fc18e929c72155fa8e0f"
  },
  {
    "url": "assets/js/6.e5f9834d.js",
    "revision": "f472aeff2da0c6397518108c9c438253"
  },
  {
    "url": "assets/js/60.71b78f31.js",
    "revision": "b5374e5a921ec3edbd4bcbeca572668e"
  },
  {
    "url": "assets/js/61.f6eb9b7c.js",
    "revision": "fdf247d64b72dab04e25943aea8908be"
  },
  {
    "url": "assets/js/62.e01a448f.js",
    "revision": "b065f30f9477924828d09011a1bc7765"
  },
  {
    "url": "assets/js/63.fc62e95b.js",
    "revision": "56409e81770245920361f112a4724a4f"
  },
  {
    "url": "assets/js/64.0e1cc50d.js",
    "revision": "5d2910d8c623f8dfb33bd3602ff9494c"
  },
  {
    "url": "assets/js/65.c75e5cc1.js",
    "revision": "c5407c539dac3262b5b968b75ea8e2f5"
  },
  {
    "url": "assets/js/66.86647a77.js",
    "revision": "98294530d9b374245d53c17f11788170"
  },
  {
    "url": "assets/js/67.49f22a28.js",
    "revision": "aca5844ae4324b454a1052c9fba7af3d"
  },
  {
    "url": "assets/js/68.d886bac5.js",
    "revision": "458acb60fe7a82cca60a0c330b2bbaf2"
  },
  {
    "url": "assets/js/69.af7dcd76.js",
    "revision": "5db15cc4a40e6a8215c9271626547ea0"
  },
  {
    "url": "assets/js/7.ddff67fc.js",
    "revision": "c0f56af7e7b9cc040bf5ecdaba89bef9"
  },
  {
    "url": "assets/js/70.af144968.js",
    "revision": "9c9a120ae09b0785d025d77a80e31990"
  },
  {
    "url": "assets/js/71.304ab7fb.js",
    "revision": "5e36342ffd539db4c6590658cbed084d"
  },
  {
    "url": "assets/js/72.bfe98fe8.js",
    "revision": "ccfa981eb114f938995f5193f1f01e6f"
  },
  {
    "url": "assets/js/73.587dabbe.js",
    "revision": "9087a5cca6b5481dd06ec0da869f4058"
  },
  {
    "url": "assets/js/74.806a5de4.js",
    "revision": "0a42079461e15e67a2d1042ac0ce685f"
  },
  {
    "url": "assets/js/75.835dae73.js",
    "revision": "adf2044ea8707f7ee45fae98c4f17268"
  },
  {
    "url": "assets/js/76.108d2bb5.js",
    "revision": "e9a6c30163f779456e6ba03eaf805ea1"
  },
  {
    "url": "assets/js/77.62e7763c.js",
    "revision": "5be40c65aafa0770dc47708a999c35df"
  },
  {
    "url": "assets/js/78.b4fb15a7.js",
    "revision": "b272cc442c7d095166cc52338804dcee"
  },
  {
    "url": "assets/js/79.475903ed.js",
    "revision": "ca320be8906f8811dd3766b38ec76768"
  },
  {
    "url": "assets/js/8.5badebda.js",
    "revision": "5092697ed6df1bb34312b474952229ba"
  },
  {
    "url": "assets/js/80.30054a8e.js",
    "revision": "28ee38e7d49e8482aa6303490b879921"
  },
  {
    "url": "assets/js/81.2995e4bc.js",
    "revision": "996b02d98e5f00534f4a8b230080bd1f"
  },
  {
    "url": "assets/js/82.c4fd1159.js",
    "revision": "6ac01ab72701317df1b02a16a932980b"
  },
  {
    "url": "assets/js/83.968922fc.js",
    "revision": "9e8d1fc02d1645449a1098a2c1862cc3"
  },
  {
    "url": "assets/js/84.8a179670.js",
    "revision": "2cc056aceec9cc9338ad1667dd836fbe"
  },
  {
    "url": "assets/js/85.360bde48.js",
    "revision": "c1c9c55ee8c875c50cd0f7fd5b320464"
  },
  {
    "url": "assets/js/86.a4e843d5.js",
    "revision": "feceb3286805250066995d2616896632"
  },
  {
    "url": "assets/js/87.e40a6172.js",
    "revision": "ad2904881f6fd5a5bf755c19cf70782f"
  },
  {
    "url": "assets/js/88.a85ddf42.js",
    "revision": "f451f5f5cb47cc711033e3457491be0f"
  },
  {
    "url": "assets/js/89.fe74f3e6.js",
    "revision": "ec32357234b603f8e55c4d66d7eb8298"
  },
  {
    "url": "assets/js/9.4a04c468.js",
    "revision": "fd3c2db02eca7c6627ae4b8e183306ce"
  },
  {
    "url": "assets/js/90.747ef719.js",
    "revision": "201ecb4142190f9d0a1a4f6418437de3"
  },
  {
    "url": "assets/js/91.a4ca3b7f.js",
    "revision": "f16a5c7ef1c4fb84d129c80d47a6a04d"
  },
  {
    "url": "assets/js/92.96770755.js",
    "revision": "9cf2073dc4de5227637eaa9f3617f81b"
  },
  {
    "url": "assets/js/93.2a01f808.js",
    "revision": "aad130c81dd2656a4e454fa6a5be4b13"
  },
  {
    "url": "assets/js/94.f697cb59.js",
    "revision": "7ba40c507fda9c7e01e73ae88a0688b0"
  },
  {
    "url": "assets/js/95.68a85513.js",
    "revision": "e235dad6fc01b8270246aebfe9f66495"
  },
  {
    "url": "assets/js/96.e2b3cc16.js",
    "revision": "820b871116157f39df784c1e8ac923f4"
  },
  {
    "url": "assets/js/97.3bca95dd.js",
    "revision": "96068fed206a75f59855ce6897004eb1"
  },
  {
    "url": "assets/js/98.7999037d.js",
    "revision": "a2b099d65a86cb8a8c199094ed35e4d2"
  },
  {
    "url": "assets/js/99.5d15a76a.js",
    "revision": "29f457d074121389ff99604420f37d6c"
  },
  {
    "url": "assets/js/app.b229f770.js",
    "revision": "7af66c160c86748baf650a46d47da676"
  },
  {
    "url": "assets/js/vendors~docsearch.dd5aa24f.js",
    "revision": "179c2ea232e9ffdf4ce1c0a530fe8e88"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "824bf356561ba442f0ea0e865d1406c5"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "22fc63f566ee32c5084e17b979d228d6"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "601485ba94d6c6db587b878378937ed4"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "b7811e7f6c9e519281c4df0b314895ea"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "d54285f4cacb14f3092efa888e5cb6c0"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "919c942b91ef62d3d60a3e817a6e93d7"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "cc8cca622f2c3bbc18afcb83bc75e6e0"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "a60bbe56206617213497a4650d7367ba"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "35bc4c385cef68d2d145584e48897406"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "af9702772506b23a6f9754c7966be7d8"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "4193de5ada4b6e93e1cdb50662efc2e2"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "efe018730a192736f236cbc273e4f645"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "874b57ba5db200f14f7714a7d7a02fc9"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "db59205151f6902b508c451e45bd89d5"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "35721b54afae247b4c2fc10b7713009b"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "508131b9203de636555e416962f4a553"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "1510aa642069bb0c61984697b3900d73"
  },
  {
    "url": "Impressum.html",
    "revision": "0b4b4f9b955cd14798c8d63cfdd77cda"
  },
  {
    "url": "index.html",
    "revision": "076ee7346aa21baacb13cbb6d507a56f"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "e62133a848cdfcaf7866a6a3cc504aa6"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "5ba90f2ef1822ad0959ed5fc58455f4a"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "900df056d5e4e8b83548d38ef5f71a1c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "e5ad6c70fc2ffcefb23df0e823b65ca7"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "8cb6954cc7d1f4cb855a1351b4796ff1"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "b8ab498cf9fe3676f3bb5dbc239b30af"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "afe9ce4bd46e4926201f597be9109043"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "fd22e7d6db24a299f4cf897e93710ee7"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "d690bc38e0335839546580dc62bff54a"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "b0f19bfcf08fb2c3a44ad35c7e89a673"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "62016887da46ff676de3496d79381bcc"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "e1dcebc3260ede707dcece106142869d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "4fdc9200e4d6aa78a0a37c647b9db8d8"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "a259bd3a01bbb9c45019da557d349d74"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "6009cd0112a268b4d62951b0bb074f79"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "fd7ab839d46c84ff42b3cc8e447b076a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "2bba942014fccf369119f2c8aa962ba1"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "2ea833fb4dc30a9765163c9f5c7fd44f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "1ca540d531dc610b094ff7619d7a5181"
  },
  {
    "url": "Projekte/index.html",
    "revision": "b35483c58fd5e8a9120b61720be1ef71"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "b5b782f312c602c6eaf7ba0865cd7df3"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "cf3029d9a778cb9212f303d100ad0d61"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "e8ef765355da2595f0d6e30ce14dde5d"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "eaa682ac58b4a496c88c0b2bda895b4d"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "e5a6dba7f22c5e77e02a19ad9c17d9dd"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "bcc3b4ac0fca051693df03bcff267c9d"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "f6e895106c76e5ee02d741107b755d51"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "bf9226b3e5ed992b8a5cb9659318e2ae"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "f99c526dfb5d011ed8e5db72968ec9a3"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "18de874b1090737090298658e65408e7"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "c295cc4a71ec6f3eae941721b11bcc17"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "adcc5b0bc131b683cf9e93bcbb9b52e9"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "ae9b446a47ca936288aac9f258bea42b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "0372af67417432803966dd44530155e3"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "566f83d27962c47c9478ee914c95ce1f"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "7c1c50d08c127528cacd6d666a5a0c72"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "39a8bbf5809efa3fc1928cb5e4d79a78"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "9dce7d88406d89145c617410699fd513"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "a2236392895a3b43309fb57e54b979e1"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "3c6fef7794e681071f6e79771a468645"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "827616a4f71cf079c2e5aec1c08e253b"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "ed19d8db0314b8b16f2f335e5deba724"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "e77f9654c959154d7a80d029c83601c7"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "d0a3d55106ab14a188bc652032177422"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "0d62ccec6593fdf3c53dccb20ca2445c"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "eebbe947118cf87b409ca96b1f4f3b5f"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "426864a6c14f8e40dfca9d4f87e7e895"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "b8b78543ed66dde1ec4bca8cc72532e7"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "c8fc11a6c790bf62b2a12192f6ae2f5e"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "7aef7b18f848fbefe0cb13b6d1b4d6a6"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "db22b3f853091f75178c5bb8937ed96d"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "58d7513595329ec8b7155a51ef9305ee"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "73e342c9e9c046ff15152d4de6600f64"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "1041dd13027ff2a6703bae865ba96d68"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "6bf32a9ea1558ef728c83f3272526145"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "eae02d2ea5981f5f51573ce659031192"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "452d3303909465d4af20484bff9a17df"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "e31c083efcd6e4393c7cc935d1114dda"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "6ffec3158f9e79430eda73ac7d3db22c"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "28f00b7cdfe893780a23139234e78b38"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "0a5b7ccddb23e9ccb6fa52231cdf8d41"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "cf210a379f012a7e8d0445d698a487b1"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "88fc32c6b60352a03c10bcfe1a86557d"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "ae8bdc25fc9cfe2968d816269ba6c03b"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "a4311fdc9851ac480cc1336d64a8a310"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "e4ed256c62fafeeca4d63de190404fda"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "083ae6abb99e898af3e7aeb5328cb7d0"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "c0ec9548d577507ee8a34b25b099740b"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "9395a5682a4fdf44a7f579fed887f0bf"
  },
  {
    "url": "rftypes/index.html",
    "revision": "6521a17737368fd376ba1f3807509914"
  },
  {
    "url": "Sketche/index.html",
    "revision": "685a7f564c60bc26ebbaa89385ea07e1"
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
