import moment from "moment";

export function getFormattedDate(date:Date) {
   
    let year = date.getFullYear();
  
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
  
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    return month + '-' + day + '-' + year;
  }

  export function weeksBetween(d1:Date, d2:Date):number {
    let currDay = moment(d1);
let birthday = moment(d2);

    let diff = moment.duration(birthday.diff(currDay));
    console.log("diff",diff);
    return Math.trunc(diff.asWeeks());
}