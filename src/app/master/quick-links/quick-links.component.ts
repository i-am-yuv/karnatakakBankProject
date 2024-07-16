import { Component, OnInit } from '@angular/core';
import { QuickLink } from './quicklink';
import { QuicklinkService } from './quicklink.service';
import { LayoutService } from 'src/app/shared/layout/layout.service';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {
  isMobile!: boolean;
  environments:any;
  constructor(private quickLinkService:QuicklinkService,private layoutService:LayoutService) { }
  quickLlinks:QuickLink[]=[];
  ngOnInit(): void {
    
    this.layoutService.getData('quick-links')
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
this.quickLinkService.getQuickLinks().then((res)=>{
  this.quickLlinks=res;
  this.environments=this.quickLinkService.updateValues(this.quickLlinks);
});
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Change the breakpoint according to your design
  }

  hyperlinkHelpdesk() {
    const url = this.environments?.broms1  ;
    window.open(url, '_blank');
  }
  openHyperLinks(type:any){
    if(type=='i-cir'){
      const url = this.environments.icir  ;
      window.open(url, '_blank');
    }
    else if(type=='i-cir-1day'){
      const url = this.environments.icir_1day  ;
      window.open(url, '_blank');
    }
    else if(type=='i-cir-1week'){
      const url = this.environments.icir_1week  ;
      window.open(url, '_blank');
    }
    else if(type=='i-cir-1month'){
      const url = this.environments.icir_1month  ;
      window.open(url, '_blank');
    }
    else if(type=='policy_doc'){
      const url = this.environments.policy_doc  ;
      window.open(url, '_blank');
    }
    else if(type=='cms'){
      const url = this.environments.cms  ;
      window.open(url, '_blank');
    }
    else if(type=='pos'){
      const url = this.environments.pos  ;
      window.open(url, '_blank');
    }
    else if(type=='al_br'){
      const url = this.environments.al_br ;
      window.open(url, '_blank');
    }
    else if(type=='customer_info'){
      const url = this.environments.customer_info ;
      window.open(url, '_blank');
    }
    else if(type=='branch_exec_directories'){
      const url = this.environments.branch_exc_directive ;
      window.open(url, '_blank');
    }
    else if(type=='pre-approved-creditcard'){
      const url = this.environments.pre_apr_card ;
      window.open(url, '_blank');
    }
    else if(type=='returns'){
      const url = this.environments.returns ;
      window.open(url, '_blank');
    }
  }
}
