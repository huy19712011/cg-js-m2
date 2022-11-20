import {TreeNode} from "../TreeNode";

export interface Tree<E> {
    insert(data: E): TreeNode<E>;
    preoder(node: TreeNode<E>): void;
    getSize(): number;
}