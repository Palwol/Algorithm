#include <stdio.h>
int main()
{
    char string1[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
    char string2[6] = "world";
    char string3[10];

    printf("�̸��� �Է��ϼ���: ");
    scanf("%s", &string3);

    printf("%s\n", string1);
    printf("%s\n", string2);
    printf("%s %s %s�� �ȳ��ϼ��� \n", string1, string2, string3);

    return 0;
}
