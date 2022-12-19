export class Consumer {

  email: string = ""
  name: string = ""
  area_name : string = ""
  consumer_type_name:string = ""
  password:string = ""


  public setEmail(v : string) {
    this.email = v;
  }

   public setName(v : string) {
    this.name = v;
  }

   public setAreaName(v : string) {
    this.area_name = v;
  }

   public setConsumerTypeName(v : string) {
    this.consumer_type_name = v;
  }

   public setPassword(v : string) {
    this.password = v;
  }
}
