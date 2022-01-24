#include <stdio.h>

int front = 0;
int rear = 0;
int queue[5];

int isEmpty(){
    if(rear<=0 || front>=5){
        printf("ERROR: Queue is empty\n");
        return 1;
    }
    else return 0;
}

int isFull(){
    if(rear>=5){
        printf("ERROR: Queue is full\n");
        return 1;
    }
    else return 0;
}

void inqueue(int data) {
    if(!isFull()){
        queue[rear] = data;
        rear++;
    }
}

int dequeue(){
    if(!isEmpty()){
        int temp = queue[front];
        front++;
        return temp;
    }
}

void printQueue(){
    if(!isEmpty()){
        for(int i=front; i<rear; i++){
            printf("%d ",queue[i]);
        }
        printf("\n");
    }
}

int main(){
    dequeue();
    inqueue(1);
    inqueue(2);
    inqueue(3);
    printQueue();
    dequeue();
    printQueue();
    dequeue();
    inqueue(4);
    inqueue(5);
    inqueue(6);
    printQueue();

    return 0;
}