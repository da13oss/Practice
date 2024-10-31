# Only Keep the Last Few
def keep_last_few(arr, X):
    # Keep only the last X elements
    arr = arr[-X:]
    return arr


# Example usage
print(keep_last_few([2, 4, 6, 8, 10], 3))  # Output: [6, 8, 10]


# Math Help
def x_intercept(M, B):
    # Calculate the X-intercept (where Y=0)
    return -B / M


# Example usage
print(x_intercept(2, 3))  # Output: -1.5

# Poor Kenny
import random


def what_happens_today():
    # Randomly determine today's outcome
    disasters = ["volcano", "tsunami", "earthquake", "blizzard", "meteor"]
    probabilities = [0.1, 0.15, 0.2, 0.25, 0.3]
    return random.choices(disasters, probabilities)[0]


# Example usage
print(what_happens_today())  # Output: Randomly one of the disasters


# What Really Happened?
def what_really_happens_today():
    disasters = ["volcano", "tsunami", "earthquake", "blizzard", "meteor"]
    probabilities = [0.1, 0.15, 0.2, 0.25, 0.3]
    events_today = [
        disaster
        for disaster, prob in zip(disasters, probabilities)
        if random.random() < prob
    ]
    return events_today if events_today else ["Nothing happened today"]


# Example usage
print(
    what_really_happens_today()
)  # Output: List of disasters or ["Nothing happened today"]


# Soaring IQ
def final_iq(starting_iq):
    # Calculate Bogdan's final IQ after 98 days
    iq = starting_iq
    for day in range(1, 99):
        iq += 0.01 * day
    return iq


# Example usage
print(final_iq(101))  # Output: 150.5


# Letter Grade
def letter_grade(score):
    # Determine the letter grade based on the score
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"
    print(f"Score: {score}. Grade: {grade}")


# Example usage
letter_grade(88)  # Output: Score: 88. Grade: B


# More Accurate Grades
def more_accurate_grades(score):
    # Determine the letter grade with + and - signs
    if score >= 98:
        grade = "A"
    elif score >= 90:
        grade = "A"
    elif score >= 88:
        grade = "B+"
    elif score >= 80:
        grade = "B"
    elif score >= 78:
        grade = "C+"
    elif score >= 70:
        grade = "C"
    elif score >= 68:
        grade = "D+"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"

    # Check for - signs in the bottom two percent of each grade
    if score in range(90, 92):
        grade = "A-"
    elif score in range(80, 82):
        grade = "B-"
    elif score in range(70, 72):
        grade = "C-"
    elif score in range(60, 62):
        grade = "D-"

    print(f"Score: {score}. Grade: {grade}")


# Example usage
more_accurate_grades(88)  # Output: Score: 88. Grade: B+
