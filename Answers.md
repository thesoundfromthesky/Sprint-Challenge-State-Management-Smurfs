1. What problem does the context API help solve?
- Context let us share values among components without using props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- actions contain business logic
- reducers resolve all the actions and update state
- store keeps all reducers and let components access state from single source of truth

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is available for every components. Component state is available only for component itself    and child components that receive props. I would use Application state if I have to go through many layers of components to pass down props. If prop passing is simple, I would use component state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
-  thunk intercepts dispatch and takes care of async logic. action-creators need to return inner function with dispatch parameter to work with thunk.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
-  Redux is my favorite state management. It takes care of the burden of making smooth data flow.