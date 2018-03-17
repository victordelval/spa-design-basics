# view
from django.views.generic import TemplateView
from django.conf import settings

# api
from django.http import JsonResponse
from rest_framework.views import APIView
from aggregator.views import AggregatorPageView, UserPreferencesMixin


###############################################################################
# VIEW (SPA)
###############################################################################

class SPAView(TemplateView):
    '''Main realm page.'''

    http_method_names = ['get']
    # template_name = 'frontend/realm_spa.html'
    template_name = 'frontend/spa.html'

    def get_context_data(self, **kwargs):
        options = {}
        options['debug'] = settings.DEBUG
        # options['debug'] = False
        return options


###############################################################################
# API (WEB SERVICES)
###############################################################################

class UserConfigSPAWebService(AggregatorPageView, UserPreferencesMixin, APIView):
    '''
    Service to request the user config, which includes ui permissions and custom
    visualization preferences.
    '''

    def get(self, request):

        """
            USER
            ----
                - name
                - role (user / superuser)

            PREFERENCES
            -----------
                - autorefresh_interval
                - filter_acknowledged
                - filter_disabled_checks

            APP
            ---
                - version
                - logged_users
                - num_sessions
                - header_logo
                - title
                - menu
                    - user
                    - link
                    - name
                    - icon
                - modal_logs
                - time_limit
                - sections

            PERMISSION
            ----------
                -> REALMS
                    - realm_list
                    - inactive_realm_list

                -> UI_STRUCTURE
                    - dashboard
                    - global
                    - realm
                    - host
                    - realm_extra_apps
                    - host_extra_apps

                -> URLS
                    - urls allowed

                -> ACTIONS
                    - actions allowed
        """

        user_config = {}

        # USER INFO

        user = request.user
        user_config['user'] = {
            'name': user.username,
            'superuser': user.is_superuser
        }

        # get the user options
        options = self._set_options()

        # convert logged_users list to length number
        options['logged_users'] = len(options['logged_users'])

        # CONTROL
        # user_config['options'] = options

        # TODO - undo this devel hack
        # options['menu'][0]['link'] = '/spa'


        # APP CONFIG
        user_config['app'] = {
            'version': options['version'],
            'logged_users': options['logged_users'],
            'num_sessions': options['num_sessions'],
            'header_logo': options['header_logo'],
            'title': options['title'],
            'menu': options['menu'],
            'modal_logs': options['modal_logs'],
            'time_limit': options['time_limit'],
            'sections': options['sections'],
        }

        # PREFERENCES
        user_config['preferences'] = self.get_user_preferences(request.user)


        # PERMISSIONS
        user_config['permissions'] = {}

        # PERMISSIONS - REALMS
        user_config['permissions']['realms'] = {
            'realm_list': options['realm_list'],
            'inactive_realm_list': options['inactive_realm_list'],
        }

        # PERMISSIONS - UI STRUCTURE
        user_config['permissions']['ui_structure'] = {
            'dashboard': {
                'widgets': [
                    {
                        'template': 'dashboard-menu',
                        'scope': 'dashboard'
                    }
                ]
            },
            # 'global': options['global'],
            # 'global': {
            #     'widgets': [
            #         {
            #             'name': 'globalAggregator',
            #             'template': 'global-aggregator',
            #             'scope': 'global'
            #         }
            #     ]
            # },
            'realm': options['user_permissions_realm'],
            'host': options['user_permissions_host'],
            'realm_extra_apps': options['user_permissions_realm_extra_apps'],
            'host_extra_apps': options['user_permissions_host_extra_apps'],
        }

        # PERMISSIONS - URLS
        user_config['permissions']['urls'] = options['user_permissions_urls']

        # PERMISSIONS - ACTIONS
        user_config['permissions']['actions'] = options['user_permissions_actions']

        return JsonResponse(data=user_config, safe=False)
