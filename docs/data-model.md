# Data Models
    will contain a description of the domain or database schema with the properties that you'll collect with their data types

<<<<<<< HEAD



# Dog Information

| Name | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| breed | string | no | no |
| size | int | no | no |
| gender | string | no | no |
| picture_url | string | no | no |

# Contact Information

| Name | Type | Unique | Optional |
|-|-|-|-|
| email | string | no | yes |
| phone | int | no | yes |
| area  | string | no | yes |
=======
## Dogs

| Property | Type | Unique | Optional |
|-|-|-|-|
| Dog's name | string | no | no |
| Age | string | no | no |
| Breed | string | no | no |
| city | referente to State | no | no |
| state | string | no | no |
| picture_url | string | no | yes |
| Description | string | no | yes |
| Distance | intiger | no | no |
| Documentation | string | no | yes |

## Dog's Owner

| Property | Type | Unique | Optional |
|-|-|-|-|
| Dog's name | string | no | no |
| email | string | yes | yes |
| Phone | string | yes | yes |
| city | referente to State | no | no |
| state | string | no | no |
| picture_url | string | no | yes |
| Description | string | no | yes |


>>>>>>> d66ab0e5d3916e176781ef0a79d163d5054a4269
