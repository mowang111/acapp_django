from django.http import HttpResponse

def index(request):
    line1='<h1 style="text-align:center">术士之战</h1>'
    line4='<a href="/play">进入游戏界面</a>'
    line3= '<hr>'
    line2='<image src="https://th.bing.com/th/id/OIP.Hk7lku2bJ_onwsBNiGrFFwHaE9?w=249&h=180&c=7&r=0&o=5&pid=1.7" width=1500>'
    return HttpResponse(line1+line4+line3+line2)


def play(request):
    line1='<h1 style="text-align:center">游戏界面</h1>'
    line4='<a href="/">进入主界面</a>'
    return HttpResponse(line1+line4)
