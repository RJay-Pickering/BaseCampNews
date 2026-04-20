from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

from .managers import CustomerManager


class Customer(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=128, default='New_User_1953', blank="New_User_1953")
    email = models.EmailField(unique=True, default='')
    password1 = models.CharField(max_length=120)
    password2 = models.CharField(max_length=120)
    interest1 = models.CharField(max_length=50)
    interest2 = models.CharField(max_length=50)
    interest3 = models.CharField(max_length=50)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomerManager()

    def __str__(self):
        return self.email