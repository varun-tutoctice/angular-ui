var replace = require('replace-in-file');
var package = require("./package.json");

const axios = require('axios').default;
var buildVersion = package.version;
var buildTimestamp = package.timestamp = new Date().toISOString();
// const options = {
//     files: 'src/environments/environment.prod.ts',
//     from: /version: '(.*)'/g,
//     to: "version: '"+ buildVersion + "'",
//     allowEmptyPaths: false,
// };
const timeStampOptions = {   files: 'src/environments/environment.prod.ts',   from: /timestamp:.*/gm,   to: `timestamp: '${buildTimestamp}',`,   allowEmptyPaths: false, };
const options = {   files: 'src/environments/environment.prod.ts',   from: /version:.*/gm,   to: `version: '${buildVersion}',`,   allowEmptyPaths: false, };


try {
    let changedFiles = replace.sync(options);
    let changedFiles1 = replace.sync(timeStampOptions);
    let yourUrl = "https://service.aurotech-aalm-dev.com/acc-api/attachment"
    if (changedFiles == 0) {
        throw "Please make sure that file '" + options.files + "' has \"version: ''\"";
    }
    if (changedFiles1 == 0) {
      throw "Please make sure that file '" + timeStampOptions.files + "' has \"timestamp: ''\"";
  }
    console.log('Build version set: ' + buildVersion);
    console.log('Build timestamp set: ' + buildTimestamp);



    axios.post(yourUrl, {
      buildVersion: buildVersion,
      buildTimestamp: buildTimestamp,
      type: "BuildDeployment"
  })
    .then(function (response) {
      //console.log(response);
    })
    .catch(function (error) {
     // console.log(error);
    });

}
catch (error) {
    console.error('Error occurred:', error);
    throw error
}
