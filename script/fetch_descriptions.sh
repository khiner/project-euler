#!/bin/sh

# --------------------------------------------------------------------
# Fetches minimal problem description HTML from the Project Euler site
# for each solution component file, and saves them in
# `problem_descriptions/Problem{n}.html`.
# --------------------------------------------------------------------
# Run as `npm run update:descriptions`
# --------------------------------------------------------------------

for filename in src/components/solutions/* ; do
    problem_number=$(echo $filename | tr -d -c 0-9)
    url="https://projecteuler.net/minimal=$problem_number"
    destination="problem_descriptions/Problem$problem_number.html"
    echo "Fetching description $url to $destination"
    curl -s $url > $destination
done
