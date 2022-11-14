"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from urllib.error import URLError
from django.contrib import admin
from django.urls import path
from application.views import *

# from django.contrib import admin
# from django.urls import path
# from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homeRedirect),
    path("home-page/", new_home_page),
    path('home/', test_page, name='home'),
    path('signin/', sign_in, name='signin'),
    path('signup/', sign_up, name='signup'),
    path('logout/', logoutUser, name='logout'),
    path('search-page/', foryou, name="foryou"),
    path('setting/', settingStyle, name="settings"),
    # path('covid/', navCovid, name="covid"),
    # path('drink/', navDrink, name="drink"),
    # path('entertainment/', navEntertain, name="entertain"),
    # path('food/', navFood, name="food"),
    # path('health/', navHealth, name="health"),
    # path('livestyle/', navLivestyle, name="livestyle"),
    # path('shopping/', navShopping, name="shopping"),
    # path('stocks/', navStocks, name="stocks"),
    # path('travel/', navTravel, name="travel"),
    # path('trending/', navTrending, name="trending"),
    # path('weather/', navWeather, name="weather"),
    # path('sports/', sport, name="sport")
]
