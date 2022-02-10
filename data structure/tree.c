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

int count_node(TNode* n){  //노드의 개수
    if(n == NULL) return 0;
    return 1 + count_node(n->left) + count_node(n->right);  //노드가 있으면 +1, 없으면 +0
}

int count_leaf(TNode* n){  //단말노드의 개수
    if(n == NULL) return 0;
    if(n->left == NULL && n->right == NULL) return 1;
    else return count_leaf(n->left) + count_leaf(n->right);  //왼쪽,오른쪽 자식 둘다 없으면 +1, 하나라도 있으면 내려감.
}

int calc_height(TNode* n){  //트리의 높이
    int hleft, hright;
    if(n == NULL) return 0;
    hleft = calc_height(n->left);
    hright = calc_height(n->right);
    return (hleft > hright)? hleft+1 : hright+1;  //왼쪽,오른쪽 높이 중 큰걸 고름.
}

int main(){
    TNode *b, *c, *d, *e, *f, *g, *h;
    init_tree();

    g = create_tree(7,NULL,NULL);
    h = create_tree(8,NULL,NULL);
    e = create_tree(5,g,h);
    f = create_tree(6,NULL,NULL);
    d = create_tree(4,NULL,NULL);
    b = create_tree(2,d,NULL);
    c = create_tree(3,e,f);
    root = create_tree(1,b,c);

    printf("%d\n",count_node(root));
    printf("%d\n",count_leaf(root));
    printf("%d\n",calc_height(root));
    return 0;
}