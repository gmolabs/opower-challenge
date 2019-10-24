# Opower coding Challenge

npm start, http://localhost:3000/

https://gmolabs.github.io/opower-challenge/

Implementation of wireframe displaying power usage information to a customer. Designed to be responsive across different viewports and to delight the user with dynamic infoviz.

## Features

- Displays infographic with handmade vector graphics
  - Uses dotted outline vector graphic when less than one tree or car saved/spent
  - Toggle switches between tree and car images...also changes explanatory text
- Explanatory text and icon change based on data
  - Increased energy usage shows warning icon and neutral-tone text
  - Equal usage shows checkmark and neutral-tone text
  - Decraesed usage shows thumbsup and congratulatory text
  - Text grammar adjusts to accommodate singular car or tree savings/expenditures
- Dynamic Bar Chart using recharts library
- Responsive layout for desktop/mobile viewport widths
- Functional React Components using Hooks
- GUI to change data dynamically
- Transition animations
- Custom hook to use local storage to save state whne page refreshes

## Design Decisions

- Switched the layout such that the explanatory text comes first. On mobile, we want this context before being presented with the icons of the cars.
- Moved toggle above the car/tree icons to reduce jitter when changing icon.
- Just show the number of cars/trees saved, rather than outlines in a "pack" of cars. (Savings are absolute values, not a percentage of traffic taken of road).
