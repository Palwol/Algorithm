#include <stdio.h>

char stack[5];
int top = -1;

int isEmpty() {
    if(top<=-1){
        printf("ERROR: Stack is Empty \n");
        return 1;
    }
    else return 0;
}

int isFull() {
    if(top>=4){
        printf("ERROR: Stack is Full \n");
        return 1;
    }
    else return 0;
}

char peek(){
    if(!isEmpty()){
        return stack[top];
    }
}

void push(char data){
    if(!isFull()){
        stack[top+1] = data;
        top++;
    }
}

char pop() {
    if(!isEmpty()){
        char temp = stack[top];
        top--;
        return temp;
    }
}

void printStack(){
    if(!isEmpty()){
        for(int i=0; i<=top; i++){
            printf("%c",stack[i]);
        }
        printf("\n");
    }
}

int main() {
    push('a');
    push('b');
    printf("%c \n",peek());
    pop();
    printf("%c \n",peek());
    pop();
    pop();
    push('a');
    push('a');
    push('c');
    push('d');
    push('b');
    push('a');
    printStack();
    
    return 0;
}
