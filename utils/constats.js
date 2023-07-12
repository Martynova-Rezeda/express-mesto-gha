const regexAvatarLink = /https?:\/\/(www)?[0-9a-z\-._~:/?#[\]@!$&'()*+,;=]+#?$/i;
const regexLink = /^https?:\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\\/~+#-]*[\w@?^=%&\\/~+#-])/im;
module.exports = { regexAvatarLink, regexLink };
