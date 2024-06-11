// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //commonUrl : 'https://api.ifyn.com/kbldc/',
  commonUrl : 'http://localhost:9002/kbldc/',
  helpDeskUrl:"http://172.16.202.111:8025/index.php",
  hyperLinkCircular:"http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php",
  fold:"http://172.16.202.10/kbldc/webapps/fold/",
  broms:"http://172.16.202.10/kbldc/webapps/adipage/BRAMOS.bat",
  broms1:"https://bramos.ktkbank.com/",
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
