#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct NODE {  //노드 구조체 정의
    int data;
    struct NODE *next;
}NODE;

typedef struct Queue {  //큐 구조체 정의
    NODE *front;
    NODE *rear;
    int count;
}Queue;

void InitQueue(Queue *queue){
    queue->front = queue->rear = NULL;
    queue->count = 0;
}

int IsEmpty(Queue *queue){
    return queue->count == 0;  //count가 0이면 1(true)을 반환, 아니면 0(false)을 반환
}

void Enqueue(Queue *queue, int data){
    NODE *now = (NODE*)malloc(sizeof(NODE));  //새 data가 담긴 now NODE 생성
    now->data = data;
    now->next = NULL;

    if(IsEmpty(queue)){
        queue->front = now;
    }
    else{
        queue->rear->next = now;  //queue의 마지막 노드 뒤에 now 노드 추가
    }
    queue->rear = now;  //rear 노드를 now 노드로 변경
    queue->count++;
}

int Dequeue(Queue *queue){
    int re = 0;  //Dequeue 함수의 반환값
    if(IsEmpty(queue)){
        return re;  //큐가 비었다면 0을 반환
    }

    NODE *now = malloc(sizeof(NODE));
    now = queue->front;  //now 노드에 front 노드 저장
    re = now->data;  //now(front) 노드의 data 반환
    queue->front = now->next;  //front 노드에 now의 다음 노드 저장
    free(now);
    queue->count--;
    return re;
}

int main(void){
    int i;
    Queue queue;

    InitQueue(&queue);

    for(i=1; i<=5; i++){
        Enqueue(&queue, i);  //1부터 5까지 큐에 보관
    }
    while(!IsEmpty(&queue)){
        printf("%d ",Dequeue(&queue));  //큐가 빌때까지 dequeue 반복하며 출력
    }
    printf("\n");
    return 0;
}