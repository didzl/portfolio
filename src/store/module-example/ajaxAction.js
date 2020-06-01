import axios from "axios";

const apiURL = "http://localhost:8000";

export const ajaxActions = {
  login(user, cSuccess, cError) {
    let options = {
      url() {
        return `${apiURL}/login`;
      }
    };
    let api = axios.create();
    console.log("url= ", options.url());
    axios
      .all([
        api.post(options.url(), {
          email: user.email,
          password: user.password
        })
      ])
      .then(responses => {
        console.log("response= ", responses);
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          console.log("200 response= ", responses[0].data);
          cSuccess(responses[0].data);
        }
      })
      .catch(error => {
        cError(error.response);
      });
  }
}