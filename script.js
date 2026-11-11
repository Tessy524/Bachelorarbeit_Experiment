// =========================
// Elemente aus der HTML-Seite
// =========================

const startScreen = document.getElementById("start-screen");
const experimentScreen = document.getElementById("experiment-screen");

const startButton = document.getElementById("start-button");

const documentList = document.getElementById("document-list");
const documentCount = document.getElementById("document-count");

const documentModal = document.getElementById("document-modal");
const closeDocumentButton = document.getElementById("close-document");

const modalDocumentTitle = document.getElementById("modal-document-title");
const modalDocumentContent = document.getElementById("modal-document-content");
const modalDocumentType = document.getElementById("modal-document-type");
const assignDocumentButton =
    document.getElementById("assign-document-button");

const folderAssignmentInputs =
    document.querySelectorAll('input[name="folder-assignment"]');
const timerDisplay = document.getElementById("timer");
const securityModal =
    document.getElementById("security-modal");

const securityWarningText =
    document.getElementById("security-warning-text");

const securityAbortButton =
    document.getElementById("security-abort-button");

const securityContinueButton =
    document.getElementById("security-continue-button");

// =========================
// Dokumentdaten
// =========================

const documents = [

    {
        id: 1,
        name: "Dokument_01.docx",
        type: "Dokument",
        icon: "📄",
        content: `
            <article class="business-document contract-document">
                <header class="business-letterhead">
                    <div class="business-brand">
                        <span class="business-brand-mark">N</span>
                        <div>
                            <strong>Nordwerk GmbH</strong>
                            <small>IT-Services &amp; Bürokommunikation</small>
                        </div>
                    </div>
                    <div class="business-address">
                        Kastanienweg 14<br>
                        60325 Frankfurt am Main
                    </div>
                </header>

                <p class="business-document-intro">
                    Zwischen der <strong>Nordwerk GmbH</strong>, Kastanienweg 14,
                    60325 Frankfurt am Main, nachfolgend „Käufer“, und der
                    <strong>TechSolutions GmbH</strong>, Industriestraße 8,
                    61231 Bad Homburg, nachfolgend „Verkäufer“,
                    wird folgende Vereinbarung geschlossen.
                </p>

                <section class="contract-clause">
                    <h3>§ 1 Vertragsgegenstand</h3>
                    <p>Der Verkäufer liefert zehn Arbeitsplatzcomputer
                    einschließlich Monitoren und Zubehör an den Käufer.</p>
                </section>
                <section class="contract-clause">
                    <h3>§ 2 Kaufpreis</h3>
                    <p>Der vereinbarte Gesamtpreis beträgt 8.450,00 €
                    einschließlich Umsatzsteuer.</p>
                </section>
                <section class="contract-clause">
                    <h3>§ 3 Lieferung</h3>
                    <p>Die Lieferung erfolgt bis zum 15. September 2026
                    an den Geschäftssitz des Käufers.</p>
                </section>

                <p class="contract-place-date">Frankfurt am Main, 01. September 2026</p>
                <div class="contract-signatures">
                    <div><span class="signature-line"></span><small>Nordwerk GmbH<br>Käufer</small></div>
                    <div><span class="signature-line"></span><small>TechSolutions GmbH<br>Verkäufer</small></div>
                </div>
            </article>
        `
    },

    
    {
        id: 2,
        name: "Dokument_02.docx",
        type: "Dokument",
        icon: "📄",
        content: `
            <article class="business-document maintenance-document">
                <header class="maintenance-letterhead">
                    <div class="maintenance-brand">
                        <span class="maintenance-brand-mark">TC</span>
                        <div>
                            <strong>TechCare Solutions</strong>
                            <small>IT-Service &amp; Systembetreuung</small>
                        </div>
                    </div>
                    <div class="maintenance-address">
                        Industriestraße 8<br>
                        61231 Bad Homburg
                    </div>
                </header>

                <p class="maintenance-intro">
                    Zwischen der <strong>Nordwerk GmbH</strong>, nachfolgend
                    „Auftraggeber“, und der <strong>TechCare Solutions GmbH</strong>,
                    nachfolgend „Auftragnehmer“, wird folgende Vereinbarung geschlossen.
                </p>

                <section class="maintenance-clause">
                    <h3>§ 1 Leistungsumfang</h3>
                    <p>Der Auftragnehmer übernimmt die regelmäßige Wartung von
                    15 Arbeitsplatzcomputern sowie die Überprüfung der
                    Netzwerkkomponenten am Standort des Auftraggebers.</p>
                </section>

                <section class="maintenance-clause">
                    <h3>§ 2 Wartungsintervalle</h3>
                    <p>Die Wartung erfolgt vierteljährlich nach vorheriger
                    Terminvereinbarung. Bei technischen Störungen steht ein
                    telefonischer Support zur Verfügung.</p>
                </section>

                <section class="maintenance-clause">
                    <h3>§ 3 Vergütung</h3>
                    <p>Für die vereinbarten Leistungen wird eine monatliche
                    Pauschale von 240,00 € einschließlich Umsatzsteuer berechnet.</p>
                </section>

                <section class="maintenance-clause">
                    <h3>§ 4 Vertragslaufzeit</h3>
                    <p>Der Vertrag beginnt am 1. September 2026 und hat eine
                    Laufzeit von zwölf Monaten.</p>
                </section>

                <p class="maintenance-date">Bad Homburg, 20. August 2026</p>

                <div class="maintenance-signatures">
                    <div>
                        <span class="maintenance-signature-line"></span>
                        <small>Nordwerk GmbH<br>Auftraggeber</small>
                    </div>
                    <div>
                        <span class="maintenance-signature-line"></span>
                        <small>TechCare Solutions GmbH<br>Auftragnehmer</small>
                    </div>
                </div>
            </article>
        `
    },


        
    {
        id: 3,
        name: "Dokument_03.pdf",
        type: "Dokument",
        icon: "📄",
        content: `
            <article class="business-document invoice-document">
                <header class="invoice-letterhead">
                    <div>
                        <strong class="invoice-company">NORDWERK</strong>
                        <small>GmbH · IT-Services &amp; Bürokommunikation</small>
                    </div>
                    <div class="invoice-company-address">
                        Kastanienweg 14<br>
                        60325 Frankfurt am Main
                    </div>
                </header>

                <div class="invoice-address-row">
                    <div class="invoice-recipient">
                        <span class="invoice-label">Rechnung an</span>
                        <strong>Bergmann Consulting GmbH</strong>
                        Mainzer Landstraße 72<br>
                        60327 Frankfurt am Main
                    </div>
                    <div class="invoice-date">
                        Frankfurt am Main<br>
                        31. Juli 2026
                    </div>
                </div>

                <p class="invoice-intro">
                    Für die im Juli 2026 erbrachten IT-Dienstleistungen
                    berechnen wir folgende Leistungen:
                </p>

                <table class="invoice-table">
                    <thead>
                        <tr>
                            <th>Leistung</th>
                            <th>Betrag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                IT-Support und Systembetreuung
                                <small>Leistungszeitraum: Juli 2026</small>
                            </td>
                            <td>1.042,02 €</td>
                        </tr>
                        <tr>
                            <td>Umsatzsteuer (19 %)</td>
                            <td>197,98 €</td>
                        </tr>
                        <tr class="invoice-total">
                            <td>Gesamtbetrag</td>
                            <td>1.240,00 €</td>
                        </tr>
                    </tbody>
                </table>

                <p class="invoice-payment">
                    Bitte überweisen Sie den Rechnungsbetrag innerhalb
                    von 14 Tagen unter Angabe des Verwendungszwecks
                    auf unser Geschäftskonto.
                </p>

                <footer class="invoice-footer">
                    Nordwerk GmbH · Geschäftsführung: M. Hoffmann<br>
                    Bankverbindung: Musterbank Frankfurt ·
                    IBAN: DE00 0000 0000 0000 0000 00
                </footer>
            </article>
        `
    },


   
    {
        id: 4,
        name: "Dokument_04.pdf",
        type: "Dokument",
        icon: "📄",
        content: `
            <article class="business-document offer-document">
                <header class="offer-letterhead">
                    <div class="offer-brand">
                        <span class="offer-brand-mark">R</span>
                        <div>
                            <strong>RaumForm</strong>
                            <small>Büroeinrichtung GmbH</small>
                        </div>
                    </div>
                    <div class="offer-company-address">
                        Lindenstraße 28<br>
                        60433 Frankfurt am Main
                    </div>
                </header>

                <div class="offer-address-row">
                    <div class="offer-recipient">
                        <span class="offer-label">An</span>
                        <strong>Nordwerk GmbH</strong>
                        Kastanienweg 14<br>
                        60325 Frankfurt am Main
                    </div>
                    <div class="offer-date">
                        Frankfurt am Main<br>
                        18. August 2026
                    </div>
                </div>


                <p class="offer-salutation">
                    Sehr geehrte Damen und Herren,
                </p>

                <p class="offer-intro">
                    vielen Dank für Ihre Anfrage. Gerne bieten wir Ihnen
                    die Lieferung und Montage ergonomischer Bürostühle
                    für Ihre Büroräume zu folgenden Konditionen an:
                </p>

                <table class="offer-table">
                    <thead>
                        <tr>
                            <th>Position / Leistung</th>
                            <th>Betrag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                15 ergonomische Bürostühle
                                <small>Inklusive Lieferung und Montage</small>
                            </td>
                            <td>4.275,00 €</td>
                        </tr>
                        <tr class="offer-total">
                            <td>Gesamtpreis</td>
                            <td>4.275,00 €</td>
                        </tr>
                    </tbody>
                </table>

                <section class="offer-conditions">
                    <h3>Lieferung und Gültigkeit</h3>
                    <p>
                        Die Lieferung erfolgt innerhalb von drei Wochen
                        nach Auftragserteilung. Dieses Angebot ist
                        30 Tage ab Ausstellungsdatum gültig.
                    </p>
                </section>

                <p class="offer-closing">
                    Wir freuen uns auf Ihre Rückmeldung und stehen
                    für Rückfragen gerne zur Verfügung.
                </p>

                <div class="offer-signature">
                    <span>Mit freundlichen Grüßen</span>
                    <strong>Julia Hartmann</strong>
                    <small>Vertrieb · RaumForm Büroeinrichtung GmbH</small>
                </div>

                <footer class="offer-footer">
                    RaumForm Büroeinrichtung GmbH · Frankfurt am Main<br>
                    kontakt@raumform-beispiel.de
                </footer>
            </article>
        `
    },


        
    {
        id: 5,
        name: "Dokument_05.docx",
        type: "Dokument",
        icon: "📄",
        content: `
            <article class="business-document meeting-document">
                <header class="meeting-letterhead">
                    <div>
                        <strong>NORDWERK GmbH</strong>
                        <small>IT-Services &amp; Bürokommunikation</small>
                    </div>
                    <div class="meeting-department">
                        Projektorganisation<br>
                        12. August 2026
                    </div>
                </header>

                <p class="meeting-subtitle">
                    Projekt: Modernisierung der internen IT-Arbeitsplätze
                </p>

                <div class="meeting-info">
                    <div class="meeting-info-grid">
                        <div>
                            <span class="meeting-label">Datum</span>
                            <strong>12.08.2026</strong>
                        </div>
                        <div>
                            <span class="meeting-label">Ort</span>
                            <strong>Besprechungsraum 2</strong>
                        </div>
                    </div>
                    <div class="meeting-participants">
                        <span class="meeting-label">Teilnehmende</span>
                        <strong>Anna Schmidt, Thomas Weber, Lisa Becker</strong>
                    </div>
                </div>

                <section class="meeting-section">
                    <h3>1. Aktueller Projektstand</h3>
                    <p>
                        Die Vorbereitung zur Erneuerung der IT-Arbeitsplätze
                        verläuft planmäßig. Die benötigte Hardware wurde
                        zusammengestellt und die nächsten Umsetzungsschritte
                        wurden besprochen.
                    </p>
                </section>

                <section class="meeting-section">
                    <h3>2. Vereinbarte Maßnahmen</h3>
                    <p>
                        Thomas Weber prüft die vorhandene Netzwerkinfrastruktur.
                        Anna Schmidt koordiniert die Abstimmung mit den
                        beteiligten Abteilungen. Lisa Becker aktualisiert
                        die Projektübersicht.
                    </p>
                </section>

                <section class="meeting-section">
                    <h3>3. Nächste Schritte</h3>
                    <p>
                        Die offenen Aufgaben werden bis zur nächsten
                        Besprechung bearbeitet. Anschließend wird der
                        Zeitplan für die Umsetzung abgestimmt.
                    </p>
                </section>

                <div class="meeting-next-date">
                    <span class="meeting-label">
                        Nächster Besprechungstermin
                    </span>
                    <strong>26. August 2026, 10:00 Uhr</strong>
                </div>

                <footer class="meeting-footer">
                    Erstellt von: Lisa Becker · Nordwerk GmbH
                </footer>
            </article>
        `
    },


    
    {
        id: 6,
        name: "Dokument_06.docx",
        type: "Dokument",
        icon: "📄",
        content: `
            <article class="business-document leave-document">
                <header class="leave-letterhead">
                    <div>
                        <strong>NORDWERK GmbH</strong>
                        <small>Personalverwaltung</small>
                    </div>
                    <div class="leave-header-info">
                        Internes Formular<br>
                        14. September 2026
                    </div>
                </header>

                <p class="leave-recipient">
                    An die Personalabteilung der Nordwerk GmbH
                </p>

                <section class="leave-section">
                    <h3>Angaben zur Person</h3>
                    <div class="leave-person-grid">
                        <div class="leave-field">
                            <span class="leave-label">Name</span>
                            <span class="leave-field-value">Anna Schmidt</span>
                        </div>
                        <div class="leave-field">
                            <span class="leave-label">Abteilung</span>
                            <span class="leave-field-value">
                                Projektorganisation
                            </span>
                        </div>
                    </div>
                </section>

                <section class="leave-section">
                    <h3>Beantragter Urlaub</h3>

                    <div class="leave-period">
                        <div class="leave-period-grid">
                            <div>
                                <span class="leave-label">Urlaubsbeginn</span>
                                <strong>05.10.2026</strong>
                            </div>
                            <div>
                                <span class="leave-label">Urlaubsende</span>
                                <strong>09.10.2026</strong>
                            </div>
                        </div>

                        <div class="leave-days">
                            <span>Anzahl der Urlaubstage</span>
                            <strong>5</strong>
                        </div>
                    </div>
                </section>

                <p class="leave-request">
                    Hiermit beantrage ich Urlaub für den oben angegebenen
                    Zeitraum und bitte um entsprechende Genehmigung.
                </p>

                <div class="leave-signatures">
                    <div>
                        <span class="leave-signature-line"></span>
                        <small>Datum / Unterschrift Mitarbeitende</small>
                    </div>
                    <div>
                        <span class="leave-signature-line"></span>
                        <small>Genehmigung durch Vorgesetzte</small>
                    </div>
                </div>

                <div class="leave-approval">
                    <span class="leave-checkbox"></span>
                    <span>Genehmigt</span>

                    <span class="leave-checkbox"></span>
                    <span>Nicht genehmigt</span>
                </div>

                <footer class="leave-footer">
                    Dieses Formular ist zur internen Bearbeitung bestimmt.
                </footer>
            </article>
        `
    },


    
    {
        id: 7,
        name: "Dokument_07.xlsx",
        type: "Dokument",
        icon: "📊",
        content: `
            <article class="business-document hardware-document">
                <header class="hardware-header">
                    <div>
                        <strong>NORDWERK GmbH</strong>
                        <small>Interne Beschaffung · IT-Abteilung</small>
                    </div>
                    <span class="hardware-file-icon">X</span>
                </header>

                <div class="hardware-info-grid">
                    <div>
                        <span class="hardware-label">Bestellnummer</span>
                        <strong>HW-2026-0821</strong>
                    </div>
                    <div>
                        <span class="hardware-label">Datum</span>
                        <strong>21.08.2026</strong>
                    </div>
                    <div>
                        <span class="hardware-label">Abteilung</span>
                        <strong>IT / Beschaffung</strong>
                    </div>
                    <div>
                        <span class="hardware-label">Bearbeitung</span>
                        <strong>Thomas Weber</strong>
                    </div>
                </div>

                <table class="hardware-table">
                    <thead>
                        <tr>
                            <th>Artikel</th>
                            <th>Menge</th>
                            <th>Gesamt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Business Notebook</td>
                            <td>5</td>
                            <td>5.250,00 €</td>
                        </tr>
                        <tr>
                            <td>USB-C Dockingstation</td>
                            <td>5</td>
                            <td>890,00 €</td>
                        </tr>
                        <tr>
                            <td>Monitor 27 Zoll</td>
                            <td>10</td>
                            <td>1.750,00 €</td>
                        </tr>
                        <tr class="hardware-total">
                            <td colspan="2">Bestellwert gesamt</td>
                            <td>7.890,00 €</td>
                        </tr>
                    </tbody>
                </table>

                <section class="hardware-purpose">
                    <span class="hardware-label">Verwendungszweck</span>
                    <p>
                        Erweiterung und Modernisierung der IT-Arbeitsplätze
                        am Standort Frankfurt am Main.
                    </p>
                </section>

                <footer class="hardware-footer">
                    <span>Status: Zur Bestellung vorgesehen</span>
                    <span>Nordwerk · Einkauf</span>
                </footer>
            </article>
        `
    },


        
    {
        id: 8,
        name: "Dokument_08.pdf",
        type: "Dokument",
        icon: "📕",
        content: `
            <article class="business-document software-offer-document">
                <header class="software-offer-header">
                    <div class="software-offer-brand">
                        <div class="software-offer-logo">S</div>
                        <div>
                            <strong>Softline Systems</strong>
                            <small>Softwarelösungen für Unternehmen</small>
                        </div>
                    </div>
                    <div class="software-offer-address">
                        Technologiepark 6<br>
                        60486 Frankfurt am Main
                    </div>
                </header>

                <div class="software-offer-meta">
                    <div>
                        <span class="software-offer-label">Angebot für</span>
                        <strong>Nordwerk GmbH</strong>
                        <span>Kastanienweg 14</span>
                        <span>60325 Frankfurt am Main</span>
                    </div>
                    <div class="software-offer-date">
                        Frankfurt am Main<br>
                        24. August 2026
                    </div>
                </div>

            

                <p>Sehr geehrte Damen und Herren,</p>

                <p>
                    für die Ausstattung Ihrer Arbeitsplätze bieten wir
                    Ihnen folgende Bürosoftware-Lizenzen an:
                </p>

                <table class="software-offer-table">
                    <thead>
                        <tr>
                            <th>Lizenzpaket</th>
                            <th>Gesamt</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>OfficeSuite Business</strong>
                                <span>25 Nutzerlizenzen · 12 Monate</span>
                                <span>Einzelpreis: 89,00 €</span>
                            </td>
                            <td>2.225,00 €</td>
                        </tr>
                        <tr class="software-offer-total">
                            <td>Gesamtpreis</td>
                            <td>2.225,00 €</td>
                        </tr>
                    </tbody>
                </table>

                <section class="software-offer-section">
                    <h3>Lizenzbedingungen</h3>
                    <p>
                        Die Lizenzen gelten für zwölf Monate ab Aktivierung.
                        Die Bereitstellung erfolgt digital nach
                        Auftragserteilung.
                    </p>
                </section>

                <section class="software-offer-section">
                    <h3>Gültigkeit des Angebots</h3>
                    <p>
                        Dieses Angebot ist bis zum
                        23. September 2026 gültig.
                    </p>
                </section>

                <p>
                    Bei Rückfragen stehen wir Ihnen gerne zur Verfügung.
                </p>

                <div class="software-offer-signature">
                    <span>Mit freundlichen Grüßen</span>
                    <strong>Markus Richter</strong>
                    <small>Vertrieb · Softline Systems GmbH</small>
                </div>

                <footer class="software-offer-footer">
                    Softline Systems GmbH · Frankfurt am Main<br>
                    vertrieb@softline-beispiel.de
                </footer>
            </article>
        `
    },


    
    {
        id: 9,
        name: "Dokument_09.pdf",
        type: "Dokument",
        icon: "📕",
        content: `
            <article class="business-document hardware-invoice-document">
                <header class="hardware-invoice-header">
                    <div>
                        <strong>NORDWERK GmbH</strong>
                        <small>IT-Services &amp; Bürokommunikation</small>
                        <span>Kastanienweg 14 · 60325 Frankfurt am Main</span>
                    </div>
                    <div class="hardware-invoice-symbol">R</div>
                </header>

                <div class="hardware-invoice-meta">
                    <div>
                        <span class="hardware-invoice-label">
                            Rechnungsempfänger
                        </span>
                        <strong>Bergmann Consulting GmbH</strong>
                        <span>Frankfurt am Main</span>
                    </div>
                    <div class="hardware-invoice-meta-right">
                        <span class="hardware-invoice-label">
                            Rechnungsnummer
                        </span>
                        <strong>RE-2026-084</strong>
                        <span>28. August 2026</span>
                    </div>
                </div>

                <p class="hardware-invoice-intro">
                    Für die Lieferung der folgenden Hardwarekomponenten
                    berechnen wir Ihnen:
                </p>

                <table class="hardware-invoice-table">
                    <thead>
                        <tr>
                            <th>Artikel</th>
                            <th>Menge</th>
                            <th>Betrag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Business Notebook</td>
                            <td>5</td>
                            <td>5.250,00 €</td>
                        </tr>
                        <tr>
                            <td>USB-C Dockingstation</td>
                            <td>5</td>
                            <td>890,00 €</td>
                        </tr>
                        <tr>
                            <td>Monitor 27 Zoll</td>
                            <td>10</td>
                            <td>1.750,00 €</td>
                        </tr>
                    </tbody>
                </table>

                <div class="hardware-invoice-calculation">
                    <div>
                        <span>Nettobetrag</span>
                        <span>7.890,00 €</span>
                    </div>
                    <div>
                        <span>Umsatzsteuer (19 %)</span>
                        <span>1.499,10 €</span>
                    </div>
                    <div class="hardware-invoice-total">
                        <strong>Rechnungsbetrag</strong>
                        <strong>9.389,10 €</strong>
                    </div>
                </div>

                <section class="hardware-invoice-section">
                    <h3>Zahlungsbedingungen</h3>
                    <p>
                        Bitte überweisen Sie den Rechnungsbetrag innerhalb
                        von 14 Tagen unter Angabe der Rechnungsnummer.
                    </p>
                </section>

                <section class="hardware-invoice-section">
                    <h3>Lieferreferenz</h3>
                    <p>Hardwarelieferung August 2026</p>
                </section>

                <footer class="hardware-invoice-footer">
                    Nordwerk GmbH · Frankfurt am Main<br>
                    Bankverbindung und weitere Unternehmensangaben
                    gemäß Rechnungsstammdaten
                </footer>
            </article>
        `
    },

    
    {
        id: 10,
        name: "Dokument_10.pdf",
        type: "Dokument",
        icon: "📕",
        content: `
            <article class="business-document service-invoice-document">
                <header class="service-invoice-header">
                    <div>
                        <strong>NORDWERK GmbH</strong>
                        <small>IT-Services &amp; Bürokommunikation</small>
                        <span>
                            Kastanienweg 14 · 60325 Frankfurt am Main
                        </span>
                    </div>
                    <div class="service-invoice-symbol">IT</div>
                </header>

                <div class="service-invoice-meta">
                    <div>
                        <span class="service-invoice-label">
                            Rechnung an
                        </span>
                        <strong>Hoffmann &amp; Partner GmbH</strong>
                        <span>Frankfurt am Main</span>
                    </div>

                    <div class="service-invoice-meta-right">
                        <span class="service-invoice-label">
                            Rechnungsnummer
                        </span>
                        <strong>RE-2026-091</strong>
                        <span>02. September 2026</span>
                    </div>
                </div>

            

                <p class="service-invoice-intro">
                    Für die im August 2026 erbrachten IT-Dienstleistungen
                    stellen wir Ihnen folgende Leistungen in Rechnung:
                </p>

                <table class="service-invoice-table">
                    <thead>
                        <tr>
                            <th>Leistung</th>
                            <th>Std.</th>
                            <th>Betrag</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>IT-Systemwartung</td>
                            <td>6</td>
                            <td>540,00 €</td>
                        </tr>
                        <tr>
                            <td>Softwareinstallation</td>
                            <td>4</td>
                            <td>360,00 €</td>
                        </tr>
                        <tr>
                            <td>Technischer Support</td>
                            <td>3</td>
                            <td>270,00 €</td>
                        </tr>
                    </tbody>
                </table>

                <div class="service-invoice-calculation">
                    <div>
                        <span>Nettobetrag</span>
                        <span>1.170,00 €</span>
                    </div>
                    <div>
                        <span>Umsatzsteuer (19 %)</span>
                        <span>222,30 €</span>
                    </div>
                    <div class="service-invoice-total">
                        <strong>Rechnungsbetrag</strong>
                        <strong>1.392,30 €</strong>
                    </div>
                </div>

                <section class="service-invoice-section">
                    <h3>Leistungszeitraum</h3>
                    <p>01.08.2026 bis 31.08.2026</p>
                </section>

                <section class="service-invoice-section">
                    <h3>Zahlungsbedingungen</h3>
                    <p>
                        Zahlbar innerhalb von 14 Tagen ohne Abzug
                        unter Angabe der Rechnungsnummer.
                    </p>
                </section>

                <footer class="service-invoice-footer">
                    Nordwerk GmbH · Frankfurt am Main<br>
                    Vielen Dank für die Zusammenarbeit.
                </footer>
            </article>
        `
    },


];


