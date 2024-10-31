# Biggie Size
def make_it_big(arr):
    for i in range(len(arr)):
        # Change positive numbers to "big"
        if arr[i] > 0:
            arr[i] = "big"
    return arr


# Example usage
print(make_it_big([-1, 3, 5, -5]))  # Output: [-1, "big", "big", -5]


# Print Low, Return High
def print_low_return_high(arr):
    # Print the lowest value
    print(min(arr))
    # Return the highest value
    return max(arr)


# Example usage
print(print_low_return_high([1, 2, 3, 4, 5]))  # Output: 1 then 5


# Print One, Return Another
def print_one_return_another(arr):
    # Print the second-to-last value
    print(arr[-2])
    # Return the first odd value
    for val in arr:
        if val % 2 != 0:
            return val


# Example usage
print(print_one_return_another([2, 4, 6, 8, 9]))  # Output: 8 then 9


# Double Vision
def double(arr):
    # Return a new array with values doubled
    return [x * 2 for x in arr]


# Example usage
print(double([1, 2, 3]))  # Output: [2, 4, 6]


# Count Positives
def count_positives(arr):
    # Count the number of positive values
    count = len([x for x in arr if x > 0])
    # Replace the last value with the count
    arr[-1] = count
    return arr


# Example usage
print(count_positives([-1, 1, 1, 1]))  # Output: [-1, 1, 1, 3]


# Evens and Odds
def evens_and_odds(arr):
    odd_count = 0
    even_count = 0
    for val in arr:
        # Check for odd values
        if val % 2 != 0:
            odd_count += 1
            even_count = 0
        # Check for even values
        else:
            even_count += 1
            odd_count = 0
        # Print message if three odd values in a row
        if odd_count == 3:
            print("That’s odd!")
        # Print message if three even values in a row
        if even_count == 3:
            print("Even more so!")


# Example usage
evens_and_odds([1, 3, 5, 2, 4, 6, 8])  # Output: That’s odd! then Even more so!


# Increment the Seconds
def increment_the_seconds(arr):
    for i in range(len(arr)):
        # Add 1 to odd elements
        if arr[i] % 2 != 0:
            arr[i] += 1
        # Print all values
        print(arr[i])
    return arr


# Example usage
print(increment_the_seconds([1, 2, 3, 4, 5]))  # Output: 2, 2, 4, 4, 6


# Previous Lengths
def previous_lengths(arr):
    for i in range(len(arr) - 1, 0, -1):
        # Replace each string with the length of the previous string
        arr[i] = len(arr[i - 1])
    # First element remains unchanged
    return arr


# Example usage
print(
    previous_lengths(["hello", "world", "python", "code"])
)  # Output: ["hello", 5, 5, 6]


# Add Seven to Most
def add_seven_to_most(arr):
    # Return a new array with all values except first, adding 7 to each
    return [x + 7 for x in arr[1:]]


# Example usage
print(add_seven_to_most([1, 2, 3, 4]))  # Output: [9, 10, 11]


# Reverse Array
def reverse(arr):
    # Reverse values in-place
    arr.reverse()
    return arr


# Example usage
print(reverse([3, 1, 6, 4, 2]))  # Output: [2, 4, 6, 1, 3]


# Outlook: Negative
def outlook_negative(arr):
    # Return a new array with negative values
    return [-abs(x) for x in arr]


# Example usage
print(outlook_negative([1, -3, 5]))  # Output: [-1, -3, -5]


# Always Hungry
def always_hungry(arr):
    # Flag to check if "food" is found
    food_found = False
    for val in arr:
        if val == "food":
            print("yummy")
            food_found = True
    # If no "food" found, print "I'm hungry"
    if not food_found:
        print("I'm hungry")


# Example usage
always_hungry(["banana", "apple", "food"])  # Output: yummy
always_hungry(["banana", "apple"])  # Output: I'm hungry


# Swap Toward the Center
def swap_toward_center(arr):
    # Swap first and last, third and third-to-last, etc.
    for i in range(0, len(arr) // 2, 2):
        arr[i], arr[-i - 1] = arr[-i - 1], arr[i]
    return arr


# Example usage
print(
    swap_toward_center([true, 42, "Ada", 2, "pizza"])
)  # Output: ["pizza", 42, "Ada", 2, true]
print(swap_toward_center([1, 2, 3, 4, 5, 6]))  # Output: [6, 2, 4, 3, 5, 1]


# Scale the Array
def scale_the_array(arr, num):
    # Multiply each array value by num
    return [x * num for x in arr]


# Example usage
print(scale_the_array([1, 2, 3], 3))  # Output: [3, 6, 9]
