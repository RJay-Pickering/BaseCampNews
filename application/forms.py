from django.contrib.auth.forms import UserCreationForm
from .models import Customer

class CreateUserForm(UserCreationForm):

    new_name = "User123"

    class Meta:
        model = Customer
        fields = ['username', 'email', 'password1', 'password2', 'interest1', 'interest2', 'interest3']