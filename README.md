# Ethical Hacking [![Greetings](https://github.com/larkinds/EthicalTargeting/actions/workflows/greetings.yml/badge.svg)](https://github.com/larkinds/EthicalTargeting/actions/workflows/greetings.yml)

## Inspiration
Most data collection of Internet user behavior ultimately comes from advertising's desire for **audience targeting and campaign analytics**. Constant exposés in the news and the gradual rollout of data privacy regulations are not enough to fight this **technological arms race**. Pandora's box has been opened and advertisers will not back down from having access to targeting and analytics.

Ethical Targeting envisions a world that lets advertisers use targeting and analytics while protecting privacy. We can't convert the megacorps with massive ad budgets, but we can provide an ethical alternative to the big ad networks for **SMBs who rely on effective advertising to drive revenue**.

## What it does
Ethical Targeting  **moves ad targeting to the browser**. Browsers using the Chrome extension pull from a public ledger of ads and match ads with locally stored user profiles that **never touch the Internet**. Advertisers still get audience targeting like before, but now users have complete control of their data.

While the user is surfing the web, the extension analyzes keywords and metadata of the webpages they visit, adding interests to their local user profile with a certain weight. For example, viewing several React tutorials will increase the weights of the `react`, `tutorials`, and `web development` interests in the user's profile. The higher the weight of a keyword, the more likely ads related to that keyword will be displayed to the user.

**Users have complete control over their data.** The extension offers the ability to update, remove, and switch between multiple profiles at any time **with immediate effect**. Users can block all ads related to certain keywords, disable tracking when visiting certain websites, or even disable ad personalization altogether. All of this happens offline, giving the user full confidence that their opt-out means something.

### Sample Ad
![image](https://user-images.githubusercontent.com/39817922/114228988-3b342b80-9945-11eb-88f7-87877c1c18db.png)

### Popup Window
![image](https://user-images.githubusercontent.com/39817922/114229095-6159cb80-9945-11eb-94ed-69bf45fd177e.png)

### Customize/User ad preferences Window
![image](https://user-images.githubusercontent.com/39817922/114229897-71be7600-9946-11eb-8533-0299d427931f.png)

## Try it out
**Chrome extension**  
1. [Download the extension](https://github.com/larkinds/EthicalTargeting/releases)
1. Unzip it into a folder you won't delete until you uninstall the extension
1. Open `chrome://extensions` and switch on developer mode
1. Drag the folder into the Chrome extensions tab
1. Enjoy!

Ad management UI: <https://glz5x-riaaa-aaaab-aa6bq-cai.ic0.app>

## Development

**Prerequisites**  
- [Yarn](https://yarnpkg.com/)
- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) if building on Windows, due to a Bash build script

Building is straightforward:

```sh
git clone https://github.com/larkinds/EthicalTargeting.git
cd EthicalTargeting
yarn install
yarn build
```

## How we built it
The backend service runs on the [DFINITY Internet Computer](https://dfinity.org/), a decentralized network of independent data centers enabling a public ad network that is:

* **Transparent:** anyone can see what ads are in the ledger (past/present/future) and who funded them  
* **Private:** nobody will know who clicked on an ad or what their interests/demographics are  
* **Targeted:** actually relevant to the user, making them more useful to the user and effective for the advertiser  
* **Truly open:** not stored in any one data center and controlled by community governance in the future

Browsers running our extension pull the entire ledger of ads from the backend service, and filter them through the user's current profile to find ads that are relevant and useful to that specific person.

The extension is built with React, Tailwind CSS, HTML, and vanilla JavaScript.

## Challenges we ran into
* **Motoko:** The first-party language of the Internet Computer, at just 17 months old, is missing a lot of standard library functions and features common in older languages. Learning a new language from incomplete documentation was a welcome challenge.
* **Chrome extension documentation:** Not to be outdone by Motoko, Chrome's extension API has incomplete and inconsistent documentation. Shout-out to Stack Overflow and our fellow pod members for helping us figure out the API!
* **Webpage categorization:** Big Tech has put millions of dollars into how they infer our interests, and attempting to recreate that in just 3 weeks was a daunting task. We're proud of how well our demo interests generator works.
* **Extension bundling:** Chrome extensions have additional restrictions on what libraries and npm packages can be used, resulting in confusing errors and convoluted bundling setups.

## Accomplishments that we're proud of
- Managing to finish such a large and complex project in just 3 weeks
- Writing a JSON serializer from scratch in Motoko, without type introspection
- The extension is able to infer user interests a lot better than expected
- Learning Chrome's Extension API and the Internet Computer environment
- As a team, we met every day and organized several pair programming sessions

## What we learned
- Motoko (and the Internet Computer)
- React
- Chrome's Extension API
- Webpack (though we ended up not using it)

## What's next for Ethical Targeting
- Finalize multi-profile support
- Add a way to disable tracking for a certain period of time, instead of having to reactivate it each time
- Add a blocklist of websites where your activity won't get tracked
- Add monetization
- Make the weight of the interests appear in the user's profile
- Finish developing the ad management console (including login system)

## Contributors
* [Larkin Smith](https://github.com/larkinds)
* [Ali Doggaz](https://github.com/Ali-Doggaz)
* [Prabal Chhatkuli](https://github.com/prabalchhatkuli)
* [James Martindale](http://github.com)

### Ethical Targeting backend service
[@jkmartindale/ethical_targeting-backend](https://github.com/jkmartindale/ethical_targeting-backend)
