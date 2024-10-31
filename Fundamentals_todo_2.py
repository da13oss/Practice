# Fundamentals_todo_2


# Countdown
def countdown(n):
    # Create a list from n down to 0
    return list(range(n, -1, -1))


# Example usage
print(countdown(5))  # Output: [5, 4, 3, 2, 1, 0]


# Print and Return
def print_and_return(arr):
    # Print the first value in the array
    print(arr[0])
    # Return the second value in the array
    return arr[1]


# Example usage
print(print_and_return([1, 2]))  # Output: 1 then 2


# First Plus Length
def first_plus_length(arr):
    # Sum the first value and the array length
    return arr[0] + len(arr)


# Example usage
print(first_plus_length([1, 2, 3]))  # Output: 4


# Values Greater than Second
def values_greater_than_second(arr):
    # Filter values greater than the second element
    result = [x for x in arr if x > arr[1]]
    # Print the result
    print(result)
    # Return the length of the result
    return len(result)


# Example usage
print(values_greater_than_second([1, 3, 5, 7, 9, 13]))  # Output: [5, 7, 9, 13] then 4


# Values Greater than Second, Generalized
def values_greater_than_second_general(arr):
    # Check if the array has at least 2 elements
    if len(arr) < 2:
        return []
    # Filter values greater than the second element
    result = [x for x in arr if x > arr[1]]
    # Print the result
    print(result)
    # Return the result
    return result


# Example usage
print(values_greater_than_second_general([1, 2, 3, 4]))  # Output: [3, 4]


# This Length, That Value
def this_length_that_value(num1, num2):
    # Check if both numbers are the same
    if num1 == num2:
        print("Jinx!")
    # Return an array of length num1 with each value num2
    return [num2] * num1


# Example usage
print(this_length_that_value(4, 4))  # Output: Jinx! then [4, 4, 4, 4]


# Fit the First Value
def fit_the_first_value(arr):
    # Check if first value is greater than array length
    if arr[0] > len(arr):
        print("Too big!")
    # Check if first value is less than array length
    elif arr[0] < len(arr):
        print("Too small!")
    # Otherwise, it's just right
    else:
        print("Just right!")


# Example usage
fit_the_first_value([3, 2, 1])  # Output: Just right!


# Fahrenheit to Celsius
def fahrenheit_to_celsius(fDegrees):
    # Convert Fahrenheit to Celsius
    return (fDegrees - 32) * 5 / 9


# Example usage
print(fahrenheit_to_celsius(98.6))  # Output: 37.0


# Celsius to Fahrenheit
def celsius_to_fahrenheit(cDegrees):
    # Convert Celsius to Fahrenheit
    return cDegrees * 9 / 5 + 32


# Example usage
print(celsius_to_fahrenheit(0))  # Output: 32.0

# Check if Fahrenheit and Celsius are equal at a certain value
for c in range(200, -101, -1):
    f = celsius_to_fahrenheit(c)
    if c == f:
        print(f"Celsius and Fahrenheit values are equal at: {c}")
        break
