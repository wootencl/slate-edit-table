// @flow
import { Block, Text, type Node, Data } from 'slate';

import type Options from '../options';

/**
 * Create a new cell
 */
function createCell(opts: Options, nodes?: Node[], data?: Data): Block {
    return Block.create({
        type: opts.typeCell,
        nodes: nodes || [createEmptyContent(opts)],
        data: data || Data.create({}) // default to empty
    });
}

/**
 * Create a new default content block
 */
function createEmptyContent(opts: Options): Block {
    return Block.create({
        type: opts.typeContent,
        nodes: [Text.create()]
    });
}

export default createCell;
