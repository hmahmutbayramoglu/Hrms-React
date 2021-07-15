import axios from "axios";

export default class CandidateCurriculumVitaeService {
  getCandidateCurriculumVitaes() {
    return axios.get("http://localhost:8080/api/CandidateCurriculumVitaes/getall");
  }
}