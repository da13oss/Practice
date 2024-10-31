# Sigma Function
def sigma(num):
    return sum(range(1, num + 1))


# Factorial Function
def factorial(num):
    result = 1
    for i in range(1, num + 1):
        result *= i
    return result


# Star Art Functions
def drawLeftStars(num):
    print("*" * num + " " * (75 - num))


def drawRightStars(num):
    print(" " * (75 - num) + "*" * num)


def drawCenteredStars(num):
    spaces = (75 - num) // 2
    print(" " * spaces + "*" * num + " " * (75 - num - spaces))


# Character Art Functions
def drawLeftChars(num, char):
    print(char * num + " " * (75 - num))


def drawRightChars(num, char):
    print(" " * (75 - num) + char * num)


def drawCenteredChars(num, char):
    spaces = (75 - num) // 2
    print(" " * spaces + char * num + " " * (75 - num - spaces))


# Example Usage
print(sigma(5))  # Output: 15
print(factorial(5))  # Output: 120
drawLeftStars(10)  # **********
drawRightStars(
    10
)  #                                                                **********
drawCenteredStars(10)  #                                   **********
drawLeftChars(10, "=")  # ==========
drawRightChars(
    10, "="
)  #                                                                ==========
drawCenteredChars(10, "=")  #                                   ==========
