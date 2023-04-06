import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { AboutContainer } from "../About/aboutContainer";
import { BulkUpdateContainer } from "../BulkUpdate/bulkupdateContainer";
import { ChangePasswordContainer } from "../ChangePassword/changepasswordContainer";
import { ExportDataContainer } from "../ExportData/exportdataContainer";
import { ExportUserContainer } from "../ExportUser/exportuserContainer";
import { FreeTrialContainer } from "../FreeTrial/freetrialContainer";
import { HomeContainer } from "../Home/homeContainer";
import { AdminLoginContainer } from "../Login/loginContainer";
import { NavBarContainer } from "../Navbar/navbarContainer";
import { PaymentDetailsContainer } from "../PaymentDetails/paymentdetailsContainer";
import { PrivacyContainer } from "../Privacy/privacyContainer";
import { RemoveDuplicateContainer } from "../RemoveDuplicate/removeduplicateContainer";
import { SecureConfigContainer } from "../SecureConfig/secureconfigContainer";
import { SendNotificationContainer } from "../SendNotification/sendnotificationContainer";
import { ServiceDetailsContainer } from "../ServiceDetails/servicedetailsContainer";
import { SingleUpdateContainer } from "../SingleUpdate/singleupdateContainer";
import { SubAdminContainer } from "../SubAdmin/subadminContainer";
import { TermsContainer } from "../Terms/termsContainer";
import { UpdateUserContainer } from "../UpdateUser/updateuserContainer";
import { UploadExcelContainer } from "../UploadExcel/uploadexcelContainer";
import { ValidityPeriodContainer } from "../ValidityPeriod/validityperiodContainer";
import {
  content_container, content_login
} from "./root.css";

import { useState } from "react";

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  console.log(tokenString);
  const userToken = JSON.parse(tokenString);
  return tokenString
}

const RootView = (): JSX.Element => {
  const [token, setToken] = useState();
  
  const ss=getToken();
  console.log(ss)

    if(!ss) {
      return (
        <div className={content_login}>
          {/* <NavBarContainer /> */}
          <AdminLoginContainer setToken={setToken}/>
        </div>)
    }
  return (
    

    <div>
      <BrowserRouter>
      <div  className={content_container}>
        <NavBarContainer />
        <div>
          <Routes>
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<HomeContainer />} />
            <Route path="/upload-excel" element={<UploadExcelContainer />} />
            <Route path="/single-update" element={<SingleUpdateContainer />} />
            <Route path="/remove-duplicate" element={<RemoveDuplicateContainer />} />
            <Route path="/send-notification" element={<SendNotificationContainer />} />
            <Route path="/export-data" element={<ExportDataContainer />} />
            <Route path="/bulk-update" element={<BulkUpdateContainer />} />
            <Route path="/update-user" element={<UpdateUserContainer />} />
            <Route path="/validity-period" element={<ValidityPeriodContainer />} />
            <Route path="/export-user" element={<ExportUserContainer />} />
            <Route path="/service-details" element={<ServiceDetailsContainer />} />
            <Route path="/sub-admin" element={<SubAdminContainer />} />
            <Route path="/change-password" element={<ChangePasswordContainer />} />
            <Route path="/secure-config" element={<SecureConfigContainer />} />
            <Route path="/payment-details" element={<PaymentDetailsContainer />} />
            <Route path="/admin-login" element={<AdminLoginContainer />} />
            <Route path="/free-trail" element={<FreeTrialContainer />} />
            <Route path="/privacy" element={<PrivacyContainer />} />
            <Route path="/terms" element={<TermsContainer />} />
            <Route path="/about" element={<AboutContainer />} />
            <Route path="/admin-login"/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {/* <FooterContainer/> */}
      </div>
        
      </BrowserRouter>
    </div>
  );
};

export { RootView };
