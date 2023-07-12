const regexAvatarLink = /^https?:\/\/(?:www\.)?[a-zA-Z0-9._~\-:?#[\]@!$&'()*+,/;=]{2,256}\.[a-zA-Z0-9./?#-]{2, }$/;
const regexLink = /^https?:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\\/~+#-]*[\w@?^=%&\\/~+#-])/im;
module.exports = { regexAvatarLink, regexLink };
