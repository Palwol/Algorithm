#include <stdio.h>
int main()
{
    int key;
    int insert[10]={6,8,2,9,5,10,3,5,1,7};

    for(int i=1; i<10; i++){
        key = insert[i];
        for(int j=i-1; j>=0; j--){
            if(key<insert[j]) {
                insert[j+1] = insert[j];
                insert[j] = key;
            }
            else {
                insert[j+1] = key;
                break;
            }
        }
    }

    printf("정렬 배열: ");
    for(int i=0; i<10; i++){
        printf("%d ", insert[i]);
    }
    return 0;
}
