function onOpen() {//This is a function name that is a reserved word that runs on the "On Open" event
  var oLang,lang,iOne,item2,o;//Declare variables all at once with a value of undefined
try{
  //Logger.log('onOpen ran');
  lang = Session.getActiveUserLocale();//Get the language code of the active user
  //Logger.log('lang: ' + lang);
  //"it" is the language code for Italian
  //"de" is the language code for German
  o = {
    'it':{'setAndInfo':'le impostazioni e le informazioni','about':'Di'},
    'de':{'setAndInfo':'Einstellungen und Informationen','about':'Etwa'}
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
