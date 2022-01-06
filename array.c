#include <stdio.h>
int main()
{
    char string1[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
    char string2[6] = "world";
    char string3[10];

    printf("이름을 입력하세요: ");
    scanf("%s", &string3);

    printf("%s\n", string1);
    printf("%s\n", string2);
    printf("%s %s %s님 안녕하세요 \n", string1, string2, string3);

    return 0;
}
