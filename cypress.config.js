const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "defaultCommandTimeout": 10000,
  "pageLoadTimeout": 70000,
  "projectId": '49a5zy',
  "reporter": 'mochawesome',
  e2e: {
    baseUrl: "https://online.actitime.com/fishbowl/login.do"
},

    


}
)