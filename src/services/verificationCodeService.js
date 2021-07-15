import axios from "axios";

export default class VerificationCodeService {
  getVerificationCodes() {
    return axios.get("http://localhost:8080/api/verificationCodes/getall");
  }
}