// =========================
// Geöffnete Dokumente
// =========================

const openedDocuments = new Set();
const completedDocuments = new Set();

const assignments = {};

let currentDocument = null;

// =========================
// Timer
// =========================

// Gesamtdauer des Countdowns in Sekunden.
// Diesen Wert können wir später nach dem Pretest leicht ändern.
const EXPERIMENT_DURATION = 180;

let remainingTime = EXPERIMENT_DURATION;
let elapsedTime = 0;
let timerInterval = null;

// =========================
// Warnungs-Trigger
// =========================

// Nach wie vielen Sekunden darf die Warnung frühestens erscheinen?
const WARNING_MIN_TIME = 5;

// Wie viele Dokumente müssen vorher bearbeitet worden sein?
const WARNING_MIN_DOCUMENTS = 2;

// Wurde die Warnung bereits angezeigt?
let warningShown = false;

// =========================
// Experimentalgruppen
// 2 × 2 Design:
// Consequence Emphasis (ohne / mit)
// Task-Specific Contextualization (allgemein / aufgabenspezifisch)
// =========================

const experimentalGroups = {

    // A: ohne CE + allgemein
    A: {
        consequenceEmphasis: false,
        taskSpecificContext: false,
        text: `
            Das Fortfahren kann ein Sicherheitsrisiko darstellen.
            Möchten Sie fortfahren?
        `
    },

    // B: mit CE + allgemein
    B: {
        consequenceEmphasis: true,
        taskSpecificContext: false,
        text: `
            Das Fortfahren kann ein Sicherheitsrisiko darstellen.
            Wenn Sie fortfahren, könnten Ihre Daten gefährdet werden.
            Möchten Sie fortfahren?
        `
    },

    // C: ohne CE + aufgabenspezifisch
    C: {
        consequenceEmphasis: false,
        taskSpecificContext: true,
        text: `
            Das Öffnen dieses Dokuments kann ein Sicherheitsrisiko darstellen.
            Möchten Sie fortfahren?
        `
    },

    // D: mit CE + aufgabenspezifisch
    D: {
        consequenceEmphasis: true,
        taskSpecificContext: true,
        text: `
            Das Öffnen dieses Dokuments kann ein Sicherheitsrisiko darstellen.
            Wenn Sie fortfahren, könnten Ihre Daten gefährdet werden.
            Möchten Sie fortfahren?
        `
    }

};

