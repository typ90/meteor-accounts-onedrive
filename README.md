# accounts-onedrive

OneDrive (Microsoft Account) OAuth2 login service for use with Meteor Auth

## Package Dependencies

This login service depends on the bleeding edge changes within the Meteor Auth branch.
Only compatable with Meteor > 0.9.2

* oauth2
* oauth
* http
* underscore
* templating
* random
* accounts-base
* service-configuration

## Usage

1. `meteor add accounts-onedrive`
2. Read the 'Meteor.loginWith&lt;ExternalService&gt;' section of the [Meteor docs](http://docs.meteor.com/#meteor_loginwithexternalservice) and make sure you set up your config and secret correctly. Register the app on [Microsoft Developers](https://account.live.com/developers/applications/).  
3. Call `Meteor.loginWithOnedrive();`

## Credits

* Shamelessly based upon Google OAuth2 login service


## License
MIT
