# MERN stack boilerplate

A boilerplate for building web app with the MERN stack, inspired by [this](https://github.com/bradtraversy/devconnector_2.0) project by Brad Traversy.

## Installation

Use the npm package manager to install node modules.

```bash
npm install # installs backend node modules
cd client # switch to frontend client directory
npm install # installs frontend node modules
cd .. # return to project root directory
```

## Add configurations

Add two `.json` configuration files in the `config` directory, and save them as `default.json` and `production.json`

The configuration files should contain the following:

```bash
{
  "mongoURI": #Your MongoDB connection URI wrapped in double-quotes
  "jwtSecret": #Any string as your JSON web token secret
}
```

## Usage

In the project root directory, run this command:

```bash
npm run dev
```

## Heroku Deployment

In the project root directory, run this command:

```bash
heroku create #Create your app on Heroku
git push heroku master #Deploy your app to Heroku

```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
