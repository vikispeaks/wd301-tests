# Automated test for L5

## Run the tests

```sh
npm install
npm run cy:run -- --env STUDENT_SUBMISSION_URL="https://mjzac.github.io/throw-away/"
```

You can test local server by providing a localhost url.

```sh
npm run cy:run -- --env STUDENT_SUBMISSION_URL="http://localhost:3000/throw-away"
```
