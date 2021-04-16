(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{476:function(e,n,t){"use strict";t.r(n);var s=t(60),r=Object(s.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"debugging-fehlersuche"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-fehlersuche"}},[e._v("#")]),e._v(" Debugging / Fehlersuche")]),e._v(" "),s("p",[e._v("Sollte es einmal klemmen und die aufgebaute Schaltung nicht funktionieren,\nist es immer von Vorteil, strukturiert nach dem Fehler zu suchen.")]),e._v(" "),s("h2",{attrs:{id:"einstellungen-in-der-arduino-ide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#einstellungen-in-der-arduino-ide"}},[e._v("#")]),e._v(" Einstellungen in der Arduino IDE")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Board:")]),e._v(" Arduino Pro or Pro Mini")]),e._v(" "),s("li",[s("strong",[e._v("Prozessor:")]),e._v(" ATmega328P (3.3V, 8MHz)")]),e._v(" "),s("li",[s("strong",[e._v("Port:")]),e._v(" "),s("em",[e._v("hier den seriellen Port vom FTDI-Adapter auswählen")])])]),e._v(" "),s("p",[s("img",{attrs:{src:t(650),alt:"Arduino IDE Settings"}})]),e._v(" "),s("h2",{attrs:{id:"serieller-monitor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serieller-monitor"}},[e._v("#")]),e._v(" Serieller Monitor")]),e._v(" "),s("p",[e._v('Wichtig und aufschlussreich sind die seriellen Debugmeldungen, die vom Mikrocontroller ausgegeben werden. Um sich diese anzeigen zu lassen, ist der "serielle Monitor" zu öffnen. '),s("em",[e._v("(Arduino IDE: Menü -> Werkzeuge -> serieller Monitor)")]),s("br"),e._v("\nDabei muss ggf. noch die Baudrate (unten rechts im Fenster) auf "),s("strong",[e._v("57600")]),e._v(" Baud eingestellt werden."),s("br")]),e._v(" "),s("ul",[s("li",[e._v("Fehlerfreies Starten eines AskSinPP Device:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("AskSinPP V3.1.1 (Nov  7 2018 18:15:23)\nAddress Space: 32 - 902\nCC init1\nCC Version: 04\n- ready\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("ggf. erscheint nach einem Reset, neuem Sketch (erstmaliger Inbetriebnahme) zwischendrin noch:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CAFEFAC4\nInit Storage: CAFE85D5\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Wenn diese Meldungen so erscheinen, ist schon mal das Funkmodul "),s("strong",[e._v("korrekt")]),e._v(" initialisiert worden.")]),e._v(" "),s("ul",[s("li",[e._v("Gibt es Probleme mit der Kommunikation mit dem Funkmodul:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CC init1\nError at 00 expected: 2E read: 00\nError at 02 expected: 06 read: 00\n ...\nError at 3E expected: 03 read: 00\nCC Version: 00\nError at 3E expected: C0 read: 00\n- ready\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("Dann unbedingt nochmals die Verdrahtung überprüfen.")]),e._v(" "),s("p",[e._v("Weitere Ausgaben im seriellen Monitor:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Meldung")]),e._v(" "),s("th",[e._v("Beschreibung")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("<- ...")]),e._v(" "),s("td",[e._v("gesendetes Telegramm")])]),e._v(" "),s("tr",[s("td",[e._v("-> ...")]),e._v(" "),s("td",[e._v("empfangenes, an das Gerät gerichtetes Telegramm")])]),e._v(" "),s("tr",[s("td",[e._v("ignore ...")]),e._v(" "),s("td",[e._v("empfangenes, nicht an das Geräte gerichtetes Telegramm")])])])]),e._v(" "),s("h2",{attrs:{id:"ccu-log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ccu-log"}},[e._v("#")]),e._v(" CCU Log")]),e._v(" "),s("p",[e._v("In der CCU unter Einstellungen > Systemsteuerung > Zentralen-Wartung kann das Loglevel für "),s("strong",[e._v("HomeMatic Funk")]),e._v(" auf "),s("em",[e._v("Alles loggen")]),e._v(" gestellt werden, um den Funkverkehr im Fehlerprotokoll zu sehen.")]),e._v(" "),s("p",[s("img",{attrs:{src:t(651),alt:"CCU Fehlerprotokoll Einstellungen"}})]),e._v(" "),s("p",[e._v("Man kann die Logdatei über die WebUI herunterladen."),s("br"),e._v("\nUm sie auf der Shell einzusehen loggt man sich mit ssh (bzw. Putty für Windows) auf der CCU ein.\nDie Logdatei befindet sich in "),s("code",[e._v("/var/log/messages")]),e._v(". Mit dem Befehl "),s("code",[e._v("less /var/log/messages")]),e._v(" zeigt man die ganze Datei an.\nMit "),s("code",[e._v("tail -f /var/log/messages")]),e._v(" werden die letzten paar Zeile dargestellt, neue Meldungen werden sofort unten angefügt.")]),e._v(" "),s("h2",{attrs:{id:"doppelte-device-id-oder-serial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doppelte-device-id-oder-serial"}},[e._v("#")]),e._v(" Doppelte Device ID oder Serial")]),e._v(" "),s("p",[e._v("Es ist sicherzustellen, dass jedes HomeMatic Gerät eine eigene "),s("code",[e._v("Device ID")]),e._v(" und "),s("code",[e._v("Device Serial")]),e._v(" besitzt!"),s("br"),e._v("\nSiehe auch "),s("RouterLink",{attrs:{to:"/Grundlagen/02_software.html#sketch-anpassen-und-flashen"}},[e._v("Sketch anpassen und flashen")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"gerat-lasst-sich-nicht-anlernen-funkprobleme"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gerat-lasst-sich-nicht-anlernen-funkprobleme"}},[e._v("#")]),e._v(" Gerät lässt sich nicht anlernen / Funkprobleme")]),e._v(" "),s("p",[e._v("Siehe "),s("RouterLink",{attrs:{to:"/Grundlagen/FAQ/Fehlerhafte_CC1101.html"}},[e._v("Fehlerhafte CC1101 Module")])],1)])}),[],!1,null,null,null);n.default=r.exports},650:function(e,n,t){e.exports=t.p+"assets/img/Arduino_IDE_Settings1.d6071e2d.jpg"},651:function(e,n,t){e.exports=t.p+"assets/img/ccu-fehlerprotokoll.b450f5d3.png"}}]);