# Lobby Editor

A familiar, plug and play, extendable rich text editor, based on [ProseMirror](https://github.com/ProseMirror/prosemirror), built using [TipTap](https://tiptap.dev/)

## Examples

Have a look at the [getting started to see usage example](https://beta.lobby.so/documentId?id=cl338ojfd113664g7s9gga02rh).

## Documentation

The full documentation is available in [the Lobby](https://beta.lobby.so/documentId?id=cl338bju797754g7s90gs4tqu).

## Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:
[Discuss Lobby on GitHub](https://github.com/lobbylabs/lobby-editor/discussions)

Meet the team and introduce yourself to other devs in the community:
[Discuss Lobby on Discord](https://discord.gg/tBrTJeYQCm)

## Notes

setContent needs to be inside a useEffect because everytime the editor is typed in/updated it rerenders the entire component and setContent will be called indefinitely
