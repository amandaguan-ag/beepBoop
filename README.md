# _Mr. Roboger's Neighborhood_

#### By _**Amanda Guan**_

## Description

_A program that takes a number input and displays an array with numbers and custom messages._

## link to Github Page

_Not available _

## Technologies Used

- _HTML_
- _CSS_
- _bootstrap_
- _Javascript_

## Setup/Installation Requirements

- _Clone this repository to your desktop_
- _Navigate to the top level of the directory_
- _Open index.html_

## Known Bugs

- No known bugs

## License

_Copyright (c) 2023, Amanda GUan_

## Contact Information

Amanda Guan <ag.amandaguan@gmail.com>

# TDD:
## _Describe: describe count(numInput,name)_

| Test Description  | Input Example (Code) | Expected Output Example |
| ------------- | ------------- | ------------- |
| "It should return an array of numbers from 0 to the user's inputted number"  | count(5, null); | '0, 1, 2, 3, 4, 5' |
| "It should return "won't you be my neighbor" for number 3" | count(3, null); | "0, 1, 2, Won't you be my neighbor?" |
| "It should return "beep" if a user inputs a number that includes 3"  | count(13, null); | "0, 1, 2, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor?" |
| "It should return "boop" for number 2"  | count(2, null); | '0, 1, Boop!' |
| "It should return "beep" if a user inputs a number that includes 2"  | count(12, null); | "0, 1, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, Boop!" |
| "It should return "boop" for number 1"  | count(1, null); | '0, Beep!' |
| "It should return "beep" if a user inputs a number that includes 1"  | count(11, null); | "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!" |
| "It should return "Won't you be my neighbor, [nameInput]?" if a user inputs a name"  | count(3, "Amanda"); | "0, Beep!, Boop!, Won't you be my neighbor, Amanda?" |