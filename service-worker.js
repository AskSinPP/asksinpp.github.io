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
    "revision": "0c4838f58ba69cfd5a2cee6fa235bec9"
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
    "url": "assets/js/1.ff21b5bf.js",
    "revision": "6b83e2ea178bc4e8d81e821c14729be1"
  },
  {
    "url": "assets/js/10.94bf591f.js",
    "revision": "4b53861d15ca6d8ad0397fd77936d36c"
  },
  {
    "url": "assets/js/100.b1824a35.js",
    "revision": "d922b72824b4f1f46acc4aa923b07148"
  },
  {
    "url": "assets/js/101.d0d92f82.js",
    "revision": "e8e62f6ed075555baa61b11781d3b498"
  },
  {
    "url": "assets/js/102.2c20a996.js",
    "revision": "01c0a855722242417312fe4693f9160f"
  },
  {
    "url": "assets/js/103.28d6242c.js",
    "revision": "0fe7984dc4b271d9f4d427cc0c8e441d"
  },
  {
    "url": "assets/js/104.2b5c7393.js",
    "revision": "78f5c40c48e759294cc52b16fefdcfa9"
  },
  {
    "url": "assets/js/105.f19f7a3e.js",
    "revision": "7dd8e8fd4ea32dc4879d283198aa3c4c"
  },
  {
    "url": "assets/js/106.4be21258.js",
    "revision": "3e9a27d3fa54aea7b317439baaf3654a"
  },
  {
    "url": "assets/js/107.1215557f.js",
    "revision": "22ad01aa34c50812547d7062a903f177"
  },
  {
    "url": "assets/js/108.1085a80f.js",
    "revision": "a8f38715f021193af8c6dc96f30ecf8e"
  },
  {
    "url": "assets/js/109.115f1270.js",
    "revision": "d55cb444ec3e89126fe9430efffb077d"
  },
  {
    "url": "assets/js/11.e53e8fef.js",
    "revision": "0754c4ad8ef7422080e0edf41ec701ce"
  },
  {
    "url": "assets/js/110.da01132b.js",
    "revision": "a4e248cd97cd064afa1cda0e1ee260bb"
  },
  {
    "url": "assets/js/111.6767d059.js",
    "revision": "23f185bfbc4f0e252b33b43cdcc667b5"
  },
  {
    "url": "assets/js/112.e93c5af8.js",
    "revision": "4eeac95ef990a3d5fd235951eb4624d3"
  },
  {
    "url": "assets/js/12.fc779738.js",
    "revision": "c5fb13da3a1297ab6d1e109cacebd3db"
  },
  {
    "url": "assets/js/13.49e34d75.js",
    "revision": "bf458c2d2fe1a15c01b35b59420c1b01"
  },
  {
    "url": "assets/js/14.f4c8cb79.js",
    "revision": "fff5f01978255cbdb532528117aab533"
  },
  {
    "url": "assets/js/15.b78fca69.js",
    "revision": "22ad85db4b5ae4801f348483ef11245a"
  },
  {
    "url": "assets/js/16.85da58ed.js",
    "revision": "aa9b492932a2e3f7223ba1075dbb022f"
  },
  {
    "url": "assets/js/17.7175f320.js",
    "revision": "1ebad178173ee3c5de100a779deea019"
  },
  {
    "url": "assets/js/18.60fdad0c.js",
    "revision": "bab07fca21de0fec4026ace3969fc778"
  },
  {
    "url": "assets/js/19.1947defc.js",
    "revision": "323829d14fc807d0aed2272556d35b27"
  },
  {
    "url": "assets/js/20.b177b0f7.js",
    "revision": "f2832e1b27cb72cf5b8a10ca5fc7e211"
  },
  {
    "url": "assets/js/21.10133810.js",
    "revision": "e1bf000418e6d12f1ac95d0cb348f0ca"
  },
  {
    "url": "assets/js/22.2c0120d5.js",
    "revision": "26df3aafd15b5fd14c0e8ca38eaa7c52"
  },
  {
    "url": "assets/js/23.36433ba7.js",
    "revision": "aa99510a90a12f809318a029849f2011"
  },
  {
    "url": "assets/js/24.c3fd5dcb.js",
    "revision": "2bd5a7bcddcdf9302f2aaa7f459f6060"
  },
  {
    "url": "assets/js/25.7ccb1027.js",
    "revision": "7e12f5ee43b84ddcb90e7005fe331c47"
  },
  {
    "url": "assets/js/26.9335b6b2.js",
    "revision": "69af9c2ce038e49c457a3dca3074f7c2"
  },
  {
    "url": "assets/js/27.c9f0e4fe.js",
    "revision": "189045e6c6102a01cfdfacea2aea00f4"
  },
  {
    "url": "assets/js/28.7ec0d8a7.js",
    "revision": "9f4c7989bf4e2bf760b443dbb9c98b75"
  },
  {
    "url": "assets/js/29.a4055463.js",
    "revision": "4c07b9b6f308a4b8473b2fad1bedd2d2"
  },
  {
    "url": "assets/js/30.db33a279.js",
    "revision": "28b7196a5a2583fdcb2e0dfab80cdc1c"
  },
  {
    "url": "assets/js/31.ca74256c.js",
    "revision": "9ef02b3edf8be2653f7a8870517e3541"
  },
  {
    "url": "assets/js/32.ccc4c9ee.js",
    "revision": "24cb1a4bcd4f63f96262c113e248510e"
  },
  {
    "url": "assets/js/33.3b891d08.js",
    "revision": "1d569aa0b7fe63b64408d9e644252ad2"
  },
  {
    "url": "assets/js/34.68540c9f.js",
    "revision": "7e6dc0f0b07cb7014a75865ae3ca6036"
  },
  {
    "url": "assets/js/35.064d50ed.js",
    "revision": "13c3f28f3449459e536aa9331203a31e"
  },
  {
    "url": "assets/js/36.e3c6d07b.js",
    "revision": "ca2b3bc6ae0b0462db601a07049e421e"
  },
  {
    "url": "assets/js/37.ddcfa759.js",
    "revision": "321b83b37fe07277d1ca6babdeb4aef3"
  },
  {
    "url": "assets/js/38.3e034465.js",
    "revision": "ed03f1f42183202c95dc51d8c673c029"
  },
  {
    "url": "assets/js/39.aa6fcccc.js",
    "revision": "513f51faef8a65962fc6b2197dce838a"
  },
  {
    "url": "assets/js/4.834faf82.js",
    "revision": "9ed97854c412fa73e437b9b4e8bd5a6a"
  },
  {
    "url": "assets/js/40.080e7b09.js",
    "revision": "2d7e9b1abe6689fa6fde650a8bf00394"
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
    "url": "assets/js/5.337c6fe5.js",
    "revision": "9d25f2746ae5addd8371a541e60abaeb"
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
    "url": "assets/js/6.4d0cd3e7.js",
    "revision": "6183b22a8c844b797779b6a8b4289376"
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
    "url": "assets/js/7.18d1d2cf.js",
    "revision": "56a5b00c6a8310430b248f41af36f4f6"
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
    "url": "assets/js/79.8018df12.js",
    "revision": "19b341824de0faaff3331c72bb3dc682"
  },
  {
    "url": "assets/js/8.d1127b35.js",
    "revision": "22e725d9ced90e9c7b7bafd79d627973"
  },
  {
    "url": "assets/js/80.c37b0d5e.js",
    "revision": "b1ba6d89a45c1af3ba56f862b10f3406"
  },
  {
    "url": "assets/js/81.1603705f.js",
    "revision": "c212cab841d0ab64d1effc5f0b909808"
  },
  {
    "url": "assets/js/82.83f831ae.js",
    "revision": "5ef24da03220c5f67b44f422b170e7fb"
  },
  {
    "url": "assets/js/83.56028869.js",
    "revision": "08dd41ba3ea37afecac9d89d24c04237"
  },
  {
    "url": "assets/js/84.24034013.js",
    "revision": "37702ac62952ca12a69b03843a104fa4"
  },
  {
    "url": "assets/js/85.61ee4088.js",
    "revision": "1b0c6c42326002ad788cf60a64841550"
  },
  {
    "url": "assets/js/86.4fcf6b2b.js",
    "revision": "73ebc41114ce8dbff01a05cdc8ccec98"
  },
  {
    "url": "assets/js/87.df8c2b31.js",
    "revision": "50fe191a398463a2185c43081b3821bc"
  },
  {
    "url": "assets/js/88.fb32d6d5.js",
    "revision": "83ba4474f482fdb36af51026be1b7840"
  },
  {
    "url": "assets/js/89.166274f2.js",
    "revision": "4f01d3db516fdee8c7665137d93f8942"
  },
  {
    "url": "assets/js/9.d83d6c70.js",
    "revision": "e4f4d0adbed385775f5f2be6ae13d161"
  },
  {
    "url": "assets/js/90.102b32e5.js",
    "revision": "209f2cb8c44e981d72296f83c77a03bd"
  },
  {
    "url": "assets/js/91.f9290290.js",
    "revision": "53f4353d132aa42e5ce8a170cc215b1f"
  },
  {
    "url": "assets/js/92.43c391c8.js",
    "revision": "a2b80f3a9f36c5eef26a61d822e2f363"
  },
  {
    "url": "assets/js/93.e4360437.js",
    "revision": "dd3d69db38206a5d1e816bce8a059a28"
  },
  {
    "url": "assets/js/94.69f5b5f9.js",
    "revision": "666505c307949f7c58120fd927172742"
  },
  {
    "url": "assets/js/95.d7ecfa1d.js",
    "revision": "97fbe2007e23d948eda40f55a5608eea"
  },
  {
    "url": "assets/js/96.6b06eddc.js",
    "revision": "6bf722cc6cbd8d026a8dd5f057ae339d"
  },
  {
    "url": "assets/js/97.853112f1.js",
    "revision": "fe2762dae85060819d9117efe6c17a07"
  },
  {
    "url": "assets/js/98.bc74e469.js",
    "revision": "4f971bcc0447321e0e502d4deb7554ec"
  },
  {
    "url": "assets/js/99.c7cbf499.js",
    "revision": "0c3232ea63e79721ad934ac362c1f6ae"
  },
  {
    "url": "assets/js/app.748d1736.js",
    "revision": "5d0ab63f2b8932489e183c8423b02dee"
  },
  {
    "url": "assets/js/vendors~docsearch.a7041db5.js",
    "revision": "e88f2740661cbe7e5b49f34d7be22e9a"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "8fee8f102901ddd0a47e194fd961ad99"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "6bf423c19178984ce2de90309e8116ca"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "f277dd6e9f6ba0597008e7034456e473"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "fc8b7ebe5b22c80e2031dbf5b4eee552"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "9346edf9e26308fcbfb72d5d1bea92bd"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "974a4fea1b8a1880d93b721c9528442d"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "8009b847b72c3c32c76e033a34ac7944"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "0d49f8fecc2bc6003f556c3b8701253a"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "a6569d136770e8f3fd55fd82d4fa7e92"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "dc910c6fdfe29e2895c0434439d11bf0"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "d90f283f2efd5c90e5743b78dc7437b9"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "0829b9c3e0cb5ee335419ed7430a2d46"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "4bea18b4af9f4e2141743fa49868606c"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "ca9184719d98bea04c8186db833342fa"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "6efbae96481bff23198b1edb680bfca6"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "e9ec71192327102e19d44021c76eb4e3"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "f919277af602f3b9ffeb2bad89210726"
  },
  {
    "url": "impressum.html",
    "revision": "69cf8b65875d6f33b3b435dd0ae9cfc1"
  },
  {
    "url": "index.html",
    "revision": "c725613f219ca7aea90f0aacf748c309"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "1795a3d1add042f5441a984d9ba25e73"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "bb55b13ee3ca42c8605965349d0a3e33"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "e990c378a37e69a4a61df9f0c18c7734"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "be137b0ecbc33fa1e076cdd23708d7fd"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "65cd291c5d95d96d248d9fe776093da0"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "77d0e7857d66d16a31e721d268dc0e99"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "e5dbcd83ebdc3b0914c05f69be820908"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "884eb0aa964dabe29126f3c5a9f5945a"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "ee6b0044e185c3bfc95216703c54fa03"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "53a8a4fb1f98ed7580a86fdcaae5af12"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "11e2d48c05f9f507b1c188b7bd135efb"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "a4911df7a792147ba58710579c236637"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "17cd133fdb675964586454e40d274bdf"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "6a131f08c6d4fe4997761d81d2bc9fa4"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "ae1e14b2cf227ae7bb0b738ae46d040b"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "c60fe3acf24190ad67474f8896123304"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "033e02f93d170ed307d33cac736a6526"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "2a5fbbf700c513a1d24bd953059a82c0"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "2460377f3f2026d0910959c6c690b9b7"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "2e18bf61bde8e2c7d03a16c41b517d42"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "3ab2746ade178871e14fff8a0e594778"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "02c3eb078c39458405fd239dbe7f10e5"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "b826cd084c723fa10a78b911347762ae"
  },
  {
    "url": "Projekte/index.html",
    "revision": "81d42a256b9c7043f3bfd63d9a3318ed"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "894910ee6869bd64749832db65d786f2"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "8e4a724fdba6b046e4004ab6c8c2975f"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "1abc3b09965a2ff8f8d6ded883995630"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "c8bb671b7b81d1edaab8786d0ff24819"
  },
  {
    "url": "Projekte/jerome/HB-LC-Bl1PBU-FM_ISR2.html",
    "revision": "982af4e250059331ed6195d5a2de63c9"
  },
  {
    "url": "Projekte/jerome/HB-LC-Dim1TPBU-FM_ISD2.html",
    "revision": "34c56d4635bc32bf23f5fe7d66e2fe22"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "54e19f5dcc7e9728bc308558a44ed761"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "ca450918fb7f288830a350c91c30abb4"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "80c58b9626dc63f95daf1be54ee20f5a"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "7e82311ad5ebc4233005faefb360a367"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "b9027f56bf4d0ac34c8389850da9af27"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "e9fe20498e6786f3beff9301e38412ee"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "c8d35822423aacb99312259a1dfd54df"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "bde2e875476b64b14aa229c1368849a6"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "df59c4279cae1bc585a2ba08b90133e7"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "366f98e940002d30f395a658f86e6314"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "ba5181c5afff5d353bc3cff6860dfbf8"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "a76548e79da09bfc08ea099a988d70b1"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "116d8ec8496fb5b438c76b514c76aa38"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "c2b2aba43ddb3310bf934e9bc02b88d6"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "dd4a2dc57313603ac12e8e5da25b39a0"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "f5e70a2c5693b1ade31b1c10587d404e"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "b7540409e592d6f99b7e08fc07690ef8"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "8c779f54796d3fba57fb610e429a6440"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "ef9296e84aff4063f1d30abc249869d7"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "01489193aee27c06ba9bdf7657f03f9b"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "e4471bcc9ae508978c807c40290d2764"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "4f3c9438c0b97f17a889ce89869397ba"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "648eea2a6fd105f6e03868fc6b41f1eb"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "350719a3ce401b54fa0a6b718a178c7b"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "a1cd4594d09c1e741317a67e018aedc1"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "714459aa20b0359192386eed3c6c95ef"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "2ca4663b97393f2ba7918aa4f254d8c5"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "779ee116941ff44a03cefcf237cac5a6"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "c3d60cfed14de4576e72b7b4c485ce39"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "47caccfcc8479b7db9d59935ee56d1c5"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "f1fb54c151358480973f5ab1a41f19cd"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "9dbb7562a3a08b2a269994dbbf404aec"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "3f94f040a23cbfab654d148c21c4264d"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "821759a6016199f8bde06349144bed09"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "2c74cdd0cf381ad28017e2771df500d2"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "5b91f3c996507184aace8757b01e78f4"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "eaabf2a1c6130f2496ddfc3aa911030d"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "e013e996a80c96f882a38057d156aba9"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "6f571db4fdae330a24bd9c5db7e5aa18"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "398dff0e4605a7ac0b524536bcd0d495"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "f9d97055f200639e33615ebad088ee17"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "88d20c843b6e97c687eb517ad7280c44"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "d245f40d11b44062d95bab7fdefc8e6a"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "ed164e52e36be1fcfad95f1c801bfe10"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "8dac098b7851be45b44c70e0cb0b3266"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "0100d3681276dec250e20bdacada3e12"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "b90492ea3e2c1cb98538e64cea426c53"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "d2dc0af20a7490f9d79ad3189c8cc829"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "d2e1907b1a04de97bf52268c137b1070"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "c537b9437e46d051b40ff5bbe9879260"
  },
  {
    "url": "rftypes/index.html",
    "revision": "c7b1727f692e051a38e6e9baa0dd535e"
  },
  {
    "url": "Sketche/index.html",
    "revision": "5e9f6d398085a82c732750d57b240256"
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
