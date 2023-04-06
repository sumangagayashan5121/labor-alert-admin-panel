interface User {
    first_name?: string | undefined;
    last_name?: string | undefined;
    email?: string | undefined;
    city?: string | undefined;
    state?: string | undefined;
    user_name?: string | undefined;
    service_id?: string | undefined;
    referred_by?: string | undefined;
    status?: string | undefined;
    send_mail?:string | undefined;
    registration_date?:string | undefined;
    renew_date?:string | undefined;
}  

export type { User };

//   "first_name": "test123",
//   "last_name": "test",
//   "user_name": "test 01",
//   "email": "test01@gmail.com",
//   "send_mail": "test0@gmail.com",
//   "state": null,
//   "city": null,
//   "referred_by": null,
//   "service_id": 1,
//   "status": "true"