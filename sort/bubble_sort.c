#include <stdio.h>

int main(){
    int bubble[10] = {6,8,2,9,5,10,3,5,1,7};
    int temp;
    for(int i=0; i<10; i++){
        printf("%d ", bubble[i]);
    }

    for(int i=1; i<10; i++){
        for(int j=0; j<10-i; j++){
            temp = bubble[j];
            if(temp>bubble[j+1]){
            bubble[j] = bubble[j+1];
            bubble[j+1] = temp;
            }
            else continue;
        }
    }

    printf("\n 정렬: ");

    for(int i=0; i<10; i++){
        printf("%d ", bubble[i]);
    }
}