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
    "revision": "7d5c69ed804449c97054eff040fa974f"
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
    "url": "assets/img/HM-LC-Dim1PWM.cb1ba428.svg",
    "revision": "cb1ba428478b6211e7a92eeea385d7df"
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
    "url": "assets/js/1.2a55cacc.js",
    "revision": "342e26c642806c0c5ba9a32b59f0a1c6"
  },
  {
    "url": "assets/js/10.06d1e8ef.js",
    "revision": "cbb918172dfd125cf4ff054c36732da5"
  },
  {
    "url": "assets/js/100.74764428.js",
    "revision": "40e62bf81f01e1d8cc6c25afb1c17a6f"
  },
  {
    "url": "assets/js/101.7f535f19.js",
    "revision": "f770b1341b3280ef1a8aa5c3f12d0d40"
  },
  {
    "url": "assets/js/11.3ab370f8.js",
    "revision": "67ffdb55b061ee46a261944e73452e67"
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
    "url": "assets/js/30.b46ead39.js",
    "revision": "513f17c0e21aaade9b2d2162cf45383a"
  },
  {
    "url": "assets/js/31.1eb4fffb.js",
    "revision": "78eadc20c39e8dd3ae18cc4a34935432"
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
    "url": "assets/js/4.ff021dd1.js",
    "revision": "3a3bbd8bff5d157e5f7c326aed459294"
  },
  {
    "url": "assets/js/40.70e9444a.js",
    "revision": "bc9910544d3be74dfd3c8918b444b26b"
  },
  {
    "url": "assets/js/41.95e5166e.js",
    "revision": "3d502c470663ddf82188b2e01d9734a9"
  },
  {
    "url": "assets/js/42.f9176916.js",
    "revision": "957f02283148079cde71a837163fada7"
  },
  {
    "url": "assets/js/43.e6cf458e.js",
    "revision": "33a4a9471f1d4bcc64de71b009495298"
  },
  {
    "url": "assets/js/44.6aa820f5.js",
    "revision": "5733b646d8afb8d279f11b160d10cbb6"
  },
  {
    "url": "assets/js/45.c18115af.js",
    "revision": "4868679f944ae65c9416d6859e48c895"
  },
  {
    "url": "assets/js/46.668f52b3.js",
    "revision": "66d7bea07146ea2070d0c7f300153ada"
  },
  {
    "url": "assets/js/47.909895b8.js",
    "revision": "ef6418a1763ca3b2d4f581bda24173bb"
  },
  {
    "url": "assets/js/48.a4ea449c.js",
    "revision": "651a2f1f8336e82ed9d3a4f26c19dfcf"
  },
  {
    "url": "assets/js/49.ff0fa1ee.js",
    "revision": "9b91df0b07c12aeb5e19ce21b307a2c3"
  },
  {
    "url": "assets/js/5.9ccde8a2.js",
    "revision": "96833de750ca85f0b6941f82d45cabd3"
  },
  {
    "url": "assets/js/50.551791e9.js",
    "revision": "a175053dbad83b774177857c234b2228"
  },
  {
    "url": "assets/js/51.270b19c9.js",
    "revision": "0baf787c6672af612d24001c40b46843"
  },
  {
    "url": "assets/js/52.aea91f9e.js",
    "revision": "27a978437e2a4a8258109ed14dbec26d"
  },
  {
    "url": "assets/js/53.4a7228b4.js",
    "revision": "364af486f234b2db7fd03e12b35f8de0"
  },
  {
    "url": "assets/js/54.c8d16e4d.js",
    "revision": "5a3f01ffe98e11908c48239ee0dcc1d4"
  },
  {
    "url": "assets/js/55.52526e5c.js",
    "revision": "ecacc93c86c8186a7fef32323931990d"
  },
  {
    "url": "assets/js/56.bf946510.js",
    "revision": "9c08bf9347209d57302dd298b29f3d4c"
  },
  {
    "url": "assets/js/57.d6da0a53.js",
    "revision": "e4fc683b8d0d62ee89e80d368417edc7"
  },
  {
    "url": "assets/js/58.0349fc87.js",
    "revision": "a1926df42b52292831e27d1c19d6c0d7"
  },
  {
    "url": "assets/js/59.f002caba.js",
    "revision": "7627169014a90e3b79f547fbb590b972"
  },
  {
    "url": "assets/js/6.e5f9834d.js",
    "revision": "f472aeff2da0c6397518108c9c438253"
  },
  {
    "url": "assets/js/60.1bd68c50.js",
    "revision": "b29c09186dc1674b3efd383bafd4bbcf"
  },
  {
    "url": "assets/js/61.540d4a2a.js",
    "revision": "e2551682f0295017f9472193c4e2d8b6"
  },
  {
    "url": "assets/js/62.9dea9b58.js",
    "revision": "dce46d8a98e4c7be6a26a2e3175ff632"
  },
  {
    "url": "assets/js/63.72139602.js",
    "revision": "b47dac27c6918ffeed7890cf2d9346bf"
  },
  {
    "url": "assets/js/64.59f2e0be.js",
    "revision": "ac1258cd702a0a7d086474be81069d45"
  },
  {
    "url": "assets/js/65.dbc5bf66.js",
    "revision": "d40aed7c9c1d225d7fcb97cfe1a79274"
  },
  {
    "url": "assets/js/66.f6cce43e.js",
    "revision": "be97b1c2016e2c04e25d595f009042e4"
  },
  {
    "url": "assets/js/67.5a255b05.js",
    "revision": "151d2f905d4353486e6e5a4338062af5"
  },
  {
    "url": "assets/js/68.02ac710e.js",
    "revision": "203d0340ee23181c659f140a2c8fea34"
  },
  {
    "url": "assets/js/69.10021f91.js",
    "revision": "079aa2a702aafb6e1050c93474e1e6c6"
  },
  {
    "url": "assets/js/7.ddff67fc.js",
    "revision": "c0f56af7e7b9cc040bf5ecdaba89bef9"
  },
  {
    "url": "assets/js/70.aecf23fe.js",
    "revision": "ebe066b7d478c5b8bb29676f1bbdcc6b"
  },
  {
    "url": "assets/js/71.0f160039.js",
    "revision": "fc2d8a0295d47e3badfe13440e51cff1"
  },
  {
    "url": "assets/js/72.42482135.js",
    "revision": "1ab59a0b0345d54d8011989d63f00694"
  },
  {
    "url": "assets/js/73.fcb5e209.js",
    "revision": "e0f3a3f9e1d9a5bb721d34049d641b19"
  },
  {
    "url": "assets/js/74.c5a46c85.js",
    "revision": "7c93b982af8e2ad1ff69cbe00313383e"
  },
  {
    "url": "assets/js/75.dee6cc27.js",
    "revision": "a87b5da1b897632ae0ca10feffce0a1f"
  },
  {
    "url": "assets/js/76.ae29e4d3.js",
    "revision": "7d488d8cea27935ef1a6bffaf4b7ce2a"
  },
  {
    "url": "assets/js/77.94ec15dc.js",
    "revision": "5de342cc6bb04df10adaee922f7fe580"
  },
  {
    "url": "assets/js/78.890a989c.js",
    "revision": "2044ca6ab37f3c72b38ece77df1c6f6a"
  },
  {
    "url": "assets/js/79.11bc4aef.js",
    "revision": "b9ebfaa0825002b27ffdb7c79be1f7e4"
  },
  {
    "url": "assets/js/8.5badebda.js",
    "revision": "5092697ed6df1bb34312b474952229ba"
  },
  {
    "url": "assets/js/80.8eebdaaa.js",
    "revision": "42d799baf4a3d1135827f3efd439833e"
  },
  {
    "url": "assets/js/81.70b22fcd.js",
    "revision": "5f22d3edc347a7c397cad25b2ce86955"
  },
  {
    "url": "assets/js/82.36c554a9.js",
    "revision": "bb5b0b3aca61f43c8481861617229566"
  },
  {
    "url": "assets/js/83.5860cd49.js",
    "revision": "40648286f7fb19e496783c5f2ce1286f"
  },
  {
    "url": "assets/js/84.ebbd20ce.js",
    "revision": "6e39cd4b7c01c062c9f1aab30357781e"
  },
  {
    "url": "assets/js/85.d1fa4d4a.js",
    "revision": "5bd9a4586a3323d13e7c5019602aaba2"
  },
  {
    "url": "assets/js/86.e7f66a8f.js",
    "revision": "08c90464030e7d387baec0c6eb78fe05"
  },
  {
    "url": "assets/js/87.cd3704d0.js",
    "revision": "f94947ba60a789e921618a1bd26ffcef"
  },
  {
    "url": "assets/js/88.5b0753e1.js",
    "revision": "d9c3244b2b95a568a7f9b31c89d0f3b7"
  },
  {
    "url": "assets/js/89.6cc438d2.js",
    "revision": "ba076dae3cc7f607fc5550a895fb8014"
  },
  {
    "url": "assets/js/9.4a04c468.js",
    "revision": "fd3c2db02eca7c6627ae4b8e183306ce"
  },
  {
    "url": "assets/js/90.22a29e1b.js",
    "revision": "ba718e4b308a8ed45cf3bbac062ec510"
  },
  {
    "url": "assets/js/91.7dd7ee29.js",
    "revision": "cd4ad7d97880dc172249432ba7caa3c8"
  },
  {
    "url": "assets/js/92.1cdb278c.js",
    "revision": "6a3cf96e16ae793c0712602f26b271ca"
  },
  {
    "url": "assets/js/93.3c089439.js",
    "revision": "06637d9995bb8511dd4989d9b61608e2"
  },
  {
    "url": "assets/js/94.60506fef.js",
    "revision": "bc99e4d276a62fcd03f88cee569bcc28"
  },
  {
    "url": "assets/js/95.6dd91993.js",
    "revision": "2f8a8f0496eb3c951e8f3b0a1296c445"
  },
  {
    "url": "assets/js/96.f55213fd.js",
    "revision": "b6c091247eb1eb724e44377ef26cbf9a"
  },
  {
    "url": "assets/js/97.c66a12a1.js",
    "revision": "51e6ef7f811c2070e646ac61ab9061ae"
  },
  {
    "url": "assets/js/98.dd65a171.js",
    "revision": "d8c86dffc01209599ac4e47a79bfa2e6"
  },
  {
    "url": "assets/js/99.2630506a.js",
    "revision": "b5454aa4fd6248e232644287bf4b9933"
  },
  {
    "url": "assets/js/app.a77dae93.js",
    "revision": "846c34e2abe874fe9c16dbc1a553df25"
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
    "revision": "b82eafcbca6d5252e9ad765362656cba"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "38d9a428f9c512dcd361780c596e1c4f"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "18f3a1147c7b83ed8ccaa9b3d5cdb8ad"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "d0ef30854b742a0cc28ecd50f2a7f20a"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "255882a952b0eabdee5cd458ebe24b5b"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "d941a687af4e168936e9ec96413f936b"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "3fe065ce0533c6d70530341c96e0f79b"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "eaa6d2d3392022ebb012d50a1beaf41a"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "f43093e6193579d6ce58386176ef7d07"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "d694482f7e092dfe67de59e1fe6911dd"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "f4270ec46407cf53a4c8dbaa0dbef388"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "f68ed63a7c1e4332c93188a9c151aea3"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "16be722a5b76a666ec4cff183c70e441"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "cff2659d86a5c383eecc3efafb21428d"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "69a772d845c2baee439e69557b1c16fa"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "7c3abda68a349bbe655d9fdb7e362725"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "ae9f39459c273afccd9f7f44ebe5453d"
  },
  {
    "url": "impressum.html",
    "revision": "e6c9496946357f462185256273c1e2d7"
  },
  {
    "url": "index.html",
    "revision": "7b3c38dcfb4f60ee19a465f7e8a778dc"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "e6507155a7a5c77089f1077f8e420fee"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "26ce278fe78aa6c27ce68524868ade95"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "1cf999de02069c74a8067bfc7b593c5c"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "45efa8360a0774ed63c972097fbf5cfe"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "cd3445f42263e5b7cd481452e4a51a76"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "022b8b70a574ae54fe2aeef605a09add"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "4aa9b2c188bf54593e3c64467cdddbdf"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "dd0394cbcf501bc072afa8f84cd5aa73"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "0e266cd075428187a3da891ec5eea97d"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "6ce1d5cfdfb538e5c8e722d13edce54c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "8a40af0fd438a113f773c837f83dc2a8"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "c0398116619ff75b155a04f50164d2b2"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "bd178b1065728e4af945b3c6914f232e"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "038c8467db9682109ac7f74e0f0cd4e3"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "d205e73b5afd44b2936ab709fad529ae"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "055d1acd1034c367a1b254feac1a7c08"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "fa19ada6a81880dd78daa4110461c46f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "65e5bfbe2429a2dd99ecd7ba28d99931"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "f08aaeff338caa44c7839752b4e12ed3"
  },
  {
    "url": "Projekte/index.html",
    "revision": "725e6e6dbce9d671874e0d8aeb7e426f"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "ad1df22abbec276c26e36900ce3e5144"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "f6212b00369e5ecbbde2b0ac12ef9f9e"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "313a54e4ecb121c176961bd7c616421a"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "a0f5bf57c284e490cc583d04cfa9b740"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "4f11569c94221e02aab52eebc7b8362b"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "0ef0c90db9a28c4de964aea86f1d7e15"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "7551b369650b1ea7eff906454e92911d"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "df8639453eae3fd7ee70b36564d6e172"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "fa11d2cdca8c564b21d75443af2b4545"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "6305e0646748d073ef7cdb7497adc5ca"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "010c4242fca8e7588acd8068d44762b2"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "ab2c04c7167556674f658a8f05e677f5"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "553ed619823db302fd5ae5a4fa6635e4"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "1e9c70b806caf12e27a5abd53e131cd9"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "98b16b95b561b39e261539fce1859ff6"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "aebc19b62b8db901585f4b7036eeb88a"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "60f3bc7f94090164110ec0d5a0bd6e14"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "56571ed12721cee9c26e09308d4e30a1"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "c9f141e423976dd2db3b1b5decd10369"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "1dcab356a10913e33ad4817fe4878033"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "d441b77e48a222026914dea49bd84829"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "3e71e3abc64bcd0bedc2ac94aa682c60"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "aea0b3999154b34b8c41848fa90ec512"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "58b14e45c4b1841687bc2d80ca3a8041"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "3bf996ca6d0f12aabe23fc5c34418951"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "0f7df0171fb02cc105dc1e1c76638063"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "5894f180b4e4b111a0d83da89a94ab0a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "f865951d05a466128fcf98d0b9837baa"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "926599ddf637d0aac5ddd0e9be3b718a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "9b7049f7408037c0ba71f12575a8bbaf"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "3c4c827c31d37100a9c8c1f734002f22"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "89bb221dbad03aa6e1594dec6ba55218"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "d528c33e554a5c270f9119b5979056f5"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "a8513b9e8839d1b611c9548d97f51918"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "5dadb49fb27d89d02716fa1fb78e6be8"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "ebc75679393687987cce572af3789f47"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "089aa3bfd5925eb2f97a201ade5a40fb"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "d03dd172d977c9218af6bd9f39116beb"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "70ce3714341a6985a7c7c52fa5ff93f5"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "d28734de01314cdb927fd1af717173a4"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "f0398c5a7c461e1bbf8d9f94347ccd39"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "25988ea471a87c3439b0b879c2fea418"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "e30e72fb53f27301c5d25a0efb063fdf"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "b841e39e571ea05fd4cdb49f5add7baa"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "8d3833d7c45ef99b0ee6de56659276d3"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "fd2c89d87f66480b08ad8b408c19a5bc"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "b5fad6bcc0a50edd51d3b2f950dca1e9"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "2abca8927985ab0e38b4f6df1f6d26d6"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "7560c9e27a35f5ca6fc12e09f4666843"
  },
  {
    "url": "rftypes/index.html",
    "revision": "85ecbafd57ca15ddc1cf3ccac39a4e50"
  },
  {
    "url": "Sketche/index.html",
    "revision": "c660f08f90bfed01ba280b328a33f7b7"
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
