# Data Models
    will contain a description of the domain or database schema with the properties that you'll collect with their data types

## Dogs

| Property | Type | Unique | Optional |
|-|-|-|-|
| Dog's name | string | no | no |
| Age | integer | no | no |
| Breed | string | no | no |
| picture_url | string | no | yes |
| Description | string | no | yes |
| Documentation | string | no | yes |
| Owner | integer | no | no |

## Dog's Owner

| Property | Type | Unique | Optional |
|-|-|-|-|
| name | string | no | no |
| email | string | yes | yes |
| Phone | string | yes | yes |
| state | string | no | no |
| Description | string | no | yes |

