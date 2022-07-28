import Table from "@tiptap/extension-table";

const CustomTable = Table.extend({
  addKeyboardShortcuts() {
    return {
      Backspace: () =>
        // can the cursor go back to the left again before exiting the cell?
        this.editor.view.endOfTextblock("left") &&
        // try to go back to the next cell
        (this.editor.commands.goToPreviousCell() ||
          // if that fails, that means we're at the first cell so we delete the table
          this.editor.commands.deleteTable()),
    };
  },
});

//Add keyboard shortcut for deleting a table
export default CustomTable;
