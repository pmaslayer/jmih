from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request,'main_page/main_page.html')

def about(request):
    return render(request, 'other_page/about.html')

def offices(request):
    return render(request, 'other_page/offices.html')

def partners(request):
    return render(request, 'other_page/partners.html')

def politika_konfidentsialnosti(request):
    return render(request, 'other_page/politika_konfidentsialnosti.html')

def dogovor_oferty(request):
    return render(request, 'other_page/dogovor_oferty.html')