let assignedGroup = null;

// =========================
// Sitzungs-ID und Versuchsdaten
// =========================

let sessionId = null;

let warningStartTime = null;

let experimentData = {
    sessionId: null,
    group: null,

    consequenceEmphasis: null,
    taskSpecificContext: null,

    warningTime: null,
    documentsAtWarning: null,

    decision: null,
    warningReactionTime: null
};

function createSessionId() {

    if (
        window.crypto &&
        typeof window.crypto.randomUUID === "function"
    ) {

        return window.crypto.randomUUID();

    }

    return (
        Date.now().toString(36) +
        "-" +
        Math.random().toString(36).substring(2, 10)
    );
}

function assignExperimentalGroup() {

    const groupNames = Object.keys(experimentalGroups);

    const randomIndex =
        Math.floor(Math.random() * groupNames.length);

    assignedGroup =
        groupNames[randomIndex];

    console.log(
        "Experimentalgruppe:",
        assignedGroup,
        experimentalGroups[assignedGroup]
    );
}

// =========================
// Experiment starten
// =========================

startButton.addEventListener("click", startExperiment);
folderAssignmentInputs.forEach(input => {

    input.addEventListener("change", () => {

        assignDocumentButton.disabled = false;

    });

});


function startExperiment() {

    // Anonyme Sitzungs-ID erzeugen
    sessionId = createSessionId();

    // Experimentalgruppe bestimmen
    assignExperimentalGroup();

    // Grunddaten speichern
    experimentData.sessionId = sessionId;
    experimentData.group = assignedGroup;

    experimentData.consequenceEmphasis =
        experimentalGroups[assignedGroup].consequenceEmphasis;

    experimentData.taskSpecificContext =
        experimentalGroups[assignedGroup].taskSpecificContext;

    // Oberfläche wechseln
    startScreen.classList.add("hidden");

    experimentScreen.classList.remove("hidden");

    // Dokumente anzeigen
    renderDocuments();

    // Timer starten
    startTimer();

    console.log(
        "Experiment gestartet",
        experimentData
    );
}


