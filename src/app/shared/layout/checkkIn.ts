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
    username?:any;
    approvername?:any;
    reason?:any;
    isApprove?:any;
    isReject?:any;
    status?:any;
    latitude?:any;
    longitude?:any;
       
}

export interface LeaveData{
    date?:any[];
    employeeId?:any;
  }