# Vue Polling App

This is a polling app that uses Vue at the front-end and Firebase at the backend. It uses the Option API. And, within it utilizes the `created()` life cycle method the most and a bunch of other options.

The Firebase logic is separated as much as possible to keep the code clean and abstract. All of it is in the [services](https://github.com/rhen99/Polling-App/tree/main/src/services) folder. Both the authentication and collection logic are separated in their own files. Most of the methods in which are in `async await`.

### What does the app do?

As I've said, this is a polling app. It's a voting app that only takes one vote per user and add it up to a total. To create a poll, a user must first sign in bui a voter don't have to.

### Struggles & Compromises

- BootstrapVue isn't fully compatible with Vue 3 yet.
- Apparently, Firebase doesn't have a way to delete a document on timeout.
