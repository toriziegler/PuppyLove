# Generated by Django 4.0.3 on 2022-08-23 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('puppylove_rest', '0005_alter_owner_phone_alter_state_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='owner',
            name='phone',
            field=models.PositiveIntegerField(max_length=10),
        ),
    ]
