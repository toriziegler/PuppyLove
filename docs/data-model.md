# Data Models
    will contain a description of the domain or database schema with the properties that you'll collect with their data types


# Location

| Name | Type | Unique | Optional |
|-|-|-|-|
| city | string | no | no |
| state | reference to State entity | no | no |


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
