# accounts-onedrive

OneDrive (Microsoft Account) OAuth2 login service for use with Meteor Auth

## Package Dependencies

This login service depends on the bleeding edge changes within the Meteor Auth branch.
Only Compatable with Meteor > 0.9.2

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
2. Read the 'Integrating with Login Services' section of [Getting Started with Auth](https://github.com/meteor/meteor/wiki/Getting-started-with-Auth) and make sure you set up your config and secret correctly.
3. Call `Meteor.loginWithOneDrive();`

## Credits

* Shamelessly based upon Google OAuth2 login service


## License
MIT