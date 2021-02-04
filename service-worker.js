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
    "revision": "1cb325f8aa23fa42dbea46d9deb9bdfe"
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
    "url": "assets/img/HM-LC-Sw1-Pl-DN-R1_PSS.2a82895c.jpg",
    "revision": "2a82895c4eb8b9d6639fb5d8bfe523b2"
  },
  {
    "url": "assets/img/HM-LC-Sw1PBU-FM_ISS2.595b032a.jpg",
    "revision": "595b032a3668300118da5bf77a678ed3"
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
    "url": "assets/img/HM-PB-2-FM_WSC2.435612da.jpg",
    "revision": "435612da1f74a43218caa7c80f33def0"
  },
  {
    "url": "assets/img/HM-PBI-4-FM.2ddab1fd.jpg",
    "revision": "2ddab1fd95724067c2cc5fdfca07021a"
  },
  {
    "url": "assets/img/HM-RC-8_BRC8.30fee958.jpg",
    "revision": "30fee9580a48a5810ec4c6703525e8ab"
  },
  {
    "url": "assets/img/hm-rc-p1-proto.4fcecd0a.jpg",
    "revision": "4fcecd0ab7a4145ce165580e6d0dce48"
  },
  {
    "url": "assets/img/HM-SEC-SC_WDS.ab08b424.jpg",
    "revision": "ab08b4247e85139c36947084bb2fce2c"
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
    "url": "assets/js/1.b17412ef.js",
    "revision": "ce54c068997e7c543063bc60486963cc"
  },
  {
    "url": "assets/js/10.d60e6d5a.js",
    "revision": "d77c89716d8e2732d2887458c14a6d76"
  },
  {
    "url": "assets/js/100.5a0a78f0.js",
    "revision": "61480c3d1e76e338cc3d1dd6a6c03b9b"
  },
  {
    "url": "assets/js/101.c81698cb.js",
    "revision": "af72dd789fa9616cf391fa0be3620f77"
  },
  {
    "url": "assets/js/102.bfe61e7d.js",
    "revision": "c8059842b70041667fa5adbf9e1ca4d8"
  },
  {
    "url": "assets/js/103.6c4cc3df.js",
    "revision": "ea31894e711744109221bde539525504"
  },
  {
    "url": "assets/js/104.a5c6bb87.js",
    "revision": "2d6ccf7cdeaf24581fdeed56d27c9942"
  },
  {
    "url": "assets/js/105.4ea4c0e0.js",
    "revision": "b6655a59f23a31d8a71488276666f96d"
  },
  {
    "url": "assets/js/106.861236c2.js",
    "revision": "4a067dc063e72891930dfb8d4dda393c"
  },
  {
    "url": "assets/js/107.26262427.js",
    "revision": "97c8496da0ace8696d9de953c7d44095"
  },
  {
    "url": "assets/js/108.d0576983.js",
    "revision": "d3f9064d7403b05250119bc869efa72c"
  },
  {
    "url": "assets/js/109.b2dca3d8.js",
    "revision": "7c6b475f3321726d83f8e51b9dda7c78"
  },
  {
    "url": "assets/js/11.43032bf0.js",
    "revision": "d621087fdd7c4ccdcffa42a7d2751ae0"
  },
  {
    "url": "assets/js/110.7c714372.js",
    "revision": "1e00ee867d60271d5af3b663ea679f52"
  },
  {
    "url": "assets/js/111.97f3d896.js",
    "revision": "c2798481f317de231922829e2f81e384"
  },
  {
    "url": "assets/js/12.7521090f.js",
    "revision": "2f648c1b13603fdd2d16e10111d932bc"
  },
  {
    "url": "assets/js/13.523d0375.js",
    "revision": "c2ef857e2693a6ae656765b536d0e293"
  },
  {
    "url": "assets/js/14.e5cebca7.js",
    "revision": "921e827340638a2acc1bda1ecee8a216"
  },
  {
    "url": "assets/js/15.a377f293.js",
    "revision": "8ae231882933e2f74653e9b537e421a2"
  },
  {
    "url": "assets/js/16.7cb63421.js",
    "revision": "4de4cf0d42bc6f2755fc569fc4444158"
  },
  {
    "url": "assets/js/17.4880e9c8.js",
    "revision": "f8cadc60d6ca5d71328f47a7fbece480"
  },
  {
    "url": "assets/js/18.68b1f1ee.js",
    "revision": "2ba89d16fb0b751aacb1b770776edd76"
  },
  {
    "url": "assets/js/19.0fd33fee.js",
    "revision": "2e702cf190eaab31d7189cc29db2d540"
  },
  {
    "url": "assets/js/20.cdb2440d.js",
    "revision": "25edc9ada5d2c67bd8c31f804ef7d03a"
  },
  {
    "url": "assets/js/21.5d4d1488.js",
    "revision": "e4e3d3c0288f39ab14247380dec6e376"
  },
  {
    "url": "assets/js/22.f076fd68.js",
    "revision": "49cad7cbff8f56d85db12f4ec0ebaba1"
  },
  {
    "url": "assets/js/23.c1c68862.js",
    "revision": "a03ba0cf94c774760f36ad8ae20b9653"
  },
  {
    "url": "assets/js/24.28535287.js",
    "revision": "36253df73b8e666bca9eb5ff12302c93"
  },
  {
    "url": "assets/js/25.962f5c34.js",
    "revision": "76d02db8cb2aa1b7e8bfd7344046f049"
  },
  {
    "url": "assets/js/26.300a29e2.js",
    "revision": "dcde9db0eb70b9e554c8163159344eed"
  },
  {
    "url": "assets/js/27.34c22c54.js",
    "revision": "8e646121e640ddf7c8d1c85853d2625a"
  },
  {
    "url": "assets/js/28.67b70a1e.js",
    "revision": "981120fa97b122183e428ffce1c8ff1c"
  },
  {
    "url": "assets/js/29.6e50fb44.js",
    "revision": "e3f66c0220b317a89282c2769570239c"
  },
  {
    "url": "assets/js/30.bc5e756a.js",
    "revision": "453f8ba613409923b6ddf2532ffb2578"
  },
  {
    "url": "assets/js/31.d01ed4b3.js",
    "revision": "ceb14f8d1ad23f2f32b86be28a8a2316"
  },
  {
    "url": "assets/js/32.c0345c0d.js",
    "revision": "c1e765034d273ea9aac368d8dd85a95d"
  },
  {
    "url": "assets/js/33.69d62f7f.js",
    "revision": "03acdbb192f0f929fbebabcd1c7ade7f"
  },
  {
    "url": "assets/js/34.8ec20adb.js",
    "revision": "da499c20da9a4ce3545067da70f5d34b"
  },
  {
    "url": "assets/js/35.d29695cd.js",
    "revision": "a1d564b78eb5ebd0758a773a321a0495"
  },
  {
    "url": "assets/js/36.4e53a870.js",
    "revision": "86e825744ea42b3ba49df37f4076d01f"
  },
  {
    "url": "assets/js/37.1c1e71de.js",
    "revision": "f7c54cfe78445c1f1bb7f09ef610ebd4"
  },
  {
    "url": "assets/js/38.f3655f23.js",
    "revision": "6ed5df1dbfd5c0dd624454dbafdda521"
  },
  {
    "url": "assets/js/39.88d98175.js",
    "revision": "3735dc3a24f2bfc0eb136c91f1c52699"
  },
  {
    "url": "assets/js/4.068cd6f3.js",
    "revision": "aeba471c6640908fca5329800e5aa6cc"
  },
  {
    "url": "assets/js/40.62e09f38.js",
    "revision": "85c46c6c633f8e0d94e328dd2ce22d7b"
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
    "url": "assets/js/5.389c7940.js",
    "revision": "877ed6ce241cf821a81492039a168e7c"
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
    "url": "assets/js/6.9cf42050.js",
    "revision": "5513de3d55856260201104e08c5f8171"
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
    "url": "assets/js/65.1f657132.js",
    "revision": "1ab2a6c6ddbebfd712fe3bc688d5edd9"
  },
  {
    "url": "assets/js/66.81b9c88e.js",
    "revision": "d62369ab9d419973bb99ba0bcc546444"
  },
  {
    "url": "assets/js/67.dd140686.js",
    "revision": "b7b36a66651be52ca506ed75b38fed8b"
  },
  {
    "url": "assets/js/68.09b5edfe.js",
    "revision": "d5b054bf90522441beee6871eee54b54"
  },
  {
    "url": "assets/js/69.028e6f52.js",
    "revision": "aefff9693e149b3e64806b95136ce9a7"
  },
  {
    "url": "assets/js/7.d918bd19.js",
    "revision": "21da98aa983a1ad299e71026df797f34"
  },
  {
    "url": "assets/js/70.7bf8f775.js",
    "revision": "b07b2b21e0e0091afdcae068fb1eb8c9"
  },
  {
    "url": "assets/js/71.db54e5ad.js",
    "revision": "f234aadb743677822271ffc768b3b438"
  },
  {
    "url": "assets/js/72.5a9a177f.js",
    "revision": "f35149be110b8b4455f2350d08fa8f68"
  },
  {
    "url": "assets/js/73.cddb7bee.js",
    "revision": "cbefdfb6b4e492ee3cf12061092c264b"
  },
  {
    "url": "assets/js/74.3bce4314.js",
    "revision": "22a1175445f8beded55af14bca7fd4a3"
  },
  {
    "url": "assets/js/75.a8361832.js",
    "revision": "046d75b7843cda4052a968021c1858cb"
  },
  {
    "url": "assets/js/76.a38b01cd.js",
    "revision": "700aa92ef5cdf7ee7982a2e2fbc8c884"
  },
  {
    "url": "assets/js/77.f9415598.js",
    "revision": "27e6dc339cafcae59c14457f59dafebc"
  },
  {
    "url": "assets/js/78.ef9b8414.js",
    "revision": "50abde77138e493168d430b82abd1bb8"
  },
  {
    "url": "assets/js/79.f6f71af1.js",
    "revision": "9706f8c992a568cd980fc5963fa580bb"
  },
  {
    "url": "assets/js/8.94ef7d7a.js",
    "revision": "b9aee92e91409f48dc05dee6d51302aa"
  },
  {
    "url": "assets/js/80.34ea4d58.js",
    "revision": "f305d34a58af55c3b2189fa03f9f449b"
  },
  {
    "url": "assets/js/81.b5dce6b3.js",
    "revision": "dd36d3a3fc7f41a7adfadf16a6abb360"
  },
  {
    "url": "assets/js/82.7c4148cb.js",
    "revision": "3b9348997de1c940f6ed487b7d1c5c7a"
  },
  {
    "url": "assets/js/83.cb9fb1f9.js",
    "revision": "81b10b07f895440781790855325ac6fe"
  },
  {
    "url": "assets/js/84.fef7fd3b.js",
    "revision": "8532d599e75eb264bb8b17bda1504e37"
  },
  {
    "url": "assets/js/85.66c20282.js",
    "revision": "5ae485f1f8fd43428b26e3ab06b878af"
  },
  {
    "url": "assets/js/86.6d921a2c.js",
    "revision": "42168de7a6755be76f2aa5ee45a9530a"
  },
  {
    "url": "assets/js/87.e4d105a4.js",
    "revision": "3dc74cfe056036e9c1b468aa18890b8b"
  },
  {
    "url": "assets/js/88.c4fbd975.js",
    "revision": "93a7eb5c9eb1ae3fbcde1814b36f0172"
  },
  {
    "url": "assets/js/89.1a1abd23.js",
    "revision": "6b79ac41f783033c2b5b8f317cceedcf"
  },
  {
    "url": "assets/js/9.eeaa01f3.js",
    "revision": "c9006afd9e64cc5e033fae4df2fedeb3"
  },
  {
    "url": "assets/js/90.2355d8ab.js",
    "revision": "20299e048ac01cf63130406c35162ee7"
  },
  {
    "url": "assets/js/91.e33ab3ef.js",
    "revision": "b8d3c09064b52c7bf1a71a098b6ec1a8"
  },
  {
    "url": "assets/js/92.68fce4a3.js",
    "revision": "c3646ec7bb577bad30568ebfed09e414"
  },
  {
    "url": "assets/js/93.cbab6ce2.js",
    "revision": "90af93677a210ad20549abbe41ceb2e1"
  },
  {
    "url": "assets/js/94.0acf08cf.js",
    "revision": "140469bc075e7269fb141d450f9455d0"
  },
  {
    "url": "assets/js/95.8e7fbcd0.js",
    "revision": "b1d04d92f7afe8e4546ba76f88989b43"
  },
  {
    "url": "assets/js/96.a7155233.js",
    "revision": "88803262d0170275989c79286f471ae2"
  },
  {
    "url": "assets/js/97.f2e5bc46.js",
    "revision": "a4a98aed0378febb35772750b78c2572"
  },
  {
    "url": "assets/js/98.91e97678.js",
    "revision": "97e113a976891bb9702eab71e3e8aba4"
  },
  {
    "url": "assets/js/99.671fbdd2.js",
    "revision": "7838575c6d2499b69b56264f116c2714"
  },
  {
    "url": "assets/js/app.455226bd.js",
    "revision": "225df45c95760cb3fbfe6211fee61cab"
  },
  {
    "url": "assets/js/vendors~docsearch.8f9f1563.js",
    "revision": "2ae7926c7d5de3de4b24fb0039a92fce"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "78e2cb1bc053148bdaa874076f94fe9c"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "44e26f3c94867fe0ea17288bc039c1f4"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "f084f11c88df980b14ead7fd6a14a8d1"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "8aa6bf10f0980aae97916078001b934f"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "046e6e652fa3502fd0c82923ec918090"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "ee9432be8d289e2cf4723e52878b092b"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "908902158bc5aa870697bd5beaa041a4"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "e3e355f87901f44732e65bb3be3ff95d"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "e6bc5e9797a82d1c1bfc9be688371c48"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "0dcab3a14af7513e160bdbf1a77ac436"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "2484759098c9f2f275362a48565b6f1d"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "eafb37cc88b76a5c3d51bf719c0b9828"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "4b552b1c41380359010a445773b626cf"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "8c2023bb047b191fd13757139f91fcf7"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "7bd6b359d27fd11bda6a3246a5f1ae54"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "aececdb4421dcfcecf00166b064e52e4"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "f51e333eb5ceb52a68809094144b34fc"
  },
  {
    "url": "impressum.html",
    "revision": "4102a42e60cf2eabb4c8c9ef21fb17b9"
  },
  {
    "url": "index.html",
    "revision": "71d93ca5a422ee1f0e743b19a12677be"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "a4ee791eade761c4bc95a5aebedceae4"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "5ae5cc0b0ec59b06ac0e54fa4fb85dd8"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "75bcf028f61f003b5705e27c7bea099e"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "30c2c2d3e375570b9ba37e203ec14791"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "4e6b238b534b1babe83685b4f4b6a360"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "bf8515a218f1f8ead1c9e215ce28c755"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "94e8ddff9e2524ebaed33d503fc93012"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "cb5e249efc090b6aba15e975737075a8"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "82f80ca19ad53f9dbf9e641e144600ae"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "5ff8f2a5eb036ebdaff892eeaa8c5dc1"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "422c3e3cb594ec902eae6b4c92f2bdc8"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "9a772afa6e14225a23f86a9578eb1053"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "18f4854d81fd6770a433947d793a8da6"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "0e9a8afd3078768b8aa790f3a4a25b4d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "4c2a7b99f82d0eb23fd5f3b4bdb91cfe"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "ef6f780f799ffa9903c9475e4dcc8435"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "b192384ed0140e5ea6bedb9f1e86dfba"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "e4ab176beeeabe060477b8312101e7fa"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "d4008f7e5b07cd0b09432afe05d85e5d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "3bbcdb9e87e3f1537c3e30d907e47ffb"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "7fc972038c2653bb89838b6d28ec0d50"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "00509fb807e00cc04b4d115071cec71b"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "391aff36c5852382a545f9cb30a5423c"
  },
  {
    "url": "Projekte/index.html",
    "revision": "e7f5a89db506c3f4fca49533f258e92f"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "7ad419a2717529fdf2ea67380e5cf717"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "75cfb2de90a7782a0049a382c06c2736"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "0da1934a44b7762aef4a3c4de5681546"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "7bd4bd529e8328a1abb083c60d975b3a"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "89954e6d8f14ca83ee1ba1c61a64ad24"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "79e02ff7aafeeb973c7d3d07f7918f35"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "c929d714fe8a97622f4d1a17adbbe4d3"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "62e539addc1cb37df3e1eb7d7b097f6c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "ece045f04c3012a859aeeea9516b9e00"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "c98f783a430ae1bd0585ea65c829522b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "c18dcd59d474f72c2346b2dbda71d3ce"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "f137dc15144e58bed1bf9bb23538f227"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "5b4c6586c0d1063a500de8c0513efa67"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "63d12eaf163671af5e3a8b145b330669"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "1e61a301d4e25cf7e10474636046df9b"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "370eb42054a7a50d031aa0baf4fa8a3c"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "90dd46769bee993fafd898ba96c76564"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "34fcfaab73b97c66538fc34203194cb8"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "0974624bc395144050da54823433c1d4"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "bc2571549eeafc95d5985e09463e3c2c"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "31bb22fef772f632b7d348d350771c97"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "ba0fe27f005016be374ac12b9fab9bdf"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "a91de896f0421571bd2fa4a98b1e0afd"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "ea29b80b9e8a8f32b73a79ff2053fc74"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "fa0c17196bbd6ea618d17ae29267a739"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "9f6057b87e9d47ff5faa1dabfe5a97db"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "f6bb43d73320a13e8d8464a61c51c7f1"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "669cd13dfaf31f889b70ce92f4a156e1"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "d2e02a7e4e45108f79edb41198cf7ff5"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "6abb860e5168be315337970a8ddb58dd"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "be5007425cd97ba9ea001d4cd16033f6"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "4f7b1a15bbd6122270ba6b1eb096b59d"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "bae3b522acb0b92858fca11c85b46670"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "27005f028e605412eaea808503138bd8"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "91844accfa5299d1bdd0eba6a3a115b7"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "fc4e695480393af745b8564f07fe98bc"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "e7ca7bbab2f5c2b6494194996286e4d8"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "deae5e030d262ca9b8996224efe46bf0"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "82b58782ee424d723e357d1c5b63ea56"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "5a71a8cf5398fc796a86182b2ca2741e"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "5bd81e897fefe1b1b5f6e824270f447f"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "15e52f796b83c0e793a31174d30ff422"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "f3a785013236eac79de128f96848b140"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "e5fc1ddbb52fe4ed9897a8775f09b946"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "4f899458bc2c10c4b52c8c89a99e4fac"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "2e87e6b73294b09fd1d9547a44e9eecb"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "320e30c7459e9126b699e2e4aeeb28d8"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "c82e03112f1e680bde27489a8220eb24"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "ca4961a1ff7a2d98e5fcc8dfbbade324"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "41444c64f9db9077485f22990446ce8b"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "3a129d48e166eedb6ecbdaf197310b6b"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "6cff49c67d81332114192723249d3d9a"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "25f0e9d632969564134d228aa6676b7f"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "aacba94ff7f4bd65da06c7b4329321a1"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "d3cf843281b959266de4c57f321c9aa0"
  },
  {
    "url": "rftypes/index.html",
    "revision": "ef45cff68da47b1b776200eb0b59503e"
  },
  {
    "url": "Sketche/index.html",
    "revision": "155242b6161275b3b779a3e46570caa8"
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
