# Data Models
    will contain a description of the domain or database schema with the properties that you'll collect with their data types

## Dogs

| Property | Type | Unique | Optional |
|-|-|-|-|
| Name | string | no | no |
| Age | integer | no | yes |
| Breed | string | no | no |
| Image | string | no | yes |
| Description | string | no | yes |
| Gender | string | no | no |
| Size | string | no | no |
| Owner | integer | no | no |

## Dog's Owner

| Property | Type | Unique | Optional |
|-|-|-|-|
| Name | string | no | no |
| Email | string | yes | yes |
| Phone | string | yes | yes |
| State | string | no | no |
| Description | string | no | yes |

