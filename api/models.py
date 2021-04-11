from django.db import models
from django.contrib.auth.models import User


class Teacher(models.Model):
    name=models.CharField(max_length=200)
    subject=models.CharField(max_length=200)

    def __str__(self):
        return self.name
    

class Book(models.Model):
    YEAR_IN_SCHOOL_CHOICES = [
        ('1st Year','1st Year'),
        ('2nd Year','2nd Year'),
        ('3rd Year','3rd Year'),
        ('4th Year','4th Year'),
        ('General','General')
    ]

    name=models.CharField(max_length=200)
    availability=models.PositiveIntegerField(default=0)
    recommended_by=models.ManyToManyField(Teacher)
    description=models.TextField(null=True,blank=True)
    year=models.CharField(max_length=8,choices=YEAR_IN_SCHOOL_CHOICES,default='General')
    image=models.ImageField(blank=True,null=True)
    author=models.CharField(max_length=200,default='unknown')

    def __str__(self):
        return self.name
    
class Review(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    main=models.TextField()
    book=models.ForeignKey(Book,on_delete=models.CASCADE)
    time=models.DateTimeField(auto_now_add=True)

