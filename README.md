# Multiple, nested stores using React/Redux

Given the unfortunate situation where applications are not quite ready to be completely decoupled but need to be functionally decoupled, using `react-redux@6`+ can help ease the transition.

```
npm i
npm start
```

- `PrimaryApp` is the app that all others will be nested under.
- `SecondaryApp` is imported directly into `PrimaryApp`
- `ExternalApp` is passed in as a dependency
