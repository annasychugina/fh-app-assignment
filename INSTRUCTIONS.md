# FindHotel Mobile Application Engineer Assignment

Thanks for applying for the Mobile Engineer position at FindHotel 🎉

This assignment is designed to evaluate your mobile engineering skills. The focus is on technical proficiency, design implementation and cross platform aspects. It will mimic a real life feature of our future application, a Guest and Room selector.

## The assignment: Guest and Room Selector component

When searching for accommodations, FindHotel customers are required to provide the number of guests and rooms for that particular stay. We use the provided information to search for available hotels based on the user's input.

Check the following screenshots for the designs to build. You can focus on the Guest and Room Selector, **building the home screen is not required**.

| Home screen                     | Guest and Room Overlay                                                      | Guest and Room Overlay with more rooms                                                                         |
| ------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ![Home](Home.jpg "Home screen") | ![Guest and Room Overlay](GuestPicker-Default.jpg "Guest and Room Overlay") | ![Guest and Room Overlay with more rooms](GuestPicker-More-Rooms.jpg "Guest and Room Overlay with more rooms") |

### Time to spend on the assignment ⏳

We don't assign a fixed time deadline for it, but after you’ve read the assignment, please let us know when you’re planning to complete it. After you complete the assignment we'll review it internally.
As said, feel free to make some concessions under time pressure. **Please, [document your concessions and decisions](DOCUMENTATION.md) before sharing the assignment with us.**

### Next steps 🔜

After receiving your solution, we'll perform a code review. You should receive communication in a few days after submitting the assignment.

- if we evaluate your assignment positively, we'll schedule a technical interview to discuss the results together
- if we evaluate otherwise, we'll share our feedback and findings with you

### Business requirements

#### Input and output

The component should receive its initial state as a string that is deep-linkable, allow the user to update the state via manipulating the UI, and emit its output as a serialized string to be shared with others. You should be able to pass the Guests and Rooms configuration in via the URI in this encoded manner. The component should have an `onChange` property that is called with the serialized string when the component state is "comitted" (via the Search button) to allow for sharing.

The rules for the output format are the following:

- Rooms are separated by pipe `|`
- Adults and children are separated by colon `:`
- Children ages are separated by comma `,`

##### Examples

- `1:4,6|3` → Two rooms: one room with one adult and two children aged four and six; and the other room with three adults and no children
- `3` → One room with three adults and no children
- `2:4` → One room with two adults and one child aged four
- `1:0,13,16` → One room with one adult and three children (aged zero, thirteen and sixteen)

Note: Keep in mind this is the serialized representation of a valid component state, you can keep a different intermediate data structure of your choice to manage internal state.

#### Functional requirements

These are the requirements the component need to abide to be deemed functional.

- [ ] Up to eight rooms can be added
- [ ] Each room has at least one adult and up to a maximum of five
- [ ] Each room has zero or more children up to a maximum of three
- [ ] Each child needs to have their age supplied, so we know what kind of bed or cot to provide and what to charge for the room
- [ ] Each room has a maximum occupancy of five. This is, adults plus children per room
- [ ] The Guest and Room selector should always yield a valid room occupancy, disable the button to avoid invalid configurations
- [ ] A user can either choose `Search` to commit the output, or click the `x` on top to reset the selection to the previous valid state
- [ ] It is important that the state of the application can be deep-linked after a user clicked `Search`

#### Non-functional requirements

- [ ] **Device compatibility:** we expect the application to work on both iOS & Android devices with support for the latest versions. The application should scale and work on: iPhone 13 (Pro and Mini) and Android Pixel 5+.
- [ ] **Configurability:** the functional requirements can change in the future, do what you can to make sure the component is easily configurable.
- [ ] **Usability:** should be evident to the user how to use the guest and room selector. We are here to help the user understand what their options are and guide them.
- [ ] **Testability:** we recommend writing automated tests (unit or integration) to verify and document the business logic. We leave it up to you to decide and [document](DOCUMENTATION.md) which parts of the implementation should be covered by tests, given the constraint of time.
- [ ] **State management and scalability:** use any state management mechanism you’d like, keeping in mind how you would scale the architecture of the application as it grows.
- [ ] **Deep-linking and navigation:** even though the home view doesn't need to be implemented in detail, please showcase how you would handle navigation and deep-linking in your application.

### Technology and Frameworks

The list below is based on what we are currently using at FindHotel. If you have any other technologies or frameworks in mind, feel free to use them.

We kindly ask you to [document](DOCUMENTATION.md) your decisions and guide us through how to debug and run the application easily in iOS and Android simulators.

- React Native (optional)
- Expo (optional)
- Redux (optional)
- TypeScript (optional)
- [Emotion](https://github.com/emotion-js/emotion) (optional)

### Evaluation criteria

We will evaluate the assignment according to the following aspects:

- **Correctness:** bug free implementation according to the requirements
- **Code quality:** how clean, readable, organized and future proof your code is
- **Visual implementation:** how close your component implementation is to the supplied designs
- **Quality assurance:** how much confidence your automated tests add to the implementation

### Bonus points

- Allow the input as props and emit a Redux action (or other state management framework of choice) as output
- Exercise the component interactively with an appropriate test library
- Use git best practices, commit messages and such

### Not required

- Server side or API: for this assignment you are not required to build any server side or API logic, you can build all logic in the client application.

---

🍀 Good luck! If you have any questions around the assignment, feel free to reach out :)
