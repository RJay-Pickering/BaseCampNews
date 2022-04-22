from django.shortcuts import render, redirect
from .forms import CreateUserForm
from .models import Customer
from django.contrib import messages
from django.contrib.auth import logout, login, authenticate, update_session_auth_hash
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from django.contrib.auth.models import User, Group
import json


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
            if request.method == 'POST':
                form = PasswordChangeForm(request.user, request.POST)
                context = {'form':form}
                if form.is_valid():
                    user = form.save()
                    update_session_auth_hash(request, user)  # Important!
                    messages.success(request, 'Your password was successfully updated!')
                else:
                    messages.error(request, 'Please correct the error below.')
        elif 'username_change' in request.POST:
            username = request.user.username
            newusername = request.POST.get('new_username')
            user = Customer.objects.get(username = username)
            user.username = newusername
            user.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form}
        elif 'email_change' in request.POST:
            username = request.user.username
            newemail = request.POST.get('new_email')
            emails = Customer.objects.get(username = username)
            emails.email = newemail
            emails.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form}
        elif 'first_change' in request.POST:
            username = request.user.username
            newInterest = request.POST.get('new_first')
            Interest = Customer.objects.get(username = username)
            Interest.interest1 = newInterest
            Interest.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form}
        elif 'second_change' in request.POST:
            username = request.user.username
            newInterest = request.POST.get('new_second')
            Interest = Customer.objects.get(username = username)
            Interest.interest2 = newInterest
            Interest.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form}
        elif 'third_change' in request.POST:
            username = request.user.username
            newInterest = request.POST.get('new_third')
            Interest = Customer.objects.get(username = username)
            Interest.interest3 = newInterest
            Interest.save()
            form = PasswordChangeForm(request.user, request.POST)
            context = {'form':form}
    else:
        form = PasswordChangeForm(request.user, request.POST)
        context = {'form':form}
    return render(request, 'settings.html', context)

def foryou(request):
    with open('application/static/udata.json', 'w') as f:
        f.write("")
        f.close()

    with open('application/static/udata.json', 'a') as f:
        f.write('{"user" : "' + request.user.username + '", "interest1": "' + request.user.interest1 + '", "interest2": "' 
        + request.user.interest2 + '", "interest3" : "' + request.user.interest3 + '" }')
        f.close()

    return render(request, 'nav/fyp.html')
    
