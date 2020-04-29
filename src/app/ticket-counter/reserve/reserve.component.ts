import { Component, OnInit } from '@angular/core';

export class seatProps{
  id:number;
  caption:number;
  checked:boolean;
  booked:boolean;
}

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  totalSeat:number = 80; 
  seatProps:seatProps;
  selectedCount:number=7;
  seatIndex:number = 1;
  // Select Options Array
  selectionCount = [  // object for two-way binding
    {id: 1, val: 1},
    {id: 2, val: 2},
    {id: 3, val: 3},
    {id: 4, val: 4},
    {id: 5, val: 5},
    {id: 6, val: 6},
    {id: 7, val: 7}
];
auther ={
  name:'Amit Saini',
  mob:'+919557722217 / +919717194571',
  email: 'amitsainimca01@gmail.com',
  skype: 'amitsainimca01'
}
  // Empty Seat object array 
  seats = {
    'firstRang': {
          seats: this.createSeats(11, 7) // rows, cols
      },
      'secondRang': {
        seats: this.createSeats(1, 3)
      }
  };
  // Book seat number
  availCount = {
    id:7,
    val:7
  };
  reserveSeatLists = [];
  constructor() {
    console.log("Reserve Components Here");
  }

  ngOnInit() {
    this.seatProps = {
      id: 0,
      caption: 0,
      checked: false,
      booked: false
    };
  }

  createSeats(rows, cols) { 
    var seatarr = [[]]  
    //var seatIndex = 0;
      for (var row = 0; row < rows; row++) {
        seatarr[row] = [];
          for(var col=0; col < cols; col++) {
            this.seatProps = {
              id: this.seatIndex,
                caption: this.seatIndex,
                booked: this.seatIndex < 0, //  booked
                checked:false
            };
            seatarr[row][col] = this.seatProps;
            this.seatIndex++;
          }
      }
      return seatarr;
  }
  
  greaterThan(subj , num: number) {
    return subj > num;
  }

   
	checkSelected(newCount) {
    // selected fewer or more than persons in select. 
      var checkedCount=0, keys = Object.keys(this.seats);
      this.selectedCount = newCount
      for (var rang=0; rang < keys.length; rang++) {
        var key = keys[rang];
        var curSeats = this.seats[key].seats;
          for (var row=0; row < curSeats.length; row++) {
              for (var col=0; col < curSeats[row].length; col++) {
                  if ( curSeats[row][col].checked ) {
                      checkedCount++;
                  }
              }
          } 
          // we can have more or less selections after selection change
          // --> more inc availCount            
          if (checkedCount === 0) {
            // nothing selected
              this.availCount ={
                id:newCount,
                val:newCount
              };
          }
          else if (newCount >= checkedCount) {
            console.log('add delta', newCount, checkedCount)
            this.availCount.val = (newCount - checkedCount);
          } else {
             this.removeCheck();
          }
      }
  } 
 removeCheck() {
  // later pass user to this function (for now remove all checked)
    var keys = Object.keys(this.seats);
    console.log(keys.length);
    for (var rang=0; rang < keys.length; rang++) {
      var key = keys[rang];
      var curSeats = this.seats[key].seats;
        for (var row=0; row < curSeats.length; row++) {
            for (var col=0; col < curSeats[row].length; col++) {
                curSeats[row][col].checked = false;
            }
        }
    }
    this.reserveSeatLists = []; 
}

  selectSeats(selection, count) { 
      var row = selection.row,
        seat = selection.seat;      
      if ( !seat.booked ) { 
          if ( this.availCount.val == 0 ) { 
              this.availCount =  {
                id:count,
                val:count
              } 
              this.removeCheck(); //selection.rang);
          }

          var borderDistance = row.length - row.indexOf(seat),
          rest = borderDistance > count.val ? 0:  count.val - borderDistance;
              
    if ( this.availCount.val === count.val) {
              // first click
              var lastIndex = rest > 0 ? row.length: row.indexOf(seat) + count.val;
              for ( var seatIndex = row.indexOf(seat); seatIndex < lastIndex; seatIndex++) {
                  row[seatIndex].checked = true;
              }
              this.availCount.val = rest; // update available seats
          } 
          else { 
              if ( !row[row.indexOf(seat)].checked ) {
                // only if not already checked
                  row[row.indexOf(seat)].checked = true;
                  if (this.availCount.val > 0 ) {
                      this.availCount.val--;
                  }
               } 
          }
          this.getBookSeatList(seat);
      }
  }
  getBookSeatList(selectedSeat){
    if(this.reserveSeatLists.length > 0){
      if(this.reserveSeatLists.findIndex( obj => obj['id'] == selectedSeat.id) == -1){
        this.reserveSeatLists.unshift(selectedSeat);
      }
    }else{
      this.reserveSeatLists.push(selectedSeat);
    }    
  }  
}
