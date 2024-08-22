import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'primeng/table';
import { LayoutService } from 'src/app/shared/layout/layout.service';
import { QuickLink } from '../quick-links/quicklink';
import { QuicklinkService } from '../quick-links/quicklink.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  isMobile!: boolean;
  urlName: any = this.route.snapshot.paramMap.get('urlName');
  head: any = this.route.snapshot.paramMap.get('head') == undefined ? "Links" : this.route.snapshot.paramMap.get('head');

  @ViewChild('dt') dt!: Table;
  environments: any;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef,
    private router: Router,
    private quickLinkService: QuicklinkService, private layoutService: LayoutService) { }
  quickLinks: QuickLink[] = [];
  cols!: any[]; 

  ngOnInit(): void {
    // this.route.paramMap.subscribe(params => {
    //   this.urlName = params.get('urlName');
    //   this.head = params.get('head');
    //   if (this.head != undefined) {
    //     this.head = decodeURIComponent(this.head);
    //   }
    
    // });
    if (this.head != undefined) {
          this.head = decodeURIComponent(this.head);
         }
    this.loadData();
   
  }
  loadData() {
    this.layoutService.getContactUrlByName(decodeURIComponent(this.urlName)).then((res) => {
    
      this.quickLinks = res;
    });
  }
  applyFilterGlobal(event: Event, stringVal: any) {
    this.dt.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
  visitedLinks: boolean[] = [];
  markAsVisited(index: number, event: Event) {
    event.preventDefault(); // Prevent the default behavior to avoid navigation for now
    this.visitedLinks[index] = true;

    // setTimeout(() => {
    //   window.location.href = this.quickLinks[index].url; // Navigate after marking as visited
    // }, 100);
  }
}
