<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl_NL">
<context>
    <name>DownloadExtractThread</name>
    <message>
        <location filename="../downloadextractthread.cpp" line="196"/>
        <location filename="../downloadextractthread.cpp" line="385"/>
        <source>Error extracting archive: %1</source>
        <translation>Fout bij uitpakken archiefbestand: %1</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="261"/>
        <source>Error mounting FAT32 partition</source>
        <translation>Fout bij mounten FAT32 partitie</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="281"/>
        <source>Operating system did not mount FAT32 partition</source>
        <translation>Besturingssysteem heeft FAT32 partitie niet gemount</translation>
    </message>
    <message>
        <location filename="../downloadextractthread.cpp" line="304"/>
        <source>Error changing to directory &apos;%1&apos;</source>
        <translation>Fout bij openen map &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Error writing to storage</source>
        <translation type="vanished">Fout bij schrijven naar opslag</translation>
    </message>
</context>
<context>
    <name>DownloadThread</name>
    <message>
        <location filename="../downloadthread.cpp" line="118"/>
        <source>unmounting drive</source>
        <translation>unmounten van schijf</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="138"/>
        <source>opening drive</source>
        <translation>openen van opslag</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="166"/>
        <source>Error running diskpart: %1</source>
        <translation>Fout bij uitvoeren diskpart: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="187"/>
        <source>Error removing existing partitions</source>
        <translation>Fout bij verwijderen bestaande partities</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="213"/>
        <source>Authentication cancelled</source>
        <translation>Authenticatie geannuleerd</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="216"/>
        <source>Error running authopen to gain access to disk device &apos;%1&apos;</source>
        <translation>Fout bij uitvoeren authopen: &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="217"/>
        <source>Please verify if &apos;Raspberry Pi Imager&apos; is allowed access to &apos;removable volumes&apos; in privacy settings (under &apos;files and folders&apos; or alternatively give it &apos;full disk access&apos;).</source>
        <translation>Gelieve te controlleren of &apos;Raspberry Pi Imager&apos; toegang heeft tot &apos;verwijderbare volumes&apos; in de privacy instellingen (onder &apos;bestanden en mappen&apos; of anders via &apos;volledige schijftoegang&apos;).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="239"/>
        <source>Cannot open storage device &apos;%1&apos;.</source>
        <translation>Fout bij openen opslagapparaat &apos;%1&apos;.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="281"/>
        <source>discarding existing data on drive</source>
        <translation>wissen bestaande gegevens</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="301"/>
        <source>zeroing out first and last MB of drive</source>
        <translation>wissen eerste en laatste MB van opslag</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="307"/>
        <source>Write error while zero&apos;ing out MBR</source>
        <translation>Fout bij wissen MBR</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="319"/>
        <source>Write error while trying to zero out last part of card.&lt;br&gt;Card could be advertising wrong capacity (possible counterfeit).</source>
        <translation>Fout bij wissen laatste deel van de SD kaart.&lt;br&gt;Kaart geeft mogelijk onjuiste capaciteit aan (mogelijk counterfeit).</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="408"/>
        <source>starting download</source>
        <translation>beginnen met downloaden</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="466"/>
        <source>Error downloading: %1</source>
        <translation>Fout bij downloaden: %1</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="663"/>
        <source>Access denied error while writing file to disk.</source>
        <translation>Toegang geweigerd bij het schrijven naar opslag.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="668"/>
        <source>Controlled Folder Access seems to be enabled. Please add both rpi-imager.exe and fat32format.exe to the list of allowed apps and try again.</source>
        <translation>Controller Folder Access lijkt aan te staan. Gelieve zowel rpi-imager.exe als fat32format.exe toe te voegen aan de lijst met uitsluitingen en het nogmaals te proberen.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="675"/>
        <source>Error writing file to disk</source>
        <translation>Fout bij schrijven naar opslag</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="697"/>
        <source>Download corrupt. Hash does not match</source>
        <translation>Download corrupt. Hash komt niet overeen</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="709"/>
        <location filename="../downloadthread.cpp" line="761"/>
        <source>Error writing to storage (while flushing)</source>
        <translation>Fout bij schrijven naar opslag (tijdens flushen)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="716"/>
        <location filename="../downloadthread.cpp" line="768"/>
        <source>Error writing to storage (while fsync)</source>
        <translation>Fout bij schrijven naar opslag (tijdens fsync)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="751"/>
        <source>Error writing first block (partition table)</source>
        <translation>Fout bij schrijven naar eerste deel van kaart (partitie tabel)</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="826"/>
        <source>Error reading from storage.&lt;br&gt;SD card may be broken.</source>
        <translation>Fout bij lezen van SD kaart.&lt;br&gt;Kaart is mogelijk defect.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="845"/>
        <source>Verifying write failed. Contents of SD card is different from what was written to it.</source>
        <translation>Verificatie mislukt. De gegevens die op de SD kaart staan wijken af van wat er naar geschreven is.</translation>
    </message>
    <message>
        <location filename="../downloadthread.cpp" line="898"/>
        <source>Customizing image</source>
        <translation>Bezig met aanpassen besturingssysteem</translation>
    </message>
    <message>
        <source>Waiting for FAT partition to be mounted</source>
        <translation type="vanished">Wachten op mounten FAT partitie</translation>
    </message>
    <message>
        <source>Error mounting FAT32 partition</source>
        <translation type="vanished">Fout bij mounten FAT32 partitie</translation>
    </message>
    <message>
        <source>Operating system did not mount FAT32 partition</source>
        <translation type="vanished">Besturingssysteem heeft FAT32 partitie niet gemount</translation>
    </message>
    <message>
        <source>Unable to customize. File &apos;%1&apos; does not exist.</source>
        <translation type="vanished">Fout bij aanpassen besturingssysteem. Bestand &apos;%1&apos; bestaat niet.</translation>
    </message>
    <message>
        <source>Error creating firstrun.sh on FAT partition</source>
        <translation type="vanished">Fout bij het aanmaken van firstrun.sh op FAT partitie</translation>
    </message>
    <message>
        <source>Error writing to config.txt on FAT partition</source>
        <translation type="vanished">Fout bij schrijven naar config.txt op FAT partitie</translation>
    </message>
    <message>
        <source>Error creating user-data cloudinit file on FAT partition</source>
        <translation type="vanished">Fout bij aanmaken user-data cloudinit bestand op FAT partitie</translation>
    </message>
    <message>
        <source>Error creating network-config cloudinit file on FAT partition</source>
        <translation type="vanished">Fout bij aanmaken network-config cloudinit bestand op FAT paritie</translation>
    </message>
    <message>
        <source>Error writing to cmdline.txt on FAT partition</source>
        <translation type="vanished">Fout bij schrijven cmdline.txt op FAT partitie</translation>
    </message>
