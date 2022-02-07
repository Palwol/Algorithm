#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode{  //트리 노드 구조체 선언
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
}TNode;

TNode* root = NULL;  //루트노드를 가리키는 포인터변수

void init_tree() {
    root = NULL;  //루트노드를 가리키는 주소값이 사라짐.
}

int is_empty_tree() {
    return root==NULL;
}

TNode *get_root() {
    return root;  //루트노드를 가리키는 주소값 반환.
}

TNode *create_tree(int data, TNode* l, TNode* r) {
    TNode* n = (TNode*)malloc(sizeof(TNode));
    n -> data = data;
    n -> left = l;
    n -> right = r;
    return n;  //만들어진 tree의 주소값 반환.
}

int main(){
    init_tree();
    printf("%d\n",is_empty_tree());
    root = create_tree(1, NULL, NULL);

    printf("%d\n",is_empty_tree());
    printf("%d\n",root->data);
    return 0;
}