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
    "revision": "ef9b30838345a228f531a3b505cc033d"
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
    "url": "assets/img/HB-LC-Bl1PBU-FM_ISR2.6f1a5e59.jpg",
    "revision": "6f1a5e5951cc3564c039702065a93752"
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
    "url": "assets/img/HB-UNI-Sensor1-AQ-BME680_KF.c103ae45.png",
    "revision": "c103ae459516deec50a602fed235cebb"
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
    "url": "assets/img/HM-PB-2-FM_ISC2.f6a31dcb.jpg",
    "revision": "f6a31dcbfeecfbfcb830688bac13900d"
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
    "url": "assets/js/1.aa13a563.js",
    "revision": "374ed12ba75bb13eb3e31ebce3d279a8"
  },
  {
    "url": "assets/js/10.aa53c80a.js",
    "revision": "55de75db70ef850b433630ef3db571ca"
  },
  {
    "url": "assets/js/100.846fa537.js",
    "revision": "491cb7fcff80e35bfa2196f18c076fdd"
  },
  {
    "url": "assets/js/101.712044e9.js",
    "revision": "9db0a6e5482abd1e02bc4391b029166a"
  },
  {
    "url": "assets/js/102.0363bf8b.js",
    "revision": "d234541254910069df4bafd5938d8c4d"
  },
  {
    "url": "assets/js/103.f52fdf75.js",
    "revision": "510de26a6b5477e097d43316f31bdcc5"
  },
  {
    "url": "assets/js/104.94b0507d.js",
    "revision": "5ca3d38d9374978179422575c725f4a6"
  },
  {
    "url": "assets/js/105.8217a288.js",
    "revision": "7ca044dc56f18ddcf690ab506bc2671f"
  },
  {
    "url": "assets/js/106.baa6a6b4.js",
    "revision": "0ff9e07bb50d0638292ef2d9b0d6d428"
  },
  {
    "url": "assets/js/107.9a8bde9c.js",
    "revision": "31ee084be797cac332e933facb8f1474"
  },
  {
    "url": "assets/js/108.25c68618.js",
    "revision": "1c63c7f4dd93100e693fdefda7034d4a"
  },
  {
    "url": "assets/js/109.136a20fb.js",
    "revision": "883e6989984b129e418bca702796ed99"
  },
  {
    "url": "assets/js/11.e80a26a2.js",
    "revision": "5184992aaec0f6a38d67f62b11fef46e"
  },
  {
    "url": "assets/js/110.dfc986e8.js",
    "revision": "cb5914a2eceb7a0f5f5b4928c223ff08"
  },
  {
    "url": "assets/js/111.c9e64182.js",
    "revision": "9aab61f9fb6b7da7326c6957ed456a35"
  },
  {
    "url": "assets/js/112.a19ac1ad.js",
    "revision": "03eaa5edfd5b55185cfbbc334e2dc650"
  },
  {
    "url": "assets/js/113.bc916734.js",
    "revision": "4c6333994e394ba77b928f84491424d0"
  },
  {
    "url": "assets/js/114.983020eb.js",
    "revision": "d7c9c6fb353499cd14414311e6fec08b"
  },
  {
    "url": "assets/js/12.0ab41722.js",
    "revision": "9831e54cc1f239ddf03f92dc9cfa1008"
  },
  {
    "url": "assets/js/13.7a981061.js",
    "revision": "99035398958073cf5422b6d415764495"
  },
  {
    "url": "assets/js/14.ac1464b1.js",
    "revision": "0c40b09116bef1cb896d843c3db4516e"
  },
  {
    "url": "assets/js/15.81fcdf07.js",
    "revision": "caf20728e15180e5fc8e53fc619f944e"
  },
  {
    "url": "assets/js/16.cebd9848.js",
    "revision": "a5f01ed42888eaae3409b6fc121b0878"
  },
  {
    "url": "assets/js/17.a1893302.js",
    "revision": "573c2aed8cbf672841187fbf242fa11f"
  },
  {
    "url": "assets/js/18.871d8cdd.js",
    "revision": "2fa79db154e0af2d89e522a74cbfe98a"
  },
  {
    "url": "assets/js/19.8b8ac40a.js",
    "revision": "76a48e661e157ceb26f7087914958581"
  },
  {
    "url": "assets/js/20.b1a5d855.js",
    "revision": "90a30e38a79b37354769e474b3e2ed17"
  },
  {
    "url": "assets/js/21.79ab23c4.js",
    "revision": "c804e35f854bfd23a6553ce23659ebbb"
  },
  {
    "url": "assets/js/22.afd601ff.js",
    "revision": "8da8efb53d1ab5151e6d209eaa975e55"
  },
  {
    "url": "assets/js/23.8a112338.js",
    "revision": "31e529f38056feb37171619316f2c07a"
  },
  {
    "url": "assets/js/24.dff3c306.js",
    "revision": "a2b9bf19fb588c041f0a6d8b54c23b04"
  },
  {
    "url": "assets/js/25.22f0ffeb.js",
    "revision": "e9ef387962053be7978bd5d5f800469b"
  },
  {
    "url": "assets/js/26.fde392ff.js",
    "revision": "a242c9b5821cbdcfa6816aec1b5c1982"
  },
  {
    "url": "assets/js/27.ce4f0666.js",
    "revision": "85f9a9ad741545ae79ff85057e87fb6f"
  },
  {
    "url": "assets/js/28.cb1ec572.js",
    "revision": "620d6bc3b2f1a76af094002791c2d32d"
  },
  {
    "url": "assets/js/29.bff10d5e.js",
    "revision": "c3fa197c724b06dba7bc8fbe4fd2bf36"
  },
  {
    "url": "assets/js/30.1de1e714.js",
    "revision": "37f0cb8f29a3a9a6342ffc0b0089bd19"
  },
  {
    "url": "assets/js/31.11313e3b.js",
    "revision": "82e3d477a0d1ccb0d5c528221324ddf1"
  },
  {
    "url": "assets/js/32.771dac5e.js",
    "revision": "2554d8c2993a5a5b46455d57da2b3028"
  },
  {
    "url": "assets/js/33.aaa8eecc.js",
    "revision": "39d12354cc5ede21b0cc4806e3ab6bc7"
  },
  {
    "url": "assets/js/34.f6e7a62c.js",
    "revision": "9192fb50470f9239b673f8e05132aa96"
  },
  {
    "url": "assets/js/35.fc7343ef.js",
    "revision": "4810700a4d9e1a3678a9323fd55ad8d7"
  },
  {
    "url": "assets/js/36.388ead33.js",
    "revision": "7213a2b540fe24fd5453c65b3c78ca20"
  },
  {
    "url": "assets/js/37.7bf0412b.js",
    "revision": "5bf6202dbe4e799b498502868f1fbdf5"
  },
  {
    "url": "assets/js/38.d4cd36c7.js",
    "revision": "02d8e960f477df0504ca5b4370cc5e8f"
  },
  {
    "url": "assets/js/39.38df8f00.js",
    "revision": "b027d9bb1c8f3db1a428cd7777b6e634"
  },
  {
    "url": "assets/js/4.a7dcc205.js",
    "revision": "2da333c7712743e9b2ffa56042992984"
  },
  {
    "url": "assets/js/40.81e0ed79.js",
    "revision": "af8950c3bbc144bc6ca309c055f6a3e9"
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
    "url": "assets/js/43.aeb3178d.js",
    "revision": "4194be241a7051beb56b4bf760ecb648"
  },
  {
    "url": "assets/js/44.a007f943.js",
    "revision": "3fd5f863d616c2244c1017c688f48be7"
  },
  {
    "url": "assets/js/45.8b55567d.js",
    "revision": "6fcfda2bf9a743659a46c82d5bf3509c"
  },
  {
    "url": "assets/js/46.09896506.js",
    "revision": "b0c1eb1de13ae587189637c6fff783eb"
  },
  {
    "url": "assets/js/47.f2ab0846.js",
    "revision": "373a355c4edc8d69cc5b67f3b2d53e60"
  },
  {
    "url": "assets/js/48.a22e7bc3.js",
    "revision": "61e22aa156b595fa383a44e65809a3b5"
  },
  {
    "url": "assets/js/49.c70e2996.js",
    "revision": "1f5056a2adfae7b618e6e07c17ec9f38"
  },
  {
    "url": "assets/js/5.51c2d878.js",
    "revision": "e4a182862cd2a5f105aaf205b4a450aa"
  },
  {
    "url": "assets/js/50.90d39e3b.js",
    "revision": "4bd61dfbe16c0ac2af3dab45111a7e9f"
  },
  {
    "url": "assets/js/51.a37539f3.js",
    "revision": "3600828d6368792133cbcee277c69a45"
  },
  {
    "url": "assets/js/52.271cfb07.js",
    "revision": "71b54406a2caa70736c11030281f6621"
  },
  {
    "url": "assets/js/53.9491a68f.js",
    "revision": "5dec67863728d0b7d9e77aaa6694eb39"
  },
  {
    "url": "assets/js/54.c1bf4a6c.js",
    "revision": "e04793bfbc309669f3bb97a5bd538593"
  },
  {
    "url": "assets/js/55.8d14310d.js",
    "revision": "f8b5444bb8ad6ddf7ac869f72567eede"
  },
  {
    "url": "assets/js/56.0965b8ac.js",
    "revision": "172e8d49e6aca1331f385bd667a1691c"
  },
  {
    "url": "assets/js/57.a887d0a1.js",
    "revision": "4097aa8cd093121e1622aa8a7d8a09d5"
  },
  {
    "url": "assets/js/58.1c0dda7e.js",
    "revision": "b0236e89c9c51699b344164f28030127"
  },
  {
    "url": "assets/js/59.1eeadba3.js",
    "revision": "72cb7c0aa7bcb2ef366846beffe738e1"
  },
  {
    "url": "assets/js/6.1b4ee2a7.js",
    "revision": "6840da021cd98e40992890210b76c3ec"
  },
  {
    "url": "assets/js/60.35f3aac7.js",
    "revision": "c3d2d93f42781590f15438b6b5785cda"
  },
  {
    "url": "assets/js/61.4681b24f.js",
    "revision": "06e0cec3c8e8fa7e0961cd57f0fbc10c"
  },
  {
    "url": "assets/js/62.56212672.js",
    "revision": "a37a95000e1af11537a4327ef6b6eb6e"
  },
  {
    "url": "assets/js/63.ae482a46.js",
    "revision": "3d3b4b0b5ca29b79f02e5e074d4615c7"
  },
  {
    "url": "assets/js/64.0cd9d7c9.js",
    "revision": "a8d5a050372ca7d648275f4d93ed46f5"
  },
  {
    "url": "assets/js/65.a466d8cf.js",
    "revision": "4c9c29834d6c092e65cc4964089693f6"
  },
  {
    "url": "assets/js/66.2bfa07e9.js",
    "revision": "ead84118bb5432d6314acfcffde38528"
  },
  {
    "url": "assets/js/67.c0b05d1f.js",
    "revision": "f6a06e6a13febd947640dc5eaa001ba9"
  },
  {
    "url": "assets/js/68.3adf6db3.js",
    "revision": "b004bce1cf36b632d52efd52344789ce"
  },
  {
    "url": "assets/js/69.888cf5f6.js",
    "revision": "98d7f7704e6f058347670316266a72df"
  },
  {
    "url": "assets/js/7.6e631ee1.js",
    "revision": "303952d20efc269a89d103fa27a8973e"
  },
  {
    "url": "assets/js/70.02711232.js",
    "revision": "98ec26c903fca350ee498d9f369c9171"
  },
  {
    "url": "assets/js/71.dc7663eb.js",
    "revision": "295244ca44d6b6050b1a3fd7c4180dd3"
  },
  {
    "url": "assets/js/72.58f22e64.js",
    "revision": "e9d417a1828fdcfdf4296aa805c42638"
  },
  {
    "url": "assets/js/73.8d4e2c5b.js",
    "revision": "62206bee2dfc976d554204266a6b2bad"
  },
  {
    "url": "assets/js/74.ea1c45e3.js",
    "revision": "9b02e48589f772433ad6c1de5b3bb780"
  },
  {
    "url": "assets/js/75.0d851cf8.js",
    "revision": "f70704d0f9e2e48de6386d0204df19e4"
  },
  {
    "url": "assets/js/76.3e9f05fe.js",
    "revision": "ebd51aa4ff07a2bfc835f5522019f98a"
  },
  {
    "url": "assets/js/77.91aa0234.js",
    "revision": "1ef29148faa9a60b9a6a12c1fdc5ad4f"
  },
  {
    "url": "assets/js/78.5ddc36aa.js",
    "revision": "1af67566f5fcebd0a0d3c1553b4881fe"
  },
  {
    "url": "assets/js/79.db08fff6.js",
    "revision": "b06c3da227b256842c26f0abda0455a4"
  },
  {
    "url": "assets/js/8.cdfe601b.js",
    "revision": "becc1bc367ad8a949f799ac9318d51dc"
  },
  {
    "url": "assets/js/80.7403afee.js",
    "revision": "9066d18c095536c5d89548bc998a0d85"
  },
  {
    "url": "assets/js/81.f1197194.js",
    "revision": "5968cf955311dac9827175202700e174"
  },
  {
    "url": "assets/js/82.1b477a97.js",
    "revision": "7185b12798a912804a13fd01e4fc8c95"
  },
  {
    "url": "assets/js/83.3efdbafb.js",
    "revision": "c24c3f5b651472027bef763cd8a99a2b"
  },
  {
    "url": "assets/js/84.1846a281.js",
    "revision": "0109a77e3d9f47d9f5b3719b016198bc"
  },
  {
    "url": "assets/js/85.45351945.js",
    "revision": "cf4d19f871cb5678d2a907a909b8acb2"
  },
  {
    "url": "assets/js/86.d153e1eb.js",
    "revision": "f6e43223a4ec8fe8cc41b36b0d09597c"
  },
  {
    "url": "assets/js/87.f7a8f3e2.js",
    "revision": "ec3cabf1fdb8bef767eef6187a73144c"
  },
  {
    "url": "assets/js/88.eb1fd4a1.js",
    "revision": "3e7c7e0265dd65c2a0bb5d35723a11c7"
  },
  {
    "url": "assets/js/89.e0fa8061.js",
    "revision": "791d5281d06e9da49a7804819b7d70b6"
  },
  {
    "url": "assets/js/9.85765fb3.js",
    "revision": "9efb7728aed264d70c8e3e8eb73098dc"
  },
  {
    "url": "assets/js/90.da1319b4.js",
    "revision": "314f18450dcc46f61a61586b569559b6"
  },
  {
    "url": "assets/js/91.55260632.js",
    "revision": "3805c33f2d04cb4416cd48614ce37d44"
  },
  {
    "url": "assets/js/92.92a6eade.js",
    "revision": "4b82f732a408b0394d07f0b20e81f840"
  },
  {
    "url": "assets/js/93.c38bd972.js",
    "revision": "0ad96c02c715d08d51c7c39977a090e6"
  },
  {
    "url": "assets/js/94.35e9bc47.js",
    "revision": "9bcf986b7728c012e89f71fc6c1a65b1"
  },
  {
    "url": "assets/js/95.099676af.js",
    "revision": "c81fdb727e84bdd661268fccdcc18abf"
  },
  {
    "url": "assets/js/96.99581018.js",
    "revision": "8530a0e2ddbb63d2509272332511eed8"
  },
  {
    "url": "assets/js/97.588a5702.js",
    "revision": "e1ee3fac4da6f262f564fcdbcf491972"
  },
  {
    "url": "assets/js/98.43b0df07.js",
    "revision": "d882f2076a5e33c614e665722569358c"
  },
  {
    "url": "assets/js/99.03cc2965.js",
    "revision": "2b08fd4b9c81503ce0ebe8ba12a2c99b"
  },
  {
    "url": "assets/js/app.9ba09c03.js",
    "revision": "68ae3c6d6b97a844807064b95837dd55"
  },
  {
    "url": "assets/js/vendors~docsearch.b282dd53.js",
    "revision": "72aae0021208705b463a7caa0762e4a1"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "c96d5bf9132af28417263a2a8b4b939f"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "d7caa4c26adf879eb905d1cc9ea5ea05"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "e60f29a68c5c4416d439741ca46efa9e"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "9533041093efa7a0127d8e1dcd32c8d7"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "9cffcad69fb3539db110473585d6f27b"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "fe1a03c85f797eb9d0c72cbc2ab1f7d4"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "2b4a08041c3d97e0016412fd03c8718c"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "c509c4a3eb88c4707c8b6749fa9630d7"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "dcbc4e09422316a7ea41b936bbb0425c"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "c88ff1eb4b192b33740d55f60a1819cf"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "fb62a73b96dba036c9fa280ebe71a7f2"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "5ae7ecfb4d3b9c3c8e78c9bdc296b807"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "07c89980510c8c36733cd362f35dce22"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "b183fa57803c8fc7dbeca58755769474"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "04cf276c7552427236d796062c713bb9"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "333703c8a7630615df30a18ae0c35233"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "a6d0490ce99524c1787ed07a801363a5"
  },
  {
    "url": "impressum.html",
    "revision": "c07eacbf54dcd489dcdcdf397d8ff316"
  },
  {
    "url": "index.html",
    "revision": "dca9e8847ab4dd52046e9426ccf21d2b"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "648ed159a43d5fd94cd8f6cb4dd63849"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "3afe9bc75999de00e9e2c74b3a130fa9"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "00b5faa858454fa86115bcd7263cdacf"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "5fb7b350ec7da462fd495b67aa74a734"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "1fc832b65c5f6654337a9d6d1fb35e39"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "d01b12415567cdb0789dfbe93a7de478"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "6a7a00dc9e5db989db23a253cbd85409"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "ffe778ab0215afecb880516f8c78966c"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "9772a66a06f1b167aeb929efe9d24ebb"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "8b98807d7f661f6215d485fd49dbace4"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680_KF.html",
    "revision": "3c62b930bf3e95b34253296d6279c2e2"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "f9dd785666b4fbaa3bd8c2bddfb294b3"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "a6297c4b1306a2dc3942bcde61d4a42b"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "b6881e8cb5244a795b1ba47a3f28b594"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "19fee2c87887367ce91a2e42b8409981"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "14b70644a18e1f47961d7c08b1ae9b60"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "5a824dbfadb4482a12159cb925dcef45"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "91fafd7a1eadaa25231d1fce5993434c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "8a620b60430ffdf46932a7c1da8b1a24"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "53288c2b597ebca5aaeaf9d9a49f592a"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "408e75d9af2073408acf3199a99bf828"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "3870e1785d94ef56946337258160d2f6"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "ec5d524d571be7461a1585054784c848"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "d4f8545b364a340dca186c66c763ef6b"
  },
  {
    "url": "Projekte/index.html",
    "revision": "4e65bf4053c88ab6fe246eef4a533734"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "4bcf1cc14b35346262c96ccc612a20fc"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "ab2fa3f309f61aa8338c03839435103c"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "0f515addb81222ca4d8ced38b62c5054"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "4c512bd50b513a1cbb5bf3da04e6c696"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "4ecb38d5643f489d4ff28845bc6430e6"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "8896efbdeff306f90ba4430489549aac"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "453c7abffdd3dcb7db713a72d899cafb"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "765ffd1a4de1f405bc861c17d3ae9419"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "e854fbb22a8893fcba842e532aa5633c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "fc255a59c3872cef6d9a1698e3b7cc7a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "fbf63ae10cbdc14cc9800ede5d8cb96f"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "8c3f392f67367a26784581a1b991232b"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "1eedbcbc378eec9727310600c2808482"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "d7ca8691634246c2000cb365f3e19f3c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "7510cefc5b202f6567a7ef07f1d1c297"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "78d64cd6e89fc15b3e70ddee4a54ad30"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "b30467439c4488dfc18b9f62bc47a45e"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "9f53c8e4f1f77d462eef80dbbf4feaa6"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "7b6facd740da53ab24429d6cef7841c6"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "2f9aac92963a2ff206eba41a0a869372"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "c7b1d9be76e61448b3fcba81364befaf"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "ca62b50d2c2f6022c784434f72b57f11"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "17e7a4a8689116f913be87ac85ab6631"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "c4d880ccd01e9829a99eadd32be1c30c"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "879157fcca49eb87fe545bae55e78df0"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "575f607a26d8e6dcf375e0e0ba19500a"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "a96dc970365670c12c2f2fe62d7e0e22"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "d68035de13340b6f4590b052261d6772"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "bbc801c55755db132f5b2f53a05e3c75"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "1b518eb65453107ab7620470c60b464a"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "172f64ac11d16d542a4a4e257365d9ab"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "60eb23d1341f171554d7869980dafbd3"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "569dfb138e8fb9c9f2d669b38a1e136e"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "b4870620f200e5e43c92b1abf3c27492"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "60fac1b138c2eb65f77c75ab42458661"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "8fabf8adee4642b0375a661c4bd6c962"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "298e1306f61a43e8f98b2573ac5a5afd"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "7d2ca6aaa0a7e2bef506c3c0c009dccd"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "21b0fcdbc45235033bc4325c99c2f4ea"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "93cf704d9efb4e3946b1b95acb480849"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "3cca6edec6cb2ec75d027b6d7d0580b4"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "c3865f77866924c8c7f16469fc296a5c"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "d61e21cc593a2d704c85d9e08b0d4b85"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "cda219a1c894525da39e5efbb9af05e0"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "1e70d2acecd3afff3436dbda77908800"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "0ee2de298e60a323e8183471d1f03367"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "ebcdcd3c227a262aa3d0af23435e66ec"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "f55991fbcd568e2f17af7b177ba7a82b"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "617fb99a400b489e123347abe2821070"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "7500371cb74b292d85ab6b2fb00dca82"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "d2be47431b3da43504ac76dfceb2d7f7"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "1964ece209353790a244621bbec078b4"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "acff474bb593bab4010221ad431ca006"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "748aea303b1c03af973dd52d23fcd5a2"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "9e4d5e8451cc7d3204f8ff512db87997"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "ee16f1891da5406e15e485b4171e20a3"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "1367b20721db8fb8df46227ce957c218"
  },
  {
    "url": "rftypes/index.html",
    "revision": "b31fda25790a4622e31110c455955d21"
  },
  {
    "url": "Sketche/index.html",
    "revision": "6f78693a1ffbc9045d3a96b41e98cada"
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
