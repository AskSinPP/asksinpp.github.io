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
    "revision": "eb4d375e475b287e5960f8153a9ce4e2"
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
    "url": "assets/img/HB-UNI-Sensor1-AQ-BME680.c103ae45.png",
    "revision": "c103ae459516deec50a602fed235cebb"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-CO2_SCD30.fd7c24c7.png",
    "revision": "fd7c24c710e7569b1213c5ebdf8e32dc"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-TH-SHT75.b8451a3c.png",
    "revision": "b8451a3c4ac890e4176e244ab70a4a7a"
  },
  {
    "url": "assets/img/HB-UNI-Sensor1-THPD-BME280.9b8970c9.png",
    "revision": "9b8970c97e88511410afd6211fc8398b"
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
    "url": "assets/js/1.63a046d6.js",
    "revision": "ca61975ff42eeb7f3e7c10206dbf59e6"
  },
  {
    "url": "assets/js/10.a0a13bb5.js",
    "revision": "321cf6a9873b2e4318c241582fdd5da5"
  },
  {
    "url": "assets/js/100.095bfd7e.js",
    "revision": "8abca26b50c0a98ad55d2772ad4e27fa"
  },
  {
    "url": "assets/js/101.86eb6872.js",
    "revision": "200488f6468766a5a03f83fca0285e2c"
  },
  {
    "url": "assets/js/102.d7e8cd99.js",
    "revision": "831dea59b04a16e00eddc3bcc0d5ff09"
  },
  {
    "url": "assets/js/103.d70b5358.js",
    "revision": "6a76cf5e092c52bb5e9c7552c747500c"
  },
  {
    "url": "assets/js/104.83bc3e2e.js",
    "revision": "7453b03575a85c4817e611bbfb679a7b"
  },
  {
    "url": "assets/js/105.4228dec5.js",
    "revision": "43e3ac711263770504ec5bc75205588c"
  },
  {
    "url": "assets/js/11.27c8eb52.js",
    "revision": "1874f5eced5b85cfa06f8bfd5c1eb2d0"
  },
  {
    "url": "assets/js/12.93d0e10f.js",
    "revision": "bc5dd1a99f6908209255f25983efcbdc"
  },
  {
    "url": "assets/js/13.f2a07555.js",
    "revision": "17f3fc3cfe9ac89b41d86bd70827640f"
  },
  {
    "url": "assets/js/14.b3ed4d32.js",
    "revision": "1d1478479761fbd4e45c4c69f206e068"
  },
  {
    "url": "assets/js/15.30dc5267.js",
    "revision": "935c884b1b5d4f71b1a76ab52a6141da"
  },
  {
    "url": "assets/js/16.150629e2.js",
    "revision": "1d1f90e31e44fe47db94b435b843fc90"
  },
  {
    "url": "assets/js/17.8bdb50d9.js",
    "revision": "31af414efad9cb67351d3fe2200aecec"
  },
  {
    "url": "assets/js/18.ae40f71b.js",
    "revision": "1b97433f3bda040e911c6cb8600e3b89"
  },
  {
    "url": "assets/js/19.70e9b86a.js",
    "revision": "5c080c1dd7b09a6e1fa38fa03a8edf0e"
  },
  {
    "url": "assets/js/20.731721b8.js",
    "revision": "a12505ca5b016059ad43b2340f3ee6ce"
  },
  {
    "url": "assets/js/21.3f549f3a.js",
    "revision": "27654befb3a4ed68d7b2ad969c1df78f"
  },
  {
    "url": "assets/js/22.c40ef6e2.js",
    "revision": "b90485ffd67bb3aa4b70988da4300427"
  },
  {
    "url": "assets/js/23.97e26909.js",
    "revision": "899756d495d5abefcbf86b94f063d492"
  },
  {
    "url": "assets/js/24.41c5d302.js",
    "revision": "c658fd64b3cdaf8a8a12a1f308a1d39b"
  },
  {
    "url": "assets/js/25.a7f5c453.js",
    "revision": "1fa4dd9e1857a5b070ef5011e2609bdf"
  },
  {
    "url": "assets/js/26.d2aa628e.js",
    "revision": "494ee7279d7d571af20e46ca52efec43"
  },
  {
    "url": "assets/js/27.ee71fd2f.js",
    "revision": "d0a1a27d87a54006e48ea4ba82d52e10"
  },
  {
    "url": "assets/js/28.a984c42d.js",
    "revision": "0a11e01072642561bd8c35ef6a3f7b00"
  },
  {
    "url": "assets/js/29.1ff8ca20.js",
    "revision": "005c69cd2381cbcfb7517cb4de48e669"
  },
  {
    "url": "assets/js/30.cdb4190b.js",
    "revision": "1ebb47874e575ceb2c4f5cd23f51b523"
  },
  {
    "url": "assets/js/31.372d410f.js",
    "revision": "68481ffe862e6676bbc2ec25aa5ae6dc"
  },
  {
    "url": "assets/js/32.15e05ce6.js",
    "revision": "ca7a7aa1d4394f5521bf4c165b875d26"
  },
  {
    "url": "assets/js/33.87358799.js",
    "revision": "7bd5f923f622e41f229072bea453a66d"
  },
  {
    "url": "assets/js/34.fe17a720.js",
    "revision": "62184be042c287a3694d0d6a6f6f78fb"
  },
  {
    "url": "assets/js/35.a3ab8216.js",
    "revision": "6fd8ae3ec9dafe4bb6f50f4f64dd843e"
  },
  {
    "url": "assets/js/36.5d536938.js",
    "revision": "0de86cbf1acf06239a93ca14c2e786cb"
  },
  {
    "url": "assets/js/37.2ff412e9.js",
    "revision": "e35b5ac864953a6199b0c7a1e9e6ebec"
  },
  {
    "url": "assets/js/38.cb3370ec.js",
    "revision": "14c6872e9fbcdcd64ecf18c97d396f30"
  },
  {
    "url": "assets/js/39.81e797c9.js",
    "revision": "4ece6d6527d585a2b896576d09c7219a"
  },
  {
    "url": "assets/js/4.45c984d0.js",
    "revision": "e5479b487eff2f43e08a180b499aee37"
  },
  {
    "url": "assets/js/40.ff36d20d.js",
    "revision": "79aa0329b6dc4985cf16d9e58259179e"
  },
  {
    "url": "assets/js/41.95e5166e.js",
    "revision": "3d502c470663ddf82188b2e01d9734a9"
  },
  {
    "url": "assets/js/42.a53b9459.js",
    "revision": "126364124c55f2e77ddae4db216df559"
  },
  {
    "url": "assets/js/43.16852653.js",
    "revision": "2e6dc37725d6088b98f03bf8d1037d8d"
  },
  {
    "url": "assets/js/44.a59aad65.js",
    "revision": "a2c836f4e971bb9c646a72cd2a4367f2"
  },
  {
    "url": "assets/js/45.a0f01004.js",
    "revision": "90436ff17e6cee841b27bb6fe493347e"
  },
  {
    "url": "assets/js/46.789d3d11.js",
    "revision": "53106aabf587c17301c4114e729571c4"
  },
  {
    "url": "assets/js/47.935e673f.js",
    "revision": "98d22d74738ddb70ee1811cc0ffe1fb5"
  },
  {
    "url": "assets/js/48.ac4b6054.js",
    "revision": "e40e5860cdb8de7f1e6149efce86d56d"
  },
  {
    "url": "assets/js/49.57d8e01b.js",
    "revision": "ea733f612b7490ace6c35502aa24cf02"
  },
  {
    "url": "assets/js/5.aa0f61e7.js",
    "revision": "f611b23fffe5662a61d8d1b48d95feaf"
  },
  {
    "url": "assets/js/50.6d03abc3.js",
    "revision": "8ad2b8ba5d9799499f24a8f471d97858"
  },
  {
    "url": "assets/js/51.8afea20c.js",
    "revision": "11f6fb80e54d5dd0d2afa5b90b4e9e76"
  },
  {
    "url": "assets/js/52.35bafb11.js",
    "revision": "960997917854d8f27adc62c4e292cfbf"
  },
  {
    "url": "assets/js/53.27edacbf.js",
    "revision": "25b252db65b17ec8b3f2bd9113bbf0d1"
  },
  {
    "url": "assets/js/54.eaab6577.js",
    "revision": "25f4c514acaaae887a670fd2c941ebf9"
  },
  {
    "url": "assets/js/55.ef677439.js",
    "revision": "95f721eb8837f16905331dc6dff3fbc0"
  },
  {
    "url": "assets/js/56.90f798cb.js",
    "revision": "a3f027b6e8d5de748602aa42a1fa5bad"
  },
  {
    "url": "assets/js/57.bef0e21b.js",
    "revision": "ec97924958fbf8ee89c5c38a623ba427"
  },
  {
    "url": "assets/js/58.2ea3ef43.js",
    "revision": "41a5f59a35297ced1d99cf3272a96785"
  },
  {
    "url": "assets/js/59.d44b0297.js",
    "revision": "e685e8f36167231abdb9091552c91d26"
  },
  {
    "url": "assets/js/6.124c21b1.js",
    "revision": "7a95710d07795df19d7e05c2c2f509c7"
  },
  {
    "url": "assets/js/60.0c3ec0d3.js",
    "revision": "5c7526eb7bacb297abbd59ad741c6385"
  },
  {
    "url": "assets/js/61.fb4440e4.js",
    "revision": "31da0df61480ecf7809613e717dfa5e8"
  },
  {
    "url": "assets/js/62.c6470576.js",
    "revision": "633033bcf51134903d6e2b78fa98f6a3"
  },
  {
    "url": "assets/js/63.0e7d6519.js",
    "revision": "0f4cd6ca647231f6ce01e8d7c4d4a2d5"
  },
  {
    "url": "assets/js/64.f8f2498f.js",
    "revision": "d6c9077593fb652094b9ccf6f657a0a0"
  },
  {
    "url": "assets/js/65.1764d8cc.js",
    "revision": "21e979bd32fc72066558742921269b8e"
  },
  {
    "url": "assets/js/66.a1a93fe2.js",
    "revision": "1ae3ba84d43f8cb1e74aea25af13172b"
  },
  {
    "url": "assets/js/67.0d4a47c7.js",
    "revision": "5c8079ac1cb00377d58071f9379d4b70"
  },
  {
    "url": "assets/js/68.b670a088.js",
    "revision": "67803aeb652d65cc7fc988c2de7d5c65"
  },
  {
    "url": "assets/js/69.23364f17.js",
    "revision": "a88f825a54c3d80b12ffb13dae9020c6"
  },
  {
    "url": "assets/js/7.359c89c8.js",
    "revision": "e5e43e1ac4eee2d8ba733a0ec633a587"
  },
  {
    "url": "assets/js/70.16bd4029.js",
    "revision": "ba29b70933e95e98441dfdae1bd66225"
  },
  {
    "url": "assets/js/71.29361d45.js",
    "revision": "ac268b858973cf1fbc4c3fd9659596c0"
  },
  {
    "url": "assets/js/72.c7d2349f.js",
    "revision": "a9a3d79f807b9e3ec34b72c1bbe4a3a7"
  },
  {
    "url": "assets/js/73.35dff72a.js",
    "revision": "59b5ad1a0487dbd5501c66f7eddd3417"
  },
  {
    "url": "assets/js/74.99807205.js",
    "revision": "7c048284d9be9759f3a15a38561b8753"
  },
  {
    "url": "assets/js/75.97ea5005.js",
    "revision": "40805a5dd6dd43616a579c1899b8e9a7"
  },
  {
    "url": "assets/js/76.3ac4b0f8.js",
    "revision": "ab2873b771f1562647d89a7895dfc64e"
  },
  {
    "url": "assets/js/77.cba9b414.js",
    "revision": "9087f8cdf75e72b6d53da08ebd31d59b"
  },
  {
    "url": "assets/js/78.8d68f9f7.js",
    "revision": "b99e9990458a054ab0b961d0e6b229c8"
  },
  {
    "url": "assets/js/79.c7ce58df.js",
    "revision": "c46723755abbe8ba366f93e1b0b9848b"
  },
  {
    "url": "assets/js/8.06200b83.js",
    "revision": "77b5ba5fcc9c27ff8bc3990942188289"
  },
  {
    "url": "assets/js/80.746c4ea6.js",
    "revision": "35ee9b2697349604cbb6c6bb885793d4"
  },
  {
    "url": "assets/js/81.391b02f0.js",
    "revision": "c93525b3e2bf35bb484d6337946dfb24"
  },
  {
    "url": "assets/js/82.270b20ad.js",
    "revision": "02438311056580ef7a4b311f3a5a588c"
  },
  {
    "url": "assets/js/83.b3ae9f46.js",
    "revision": "e2ca96b54baf6f7da61e555c86b5bcf3"
  },
  {
    "url": "assets/js/84.9596ebc3.js",
    "revision": "13e7ddfe0fdedc25d1c255d3640b7177"
  },
  {
    "url": "assets/js/85.0a22a90b.js",
    "revision": "3d2719b32c8aae95a04c4ffcb648340f"
  },
  {
    "url": "assets/js/86.2d9dc159.js",
    "revision": "016fa568cd2719226e333ac91a87bb1b"
  },
  {
    "url": "assets/js/87.295004b5.js",
    "revision": "566f21c1d4e193bbd818f2982edac43e"
  },
  {
    "url": "assets/js/88.cc5a853d.js",
    "revision": "f79356e51ef38196b3ba5caad5713eec"
  },
  {
    "url": "assets/js/89.ccb179c9.js",
    "revision": "1e67374587d5eb0e583849c0bd9308f8"
  },
  {
    "url": "assets/js/9.6cd09ff6.js",
    "revision": "3f0703e13747687c34ad21748ac7742c"
  },
  {
    "url": "assets/js/90.510c2497.js",
    "revision": "062233b55ddf0e964a0ad2e7d953d9a6"
  },
  {
    "url": "assets/js/91.f5d9105c.js",
    "revision": "dd5b111a938627a5438f5b19de56dcf4"
  },
  {
    "url": "assets/js/92.06364710.js",
    "revision": "46cab28c1525e8fbae1d1ad13aaffb2b"
  },
  {
    "url": "assets/js/93.010efa17.js",
    "revision": "f4e6ef6f7c506a062628da4e39ef37db"
  },
  {
    "url": "assets/js/94.bc732885.js",
    "revision": "deb8baac4f8414509b9bd610483739bd"
  },
  {
    "url": "assets/js/95.f4a39162.js",
    "revision": "079793e79fcb8ea218cd6502ae84e5a3"
  },
  {
    "url": "assets/js/96.2c78c03b.js",
    "revision": "52ad6e4712b8261878dd3cdf14a700c8"
  },
  {
    "url": "assets/js/97.be6509d3.js",
    "revision": "a3f460ff754276b5d86351bd9b9dcab7"
  },
  {
    "url": "assets/js/98.2e72428a.js",
    "revision": "bf358710fd92a9d3a607c61c2ede1987"
  },
  {
    "url": "assets/js/99.1fb4ca77.js",
    "revision": "e42ed1787cbb8961c377a3ad5855a475"
  },
  {
    "url": "assets/js/app.9e3004e3.js",
    "revision": "1865498bac0ae51fb25f8b149858cd77"
  },
  {
    "url": "assets/js/vendors~docsearch.542e7d39.js",
    "revision": "5ebf82d651dd14bdf405e0a70dface55"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "f678930d176f4c17bd34074ef4a5907a"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "c77f22eaeff687cd11baa78c8194be51"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "19da74ca7fa8dcbcb6a4b4123c4e5db1"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "3f67dfcbd1efe0c4e74f11c60748b8e8"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "2cd21cab28616a75237c1893e8d22628"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "269b29d944b21f5f7341f6c75e2883c4"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "cb57b7acc363a1873df2a1a3a20772e1"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "2226790b83d67c2ae1a3817bb0cbea2e"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "741a9cd147d7b236023597a936544281"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "b0f6b1e20f9c8c0fb45df15553322019"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "fab8be89e70e9f4b6a7953432672b4fe"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "276aa30ae0ce4d2cb2f9eba15fdd681d"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "6749e36ed62c18b4328a3587b0376632"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "89927fec6c5fa7e5f73ad271e55dfaa7"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "6db471fdf5d0ec53a274bc4844aaa42d"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "5b5a140e87e5931a2590fc91a83c9e21"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "f0903a3920eab1e03fae66acd380f590"
  },
  {
    "url": "impressum.html",
    "revision": "fa8599fb745af61fa1143c801a5c643d"
  },
  {
    "url": "index.html",
    "revision": "d2143c31f399d56d12dd77d77df2ffbd"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "e93d019cfd75fd3c3dce88f3f7ca6764"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "4b1d7a4e823974f763ba811853aabb88"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "5f883792e9fc394c916a7da6f3ce52b4"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "6a39ec066a8f59c98ce6306de8ea7b2d"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "1b797605c7a96cb5e3613a69fcc3e3d6"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "8400da44237bad250c6d879f3a51d7fc"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "705875d3989c1dce15e70e47c475b6e2"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "b13771e2dedbca8f462f792994ff6209"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "158038cdc3b459610b634f23ba3e70f0"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "07a8669ab08bfae2494e556effeb9eab"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "71d84306c34fdaf9b34685aa0c766ac6"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "11872ae8a14884fadf689c21bf683a2b"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "3bff04df1b7e3dde2ee72fa107b21d8e"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "9a7daf9fb78ae24e1b64f084d02dbd6f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "ca4a689f43cc89f219ca276e93753953"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "1dad1eb4e68fd604e111a2c23378034f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "8b394722c379ca542069914adab8dc38"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "3124e83b0507823fb4c513a4fd08d52a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "f46fd1b7db3bc9746cadbac53a0a649c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "3b2d1591b5edc9e2287dbb57ff25f58d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "7a8bfe5f66a072ac4cd63f74646f453f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "610945f20b95ffa9bbbff533822b8f26"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "907e9c93cc7bd6d0be5a8b486d32c375"
  },
  {
    "url": "Projekte/index.html",
    "revision": "0876e306213392ad124036a4a987ed00"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "94590ea1de185684d80afd58a0f8f4b5"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "f3d762dc50f1c6c9f5fce09c1b47800f"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "dec6971b4166ccbc91590dc5e3bb77b6"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "90d04a9ef33b297a856e0bc6cfced04b"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "3b8e443087053c2318214ea4c652be0f"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "66c4b44f45abbfae487283cc648c71d7"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "08b8c4e28348c896d1196efbc0eae402"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "a64ba463ff7030a3a72d3447a265651e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "8ab7756c5d762d16cf068f8afc2cf4b8"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "662a2095efa59280402907a8db271c1f"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "d484356807b08a90a19f7cfdfe9ebb7b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "717c1b2e3cf9e509908b35b1b0a5739e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "315b71b617ad8e51f4cc386eaa5ee74d"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "59a9b5bb6c321c385e31996c92c123af"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "b266fedc61ceb3ae73cd7a369b92956d"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "bb60c07f21fda526b7aa4c264d7e2483"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "77f8ec064c06e0c2fbbefdaaaed27ba7"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "a02c6aadf17b1b0e1a4700b68d3d64c8"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "791bef28f3134b0cbb1686b2cd05a789"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "83be22d3d938418fdc492725aff049d5"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "4b8d6838fce525d9cba1d0ad05bc8fcb"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "c0b0ab0d384ac921d8200e5e8db42ade"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "8c4ac1d71c7a47cbae2151e73493407c"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "ce7ea545437299d9c022a92c22aa38c5"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "35914309f8ae98ff0b8b1285fa8855b4"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "cb35d26a70f8565713c48aff953f7b84"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "d4f79abd423f968714e28955db378baf"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "d15d977241084c01660e0419698da173"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "de76e369866f47e37cf309a4cf0a9940"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "a64fc44851fd65af661ea9c133fa410f"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "747fc060ac40380f3395848c498a2c43"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "19491afc6c8ffd9fdcb82efb25f15d44"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "2a87f34b666487fa27bf8edcd9267edb"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "0f1bcdf92ed6663bee331d7700e7e7d0"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "2375f777f022f8531548737b5735542f"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "155d828cb983e6002521852cbe7d54e6"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "10f21afb73d0038569697b0bc7a68833"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "f631999d1ba70416a3611225d2cf07c0"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "8b31edfa7d48673890ae4b0b83d5e4cb"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "e1f60253e064ff864e97beb12353f4b7"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "fde18bf2d3c3159beff4a12397bd62d0"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "7803d5360ea2f8fdad0dd7bcc6409fee"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "7da16a07c0f8a0f1488170119e251b2c"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "ea826cbaf8e7f7bac64f83db6974895b"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "73eae3c969ea87cfa23f3d29283ef5cd"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "e1a8923729eb94f1423962b508ad068d"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "d5e94a390fc5e3da1bad5631d53c2336"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "7fb45553bcc9f71ac93c56299bf64902"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "0518821dd037d1c79697dcd70619b0b8"
  },
  {
    "url": "rftypes/index.html",
    "revision": "fac1c32c8698d24ccf9b42627b796be3"
  },
  {
    "url": "Sketche/index.html",
    "revision": "df58468c47543f610f7c16a1133c20ce"
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
