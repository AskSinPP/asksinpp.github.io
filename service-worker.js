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
    "revision": "974f706577d78929266daa0086a0272c"
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
    "url": "assets/img/HM-LC-Sw1-Pl-DN-R1_PSS.9b7b3cf1.jpg",
    "revision": "9b7b3cf120a517e94fb706d733df0421"
  },
  {
    "url": "assets/img/HM-LC-Sw1PBU-FM_ISS2.32dae3ab.jpg",
    "revision": "32dae3ab8e0db228bac502747be9101f"
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
    "url": "assets/img/HM-PB-2-FM_WSC2.3764cb02.jpg",
    "revision": "3764cb02774ae195fc2a558f982e8d06"
  },
  {
    "url": "assets/img/HM-PBI-4-FM.2ddab1fd.jpg",
    "revision": "2ddab1fd95724067c2cc5fdfca07021a"
  },
  {
    "url": "assets/img/HM-RC-8_BRC8.b72e31d3.jpg",
    "revision": "b72e31d3dfae5469609c73d07cef2e16"
  },
  {
    "url": "assets/img/hm-rc-p1-proto.4fcecd0a.jpg",
    "revision": "4fcecd0ab7a4145ce165580e6d0dce48"
  },
  {
    "url": "assets/img/HM-SEC-SC_WDS.8098e9df.jpg",
    "revision": "8098e9df6afb48cfde50b539fac94011"
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
    "url": "assets/js/1.793f8b33.js",
    "revision": "b958c916d6b4c7ae5187e4ce247df6f1"
  },
  {
    "url": "assets/js/10.15945b40.js",
    "revision": "e30dde9a92afcfdf3b7cd5553d50c2de"
  },
  {
    "url": "assets/js/100.3aa03b02.js",
    "revision": "4dc19921595a0c17f50cbd927bfb05fc"
  },
  {
    "url": "assets/js/101.990fba96.js",
    "revision": "a86d4d018ff2582ccbc5c692080b2e81"
  },
  {
    "url": "assets/js/102.d44dca7c.js",
    "revision": "6076d99437946d8a9483ede72df889e5"
  },
  {
    "url": "assets/js/103.745068a5.js",
    "revision": "7438aeff809545f4e790d5fb536d612e"
  },
  {
    "url": "assets/js/104.1347f3b6.js",
    "revision": "11efc717cc81fe127b749a3c6e80f95e"
  },
  {
    "url": "assets/js/105.8a8179ff.js",
    "revision": "abd5ed03bf4e22aff36453901e5bf5e3"
  },
  {
    "url": "assets/js/106.a5b81e02.js",
    "revision": "e83ba38dc957de294fcb8c935da1b8b8"
  },
  {
    "url": "assets/js/107.ee39e5e2.js",
    "revision": "9d94f560f80a79f09a29e8b8ff14eaf4"
  },
  {
    "url": "assets/js/108.8e3d8a64.js",
    "revision": "8ce196f2448aab621f5f393454d43ef9"
  },
  {
    "url": "assets/js/109.016d22f5.js",
    "revision": "db268f66b207c775ed781e32e5ee436e"
  },
  {
    "url": "assets/js/11.16f3b012.js",
    "revision": "1a476c4e48319a0920470e8d8030d4bf"
  },
  {
    "url": "assets/js/110.03b7a072.js",
    "revision": "06b62617f48bb5e5e31838a68027d225"
  },
  {
    "url": "assets/js/12.eec6e776.js",
    "revision": "8c180b59f67a080134630e53f89346bd"
  },
  {
    "url": "assets/js/13.4188cc38.js",
    "revision": "aa4fca8acc3d10c90e9174a479831443"
  },
  {
    "url": "assets/js/14.0c331f41.js",
    "revision": "b7e385a17f3a6a67310d6a208c48d6f4"
  },
  {
    "url": "assets/js/15.a1873691.js",
    "revision": "9e1506ee841dfd0cb40cc3a81f99dbcc"
  },
  {
    "url": "assets/js/16.4fc947be.js",
    "revision": "e1beb9e79e0a09b2a87ae89bd98b1bfd"
  },
  {
    "url": "assets/js/17.150b7210.js",
    "revision": "ae8227806ec387915b2126d768d67239"
  },
  {
    "url": "assets/js/18.4221f3f3.js",
    "revision": "24da7bad2649fe8e1f54dd31b0009036"
  },
  {
    "url": "assets/js/19.f794bba2.js",
    "revision": "b729d27f4dad012ae2792e3453ae5717"
  },
  {
    "url": "assets/js/20.743cc3d2.js",
    "revision": "783013fecb9818b863351ccabf693d4a"
  },
  {
    "url": "assets/js/21.d1906970.js",
    "revision": "a93321375df63aeb78f7c4f74bfae1da"
  },
  {
    "url": "assets/js/22.99a8175e.js",
    "revision": "807e88554269ed3226812dbca3d73bd7"
  },
  {
    "url": "assets/js/23.505140ac.js",
    "revision": "326b972814435c6f80618fd4a292132d"
  },
  {
    "url": "assets/js/24.6ef9f2e0.js",
    "revision": "0db73ce31701b3015bd08117e0f16cc8"
  },
  {
    "url": "assets/js/25.9da025ea.js",
    "revision": "71c6a80bb86a4a93fafeab30b1504251"
  },
  {
    "url": "assets/js/26.25293156.js",
    "revision": "8b5b559640e00050930f8db44df8984a"
  },
  {
    "url": "assets/js/27.f0988e0b.js",
    "revision": "5c439a4424a14929dc19d699df87fedd"
  },
  {
    "url": "assets/js/28.064f272e.js",
    "revision": "dfc1c87789917d391eb06ba20856bbfc"
  },
  {
    "url": "assets/js/29.2d16f96e.js",
    "revision": "bf6115ea743010f9623a781fab377962"
  },
  {
    "url": "assets/js/30.98333d0d.js",
    "revision": "bb51570486238a4eb27b5a569bbfab1d"
  },
  {
    "url": "assets/js/31.7d1c938b.js",
    "revision": "331e55bfec918cc62b478e750ae80794"
  },
  {
    "url": "assets/js/32.6adb4147.js",
    "revision": "803cc466b7b6997ffe746a7b8ed4ac05"
  },
  {
    "url": "assets/js/33.75edefe8.js",
    "revision": "8fe4f777ae65e27308eafef4bc6aca84"
  },
  {
    "url": "assets/js/34.d3a2d88e.js",
    "revision": "4af5e444fae76982059068a190ed895d"
  },
  {
    "url": "assets/js/35.d65d3e50.js",
    "revision": "a54fce86819eae6954b2d9cd67d007e9"
  },
  {
    "url": "assets/js/36.0f60ccdb.js",
    "revision": "9fda06986f8880657201ce9e9bd163cd"
  },
  {
    "url": "assets/js/37.54b27645.js",
    "revision": "efe99a71011337ea64d2e588e429587a"
  },
  {
    "url": "assets/js/38.768be915.js",
    "revision": "273483b2f77ccc9c43faec3090120296"
  },
  {
    "url": "assets/js/39.a66116f5.js",
    "revision": "da557a83940676eea614fd12b5cee939"
  },
  {
    "url": "assets/js/4.979190c8.js",
    "revision": "e3f3a252231e125523b7125000fd754a"
  },
  {
    "url": "assets/js/40.a103c6aa.js",
    "revision": "3aad6720c584417fe806fd883f9982be"
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
    "url": "assets/js/5.9bbb6a4a.js",
    "revision": "4a171901a48697c35290f2686f4af42a"
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
    "url": "assets/js/6.65910234.js",
    "revision": "b63d8c46268a8225ae60911eee74d6ab"
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
    "url": "assets/js/7.dba61471.js",
    "revision": "9233940fa9a47a93482a2b4f31175bfc"
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
    "url": "assets/js/75.281b12b6.js",
    "revision": "41b4187141cbdc640aaceea376b8fc55"
  },
  {
    "url": "assets/js/76.b3b24b99.js",
    "revision": "1d2df931bc0cc1036ebc3a1c56228bf4"
  },
  {
    "url": "assets/js/77.362dd511.js",
    "revision": "79e9a7d2f22e5b6a54b564ff721965bf"
  },
  {
    "url": "assets/js/78.a4cd5278.js",
    "revision": "125703e85043082892d1971064267c13"
  },
  {
    "url": "assets/js/79.ee730d87.js",
    "revision": "3aaf482d56a4a1890a7ac37927da05a2"
  },
  {
    "url": "assets/js/8.a80c8ac2.js",
    "revision": "3868761bd4fc8b916de37d272ed5971a"
  },
  {
    "url": "assets/js/80.1d2ee890.js",
    "revision": "b9a27c39bd26ce21c86e9e28fe108341"
  },
  {
    "url": "assets/js/81.37068ffb.js",
    "revision": "eac1a1222164ed5ba98bb243debb19e9"
  },
  {
    "url": "assets/js/82.c670ecbb.js",
    "revision": "de42fe45c554411b14d1a3b55f69ad5b"
  },
  {
    "url": "assets/js/83.312e1daf.js",
    "revision": "2293f967cdd9768c0175f026e9d2da93"
  },
  {
    "url": "assets/js/84.9b480d4d.js",
    "revision": "e938f3eb604e2631313a1058bd904f8c"
  },
  {
    "url": "assets/js/85.f90426ac.js",
    "revision": "885afc0c8f72779c2b6c0683b4c84b40"
  },
  {
    "url": "assets/js/86.ababdeb6.js",
    "revision": "2ed9e3305bbe9463a73690f2068cd182"
  },
  {
    "url": "assets/js/87.b3b7fb7e.js",
    "revision": "964ae94a577660357c9523fda5342e77"
  },
  {
    "url": "assets/js/88.cf387ef6.js",
    "revision": "520a78c70acb3a789eb8e421448ec83b"
  },
  {
    "url": "assets/js/89.c59d23bc.js",
    "revision": "6ac7a9bf6a6ce25581c2b19a6dc0c265"
  },
  {
    "url": "assets/js/9.919fb2d9.js",
    "revision": "b9d4fadbd808e50acbc551964cd8efc2"
  },
  {
    "url": "assets/js/90.1dad9042.js",
    "revision": "648d0526ac7023a9991019acdc3d9390"
  },
  {
    "url": "assets/js/91.fc6aba30.js",
    "revision": "08d5e066e3b3bc7394bd67fee5fb083d"
  },
  {
    "url": "assets/js/92.e26ec882.js",
    "revision": "e31833b24e34c94f7772cd24046282a3"
  },
  {
    "url": "assets/js/93.1f03db06.js",
    "revision": "408d34c1a10559475160f3c9c5cfc89e"
  },
  {
    "url": "assets/js/94.7956f5bb.js",
    "revision": "6ee60d05b127f861f74e9556c11fa3f0"
  },
  {
    "url": "assets/js/95.cbc14d2c.js",
    "revision": "96f40aac8ca63613801113ddcf74a819"
  },
  {
    "url": "assets/js/96.54c7d530.js",
    "revision": "4c4ba883891ed94ecc6653c0167a393e"
  },
  {
    "url": "assets/js/97.8cd0d856.js",
    "revision": "fa735192dea7e2c51b6af8a7ff3cb524"
  },
  {
    "url": "assets/js/98.c3abcf64.js",
    "revision": "2b4d63250c514e3515dd226df727a3a8"
  },
  {
    "url": "assets/js/99.935c998e.js",
    "revision": "4755df0c861bae7c46060cf918b76cef"
  },
  {
    "url": "assets/js/app.0f037bf2.js",
    "revision": "363bc0fa31928d22c310092e109ddfd2"
  },
  {
    "url": "assets/js/vendors~docsearch.35c9692c.js",
    "revision": "8865cef57ae135097ef5e97a15eff5e4"
  },
  {
    "url": "cc1101.jpg",
    "revision": "5744995b10fa43872029889387787300"
  },
  {
    "url": "Gehaeuse/index.html",
    "revision": "c71a44f94c665af856d781316c81e1a9"
  },
  {
    "url": "googlebab0ab47e2267397.html",
    "revision": "a9e50a0eaaa107a209c0d6047fc93135"
  },
  {
    "url": "Grundlagen/01_hardware.html",
    "revision": "30aa4990309e5f006371b4959e7ef46f"
  },
  {
    "url": "Grundlagen/02_software.html",
    "revision": "6205e76ebf9abecb9b97845892462d87"
  },
  {
    "url": "Grundlagen/03_ccu.html",
    "revision": "27b18fadb8421118e6a99f79de08bfd7"
  },
  {
    "url": "Grundlagen/04-isp.html",
    "revision": "ed3bb6dc6f6dae845aff71ac881d1163"
  },
  {
    "url": "Grundlagen/10_weitere_infos.html",
    "revision": "1a98e987e5a23daf86d54dfbcaa3102d"
  },
  {
    "url": "Grundlagen/FAQ/babbling_idiot.html",
    "revision": "ca81ae325121eca07483efa263ea0db1"
  },
  {
    "url": "Grundlagen/FAQ/Debugging.html",
    "revision": "82704e0f2d0efd397d65f84925dd8723"
  },
  {
    "url": "Grundlagen/FAQ/Fehlerhafte_CC1101.html",
    "revision": "532c3a75181a20c8d07816fe92b7431e"
  },
  {
    "url": "Grundlagen/FAQ/ftdi-flash-probleme.html",
    "revision": "d7f8e2707d502349e177d81cec3b17ab"
  },
  {
    "url": "Grundlagen/FAQ/index.html",
    "revision": "17aaa9fdc55f3ceaa85383171c749b2c"
  },
  {
    "url": "Grundlagen/FAQ/LED_Grundlagen.html",
    "revision": "c8f074cc8c1d3a4b8ccacd43f864cc39"
  },
  {
    "url": "Grundlagen/FAQ/Standard_vs_gesicherte_Uebertragung.html",
    "revision": "216d89afd9fd0267e31f027164795fce"
  },
  {
    "url": "Grundlagen/index.html",
    "revision": "de04eacdce4b7e791d06059f3a1ef180"
  },
  {
    "url": "Grundlagen/STM32/01_flashen.html",
    "revision": "7b3dc2410fe537e3f2b4c668f95cabd1"
  },
  {
    "url": "Grundlagen/STM32/10_weiteres.html",
    "revision": "ec52cf7d49b7def1d911748eaa38cdc9"
  },
  {
    "url": "Grundlagen/STM32/index.html",
    "revision": "6f0c06269d7e980518461dbcf2ed8c26"
  },
  {
    "url": "impressum.html",
    "revision": "7cb915d4e21e51cf863f5058485060ec"
  },
  {
    "url": "index.html",
    "revision": "d6a7b8720720b84669d78508b6dc9413"
  },
  {
    "url": "logo.jpg",
    "revision": "14088649c7affaf863d3fa106e6abcca"
  },
  {
    "url": "Other/Kommentare.html",
    "revision": "790a9f56c4c7cb8a5373d3869c7867c9"
  },
  {
    "url": "platine.jpg",
    "revision": "815d12bab5f717a799c07fa41bda92c6"
  },
  {
    "url": "Platinen/index.html",
    "revision": "6067e0a453f00ca48f47fe3e2f1de5d9"
  },
  {
    "url": "pro_mini.jpg",
    "revision": "e6847ac6e74b196cbfa6e3e6aaba0dad"
  },
  {
    "url": "Projekte/Asselhead/HM-LC-SW1-Li.html",
    "revision": "3fa9b6d1b8c1ba1cac9abba46709cc36"
  },
  {
    "url": "Projekte/der-pw/HM-LC-DW-WM/index.html",
    "revision": "8e2401483472dbd6a3cdef17fece5aa6"
  },
  {
    "url": "Projekte/der-pw/HM-LC-SW1-BA-PCB_mini_MAX1724.html",
    "revision": "1c2143941d5d091cddab08f2fdd16356"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_OBII-Projekt.html",
    "revision": "d79951c34a385ab983657554437a740d"
  },
  {
    "url": "Projekte/der-pw/HM-LC-Sw1-Pl-DN-R1_S26.html",
    "revision": "4182cd09d9890336cb61d2c9218c3c1e"
  },
  {
    "url": "Projekte/fhem-community/Dashbutton.html",
    "revision": "335eb636072307a78c2cf8dc45da74d6"
  },
  {
    "url": "Projekte/fhem-community/HB-IBUT-8.html",
    "revision": "35c0a41762d1203c106399dcf920cf98"
  },
  {
    "url": "Projekte/fhem-community/MAX-Zwischenstecker.html",
    "revision": "9b0e88af409f75ab30a24923fe064054"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-AQ-BME680.html",
    "revision": "a6e33da96e879cbb450bff3b4b2e1c2d"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-CO2_SCD30.html",
    "revision": "30a194060806a66e1a9badfb4f96b2ce"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-TH-SHT75.html",
    "revision": "1821f834fdf1db1ef3fc6c229b768797"
  },
  {
    "url": "Projekte/FUEL4EP/HB-UNI-Sensor1-THPD-BME280.html",
    "revision": "cf0cd958d9634fe97182cfe607be0cf0"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Akku-LED-Strahler.html",
    "revision": "4c1185ec13f74f4869f5f8cea374d7e8"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Gardena-Ventil.html",
    "revision": "50c05ed60568a2354db61da2d77d768f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-LC-Sw12.html",
    "revision": "17ae5ec746176b4a91a33dc9ee3cf47c"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HB-UNI-Sen-PRESS.html",
    "revision": "d43d429a5b79f8ef1b35cacf72d3a995"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Dim1PWM_Konstantstrom.html",
    "revision": "f72ec7eab0c7ab578ff37ed58b651a7d"
  },
  {
    "url": "Projekte/gelegenheitsbastler/HM-LC-Sw1-FM.html",
    "revision": "b1180135284d3c13cd78022b5c516a5f"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-4CH-Umbau.html",
    "revision": "da7966dd9c7daaa7fd54800d0530b9d0"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-Basic-Umbau.html",
    "revision": "cd5cf52df891eb2e219cdc8975174094"
  },
  {
    "url": "Projekte/gelegenheitsbastler/Sonoff-S20-Umbau.html",
    "revision": "d25c8353574449cdd0071765662fcd8f"
  },
  {
    "url": "Projekte/index.html",
    "revision": "31705c5698d7a3a25c044e68e83904fc"
  },
  {
    "url": "Projekte/jan/HM-RC-4/index.html",
    "revision": "7f2c8c3dc670e554803e21dd13f0d8ba"
  },
  {
    "url": "Projekte/jan/HM-SEC-MDIR/index.html",
    "revision": "92c72ca7e09f5149632168fc6a05fc93"
  },
  {
    "url": "Projekte/jerome/AskSinAnalyzer.html",
    "revision": "168d52cf02107c5c518dd423070c6dd1"
  },
  {
    "url": "Projekte/jerome/HB-Dis-EP-42BW.html",
    "revision": "60b7479c623c2c214a7d388361a75137"
  },
  {
    "url": "Projekte/jerome/HB-OU-MP3-LED.html",
    "revision": "2ca2a7456e82a74ea50cf030d9752de6"
  },
  {
    "url": "Projekte/jerome/HB-RC-12-EP.html",
    "revision": "dcc300b4d2fc18805d8f66ff99a5ff6b"
  },
  {
    "url": "Projekte/jerome/HB-RC-2-PBU-LED.html",
    "revision": "a439fd2f27e24bf9e63e37005d516611"
  },
  {
    "url": "Projekte/jerome/HB-UNI-RGB-LED-CTRL.html",
    "revision": "8ed5e7fdf0d4ec43a5f17bd5b30e7e37"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-CAP-MOIST.html",
    "revision": "c0913389947c5c0fdcd7f06b367e3e6d"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-RFID-RC.html",
    "revision": "ff0d002d7aac59971d91e97211fcf78c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-DS18B20.html",
    "revision": "2a37da12143ce6b64929ceef6e7eccfb"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-TEMP-IR.html",
    "revision": "9c57cae941b772c0640081b2e5424b28"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEA.html",
    "revision": "a5858e332b055bb0feee4803dbd3405c"
  },
  {
    "url": "Projekte/jerome/HB-UNI-Sen-WEIGHT.html",
    "revision": "8bca88df63d38fdb0065e3df6d82940a"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1-Pl-DN-R1_PSS.html",
    "revision": "882344da47d85db8faac269f30b9f8f2"
  },
  {
    "url": "Projekte/jerome/HM-LC-Sw1PBU-FM_ISS2.html",
    "revision": "985b5b0d9db6edf06ebcc4f271e1bf92"
  },
  {
    "url": "Projekte/jerome/HM-PB-2-FM_WSC2.html",
    "revision": "d206309d47e32bcb9457bcf3b34ca8f6"
  },
  {
    "url": "Projekte/jerome/HM-RC-8_BRC8.html",
    "revision": "8bbb94f1a9fba8cc2e961ea5aaa0370b"
  },
  {
    "url": "Projekte/jerome/HM-SEC-SC_WDS.html",
    "revision": "9b1330145ff05b39912ea53ae64e0711"
  },
  {
    "url": "Projekte/olliiiver/HM-minimal.html",
    "revision": "87f6537e0e1388068983a7216c7a44a0"
  },
  {
    "url": "Projekte/pafra/HB_LED_Teelicht.html",
    "revision": "848b557dde0dcab830d02c155840bd6d"
  },
  {
    "url": "Projekte/pafra/Lichterkette_Powerbank.html",
    "revision": "58f472e21c1a220d31d0fe2dcf174249"
  },
  {
    "url": "Projekte/Projekt-hinzufuegen.html",
    "revision": "c4677a73d6f9c04b53d6338a613ae996"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM-LinearPWM.html",
    "revision": "2aef51f9b0ea1b966c0a8f83c331d8eb"
  },
  {
    "url": "Projekte/psi/HM-LC-Dim1PWM/index.html",
    "revision": "f59aa95d297c538ca821c16d1b2c1dda"
  },
  {
    "url": "Projekte/psi/HM-WDS40-TH-I-BME280/index.html",
    "revision": "c73b186c6cb6902e486a69c3af6bcfc9"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-SEC-RHS.html",
    "revision": "0d7161e635789caa3be826e23ee2ad0c"
  },
  {
    "url": "Projekte/psi/HMSensor/HM-WDS40-TH-I-RTC-BME280.html",
    "revision": "5582e9587466e9b99a407c5eed0999d9"
  },
  {
    "url": "Projekte/psi/HMSensor/index.html",
    "revision": "f9e12ac3b5a2f62b08a8f20de4379a25"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4-Hutschiene.html",
    "revision": "aee3ea9549b564429f059562db8feb37"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-4-4.html",
    "revision": "4f6f3ece34df2561ad486907274b2889"
  },
  {
    "url": "Projekte/ronny/HB-UNI-SenAct-8-8-Hutschiene.html",
    "revision": "dee111b24c19e638dafd71ff2b89c7ae"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-12V.html",
    "revision": "2e0625976a7badbaa0b575d64234875a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V-TR.html",
    "revision": "cff75bb797a1febe19a060afd76b88a1"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw1-PCB-230V.html",
    "revision": "36da2ef1a00ab2a5b89c6a35cfcb437a"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-12V.html",
    "revision": "9291465fe4e138aac0dd5fc83b73b396"
  },
  {
    "url": "Projekte/ronny/HM-LC-Sw2-230V.html",
    "revision": "d9e90475ab6afd404b27f29794251205"
  },
  {
    "url": "Projekte/ronny/HM-MOD-Re-8.html",
    "revision": "ad4c5877a835ec9e65b14c8824847c15"
  },
  {
    "url": "Projekte/ronny/HM-PBI-4-FM.html",
    "revision": "a92342b1ec947d622a73858bc0657045"
  },
  {
    "url": "Projekte/ronny/Wandtaster.html",
    "revision": "5e2b17fad484f90dc11352b1d82e5859"
  },
  {
    "url": "Projekte/spezialtrick/HM-MyS-Relay-Board.html",
    "revision": "5ac2f61ff1750b93f9730ff614deefd7"
  },
  {
    "url": "Projekte/ssbingo/HB-OU-RGB-STACKFIRE.html",
    "revision": "3e1b0fe61b460a34555f118feb17fa57"
  },
  {
    "url": "Projekte/ssbingo/HB-UNI-Sen-Lev-Vo.html",
    "revision": "0ca9a4ebf187ddc9237f02095e5f2523"
  },
  {
    "url": "Projekte/stan23/HM-ES-PMSw1-Pl_GosundSP1.html",
    "revision": "0d42c51c2a7c8c3390993ec4b0a57265"
  },
  {
    "url": "Projekte/stan23/HM-LC-Bl1-FM-DC.html",
    "revision": "b452ceb38c6bd9326b9c801c55a4f97a"
  },
  {
    "url": "Projekte/stan23/HM-LC-Sw1-Pl-DN-R1_OBI.html",
    "revision": "4fe4873f052d87b9f44dc0f7c5e893c4"
  },
  {
    "url": "Projekte/tom-major/HB-SEC-WDS-2.html",
    "revision": "ff8c746eb76fb7c551326a013afbb345"
  },
  {
    "url": "Projekte/tom-major/HB-SEN-LJet.html",
    "revision": "370207f1b6ec0495efc405503e1d820b"
  },
  {
    "url": "Projekte/tom-major/HB-UNI-Sensor1.html",
    "revision": "b1a6c213409ca56f520e696065b6e758"
  },
  {
    "url": "Projekte/trilu2000/HB-CDL-6.html",
    "revision": "fae13c9bb0dd1891446f2526e5b71c66"
  },
  {
    "url": "Projekte/Umbau.html",
    "revision": "465dc4e1b762ac8424db0bf856849bb2"
  },
  {
    "url": "Projekte/wolwin/HB-LC-BL1-Velux.html",
    "revision": "08d713d87ad3375809a88bf4854f0029"
  },
  {
    "url": "Projekte/wolwin/HB-SCI-4-O-Gar118x.html",
    "revision": "35338a9f6ef3796fd18003fc92035dae"
  },
  {
    "url": "rftypes/HomeBrew.html",
    "revision": "e94c6cf5e0707d79b1ec948120a8943e"
  },
  {
    "url": "rftypes/index.html",
    "revision": "7f365a8ad83379f03ca7a3137bca1f1d"
  },
  {
    "url": "Sketche/index.html",
    "revision": "fc255a8b727cd077b55adc23082b75bb"
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