</context>
<context>
    <name>DriveFormatThread</name>
    <message>
        <location filename="../driveformatthread.cpp" line="63"/>
        <location filename="../driveformatthread.cpp" line="124"/>
        <location filename="../driveformatthread.cpp" line="185"/>
        <source>Error partitioning: %1</source>
        <translation>Fout bij partitioneren: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="84"/>
        <source>Error starting fat32format</source>
        <translation>Fout bij starten fat32format</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="94"/>
        <source>Error running fat32format: %1</source>
        <translation>Fout bij uitvoeren fat32format: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="104"/>
        <source>Error determining new drive letter</source>
        <translation>Fout bij vaststellen nieuwe letter van schijfstation</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="109"/>
        <source>Invalid device: %1</source>
        <translation>Ongeldig device: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="146"/>
        <source>Error formatting (through udisks2)</source>
        <translation>Fout bij formatteren (via udisks2)</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="174"/>
        <source>Error starting sfdisk</source>
        <translation>Fout bij starten sfdisk</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="199"/>
        <source>Partitioning did not create expected FAT partition %1</source>
        <translation>Partitionering heeft geen FAT partitie %1 aangemaakt</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="208"/>
        <source>Error starting mkfs.fat</source>
        <translation>Fout bij starten mkfs.fat</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="218"/>
        <source>Error running mkfs.fat: %1</source>
        <translation>Fout bij uitvoeren mkfs.fat: %1</translation>
    </message>
    <message>
        <location filename="../driveformatthread.cpp" line="225"/>
        <source>Formatting not implemented for this platform</source>
        <translation>Formatteren is niet geimplementeerd op dit besturingssysteem</translation>
    </message>
