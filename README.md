# Next.js 15 Error Boundary Issue

This repository demonstrates a bug in Next.js 15 where an error thrown within a page component is not properly caught by the default error boundary.  Instead of displaying a useful error message, the page renders blank.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You'll see a blank page instead of an error message.

## Expected Behavior

A proper error message should be displayed by the Next.js error boundary.

## Actual Behavior

A blank page is displayed.

## Solution

The solution is available in the `solution` branch. It shows how to use a custom `ErrorBoundary` component to catch and handle the error gracefully.