// =========================
// Dokumente anzeigen
// =========================

function renderDocuments() {

    documentList.innerHTML = "";

    documents.forEach(doc => {

        const documentElement = document.createElement("div");

        documentElement.classList.add("document");
        if (completedDocuments.has(doc.id)) {
            documentElement.classList.add("completed");
        }

        documentElement.innerHTML = `
            <div class="document-icon">
                ${doc.icon}
            </div>

            <div class="document-name">
                ${doc.name}
            </div>

            <div class="document-type">
                ${doc.type}
            </div>
        `;

        documentElement.addEventListener("click", () => {
            openDocument(doc);
        });

        documentList.appendChild(documentElement);

    });
}


// =========================
// Dokument öffnen
// =========================

function openDocument(doc) {

    // Prüfen, ob die Warnung beim Öffnen dieses Dokuments
    // ausgelöst werden soll
    const enoughTimePassed =
        elapsedTime >= WARNING_MIN_TIME;

    const enoughDocumentsCompleted =
        completedDocuments.size >= WARNING_MIN_DOCUMENTS;

    if (
        !warningShown &&
        enoughTimePassed &&
        enoughDocumentsCompleted
    ) {
        // Merken, welches Dokument geöffnet werden sollte
        currentDocument = doc;

        // Warnung anzeigen, bevor das Dokument geöffnet wird
        showSecurityWarning();

        return;
    }

    // Dokument regulär öffnen
    currentDocument = doc;

    openedDocuments.add(doc.id);

    modalDocumentContent.innerHTML = doc.content;

    // Alte Auswahl zurücksetzen
    folderAssignmentInputs.forEach(input => {
        input.checked = false;
    });

    assignDocumentButton.disabled = true;

    // Modal anzeigen
    documentModal.classList.remove("hidden");

    console.log("Dokument geöffnet:", doc.name);
}


