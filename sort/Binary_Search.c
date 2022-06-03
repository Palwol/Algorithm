#include <stdio.h>

int main(void)
{
    int num = 7;
    int result = 0;

    int arr[10] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 21};

    int left = 0;
    int right = sizeof(arr) / sizeof(int) - 1;
    int mid = (left + right) / 2;

    while (left < right)
    {
        if (num > arr[mid])
        { //찾으려는 값이 더 큰 경우
            left = mid + 1;
            mid = (left + right) / 2;
        }
        else if (num < arr[mid])
        { //찾으려는 값이 더 작은 경우
            right = mid - 1;
            mid = (left + right) / 2;
        }
        else
        {
            result = mid;
            break;
        }
    }

    return arr[result];
}