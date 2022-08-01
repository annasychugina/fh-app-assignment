# Documentation ✍️

### How to start
```
npm install (--force)
npm run start
// tests
npm run test
```


I've chosen to use [feature-sliced](https://feature-sliced.design/) design approach because it's 
1) well documented architectural approach with rules and conventions on organizing code. 
2) I have successfully used the modified approach in several projects. It also helps to separate into modules (in future it can be lerna and packages shared with web)

I've chosen to use [redux-toolkit](https://redux-toolkit.js.org/) state management because
1) in Find Hotel you use redux and in mobile app, I think, it's better to use the same state management.
2) Less code, has convenient wrappers
3) Good for mocking and testing
4) rtk-hooks and good approaches for data caching (very similar to the apollo client and react-query library)

I've chosen to use [styled-components](https://styled-components.com/) because
1) they are really good for building themes and dark mode (I used styled-components in all my previous projects)
2) cleaner JSX code
3) Extendable components, very good for building design-system

I've chosen to use [react-native-paper](https://reactnativepaper.com/) for some ui elements (Divider, TextInput)

I've chosen [i18next](https://www.i18next.com/). I think that from the very beginning it is necessary to introduce localization into the project so that in the future there is less refatcoring code
Also keep the texts in one place,  in the future you can divide the texts by features and store them inside each feature.
Also it has tools for customization multiple text (see features/guest-room-selector/GuestRoomSelector.tsx)

There was no time to write tests on components using [testing-library](https://testing-library.com/) and  [testing-library-hooks](https://www.npmjs.com/package/@testing-library/react-hooks)

I would write first on GuestRoomSelector ( interactive with removing/ adding/ updating room items and children ages)
- Add room
- Remove all room items besides the first item
- Remove children ages and set counter

I wrote tests only on guests reducer because it's the most important business logic part and  it can be tested quickly and easily

When scaling a project it is very important to start writing e2e tests (I would use https://github.com/wix/Detox or https://codecept.io/detox/#a-test )

### Deep-linking and navigation

I use react-navigation (see screens/HomeScreen/HomeScreen.tsx). In app/navigators other navigation stacks (GuestsSelectorStack, MainStack etc with context) can be and import in Root. 

### Deeplinks

```
expo install expo-linking
```

```
{
  "expo": {
    "scheme": "guests"
    ...
  }
}
```

```
// App component
 const [linkData, setLinkData] = useState(null)
    const onReceiveUrl = (event) => {
        const data = Linking.parse(event.url)
        setLinkData(data)
    }

    const prefix = Linking.makeUrl('/')
    const linking= {
        prefixes: [prefix],
        config: {
            screens: {
                [EScreens.HOME_SCREEN]: 'Home',
                // list of screens
            }
        }
    }
    useEffect(() => {
        async function getInitialUrl() {
            const initialUrl = await Linking.getInitialUrl();
            if (initialUrl) setLinkData(Linking.parse(initialUrl))
        }
        Linking.addEventListener('url', onReceiveUrl)
        if (!linkData) {
            getInitialUrl()
        }
        return {
            Linking.removeListener('url')
        }
    }, [])
    
    <NavigationContainer linking={linking}> ... </NavigationContainer>
```
