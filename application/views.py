from django.shortcuts import render, redirect
from .forms import CreateUserForm
from .models import Customer
from django.contrib import messages
from django.contrib.auth import logout, login, authenticate, update_session_auth_hash
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.contrib.auth.models import User, Group


# Create your views here.

def test_page(request):
    
    return render(request, "index.html")

def sign_in(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        usern = Customer.objects.get(email = email)
        messages.info(request, usern)
        cus = authenticate(request, email=email, password=password)
        messages.info(request, cus)

        if cus is not None:
            login(request, cus)
            return redirect("home")
        messages.info(request, "Username or Password is incorrect")

    return render(request, 'sign-in.html')

def sign_up(request):
    form = CreateUserForm()
    if request.method == "POST":
        form = CreateUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, "Created " + username)
            # group = Group.objects.get(name="Customers")
			# user.group.add(group)
            messages.success(request, "User: " + username + " has been created")
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

def settingStyle(request):
    if request.method == 'POST':
        if 'password_change' in request.POST:
            usernamed = request.user.username
            usr = Customer.objects.get(username=usernamed)
            pas = request.POST.get('old_password')
            au = authenticate(request, password=pas)
            messages.info(request, au)
            if au is not None:
                messages.info(request, 'Password Saved!')
                usr.set_password(request.POST.get('new_password'))
                usr.save()
            else:
                messages.info(request, 'Wrong Password!')
        elif 'username_change' in request.POST:
            username = request.user.username
            newusername = request.POST.get('new_username')
            user = Customer.objects.get(username = username)
            user.username = newusername
            user.save()
        elif 'email_change' in request.POST:
            username = request.user.username
            newemail = request.POST.get('new_email')
            emails = Customer.objects.get(username = username)
            emails.email = newemail
            emails.save()
    return render(request, 'settings.html')

# def fyp(request):
    
