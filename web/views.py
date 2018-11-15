from django.shortcuts import render




def index(request):
    return render(request,'web/pages/index.html',{})

def careers(request):
    return render(request,'web/pages/careers.html',{})

def contact(request):
    return render(request,'web/pages/contact.html',{})
