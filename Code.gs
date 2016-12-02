function onOpen() {//This is a function name that is a reserved word that runs on the "On Open" event
  var oLang,lang,iOne,item2,o;//Declare variables all at once with a value of undefined
try{
  //Logger.log('onOpen ran');
  lang = Session.getActiveUserLocale();//Get the language code of the active user
  //Logger.log('lang: ' + lang);
  //"it" is the language code for Italian
  //"de" is the language code for German
  o = {
    'id':{'setAndInfo':'Pengaturan dan Informasi','about':'Tentang'},
    'ca':{'setAndInfo':'Ajustos i informació','about':'Aobre'},
    'da':{'setAndInfo':'Indstillinger og information','about':'Cirka'},
    'de':{'setAndInfo':'Einstellungen und Informationen','about':'Etwa'},
    'es':{'setAndInfo':'Configuración e información','about':'Acerca de'},
    'fil':{'setAndInfo':'Mga setting at Impormasyon','about':'tungkol sa'},
    'fr':{'setAndInfo':'Paramètres et informations','about':'Sur'},
    'hr':{'setAndInfo':'Postavke i informacije','about':'Oko'},
    'it':{'setAndInfo':'le impostazioni e le informazioni','about':'Di'},
    'lv':{'setAndInfo':'Iestatījumi un informācija','about':'Par'},
    'lt':{'setAndInfo':'Parametrai ir Informacija','about':'Apie'},
    'hu':{'setAndInfo':'Beállítások és információk','about':'Ról ről'},
    'nl':{'setAndInfo':'Instellingen en Informatie','about':'Over'},
    'no':{'setAndInfo':'Innstillinger og informasjon','about':'Handle om'},
    'pl':{'setAndInfo':'Ustawienia i informacje','about':'O'},
    'pt_BR':{'setAndInfo':'Configurações e informações','about':'Sobre'},
    'pt_PT':{'setAndInfo':'Configurações e informações','about':'Sobre'},
    'ro':{'setAndInfo':'Setări și informații','about':'Despre'},
    'sk':{'setAndInfo':'Nastavitve in informacije','about':'O'},
    'sl':{'setAndInfo':'Nastavitve in informacije','about':'O'},
    'fi':{'setAndInfo':'Asetukset ja Tietoja','about':'Noin'},
    'sv':{'setAndInfo':'Inställningar och information','about':'Handla om'},
    'tr':{'setAndInfo':'Ayarlar ve Bilgiler','about':'Hakkında'},
    'vi':{'setAndInfo':'Cài đặt và thông tin','about':'về'},
    'el':{'setAndInfo':'Ρυθμίσεις και Πληροφοριών','about':'Για'},
    'ru':{'setAndInfo':'Настройки и информация','about':'Около'},
    'sr':{'setAndInfo':'Подешавања и информације','about':'О томе'},
    'uk':{'setAndInfo':'Налаштування і інформація','about':'про'},
    'bg':{'setAndInfo':'Настройки и Информация','about':'Относно'},
    'ar':{'setAndInfo':'الإعدادات والمعلومات','about':'حول'},
    'hi':{'setAndInfo':'सेटिंग्स और जानकारी','about':'के बारे में'},
    'th':{'setAndInfo':'ตั้งค่าและข้อมูล','about':'เกี่ยวกับ'},
    'zh_TW':{'setAndInfo':'設置和信息','about':'關於'},
    'zh_CN':{'setAndInfo':'设置和信息','about':'关于'},
    'ja':{'setAndInfo':'設定と情報','about':'約'},
    'ko':{'setAndInfo':'설정 및 정보','about':'약'},
  };
  oLang = o[lang];//Get language information and settings for this particular language
  //Logger.log('oLang: ' + oLang);
  //Logger.log('oLang: ' + oLang.setAndInfo); 

  if (lang === 'en') {
    iOne = 'Settings and Info';
    item2 = 'About';
  } else if (oLang) {//If there is an object with language setting in it- then run this
    iOne = oLang.setAndInfo;
    item2 = oLang.about;
  };
  
  if (!iOne) {iOne = 'Settings and Info';};//Default to English if there is a problem
  if (!item2) {item2 = 'About';};
  
  FormApp.getUi().createAddonMenu()
    .addItem(iOne,'function_Name_Here_To_Open_Sidebar')
    .addItem(item2,'function_Name_Here_to_Open_About_Dialog').addToUi();
}catch(e){
  sendMsg(e,'onOpen');//My error handling message system
};
};
