# from django.http import JsonResponse
# from django.views.decorators.http import require_http_methods
# import json
# from .models import Dog, State, Owner
# from .encoders import AutomobileVOEncoder, TechnicianEncoder, ServiceAppointmentEncoder


# @require_http_methods(["GET", "POST"])
# def api_dogs(request):
#     if request.method == "GET":
#         dogs = Dog.objects.all()
#         return JsonResponse(
#             {"dogs": dogs},
#             encoder=ServiceAppointmentEncoder,
#         )
#     else:
#         mostrar = json.loads(request.body)
#         try:
#             if "technician" in mostrar:
#                 technician = Technician.objects.get(name=mostrar["technician"])
#                 mostrar["technician"] = technician
#         except Technician.DoesNotExist:
#             return JsonResponse(
#                 {"message": "No technician is name like that, pls try again"},
#                 status=400,
#             )
#         appointment = ServiceAppointment.objects.create(**mostrar)
#         return JsonResponse(
#             appointment,
#             encoder=ServiceAppointmentEncoder,
#             safe=False,
#         )

