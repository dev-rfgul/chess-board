
# Install sympy using: 
# pip install sympy

import sympy as sp

# Define the variable and the function
x = sp.symbols('x')
function = sp.sin(x)

# Calculate the derivative
derivative = sp.diff(function, x)

# Print the result
print("The derivative of sin(x) is:", derivative)