import { Component, OnInit } from '@angular/core';
import { RuleService } from './rule.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css']
})

export class RuleComponent implements OnInit {

  
  rules: any = [];
   test: any = [];

  constructor(private ruleService: RuleService) { }

  	ngOnInit() {

	    this.ruleService.findAll().subscribe(response => {
	      this.rules = response;
	    }
    );
  }

}
