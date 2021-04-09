# Ethical Hacking [![Greetings](https://github.com/larkinds/EthicalTargeting/actions/workflows/greetings.yml/badge.svg)](https://github.com/larkinds/EthicalTargeting/actions/workflows/greetings.yml)

## Inspiration
Most data collection of Internet user behavior ultimately comes from advertising's desire for **audience targeting and campaign analytics**. Constant exposés in the news and the gradual rollout of data privacy regulations are not enough to fight this **technological arms race**. Pandora's box has been opened and advertisers will not back down from having access to targeting and analytics. That inspired us to come up with this project in order to help people protect their privacy while making the ad-targeting process more accurate and reliable.

## What it does
"Ethical Targeting"  **moves ad targeting to the browser**. Browsers pull from a public ledger of ads and match ads with locally stored user profiles that **never touch the Internet**. The chrome extension introduces a tracking feature: while the user is surfing, the keywords of the websites' metatags he visits will get added to his profile, with a certain weight. E.g: If the user consults some React tutorials, the keywords React, Tutorials, and Web Development will be added to his profile with an important weight.
The more the weight of a keyword increases, the more likely ads related to that keyword will be displayed to the user.  
And to give the users complete control over their data, the chrome extension offers them the possibility to update, remove, and switch between multiple profiles at any time **with immediate effect**, blacklist all ads related to certain keywords, disable tracking when visiting certain websites, or even disable ad personalization altogether. 
We can't convert the megacorps with massive ad budgets, but we can provide an ethical alternative to the big ad networks for **SMBs who rely on effective advertising to drive revenue**.

### Sample Ad
![image](https://user-images.githubusercontent.com/39817922/114228988-3b342b80-9945-11eb-88f7-87877c1c18db.png)

### Popup Window
![image](https://user-images.githubusercontent.com/39817922/114229095-6159cb80-9945-11eb-94ed-69bf45fd177e.png)

### Customize/User ad preferences Window
![image](https://user-images.githubusercontent.com/39817922/114229897-71be7600-9946-11eb-8533-0299d427931f.png)


## How we built it
This service runs on the [DFINITY Internet Computer](https://dfinity.org/), a decentralized network of independent data centers enabling a public ad network that is:

* **Transparent:** anyone can see what ads are in the ledger (past/present/future) and who funded them  
* **Private:** nobody will know who clicked on an ad or what their interests/demographics are  
* **Targeted:** actually relevant to the user, making them more useful to the user and effective for the advertiser  
* **Truly open:** not stored in any one data center and controlled by community governance in the future

The DFINITY backend is connected to our [Chrome Extension](), that takes care of building and storing the user's profile, tracking him, and displaying the relevant ads in his browser. The UI of the extension was built using React, JS, HTML, and CSS, and the entire logic of the extension was built using vanilla JS.

## Challenges we ran into
- Learning MOTOKO from scratch
- Creating a JSON serializer from scratch for MOTOKO, as it isn't implemented in the language. (https://github.com/jkmartindale/ethical_targeting-backend/blob/staging/src/ads_ledger/JSON.mo#L152)
- Filtering the large number of keywords associated to each website
- Understanding how chrome extensions work while dealing with a bad documentation (shoutout to our pod members and to StackOverflow for helping us figure out some things about chrome's API) 
- We didn't know that some npm packages weren't allowed in chrome extensions, and we lost a lot of time figuring out that it was the source of the errors we had.

## Accomplishments that we're proud of
- The project turned out to be way bigger than what we initially expected, but we still managed to finish it in time
- The accuracy/relevance of the ads is way better than what we thought it would be
- Learning MOTOKO and chrome extension's API
- As a team, we had a meeting every day and organized plenty of pair programming sessions
## What we learned
-MOTOKO
-React
-Chrome's API
-Webpack ( we ended up not using it though )
## What's next for Ethical Targeting
- Add a way to disable tracking for a certain period of time, instead of having to reactivate it each time
- Add a blacklist of websites where your activity won't get tracked
- Add monetization
- Make the weight of the interests appear in the user's profile


## How to use
- Download the extension from this link: https://www.file.io/download/NIghuGalUpwL
- Unzip it
- drag into the chrome extension' tab
- Enjoy!

## Contributions
* [Larkin Smith](https://github.com/larkinds)
* [Ali Doggaz](https://github.com/Ali-Doggaz)
* [Prabal Chhatkuli](https://github.com/prabalchhatkuli)
* [James Martindale](http://github.com)

### Ethical Targeting Dfinity backend
[Dfnity backend repo](https://github.com/jkmartindale/ethical_targeting-backend)
