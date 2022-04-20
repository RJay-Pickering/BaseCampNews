from django.contrib import admin

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CreateUserForm
from .models import Customer


class CustomUserAdmin(UserAdmin):
    add_form = CreateUserForm
    model = Customer
    list_display = ('email', 'is_staff', 'is_active',)
    list_filter = ('email', 'is_staff', 'is_active',)
    fieldsets = (
        (None, {'fields': ('email', 'password', 'username', 'interest1', 'interest2', 'interest3')}),
        ('Permissions', {'fields': ('is_staff', 'is_active')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(Customer, CustomUserAdmin)