</context>
<context>
    <name>ImageWriter</name>
    <message>
        <location filename="../imagewriter.cpp" line="248"/>
        <source>Storage capacity is not large enough.&lt;br&gt;Needs to be at least %1 GB.</source>
        <translation>Opslagcapaciteit niet groot genoeg.&lt;br&gt;Deze dient minimaal %1 GB te zijn.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="254"/>
        <source>Input file is not a valid disk image.&lt;br&gt;File size %1 bytes is not a multiple of 512 bytes.</source>
        <translation>Invoerbestand is geen disk image.&lt;br&gt;Bestandsgrootte %1 bytes is geen veelvoud van 512 bytes.</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="442"/>
        <source>Downloading and writing image</source>
        <translation>Downloaden en schrijven van image</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="575"/>
        <source>Select image</source>
        <translation>Selecteer image</translation>
    </message>
    <message>
        <location filename="../imagewriter.cpp" line="896"/>
        <source>Would you like to prefill the wifi password from the system keychain?</source>
        <translation>Wilt u het wifi wachtwoord van het systeem overnemen?</translation>
    </message>
</context>
<context>
    <name>LocalFileExtractThread</name>
    <message>
        <location filename="../localfileextractthread.cpp" line="34"/>
        <source>opening image file</source>
        <translation>openen image</translation>
    </message>
    <message>
        <location filename="../localfileextractthread.cpp" line="39"/>
        <source>Error opening image file</source>
        <translation>Fout bij openen image bestand</translation>
    </message>
</context>
<context>
    <name>MsgPopup</name>
    <message>
        <location filename="../MsgPopup.qml" line="98"/>
        <source>NO</source>
        <translation>Nee</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="109"/>
        <source>YES</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="120"/>
        <source>CONTINUE</source>
        <translation>VERDER GAAN</translation>
    </message>
    <message>
        <location filename="../MsgPopup.qml" line="130"/>
        <source>QUIT</source>
        <translation>AFSLUITEN</translation>
    </message>
