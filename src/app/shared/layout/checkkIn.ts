export interface CheckIn {
    checkInTime?: any;
    checkOutTime?: any;
    latitude?: any;
    longitude?: any;
    empId?: any;
}

export interface CheckOut {
    checkInTime?: any;
    checkOutTime?: any;
    latitude?: any;
    longitude?: any;
    empId?: any;
}

export interface TimeSheet{
    userName?:any;
    approvername?:any;
    reason?:string;
    isApprove?:any;
    isReject?:any;
    status?:any;
    latitude?:any;
    longitude?:any;
    solLatitude?:any;
    solLongitude?:any;
       
}

export interface LeaveData{
    date?:any[];
    employeeId?:any;
  }