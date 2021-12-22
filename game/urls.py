from djando.urls import path
from game.views import index,play

urlpatterns = [
    path("",index,name='index'),
    path("play/",index,name='index'),
]
