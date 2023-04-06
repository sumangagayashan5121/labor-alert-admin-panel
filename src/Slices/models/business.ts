interface Business {
    notice_received?: string | undefined;
    company_name?: string | undefined;
    employees_affected?: number | undefined;
    event_type?: string | undefined;
    effective_date_start?: string | undefined;
    effective_date_end?: string | undefined;
    city1?: string | undefined;
    city2?: string | undefined;
    city3?: string | undefined;
    city4?:string | undefined;
    city5?:string | undefined;
    country?:string | undefined;
    state?:string | undefined;
}  

export type { Business };


//   "notice_received": "2023-02-20T00:00:00.000Z",
//   "company_name": "company 7",
//   "employees_affected": 330,
//   "event_type": "closure",
//   "effective_date_start": "2023-04-21T00:00:00.000Z",
//   "effective_date_end": "2023-04-29T00:00:00.000Z",
//   "city1": "city 4",
//   "city2": null,
//   "city3": null,
//   "city4": null,
//   "city5": null,
//   "country": "country 5",
//   "state": "state 5"