// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //commonUrl : 'https://kbldcuat.ktkbank.com/kbldc/',
  
  commonUrl : 'http://localhost:9002/kbldc/',
  helpDeskUrl:"http://172.16.202.111:8025/index.php",
  hyperLinkCircular:"http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php",
  fold:"http://172.16.202.10/kbldc/webapps/fold/",
  broms:"http://172.16.202.10/kbldc/webapps/adipage/BRAMOS.bat",
  broms1:"https://bramos.ktkbank.com/",
  icir:"http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php",
  icir_1day:"http://172.16.202.10:2080/kbldc/webapps/kdoc/op/op.DirectSearch.php?creationdate=true&createstartday=23&createstartmonth=6&createstartyear=2024&createendday=24&createendmonth=6&createendyear=2024&query=%25&mode=and&searchin%5B%5D=keywords&ownerid=-1&targetid=1&updatestartday=23&updatestartmonth=6&updatestartyear=2024&updateendday=24&updateendmonth=6&updateendyear=2024",
  icir_1week:"http://172.16.202.10:2080/kbldc/webapps/kdoc/op/op.DirectSearch.php?creationdate=true&createstartday=6&createstartmonth=5&createstartyear=2024&createendday=13&createendmonth=5&createendyear=2024&query=%25&mode=and&searchin%5B%5D=keywords&ownerid=-1&targetid=1&updatestartday=6&updatestartmonth=5&updatestartyear=2024&updateendday=13&updateendmonth=5&updateendyear=2024",
  icir_1month:"http://172.16.202.10:2080/kbldc/webapps/kdoc/op/op.DirectSearch.php?creationdate=true&createstartday=13&createstartmonth=4&createstartyear=2024&createendday=13&createendmonth=5&createendyear=2024&query=%25&mode=and&searchin%5B%5D=keywords&ownerid=-1&targetid=1&updatestartday=13&updatestartmonth=4&updatestartyear=2024&updateendday=13&updateendmonth=5&updateendyear=2024",
  policy_doc:"http://172.16.202.10",
  cms:"http://172.16.202.10/kbldc/webapps/fold/",
  pos:"http://172.16.202.10/kbldc/webapps/posnet/",
  al_br:"http://kbldc.ktkbank.com/kbldc/webapps/adipage/Adipage_2/#secp",
  customer_info:"http://172.16.202.210:8023/",
  return_cons:"http://172.16.202.10/kbldc/webcomps/rreturn/",
  branch_exc_directive:"http://172.16.202.10/kbldc/testapps/brdir/include/listbranch.php",
  pre_apr_card:"http://172.16.202.10/kbldc/webcomps/pacc/",
  returns:"http://172.16.202.10/kbldc/webcomps/rreturn/",

  branch_performance:"http://172.16.202.148/kbldc/webapps/tgt/",
  branch_details:"http://172.16.202.10/index.htm/index.php?option=com_weblinks&catid=40&Itemid=60#",
  ourJourney:"https://karnatakabank.com/about/bank",
  learningDev:"http://172.16.202.202:8450/psp/KBELMPRD/EMPLOYEE/ELM/c/LM_SS_LEARNING.LM_SS_LEARNING_UI.GBL",
  rewardRec:"http://172.16.202.10/kbldc/common/images/app_droid/BEST_TAT_KBLDC_UPDATE.pdf",
  travel:"http://hrms.ktkbank.com/psc/kbhrprd_newwin/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTNUI_MENU_COMP.GBL?sa=&FLDR=ZZ_TA_TRAVELCLAIM&ICDoModal=1&ICGrouplet=1",
  reimbursement:"http://hrms.ktkbank.com/psc/kbhrprd_newwin/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTNUI_MENU_COMP.GBL?sa=&FLDR=ZZ_REIMBURSEMENT&ICDoModal=1&ICGrouplet=1",
  performance:"https://kblrise.ktkbank.com/kbl-pms/web-app/login",
  info:"http://hrms.ktkbank.com/psc/kbhrprd_newwin/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTNUI_MENU_COMP.GBL?sa=&FLDR=HC_PERSONAL_INFO_ESS&ICDoModal=1&ICGrouplet=1",
  leave:"http://hrms.ktkbank.com/psc/kbhrprd_newwin/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTNUI_MENU_COMP.GBL?sa=&FLDR=HC_TIME_REPORTING&ICDoModal=1&ICGrouplet=1",
  payroll:"http://hrms.ktkbank.com/psc/kbhrprd_newwin/EMPLOYEE/HRMS/c/NUI_FRAMEWORK.PTNUI_MENU_COMP.GBL?sa=&FLDR=ZZ_GP_SS&ICDoModal=1&ICGrouplet=1",
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
