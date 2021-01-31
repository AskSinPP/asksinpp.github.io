(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{436:function(e,t,n){"use strict";n.r(t);var r=n(59),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hm-lc-dim1pwm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hm-lc-dim1pwm"}},[e._v("#")]),e._v(" HM-LC-Dim1PWM")]),e._v(" "),r("p",[e._v("1-Kanal PWM LED Dimmer für 7-24V mit Eingängen für zwei externe Taster.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(517),alt:"HM-LC-Dim1PWM"}})]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Es hat sich gezeigt, dass die zwei Tasterschnittstellen nicht vernünftig von der CCU verarbeitet werden. Ich empfehle diese "),r("strong",[e._v("nicht")]),e._v(" zu verwenden.")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Der Fade-Effekt ist wegen der 8-Bit Auflösung des 328p nicht ganz "),r("em",[e._v("smooth")]),e._v(", eine gute Alternative bietet\nder Dimmer auf "),r("RouterLink",{attrs:{to:"/Projekte/der-pw/HM-LC-DW-WM/"}},[e._v("HM-LC-DW-WM")]),e._v(" auf Basis des STM32.")],1)]),e._v(" "),r("h2",{attrs:{id:"schaltplan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#schaltplan"}},[e._v("#")]),e._v(" Schaltplan")]),e._v(" "),r("p",[r("img",{attrs:{src:n(518),alt:"Dim1PWM Schaltplan"}})]),e._v(" "),r("p",[e._v("Zur Sicherheit kann noch ein Gate-Widerstand von ca 100Ω eingefügt werden.")]),e._v(" "),r("h2",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[e._v("#")]),e._v(" Hardware")]),e._v(" "),r("h3",{attrs:{id:"bauteile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bauteile"}},[e._v("#")]),e._v(" Bauteile")]),e._v(" "),r("p",[r("img",{attrs:{src:n(519),alt:"Bauteile"}})]),e._v(" "),r("ul",[r("li",[e._v("Arduino Pro Mini ATmega328P (3.3V/8MHz)")]),e._v(" "),r("li",[e._v("CC1101 Funkmodul (868 MHz)")]),e._v(" "),r("li",[e._v("Festspannungsregler L78L05ACZ")]),e._v(" "),r("li",[e._v("Taster 6x6")]),e._v(" "),r("li",[e._v("Led 5mm")]),e._v(" "),r("li",[e._v("Widerstände 1/4W 100Ω, 300Ω, 4,7kΩ")]),e._v(" "),r("li",[e._v("MOSFET "),r("a",{attrs:{href:"http://www.irf.com/product-info/datasheets/data/irlz44n.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRLZ44N"),r("OutboundLink")],1),e._v(" (oder ggf. besser "),r("a",{attrs:{href:"http://www.irf.com/product-info/datasheets/data/irf3708.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("IRF3708"),r("OutboundLink")],1),e._v(", siehe "),r("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=19&t=46999#p472462",target:"_blank",rel:"noopener noreferrer"}},[e._v("Forum-Beitrag"),r("OutboundLink")],1),e._v(")")]),e._v(" "),r("li",[e._v("AKL 057-03 Anschlussklemme, 3-pol, alternativ 1x WAGO 250-503 (Federklemmen sind zu bevorzugen)")]),e._v(" "),r("li",[e._v("2x AKL 057-02 Anschlussklemme, 2-pol, alternativ 1x WAGO 250-504")])]),e._v(" "),r("h3",{attrs:{id:"platine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#platine"}},[e._v("#")]),e._v(" Platine")]),e._v(" "),r("p",[e._v("Der Dim1PWM lässt sich ganz gut auf einer Streifenraster-Platine aufbaun."),r("br"),e._v("\nEleganter geht is mit der Platine von Ronny.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(520),alt:"Dim1PWM-PCB top"}})]),e._v(" "),r("p",[e._v("Wer Bedarf an einer Platine hat kann "),r("a",{attrs:{href:"https://www.facebook.com/ronny.thomas.83",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ronny über Facebook kontaktieren"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"aufbau"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#aufbau"}},[e._v("#")]),e._v(" Aufbau")]),e._v(" "),r("p",[e._v("Mit einer dritten Hand und einer selbstklemmenden Pinzette ist der Dim1PWM im Handumrehene verlötet."),r("br"),e._v("\nMan fängt mit den niedrigen Bauteilen an. Die Widerstände werden unter dem Arduino platziert. Die Anode der Status-LED ist durch\nden geraden Strich symbolisiert und zeigt Richtung "),r("em",[e._v("Gnd")]),e._v(".")]),e._v(" "),r("p",[r("img",{attrs:{src:n(521),alt:"Dim1PWM teilweise bestückt"}})]),e._v(" "),r("p",[e._v("Ursprünglich wurden zwei Kondensatoren zur Entstörung und Glättung der Spannung vorgesehen. Diese blieben bislang\nunbestückt da sich keine Probleme ergaben. Optional kann man noch einen Klemmblock für zwei die zwei Tastereingänge verlöten.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(522),alt:"Dim1PWM_fertig"}})]),e._v(" "),r("p",[e._v("Die Version 1.4 der Platine hat noch einen Fehler. Die Leiterbahn, markiert durch den roten Kreis, muss unterbrochen werden und GND muss über zwei Drahtbrücken verbunden werden.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(523),alt:"Dim1PWM Reparatur v1.4 "}})]),e._v(" "),r("h3",{attrs:{id:"gehause"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gehause"}},[e._v("#")]),e._v(" Gehäuse")]),e._v(" "),r("p",[e._v("// TBD")]),e._v(" "),r("h2",{attrs:{id:"software"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),r("p",[e._v("Als Sketch kommt "),r("a",{attrs:{href:"https://github.com/AskSinPP/asksinpp-web/blob/master/Projekte/psi/HM-LC-Dim1PWM/HM-LC-Dim1PWM_btns.ino",target:"_blank",rel:"noopener noreferrer"}},[e._v("HM-LC-Dim1PWM_btns.ino"),r("OutboundLink")],1),e._v(" zum Einsatz.")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Stand 16.12.2018: Es musst zwingend der "),r("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Master-Branch"),r("OutboundLink")],1),e._v("\nvon AskSinPP verwendet werden da in V3 der\n"),r("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/issues/80",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fehler in der pwmtable"),r("OutboundLink")],1),e._v(" noch nicht behoben ist was dazu führt,\ndass die LEDs auch bei 0% noch sichtbar glimmen.")])]),e._v(" "),r("p",[e._v("PS: Man denke daran die "),r("code",[e._v("Device ID")]),e._v(" und "),r("code",[e._v("Device Serial")]),e._v(" zu verändern da diese nur einmal pro Homematic Installation vorkommen dürfen.")]),e._v(" "),r("h2",{attrs:{id:"betrieb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#betrieb"}},[e._v("#")]),e._v(" Betrieb")]),e._v(" "),r("p",[e._v("Da im Sketch ein "),r("code",[e._v("ConfigToggleButton")]),e._v(" definiert ist wird durch:")]),e._v(" "),r("ul",[r("li",[e._v("kurzen Tastedruck der Zustand verändert: LED an / aus")]),e._v(" "),r("li",[e._v("langen Tastendruck (~3s) der Anlernmodus gestartet")]),e._v(" "),r("li",[e._v("ganz langen Tastendruck (~7s) ein RESET des Aktors ausgeüfhrt")])]),e._v(" "),r("p",[e._v("Das Anlernen kann auch über die Serial durchgeführt werden.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(524),alt:"Dim1PWM in action"}})]),e._v(" "),r("p",[e._v("Optional kann man den Dimmer über zwei potentialfreie Taster bedienen.\nDas Verhalten der 2. und 3. "),r("em",[e._v("internen Gerätetaste")]),e._v(" kann in der CCU eingestellt werden.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(525),alt:"Einstellung der internen Gerätetasten"}})]),e._v(" "),r("h2",{attrs:{id:"weiteres"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#weiteres"}},[e._v("#")]),e._v(" Weiteres")]),e._v(" "),r("ul",[r("li",[e._v("Solltest du Anmerkungen oder Probleme mit dem Nachbau haben, lasst es "),r("a",{attrs:{href:"mailto:asppc@psi.cx"}},[e._v("mich")]),e._v(" bitte wissen damit dieses Projekt verbessert werden kann.")]),e._v(" "),r("li",[e._v("Sofern du die Möglichkeit hast den Dimmer an seine Grenzen zu bringen (also anständig Last am MOSFET) wäre ich sehr an den Ergebnissen interessiert.")])]),e._v(" "),r("p",[e._v("Danke an pa-pa und Jérôme für ihre Arbeit und den vielen Support! Ohne diesen würde es das hier nicht geben.")])])}),[],!1,null,null,null);t.default=a.exports},517:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM.242c77a3.jpg"},518:function(e,t,n){e.exports=n.p+"assets/img/HM-LC-Dim1PWM.cb1ba428.svg"},519:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_parts.22f3395d.jpg"},520:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_PCB-top.03e465d7.jpg"},521:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_PCB_partly-assembled.bd9ad69b.jpg"},522:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_finish-1.d0a02871.jpg"},523:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_1.4-repair.088eba97.jpg"},524:function(e,t,n){e.exports=n.p+"assets/img/Dim1PWM_finish-2.2998a76e.jpg"},525:function(e,t,n){e.exports=n.p+"assets/img/interne-tasten-config.9cf9ee3c.png"}}]);