// =========================
// Dokument schließen
// =========================

closeDocumentButton.addEventListener("click", closeDocument);


function closeDocument() {

    documentModal.classList.add("hidden");

}

assignDocumentButton.addEventListener(
    "click",
    assignCurrentDocument
);


function assignCurrentDocument() {

    if (!currentDocument) {
        return;
    }

    const selectedFolder =
        document.querySelector(
            'input[name="folder-assignment"]:checked'
        );

    if (!selectedFolder) {
        return;
    }

    // Auswahl speichern
    assignments[currentDocument.id] =
        selectedFolder.value;

    // Dokument als bearbeitet markieren
    completedDocuments.add(currentDocument.id);

    // Anzeige aktualisieren
    documentCount.textContent =
        completedDocuments.size;

    console.log(
        "Dokument zugeordnet:",
        currentDocument.name,
        "→",
        selectedFolder.value
    );

    // Modal schließen
    documentModal.classList.add("hidden");

    renderDocuments();

    currentDocument = null;
}

function startTimer() {

    // Falls bereits ein Timer läuft, zuerst stoppen.
    if (timerInterval !== null) {
        clearInterval(timerInterval);
    }

    remainingTime = EXPERIMENT_DURATION;
    elapsedTime = 0;

    updateTimerDisplay();

    timerInterval = setInterval(() => {

        remainingTime--;
        elapsedTime++;

        updateTimerDisplay();

        // Countdown bei 00:00 stoppen
        if (remainingTime <= 0) {

            remainingTime = 0;

            updateTimerDisplay();

            clearInterval(timerInterval);
            timerInterval = null;

            console.log("Zeit abgelaufen.");
        }

    }, 1000);
}

