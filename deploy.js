let Deploy = require('ftp-deploy');
let ftpDeploy = new Deploy();

let config = {
    host : "",
    user : "",
    password : "",
    port: 21,
    localRoot: __dirname + '/build',
    remoteRoot: '/www/**/',
    include: ['*'],
    deleteRemote: true
}
ftpDeploy.deploy(config, function(err, res) {
    if (err) console.log(err)
    else console.log('finished:', res);
});

ftpDeploy.on("uploading", function(data) {
    data.totalFilesCount;
    data.transferredFileCount;
    data.filename;
});
ftpDeploy.on("uploaded", function(data) {
    // console.log(data);

});
ftpDeploy.on("log", function(data) {
    // console.log(data);

});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err);
});