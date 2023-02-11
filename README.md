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
- _describe count(numInput)_
- _Test: "It should return an array of numbers from 0 to the user's inputted number"_
- _Code: count(5);_
- _Expected Output: '0, 1, 2, 3, 4, 5'_

-_Test: "It should return "won't you be my neighbor" for number 3"_
-_Code: count(3);_
-_Expected Output: "0, 1, 2, Won't you be my neighbor?"_

-_Test: "It should return "beep" if a user inputs a number that includes 3"_
-_Code: count(13);_
-_Expected Output:  "0, 1, 2, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor?"_

-_Test: "It should return "boop" for number 2"_
-_Code: count(2);_
-_Expected Output: '0, 1, Boop!'_

-_Test: "It should return "beep" if a user inputs a number that includes 2"_
-_Code: count(12);_
-_Expected Output: "0, 1, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, 10, 11, Boop!"_

-_Test: "It should return "beep" for number 1"_
-_Code: count(1);_
-_Expected Output: '0, Beep!'_

-_Test: "It should return "beep" if a user inputs a number that includes 1"_
-_Code: count(11);_
-_Expected Output: "0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!"_
