from django.shortcuts import render, redirect
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import logout, login, authenticate
from django.contrib.auth.forms import UserCreationForm


# Create your views here.

def test_page(request):
    
    return render(request, "index.html")

def sign_in(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password = password)
        if user is not None:
            login(request, user)
            return redirect("home")
        else:
            messages.info(request, "Username or Password is incorrect")

    return render(request, 'sign-in.html')

def sign_up(request):
    form=CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, "Created " + username)
            return redirect('signin')
    context = {'form':form}

    return render(request, 'sign-up.html', context)

def logoutUser(request):
	logout(request)
	return redirect('home')

def navCovid(request):
    return render(request, 'nav/covid.html')

def navDrink(request):
    return render(request, 'nav/drink.html')

def navEntertain(request):
    return render(request, 'nav/entertainment.html')

def navFood(request):
    return render(request, 'nav/food.html')

def navHealth(request):
    return render(request, 'nav/health.html')

def navLivestyle(request):
    return render(request, 'nav/livestyle.html')

def navShopping(request):
    return render(request, 'nav/shopping.html')

def navStocks(request):
    return render(request, 'nav/stocks.html')

def navTravel(request):
    return render(request, 'nav/travel.html')

def navTrending(request):
    return render(request, 'nav/trending.html')

def navWeather(request):
    return render(request, 'nav/weather.html')