function updateTimerDisplay() {

    const minutes =
        Math.floor(remainingTime / 60);

    const seconds =
        remainingTime % 60;

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(seconds).padStart(2, "0");

    timerDisplay.textContent =
        `${formattedMinutes}:${formattedSeconds}`;
}


function showSecurityWarning() {

    warningShown = true;

    const groupData =
        experimentalGroups[assignedGroup];


    // Zeitpunkt der Warnung speichern
    experimentData.warningTime =
        elapsedTime;


    // Anzahl bearbeiteter Dokumente speichern
    experimentData.documentsAtWarning =
        completedDocuments.size;


    // Startpunkt für Reaktionszeit
    warningStartTime =
        performance.now();


    // Passenden Warnungstext einsetzen
    securityWarningText.innerHTML =
        groupData.text;


    // Warnung anzeigen
    securityModal.classList.remove("hidden");


    console.log(
        "Sicherheitswarnung angezeigt",
        {
            group: assignedGroup,
            warningTime:
                experimentData.warningTime,
            documentsAtWarning:
                experimentData.documentsAtWarning
        }
    );
}

securityAbortButton.addEventListener(
    "click",
    () => handleSecurityDecision("abort")
);


securityContinueButton.addEventListener(
    "click",
    () => handleSecurityDecision("continue")
);

