(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{462:function(s,t,n){"use strict";n.r(t);var e=n(59),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"fehlerhafte-cc1101-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fehlerhafte-cc1101-module"}},[s._v("#")]),s._v(" Fehlerhafte CC1101 Module")]),s._v(" "),e("p",[s._v("Es sind CC1101 Module im Umlauf die auf einer leicht verschobenen Frequenz senden."),e("br"),s._v("\nDies führt zu sehr schlechte RSSI Werten. Meist kann der Aktor gar nicht erst angelernt werden.")]),s._v(" "),e("p",[s._v("Näheres ist im "),e("a",{attrs:{href:"https://forum.fhem.de/index.php/topic,91740.0.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("FHEM-Forum Thread"),e("OutboundLink")],1),s._v(" erläutert.")]),s._v(" "),e("p",[e("img",{attrs:{src:n(634),alt:"CC1101 Modulvergleich"}})]),s._v(" "),e("h2",{attrs:{id:"ermittlung-der-cc1101-frequenz"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ermittlung-der-cc1101-frequenz"}},[s._v("#")]),s._v(" Ermittlung der CC1101 Frequenz")]),s._v(" "),e("p",[s._v("Viele Module kann man durch eine "),e("em",[s._v("kleine")]),s._v(" Verschiebung der Frequenz zur Funktion bewegen. Dazu gibt es einen\n"),e("a",{attrs:{href:"https://github.com/pa-pa/AskSinPP/blob/master/examples/FreqTest/FreqTest.ino",target:"_blank",rel:"noopener noreferrer"}},[s._v("FreqTest.ino"),e("OutboundLink")],1),s._v(" Sketch.")]),s._v(" "),e("p",[s._v("Der Testsketch versucht ausgehend von der Standardfrequenz ein gültiges Paket zu empfangen. Wenn nichts empfangen wurde, wird die Frequenz geändert und es wird wieder versucht. Dabei wird jeweils versucht den Bereich oberhalb und unterhalb der Standardfrequenz zu erweitern. Wenn irgendwo ein Paket empfangen wurde, wird von dort ausgehend die obere und untere Grenze ermittelt. Am Schluss wird die Frequenz, die in der Mitte zwischen oberer und unterer Grenze liegt, in den vorher ungenutzten Bereich des EEPROM geschrieben.")]),s._v(" "),e("p",[s._v("Die Funkpartner sollten tendenziell weiter weg vom FreqTest-Device sein.")]),s._v(" "),e("p",[s._v("Der Testsketch verhält sich im Standardfall "),e("strong",[s._v("passiv")]),s._v(". Das bedeutet, dass nur versucht wird, Pakete zu empfangen. Wurde nach einer Minute (einstellbar durch "),e("code",[s._v("SCANTIME")]),s._v(") nichts empfangen, wird die Frequenz gewechselt. Um sicher zu stellen, dass auch Nachrichten empfangen werden können, sollte während des Scans irgendein Gerät geschaltet werden.")]),s._v(" "),e("p",[s._v("Durch Setzen des "),e("code",[s._v("ACTIVE_PING")]),s._v("-defines kann der aktive Modus eingeschaltet werden. Dann sendet der Sketch jede Sekunde eine Statusmessage. Hierzu sind sind die "),e("code",[s._v("PING_FROM")]),s._v(" und "),e("code",[s._v("PING_TO")]),s._v(" IDs entsprechend der eigenen Umgebung anzupassen. "),e("code",[s._v("PING_FROM")]),s._v(" sollte ein gepairtes Gerät sein - z.B. Steckdose. "),e("code",[s._v("PING_TO")]),s._v(" ist die Zentrale/FHEM/CCU. Das Scannen sollte jetzt viel schneller gehen, da eine Antwort von der Zentrale angefordert wird.")]),s._v(" "),e("p",[s._v("Über folgendes "),e("strong",[s._v("CCU-Script")]),s._v(" (Programme & Zentralverknüpfungen > Skript testen) können die PING-Adressen ermittelt werden:")]),s._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Folgend")]),s._v(" muss die "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Seriennummer")]),s._v(" angepasst werden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Es")]),s._v(" sollte ein nicht batteriebetriebenen "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Ger")]),s._v("ätes gewählt werden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nstring serial "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OEQ1234567"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nstring ccu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstring device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nstring stderr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsystem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"grep BidCoS-Address /etc/config/ids | awk -F '= ?' -v format='%x\\n' '{printf(format,$2)}'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("ccu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("stderr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stderr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nsystem"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Exec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"grep '^<device serial' /etc/config/rfd/\"")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" serial "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("\".dev | sed 's/.*address=.0x\\([0-9A-F]*\\). .*/\\1/'\"")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("stderr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("stderr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PING_FROM(0x"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Substr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('",0x"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Substr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('",0x"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Substr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('");"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WriteLine")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PING_TO(0x"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ccu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Substr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('",0x"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ccu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Substr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('",0x"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" ccu"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Substr")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('");"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("Sind nun die ID der CCU und eines Geräts bekannt kann der Sketch angepasst werden. Das Kommentarzeichen\nvor "),e("code",[s._v("#define ACTIVE_PING")]),s._v(" wird entfernt und die "),e("code",[s._v("PING_FROM")]),s._v(" sowie "),e("code",[s._v("PING_TO")]),s._v(" Werte angepasst:")]),s._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token macro property"}},[e("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),e("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("define")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token expression"}},[s._v("ACTIVE_PING")])]),s._v("\nHMID "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PING_FROM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x12")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x34")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x56")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// from address for status message e.g. switch")]),s._v("\nHMID "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("PING_TO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x99")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x66")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x99")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// to address for status message / central / CCU")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Nun wird der Sketch geflasht und der Scanvorgang im seriellen Monitor verfolgt:")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("AskSin++ V3.1.7 (Mar 20 2019 15:34:55)\nCC init1\nCC Version: 04\n - ready\nStart searching ...\nFreq 0x21656A: 671067.  1/74\nSearch for upper bound\nFreq 0x21657A: 671067.  1/72\nFreq 0x21658A: 671067.  1/73\nFreq 0x21659A: 671067.  1/72\nFreq 0x2165AA: 671067.  1/74\nFreq 0x2165BA: 671067.  1/72\nFreq 0x2165CA: 671067.  1/74\nFreq 0x2165DA: 60FE1F.  1/86\nFreq 0x2165EA: 671067.  1/75\nFreq 0x2165FA: 671067.  1/75\nFreq 0x21660A: 671067.  1/73\nFreq 0x21661A: 671067.  1/73\nFreq 0x21662A: 671067.  1/73\nFreq 0x21663A:   0/0\nSearch for lower bound\nFreq 0x21655A:   0/0\n\nDone: 0x21656A - 0x21662A\nCalculated Freq: 0x2165CA\nStore into config area: 65CA\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])]),e("p",[s._v("Wie man in der Ausgabe sieht, ist nun die neue Frequenz "),e("code",[s._v("0x2165CA")]),s._v(" im EEPROM gespeichert.")]),s._v(" "),e("p",[s._v("Man kann den Scanvorgang wiederholt laufen lassen um das Ergebnis zu verifizieren. Hierzu einfach den Arduino über den Reset-Button neu starten.")]),s._v(" "),e("p",[s._v("Wird nun der eigentlich Sketch geflasht, wird beim Start das EEPROM ausgelesen und die ermittelte Frequenz - gespeichert was auch im Monitor ersichtlich ist:")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("AskSin++ V3.1.7 (Mar 20 2019 17:43:23)\nAddress Space: 32 - 1650\n00000000\nInit Storage: CAFE6963\nCC init1\nCC Version: 04\n - ready\nConfig Freq: 0x2165CA\nID: 010808  Serial: PsiDimDW08\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"frequenzanpassung-per-sketch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frequenzanpassung-per-sketch"}},[s._v("#")]),s._v(" Frequenzanpassung per Sketch")]),s._v(" "),e("p",[s._v("Alternativ kann die (ggf. per FreqTest.ino) ermittelte Frequenz im Sketch gesetzt werden. Dazu kann der "),e("code",[s._v("setup()")]),s._v("-Block\nangepasst werden. Es ist darauf zu achten, dass die Anpassung nach dem "),e("code",[s._v("init(hal)")]),s._v(" eingefügt werden da "),e("code",[s._v("init()")]),s._v("\ndie Standardfrequenz setzt.")]),s._v(" "),e("div",{staticClass:"language-cpp line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("div",{staticClass:"highlighted"},[s._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("setup")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("DINIT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("57600")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ASKSIN_PLUS_PLUS_IDENTIFIER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" sdev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("DIMMER1_PIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("DIMMER2_PIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// first init - setup connection between button and first channel")]),s._v("\n    sdev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("channel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("peer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cfgBtn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("peer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Init the hw button")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("buttonISR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cfgBtn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("CONFIG_BUTTON_PIN"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Set frequency for CC1101")]),s._v("\n  hal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("radio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("initReg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC1101_FREQ2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x21")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  hal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("radio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("initReg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC1101_FREQ1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x65")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  hal"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("radio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("initReg")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CC1101_FREQ0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xCA")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  sdev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("initDone")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Output ID and Serial in serial console")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("DDEVINFO")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sdev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"weitere-losungen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weitere-losungen"}},[s._v("#")]),s._v(" Weitere Lösungen")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://forum.fhem.de/index.php/topic,91740.msg872505.html#msg872505",target:"_blank",rel:"noopener noreferrer"}},[s._v("Tausch der Kondensatoren gegen 12pF"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/TomMajor/SmartHome/tree/master/Info/CC1101_Frequenz",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC1101_Frequenz XLS"),e("OutboundLink")],1),s._v(" hilft bei der Berechnung des Hexwerts aus der Freq.")])]),s._v(" "),e("h2",{attrs:{id:"hb-cc1101-testbench"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hb-cc1101-testbench"}},[s._v("#")]),s._v(" HB-CC1101-Testbench")]),s._v(" "),e("p",[s._v("Meist werden die CC1101-Module über die SMD-Kontakte verlötet und sind im Fehlerfall nur schwer wieder zu entfernen.\nUm dem Problem zu entgehen wurde im homematic-forum.de die HB-CC1101-Testbench vorgestellt.\nVereinfacht ausgedrückt ist es damit möglich, sowohl den Ruhestrohm zu testen, als auch einen FreqTest durchzuführen und um evtl. Fehlfunktionen noch vor dem Einbau feststellen zu können.")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=76&t=54701",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vorstellung HC-CC1101-Testbench"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://homematic-forum.de/forum/viewtopic.php?f=76&t=54701&start=40#p560242",target:"_blank",rel:"noopener noreferrer"}},[s._v("Verbessertes Klemmstück zum Aufsockeln des Moduls"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports},634:function(s,t,n){s.exports=n.p+"assets/img/CC1101_bad-vs-working.614ebe58.jpg"}}]);