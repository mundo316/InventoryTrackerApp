import { Component, OnInit, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  parts$ = new BehaviorSubject<{[name: string]: any}>({
    'Pex Line': {
      name: 'Pex Line',
      types: 'Refrigerator',
      boxed: 4,
      proominv: 89,
      onhand: 489,
      tvalue: 978,

    },
    'Gas Range Kit': {
      name: 'Gas Range Kit',
      types: 'Cooking',
      boxed: 206,
      proominv: 203,
      onhand: 254,
      tvalue: 102,

    },
    '3 Prong Dryer Cord': {
      name: '3 Prong Dryer Cord',
      types: 'Laundry',
      boxed: 869,
      proominv: 255,
      onhand: 255,
      tvalue: 128,
    },
    '4 Prong Dryer Cord	': {
      name: '4 Prong Dryer Cord	',
      types: 'Laundry',
      boxed: 1336,
      proominv: 317,
      onhand: 205,
      tvalue: 122,
    },
    'Rubber Washer Hoses': {
      name: 'Rubber Washer Hoses',
      types: 'Laundry',
      boxed: 712,
      proominv: 301,
      onhand: 133,
      tvalue: 159,
    },
    'Reinforced Washer Hoses': {
      name: 'Reinforced Washer Hoses	',
      types: 'Laundry',
      boxed: 716,
      proominv: 117,
      onhand: 137,
      tvalue: 283,
    },
    'Semi Rigid Dryer Vent': {
      name: 'Semi Rigid Dryer Vent',
      types: 'Laundry',
      boxed: 916,
      proominv: 282,
      onhand: 150,
      tvalue: 123,
    },
    'Dryer Gas Line	': {
      name: 'Dryer Gas Line',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'MT/ WP Steam Kit': {
      name: 'MT/ WP Steam Kit',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'Anti Vibration Pads': {
      name: 'Anti Vibration Pads',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'GE DW Cord': {
      name: 'GE DW Cord',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'GE DW Kit': {
      name: 'GE DW Kit',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
      '12 GE DW Drain Hose': {
      name: '12 GE DW Drain Hose',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
      '12 MT DW Kit w/ Supply Line': {
      name: '12 MT DW Kit w/ Supply Line',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     '12 MT WP DW Drain Hose': {
      name: '12 MT WP DW Drain Hose',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    } ,
     '10 DW Kit Large Line': {
      name: 'DW Kit Large Line',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     '10 DW Kit Small Line': {
      name: '10 DW Kit Small Line',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'Bosch DW Cord SGZP': {
      name: 'Bosch DW Cord SGZP',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'Bosch DW Cord SMZP': {
      name: 'Bosch DW Cord SMZP',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
      'Bosch Drain Hose SGZ1': {
      name: 'Bosch Drain Hose SGZ1',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     'Bosch Junction Box': {
      name: 'Bosch Junction Box',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
      'Braided Icemaker Water Line': {
      name: 'Braided Icemaker Water Line',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    },
     '3 Prong Range Cord': {
      name: '3 Prong Range Cord',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    }  ,
    '4 Prong Range Cord': {
      name: '4 Prong Range Cord',
      types: 'Laundry',
      boxed: 517,
      proominv: 116,
      onhand: 180,
      tvalue: 229,
    }



  });
  superlatives$ = new BehaviorSubject<{[superlativeName: string]: string}>({});
  tableDataSource$ = new BehaviorSubject<any[]>([]);
  displayedColumns$ = new BehaviorSubject<string[]>([
    'name',
    'types',
    'boxed',
    'proominv',
    'onhand',
    'tvalue',
    'sell',
    'restock'
  ]);


  constructor() { }

  
  ngOnInit() {
      this.parts$.subscribe(changedPartData => {
        this.tableDataSource$.next(Object.values(changedPartData));
  
        const superlatives = {
          'highest-boxed': null,
          'lowest-boxed': null,
          'highest-proominv': null,
          'lowest-proominv': null,
          'highest-onhand': null,
          'lowest-onhand': null,
          'highest-tvalue': null,
          'lowest-tvalue': null,
        };
  
        Object.values(changedPartData).forEach(part => {
          Object.keys(part).forEach(key => {
            if (key === 'name' || key === 'types') { return; }
  
            const highest = `highest-${key}`;
            if (!superlatives[highest] || part[key] > changedPartData[superlatives[highest]][key]) {
              superlatives[highest] = part.name;
            }
  
            const lowest = `lowest-${key}`;
            if (!superlatives[lowest] || part[key] < changedPartData[superlatives[lowest]][key]) {
              superlatives[lowest] = part.name;
            }
          });
        });
  
        this.superlatives$.next(superlatives);
      });
    }
  
    sell(partName: string) {
      const updatedPart = { ... this.parts$.value[partName] };
      updatedPart.proominv = Math.round(updatedPart.proominv - (1));
      updatedPart.onhand = Math.round(updatedPart.onhand - (1));
      updatedPart.tvalue = Math.round(updatedPart.tvalue);
      

      const newPartData = { ... this.parts$.value };
      newPartData[partName] = updatedPart;
  
      this.parts$.next(newPartData);
    }

/*     restock(partName: string) {
      const updatedPart = { ... this.parts$.value[partName] };
      updatedPart.boxed = Math.round(updatedPart.boxed - (1));
      updatedPart.proominv = Math.round(updatedPart.proominv + (18));

    parts info for hard code

    Dryer Gas Line	12.99	100
WX14X10009/10	MT/ WP Steam Kit	5.99	100
WX17X10001	Anti Vibration Pads	5.99	100
WX41X60	6' Rubber hose	1	100
WX09X70910	GE DW Cord	5.99	100
WX09X70911	8' GE DW Cord	10.99	100
WX28X326	GE DW Kit	15.99	100
WD24X10065	12' GE DW Drain Hose	8.99	100
WX28X327	12' MT DW Kit w/ Supply Line	5.99	100
WX28X404	12' MT WP DW Drain Hose	4.99	100
WX28X320	10' DW Kit Large Line	10.99	100
WX28X321	10' DW Kit Small Line	11.99	100
WX09X24980	Bosch DW Cord SGZP	11.99	100
WX09X24978	Bosch DW Cord SMZP	11.99	100
WX09X24979	Bosch Drain Hose SGZ1	5.99	100
WX09X24981	Bosch Junction Box	15.99	100
WX08X10012	Braided Icemaker Water Line	5.99	100
WX09X10006	3 Prong Range Cord	6.99	100
WX08X10035	4 Prong Range Cord	7.99	100

    } */
  
  }



