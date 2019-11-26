
# **DesignKit Global Template Analysis**

  

1.  ### [Scripts](#scripts)

2.  ### [Styles](#styles)

3.  ### [Miscellaneous](#miscellaneous)
 

### Granite.js

Granite is added everywhere. No duplicates, just different utilities within library; clientlibrarymanager.js, jquery.js, utils.js, granite.js., lodash/modern.js. We can still use Granite via a [NPM module](https://www.npmjs.com/package/granite).

#### Krux Integration
Now Salesforce DMP (Data Management Platform)
Needed for DK2. Refactor current code. Move inline script into a pre-load library. With React, we could possibly use `componentWillMount()`. Most likely not since this is for the template, not a React app..s
 
#### Signal Implementation
The script tag is marked as removed in 9/9/2018 review. Backlog contains a [ticket](https://jira.sie.sony.com/browse/PM-8521?page=com.docminer.jira.issue-links%3Acom.kintosoft.jira.links.tab-panel) around implementation. 
Need to review this <--
- Store's Code review is an unknown. Need to review.
- For all 3rd party cookies, analysis will be necessary to gather cookie information (which includes: name, value, domain & ttl)

#### Marketing

- **Bright Tags**<br />
	- Ashley Galazia from the analytics team confirmed that this inclusion must remain. However, we should refactor the code. Must address the vulnerability of someone adding malicious tags. Perhaps we put the reference in an iFrame with sandbox to limit the external access from the iFrame.
	- We're also referencing brighttags in multiple places, including an inline script.. perhaps some we can optimize this.<br />
	- [Related ticket](https://jira.sie.sony.com/browse/DKTWO-154)
	- Bright tags tag manager has had a name change, it's all a product from [Signal](https://www.signal.co/blog/signals-tag-management-feature-now-free/)
- **Adobe Visitor API**
	- Two script tags: satellite and satelliteLib
- **App Measurement API**


#### Mbox (Test & Target)
Place script code into its own file and export as a component into appropriate layout component.
 
#### Meta tags (SEO)

Meta tags. Notes: there are a lot of meta tags here. Can we get rid of some of these? I've emailed/slacked Pedro on the SEO team.. waiting for a response.

..* `react-helmet` is a node module that allows a user to define individual head tags on each route/component. You can create a `<head>` component and pass it props.

#### Footer
Can implement footer in its own reusable component.

#### Global Object (PDC)

We have 3 inline scripts. Let's move the inline scripts into an external file. Determine which scripts can be loaded before and after DOM load. Could explore utilizing React's lifecycle methods. Eg. `componentWillMount()`, `componentDidMount()`.

Needs: User info, Analytics, Browser Information, ..

This is the PDC object after page load:

```js
Analytics: {PageInstanceID: ƒ, PageInfo: ƒ, User: ƒ, Event: ƒ, Product: ƒ, …}
Browser: {os: "unknown", device: "unknown", isSupportedBrowser: ƒ, getViewport: ƒ}
Commerce: {updateStoreOrVueLinkHref: ƒ, updateStoreLinksOnConsoles: ƒ, getGamePlatform: ƒ}
Config: {isGetHelpTopicTemplate: false, PageVars: {…}, Personalisation: {…}, Tracking: {…}}
DTM: {rs_json: Array(23), getLocaleReportSuite: ƒ, getBrowserName: ƒ}
DigitalDataAPI: {get: {…}, set: {…}, event: {…}, init: ƒ, timeStamp: ƒ, …}
ExodusRegions: {SCEJA: Array(13)}
Func: {updateBtnSniffer: ƒ}
GamePage: GAME {config: undefined}
GameTile: {DefaultImage: "//media.playstation.com/is/image/SCEA/GameTile_Default_02Jun14?$GameTile_Small$"}
GameTileTemplate: ƒ b()
Header: {PostLoginAjaxUrl: "", AgeGateThreshold: "17", DateFormat: "MM/dd/yyyy", MyPlaystationLoginUrl: "https://io.playstation.com", MyPlaystationCookieDecryptionUrl: "https://io.playstation.com/playstation/psn/decrypt", …}
Locale: {Mappings: Array(13), Locale: Array(1), matchLocale: ƒ, setLocale: ƒ, getLocale: ƒ}
MyPlaystationProfile: {checkingUserSignIn: false, signedUserData: {…}, callbacks: Array(0), getSignedUserData: ƒ, redirectToLogin: ƒ, …}
Navigation: {resizeToTablet: ƒ}
Profile: {loggedIn: false, setLoggedIn: ƒ, isLoggedIn: ƒ, setContentToId: ƒ, setContentToSmallAvatar: ƒ, …}
Rating: {PRS: Array(12), SRS: Array(0)}
Region: {Regions: {…}, matchRegion: ƒ, setRegion: ƒ, getRegion: ƒ, getExodusRegion: ƒ, …}
SC: {vars: {…}}
User: {}
Utilities: {CSS: {…}, Element: {…}, String: {…}, URI: {…}}
addProperty: ƒ (obj, name, val)
cqpagepath: "/content/pdc/us/en_US/home.html"
funcQueue: PDCFunctionQueue {queue: Array(13)}
getAgeFromSequence: ƒ (o)
getEntityDefFromMeta: ƒ (j,i)
isLiveURL: ƒ isLiveURL(hostString)
isUserConsentedCookie: ƒ ()
isVisitorAgeKnown: ƒ ()
isVisitorOldEnough: ƒ (l)
liveURLs: (3) ["www.playstation.com", "playstation.com", "secure.us.playstation.com"]
newWindow: ƒ (f,d,b)
showPageAgeGate: ƒ ()
ssoAuthenticate: ƒ ()
```

As you can see, there are many empty function calls within the object, perhaps we can remove.

#### Adobe.118n
Need investigation

#### DTM/Launch Integration
Needs investigation

#### GDPR/CCPA
Needs investigation

#### Miscellaneous
1. Google Ad Services
2. JQuery (can remove since we're using React). ['If you think you need JQuery in your React app, you're doing it wrong']([https://medium.com/@wisecobbler/if-you-think-you-need-jquery-in-your-react-app-you-re-doing-it-wrong-77899ed7217e](https://medium.com/@wisecobbler/if-you-think-you-need-jquery-in-your-react-app-you-re-doing-it-wrong-77899ed7217e))
		- Will need to find React solution for cookie management

## Styles

#### Bootstrap
Can remove since we're using React.

### Can utilize similar SCSS structure that currently exists.
