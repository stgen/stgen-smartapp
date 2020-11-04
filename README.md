# stgen-smartapp

## Setup

To use stgen-smartapp, start by creating a mirror of this repository. Create a [new empty repository](https://github.com/new) for yourself, then run the following to clone this repository into it.

```bash
git clone --bare git@github.com:stgen/stgen-smartapp.git stgen-smartapp-bare
cd stgen-smartapp-bare
git push --mirror git@github.com:<your username>/<your repository name>
cd ..
rm -rf stgen-smartapp-bare
```

### Secrets

Add the following secrets to your repository:

- All users
  - `ST_PERSONAL_TOKEN` - Your SmartThings [personal access token](https://account.smartthings.com/tokens), with all permissions granted
- Cloud Run
  - `RUN_PROJECT` - Your Google Cloud project ID
  - `RUN_REGION` - The region for your Cloud Run instance (default: us-central1)
  - `SERVICE_NAME` - Your Cloud Run service name
  - `RUN_SA_KEY` - Your Service Account JSON with permission to use Cloud Build and deploy to Cloud Run

## Generating Typescript bindings

To generate Typescript bindings to your SmartThings, run the ["Generate Typescript Bindings"](./actions?query=workflow%3A"Generate+Typescript+Bindings") workflow using GitHub Actions. This will open a pull request for your repository with updated bindings, which you can review and merge.

This workflow is also set to run hourly, checking for changes to your home setup. Under most circumstances, you'll find up-to-date bindings waiting for you in a pull request in your repository automatically.

Once your bindings have been generated, you can write code against your devices directly, with strongly-typed Typescript bindings. For example:

```typescript
// Get the status of a switch
let status = await yourDimmerSwitchName().main.switch.getStatus();
if (status.switch == 'on') {
  // Set the switch to 75%
  await yourDimmerSwitchName().main.switchlevel.setLevel(75, 100);
  // Turn off some other switch
  await someOtherSwitch().main.switch.off();
}
```

## Create a module

From the root directory of the repository, you can create a new module by running:

```bash
npm run create-module --name=<moduleName>
```

From there, you can subscribe to events, handle custom HTTP requests, or write any other integrations.

## Deploying

This repository uses GitHub Actions to automatically deploy your SmartApp. Once your repository is set up, you can deploy by creating a [new release](./releases/new).

## Keeping your repository up to date

This repository is configured to automatically check for updates from the upstream stgen/stgen-smartapp repository and open pull requests to keep you up to date. You can also trigger [the workflow](./actions?query=workflow%3A"Check+for+updates+to+stgen%2Fstgen-smartapp") manually.