</context>
<context>
    <name>OptionsPopup</name>
    <message>
        <location filename="../OptionsPopup.qml" line="20"/>
        <source>Advanced options</source>
        <translation>Geavanceerde instellingen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="52"/>
        <source>Image customization options</source>
        <translation>Image instellingen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="57"/>
        <source>for this session only</source>
        <translation>alleen voor deze sessie</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="58"/>
        <source>to always use</source>
        <translation>om altijd te gebruiken</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="71"/>
        <source>General</source>
        <translation>Algemeen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="79"/>
        <source>Services</source>
        <translation>Services</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="82"/>
        <source>Options</source>
        <translation>Opties</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="98"/>
        <source>Set hostname:</source>
        <translation>Hostnaam:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="120"/>
        <source>Set username and password</source>
        <translation>Gebruikersnaam en wachtwoord instellen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="142"/>
        <source>Username:</source>
        <translation>Gebruikersnaam:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="158"/>
        <location filename="../OptionsPopup.qml" line="219"/>
        <source>Password:</source>
        <translation>Wachtwoord:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="186"/>
        <source>Configure wireless LAN</source>
        <translation>Wifi instellen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="205"/>
        <source>SSID:</source>
        <translation>SSID:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="238"/>
        <source>Show password</source>
        <translation>Wachtwoord laten zien</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="244"/>
        <source>Hidden SSID</source>
        <translation>Verborgen SSID</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="250"/>
        <source>Wireless LAN country:</source>
        <translation>Wifi land:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="261"/>
        <source>Set locale settings</source>
        <translation>Regio instellingen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="271"/>
        <source>Time zone:</source>
        <translation>Tijdzone:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="281"/>
        <source>Keyboard layout:</source>
        <translation>Toetsenbord indeling:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="298"/>
        <source>Enable SSH</source>
        <translation>SSH inschakelen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="317"/>
        <source>Use password authentication</source>
        <translation>Gebruik wachtwoord authenticatie</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="327"/>
        <source>Allow public-key authentication only</source>
        <translation>Gebruik uitsluitend public-key authenticatie</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="345"/>
        <source>Set authorized_keys for &apos;%1&apos;:</source>
        <translation>authorized_keys voor &apos;%1&apos;:</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="357"/>
        <source>RUN SSH-KEYGEN</source>
        <translation>START SSH-KEYGEN</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="375"/>
        <source>Play sound when finished</source>
        <translation>Geluid afspelen zodra voltooid</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="379"/>
        <source>Eject media when finished</source>
        <translation>Media uitwerpen zodra voltooid</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="383"/>
        <source>Enable telemetry</source>
        <translation>Telemetry inschakelen</translation>
    </message>
    <message>
        <location filename="../OptionsPopup.qml" line="397"/>
        <source>SAVE</source>
        <translation>OPSLAAN</translation>
    </message>
    <message>
        <source>Disable overscan</source>
        <translation type="vanished">Overscan uitschakelen</translation>
    </message>
    <message>
        <source>Set username:</source>
        <translation type="vanished">Gebruikersnaam:</translation>
    </message>
    <message>
        <source>Set password for &apos;%1&apos; user:</source>
        <translation type="vanished">Wachtwoord voor &apos;%1&apos; gebruiker:</translation>
    </message>
    <message>
        <source>Skip first-run wizard</source>
        <translation type="vanished">Eerste gebruik wizard overslaan</translation>
    </message>
    <message>
        <source>Persistent settings</source>
        <translation type="vanished">Permanente instellingen</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../linux/linuxdrivelist.cpp" line="119"/>
        <source>Internal SD card reader</source>
        <translation>Interne SD kaart lezer</translation>
    </message>
</context>
<context>
    <name>UseSavedSettingsPopup</name>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="73"/>
        <source>Use image customisation?</source>
        <translation>Image aanpassen?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="87"/>
        <source>Would you like to apply image customization settings?</source>
        <translation>Wilt u uw eigen instellingen op de image toepassen?</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="97"/>
        <source>NO</source>
        <translation>Nee</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="107"/>
        <source>NO, CLEAR SETTINGS</source>
        <translation>Nee, wis instellingen</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="117"/>
        <source>YES</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="../UseSavedSettingsPopup.qml" line="127"/>
        <source>EDIT SETTINGS</source>
        <translation>Aanpassen</translation>
    </message>
