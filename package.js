Package.describe({
  summary: "Onedrive OAuth flow",
  version: "0.3.1"
});

Package.on_use(function(api) {
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use('underscore', 'client');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('accounts-base', ['client', 'server']);
  api.use('service-configuration', ['client', 'server']);

  api.export('Onedrive');


  api.add_files(['onedrive_configure.html', 'onedrive_configure.js'],'client');

  api.add_files('onedrive_common.js', ['client','server']);
  api.add_files('onedrive_server.js', 'server');
  api.add_files('onedrive_client.js', 'client');
});
