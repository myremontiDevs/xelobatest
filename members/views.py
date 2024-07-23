from django.http import HttpResponse
from django.template import loader
from .models import Member
from django.middleware.csrf import get_token

def members(request):
  c = {'csrf_token': get_token(request)} 
  mymembers = Member.objects.all().values()
  template = loader.get_template('all_members.html')
  context = {
    'mymembers': mymembers,
    'token': c
  }
  return HttpResponse(template.render(context, request))

def details(request, id):
  mymember = Member.objects.get(id=id)
  template = loader.get_template('details.html')
  context = {
    'mymember': mymember,
  }
  return HttpResponse(template.render(context, request))

def add(request):
    if request.method == "POST":
        user_data = Member(
            firstname=request.POST.get('name'),
            lastname=request.POST.get('lastname'),
            age=request.POST.get('age')
        )
        user_data.save()

    members = Member.objects.all()  # Fetch all members to pass to the template
    template = loader.get_template('all_members.html')
    context = {
        'mymembers': members
    }
    return HttpResponse(template.render(context, request))