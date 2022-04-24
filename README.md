# Find a Coach App

## Table of Contents

- [Overview](#overview)
  - [Introduction](#introduction)
  - [Thecnical Details](#technical-details)
- [Using the Application](#using-the-application)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Run the Backend](#run-the-backend)
  - [Run the Application](#run-the-application)
- [Todos](#todos)
- [Contributions](#contributions)

## Overview

### Introduction

Mock application to find coaches for given areas. The application presents a list of coaches that are set to be for different areas (e.g. frontend development, project management, etc.). You can filter coaches by area, check the details of each caoch, contact a coach, and check the requests sent to the coaches.

### Technical Details

The application is based on [Vue.js](https://vuejs.org/), written in [TypeScript](https://www.typescriptlang.org/), and uses [Vuex](https://vuex.vuejs.org/) for state manager. The data is obtained from a backend that is set with [JSON Placeholder Server](https://github.com/typicode/json-server).

The store of the application uses modules to sectionized the state. The following modules are used:

- **coaches**: stores the list of coaches
- **areas**: stores the list of areas
- **requests**: stores the list of requests

The coaches and areas modules use RxJS to manage the stream of data. This allows more reactivity when fetching the data. The coaches have a favorite property that is found on the local storage. The coaches are fetched after the areas. With this two points in mind, when setting the coaches, we merge the favorite and areas data to the coaches object. The requests module uses a more basic approach and stores the data as a plain object.

> Note:
>
> The requests module will start using Observables as well. This will allow to merge the coaches the request was sent to to the stream of data.

## Using the Application

### Installation

1. Clone the repository: `git clone https://github.com/darwin-luque/find-coach-app.git`.
2. Install dependencies: `yarn install`.

### Configuration

1. Create a `.env` file.
2. Copy the content from `.env.example` to `.env`.

### Run the Backend

1. Create a `db.json` file in the root of the project.
2. Copy the content from `db.example.json` to `db.json`
3. Adjust as desired the content of `db.json`. Make sure to keep the same structure.
4. Run the server: `yarn backend`

### Run the Application

1. Make sure the backend is running. Check [Run the Backend](#run-the-backend)
2. Run the application: `yarn serve`

## Todos

- Make the application responisive.
- Add Unit testing.
- Add E2E testing.

## Contributions

Please feel free to create a PR to improve the application or add any suggestion or feature.
