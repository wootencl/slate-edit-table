import expect from 'expect';

export default function(plugin, change) {
    const cursorBlock = change.state.document.getDescendant('anchor');
    const initial = change.state.change({ save: false });
    initial.moveToRangeOf(cursorBlock);
    const toTest = initial.state.change();
    toTest.call(plugin.changes.removeTable).undo();

    // Back to previous cursor position
    expect(toTest.state.startBlock.text).toEqual('Before');

    return toTest;
}
