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
    "revision": "898dc303980bcaf2a17437f2ec72f0e5"
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
    "url": "assets/js/1.ace82848.js",
    "revision": "b8471ab592e787292daa4a41c1ad4117"
  },
  {
    "url": "assets/js/10.a912886e.js",
    "revision": "bcbd961cc5a6bbdebbdf2871e87aa102"
  },
  {
    "url": "assets/js/100.00bff42c.js",
    "revision": "5c7e147f3ac813a3e0f080a4c067c66d"
  },
  {
    "url": "assets/js/101.b4a400a3.js",
    "revision": "a6a91756586c6e5400d946af95baad22"
  },
  {
    "url": "assets/js/102.7ce4c3e3.js",
    "revision": "e3d7cc2a1f229f1fbec336a20f22f796"
  },
  {
    "url": "assets/js/103.63965eba.js",
    "revision": "757ef6a03a2f8a182af20d92557bdda3"
  },
  {
    "url": "assets/js/104.878bd100.js",
    "revision": "7f562f6968d211a8be1c4f3ce385c947"
  },
  {
    "url": "assets/js/105.15b219e3.js",
    "revision": "e93a4cf33ab5e40bd88f29b0ff4446f2"
  },
  {
    "url": "assets/js/106.eebbe9b8.js",
    "revision": "e96058df7e267277e86d51c8751746e3"
  },
  {
    "url": "assets/js/107.aa32487f.js",
    "revision": "17c488d4388988a1fe610f9541a07d88"
  },
  {
    "url": "assets/js/108.aaaf1f71.js",
    "revision": "9f566f797f551914a3a0740f66af8f91"
  },
  {
    "url": "assets/js/109.cf18d1df.js",
    "revision": "5edae6eeaa30679cc771bb13cce2bb35"
  },
  {
    "url": "assets/js/11.ff7c0816.js",
    "revision": "f1e47d05a8cae3099829cfcbb7080eab"
  },
  {
    "url": "assets/js/110.33c479fd.js",
    "revision": "f7a4641769c8217aa2255545561b4773"
  },
  {
    "url": "assets/js/111.d8dd7703.js",
    "revision": "965c54449f70da4987b9fd2861f7baca"
  },
  {
    "url": "assets/js/112.426fc404.js",
    "revision": "85ba52ed9a3029a1cd89d535d59f018a"
  },
  {
    "url": "assets/js/113.06bfb15b.js",
    "revision": "ec255753ee885608288f8c22f792e64b"
  },
  {
    "url": "assets/js/12.8c56e3e7.js",
    "revision": "45420a6772bb584640df5621b9e33946"
  },
  {
    "url": "assets/js/13.db6df7b2.js",
    "revision": "bdab85f1d0751cbb81df24c33343de6d"
  },
  {
    "url": "assets/js/14.5b8adb34.js",
    "revision": "79f05f444ae0fbc2eaa0ed07ef62304f"
  },
  {
    "url": "assets/js/15.35b7e412.js",
    "revision": "99108ac5a4180b7b20bbbab8004eb054"
  },
  {
    "url": "assets/js/16.574de38f.js",
    "revision": "1e8aa4f3d8001eab13c82b6562ac47b5"
  },
  {
    "url": "assets/js/17.f5bdc9cd.js",
    "revision": "a73407e99a936b7cf9b740c28894dcb8"
  },
  {
    "url": "assets/js/18.174a5fb9.js",
    "revision": "553624546b7eb569fd44d7d1645fe899"
  },
  {
    "url": "assets/js/19.971d1d5c.js",
    "revision": "aca624bce2a9fe31ce140d20a5e33422"
  },
  {
    "url": "assets/js/20.7b80f3a8.js",
    "revision": "4a282dbfc11e3a73be16dc0fb612fa74"
  },
  {
    "url": "assets/js/21.df3c6244.js",
    "revision": "529b55ca8d5f9654f43a954d0eb884b7"
  },
  {
    "url": "assets/js/22.8181ad60.js",
    "revision": "349114695813d3fab245718d4fd18cf5"
  },
  {
    "url": "assets/js/23.05fa4fa0.js",
    "revision": "6f43bb9c271d788c00fd33245be22040"
  },
  {
    "url": "assets/js/24.e2c69e51.js",
    "revision": "231abf797fe5b05d497bce9741b6b265"
  },
  {
    "url": "assets/js/25.1986a97f.js",
    "revision": "d141ab77ee932445f06ee037016f4341"
  },
  {
    "url": "assets/js/26.3d834005.js",
    "revision": "d4e6e459b6c214ff3a7eee1e1820929e"
  },
  {
    "url": "assets/js/27.fcd69fd5.js",
    "revision": "745fa18e70ef98ba6c158b5a20aaad69"
  },
  {
    "url": "assets/js/28.abdd678b.js",
    "revision": "55a33861795143f02fbfc39d440ed43e"
  },
  {
    "url": "assets/js/29.bb62c9d9.js",
    "revision": "6e288a25e6a6269bd98eb845eca94600"
  },
  {
    "url": "assets/js/30.c9d44bc0.js",
    "revision": "88a9a822e023a3ce006c743afee97d13"
  },
  {
    "url": "assets/js/31.836ac39d.js",
    "revision": "94170ac085c71d9cba0fbdd35c39a909"
  },
  {
    "url": "assets/js/32.d341a9bb.js",
    "revision": "392bfe1c893f690772e266808a6cc9e6"
  },
  {
    "url": "assets/js/33.85d8f5fe.js",
    "revision": "4a2ae13916440e062268409e17fc0800"
  },
  {
    "url": "assets/js/34.02a9f4af.js",
    "revision": "bf267858b30f9c209d4b57a898e29ec0"
  },
  {
    "url": "assets/js/35.be243ca3.js",
    "revision": "e72403e5277e80ce66ebb4956fc4b53b"
  },
  {
    "url": "assets/js/36.62132955.js",
    "revision": "b3ff7c7b3a84a53bf693a2a8802ab42f"
  },
  {
    "url": "assets/js/37.98a5b0f1.js",
    "revision": "ec11ac49a04e0d440a7f0fc046926240"
  },
  {
    "url": "assets/js/38.7288740f.js",
    "revision": "f4aca7562f9be992323a23569e5a55ea"
  },
  {
    "url": "assets/js/39.cf9645ea.js",
    "revision": "4d7f50ebd20b0e31c4222b97e63605af"
  },
  {
    "url": "assets/js/4.693c5897.js",
    "revision": "36857477d002e1adac2f78dc964b2fab"
  },
  {
    "url": "assets/js/40.d56cdb35.js",
    "revision": "fda8a5c4f231dd8314bd82cb741c0ae0"
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
    "url": "assets/js/5.47eb6a4c.js",
    "revision": "c20bb69e760d1db3d24251d6d9a176f9"
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
    "url": "assets/js/6.53bca7b9.js",
    "revision": "ba82e4058375f9c179083d7ff46aa2ec"
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
    "url": "assets/js/65.0fd4e9c3.js",
    "revision": "a9cb23df51d67e88cea0fc84820f7834"
  },
  {
    "url": "assets/js/66.63fda904.js",
    "revision": "523ae71046da874ca3f27983b6002f59"
  },
  {
    "url": "assets/js/67.32788636.js",
    "revision": "051310abea9098ada24d33f6b731e523"
  },
  {
    "url": "assets/js/68.b2ca5bff.js",
    "revision": "8c88caa7db4786688d8ee533412ba4c4"
  },
  {
    "url": "assets/js/69.54e4cdd4.js",
    "revision": "60fef0f481e69456a2751f70aac7639c"
  },
  {
    "url": "assets/js/7.e021965a.js",
    "revision": "6b2f0c77d6050f640a15c53ccb0daba7"
  },
  {
    "url": "assets/js/70.4fb488af.js",
    "revision": "bbfc36423b43bc11ae4dc6e27e49a63c"
  },
  {
    "url": "assets/js/71.449f5a58.js",
    "revision": "c40ae7542e9305ff8c743a72d90d55e5"
  },
  {
    "url": "assets/js/72.74d00733.js",
    "revision": "00f62237a9bb9915d5bac80ff3aa255e"
  },
  {
    "url": "assets/js/73.d99077ec.js",
    "revision": "2860f2fac46eb30d2feb4d8cf4e128e6"
  },
  {
    "url": "assets/js/74.84858560.js",
    "revision": "3d233f132cc0a680d125b45bff8e065f"
  },
  {
    "url": "assets/js/75.45eae3d1.js",
    "revision": "0bba2886ad5794bdf42588c9acb27e46"
  },
  {
    "url": "assets/js/76.42db5bbd.js",
    "revision": "ccfe8527e8f3acb022169462291cd5e4"
  },
  {
    "url": "assets/js/77.1432c56a.js",
    "revision": "964d35fb78690910181dd65ec1bac09c"
  },
  {
    "url": "assets/js/78.354e500f.js",
    "revision": "832e2061acb251ffee85571a9b61710b"
  },
  {
    "url": "assets/js/79.41b56d4f.js",
    "revision": "89a17afe98ba57cf2ec63c42db9b6953"
  },
  {
    "url": "assets/js/8.16db215b.js",
    "revision": "22eeff3f202aa861095c945b1306d6ad"
  },
  {
    "url": "assets/js/80.4ff4a757.js",
    "revision": "86435cc8a49a0b0b7dfb039280cfa1bf"
  },
  {
    "url": "assets/js/81.967a2c2c.js",
    "revision": "43224c0396a361621d359b64e4723aa8"
  },
  {
    "url": "assets/js/82.ff991524.js",
    "revision": "e24a329a41bbae3036e6f47658e0e79a"
  },
  {
    "url": "assets/js/83.b7cb2d9a.js",
    "revision": "c21ef488514fdd28077e6a2ac18fe250"
  },
  {
    "url": "assets/js/84.cfcb9f15.js",
    "revision": "5fcff03a5c601faac8768cd4f6e00ebd"
  },
  {
    "url": "assets/js/85.2b952f1a.js",
    "revision": "49185b91ba6979b056b42eb9e792042c"
  },
  {
    "url": "assets/js/86.b05fecfb.js",
    "revision": "483a9178c52077b91e4c5b441c54f75b"
  },
  {
    "url": "assets/js/87.47fe5105.js",
    "revision": "023cfddf03ceadcf85d0d562422e48e0"
  },
  {
    "url": "assets/js/88.6ffb4e12.js",
    "revision": "66b655b9e7a1f4707f763627b1bc0731"
  },
  {
    "url": "assets/js/89.51e4038c.js",
    "revision": "2f12f21daa59dd51fd7435c6ed026c68"
  },
  {
    "url": "assets/js/9.4bc2f0d9.js",
    "revision": "a1a4ebaac7c7d812804761e726310082"
  },
  {
    "url": "assets/js/90.d06e1429.js",
    "revision": "59a1802b178cafd07338a5047f21fe1d"
  },
  {
    "url": "assets/js/91.873a32b0.js",
    "revision": "55696e0582397da2ba7fea154769190f"
  },
  {
    "url": "assets/js/92.3f4d7e1d.js",
    "revision": "1cf6c9f862ace025567aec320743ec47"
  },
  {
    "url": "assets/js/93.d691848f.js",
    "revision": "cd55fac03b26d6c15d77d8ff9eca691d"
  },
  {
    "url": "assets/js/94.3c2f2967.js",
    "revision": "e2597bf9731a57f30752d3dc9ba7ce42"
  },
  {
    "url": "assets/js/95.54e16da2.js",
    "revision": "0e75f0c1b340ea3a35259061a2ade70b"
  },
  {
    "url": "assets/js/96.6f4c26a3.js",
    "revision": "9c5038278f4d37c4651fd0ed50ff401c"
  },
  {
    "url": "assets/js/97.3a5c4f03.js",
    "revision": "e21058d3dd271e5a6b3f4a865ca4fbbc"
  },
  {
    "url": "assets/js/98.e10a55fc.js",
    "revision": "a782ddd178efce1bd3125065c44107fa"
  },
  {
    "url": "assets/js/99.debe184e.js",
    "revision": "f3e57ef52995b95f0be398cdfa6509ac"
  },
  {
    "url": "assets/js/app.434d6bf3.js",
    "revision": "7f257142a70e49c5840a3b27e01bc930"
  },
  {
    "url": "assets/js/vendors~docsearch.86e51784.js",
    "revision": "4507a2a78987294d35e46385fb4af1a4"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "362794db4c8ad9dc2f13e0a8cf97395c"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "8ca943424168d25938948a3c9760902b"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "fff2566d7c773d3e0cdd2e814f4d7f16"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "2772d9317b4497c316c6d2ff7ae92a27"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "89cad7d888fc4d02f80f8699969078f9"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "7a94777cedee23654e466a8459435b15"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "d89d2af055cf38fb809496b11f97616f"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "f3713bd0b08b9438392c004d188fdeb0"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "3e98b1460dc4c904da409fcfb34dd428"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "4d902a9b9bfda195febc8f1ad1547619"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "ac92a3083ec03411535f3009a2c7933c"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "95ddb925bd3ac509083ebf78cf884914"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "9c434edff8a3c683fb2610d39f4452c2"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "6c41415631b851a24c154bb6522c66ad"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "d7815b05bd1cbff970e208b64e8a64b7"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "e98b5ea590600a03379b8518f332f127"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "5798be087b4d2eae09e8e6120c77f7b7"
  },
  {
    "url": "impressum.html",
    "revision": "762b8c22916ad1f833154d8761a4878e"
  },
  {
    "url": "index.html",
    "revision": "1e69c9ebf389cc2e0f92d4a6c4061239"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "a508e540bfbbedc4fc2b91f2e50978ad"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "93af2b067e608c9ddb00b44cf95400af"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "d60153a00989c77916b2cccc4ae26bc3"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "5d3fd1b31ba189eebad22346a5ae0c4e"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "dff9de8ff2f78d27c1d233f5baddae2e"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "a97e21876d8ea7cd93341bb87d796d99"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "772af03942a94123799dabb73a4a2cc9"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "c6c64bbd7857c160ce7b1529150bff6e"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "1afa2c65e6b508efb57f76593e7c57ae"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "0991708a027fef3ebdb447107006b24a"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "4e62fdbfad4ab409df650ea847e9bb57"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "780573372b421180a2887b0b22d8b593"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "96708ad60f8ae1aafb0a1d7a78f6adbd"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "270649c20fdb898599d2548463367cd5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "7843c93b56d32990ff2b4766ab1921a7"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "a696a15922524f8adbb9d9083a8492f9"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "daaacf166f872c42b18a5ee6985cb955"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "719709990777dae750585f797a4eda17"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "5aafdb52c0b965ddb1071deee67f6146"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "ac1089dca42a97b17d3abf394e9dc84c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "cb5efa50e3aded120648e5bb325f2742"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "ea205d9798ab4769411d6037050fd68c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "6343b725270129a786dbfecaf5cb87ad"
  },
  {
    "url": "Projekte/index.html",
    "revision": "a351fa6c71c94fe99889df640d90d0f8"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "eccd05239433c3099e2d709a0324600f"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "4378596aeb4aedd367a30b6be56faaa3"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "dedbda923981027ff66519c6e27c61f3"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "407244995308e1159b4c6df5861a34d5"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "e3181a49d569c46d92ad304db4e71685"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "1e9dcdf7544846ff33fa76dfc22a89df"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "e1f9147a7f4d59bb707e5067f3dbbeb9"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "c824c94881e1b98606ce0789df0585fc"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "0102cc3c8a95d5ecbb1d9463913f953e"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "31f2c7bc9cc0a7af50869988558c6701"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "77feb0a5dfb45572d8110702b65f8dfb"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "d08661a7e043ec4f6069884df2f8cf3c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "7d4fa6e6411da37055625ee599353a33"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "7cce6cfafe33ed0ce1d2003c455b67fd"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "10aa698a0c13f0a2f6312a8a62fa6dcc"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "c0d0b2e0a269cc6e4f74439b08c5d285"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "1b1c2a9defdb30d0b5936ccb6236230e"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "14335410e4075786f05b174e0fddb882"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_ISC2.html",
    "revision": "da39523daeea514153cbefc83af4520b"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "aa1124de367a4c3ca1fd22868694dd11"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "465d7879d45c97407a6f13a31ef33ef3"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "38f3b59256823fc26b8d0a4f4d4bbfef"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "c5ac09965dfb44ae792289312a0b9704"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "b2500f816c1e347f7069531ae120fb57"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "b4772d9b70886a7b9b6c05cc2d7852a1"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "35fcadf6ea1deea1a313a441a978cc60"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "da260d107f1f13489698725134214733"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "519b78b5011769d15a1c59bc891cbd5b"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "6a121433bccc20d6ae6c43ab6f67a338"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "997e9e66eec7c0b837cdb7eef5e73888"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "da08b1eddba8600bf299f81c7406e25b"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "4eb0c9835b739185b30f8cf4199651e3"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "c36da7661f789de2a68c43944f43dd53"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "49bb478fde8809d1bb6ffe8d6f2cda64"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "8d9df8d79ad421d29e902b2719fd34e9"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "7ddbd47a85178c5d6d8dc3e4e8292781"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "15fd36bd9031a8fa6d264e34cdcb3b8c"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "ac6194205521612a3b7d4e5b31d2bd30"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "fed3ebc7a4894c5436cef74ec8e90b13"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "16db3666269494736974b332801aaaa5"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "1202a8d00a46890021facf400f12aba5"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "4958657b9605ff4086666e4e1449b090"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "f629a44f931aac2f5b334f1e06ec23de"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "f6d70c7183cbc231e07e1f1b92668e82"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "5d1df004275736ec95d450abcc30bd2f"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "09da59c46a5953fd30bed811e179ca3c"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "22b48981fff6e65728e905cd97e1c7c4"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "489834882ecb592ed425e2eb6921a87d"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "1de1159f254d7e4c193752bc6e684a4b"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "f300926f934c6a214e49d2acda508148"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "7cf28bb1a0241e3d5ceb30ff8c3530ab"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "aefff0fc8d8670d0f9bf51bca6feaa2f"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "50f06f06fffc7ea045edb2e68f57ca91"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "d9caf9bbf4c1f0930916aeabe257112c"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "b2298e2112ac1739777d4964d22156fe"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "00dd66463ea04425b191bf8e84afb049"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "dddae26ca8bc4042fd718b6576d7a111"
  },
  {
    "url": "rftypes/index.html",
    "revision": "58c26ca1f52f886ebaca4c5335af2643"
  },
  {
    "url": "Sketche/index.html",
    "revision": "94eb53119242d993707c389e3d5a8e5e"
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
