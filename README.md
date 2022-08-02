
![Lobby Logo](https://uploads-ssl.webflow.com/62d5c8c70f4a12f8dedb0687/62da19a5e440cccca0ecba8e_logomark-color-p-500.png)
# Lobby Editor

A familiar, plug and play, extendable rich text editor for React, based on [ProseMirror](https://github.com/ProseMirror/prosemirror), built using [TipTap](https://tiptap.dev/)

## Install

Have a fully functioning editor for your project in no time. First, install using

``` npm install lobby-editor```

or if you are using yarn

> `yarn add lobby-editor`

## Usage

In your App.js import styling or if you are using Next.js import in your _app.js

 ```js
import "lobby-editor/dist/es/styles.css";
```

Use as desired in your project

```js
import { useLobbyEditor, LobbyEditor } from "lobby-editor"
const App = () => {
  const editor = useLobbyEditor();
  return (
    <div className="App">
      <LobbyEditor editor={editor} editable={true} />
    </div>
  )
}
export default App
```
Congrats! You should now have the lobby editor running!

### Extensions
Let's now have a look at adding some custom extensions.

Define your custom extension.

 ```jsx
 // 1. Import the extension
import BulletList from '@tiptap/extension-bullet-list'

// 2. Overwrite the keyboard shortcuts
const CustomBulletList = BulletList.extend({
  addKeyboardShortcuts() {
    return {
      'Mod-l': () => this.editor.commands.toggleBulletList(),
    }
  },
})
 ```

 Next pass it to `createLobbyEditor` like this

  ```jsx
  let editor = useLobbyEditor({
    customExtensions: [
      CustomBulletList(),
      ...
    ]
  })
  ```

Have a look at the [getting started to see more example](https://beta.lobby.so//documentId?id=cl3syyyvl148024e0ed4159jpt).

#### Note
> setContent needs to be inside a useEffect because every time the editor is typed in/updated it rerenders the entire component and setContent will be called indefinitely
## Further Documentation

See More in [Lobby](https://beta.lobby.so/documentId?id=cl338bju797754g7s90gs4tqu).

## Contributions

Contributions and recommendations are always welcome! Open an issue or discussion in GitHub and outline your ideas. Our team will promptly provide feedback.

 #### Code linting

An eslint config ensures a consistent code style. To check for errors, run 
```bash
yarn lint
```
or
```bash
npm run lint
```

 Make sure it’s passing before sending a pull request.

Further Questions?

Message us in [Discord](https://discord.gg/tBrTJeYQCm) or Create a discussion [on GitHub](https://github.com/lobbylabs/lobby-editor/discussions)
## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:
[Discuss Lobby on GitHub](https://github.com/lobbylabs/lobby-editor/discussions)

Meet the team and introduce yourself to other devs in the community:
[Discuss Lobby on Discord](https://discord.gg/tBrTJeYQCm)