// =========================
// Weiterleitung zu Qualtrics
// =========================

function redirectToQualtrics() {

    const qualtricsBaseUrl =
        "https://qualtricsxmwjcrgz543.qualtrics.com/jfe/form/SV_bfIX0Nqd8GYPrEy";

    const params = new URLSearchParams({
        experimentSessionId: experimentData.sessionId,
        group: experimentData.group,
        consequenceEmphasis: experimentData.consequenceEmphasis,
        taskSpecificContext: experimentData.taskSpecificContext,
        warningTime: experimentData.warningTime,
        documentsAtWarning: experimentData.documentsAtWarning,
        decision: experimentData.decision,
        warningReactionTime: experimentData.warningReactionTime
    });

    const qualtricsUrl =
        qualtricsBaseUrl + "?" + params.toString();

    console.log(
        "Weiterleitung zu Qualtrics:",
        qualtricsUrl
    );

    window.location.href = qualtricsUrl;
}

function handleSecurityDecision(decision) {

    // Zeitpunkt des Klicks erfassen
    const decisionTime =
        performance.now();

    // Reaktionszeit berechnen
    const reactionTime =
        (decisionTime - warningStartTime) / 1000;

    // Entscheidung speichern
    experimentData.decision =
        decision;

    // Reaktionszeit auf drei Nachkommastellen speichern
    experimentData.warningReactionTime =
        Number(reactionTime.toFixed(3));

    console.log(
        "Experimentdaten vollständig:",
        experimentData
    );

    // Sicherheitswarnung ausblenden
    securityModal.classList.add("hidden");

    // Weiterleitung zu Qualtrics
    redirectToQualtrics();
}