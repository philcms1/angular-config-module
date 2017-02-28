(function() {
    'use strict';
    angular.module('appConfig').provider('AppConfig', ['$log', AppConfig]);

    function AppConfig($log) {

        var apps_config = {
            'trivia-app': {}
        };

        return {
            set: function(app_name, config_values) {
                angular.extend(apps_config[app_name], config_values);
            },
            $get: function($rootElement) {
                $log.info('Configuring application: ' + $rootElement[0].getAttribute('id'));
                var app_config = apps_config[$rootElement[0].getAttribute('id')];
                if (app_config) {
                    return app_config;
                } else {
                    return {};
                }
            }
        };
    }
}) ();
