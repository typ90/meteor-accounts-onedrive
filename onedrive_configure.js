Template.configureLoginServiceDialogForOnedrive.siteUrl = function () {
  return Meteor.absoluteUrl();
};

Template.configureLoginServiceDialogForOnedrive.fields = function () {
  return [
    {property: 'clientId', label: 'Client ID'},
    {property: 'secret', label: 'Client Secret'}
  ];
};
