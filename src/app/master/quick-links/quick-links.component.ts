import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quick-links',
  templateUrl: './quick-links.component.html',
  styleUrls: ['./quick-links.component.scss']
})
export class QuickLinksComponent implements OnInit {
  isMobile!: boolean;
  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', () => {
      this.checkScreenSize();
    });
  }
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768; // Change the breakpoint according to your design
  }

  hyperlinkHelpdesk() {
    const url = environment.broms1  ;
    window.open(url, '_blank');
  }
  openHyperLinks(type:any){
    if(type=='i-cir'){
      const url = environment.icir  ;
      window.open(url, '_blank');
    }
    else if(type=='i-cir-1day'){
      const url = environment.icir_1day  ;
      window.open(url, '_blank');
    }
    else if(type=='i-cir-1week'){
      const url = environment.icir_1week  ;
      window.open(url, '_blank');
    }
    else if(type=='i-cir-1month'){
      const url = environment.icir_1month  ;
      window.open(url, '_blank');
    }
    else if(type=='policy_doc'){
      const url = environment.policy_doc  ;
      window.open(url, '_blank');
    }
    else if(type=='cms'){
      const url = environment.cms  ;
      window.open(url, '_blank');
    }
    else if(type=='pos'){
      const url = environment.pos  ;
      window.open(url, '_blank');
    }
    else if(type=='al_br'){
      const url = environment.al_br ;
      window.open(url, '_blank');
    }
    else if(type=='customer_info'){
      const url = environment.customer_info ;
      window.open(url, '_blank');
    }
    else if(type=='branch_exec_directories'){
      const url = environment.branch_exc_directive ;
      window.open(url, '_blank');
    }
    else if(type=='pre-approved-creditcard'){
      const url = environment.pre_apr_card ;
      window.open(url, '_blank');
    }
    else if(type=='returns'){
      const url = environment.returns ;
      window.open(url, '_blank');
    }
  }
}
