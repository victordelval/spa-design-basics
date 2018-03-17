from django.conf.urls import url, include
from django.contrib.auth.decorators import login_required

from frontend.views import SPAView, UserConfigSPAWebService


# spa view
VIEWS_PATTERNS = [
    url(regex=r'$',
        view=login_required(SPAView.as_view()),
        name='spa'),

]

# config endpoint
API_PATTERNS = [
    url(regex=r'user-config/$',
        view=login_required(UserConfigSPAWebService.as_view()),
        name='user-config'),
]

urlpatterns = [

    url(r'^api/', include(API_PATTERNS)),
    url(r'^', include(VIEWS_PATTERNS)),
]