# Generated by Django 3.1 on 2021-03-31 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='availability',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
