import {
  combineTransactionSteps,
  Extension,
  findChildren,
  findChildrenInRange,
  getChangedRanges,
} from '@tiptap/core';
import { Fragment, Slice } from 'prosemirror-model';
import { Plugin, PluginKey } from 'prosemirror-state';
import { v4 } from 'uuid';

function removeDuplicates<T>(array: T[], by = JSON.stringify): T[] {
  const seen: Record<string, boolean> = {};
  return array.filter((item: T) => {
    const key = by(item);
    return Object.prototype.hasOwnProperty.call(seen, key) ? false : (seen[key] = true);
  });
}

function findDuplicates(items: any) {
  const filtered = items.filter((el: any, index: number) => items.indexOf(el) !== index);
  const duplicates = removeDuplicates(filtered);
  return duplicates;
}

const UniqueID = Extension.create({
  name: 'uniqueID',
  priority: 10000,
  addOptions() {
    return {
      attributeName: 'id',
      types: [],
      generateID: () => {
        // Use mock ID if tests are running.
        if ((window as any).__TEST_OPTIONS) {
          if ((window as any).__TEST_OPTIONS.mockID === undefined) {
            (window as any).__TEST_OPTIONS.mockID = 0;
          } else {
            (window as any).__TEST_OPTIONS.mockID++;
          }

          return parseInt((window as any).__TEST_OPTIONS.mockID);
        }

        return v4();
      },
      filterTransaction: null,
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          [this.options.attributeName]: {
            default: null,
          },
        },
      },
    ];
  },

  onCreate() {
    if (
      this.editor.extensionManager.extensions.find(
        extension => extension.name === 'collaboration',
      )
    ) {
      return;
    }
    const { view, state } = this.editor;
    const { tr, doc } = state;
    const { types, attributeName, generateID } = this.options;
    const nodesWithoutId = findChildren(doc, node => {
      return types.includes(node.type.name) && node.attrs[attributeName] === null;
    });
    nodesWithoutId.forEach(({ node, pos }) => {
      tr.setNodeMarkup(pos, undefined, {
        ...node.attrs,
        [attributeName]: generateID(),
      });
    });
    tr.setMeta('addToHistory', false);
    view.dispatch(tr);
  },
  addProseMirrorPlugins() {
    let dragSourceElement: any = null;
    let transformPasted = false;
    return [
      new Plugin({
        key: new PluginKey('uniqueID'),
        appendTransaction: (transactions, oldState, newState) => {
          const docChanges =
            transactions.some(transaction => transaction.docChanged) &&
            !oldState.doc.eq(newState.doc);
          const filterTransactions =
            this.options.filterTransaction &&
            transactions.some(tr => {
              var _a, _b;
              return !((_b = (_a = this.options).filterTransaction) === null ||
              _b === void 0
                ? void 0
                : _b.call(_a, tr));
            });
          if (!docChanges || filterTransactions) {
            return;
          }
          const { tr } = newState;
          const { types, attributeName, generateID } = this.options;
          const transform = combineTransactionSteps(oldState.doc, transactions as any);
          const { mapping } = transform;

          const changes = getChangedRanges(transform);

          changes.forEach(({ newRange }) => {
            const newNodes = findChildrenInRange(newState.doc, newRange, node => {
              return types.includes(node.type.name);
            });
            const newIds = newNodes
              .map(({ node }) => node.attrs[attributeName])
              .filter(id => id !== null);
            const duplicatedNewIds = findDuplicates(newIds);
            newNodes.forEach(({ node, pos }) => {
              var _a;

              const id =
                (_a = tr.doc.nodeAt(pos)) === null || _a === void 0
                  ? void 0
                  : _a.attrs[attributeName];
              if (id === null) {
                tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  [attributeName]: generateID(),
                });
                return;
              }

              const { deleted } = mapping.invert().mapResult(pos);
              const newNode = deleted && duplicatedNewIds.includes(id);
              if (newNode) {
                tr.setNodeMarkup(pos, undefined, {
                  ...node.attrs,
                  [attributeName]: generateID(),
                });
              }
            });
          });
          if (!tr.steps.length) {
            return;
          }
          return tr;
        },

        view(view) {
          const handleDragstart = (event: any) => {
            var _a;
            dragSourceElement = (
              (_a = view.dom.parentElement) === null || _a === void 0
                ? void 0
                : _a.contains(event.target)
            )
              ? view.dom.parentElement
              : null;
          };
          window.addEventListener('dragstart', handleDragstart);
          return {
            destroy() {
              window.removeEventListener('dragstart', handleDragstart);
            },
          };
        },
        props: {
          handleDOMEvents: {
            drop: (view, event: any) => {
              var _a;
              if (
                dragSourceElement !== view.dom.parentElement ||
                ((_a = event.dataTransfer) === null || _a === void 0
                  ? void 0
                  : _a.effectAllowed) === 'copy'
              ) {
                dragSourceElement = null;
                transformPasted = true;
              }
              return false;
            },

            paste: () => {
              transformPasted = true;
              return false;
            },
          },

          transformPasted: slice => {
            if (!transformPasted) {
              return slice;
            }
            const { types, attributeName } = this.options;
            const removeId = (fragment: any) => {
              const list: any[] = [];
              fragment.forEach((node: any) => {
                if (node.isText) {
                  list.push(node);
                  return;
                }

                if (!types.includes(node.type.name)) {
                  list.push(node.copy(removeId(node.content)));
                  return;
                }

                const nodeWithoutId = node.type.create(
                  {
                    ...node.attrs,
                    [attributeName]: null,
                  },
                  removeId(node.content),
                  node.marks,
                );
                list.push(nodeWithoutId);
              });
              return Fragment.from(list);
            };

            transformPasted = false;
            return new Slice(removeId(slice.content), slice.openStart, slice.openEnd);
          },
        },
      }),
    ];
  },
});

export { UniqueID, UniqueID as default };