</context>
<context>
    <name>main</name>
    <message>
        <location filename="../main.qml" line="22"/>
        <source>Raspberry Pi Imager v%1</source>
        <translation>Raspberry Pi Imager v%1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="114"/>
        <location filename="../main.qml" line="467"/>
        <source>Raspberry Pi Device</source>
        <translation>Raspberry Pi Model</translation>
    </message>
    <message>
        <location filename="../main.qml" line="126"/>
        <source>CHOOSE DEVICE</source>
        <translation>KIES MODEL</translation>
    </message>
    <message>
        <location filename="../main.qml" line="138"/>
        <source>Select this button to choose your target Raspberry Pi</source>
        <translation>Kies deze knop om het Raspberry Pi model te selecteren</translation>
    </message>
    <message>
        <location filename="../main.qml" line="97"/>
        <location filename="../main.qml" line="413"/>
        <source>Operating System</source>
        <translation>Besturingssysteem</translation>
    </message>
    <message>
        <location filename="../main.qml" line="109"/>
        <source>CHOOSE OS</source>
        <translation>KIES OS</translation>
    </message>
    <message>
        <location filename="../main.qml" line="121"/>
        <source>Select this button to change the operating system</source>
        <translation>Kies deze knop om een besturingssysteem te kiezen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="133"/>
        <location filename="../main.qml" line="780"/>
        <source>Storage</source>
        <translation>Opslagapparaat</translation>
    </message>
    <message>
        <location filename="../main.qml" line="145"/>
        <location filename="../main.qml" line="1108"/>
        <source>CHOOSE STORAGE</source>
        <translation>KIES OPSLAG</translation>
    </message>
    <message>
        <location filename="../main.qml" line="171"/>
        <source>WRITE</source>
        <translation>SCHRIJF</translation>
    </message>
    <message>
        <location filename="../main.qml" line="155"/>
        <source>Select this button to change the destination storage device</source>
        <translation>Klik op deze knop om het opslagapparaat te wijzigen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="216"/>
        <source>CANCEL WRITE</source>
        <translation>Annuleer schrijven</translation>
    </message>
    <message>
        <location filename="../main.qml" line="219"/>
        <location filename="../main.qml" line="1035"/>
        <source>Cancelling...</source>
        <translation>Annuleren...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="227"/>
        <source>CANCEL VERIFY</source>
        <translation>ANNULEER VERIFICATIE</translation>
    </message>
    <message>
        <location filename="../main.qml" line="230"/>
        <location filename="../main.qml" line="1058"/>
        <location filename="../main.qml" line="1127"/>
        <source>Finalizing...</source>
        <translation>Afronden...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="288"/>
        <source>Next</source>
        <translation>Volgende</translation>
    </message>
    <message>
        <location filename="../main.qml" line="175"/>
        <source>Select this button to start writing the image</source>
        <translation>Kies deze knop om te beginnen met het schrijven van de image</translation>
    </message>
    <message>
        <location filename="../main.qml" line="245"/>
        <source>Select this button to access advanced settings</source>
        <translation>Klik op deze knop om de geadvanceerde instellingen te openen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="259"/>
        <source>Using custom repository: %1</source>
        <translation>Custom repository in gebruik: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="268"/>
        <source>Keyboard navigation: &lt;tab&gt; navigate to next button &lt;space&gt; press button/select item &lt;arrow up/down&gt; go up/down in lists</source>
        <translation>Toetsenbord navigatie: &lt;tab&gt; ga naar volgende knop &lt;spatie&gt; druk op knop/selecteer item &lt;pijltje omhoog/omlaag&gt; ga omhoog/omlaag in lijsten</translation>
    </message>
    <message>
        <location filename="../main.qml" line="289"/>
        <source>Language: </source>
        <translation>Taal: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="312"/>
        <source>Keyboard: </source>
        <translation>Toetsenbord: </translation>
    </message>
    <message>
        <location filename="../main.qml" line="437"/>
        <source>Pi model:</source>
        <translation>Pi model:</translation>
    </message>
    <message>
        <location filename="../main.qml" line="448"/>
        <source>[ All ]</source>
        <translation>[ Alle modellen ]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="528"/>
        <source>Back</source>
        <translation>Terug</translation>
    </message>
    <message>
        <location filename="../main.qml" line="529"/>
        <source>Go back to main menu</source>
        <translation>Terug naar hoofdmenu</translation>
    </message>
    <message>
        <location filename="../main.qml" line="695"/>
        <source>Released: %1</source>
        <translation>Release datum: %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="705"/>
        <source>Cached on your computer</source>
        <translation>Opgeslagen op computer</translation>
    </message>
    <message>
        <location filename="../main.qml" line="707"/>
        <source>Local file</source>
        <translation>Lokaal bestand</translation>
    </message>
    <message>
        <location filename="../main.qml" line="708"/>
        <source>Online - %1 GB download</source>
        <translation>Online %1 GB download</translation>
    </message>
    <message>
        <location filename="../main.qml" line="833"/>
        <location filename="../main.qml" line="885"/>
        <location filename="../main.qml" line="891"/>
        <source>Mounted as %1</source>
        <translation>Mounted op %1</translation>
    </message>
    <message>
        <location filename="../main.qml" line="887"/>
        <source>[WRITE PROTECTED]</source>
        <translation>[ALLEEN LEZEN]</translation>
    </message>
    <message>
        <location filename="../main.qml" line="929"/>
        <source>Are you sure you want to quit?</source>
        <translation>Weet u zeker dat u wilt afsluiten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="930"/>
        <source>Raspberry Pi Imager is still busy.&lt;br&gt;Are you sure you want to quit?</source>
        <translation>Raspberry Pi Imager is nog niet klaar.&lt;br&gt;Weet u zeker dat u wilt afsluiten?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="941"/>
        <source>Warning</source>
        <translation>Waarschuwing</translation>
    </message>
    <message>
        <location filename="../main.qml" line="949"/>
        <source>Preparing to write...</source>
        <translation>Voorbereiden...</translation>
    </message>
    <message>
        <location filename="../main.qml" line="962"/>
        <source>All existing data on &apos;%1&apos; will be erased.&lt;br&gt;Are you sure you want to continue?</source>
        <translation>Alle bestaande gegevens op &apos;%1&apos; zullen verwijderd worden.&lt;br&gt;Weet u zeker dat u door wilt gaan?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="973"/>
        <source>Update available</source>
        <translation>Update beschikbaar</translation>
    </message>
    <message>
        <location filename="../main.qml" line="974"/>
        <source>There is a newer version of Imager available.&lt;br&gt;Would you like to visit the website to download it?</source>
        <translation>Er is een nieuwere versie van Imager beschikbaar.&lt;br&gt;Wilt u de website bezoeken om deze te downloaden?</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1017"/>
        <source>Error downloading OS list from Internet</source>
        <translation>Fout bij downloaden van lijst met besturingssystemen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1038"/>
        <source>Writing... %1%</source>
        <translation>Schrijven... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1061"/>
        <source>Verifying... %1%</source>
        <translation>Verifiëren... %1%</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1068"/>
        <source>Preparing to write... (%1)</source>
        <translation>Voorbereiden... (%1)</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1084"/>
        <source>Error</source>
        <translation>Fout</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1091"/>
        <source>Write Successful</source>
        <translation>Klaar met schrijven</translation>
    </message>
    <message>
        <location filename="../main.qml" line="572"/>
        <location filename="../main.qml" line="1092"/>
        <source>Erase</source>
        <translation>Wissen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1093"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been erased&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; is gewist&lt;br&gt;&lt;br&gt;U kunt nu de SD kaart uit de lezer halen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1100"/>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;You can now remove the SD card from the reader</source>
        <translation>&lt;b&gt;%1&lt;/b&gt; is geschreven naar &lt;b&gt;%2&lt;/b&gt;&lt;br&gt;&lt;br&gt;U kunt nu de SD kaart uit de lezer halen</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1202"/>
        <source>Error parsing os_list.json</source>
        <translation>Fout bij parsen os_list.json</translation>
    </message>
    <message>
        <location filename="../main.qml" line="573"/>
        <source>Format card as FAT32</source>
        <translation>Formatteer kaart als FAT32</translation>
    </message>
    <message>
        <location filename="../main.qml" line="582"/>
        <source>Use custom</source>
        <translation>Gebruik eigen bestand</translation>
    </message>
    <message>
        <location filename="../main.qml" line="583"/>
        <source>Select a custom .img from your computer</source>
        <translation>Selecteer een eigen .img bestand</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1391"/>
        <source>Connect an USB stick containing images first.&lt;br&gt;The images must be located in the root folder of the USB stick.</source>
        <translation>Sluit eerst een USB stick met images aan.&lt;br&gt;De images moeten in de hoofdmap van de USB stick staan.</translation>
    </message>
    <message>
        <location filename="../main.qml" line="1407"/>
        <source>SD card is write protected.&lt;br&gt;Push the lock switch on the left side of the card upwards, and try again.</source>
        <translation>SD kaart is tegen schrijven beveiligd.&lt;br&gt;Druk het schuifje aan de linkerkant van de SD kaart omhoog, en probeer nogmaals.</translation>
    </message>
    <message>
        <source>Select this button to change the destination SD card</source>
        <translation type="vanished">Kies deze knop om de SD kaart te kiezen</translation>
    </message>
    <message>
        <source>&lt;b&gt;%1&lt;/b&gt; has been written to &lt;b&gt;%2&lt;/b&gt;</source>
        <translation type="vanished">&lt;b&gt;%1&lt;/b&gt; is geschreven naar &lt;b&gt;%2&lt;/b&gt;</translation>
    </message>
</context>
</TS>
