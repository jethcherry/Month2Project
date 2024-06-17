export interface User
{
   Id:string;
   Email:string;
   Name:string;
   Password:string;
   isDeleted:number
   isEmailSent:number
   isAdmin:number
   

}

export interface Payload
{
   Id:string;
   Sub:string;
   Name:string;
   isAdmin:number
   
}
