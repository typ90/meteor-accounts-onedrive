OneDrive = {};

OAuth.registerService('onedrive', 2, null, function(query) {
  var tokens = getTokens(query);
  var accessToken = tokens.access_token;
  var identity = getIdentity(accessToken);
  var expiresAt = (new Date).getTime()/1000 + tokens.expires_in; 

  return {
    serviceData: {
      id: identity.id,
      accessToken: OAuth.sealSecret(accessToken),
      email: identity.emails.preferred,
      username: identity.login,
    },
    options: {profile: {name: identity.name}}
  };
});

var userAgent = "Meteor";
if (Meteor.release)
  userAgent += "/" + Meteor.release;

var getTokens = function (query) {
  var config = ServiceConfiguration.configurations.findOne({service: 'onedrive'});
  if (!config)
    throw new ServiceConfiguration.ConfigError();

  var response;
  try {
    response = HTTP.post(
      "https://login.live.com/oauth20_token.srf", {
        headers: {
          Accept: 'application/json',
          "User-Agent": userAgent
        },
        params: {
          code: query.code,
          client_id: config.clientId,
          client_secret: OAuth.openSecret(config.secret),
          redirect_uri: OAuth._redirectUri('onedrive', config),
          grant_type:'authorization_code',
          state: query.state
        }
      });
  } catch (err) {
    throw _.extend(new Error("Failed to complete OAuth handshake with OneDrive. " + err.message),
                   {response: err.response});
  }
  if (response.data.error) { // if the http response was a json object with an error attribute
    throw new Error("Failed to complete OAuth handshake with OneDrive. " + response.data.error);
  } else {
    return response.data;
  }
};

var getIdentity = function (accessToken) {
  try {
    var response = HTTP.get(
      "https://apis.live.net/v5.0/me", {
        headers: {"User-Agent": userAgent}, 
        params: {access_token: accessToken}
      });
    return response.data;
  } catch (err) {
    throw _.extend(new Error("Failed to fetch identity from OneDrive. " + err.message),
                   {response: err.response});
  }
};


OneDrive.retrieveCredential = function(credentialToken, credentialSecret) {
  return OAuth.retrieveCredential(credentialToken, credentialSecret);
};
