#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode{  //트리 노드 구조체 선언
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
}TNode;

TNode* root = NULL;  //루트노드를 가리키는 포인터변수

void init_tree() {  //트리 초기화
    root = NULL;
}

int is_empty_tree() {  //트리가 비어있는지 확인
    return root==NULL;
}

TNode *get_root() {//루트노드를 가리키는 주소값 반환.
    return root;
}

TNode *create_tree(int data, TNode* l, TNode* r) {  //트리 생성
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

TNode* search(TNode *n, int key){  //트리에서 key값 탐색, 해당 node의 주소값 return
    if(n == NULL) return NULL;
    else if(key == n->data) return n;
    else if(key < n->data) return search(n->left, key);
    else return search(n->right, key);
}

void insert(TNode* r, TNode* n){  //삽입연산, n이 새로 만들려는 노드, r은 루트부터 시작
    if(n->data == r->data) return;  //data가 중복이면 종료
    else if(n->data < r->data){
        if(r->left == NULL) r->left = n;
        else insert(r->left, n);
    }
    else{
        if(r->right == NULL) r->right = n;
        else insert(r->right, n);
    }
}

void delete(TNode *parent, TNode *node){  //삭제연산, 삭제할 노드와 그 부모 노드를 받음
    TNode *child, *succ, *succp;
    if(node->left == NULL && node -> right == NULL){  //단말노드 삭제
        if(parent == NULL) root = NULL;
        else{
            if(parent->left == node) parent->left = NULL;
            else parent->right = NULL;
        }
    }

    else if(node->left == NULL || node->right == NULL){  //자식노드 1개인 경우
        child = (node->left != NULL) ? node->left : node->right;
        if(node == root) root = child;  //삭제할 노드가 루트였다면 자식노드가 루트가 됨
        else{
            if(parent->left == node) parent->left = child;
            else parent->right = child;
        }
    }

    else{  //자식노드 2개인 경우
        succp = node;
        succ = node->right;
        while(succ->left != NULL){
            succp = succ;
            succ = succ->left;  //succ는 오른쪽 서브트리에서 가장 왼쪽 노드가 되고, succp는 succ의 부모 노드가 됨.
        }
        if(succp->left == succ) succp->left = succ->right;
        else succp->right = succ->right;

        node->data = succ->data;
        node = succ;
    }
    free(node); //node 삭제
}

int main(){
    TNode *a, *b, *c, *d, *e, *f, *g, *h;
    init_tree();

    g = create_tree(7,NULL,NULL);
    h = create_tree(8,NULL,NULL);
    e = create_tree(5,g,h);
    f = create_tree(6,NULL,NULL);
    d = create_tree(4,NULL,NULL);
    b = create_tree(2,d,NULL);
    c = create_tree(3,e,f);
    a = create_tree(1,b,c);
    root = a;

    printf("%d\n",count_node(root));
    printf("%d\n",count_leaf(root));
    printf("%d\n",calc_height(root));
    return 0;
}