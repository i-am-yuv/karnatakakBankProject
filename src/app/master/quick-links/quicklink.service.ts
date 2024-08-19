import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuickLink } from './quicklink';

@Injectable({
  providedIn: 'root'
})
export class QuicklinkService {

  apiurl: string = environment.commonUrl;

  constructor(private router: Router, private http: HttpClient, private message: MessageService) { }

  async getQuickLinks() {
    var url =
      this.apiurl + 'api/links/all-quick-links';
    const quicklinks = await lastValueFrom(this.http.get<any>(url));
    return quicklinks;
  }

  updateValues(quickLinks:any){
    var environments={
      helpDeskUrl:"http://172.16.202.111:8025/index.php",
      hyperLinkCircular:"http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php",
      fold:"http://172.16.202.10/kbldc/webapps/fold/",
      broms:"http://172.16.202.10/kbldc/webapps/adipage/BRAMOS.bat",
      broms1:"https://bramos.ktkbank.com/",
      icir:"http://172.16.202.10:2080/kbldc/webapps/kdoc/out/out.ViewFolder.php",
     // icir_1day:"http://172.16.202.10:2080/kbldc/webapps/kdoc/op/op.DirectSearch.php?creationdate=true&createstartday=23&createstartmonth=6&createstartyear=2024&createendday=24&createendmonth=6&createendyear=2024&query=%25&mode=and&searchin%5B%5D=keywords&ownerid=-1&targetid=1&updatestartday=23&updatestartmonth=6&updatestartyear=2024&updateendday=24&updateendmonth=6&updateendyear=2024",
     icir_1day:"", 
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
      goldrate:""
    
    };
    quickLinks.forEach((element:any) => {
      //alert((element.urlName==="I circular 1day")+"   "+element.urlName)
      if(element.urlName==="Policies/other documents"){
        
        environments.policy_doc=element.url;
      }
      else if(element.urlName==="I circular 1day"){
        environments.icir_1day=element.url;
      }
      else if(element.urlName==="I circular 1 week"){
        environments.icir_1week=element.url;
      }
      else if(element.urlName==="I circular 1 month"){
        environments. icir_1month=element.url;
      }
      else if(element.urlName==="i circular"){
        environments.icir=element.url;
      }
      else if(element.urlName==="All existing redirections from home page"){

      }
      else if(element.urlName==="Walk-in Customer Details Database"){

      }
      else if(element.urlName==="Additional Links and Browser Routing"){

      }
      else if(element.urlName==="Branch and Executive Directories"){

      }
      else if(element.urlName==="POS Management"){
        environments.pos=element.url;
      }
      else if(element.urlName==="Gold rate"){
        environments.goldrate=element.url;
      }
      else if(element.urlName==="R-return consolidator"){
        environments.return_cons=element.url;
      }
      else if(element.urlName==="Preapproved Credit Card"){
        environments.pre_apr_card=element.url;
      }
      else if(element.urlName==="LDAP Integration"){

      }
      else if(element.urlName==="helpDeskUrl"){
        environments.helpDeskUrl=element.url;
      }
      else if(element.urlName==="hyperLinkCircular"){
        environments.hyperLinkCircular=element.url;
      }
      else if(element.urlName==="fold"){
        environments.fold=element.url;
      }
      else if(element.urlName==="broms"){
        environments.broms=element.url;
      }
      else if(element.urlName==="broms1"){
        environments.broms1=element.url;
      }
    });
    return environments;
  }
}
