#include <stdio.h>
#include <stdlib.h>  //malloc, free 함수가 포함된 헤더 파일

struct NODE {
    struct NODE *next;
    int data;
};

void addFirst(struct NODE *target, int data){
    if(target == NULL)
        return;

    struct NODE *newNode = malloc(sizeof(struct NODE));
    if(newNode == NULL)
        return;
    
    newNode->next = target->next;
    newNode->data = data;
    target->next = newNode;
}

void removeFirst(struct NODE *target){
    if(target == NULL)
        return;
    
    struct NODE *removeNode = target->next;
    if(removeNode == NULL)
        return;

        target->next = removeNode->next;
        free(removeNode);
}

int main(){
    struct NODE *head = malloc(sizeof(struct NODE)); //head node 생성(포인터 변수로 생성)
    head->next = NULL;

    addFirst(head, 10);
    addFirst(head, 20);
    addFirst(head, 30);

    struct NODE *curr = head->next;
    while(curr != NULL){
        printf("%d\n", curr->data);
        curr = curr->next;
    }

    removeFirst(head);  //head 다음 node를 제거

    curr = head->next;
    while(curr != NULL){
        printf("%d\n", curr->data);
        curr = curr->next;
    }

    curr = head->next;
    while(curr != NULL){
        struct NODE *next = curr->next;  //현재 노드의 다음 노드 주소를 임시로 저장
        free(curr);  //현재 노드의 메모리 해제
        curr = next;  //포인터에 다음 노드의 주소 저장
    }

    free(head);

    return 0;
}


