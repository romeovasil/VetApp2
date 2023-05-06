export class Appointment {

  constructor(
    public id : number,
    public animal:string,
    public data:string,
    public time:string,
    public doctor_name:string,
    public diagnostic:string,
    public status:string,
    public procedures:string
  ) {
  }
}
